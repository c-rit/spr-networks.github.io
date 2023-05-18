"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={},o="Frequently Asked Questions",i={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"What does SPR stand for?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/pages/docs/faq",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wifid",permalink:"/pages/docs/services/wifid"},next:{title:"Raspberry Pi 4 Model B Hardware Guide",permalink:"/pages/docs/pi4b"}},l={},u=[],p={toc:u};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What does SPR stand for?"),(0,r.kt)("p",null,"SPR stands for Secure Programmable Router")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is SPR?"),(0,r.kt)("p",null,"SPR is Linux software for running a hardened wifi network that also makes it easy to add and manage devices. Devices are isolated into individual VLANs and then connected securely into the rest of the network.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How is SPR different from OpenWRT?"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"SPR is built to support the leading edge of Linux\u2019s networking features, while applying best in class security practices and modern coding standards."),(0,r.kt)("li",null,"OpenWRT powers many of the proprietary consumer wifi routers on the market today and was originally intended as a replacement for proprietary embedded firmware. Some routers allow replacing the vendor\u2019s OpenWRT with open source builds of the OpenWRT firmware."),(0,r.kt)("li",null,"SPR is designed to run in docker containers on systems with a bit more memory and storage, opening up many possibilities like hosting voice assistants, network fuzzers, and media servers. However, it likely won\u2019t work as a replacement for embedded router firmware."),(0,r.kt)("li",null,"OpenWRT tries to optimize builds for embedded devices without much storage space or memory. It supports a tremendous range of devices and hardware, although older devices are losing support due to storage and memory limitations."),(0,r.kt)("li",null,"SPR is built mostly with golang and a react frontend. Where possible, memory-safe languages with good security track records are preferred over native code such as C or code that is difficult to write securely, like PHP."),(0,r.kt)("li",null,"OpenWRT is built mostly with C, Shell Scripts, and Lua/LUCI for the web front end."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I update SPR?"),(0,r.kt)("p",null,"You do not need to reflash your system.\nFrom the UI: go to ",(0,r.kt)("em",{parentName:"p"},"System Info")," -> ",(0,r.kt)("em",{parentName:"p"},"SPR Release"),". You can run ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Check"))," to see if there's an update and hit ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Update")),"."),(0,r.kt)("p",null,"From the CLI:\nGo to the SPR directory (",(0,r.kt)("inlineCode",{parentName:"p"},"/home/spr/super/"),"), Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/spr/super\ngit pull\ndocker-compose pull\ndocker-compose up -d\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How is SPR different from an ordinary network?"),(0,r.kt)("p",null,"SPR places each WiFi device into its own VLAN and subnet, using per-device passphrases. When combined together, the devices form a supernetwork. The VLAN isolation creates strong hardening features. Devices can not sniff each other\u2019s traffic, they can not perform ARP/MAC spoofing, and they can not communicate with each other without being granted access while they may still be able to access the internet.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is there any telemetry or statistics sent from SPR to Supernetworks or Third Parties?"),"No. This can be confirmed by viewing the code in the github repo or if you prefer, look at the network traffic from SPR"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What are groups vs tags?"),(0,r.kt)("p",null,"Groups in SPR refer to network access and which devices should be able to communicate with one another. There are three special, built-in groups:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wan")," : the device can communicate with the internet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dns")," : the device can make DNS queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lan")," : the device can communicate with all other devices")),(0,r.kt)("p",null,"When custom groups are created, all of the devices in that group can communicate with each other. For example, a custom ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"gaming"))," group could be created for devices that need to access one another, or a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"media"))," group for streaming to TVs."),(0,r.kt)("p",null,"Tags are an additional mechanism for organizing devices and applying special features to them. Today there is one built-in tag, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"lan_upstream")),"."),(0,r.kt)("p",null,"Custom tags can be used with DNS block lists, to apply blocklists to only select devices. Place the tag with both the list and the devices it should apply to. For example, a user can set a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"focus"))," tag on specific devices, and create a dns block list under the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"focus"))," tag."),(0,r.kt)("p",null,"Custom tags can be used with PLUS's Programmable Firewall plugin. An advanced feature is to use PFW to apply tags on a schedule. The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"focus"))," tag could be applied from 9AM-5pm for example.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,'How does the "lan_upstream" tag work?'),(0,r.kt)("p",null,"By default, SPR prevents devices from accessing LAN addresses upstream of SPR. This is useful to restrict access to other subnets that SPR may be on. If a user does want a device to be able to access LAN networks upstream of SPR, the device should have the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"lan_upstream"))," tag applied to grant access.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does SPR work with iCloud Keychain Sync?"),(0,r.kt)("p",null,"Yes - however you need to set the same password on each of the iOS devices that are in the same keychain. Without this, they would sync the wrong password to each other and lock each other out of the network.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I try SPR without the hardware?"),(0,r.kt)("p",null,"Yes. You can run SPR in docker, either locally or on a cloud instance. NOTE: wifi-features will not be available on MacOS & Windows")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I run SPR without a wifi-card?"),(0,r.kt)("p",null,"Yes. SPR runs great as a VPN service as well. See: ",(0,r.kt)("a",{parentName:"p",href:"/pages/docs/virtual_spr"},"Virtual Setup Guide")," to setup SPR with VPN and DNS support")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why does SPR need AP/VLAN mode?"),(0,r.kt)("p",null,"AP/VLAN is used to place each wifi station into a VLAN with its own virtual interface. Not all drivers may support this feature."),(0,r.kt)("p",null,"It is possible to use SPR for wifi without this but it is not recommended. To do so run hostapd with VLANs disabled (set ",(0,r.kt)("inlineCode",{parentName:"p"},"per_sta_vif=0"),"), and under ",(0,r.kt)("inlineCode",{parentName:"p"},"base/config/config.sh")," set LANIF to your wifi interface (i.e.",(0,r.kt)("inlineCode",{parentName:"p"},"wlan1"),"). With this configuration, MAC spoofing and packet injection across devices is possible, as with an ordinary wifi network.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does SPR run on x86 / x86-64?"),(0,r.kt)("p",null,"Yes. We publish docker containers for both arm64 and x86-64. See: ",(0,r.kt)("a",{parentName:"p",href:"/pages/docs/setup_run_spr#building-the-project"},"Building the project")," to build from source.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does SPR support extensions?"),(0,r.kt)("p",null,"SPR supports plugins running as docker containers. See: ",(0,r.kt)("a",{parentName:"p",href:"https://www.supernetworks.org/pages/docs/services/extensions"},"Extensions Documentation"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Which wifi drivers work with SPR?"),(0,r.kt)("p",null,"The MT76 family of drivers has been best tested. Mt76x2u, mt7915, mt7915e have seen the most use."),(0,r.kt)("p",null,"Note that iwlwifi, from intel, disables AP mode, and so the popular ax210/ax200 cards are not today compatible with hostapd. It is possible to run some AP with wpa_supplicant but important features are missing. Contributions to get these working with SPR are welcome but it may not be feasible."),(0,r.kt)("p",null,"Recommended features for SPR:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WPA3 Support"),(0,r.kt)("li",{parentName:"ul"},"AP/VLAN mode")),(0,r.kt)("p",null,"If you have SPR installed you can see if your card is supported under ",(0,r.kt)("em",{parentName:"p"},"Wifi -> Interfaces -> SPR compatibility"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does SPR support Wifi 6?"),(0,r.kt)("p",null,"Yes.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does SPR support Mesh Networking?"),(0,r.kt)("p",null,"Mesh is currently a ",(0,r.kt)("a",{parentName:"p",href:"https://www.supernetworks.org/plus.html"},"PLUS")," plugin. It supports mesh nodes with wired backhaul. Mesh networking (802.11s) is not currently configurable for a wireless backhaul from the API, but can be applied by configuring wpa_supplicant manually.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is PLUS?"),(0,r.kt)("p",null,"Plus offers extended features & lets you back the development of SPR"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.supernetworks.org/plus.html"},"Read more about SPR PLUS"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is PFW?"),(0,r.kt)("p",null,"PFW is a ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"P"),"rogrammble ",(0,r.kt)("strong",{parentName:"em"},"F"),"ire",(0,r.kt)("strong",{parentName:"em"},"w"),"all")," available to ",(0,r.kt)("a",{parentName:"p",href:"https://www.supernetworks.org/plus.html"},"PLUS users"),". It allows scheduling and event based firewall rules. It supports advanced features such as per-device rerouting to site-to-site VPNs and docker containers, and scheduled focus mode.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Think I've found a bug, where can I report it?"),(0,r.kt)("p",null,"The best place to file an issue is our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/issues"},"Github Issue Tracker"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do you have a mobile app for the admin interface?"),(0,r.kt)("p",null,"The iOS app is available for TestFlight and will be released on the app store. Contact us if you\u2019re interested in testing.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I run a dev branch of this project?"),(0,r.kt)("p",null,"Yes, See ",(0,r.kt)("em",{parentName:"p"},"System -> Releases"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What Operating System is SPR based on?"),(0,r.kt)("p",null,"Ubuntu Linux 22.04. It can run on a variety of Linux hosts though.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do you have a custom Linux kernel?"),(0,r.kt)("p",null,"The Clearfog release is running a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/cn913x_build"},"custom build"),". The Raspberry Pi image is using the default kernel for ubuntu.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Where can I learn more about Wifi security?"),(0,r.kt)("p",null,"Check out our turtles ",(0,r.kt)("a",{parentName:"p",href:"https://turtles.supernetworks.org"},"ctf challenges")," & ",(0,r.kt)("a",{parentName:"p",href:"https://www.supernetworks.org/pages/blog"},"write-ups"))),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Device can't connect using WPA3"),(0,r.kt)("div",null,(0,r.kt)("p",null,"Some IOT devices may have problems with WPA3 support, or even incorrectly detect WPA3 as an Open Network. Try adding the device with WPA2 and connect again. Some IOT may not even support WPA2, and require WPA1."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How can I set a custom subnet for my SPR network?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"System -> Supernetworks"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I'm running other containers on my SPR & they have no internet connection"),(0,r.kt)("p",null,"If SPR is not running, make sure to setup the firewall rules. Make sure WANIF is configured with your upstream interface in config/config.sh and try running the base/docker_nftables_setup.sh script. SPR disabled docker\u2019s reliance on IPtables and so custom NFTable scripts are required for docker containers to reach the internet.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How can I debug dropped packets?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve JSON packet logs  with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it superpacket_logs /stream-json-logs\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Or build the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3002/pages/docs/services/sprbus#command-line-tools"},"sprbus tool"),' and connect with an API token.\nYou can generate an API token in the UI under  "Auth-> Add Auth Token"\n',(0,r.kt)("img",{alt:"sprbus",src:n(502).Z,width:"1200",height:"750"}))))))}c.isMDXComponent=!0},502:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sprbus-cli-476cc4f905e635d16c3fdcc0041fc30a.gif"}}]);