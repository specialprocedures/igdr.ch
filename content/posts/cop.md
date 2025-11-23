---
title: "Climate coverage and the COP effect"
date: 2025-11-23T11:00:36+04:00
draft: false
featured: true
language: en
featured_image: ../assets/images/posts/cop/main.jpg
caption: Projeção no Congresso Nacional - COP 30, Agência Senado, CC BY-SA 4.0
summary: Over the last ten years, COP has driven media coverage of climate change, but this effect may be dwindling.
description: Over the last ten years, COP has driven media coverage of climate change, but this effect may be dwindling.
author: Ian
authorimage: ../assets/images/global/ian-face.png
categories: Work
tags: ["Climate", "Media"]
---

---

<div style="background-color: rgba(139, 92, 246, 0.08); border-left: 4px solid rgba(139, 92, 246, 0.4); padding: 1.5rem 2rem; margin: 2rem 0; border-radius: 0.5rem;">
This article presents a rapid, post-COP analysis of global climate coverage since 2015 using data from <a href="https://newsapi.ai/">NewsAPI.ai</a>. It examines the role COPs play in driving climate reporting and looks at 2025 in the context of the last decade.

It finds that:

- Coverage of climate issues fell by a fifth between 2024 and 2025, but remain well above pre-Glasgow norms
- The last two COPs (Belém and Baku) have driven smaller increases in climate coverage than any COP in the last ten years
- Levels of reporting outside of COP season have grown since 2021, suggesting COPs may becoming less important in anchoring climate coverage

</div>

# The COP Effect
The United Nations Climate Change Conference, the conference of the parties (COP) to the United Nations Framework Convention on Climate Change (UNFCCC), is the largest event in the annual climate calendar. It serves as hook for stories about climate change in the international media, with the period around COP typically seeing a surge in climate reporting. 

<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/cop/climate_ts.html" width="636" height="400" >}}
</div>
 
<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/cop/climate_ts_mobile.html" width="636" height="600" >}}
</div>

The Glasgow COP was a breakthrough in climate reporting, and remains the most reported-on event in the last decade. 

The 2021 conference also had a substantial and sustained impact on reporting, with average daily climate coverage more than doubling, increasing by 124% in the years following Glasgow.

# Contraction
The last two years, however, have seen growth in climate coverage stall and then contract, with the number of articles in major outlets falling over 22% between 2024 and 2025, the largest decline since the pandemic.

<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/cop/climate_yearly_pct_change.html" width="636" height="400" >}}
</div>
 
<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/cop/climate_yearly_pct_change.html" width="636" height="600" >}}
</div>

As a quick and simple aggregated time-series analysis, I'm hesitant to draw any conclusions from this data[^1] but it is not unlikely that the Trump administration's hostility to the climate movement may have contributed to the decline in coverage over the last year.

[^1]: If this is a question which interests you, feel free to [reach out](/contact).

# Declining COP effect
One area in which US hostility to climate action has likely harmed coverage is in how COP has been covered. This year's COP in Belém has taken place both [without a formal US delegation](https://abcnews.go.com/US/trump-administration-send-delegation-cop30-us-maintaining-presence/story?id=127524096) and in absence of [major US networks](https://www.theguardian.com/us-news/2025/nov/13/cop30-climate-talks-belem-us-broadcasters).

We can track the impact of a COP by comparing the level of climate coverage seen over the period of the conference with the previous twelve months. 

[^2]: Median is important here, given that Paris and Glasgow were very much outliers.
<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/cop/cop_effect.html" width="636" height="400" >}}
</div>
 
<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/cop/cop_effect.html" width="636" height="600" >}}
</div>

By far the largest "COP effect" we've seen in the last decade was again, at Glasgow (274%), where we saw record levels of climate news follow a sustained lull over the pandemic. COP21, which saw the signing of the historic Paris Agreement, had a COP effect of 187%. 

A median[^2] COP sees a COP effect of 73%. The last two COPs in Baku and Belém have underperformed, with COP effects of 29 and 30 percent respectively.

# Reasons to be cheerful
This has been a tough year for the climate movement. There are, however, two silver linings in the data:

## We are still well up on the pre-Glasgow baseline
Climate still occupies a much larger place in the media than it did before 2021. Coverage in 2025 is 86% larger than it was before Glasgow and we're only fifteen percent down on 2022.

<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/cop/climate_pre_post_glasgow.html" width="636" height="400" >}}
</div>
 
<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/cop/climate_pre_post_glasgow.html" width="636" height="600" >}}
</div>

