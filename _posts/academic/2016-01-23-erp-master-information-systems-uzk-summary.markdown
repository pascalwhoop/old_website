---
layout: post
title:  "MSc. Information Systems @UzK: ERP course summary"
date:   2016-01-20
categories: academic
tags: erp university bpm erp iis
banner:
bannersize:
hasmath: true
hascsvdownload: true
author: Pascal Brokmeier
summary: A summary of the slides for the course ERP during the M.Sc. Information Systems winter semester 2015/16 at the University of Cologne
---

# ERP Summary


This summary will be written along the lines of the review questions of each slide deck. I will try and answer all questions of the slide decks and by this, summarize each chapter. To differentiate between my already present knowledge and the knowledge I yet have to build up, I'll always try and answer a question by myself first and then research in the slides. My own answers will be written in *italic text*.

---

## Introduction

### Readings / Papers
* Motiwalla and Thompson (2012), Chapters 1 & 2
* Laudon, Laudon, Schoder (2010)
* Chapter 9 Weske (2012) Chapters 1 & 2

### Questions

#### 1. What are functional silos and how did they evolve in organizations?

*Functional silos are sets of IT systems only available to a limited number of departments or employees in companies. However they are not restricted to these people due to governance or policies but merely due to lack of IT system integration. Other departments would often benefit from the usage of these systems, had they access to them. This also causes data and knowledge to be duplicated and stored multiple times at different locations without any process which keeps these instances in sync.* 

* Silos are basically compartmentalized operating units isolated from their environment.
* They developed through the separation of companies into Planning, Organizing, Staffing, Directing, Coordinating, Reporting and Budgeting (a common pattern in the 20th century) and the vertical dimension which was added, separating a company in strategy, tactical and operational layers, causing the company structure to be seen as a matrix.

![](/images/2016-01-23-erp-master-information-systems-uzk-summary/1.png)

#### 2. What is the relationship between organizational functional silos and IS functional silos?

*Over time, IS systems were implemented for numerours departments and company layers. This caused a whole range of IS products and systems to be used in companies. Despite the inital benefits of these systems, organisations started being confronted with bottlenecks due to the lack of integration between those systems.*

#### 3. List the horizontal and vertical levels of systems that exist in organizations.

* Vertical scale: Strategic, Tactic, Operations
* Horizontal scale: Sales, Production, Accounting/Finance, HR

#### 4. Compare and contrast different dimensions of integration. Which do you think is most appropriate for ERP systems and why?

* data, functional, process

Data integration just combines all data pools in a company to make sure no redundant data is present and everybody is working on the same set of information. This could be implemented through a large common database that all applications must use to store and receive data.

Functional integration analyses different functions performed by both systems and people to find common structures and duplications. Reporting tasks e.g. could be found in several departments and can be unified and performed by one cross-functional unit which will then perform these tasks for all departments. This level of integration is the first one that has actual influences on the organisational structure of a company. 

The process integration dimension focuses on the business process at hand. While functional integration doesn't respect the perspective of linked functions interacting with each other or being chained together, the process focuses on cross-functional chains which require both functions and data sets from several parts or departments of the company.   

ERP systems usually make use of data integration as well as a common Business process engine or system which is used to define and track processes across functional domains. The system is also separated into modules which loosely represent the functional silos of a company. 

#### 5. What is logical integration and how is it different from physical integration?

Logical integration concerning the **data dimension** of integration means the synchronisation between several possible storage locations for data. Physical integration means the actual physical storage of all data in the same place. (Schoder, p. 465). Synchronisation doesn't necessarily mean, that all locations need to have the same contents but they all need to be logically structured in the same way to enable applications to communicate data between each other without failure. 


#### 6. What are the key benefits and limitations of systems integration?

*Integrating systems across a business helps companies to streamline their processes towards the customers. Business units are more capable to work together as a team rather than independent units and management is better capable of managing, controlling and improving the overall efficiency of the company. Also, through shared storage and data, companies are less likely to make mistakes due to incoherent data sets of customers or other important information. Therefore the quality of the data which is used as a base for operations is improved.*

