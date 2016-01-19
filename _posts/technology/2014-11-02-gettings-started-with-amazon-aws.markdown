---
layout: post
title:  "Getting started with Amazon AWS and NodeJS"
date:   2014-11-02 12:00:00
categories: technology
tags: amazon aws nodejs
author: Pascal Brokmeier
summary: I recently bought a new camera so I can take great photos of my trip to Australia. I just want to quickly share a few of the better ones in my first post on this new blog
---

## Getting the EC2 Instance up and running
This will be more of a note 2 self kind of post, but if it helps somebody I'm happy with it.

I got started created a free tier account on AWS. I then created an EC2 Instance (just followed all the defaults, took the SSD since its free too) and afterwards activated some monthly bill notificiations. This is so I don
t pay extra since I want this to be free for now. 

The Instance is up and running by now and I want to connect to it. I'll use SSH:

[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)

I created a little script to make it easer to connect to it:

{% highlight bash %}
#!/bin/sh
cd ~/Documents/Code/Amazon\ AWS
ssh -i keyfile.pem ec2-user@XXXX.compute.amazonaws.com
{% endhighlight %}

My problem at first: I couldn't connect to my instance from my workplace. I had to VPN to my university and from there I was able to ssh. Got to talk to our IT about that. 

## Getting NodeJS running

Got the Ideas from here:
[http://www.bennadel.com/blog/2321-how-i-got-node-js-running-on-a-linux-micro-instance-using-amazon-ec2.htm](http://www.bennadel.com/blog/2321-how-i-got-node-js-running-on-a-linux-micro-instance-using-amazon-ec2.htm)

basically did this: (all on EC instance)

{% highlight bash %}
sudo yum install gcc-c++ make
sudo yum install openssl-devel
sudo yum install git
{% endhighlight %}

Then downloaded and installed nodejs

{% highlight bash %}
cd ~
mkdir Downloads
cd Downloads/
wget http://nodejs.org/dist/node-latest.tar.gz
tar xzf node-latest.tar.gz
cd node-v0.10.33
./configure --prefix=/usr
make
sudo make install
{% endhighlight %}

### Installing nginx as proxy
{% highlight bash %}
sudo yum install nginx
{% endhighlight %}

Added an inbound rule on port 80 in my security group and voilà: nginx landing page.

next I edited `/etc/nginx/nginx.conf` and added this line:
`proxy_pass http://localhost:8080;` in the `http{server{location{/*here*/}}}` spot. I also commented out the line `root  /usr/share/nginx/html;`. Now This forwards all requests to port 8080.

### Creating a sample NodeJS Server

added the directory `~/www/test` cd'd into it and added a file `server.js`

{% highlight javascript %}
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8080, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
{% endhighlight %}

`node server.js` et voilà: `Hello World` on my URL port 80


