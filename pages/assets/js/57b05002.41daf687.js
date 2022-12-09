"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Raspberry Pi 4 Model B Hardware Guide"},o="Raspberry Pi 4 Model B Hardware Guide",l={unversionedId:"pi4b",id:"pi4b",title:"Raspberry Pi 4 Model B Hardware Guide",description:"Raspberry Pi 4 Model B",source:"@site/docs/pi4b.md",sourceDirName:".",slug:"/pi4b",permalink:"/pages/docs/pi4b",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Raspberry Pi 4 Model B Hardware Guide"},sidebar:"tutorialSidebar",previous:{title:"Wifid",permalink:"/pages/docs/services/wifid"},next:{title:"Security",permalink:"/pages/docs/security"}},s={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Using a different wireless card",id:"using-a-different-wireless-card",level:3},{value:"Install the SPR PI 4 Image",id:"install-the-spr-pi-4-image",level:2},{value:"Running",id:"running",level:3},{value:"Follow the SPR Setup Guide",id:"follow-the-spr-setup-guide",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"raspberry-pi-4-model-b-hardware-guide"},"Raspberry Pi 4 Model B Hardware Guide"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://images.prismic.io/rpf-products/3a15d4da-46e3-4940-8be6-9fc7d201affe_RPi_4B_FEATURED.jpg",alt:"Raspberry Pi 4 Model B"})),(0,n.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.kt)("p",null,"The current setup assumes you'll be using a Raspberry Pi Model 4b with an mt76 based wireless adapter (wlan1).\nOptionally an additional usb ethernet adapter (eth1) can be connected to a switch for additional wired devices.\nThe built-in ethernet port of the Raspberry Pi (eth0) is connected to upstream/WAN/internet"),(0,n.kt)("p",null,"Hardware requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A WiFi Dongle for better performance and WPA3 support. Both ",(0,n.kt)("a",{parentName:"p",href:"https://amzn.to/3u6U5NS"},"Alfa's AWUS036ACM")," and ",(0,n.kt)("a",{parentName:"p",href:"https://amzn.to/3wei0NY"},"Netgear's A620")," have been tested to perform well (500-550Mbps top speed) and both use the mt76x2u driver)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://amzn.to/3ijDuAN"},"USB SSD")," works best. A 16GB SSD card can also be used but is not recommended")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"8 GB of RAM are recommended for building SPR on the Pi. Any amount of RAM can work for building but ramdisks have to be disabled in the docker build, see the README. The prebuilt GHCR has prebuilt SPR images available also.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(Optional) An Ethernet USB Dongle for additional LAN devices since the built-in ethernet card (eth0) will be used for the WAN. The ",(0,n.kt)("a",{parentName:"p",href:"https://amzn.to/3qkuujo"},"UE 300")," has been tested to run near line speed on the Pi (950Mbps). The ",(0,n.kt)("a",{parentName:"p",href:"https://www.amazon.com/TP-Link-Portable-Ethernet-Notebooks-UE330/dp/B01N9M32TA"},"U3 330")," also works and provides additional USB 3.0 ports.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For running multiple WiFi adapters, a powered USB 3.0 capable hub is recommended"))),(0,n.kt)("h3",{id:"using-a-different-wireless-card"},"Using a different wireless card"),(0,n.kt)("p",null,"For using a different wireless adapter, the default hostapd configuration may need to be modified in the UI or in ",(0,n.kt)("inlineCode",{parentName:"p"},"configs/wifi/"),". Note that the built-in Raspberry PI Wireless card can not be used as an AP by default as it does not support AP/VLAN, which is a feature that SPR relies on."),(0,n.kt)("h2",{id:"install-the-spr-pi-4-image"},"Install the SPR PI 4 Image"),(0,n.kt)("p",null,"For running SPR on a Raspberry Pi 4, a pre-built image is available. You can grab it on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/releases/"},"releases page"),"."),(0,n.kt)("p",null,"You can download ",(0,n.kt)("inlineCode",{parentName:"p"},"spr.img.xz")," and flash it with a tool such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Balena Etcher @ https://www.balena.io/etcher/")),(0,n.kt)("p",null,"If you prefer to write the image using the command line"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# On a mac, write the image to the external disk (rdiskX).\n# Be careful to make sure you identify your removable drive correctly.\n$ xzcat spr.img.xz | dd of=/dev/rdiskX bs=$[1024*1024]\n")),(0,n.kt)("h3",{id:"running"},"Running"),(0,n.kt)("p",null,"Then boot the drive on the Pi. Setup will complete on device and reboot.\nYou should be able to navigate to the device on port 80 and see a setup screen"),(0,n.kt)("p",null,"Under ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/spr/super/config/base/config.sh"),", consider disabling ",(0,n.kt)("inlineCode",{parentName:"p"},"UPSTREAM_SERVICES_ENABLE=1")," if you do not want the API and SSH exposed to the WAN ethernet interface. This can also be toggled under the Firewall tab\nin the UI."),(0,n.kt)("p",null,"Default credentials for ssh are:\n",(0,n.kt)("inlineCode",{parentName:"p"},"ubuntu:ubuntu")),(0,n.kt)("h3",{id:"follow-the-spr-setup-guide"},"Follow the SPR Setup Guide"),(0,n.kt)("p",null,"If you prefer to run on an existing image, or run from a fresh Ubuntu server install,\nyou can ",(0,n.kt)("a",{parentName:"p",href:"/docs/setup_run_spr"},"Follow the SPR setup guide")))}u.isMDXComponent=!0}}]);