---
layout: post
title:  "How to get rid of ads on android without root"
date:   2014-11-10 20:00:00
categories: Technology
tags: android technology advertising tutorial
thumbnail:
---

I recently came across a cool article that showed how to get rid of advertising on android without rooting your device. This is useful if your phone is supplied by your employer and you aren't allowed to root it. 

Check this [xda how to adblock without rooting article](http://forum.xda-developers.com/showthread.php?t=2726443) to see how to do it. 

## short version:

1. Install [adblock plus for android](https://adblockplus.org/en/android-install)
2. add proxy  (localhost:2020) for wifi and 3G
3. benefit!

## long version

1.  Install [adblock plus for android](https://adblockplus.org/en/android-install)
2. Set the proxy settings for wifi and 3G
	1. long click every AP you want to be affected under the wifi settings
	2. edit the proxy settings under advanced settings
	3. go into network settings > APN > edit the internet one
3. hide the ABP notification for styles

Look at the screenshots below for more information:

**Settings for 3G:**

<img style="max-height: 500px;" src="/images/android_adb_no_root_1.png"/>

**Settings for Wifi (need to be set for every AP sadly, so set it for your main 3-4 wifi networks)**

<img style="max-height: 500px;" src="/images/android_adb_no_root_2.png"/>

**Hide notifications of ABP (I dont like those notificiations trashing my status bar, so i hide them)**

<img style="max-height: 500px;" src="/images/android_adb_no_root_3.png"/>



