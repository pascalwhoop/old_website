---
layout: post
title:  "MSc. Information Systems @UzK: Social Computational Media - Exercise 3"
date:   2016-01-31
categories: academic
tags: [social networks, university]
banner: graph_banner.png
bannersize:
hasmath: true
hascsvdownload: false
github: true
author: Pascal Brokmeier
summary: Answers to the excercise questions of the third excercise which was made up of 27. previous exam questions. 
---

### Question 1

![](/images/graph_banner.png){: height="250px"}

* Point 1 is the only one using Technology A
* Usage of A has a benefit of \`a=4\`
* Usage of B has a benefit of \`b=4\`
* Node X switches to adopting A when \`q=p\`

**a) What effect would be expected if a was reduced to a lower number?**

\`q=2/(4+2)=1/3\`


Step 1: 

* Node 3 has 4 ties → no adopt
* Node 4 has 4 ties → no adpot
* Node 2 has 3 ties → adopt!

Step 2: 

* Node 3 and 4 adopt \`p=1/2\`

In step 1, the adoption of (2) is dependent on \`p = 0,3333 \text{ and } q = 0,3333\`. So in this case, a change of a to any number lower than 4 would cause no adoption to take place.

**b) What is the minimum value of a to ensure adoption in the other two subcommunities?**

The bridges 3-10 and 4-5 are both characterised by a node-degree of 4 for the potentially adopting nodes. So for both, \`p=0,25\` which means \`0,25=2/(a+2)\` so: \`a=6\`.

### Question 2

![](/images/2016-01-31-Social-Computational-Media-excercise-1/1.png){: height="250px"}

* (1) and (2) use A, everyone else uses B
* Usage of A has a benefit of \`a=8\`
* Usage of B has a benefit of \`b=2\`

\`q=2/(8+2)=1/5\` → 20% of neighboring nodes must use A for a node to adopt.

**a) Simulate diffusion**

Step 1: 

* Node 3,4,5 → adopt

Step 2:

* Node 6: node-degree = 5 → adopt

Step 3: 

* Node 13,10,7,12 adopt

Step 4: 

* Node 9, 11 adopt
* 100% adoption reached

**b) Will the technology be market dominating?**

Yes

### Question 3

![](/images/2016-01-31-Social-Computational-Media-excercise-1/1.png){: height="250px"}

* (1) and (2) use A, everyone else uses B
* Usage of A has a benefit of \`a=6\`
* Usage of B has a benefit of \`b=4\`


\`q=4/(6+4)=2/5\` → 40% of neighboring nodes must use A for a node to adopt.

**a) Simulate diffusion**

Step 1: 

* Node 3,5 → adopt

Step 2: 

* Node 4 → adopt

Node 6 will not adopt because \`q=0,4\` but \`p=0,2\`

5 out of 12 companies will have adopted. The company will not dominate the market. 

**b) Whats the minimum utility of A to ensure market domination?**

To dominate the market, the diffusion across the bridge must occur. For this to happen, \`q ≤ 0,2\`


\`4/(4+a)=0,2\`

\`a=16\`

### Question 4
![](/images/2016-01-31-Social-Computational-Media-excercise-1/2.png){: height="250px"}

**a)**



