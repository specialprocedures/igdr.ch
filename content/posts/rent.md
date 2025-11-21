---
title: "Rising rent in England: a vulnerability analysis"
date: 2025-11-20T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/posts/jrf/main.jpg
caption: Keith Edkins / Any property to let round here? / CC BY-SA 2.0
summary: Analysing private rent increases in UK local authorities.
description: Analysing private rent increases in UK local authorities.
author: Ian
authorimage: ../assets/images/global/ian-face.png
categories: Work
tags: ["UK", "Housing", "Research", "Policy"]
---

---

# Key findings

<div style="background-color: rgba(139, 92, 246, 0.08); border-left: 4px solid rgba(139, 92, 246, 0.4); padding: 1.5rem 2rem; margin: 2rem 0; border-radius: 0.5rem;">

Since 2020, private rent has risen fastest in some of the UK's most deprived areas. This article tracks post-pandemic rent increases across the country and highlights geographies where income deprivation intersects with rising housing costs.

- Private rents have risen by a third across England since 2020
- Rent has increased fastest in the North West
- Poorer areas have seen faster rent increases than richer areas
- Major urban developments may be driving up rents in neighbouring local authorities with high levels of deprivation, particularly in the North West and the Midlands

</div>

# Rapidly Rising Rents

Rent is a major recurring cost for many households, particularly those on low-incomes, but over the last five years the pace of price increases in the Private Rented Sector (PRS) has been strongest in some of the poorest areas of the country.

Since the pandemic, rent increases have accelerated outside of traditional hot-spots such as London and the South East. The North West of England has been most affected, with rents rising 38% over the last five years, five percentage points above the national average (33%).

<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/jrf/private_rent_change_by_la.html" width="636" height="800" >}}
</div>

<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/jrf/private_rent_change_by_la_mobile.html" width="636" height="1000" >}}
</div>

_Source: [Office for National Statistics](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/privaterentandhousepricesuk/october2025)_

The rate of change in the North West has been so intense, that nine out of the top ten fastest rising local authorities can be found in the region.

What's also notable is that of these authorities, we see several that are highly-ranked in the [English Indices of Deprivation](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2025/english-indices-of-deprivation-2025-statistical-release). 

| Local Authority      | Region     | Change since 2020 (%) | Deprivation Rank[^1] |
|:---------------------|:----------:|:----------------------:|:-------------------:|
| Tameside             | North West | 59                     | 45                  |
| Rossendale           | North West | 53                     | 59                  |
| Rochdale             | North West | 51                     | 20                  |
| Bury                 | North West | 51                     | 104                 |
| Trafford             | North West | 48                     | 201                 |
| Salford              | North West | 48                     | 27                  |
| Oldham               | North West | 47                     | 14                  |
| Folkestone and Hythe | South East | 47                     | 73                  |
| Stockport            | North West | 45                     | 164                 |
| Liverpool            | North West | 45                     | 8                   |

[^1]: A score of 1 represents most deprived, 295 least.

# Rent increases and deprivation

This trend can be seen at a national level, with a 1 point increase in deprivation score associated with a 0.2 percent higher rent increase over the 2020-2025 period.

There are many possible explanations for this trend, including spillover effects from hotter property markets (such as Manchester in the North West), rising interest rates, opportunism, and supply constraints.

<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/jrf/imd_rent_scatter.html" width="636" height="600" >}}
</div>

<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/jrf/imd_rent_scatter_mobile.html" width="636" height="800" >}}
</div>

A detailed analysis of the dynamics behind this trend is beyond the scope of this article. What is certain, however, is that in the context of a broader cost of living crisis, we should be concerned about the the ability of households in low-income areas to absorb accelerating rental costs.

# At risk areas

Interventions seeking to cool rent pressures or support at-risk households may be targeted geographically, prioritising areas with both high levels of deprivation _and_ rapid rent increases.

By taking the product of post-2020 rent changes and income deprivation scoring, we can construct a simple index which highlights areas in which households may be at highest risk of rapidly rising rents.

<div class="responsive-chart-desktop">
{{< responsive-iframe src="/charts/jrf/rent_risk_index_map.html" width="636" height="800" >}}
</div>

