---
layout: post
title:  "MSc. Information Systems @UzK: ERP paper summary"
date:   2016-01-30
categories: academic
tags: ERP university BPM IIS papers
banner: 
bannersize:
hascsvdownload: true
github: true
author: Pascal Brokmeier
summary: In this post I'll be summarizing all papers discussed in the course ERP during the M.Sc. Information Systems winter semester 2015/16 at the University of Cologne
---

In this post I will summarize all papers which were required readings during the course. I will first give a quick, very subjective summary for each paper and then list the most interesting points and findings. The subjective summary will always be written in *italic*. Sometimes I'll limit myself to my personal summary, if the paper didn't offer any further significant insights. 

#### List of papers: 

* Themifstocleous & Irani (2002) Novel taxonomy for application integration
* Saraf et al. (2012) IS integration and knowledge sharing in multi-unit firms
* Mueller et al. (2010) Understanding the Economic Potential of Service-Oriented Architecture
* Busquets (2015) Discovery paths - exploring emergence and IT evolutionary design in cross-border M&As
* Bidan et al. (2012) An empirical study of IS architectures in French SMEs
* Jain & Ramesh (2015) The roles of contextual elements in post-merger common platform development
* Morris & Venkatesh (2010) Job characteristics and job satisfaction: Understanding the role of enterprise resource planning system implementation
* Gattiker & Goodhue (2005) After ERP Implementation
* Kim & Mukhopadhyay (2011) Determining Optimal CRM Implementation Strategies
* Sasidharan et al. (2012) The Effects of Social Network Structure on Enterprise Systems Success
* Sykes (2015) Support Structures & Impacts on Employee Outcomes
* Eden et al. (2014) Sustaining the Momentum: Archival Analysis of Enterprise Resource Planning Systems
* Rai et al. (2006) Digitally Enabled Supply Chain Integration Capabilities

---

#### Themifstocleous & Irani (2002) Novel taxonomy for application integration

*A dated paper describing the first steps of EAI. It tries to develop a common taxonomy to improve communication and prevent misunderstandings due to various wordings for equivalent topics and systems. It comes up with the three categories **Intra-Organisational AI**, **Hybrid AI** and **Inter-Organisational AI**. So basically, it split a continuous scale with no clear segmentations into three segments.*

![](/images/2016-01-30-erp-master-information-systems-uzk-paper-summary/1.png){:.img-350}

>Source: Themifstocleous a Irani (2002) Novel taxonomy for application integration
{:.img-caption}

#### Saraf et al. (2012) IS integration and knowledge sharing in multi-unit firms

The question at hand: How does IS integration affect cross-BU knowledge sharing (KS)? 


Saraf proposes 5 hypothesis, all of which were proven correct by the empirical data (*self fulfilling prophecy?*)

1. High integration ➨ high KS
2. High BU business relatedness ➨ high KS
3. High integration ➨ related BU have higher KS (IS makes 2 even better)
4. High interdependence ➨ high KS
5. High integration ➨ reduces positive affect of interdependent BU on KS (IS reduces correlation of 4)

All points have been proven right. IS integration leads to higher KS in general. This is due to **IS helping to transfer tacit knowledge into explicit knowledge forms by merging multiple sources of knowledge and spreading them throughout the firm.** (*internal wikis, etc*). While 1-4 are self-explanatory, point 5 is interesting. If high IS integration is present, the positive correlation of workflow interdependence and KS is cancelled out. KS is still higher than without integration but not increasing with increasing interdependence The explanation proposed is simple: **BU that were highly interdependent before the integration had boundary spanning touching points between the departments. Most of these are now replaced by automated processes which reduces the amount of interaction between departments ➨ interdependence is irrelevant for KS now, because IS replaces boundy-spanning workflow routines.**

This is called **winner's curse**

#### Mueller et al. (2010) Understanding the Economic Potential of Service-Oriented Architecture

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


*The authors argue, they found the most important economical benefits of SOA. However I argue, the model is based on extensive literature review, in which they found that only 27% of the identified chains were non-unique, meaning that over 70% of the chains were only concluded in one case. Those that were non-unique might be the most common ones and therefore the most likely to contribute to an economical benefit, however the graphic also shows that the two core concepts of modularity and standards lead to all benefits. The concepts of modularity and standards however is nothing unique to SOA but has been around for decades now.*

#### Busquets (2015) Discovery paths - exploring emergence and IT evolutionary design in cross-border M&As

*M&As lead to emergence of yet unseen new structures that are of greater benefit than just simply adding and benefitting from economies of scale. Also by doing trial-and-error, a **discovery path** is a way of finding the "best" way (idea based on evolutionary concepts).*

In class, the paper was noted to be less contributional to theory and practice because both the research concept and the discoveries were not very good or helpful.


#### Jain & Ramesh (2015) The roles of contextual elements in post-merger common platform development

