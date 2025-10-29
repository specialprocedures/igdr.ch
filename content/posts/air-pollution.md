---
title: "Air pollution and Covid: Time series discontinuity analysis"
date: 2020-03-30T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/featured/work/airpollution.webp
caption: A factory in Rustavi. Tamuna Chkareuli/OC Media.
summary: At the height of the Covid crisis, I measured the impact of movement restrictions on air pollution in Tbilisi using time-series discontinuity analysis and Facebook's Prophet tool.
description: Hello world
author: Ian
authorimage: ../assets/images/global/ian-face.png
categories: Work
tags: ["Covid", "Environment"]
---

_This article was originally published at [OC Media](https://oc-media.org/analysis-air-pollution-in-tbilisi-nearly-halved-by-covid-19-measures/)._

**Particulate matter in Tbilisi’s air has fallen by as much as 45% following the introduction of measures to combat the spread of COVID-19, according to analysis of air quality data by CRRC Georgia.**

The findings reflect broader global trends which have seen dramatic decreases in air pollution levels in [China](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-5P/COVID-19_nitrogen_dioxide_over_China?ref=oc-media.org), [Italy](https://www.nytimes.com/reuters/2020/03/13/world/europe/13reuters-health-coronavirus-italy-pollution.html?ref=oc-media.org), and the [United Kingdom](https://www.independent.co.uk/environment/coronavirus-air-pollution-uk-lockdown-china-italy-covid-19-a9421291.html?ref=oc-media.org).

[Data](http://air.gov.ge/?ref=oc-media.org) from the Ministry of Environmental Protection and Agriculture show a clear fall in air pollution in the Georgian capital.

The plot below examines overall pollution levels in Tbilisi over the last month, overlaid on the same period for the last three years.

It highlights key dates in the COVID-19 crisis: the [first registered case](https://oc-media.org/first-coronavirus-case-confirmed-in-georgia/), on 26 February, the closure of bars and restaurants and [restrictions](https://oc-media.org/georgia-bans-entry-for-all-foreign-citizens-over-coronavirus-fears/) on entry into the country on 16 March, and the declaration of a [state of emergency](https://oc-media.org/georgia-declares-state-of-emergency/) on 21 March.

## Air Pollution in Tbilisi: February to March, 2018–2020

<iframe loading="lazy" src="https://crrcgeorgia.github.io/blogcharts/air_quality/en/time_plot.html" width="800" height="450" frameborder="0" scrolling="no"></iframe>

_Data: air.gov.ge (February–March, 2018–2020) Mean normalised levels, all pollutants | CRRC-Georgia._

Total pollution appears to be lower following the closure of bars, restaurants, and borders. The data also suggest that in the case of these closures, falls in pollution appear to have preempted policy decisions. The pattern that emerges should be intuitive for anyone who has looked outside in Tbilisi over the last few weeks.

Air pollution is, however, strongly seasonal, peaking and falling throughout the day, week, and year. It is also closely tied to weather patterns: strong wind, for example, will disperse pollutants. Modelling allows these factors to be taken into account when determining the overall impact of COVID-19 measures.

Models have been created for levels of five key pollutants in Tbilisi, examining particulate matter (PM 2.5 and PM 10), carbon monoxide, nitrogen dioxide, and sulfur dioxide. The models adjust for seasonal factors using Facebook’s [Prophet](https://facebook.github.io/prophet/docs/quick_start.html?ref=oc-media.org) tool, and weather using [daily data](https://power.larc.nasa.gov/?ref=oc-media.org) from NASA.

The models show that following the declaration of emergency, almost all categories of air pollution fell. The only exception to this pattern is sulphur dioxide which has remained relatively constant throughout.

## Air pollution in Tbilisi: Percent change from pre-COVID baseline, modelled estimate

<iframe loading="lazy" src="https://crrcgeorgia.github.io/blogcharts/air_quality/en/percent_change.html" width="800" height="450" frameborder="0" scrolling="no"></iframe>

_Data: air.gov.ge, power.larc.nasa.gov (1 January 2018 to 25 March 2020) Deseasoned modelled estimates | CRRC-Georgia._

The most dramatic impacts from COVID-19 related measures are seen for particulate matter pollutants (PM2.5 and PM10) with each falling by 40%–45% after the emergency declaration, approaching half their pre-crisis rate.

Interestingly, for these substances, a sharp fall was present prior to the introduction of emergency measures. It is possible that this drop may be a consequence of the decline in vehicle traffic as workplaces and recreational venues began to close.

In contrast, other substances only declined following the introduction of emergency measures. Differences in change patterns are likely attributable to the different sources of pollutants.

Notably, changes are most pronounced for particulate matter, carbon monoxide and nitrogen dioxide, substances related to transportation.

No significant change was observed for sulfur dioxide, which is more closely associated with coal and oil burning for power generation.

These pronounced changes show the profound impact of human activity on the capital’s air. The restrictions imposed in response to COVID-19 are by necessity severe, but also temporary. As life returns to normal and the crisis abates, policymakers may reflect on these changes when considering how to tackle air pollution.

---

_The data and replication code for the analysis presented above is available [here](https://github.com/crrcgeorgia/air_quality?ref=igdr.ch). The data analysis used an interrupted time series design, a quasi-experimental method which tests for significance in difference between points in a time series before and after a cut-off._
