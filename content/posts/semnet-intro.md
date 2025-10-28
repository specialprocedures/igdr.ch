---
title: "Introducing Semnet: Semantic networks from embeddings"
date: 2025-10-24T11:10:36+08:00
draft: false
featured: true
language: en
featured_image: ../assets/images/global/cosmo_semnet.png
summary: Semnet constructs network structures from embeddings, enabling graph-based analysis and operations over embedded documents, images, and more.
description: Semnet constructs graph structures from embeddings, enabling graph-based analysis and operations over embedded documents, images, and more.
author: Ian
authorimage: ../assets/images/global/ian-face.png
categories: Work
tags: ["Semnet", "NLP"]
math: true
---

I'm happy to introduce Semnet, a small Python library which efficiently constructs graph structures from embeddings.

The name "Semnet" derives from _[semantic network](https://en.wikipedia.org/wiki/Semantic_network)_, as it was initially designed for an NLP use-case, but the tool will work well with any form of embedded document (e.g., images, audio, even or [graphs](https://arxiv.org/abs/1707.05005)).

In this post, I'll quickly run over some of the features, before talking about Semnet's origins and how it might be useful. I'll then dig in to how graphs are constructed, before closing with a few examples of it in action.

It's a pretty dense and technical piece. If you'd just like to see something cool you can do with Semnet, [click here](https://cosmograph.app/run/?data=https://raw.githubusercontent.com/specialprocedures/semnet/refs/heads/main/examples/quotes_edges.csv&meta=https://raw.githubusercontent.com/specialprocedures/semnet/refs/heads/main/examples/quotes_nodes.csv&source=source&target=target&gravity=0.25&repulsion=1&repulsionTheta=1.15&linkSpring=1&linkDistance=10&friction=0.85&renderLabels=true&renderHoveredLabel=true&renderLinks=true&nodeSizeScale=1&linkWidthScale=1&linkArrowsSizeScale=1&nodeSize=size-degree_centrality&nodeColor=color-top_terms&nodeLabel=label&linkWidth=width-default&linkColor=color-default&), or the image below for an interactive visualisation of a collection of quotes.

[![Cosmograph static image](images/posts/semnet/cosmo-static.png)](https://cosmograph.app/run/?data=https://raw.githubusercontent.com/specialprocedures/semnet/refs/heads/main/examples/quotes_edges.csv&meta=https://raw.githubusercontent.com/specialprocedures/semnet/refs/heads/main/examples/quotes_nodes.csv&source=source&target=target&gravity=0.25&repulsion=1&repulsionTheta=1.15&linkSpring=1&linkDistance=10&friction=0.85&renderLabels=true&renderHoveredLabel=true&renderLinks=true&nodeSizeScale=1&linkWidthScale=1&linkArrowsSizeScale=1&nodeSize=size-degree_centrality&nodeColor=color-top_terms&nodeLabel=label&linkWidth=width-default&linkColor=color-default&)
_Graph built with Semnet and visualised in Cosmograph. Data: [m-ric](https://huggingface.co/datasets/m-ric/english_historical_quotes/) via [Hugging Face](huggingface.co)._

## Features

Semnet is a relatively small library, which does just one thing: efficiently construct network structures from embeddings.

Its key features are:

- Rapid conversion of large embedding collections to graph format, with nodes as documents and edges as document similarity.
- It's fast and memory efficient: Semnet uses [Annoy](https://github.com/spotify/annoy) under the hood to perform efficient pair-wise distance calculations, allowing for million-node networks to be constructed in minutes on consumer hardware.
- Graphs are returned as [NetworkX](https://networkx.org) objects, opening up a wide range of algorithms for your project.
- Pass arbitrary metadata during graph construction or update it later in NetworkX.
- Control graph construction by setting distance measures, similarity cut-offs, and limits on outbound edges per node.
- Easily convert to [pandas](https://pandas.pydata.org/) for downstream use.

Semnet may be used for:

- **Graph algorithms**: enrich your data with [communities](https://networkx.org/documentation/stable/reference/algorithms/community.html), [centrality](https://networkx.org/documentation/stable/reference/algorithms/centrality.html) and [much more](https://networkx.org/documentation/stable/reference/algorithms/) for use in NLP, search, RAG and context engineering.
- **Deduplication**: remove duplicate records (e.g., "Donald Trump", "Donald J. Trump) from datasets.
- **Exploratory data analysis and visualisation**, [Cosmograph](https://cosmograph.app/) works brilliantly for large corpora.

## Why use graph structures?

By opening up the NetworkX API to embedded documents, Semnet provides a new suite of tools and metrics for workflows in domains such as NLP, RAG, search and context engineering.

For most use cases, Semnet will work best as a complement to traditional workflows, rather than as a replacement. Its power lies in encoding information about relationships between data points, which can be used as features in downstream tasks.

Approaches will vary depending on your use case, but benefits include:

- Representing indirect connections that aren't encoded in traditional workflows
- Examining graph structure around a node may provide richer context than just its nearest neighbours
- Centrality measures that capture an entire graph or subgraph structure, rather than just a position in multi-dimensional space
- It's simpler to add new nodes, edges and data, compared to a structure based on dimensionality reduction (e.g., UMAP) which may be unstable during recomputation
- Some very pretty charts

## What problem does Semnet solve?

Graph construction entails finding pairwise relationships (edges) between entities (nodes) in a dataset.

For large corpora, scaling problems rapidly become apparent as the number of possible pairs in a set scales quadratically.

$$pairs = \frac{n(n-1)}{2}$$

### Naive approach

If we were to naively attempt to construct a graph from a modestly-sized set of documents we'd hit problems rapidly. For example, 10,000 documents is about 50 million pairs to check, for 100,000 it's around 5 billion!

Iterating over each pair is of course very slow. Faster approaches exist, but here we run into a larger problem: it's memory intensive:

```python
from sklearn.metrics import DistanceMetric
import numpy as np

dist = DistanceMetric.get_metric("euclidean")

# Generate 10_000 random embeddings
embeddings = np.random.rand(100_000, 768)
dist_scores = dist.pairwise(embeddings)

>> MemoryError: Unable to allocate 74.5 GiB for an array
   with shape (100000, 100000) and data type float64
```

### With Semnet

Semnet solves this scaling problem using [Approximate Nearest Neighbours](https://en.wikipedia.org/wiki/Nearest_neighbor_search#Approximate_nearest_neighbor) search with [Annoy](https://github.com/spotify/annoy).

Instead of making comparisons between each document in the corpus, Semnet indexes the embeddings, iterates over each one, and returns a `top_k` best matches from within their neighbourhood.

Trying this again on the same rig with Semnet.

```python
from semnet import SemanticNetwork

# Kick off timer again
start_time = time.time()

# Make 100,000 copies this time
embeddings = np.random.rand(100_000, 768)

# Build semantic network
semnet = SemanticNetwork(thresh=0.4, top_k=5)
G = semnet.fit_transform(embeddings)

# Close off the timer
end_time = time.time()
print(f"Processing time: {end_time - start_time:.2f} seconds")

>> Processing time: 24.26 seconds
```

We're not only able to process all the embeddings without crashing our computer, but it's done in under 30 seconds.

## Graph construction

Constructing a graph with all possible pairs and distances presents a further scaling challenge, this time when managing the graph after pairs are found.

A fully-connected graph with 10,000 nodes would also have ~50 million edges, making relatively simple algorithms challenging on consumer hardware.

Semnet provides two parameters during graph construction to address this problem:

#### `thresh`

The similarity threshold at which two nodes are considered to have an edge. Any pairs with a similarity lower than `thresh` are discarded.

`thresh` limits how similar two documents can be to be considered related.

![Similarity relationships at different thresholds](images/posts/semnet/semantic_network_thresholds.png)

`thresh` is the most important parameter in determining graph density, particularly at larger scales.

Lower values will result in large numbers of increasingly tenuous connections (false positives), higher values will result in more false negatives and orphan nodes.

#### `top_k`

Passed to the `AnnoyIndex`, `top_k` limits the number of results returned during search, and thus the number of out-bound edges a single node may possess.

`top_k` limits the maximum number of connections a graph can have.

![Similarity relationships at different top_k](images/posts/semnet/semantic_network_top_k.png)

Higher values of `top_k` quickly result in heavily connected networks, but are strongly limited by `thresh`.

`top_k` is passed to `Annoy` during search and affects performance. Higher values will take longer to run, given the larger search space required.

## Examples

### Visualisation

```python

# Export to pandas for visualisation with cosmograph
# Export using standalone function (recommended)
from semnet import to_pandas
nodes, edges = to_pandas(G)


```

### Deduplication

Semnet was built as a by-product of a complex deduplication task: disambiguating structured LLM output from a large corpus.

```python
from sentence_transformers import SentenceTransformer
from semnet import SemanticNetwork
import networkx as nx
import matplotlib.pyplot as plt

docs = [
    "Tony Blair",
    "Anthony Blair",
    "Sir Tony Blair",
    "President Obama",
    "Barack Obama",
    "Donald J. Trump",
    "Donald Trump",
    "The Donald",
    "Joe Biden",
    "Joseph Biden",
    "Elon Musk",
]

embedding_model = SentenceTransformer("BAAI/bge-base-en-v1.5")
embeddings = embedding_model.encode(docs, show_progress_bar=True)
```

### Clustering

### Extending the graph