Case describes environment in which several common platform developments failed in the past. Because of external market pressure as well as previous fails, top management got more involved (*if this doesn't help then what will right*). There was a boundary spanning entity introduced (Corporate Program Office == PMO). *Also everyone wanted this to succeed now.*

Vocabulary:

* CPO as Knowledge orchestrators, boundary spanners, scouts

#### Bidan et al. (2012) An empirical study of IS architectures in French SMEs

They tried to: (1) See what types of integration are prominent in SMEs (2) explain the popularity of some forms based on structure and history of the firms.

Assumptions: 
* Smaller firms have less money to spend on integration
* Operational motivation rather than governance / strategy

Based on literature common integration patterns:

* Data warehousing
* ERP systems
* Re-architected systems (EAI)
* Custom APIs and interfaces between applications


The **findings** were, that three types are prominent: **Silos architectures**, which were mostly found in small also older firms. Integration is sparse and based on APIs. **Partially standardised architecture**, which are characterised by the presence of some ERP systems and some custom applications, small firm size and young age. *The explanation is, that young companies formed their processes, when ERP systems were already wide-spread and easier to acquire and implement. They therefore introduced them right away, but only a few modules due to the companies size*. The last type is the **mixed architecture**, which is common among large companies. They have ERP systems with more modules and an EAI platform. 

#### Morris & Venkatesh (2010) Job characteristics and job satisfaction: Understanding the role of enterprise resource planning system implementation

*The research question concerns with the affect of ERP implementations on job satisfaction and characteristics for end-users.*

➨ What job characteristics lead to increase / decrease of job satisfaction?

ERP changed: Autonomy, Feedback and Skill variety characteristics. These three had a negative impact on job satisfaction

➨ ERP implementation is not only about technical dimensions but also about psychological impacts and therefore overall employee efficiency 


#### Gattiker & Goodhue (2005) After ERP Implementation

**Understanding the Impact of Interdependence and Differentiation on Plant-Level Outcomes**

The question is *Will **investments pay off?***. Most studies say 

> Yes, but amount varies.

*Now that doesn't help much.*

Model created leads to a few hypotheses. If a company has highly interdependent units, an ERP helps. If its processes are very unique, an ERP doesn't help much, but if the ERP is then customised, it can help, but not as much as a "standard" structured company. Also the more time passed since implementing the ERP system (without the company abandoning it), the more benefits.

The results supported some claims. Passing time helps, data quality helps, differentiation causes problems (as predicted) but customisation didn't solve the problem. 

#### Kim & Mukhopadhyay (2011) Determining Optimal CRM Implementation Strategies

Taxonomy → Two categories: 

* targeting-related CRM: improve success rate in targeting the more valuable customers → *back-office*
* support-related CRM: Manage loyal and valuable customers to preserve relationship → *front-office*

Problem: Unused CRM features, over investment → ROI low

Question: What is the optimal CRM implementation strategy? What parts are needed and how can this be determined?

Results: If little or no diseconomies of scale → investment in both categories beneficial, otherwise focus on targeting if you have few loyal customers and support if you have many local customers

Also sometimes both sides can substitute each other. E.g. a high degree of targeting-related CRM modules already being implemented leads to little benefits of also adding support-related modules. 

![](/images/2016-01-30-erp-master-information-systems-uzk-paper-summary/4.png){:.img-300}

>Source: Kim & Mukhopadhyay (2011) Determining Optimal CRM Implementation Strategies
{:.img-caption}

#### The Effects of Social Network Structure on Enterprise Systems Success

Paper focuses on the human side of ERP implementations again, noting that an ERP implementation can be only as good as its adoption and the usage of the system. Analysing the social network of a firm, the paper tries to evaluate:

* Influence of position in network on knowledge exchange and usefulness of system for individual
* The post implementation period of enterprise system implementation consists of extensive interactions and the exchange of information among employees
* hypothesis(proved): social network affects knowledge transfer and system adoption
    - High in-degree & betweenness centrality on individual level report high task impact and information quality
    - low clustering within unit is bad for unit level benefits
    - but: centralised structure in units lead to individual level benefits for the hub (central person)



#### Sykes (2015) Support Structures & Impacts on Employee Outcomes

*What effects do support structures like coaching, training, live-support, etc. have on the employees perception and acceptance of a newly introduced ERP system during the shakedown phase?*

Two support structures can be differentiated:

* Formally introduced structures like training, online support, ...
* informally developing structures like peer advice, social network ties, ...

All those structures affect an employees perception of stress, satisfaction and performance on the job. 

Sykes suggests that peer advice offers the greatest benefit since it offers the right context and the right information at the right time. *This can be argued however, since peer advice doesn't always need to be correct.* 

Overall, of the traditional support structures, Change Management Support is quiet helpful, however peer advice is much more helpful. It is therefore suggested to see **peer advice ties as a key resource during the shakedown phase**

#### Eden et al. (2014) Sustaining the Momentum: Archival Analysis of Enterprise Resource Planning Systems

*Trying to do a check-up on all the published research surrounding ERP to see what still needs to be researched*

Results:

* no research for ERP retirement, lot for implementation
* benefits of usage research should do more cross-industry cross-country
* Lack of research for ERP maintenance
* 

#### Rai et al. (2006) Digitally Enabled Supply Chain Integration Capabilities

* Suggesting a concept of **higher order capabilities** which separates the three interconnected streams *information, financial resources* and *goods* to allow an effective sharing of information across firm boundaries throughout the supply chain.
* Common and widely available IT resources don't create sustained performance gaines but only enable a firm to improve (its own)unique processes which then lead to actual performance gaines
* Implies that implementation of an IT platform doesn't have direct affect on a firms operational performance or other performance indicators but rather 
* IT infrastructure integration for SCM represents a **lower-order capability** that can be leveraged to develop a **higher-order process capability** (i.e., supply chain process integration), which is a source of significant and sustained performance gains for a firm.

![](/images/2016-01-30-erp-master-information-systems-uzk-paper-summary/5.png){:.img-350}
>Source: Rai et al. (2006) Digitally Enabled Supply Chain Integration Capabilities
{:.img-caption}

* **Supply chain process integration mediates** between IT integration capabilites and actual firm performance






