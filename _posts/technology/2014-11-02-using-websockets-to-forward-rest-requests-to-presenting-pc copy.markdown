---
layout: post
title:  "Using Websockets to forward REST request data to another device"
date:   2014-11-02 15:00:00
categories: technology
tags: amazon aws nodejs websockets rest 
thumbnail: /images/websockets-logo.png

---

Alright so in my [previous post](http://pascalwhoop.github.io/technology/2014/11/02/gettings-started-with-amazon-aws.html) I explained how I got my EC2 Server running with a NodeJS Application. Now i want to expand on this and make it possible to host a mobile webapp on this server which takes REST requests from clients and forwards them to a developer machine that connects to the server using WebSockets. The developer machine can then make use of the data, e.g. to control lights in my case.   

## Basic NodeJS Setup

All code can be found on my github page: [https://github.com/pascalwhoop/RatingForwarder](https://github.com/pascalwhoop/RatingForwarder)

I use express.js for the server (and the REST services) and ionic for the mobile application. Ionic is usually meant to be used as a stand alone hybrid app but I'll use it as a webapp. I haven't worked on minifying and compressing but will look into that later.

### NodeJS websocket API on the Server

The code for the Server is fairly simple

{% highlight javascript %}
var WebSocketServer = require('ws').Server;

//initiate the websocket for our presentation laptop
//its "last one served" which is rather unsafe, but I only use it once and dont feel like putting too much effort in it. anyone could "kick me out" but for now I wont worry bout that. 
wss = new WebSocketServer({port: 8888});
var presenterWS = null;
wss.on('connection', function (ws) {
    presenterWS = ws;
    console.log("presenter connected");
});

//any request that is made via REST converts the request data and calls this function to pass the data to the presentationLaptop. All data is then passed (pushed) via Websockets to my presentation laptop 
var sendToLaptop = function (type, data) {
    if(presenterWS){
        presenterWS.send(JSON.stringify({type: type, data: data}));
    }
    else{
        console.log("WARNING: no presenter registered yet! no rating will be forwarded");
    }
}
{% endhighlight %}

## NodeJS websocket API on the client (the presentation laptop)

The client is fairly simple as well. Connect to the server and handle all incoming messages. We have a structure of `{type: type, data: data}` so we can use a switch case in this case to determine the data type and handle it accordingly. Note that WebSockets only transfer text, array and blobs so our JS object will have to be JSONified. 
{% highlight javascript %}
var WebSocket = require('ws');

var AMAZON_URL = "ec2-44-23-137-220.eu-central-1.compute.amazonaws.com";
var ws = new WebSocket('ws://'+ AMAZON_URL + ":8888");
ws.on('open', function () {
    console.log("WS connection success");
});
ws.on('message', function (data, flags) {
    data = JSON.parse(data);
    switch(data.type) {
        case "register":
            userRegister(data.data.username);
            break;
        case "comment":
            userComment(data.data.username, data.data.comment);
            break;
        case "rating":
            userTheoryRating(data.data.username, data.data.rating);
            break;
    }
});

{% endhighlight %}


