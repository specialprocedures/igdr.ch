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
