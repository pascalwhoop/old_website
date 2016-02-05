---
layout: post
title:  "MSc. Information Systems @UzK: Social Computational Media summary"
date:   2016-02-02
categories: academic
tags: ["social networks", "university", "graph"]
banner: scm_banner.png
bannersize:
hasmath: true
hascsvdownload: false
github: true
author: Pascal Brokmeier
summary: A summary of the course Social Computational Media during the M.Sc. Information Systems winter semester 2015/16 at the University of Cologne
---

## 2. When are networks useful & terminology

### Usefullness

* if **transitivity** matters
* if something can "move though/over" the graph/network
* if models are **aggregate** but **disagreggation** is helpful
* to better understand *complex systems*

### Network types

**Adjacency Matrix**: A binary matrix that describes wether nodes are linked or not

With directed graphs, symmetry is not always the case
![](/images/2016-02-02-social-computational-media-summary/1.png)

#### Bipartite Graphs

* A graph whose nodes can be divided into two disjoint sets U and V
* Every node in U has a connection to at least one in V and vice versa
![](/images/2016-02-02-social-computational-media-summary/2.png)

**One Mode Projections** are graphs that only containt the nodes of one of the two subsets. The edges usually describe the common neighbors of two nodes.

![](/images/2016-02-02-social-computational-media-summary/3.png)

#### Complete graph
if L(Aij) == Lmax

If each node is connected to all other nodes, a graph is considered complete. 

&lt;k&gt;=N-1

### Terminology

* **Node degree**: number of connections
    * **L** - describes the total amount of edges present in a given graph
        ![](/images/2016-02-02-social-computational-media-summary/4.png)
    * The node degree for a given node in A<sub>ij</sub>: k<sub>i</sub> or k<sub>j</sub>
    * degrees for a node in directed graphs can be divided into in- and out-degree
    * **Average degree**(of a graph): &lt;k&gt; &#8801; 2L/N
* **Paths**: are sequences of nodes in which each node is adjacent to the next node. A path can contain the same node twice. 
* **Distances**: describe the length of the shortest path between two nodes
    - in a digraph, the distance frmo A -> B can be different than from B -> A
* **Diameter**: The maximum distance between any pair of nodes
* **Average path length**
* **Bridge**: A connection that, if erased, causes the graph to be disconnected
* **Isolates**: unconnected nodes
* **Components**: parts of a graph, that are in itself interconnected but may lack a connection to other components
* **Strongly connected digraph**: has a path frmo each node to every other node and vice versa
* **Weakly connected diagraph**: it is connected (if direction is disregarded)
* **in-components** (nodes that can reac the scc) and **out-components** (nodes that can be reaced from the scc)
![](/images/2016-02-02-social-computational-media-summary/5.png) 


----

## 3 Large-Scale measures for networks

Measures that inform us about the large-scale structure of the entire network

1. Clustering coefficients
2. Average distances
3. Degree distribution

### Clustering Coefficient

Quantifies level of transitivity in a network. 

* Number of closed paths of length 2 / number of paths of length 2
* **closed triad**: If a knows b and b knows c and a also knows c
* 1: Perfect transitivity
* 0: a tree 

* **Local clustering**: Same as global coefficient but only for one node C<sub>i</sub>
    * nodes with high k (node degree) often have lower C<sub>i</sub>

Watts and Strogatz global clustering: C<sub>WS</sub> = average of all local C

