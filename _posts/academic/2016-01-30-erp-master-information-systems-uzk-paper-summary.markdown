---
layout: post
title:  "MSc. Information Systems @UzK: ERP paper summary"
date:   2016-01-30
categories: academic
tags: erp university bpm erp iis papers
banner:
bannersize:
hascsvdownload: "true"
author: Pascal Brokmeier
summary: In this post I'll be summarizing all papers discussed in the course ERP during the M.Sc. Information Systems winter semester 2015/16 at the University of Cologne
---

In this post I will summarize all papers which were required readings during the course. I will first give a quick, very subjective summary for each paper and then list the most interesting points and findings. The subjective summary will always be written in *italic*. Sometimes I'll limit myself to my personal summary, if the paper didn't offer any further significant insights. 

### List of papers: 

* Themifstocleous & Irani (2002) Novel taxonomy for application integration
* Saraf et al. (2012) IS integration and knowledge sharing in multi-unit firms
* Mueller et al. (2010) Understanding the Economic Potential of Service-Oriented Architecture
* Busquets (2015) Discovery paths - exploring emergence and IT evolutionary design in cross-border M&As
* Bidan et al. (2012) An empirical study of IS architectures in French SMEs
* Jain & Ramesh (2015) The roles of contextual elements in post-merger com- mon platform development
* Morris & Venkatesh (2010) Job characteristics and job satisfaction: Understanding the role of enterprise resource planning system implementation
* Gattiker & Goodhue (2005) After ERP Implementation
* Kim & Mukhopadhyay (2011) Determining Optimal CRM Implementation Strategies
* Sasidharan et al. (2012) The Effects of Social Network Structure on Enter- prise Systems Success
* Sykes (2015) Support Structures & Impacts on Employee Outcomes
* Eden et al. (2014) Sustain- ing the Momentum: Archival Analysis of Enter- prise Resource Planning Systems
* Rai et al. (2006) Digitally Enabled Supply Chain Integration Capabilities

---

### Themifstocleous & Irani (2002) Novel taxonomy for application integration

*A dated paper describing the first steps of EAI. It tries to develop a common taxonomy to improve communication and prevent missunderstandings due to various wordings for equivalent topics and systems. It comes up with the three categories **Intra-Organisational AI**, **Hybrid AI** and **Inter-Organisational AI**. So basically, it split a continous scale with no clear segmentations into three segments.*

![](/images/2016-01-30-erp-master-information-systems-uzk-paper-summary/1.png){:.img-350}

>Source: Themifstocleous a Irani (2002) Novel taxonomy for application integration
{:.img-caption}

### Saraf et al. (2012) IS integration and knowledge sharing in multi-unit firms

The question at hand: How does IS integration affect cross-BU knowledge sharing (KS)? 


Saraf proposes 5 hypothesis, all of which were proven correct by the empirical data (*self fulfilling prophecy?*)

1. High integration ➨ high KS
2. High BU business relatedness ➨ high KS
3. High integration ➨ related BU have higher KS (IS makes 2 even better)
4. High interdependence ➨ high KS
5. High integration ➨ reduces positive affect of interdependent BU on KS (IS reduces correlation of 4)

All points have been proven right. IS integration leads to higher KS in general. This is due to **IS helping to transfer tacit knowledge into explicit knowledge forms by merging multiple sources of knowledge and spreading them throughout the firm.** (*internal wikis, etc*). While 1-4 are self-explantory, point 5 is interesting. If high IS integration is present, the positive correlation of workflow interdependence and KS is cancelled out. KS is still higher than without integration but not increasing with increasing interdependence The explanation propsed is simple: **BU that were highly interdependent before the integration had boundary spanning touching points between the departements. Most of these are now replaced by automated processes which reduces the amount of interaction between departements ➨ interdependence is irrelevant for KS now, because IS replaces boundy-spanning workflow routines.**

This is called **winner's curse**

### Mueller et al. (2010) Understanding the Economic Potential of Service-Oriented Architecture

SOA has been postulated as a solution for many things. However it's a very hard concept to measure, especially because a firms performance is difficult to test under laboratoric circumstances. The authors base their process on previous literatures findings. From these they derive implications to actually measure the economic potential of SOA.  The question is How does SOA provide business value? (*measurable one*)

In the study they try to link the *two sides of the coin*: The technology, its core concepts on the one hand and the actual benefits on the other. In between, there's the *cloudy gap* which is, due to the complexity of any firm, impossible to deductively instrumentalize.

To get the right side of the graphic, they performed extensive literature research. Now the questions was to find **cause-and-effect chains**

![](/images/2016-01-30-erp-master-information-systems-uzk-paper-summary/2.png){:.img-350}

>Source: Mueller et al. (2010) Understanding the Economic Potential of Service-Oriented Architecture
{:.img-caption}

Several such chains were found, however most were unique and only 27% were non-unique. The top effects (found through the model of chains) were listed. 

![](/images/2016-01-30-erp-master-information-systems-uzk-paper-summary/3.png){:.img-350}

>Source: Mueller et al. (2010) Understanding the Economic Potential of Service-Oriented Architecture
{:.img-caption}

*The authors argue, they found the most imporant economical benefits of SOA. However I argue, the model is based on extensive literature review, in which they found that only 27% of the identified chains were non-unique, meaning that over 70% of the chains were only concluded in one case. Those that were non-unique might be the most common ones and therefore the most likely to contribute to an economical benefit, however the graphic also shows that the two core concepts of modularity and standards lead to all benefits. The concepts of modularity and standards however is nothing unique to SOA but has been around for decades now.*

### Busquets (2015) Discovery paths - exploring emergence and IT evolutionary design in cross-border M&As

*M&As lead to emergence of yet unseen new structures that are of greater benefit than just simply adding and benefitting from economies of scale. Also by doing trial-and-error, a **discovery path** is a way of finding the "best" way (idea based on evolutionary concepts).*

In class, the paper was noted to be less contributional to theory and practice becuase both the research concept and the discoveries were not very good or helpful.


### Jain & Ramesh (2015) The roles of contextual elements in post-merger com- mon platform development

Case describes environment in which several common platform developments failed in the past. Because of external market pressure as well as previous fails, top management got more involved (*if this doesn't help then what will right*). There was a boundary spanning entity introduced (Corporate Program Office == PMO). *Also everyone wanted this to succeed now.*

Vocabulary:

* CPO as Knowledge orchestrators, bounary spanners, scouts

### Bidan et al. (2012) An empirical study of IS architectures in French SMEs

They tried to: (1) See what types of integration are prominent in SMEs (2) explain the popularity of some forms based on structure and history of the firms.

Assumptions: 
* Smaller firms have less money to spend on integration
* Operational motivation rather than governance / strategy

Based on literature common integration patterns:

* Data warehousing
* ERP systems
* Re-architected systems (EAI)
* Custom APIs and interfaces between applications


The **findings** were, that three types are prominent: **Silos architectures**, which were mostly found in small also older firms. Integration is sparse and based on APIs. **Partially standardized architecture**, which are characterized by the presence of some ERP systems and some custom applications, small firm size and young age. *The explanation is, that young companies formed their processes, when ERP systems were already wide-spread and easier to aquire and implement. They therefore introduced them right away, but only a few modules due to the companies size*. The last type is the **mixed architecture**, which is common among large companies. They have ERP systems with more modules and an EAI platform. 

### Morris & Venkatesh (2010) Job characteristics and job satisfaction: Understanding the role of enterprise resource planning system implementation

*The research question concerns with the affect of ERP implementations on job satisfaction and characteristics for end-users.*

➨ What job characteristics lead to incerase / decrease of job satisfaction?


























