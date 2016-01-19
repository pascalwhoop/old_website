---
layout: post
title:  "Create own OwnCloud (Dropbox clone) on RPI"
date:   2014-11-23 20:00:00
categories: technology
tags: technology dropbox cloud security
author: Pascal Brokmeier
summary: Quick installation guide to install a Dropbox clone on a raspberry pi
---

Quick installation guide to install a Dropbox clone on a raspberry pi:

1. Forward Port 80 & 443 to RaspberryPi and give it a fix internal IP address
2. ssh into pi
3. https://github.com/petrockblog/OwncloudPie
	1. `sudo apt-get update`
	2. `sudo apt-get install -y git dialog`
	3. `cd && mkdir Downloads && cd Downloads/`
	4. `git clone git://github.com/petrockblog/OwncloudPie.git`
	5. `cd OwncloudPie/ && sudo ./owncloudpie_setup.sh`
	6. follow the steps. Make sure to provide a CN when creating the certificate
		1. CN = DNS or external IP 
		2. more info about CN errors [here](http://www.turnkeylinux.org/forum/support/20131014/commonname-attribute-error#comment-19090)
4. Download clients for desktop & mobile
5. [OPTIONAL] Move data to external drive
	1. `sudo mkdir /mnt/usbdrive`
		1. `sudo chown -R www-data /mnt/usbdrive/` described [here ](http://www.computerhope.com/unix/uchown.htm)
	2. `sudo nano /etc/fstab`
	3. add this line: `/dev/sda1       /mnt/usbdrive           ext4    defaults        0       0 `
		1. note that sda1 might be different in your case. find out which is right for your external drive [http://linuxconfig.org/howto-mount-usb-drive-in-linux](http://linuxconfig.org/howto-mount-usb-drive-in-linux)


