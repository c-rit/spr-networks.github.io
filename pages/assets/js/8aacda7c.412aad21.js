"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[1262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"spr_mini_pc",title:"Running SPR on a Mini PC with WiFi 6",authors:"ltsrad",tags:["SPR","x64","80211ax"]},o=void 0,l={permalink:"/pages/blog/spr_mini_pc",source:"@site/blog/2022-03-18-x64-support.md",title:"Running SPR on a Mini PC with WiFi 6",description:"Intro",date:"2022-03-18T00:00:00.000Z",formattedDate:"March 18, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"x64",permalink:"/pages/blog/tags/x-64"},{label:"80211ax",permalink:"/pages/blog/tags/80211-ax"}],readingTime:2.58,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"spr_mini_pc",title:"Running SPR on a Mini PC with WiFi 6",authors:"ltsrad",tags:["SPR","x64","80211ax"]},prevItem:{title:"Gigabit WiFi with SPR & The 4x4 MT7915",permalink:"/pages/blog/wifi6"},nextItem:{title:"Supernetworks just Released a React User Interface",permalink:"/pages/blog/UI Push"}},s={authorsImageUrls:[void 0]},p=[{value:"Intro",id:"intro",level:2},{value:"First, get a Mini PC ready",id:"first-get-a-mini-pc-ready",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure hostapd for 802.11AX",id:"configure-hostapd-for-80211ax",level:2},{value:"Some Notes on the MT7915",id:"some-notes-on-the-mt7915",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In the blog post we'll describe how to build and run SPR on a Mini-PC. And we'll use a WiFi 6 capable radio inside."),(0,r.kt)("h2",{id:"first-get-a-mini-pc-ready"},"First, get a Mini PC ready"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identify a good mini PC to use. ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/willy_wong"},"Wilson")," suggested\na look at QOTOM's i3 broadwell routers."),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("a",{parentName:"p",href:"https://amzn.to/36qmZjI"},"g330")," is not bad. It's a fanless build with a TDP of 15W. One mini pci-e slot is dedicated to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Serial_ATA#Mini-SATA_(mSATA)"},"mSATA"),", and the other can be used to fit a wifi radio. It also has additional SATA available for one more storage drive."),(0,r.kt)("a",{href:"https://amzn.to/36qmZjI"},(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{parentName:"p",src:"https://m.media-amazon.com/images/I/61KcP6zQLsL._AC_SX679_.jpg",alt:null}))),(0,r.kt)("p",{parentName:"li"},"  WARNING: On this device, the mini-pcie slot has a tall post for half-sized cards that needs to be removed to fit thicker full sized WiFi cards.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a good WiFi radio."),(0,r.kt)("p",{parentName:"li"},"We'll run with an 802.11ax card that works with Linux in AP mode (at least 802.11ac is recommended)."),(0,r.kt)("p",{parentName:"li"},"Mediatek is the disruptor in this space and supports AP mode on Linux. ","[","NOTE: Many other cards will NOT work with ax in AP mode on Linux with open source drivers","]"," . If you have recommendations please do not hesitate to reach out on the ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#spr:matrix.org"},"matrix chat"),".  For the G330 Qotom, 2 antennas wires are provided to outside the case, so the 2x2 configuration is best."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.asiarf.com/shop/wifi-wlan/wifi_mini_pcie/wifi6-2t2r-dual-bands-dbdc-mpcie-card-11ax-mt7915-aw7915-npd/"},"MT7915")," can be purchased from AsiaRF."),(0,r.kt)("a",{href:"https://www.asiarf.com/shop/wifi-wlan/wifi_mini_pcie/wifi6-2t2r-dual-bands-dbdc-mpcie-card-11ax-mt7915-aw7915-npd/"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_400/https://www.asiarf.com/wp-content/uploads/2021/07/aw7915-npd-1_top.jpg",alt:null}))))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Download and install Ubuntu Server. Since the WiFi 6 driver is a work in progress, we grabbed a daily release of ",(0,r.kt)("a",{parentName:"p",href:"https://cdimage.ubuntu.com/ubuntu-server/daily-live/current/jammy-live-server-amd64.iso"},"Jammy Jellyfish 22.04")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://cdimage.ubuntu.com/ubuntu-server/daily-live/current/"},"Ubuntu Live")," page to get the latest fixes. Copy the installer to installation media (a flash drive) then plug it in and go."),(0,r.kt)("p",null,"Then follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup_run_spr"},"SPR Setup Guide"),"."),(0,r.kt)("p",null,"Our config/base/config.sh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/sh                                                                                                              \nSSID_NAME=6lab                                                                                                         \nSSID_INTERFACE=wlan1                                                                                                   \n\n#PPPIF=eth0                                                                                                            \n#WANIF=ppp0\n#PPP_VLANID=201\n#PPP_PROVIDER=provider-config\nWANIF=enp1s0\nRUN_WAN_DHCP=true\nRUN_WAN_DHCP_IPV=4\n# Uncomment the next line if a second ethernet port goes to wired LAN\n#LANIF=eth1\nVLANIF=wlan1\nVLANSIF=$VLANIF.\n\nLANIP=192.168.3.1\nDNSIP=$LANIP\nTINYNETSTART=192.168.3.4\nTINYNETSTOP=192.168.3.255\nTINYNETMASK=255.255.255.252\nTINYSLASHMASK=30\nDOCKERNET=172.17.0.0/16\nDOCKERIF=docker0\n\nWIREGUARD_PORT=51280\n#WIREGUARD_NETWORK=192.168.3.1/24\n")),(0,r.kt)("h2",{id:"configure-hostapd-for-80211ax"},"Configure hostapd for 802.11AX"),(0,r.kt)("p",null,"On the SPR device, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"configs/wifi/hostapd.conf")," and add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ieee80211ax=1\nhe_su_beamformer=1\nhe_su_beamformee=1\nhe_mu_beamformer=1\nhe_oper_chwidth=1 # 80mhz channel\nhe_oper_centr_freq_seg0_idx=42\n")),(0,r.kt)("p",null,"Restart wifid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose restart wifid\n")),(0,r.kt)("p",null,"Connect a wifi 6 client and verify HE codings are available"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# iw dev wlan1.4096 station dump -v  | grep bitrate\n        tx bitrate:     1200.9 MBit/s 80MHz HE-MCS 11 HE-NSS 2 HE-GI 0 HE-DCM 0\n        rx bitrate:     720.6 MBit/s 80MHz HE-MCS 7 HE-NSS 2 HE-GI 0 HE-DCM 0\n")),(0,r.kt)("h2",{id:"some-notes-on-the-mt7915"},"Some Notes on the MT7915"),(0,r.kt)("p",null,"The MT7915 is a Dual Mode driver. This means that it supports both 2Ghz and 5Ghz\nfrequencies simultaneously. For our install the 2ghz interface is on ",(0,r.kt)("inlineCode",{parentName:"p"},"wlan0")," and 5Ghz on ",(0,r.kt)("inlineCode",{parentName:"p"},"wlan1"),". This is really wonderful, since one card can serve older IOT devices that only run on 2Ghz as well as more modern devices at high speeds."),(0,r.kt)("p",null,"The linux kernel driver is not yet as stable as it could be, so beware that it may not yet be production ready -- several assertions and crashes were noticed. The mainline kernel does not yet support radar scanning, however the code is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openwrt/mt76"},"openwrt development branch"),"."))}c.isMDXComponent=!0}}]);