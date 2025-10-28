## Origins

Semnet came about whilst working on a particularly large and messy disambiguation task in another project. I'd passed a set of news articles to an LLM for quote extraction, and found myself dealing with tens of thousands of records like this:

| name             | org                              |
| :--------------- | :------------------------------- |
| Rishi Sunak      | Government of the United Kingdom |
| Lord Cameron     | UK Government                    |
| David Cameron    | UK Government                    |
| Emanuel Macron   | French Government                |
| John Healy       | UK Government                    |
| David Cameron    | Government of the United Kingdom |
| Keir Starmer     | UK Government                    |
| Sir Keir Starmer | United Kingdom Government        |
| Macron           | Government of France             |
| James Cleverly   | Government of the UK             |

Note how many ways there are to address Starmer and Cameron, let alone the UK government. I needed to deduplicate.

I played around with the [Python Record Linkage Toolkit](https://recordlinkage.readthedocs.io) in the past, but didn't get on with it. I also knew it leaned heavily on [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) which would struggle with pairs like ("Government of the United Kingdom", "UK Government") so I thought I'd reinvent the wheel and try another approach.

I'd stumbled across the Annoy + NetworkX combination visualising chunks of news articles a while ago, and realised I could use `nx.connected_components()` to disambiguate.

![Simple connected component disambiguation](images/posts/semnet/semantic_network_deduplication.png)

The approach worked well, and I started thinking about other ways in which NetworkX could be used on text corpora.

Looking around, the writing I could find on similarity networks all seemed to be lacking the  
I couldn't find anything doing quite the same thing so I thought I'd package my graph generation functions up neatly as a package for others to use.