<div class="responsive-chart-mobile">
{{< responsive-iframe src="/charts/jrf/rent_risk_index_map_mobile.html" width="636" height="700" >}}
</div>

_Source: [Ministry of Housing, Communities & Local Government](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2025/english-indices-of-deprivation-2025-statistical-release), [Office for National Statistics](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/privaterentandhousepricesuk/october2025)_

Examining the local authorities most at risk from price rises, we again see the North West dominate the top ten, but also that areas of the East and West Midlands feature prominently.

| Local Authority       | Region        | Rent Risk Index[^2] |
|:---------------------|:-------------:|:---------------:|
| Tameside      | North West    |               100 |
| Rochdale      | North West    |                99 |
| Oldham        | North West    |                94 |
| Manchester    | North West    |                93 |
| Liverpool     | North West    |                88 |
| Nottingham    | East Midlands |                87 |
| Birmingham    | West Midlands |                86 |
| Sandwell      | West Midlands |                86 |
| Salford       | North West    |                82 |
| Wolverhampton | West Midlands |                81 |

[^2]: Scored between 100 highest risk and 0, lowest

## Urban development
A common thread linking all these areas appears to be that they are, or are located near, major urban centres undergoing substantial programmes of investment and regeneration.

Manchester here, provides an interesting case study that challenges the prevailing wisdom that new construction alone can solve the crisis in housing affordability. Manchester has [added over 25,000](https://commonslibrary.parliament.uk/local-authority-data-housing-supply/) housing units over the last decade, but has simultaneously seen private rents in deprived areas around the city rise well above the national average in recent years.

Whilst further analysis is required to draw conclusions as to why rents are increasing alongside growing housing stock, a reasonable hypothesis is that premium urban centre accommodation raises averages overall, but also sets higher expectations for rental prices in the wider area. 

# Conclusions

The cost of living crisis is a process, experienced over time. Examining rates of change in core household expenditures, such as rent, allow us to understand the velocity and intensity of financial pressures on households. Faster changes create greater financial and psychological stress, and are felt most acutely in areas which are already behind.

This article finds that rent increases in the PRS have been heavily concentrated in the North West of England, often most acutely in already-deprived areas. This trend is replicated nationally, with rents rising fastest in poorer local authorities.

Taking the speed of rent increases together with deprivation data, we find that rent pressures may be felt most acutely in England's former industrial heartlands of the North West and Midlands, where large-scale urban investment is taking place in close proximity to historically-deprived local authorities.

## Policy Implications

These findings underscore the need for affordable housing in these areas and beyond. That the North West and Manchester has seen some of the fastest rent increases suggests that new housing stock alone is not sufficient to alleviate rent pressures, and may be contributing to the problem.

There is an urgent need to build out further social housing stock to provide alternatives to the private rented sector, but the timeframes involved will do little to cool over-heated rental markets in the short-term.

The Renters' Rights Act, which will come into force from May 2026 provides welcome protection from bidding wars and limited protection against rent increases, but does not go far enough.

In a context in which average rents in some local authorities have risen by over 50 percent in just five years, bold action should be taken to prevent costs spiraling further.

### Housing allowance freeze
The Local Housing Allowance (LHA), the amount of housing benefit private renters can claim, has been frozen for most of the past decade, losing a third of its real value in the last five years alone. Unfreezing the allowance and allowing it to return closer to market rates will provide urgently-needed relief for at-risk families.

### Market intervention
The government should also consider direct intervention in the letting market, particularly in the highlighted areas where risk is most acute:
- Stock purchases for social housing provide would reduce waiting lists, lessen expenditure on temporary accommodation, whilst providing housing for the most vulnerable and reducing pressure on the PRS.
- Rent controls may face stiff opposition, but do not require public expenditure and are the most direct way of addressing spiraling rent increases.
- Short-term rentals, such as Airbnb also compete with long-term rentals for housing stock. Stronger incentives to reduce their proliferation (e.g., taxes) or even outright bans in high-risk areas may be considered.

---

_The data and replication code for the analysis presented above is available [here](https://github.com/specialprocedures/rent)._