*However IS integration also comes with a price which is mainly the high costs to implement and support such integration systems. Also, employees and managers must be trained to adapt to the changed structures to make full use of the systems.*

#### 7. What is the relationship between business processes and systems integration?

*Business processes are a string of actions that usually cross functional borders of a business. In its most complex dimension, system integration uses theses processes to structure both underlying data as well as functions in a business to streamline all business processes towards the customers. This way, a business can quickly adapt to changing markets and provide an optimal experience for the customers.*


#### 8. What are business processes and BPM?

*Business processes are cross-functional or sometimes even cross-business strings of actions, tasks and functions that, put together, create value. BPM is the process of managing said processes by often first formally analysing and describing and later monitor and optimise them.*

#### 9. Describe four types of enterprise applications.

* ERP: Try to be one giant system that includes all sorts of tasks which are common among most businesses independent of their industry. Also, often industry specific functions are included. They span across the organisation to coordinate processes and ensure a common data model across the firm. 
* SCM: Supply chain management systems take care of the logistics, resources and operations of production. They are usually used in organisations that produce physical products and can also span across multiple company borders to improve an integrated supply chain. 
* CRM: Manage a companies approach towards customers. It gives a unified overview over all channels, a customer can contact the organisation, synchronises the interaction points within the firm (multiple departments), analyses the customers interests, demands, buying habits a.o. to improve sales, customer retention and experience. 
* KM: Knowledge Management systems are used to ensure knowledge is spread across an organisation and used wherever useful. 

#### 10. What is the role of ERP systems in system integration?

ERP systems primarily solve the data integration dimension and also serve as a platform for other enterprise systems such as SCM and CRM. They host a process management solution to perform BPM in a uniform manner throughout the company.  

#### 11. What is the role of SCM systems and CRM systems in system integration?

They serve to both streamline the production process towards an optimal process with minimal bufferings and short cycles as well as streamline the customer experience for customers coming into contact with the organisation. CRM also analyse the customers behaviour to improves sales and create a better, holistic view of the customer for the firm. 


---

## Business Process Modeling

### Questions

#### 1. What are models in systems development compared to other disciplines?

*Models are a representation of the information system that is to be developed. However these models can describe several perspectives, such as the hardware, software, module, or component perspectives.* 

TODO What does he mean? Nothing in the slides -.-

#### 2. What is a process architecture?

* What processes and their scope
* **Who** is the owner / customer of the process? Suppliers / Partners?
* Supporting processes, managing processes, CORE (the process itself)

![](/images/2016-01-23-erp-master-information-systems-uzk-summary/2.png)

Supporting processes can be used by other processes, while core processes are directly generating value by being linked to external customers

#### 3. List the phases of the business process management lifecycle and how process modelling is involved in them.

0. Process identification 
1. Process discovery → Output: as-is process model
2. Process analysis → Output: insights, strengths, weaknesses
3. Process (re)design → Output: To-be process model
4. Process Implementation → Output: Executable process model
5. Monitoring and controlling → Output: Performance and conformance insights

Process modelling is done during the process design phase, which uses both the as-is model as well as the aquired insights from the analysis and is supposed to output an improved process model. It is also involved in the *as-is* modelling as well as the implementation phase, because moving from a model concept to an executable version .

#### 4. What are the main components of any business process (model)?

* Activities: active elements, consume time and change state of BOs
* Events: In/Output of process, passive but influence conditional flow of P
* Business Objects (Data): artifacts that undergo state changes, passive, physical or electronic
* Actors (or Resources): Humans and systems, that perform operations

#### 5. What are the key elements of BPMN?

* **Flow Objects**: Events, activities and gateways
* **Artefacts:** Data objects, groups and annotations
* **Connecting objects**: sequence & message flow, associations
* **structuring**: swimlanes