Different ones are used (we use C<sub>WS</sub>, but beware

### Average Path length

Small world-effect: Path lengths in real world networks are small even though networks are very large

### Degree distribution

* Define p<sub>k</sub> as the fraction of nodes of a network having degree k
* ∑ of all fractions = 1
* Often heavy-tailed / right-skewed → large "Hubs"

### Sparsity
Most networks are sparse. The adjacency matrix is filled with 0's

### Terminology

* **Partial transitivity**: related to clustering
* **Structural holes**: often correlate with hubs. If low C<sub>i</sub> then SH are implied


---- 

## 3.1 Random networks

**Path length scales logarithmically**
**Degree distribution is almost normal**

### ER Model

* → Erdös and Rényi
    * nodes are connected at random
    * network is undirected
    * size is fixed N
    * p = probability that any two nodes share an edge
    * m = total number of edges in the graph
* Edges per node: Binomial distribution
* ER networks have very short paths

### Giant component

Average degree &lt;k&gt; larger 1 →giant component emerges

--- 

## 4 Small World Phenomenon

### Stanley Milgram

* 96 People send package back to Boston
* Average path length: 5.9
* Hubs → *Sociometric Superstars*
* **Criticism**: 
    * Biased
    * not shortest path
    * only 20% of actual packages were evaluated
    * not really random
* BUT: Good guideline, brought up research questions

Email replication: No *sociometric superstars*

* **Homopholy**: Clustering in social networks → long paths
* **Randomness**: Loose connections → short paths

#### Formal definition

* **High clustering**:  C<sub>network</sub> &gt;&gt; C<sub>random graph</sub>
* **Small shortest paths**: l<sub>network</sub> ≈ ln(N)

WHY?
Only very few random weak links are necessary to interconnect clusters and make the world *small*

### WS Model

Each node has 4 neighbors. With probability p rewire any given node. 
p = 0 → regular lattice
p = 1 → random graph

### Searchability of shortest paths

Shortest paths exists, but how to find them? **NP hard** problem! Can collective, **decentral decisions** lead to overall short paths? What are the prerequisites?

p(link u→v) = distance(u,v)<sup>-r</sup>
![](/images/2016-02-02-social-computational-media-summary/6.png)

With r=0 → algorithm is quadratic: a<sub>0</sub>n<sup>2/3</sup>
WIth r > 2 → time is linear ~n(r-2)/(r-1)
With r = 2 → algorihm is log(N)*2

Decentral algorigthms can lead to short paths but **requirement: r=2**
Intersting: Most real world networks are close to r=2

---

## 5 Scale Free Property

### Logarithmic axes in plots

* LogLog plots can visualize data which is usually very far apart from one another or has strongly different growing attributes

### Degree distribution of the WWW

The WWW Degree distribution has a "long-tail" and most websites only have very few links pointing towards them. However, there are also a relevant number of sites that have hundreds or even thousands of links pointing to them showing their *hub*-like nature

Above a certain x value, the **power law** is always "higher" than the exponential. Meaning it will have a long tail
![](/images/2016-02-02-social-computational-media-summary/7.png)

### Scale free networks

Networks with a power-law tail in their degree distribution are called **scale-free-networks**. They are called this due to them not  being clustered on a characteristic scale. They have **no real mean**.

![](/images/2016-02-02-social-computational-media-summary/8.png)

Interestingly, most networks have high variation in degrees and therefore don't follow the structure an ER model would predict. Also most networks have a **common exponent 3&gt;ɣ&gt;2**
![](/images/2016-02-02-social-computational-media-summary/9.png)

Most degree exponents are smaller than 3 → &lt;k<sup>2</sup>&gt; diverges
The average value &lt;k&gt; is not meaningful

![](/images/2016-02-02-social-computational-media-summary/10.png)

### Barabási Albert Model (BA)

Power laws don't adhere to the law of large numbers. No matter how large the sample, the function doesn't tend to have a meaningful mean. 
Since many networks have a power law degree, is there a common similarity between those networks? Could it be found during the network formation / built phase? Each time a new node joins the network, how does it get connected? Where does it connect to?

#### Preferential attachment

**Probability that a node connects to a node with k links is proportional to k**

Nodes preferably link to nodes already well connected. These cause hubs. 

In technical systems, hubs are a design-linked necessity. In social systems, hubs emerge. Examples are people with millions of followers on twitter etc.

The BA model (and others) is a **dynamic model**. Capture dynamics, not structure.

#### Attributes of BA model

* Clustering smaller than in WS but more than in ER(random)
* Still a small world


---

## 6 Centrality

A measure to identify **important nodes**

### Degree centrality

A node is central if it has a high degree. 

C<sub>i</sub>=k<sub>i</sub>/(n-1)

### Closeness

Measures how far away a node is from everyone else. A node may have a high degree yet still is a relatively distant sub-graph with a high distance to most other nodes. 
![](/images/2016-02-02-social-computational-media-summary/11.png)

Average distance to all other nodes l<sub>i</sub>= 1/n * (∑<sub>j</sub> * d<sub>ij</sub>)
Low values → good
High values → bad

inverse is closeness centrality → values between 0-1 with close to 1 being distance 1 to any node and 0 being infinite distance to all nodes

Problem: **Small range**. Due to short paths in most networks, the range within a network is quiet small. Values are very close together. Also changes in network topology cause a lot of reordering in an ordered list. 

Problem: **Components and ∞ distances**: If a network has several components, theoretical distance is often ∞. Workaround: average only over nodes in same component. → leads to inflation of small components.
**Better: Harmonic mean distance**: 
![](/images/2016-02-02-social-computational-media-summary/12.png)
Fraction at end makes infinite distances drop out. But: Most Software packages don't contain it.
### Betweenness
How many node-node connections have to go "through you"? How often are you the a middle man on a shortest path. 
![title](/images/2016-02-02-social-computational-media-summary/13.png)

If two equal shortest-paths exist, the nodes must share credit. So each node gets .5 .. If 3 exist they get 1/3 and so on.

### PageRank

Created by Google. Recursive definition. 

1. Every node initially has PageRank 1/n with n being the total amount of nodes
2. Choose number of steps k
3. Perform a sequence of k updates to all PageRanks foreach {
    1. Divide current PageRank equally across outgoing arcs of each node
    2. Pass it to neighbors
    3. Now the node has PageRank 0. But if others point to it, it will receive a rating again

Values **stabilize** for large k
**Equilibrium** can be reached after enough steps k

**Problem:** "End-nodes" that only have in-edges but no out-edges collect all the PageRank. 

**Solution:** 

* Same idea as water evaporation: Take random factor s | 1&gt;s&gt;0
* Multiply each nodes rank with s
* Now sum of all ranks is s
* Equally distribute 1-s to all nodes "like rain"

### Correlation between Centrality measures

* most are highly correlated
* High degree usually causes high betweenness
    * However high betweenness possible with very low degree → brokerage


---

## 6.1 Social capital & „strength of weak ties“

### Social capital

**The ability of actors to secure benefits by virtue of membership in social networks or other social structures**

like:
* access to information and help
* improved coordination through higher trust
* more control over information flow

### Relevant social network elements

* **Resources of direct contacts**: The more resources are available, the more likely you will be able to access the one you need
* **Number of ties**: The more relations you have the more you can spread demands. You have redundancy
* **Strength of ties**: Frequency of interactions, *depth of friendship*, monetary value of trade between
    * 2 dimensions: quantitative and qualitative attributes: time/frequency & depth/intimacy/trust
* **Local clustering**: 
    * A&B + B&C: B can be interested in A&C meeting to improve network effectiveness
    * However can also have negative effects: betweenness, information flow control

#### Bridging structural holes with weak ties

weak ties are very beneficial: survey about "how did you find your job": **47% got job through weak ties** 8%  through strong ties (rest not social connections)

People we know well, have same (limited) information base (clustering) and therefore lack ability to offer *new* leads

**Definition of Bridge**:

* Strong version: a bridge connects to separate components. (but: giant component → bad definition)
* Weak version: a bridge is an edge that shortens the path between two nodes

**Strong triadic closure property**

* Violated if triangle is not closed (the middle one is the violator)
* satisfies it if triangle is closed

**STILL AN ISSUE?!?! DONT GET IT**

* local bridges are very likely to be weak ties

### The online filter bubble

* Now mostly through social media
* Content selection mainly by algorithms
    * automated sorting (e.g. FB newsfeed)
* automated sorting has potential to drastically limit exposure to attitude-challenging information
    * if we get shown more what we have looked at before, weak ties go lost

#### Does FB show diverse news in newsstream?

Setup: 10 Mio individuals with declared ideologies, 7 mio. links to content. Observe clicks / shares

Result: Facebook is biased towards things we agree with. We lose contact to unfamiliar ideas.

Is this the age of the "social algorithm"?