## The COP effect is fading, but year-round coverage is stronger than ever
This year has been a [difficult COP](https://www.politico.com/newsletters/politico-nightly/2025/11/21/the-sad-sorry-state-of-cop-). Recent years have also seen COPs taking place in some of the world's largest fossil fuel-producing countries, one of which fresh out of a [war of territorial expansion](https://en.wikipedia.org/wiki/Second_Nagorno-Karabakh_War).

COP remains central to international efforts to stop climate change, but the reduced "COP effect" may have as much to do with coverage shifting outside of COP season. 

<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/cop/cop_effect_grouped.html" width="636" height="400" >}}
</div>
 
<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/cop/cop_effect_grouped.html" width="636" height="600" >}}
</div>

The last five years have seen an overall trend towards year-round climate coverage with steady growth in average articles per day outside of the COP period, interrupted only by an admittedly-challenging 2025.

Reporting in 2024 peaked mid-year, outside of COP, and 2025 has seen a very steady stream of climate-related articles throughout the year.

Whilst urgent work is needed to regain momentum in 2026, climate communications no longer needs mega-events like COP26 to drive coverage throughout the year.

---

# Notes and errata

## Approach
I wanted to knock something quick, easy and meaningful out immediately post-COP. Keeping it simple, I used a single, aggregated time series, supplemented by COP start and end dates.

I have focused on proportional change (as opposed to absolute figures) and have scaled article counts between 1 and 100. This is because raw figures are heavily influenced by a number of factors, including source selection, scraper uptime, and language-specific search variability, making statements like "an average of 500 articles per day in 2021" misleading.

## Query
I used a short, broad query consisting primarily of synonyms for "climate change" and "fossil fuels". NewsAPI uses named entity recognition to allow for multi-lingual searches. Queries are specified as wikipedia links. The entities used were:
- [Climate](http://en.wikipedia.org/wiki/Climate)
- [Climate_change](http://en.wikipedia.org/wiki/Climate_change)
- [Climate_variability_and_change](http://en.wikipedia.org/wiki/Climate_variability_and_change)
- [Fossil_fuel](http://en.wikipedia.org/wiki/Fossil_fuel)
- [Köppen_climate_classification](http://en.wikipedia.org/wiki/Köppen_climate_classification)

## Sources
The news outlets covered draw on the "Top 50" group in [NewsAPI.ai](https://newsapi.ai/), which features their highest-ranked outlets in the database by Alexa Rank. The sources included in the aggregation are as follows:

> ABC Tu Diario En Español, Ansa.it, AP NEWS, Arab News, BBC, CBC News, CBS News, CTV News, Channel NewsAsia, China Daily, Clarin, Deutsche Welle, El Mundo, El País, El Universal Online, Estadão, Euronews English, Evening Standard, Fox News, France 24, Hindustan Times, Indian Express, Infobae, La Jornada, La Repubblica.it, LaVanguardia, Le Figaro.fr, Le Monde.fr, Libération, Lietuvos Radijas ir Televizija, Los Angeles Times, Mail Online, National Post, Reuters, South China Morning Post, Star Tribune, The Boston Globe, The Daily Star, The Globe and Mail, The Guardian, The Hindu, The Independent, The New York Times, The Star, The Straits Times, The Telegraph, U.S. News and World Report, Washington Post, Universo Online, and Yahoo

Sourcing for media monitoring can be tricky, requiring completeness validation and careful source selection in line with specific research questions. 

Whilst it is certainly possible to question the inclusion or exclusion of certain outlets, I feel for this piece, the sources give a sufficient basis for analysis given that:
- This is a high-level, zoomed-out analysis that only examines broad trends
- Whilst biased towards English-language coverage, we have outlets from a large number of countries
- There are a large number of sources, so any gaps in the (scraped) data will be offset

## Further analysis
This is a very basic piece, written in a day, and focusing only on volumes of coverage because it's easy and cheap to do. [Hit me up](/contact) if you're interested in a deeper dive. [NewsAPI](https://newsapi.ai/) provides very rich data, including full text and named entities. 

I'll be demoing more over the coming months, but it's possible to look at:
- Differences between outlets (e.g., has American coverage dropped in 2025?)
- Classification of articles (e.g., how much reporting is on oil and gas?)
- Quote extraction and attribution (e.g., which organisations and spokespersons are being quoted most?)
- Messages and narratives (e.g., what are the narratives around solar?)
- Co-occurrence networks (e.g., who gets quoted alongside whom?)

---

_The data and replication code for the analysis presented above is available [here](https://github.com/specialprocedures/rent)._
