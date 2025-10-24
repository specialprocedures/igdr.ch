# Building a Resilient Data Pipeline

## Overview

In Spring 2025, I delivered a data engineering project for a client in the communications space. This article provides an overview of the project brief, outlines some of the challenges faced and how I addressed them, and discusses the technologies and practices I used to ensure a robust final product.

## The brief

The client was transitioning from a legacy, PowerApps-based media-tracking database to Google Cloud Platform (GCP). The overall goals of the project were as follows:

- _Synchronization_ of user-input data from Azure to a GCP-hosted PostGres instance,
- _Data enrichment_ via an external subscription API and web-scraping,
- and a mechanism for _bulk upload_ of data to Azure, which would then be synchronized and enriched along with user-input data.

The system replaced a pre-existing pipeline, which performed the synchronization and enrichment steps via a cron-triggered Python script, hosted on a Cloud Compute instance on GCP.

The client team were already using Cloud Run Functions in other projects, so it was agreed that this project would use the same approach.

## Challenges

### Messy Schema

The Dataverse contains a _large number of undocumented tables_, few of which contain relevant data, and with _data types that do not easily translate_ into postgres equivalents.

Data sources used during provide _inconsistent_ data. A key consideration was that the previous iteration had exposed [named entities](https://en.wikipedia.org/wiki/Named-entity_recognition) which were only available via one data source, necessitating a named entity recognition step for other sources.

### Speed and efficiency

Individual function calls _should be fast_. Cloud Run Functions are billed by the time a function is running, workloads may be variable, and the initial load contains multiple years worth of data to process.

Enrichment processes are _unavoidably slow_, involving multiple external API calls and scraping processes per record.

Enrichment processes are _unavoidably failure prone_, involving poor-quality input data, unreliable APIs, and web-scraping of hundreds of different domains, many of which have scrape protection.

- Some API calls _consume tokens_ and are subject to _rate limits_, necessitating an efficient architecture and limiting opportunities for parallel processing

## Function Architecture

The system consists of seven specialized microservices:

1. **schema**: Dynamic schema generation and table creation
2. **mirror**: Incremental data synchronization with change detection
3. **dispatcher**: Batch processing orchestration for enrichment steps
4. **scraper**: Multi-strategy web scraping and content enrichment
5. **gardener**: Writes to database from staging, quality checks
6. **bulk_insert**: Wrapper around the Dataverse API for bulk insertions
7. **bulk_insert_xlsx**: Allows team to insert records via an Excel template

## Approach

### Dynamic schema generation

Dynamically identified tables for replication, generating table generation SQL mapping Dataverse types to SQL. This approach required careful processing of source data and rigorous testing, but ensured completeness of replication, whilst being robust to schema changes in the source database.

### Separating processes and data

Separated replication tables from enrichment tables, keeping a single source of truth that's only modified on changes in the source data, whilst allowing for flexibility in testing, deployment and table management downstream.

Separated data enrichment processes from database writes via a staging table, offloading deduplication and final data validation to a separate function.

### Batch processing

Used Cloud Task queues to handle data enrichment processes in batches. Batch sizes of 100 were chosen based on the maximum size of an individual API call.

### Smart scrapers

Utilized a class-based approach to data enrichment, using inheritance to create a unified API for various data-sources. This approach allowed us to pass data through a series of classes of descending preference during enrichment, whilst allowing for easy addition of future data sources.

### Core Technologies

The solution leveraged a modern cloud-native stack:

**Backend Infrastructure:**

- **Google Cloud Functions (Gen 2)**: Serverless compute with Python 3.12 runtime
- **Google Cloud SQL (PostgreSQL 14)**: Primary data storage with robust querying capabilities
- **Google Cloud Storage**: Schema files, templates, and bulk upload
- **Google Cloud Tasks**: Reliable job queuing and batch processing
- **Google Cloud Secret Manager**: Secure credential management

**Data Processing Stack:**

- **SQLAlchemy**: ORM for database operations with connection pooling
- **Pandas**: Table manipulation and data operations during replication
- **newsplease**: Web scraping and content extraction
- **newsapi.ai**: External content analysis and concept extraction

**Integration Layer:**

- **Microsoft PowerApps/Dataverse**: Source system integration
- **MSAL (Microsoft Authentication Library)**: Azure AD authentication
- **Validators**: URL and data validation
- **Timeout-Decorator**: Robust timeout handling

## Ensuring Robustness and Quality

### Infrastructure Resilience

**Multi-Environment Strategy**: Separate development and production environments with identical infrastructure patterns ensure thorough testing before deployment.

**Service Account Security**: Dedicated service accounts with least-privilege access ensure secure inter-service communication while maintaining operational flexibility.

**Comprehensive Error Handling**: Every function includes detailed error handling with structured logging, timeout management, and graceful degradation.

### Data Quality Assurance

**Schema Validation**: Dynamic schema generation ensures database structures always match the source system, preventing data inconsistencies.

**Incremental Processing**: The mirror function uses change detection to process only modified records, reducing processing time and potential errors.

**Multi-Strategy Scraping**: The scraper implements multiple fallback strategies (NewsAPI database lookup, direct crawling, News-Please scraper) to maximize content extraction success rates.

**Batch Processing**: Large operations are broken into manageable chunks (100 items per batch) to prevent timeouts and enable better error isolation.

### Operational Excellence

**Deployment Automation**: Custom bash scripts (`deploy.sh`, `call.sh`, `manage.sh`) provide consistent deployment processes with environment-specific configurations.

**Monitoring and Logging**: Comprehensive logging throughout the system enables detailed debugging and performance monitoring.

**Connection Management**: SQLAlchemy connection pooling and timeout configurations ensure efficient database resource utilization.

**Secret Management**: All sensitive credentials are stored in Google Cloud Secret Manager with automatic rotation capabilities.

## Development Process

### Quality Assurance Practices

**Modular Design**: The shared library architecture ensures consistency across all functions while enabling independent development and testing.

**Environment Isolation**: Separate development and production environments with identical configurations enable thorough testing without production impact.

**Comprehensive Testing**: Each function can be individually deployed and tested through the management scripts before full system deployment.

**Database Operations**: Safe database operations with explicit confirmation requirements for destructive actions (database reset functionality).

### Deployment Strategy

**Atomic Deployments**: Individual function deployment capabilities enable targeted updates without system-wide disruption.

**Rollback Capability**: Clear deployment tracking and individual function management enable quick rollback if issues arise.

## Performance Optimization

### Scalability Solutions

**Serverless Architecture**: Cloud Functions automatically scale based on demand, handling varying workloads without manual intervention.

**Batch Processing**: The dispatcher-scraper pattern processes large datasets in manageable chunks, preventing timeouts and memory issues.

**Connection Pooling**: SQLAlchemy connection pooling minimizes database connection overhead and improves performance.

**Storage Optimization**: Cloud Storage integration for schema files and reference data reduces function memory requirements.

### Processing Efficiency

**Change Detection**: The mirror function only processes modified records, significantly reducing processing time for large datasets.

**Parallel Processing**: Multiple scraper instances can process different batches simultaneously, improving overall throughput.

**Caching Strategy**: Schema files are cached in Cloud Storage, reducing API calls and improving response times.

## Lessons Learned

This project highlighted several key considerations for building resilient data pipelines:

1. **Error Handling is Critical**: Comprehensive error handling and timeout management are essential for reliable operation in cloud environments.

2. **Batch Processing**: Breaking large operations into smaller chunks prevents timeouts and enables better error recovery.

3. **Multi-Strategy Approaches**: Having multiple fallback strategies (as in the scraper) significantly improves success rates.

4. **Environment Parity**: Identical development and production environments are crucial for reliable deployments.

5. **Security First**: Proper secret management and service account configurations are fundamental to system security.

---

_This project showcases expertise in cloud architecture, data engineering, and Python development, with particular emphasis on building resilient systems that handle real-world complexity and scale._