#### 6. What is the relationship between business processes, business process models, and enterprise applications?

* Business processes are the in-fact activities that are taking place in organisations, independent on wether they are modelled or not. The models then are a formal representation of these processes and are used to both analyse and improve or change the ongoing processes. Enterprise applications then present a platform to execute and analyse these processes.


---

## Chapter 3: Business Process Management

### Questions 

#### 1. What is business process management?

Business process management is the definition, analysis, implementation and improvement of ongoing processes in an organisation. A business process is usually a string of activities that are directly linked to value generation. Most of the time this means theses processes are tightly connected to what customers require. 

![](/images/2016-01-23-erp-master-information-systems-uzk-summary/3.png)

#### 2. What are key measures for process performance, and how are they related to each other?

* **R**: average flow rate: Number of flow units that flow through the process per time unit. *unit / time*
* **I**: Average Inventory: Average number of flow units present within the process boundaries
* **T**: Average Flow Time: The average time, a unit takes to finish the process.

\`I = R * T\` also called **Little's Law**

#### 3. How is flow time analysed and assessed?

Flow time can be influenced by two factors. The total time spent processing the unit (**operations**) and the total time waiting (**buffers**). While operations are necessary and can only be shortened, if the operations become more efficient, the buffers are an unwanted necessity to make the process work and should be kept minimal. The ratio between time being processed and T(waiting+processing) is called the **Flow Time Efficiency**. The sum of all processing durations is also called **Theoretical Flow Time** and describes the time needed if no waiting was necessary. If several paths are possible, the one with the highest theoretical flow time is called **critical path**. Waiting here causes direct delays to the overall process.

It is also possible to separate a process into value-adding and non-value-adding activities. Value adding activities are those, that directly increase the economic value of a flow unit while the NVAAs, while required, do not directly add value. The lower the ratio NVAA/activities, the higher the **process quality**.

**To measure**:

* Direct: the flow time, take a sample of n units and measure entry to exit time, make average.
* Indirect: Measure number of units produced in given period of time. Compute R. Take n measures of I during period, compute T using *Little's Law*

**To Calculate**:
Theoretical flow time + average waiting = T

#### 4. How is flow rate analysed and assessed?

The flow rate describes the amount of units that the process can output at a given time interval / unit. 

* The **Process capacity** is the maximum sustainable flow rate of a process. 
* The **Theoretical capacity** is the maximum sustainable flow rate if the **bottleneck resource** is fully utilized. 
	* TC(p) = TC(bottleneckResource)
* Activities are performed by **resources**. A **resource pool** is a collection of interchangeable resources that can perform identical tasks. Each is called a *resource unit*.
* **T<sub>p</sub>[time]**: The **unit load of a resource unit** is the total amount of time a resource works on a flow unit. A resource unit can be used in several activities therefore its load is the sum of all activities in which is is utilised
* **Load batch (LB)**: Number of units that a resource can process simultaneously. 
	* Theoretical capacity for parallel working resource: LB<sub>unit</sub> / T<sub>p</sub>
		* only applicable if parallel work doesn't cause efficiency drops on the unit level
* **Scheduled availability (SAV)**: Amount of time a resource is planned to operate

 
$$TC(unit) = \frac{1}{T_{p,scheduled}}* LB_{unit}*SAV$$

then the TC of a resource pool is

$$ TC(unit) * poolsize $$


**To measure**: Count the units processed over an extended period of time. Compute the flow units per unit of time.


#### 5. What is capacity utilisation and how it is assessed?

It measures the utilisation of resources that are available relative to their actual utilisation

\`ρ_p=\frac{\text{Throughput}}{\text{theoretical capacity of resource pool p}}\`

the CU of the process is again the one of the bottleneck resource pool

#### 6. How can processes be improved and what is the role of information technology in this?

**To improve**: 

* Abstract
	* Eliminate activities
	* Work in parallel
	* increase efficiency
* formula / model based
	* reduce: flowtime, inventory, cost
	* increase: throughput rate, quality

**Role of IT**

IT can help in several ways. It can help transfer data instantaneous instead of physically transferring it, causing a reduction in NVAA activity time → increased process quality. It can also enable coordination of actors to allow concurrency and therefore reducing the length of the critical path. Also it can help eliminate activities like controlling and validation steps by automated quality controls.

To improve an overall process, the bottlenecks capacity need to be improved. A good process is one that has a good performance which means a good relative financial measure. E.g. ROI

### Other notes

It is a common pattern to either improve a process through making it more *cost-effective* or by making it more *responsive*. 

Over time, the reasons for competitive advantage have changed. Before the 60s, economies of scale were the primary source of competitive advantage. Mass production without customising were.

Business Processes are positioned on multiple layers of an organisation. However the executable processes (mostly modelled using BPMN) are commonly found in the operational layer, not the organisational layer. Here, value chain diagrams only describe the abstract concepts due to lack of instrumentalisation. 

{:.center-small}
![](/images/2016-01-23-erp-master-information-systems-uzk-summary/4.png)

#### Dumas (2013) 6 steps of BPM engagement

1. Identification
2. Discovery (as-is)
3. Analysis
4. (Re)-Design
5. Implementation
6. Monitor/Control

Dumas separates the process environment of organisations into three levels. 1. Process Landscape (strategic), 2. Abstract Process Models (tactic) and Detailed Process Models (BPMN, operational

IT is being used to improve steps 5 & 6 by virtually representing the process and then using adequate measures to identify bottlenecks, and improve the process.

#### Walmart example

Strategy: Walmart wants to give quality products at competitive prices.

Operations strategy goals: Reduce flow times (T) and inventory levels (I)

Results: Inventory turned over twice a week (average every 2 weeks), improved sales per square foot

---- 

## Questions for Prof. Rosenkranz

1. Why is the Wonder Shed Inc example concluding I<sub>w</sub>/R = T<sub>w</sub> ? If 16,5 units/h are produced and a total of 80 are in the process (+ 5 in each stage?) then shouldn't 80/ 0,275 = T and ≠ T<sub>w</sub>?


---

## Enterprise Application Integration

## Readings / Papers

* Motiwalla and Thompson (2012), Chapters 3 & 4 
* Weske (2012), Chapter 2 
* Tanenbaum and Van Steen (2007), Chapters 1‐4

### Questions

#### 1. What is enterprise application integration?

*EAI is the process of making several individual applications and systems in an organisation work together. This can be done in several ways, the most common pattern being integrating 3-tier architectures through one of the three layers.*

EAI focuses on the **technical dimension** not on the business reasoning behind the decision (as in BPM)

##### 1.1 Why use EAI?

* Supporting large enterprises especially useful after M&As
* Reuse investments in existing systems 
	* beware sunk-cost fallacy

#### 2. What is component‐oriented development?

*A concept which breaks a desired system down into several separate components which can be individually developed. Each component defines its communication approach with other components and publishes this. These are called **interfaces** and are the basis of communication between components. Often there are interface **best practices** or **standards** which cause a homogenous interface structure among components.*

A **component** includes a set of *interfaces*, *requirements to the environment* and its *executable code*.

##### 2.1 Whats the difference between Components and Objects?

components can be implemented using objects or any other concept. Objects are a programming structure paradigm while components are architectural level entities.
 
##### 2.2 What are component frameworks and component models?

A component framework is a wrapping environment for components. It defines a common structure all components must have and then helps to use the components in this environment. A component model are rules, standards and conventions used by the component developer to ensure a common structure where possible. 

##### 2.3 What is the difference between interfaces & messages?

**Interfaces** allow runtime and compilation time type checking. Are usually used for intra-program and intra-server communication.
   
**Messages** are used for inter-system communication. They have no type-checking and are, compared to interfaces, quiet slow (due to communication overhead, queuing etc)

#### 3. What are parts of a distributed architecture?

**Interfaces**: Define the IN and OUTput of a component. An interface has access points and describes how to interact with these points. It also describes what is returned depending on the data passed to the access points. It serves as a **contract**. This also enables the replacement of the **implementation** without changing the contract or interface. On the other hand it allows to add more functionality be extending the interface and writing new implementation modules without touching the already created ones. 

* Interfaces don't include metadata such as latency, security, quality of implementation. Only describes a way of calling it and what is returned. 

**Late Binding**: Embed the location of the resource in the code reduces flexibility. Instead a name-address concept is used to allow runtime-dependent resolution. Similar to URL-IP-DNS, this allows load-balancing, moving, replacement, ...

**Location Service**: Resolves the Name-Address Link

**Protocol**: A *language*, both systems agree on to communicate the data. Usually there is a single base protocol that all systems support (within the *system landscapes* boundaries)

#### 4. What different topologies and types of integration architectures exist?

Topologies: 

* Hub-spoke
* Bus
* Point to point

Layers: 

* Data
* Model
* View

##### 4.1 What are pro's and cons for each topology?

**Point2Point**: Is very easy and fast to implement and usually the best approach for small scenarios and systems. However, it causes a very tight coupling among the components with many interfaces (each component defines 1-n for 1-n components around it). Also once it grows too large, its unbearbale to manage. 

**Bus**: Very scalable, one interface per system. However there's a big overhead for coordination the Bus is equivalent to a single point of failure (can be solved with a redundant active-passive backup). 

**Hub-Spoke**: Few interfaces (same as Bus), extension is very easy, but again single point of failure & hub → potential bottleneck

##### 4.2 What is the difference between a Hub and a Bus?

>The key difference between hub/spoke and bus topology is that for the bus architecture, the integration engine that performs message transformation and routing is distributed to the application adapters rather than centralizing it to a single 'hub'.

Hub/Spoke: The Hub is the single centralized broker system which takes care of the transformation and routing. This affects scalability.

Bus: the load of data transformation and routing is carried out by the 'adapters' at each spoke systems' entry into the bus.  Here the bus is more of a messaging conduit serving the spoke systems without having the pressure of middleware tasks (data transform & routing).

[source](https://www.quora.com/What-is-the-difference-between-hub-spoke-vs-ESB-in-SOA)


#### 5. What are components of an EAI framework?

![](/images/2016-01-23-erp-master-information-systems-uzk-summary/5.png)

**Adapters:** allow communication with specific applications. 

**Middleware / Message Mgmt**: Briding differences between applications, performing transactions, distribution of messages, transformations.
 
 **Process Management:** Basically BPM layer
 
 **Meta Database and additional services**: Administration of central data and configurations, identity, monitoring

##### 5.1 What are differentiation characteristics of the middleware component in an EAI framework?

* Synchronous or asynchronous communication
* function- object- or service oriented.

#### 6. What is message‐oriented middleware?

* Asynchronous communication
* Implementation of queuing systems to assure message delivery
* load distribution
* independent of system or implementation, as long as system speaks protocoll.
* Can simulate synchronous communication although asynchronous

##### 6.2 What roles can a MOM take?

* It can hide the receiver from the sender (sender only knows name but not address)
* It can perform delivery assurances
* It can perform transaction handling

##### 6.2 Drawbacks of MOM?

* Single point of failure → needs high-availability tech behind it
* Can be bottleneck
* Testing is difficult
    * can be OK with API Management + automated stub/mock-based testing
 
#### 7 What is SOA? What are the 5 components of a service specification?

A Software development model based on a contract between consumer (client) and provider (server). It is more a concept rather than a technology and also often considered a buzzword  


specifies the following 5 components:
 
 * Functional description of the service
 * Input requirements and output specifications
 * Precondition environment state
 * Postcondition environment state
 * Error handling in case of breakdown

#### 8. How do different architectures differ from each other, and what is their relationship to each other?

Architectures

#### 9. What are recent trends in EAI?