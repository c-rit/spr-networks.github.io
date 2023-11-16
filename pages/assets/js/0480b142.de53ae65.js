"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[836],{8976:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var n=r(5893),i=r(1151);const t={},o="Frequently Asked Questions",a={id:"faq",title:"Frequently Asked Questions",description:"What does SPR stand for?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/pages/docs/faq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wifid",permalink:"/pages/docs/services/wifid"},next:{title:"Raspberry Pi 4 Model B Hardware Guide",permalink:"/pages/docs/pi4b"}},c={},d=[];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"What does SPR stand for?"})}),(0,n.jsx)(s.p,{children:"SPR stands for Secure Programmable Router"})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"What is SPR?"})}),(0,n.jsx)(s.p,{children:"SPR is Linux software for running a hardened wifi network that also makes it easy to add and manage devices. Devices are isolated into individual VLANs and then connected securely into the rest of the network."})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"How is SPR different from OpenWRT?"})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"SPR is built to support the leading edge of Linux\u2019s networking features, while applying best in class security practices and modern coding standards."}),(0,n.jsx)("li",{children:"OpenWRT powers many of the proprietary consumer wifi routers on the market today and was originally intended as a replacement for proprietary embedded firmware. Some routers allow replacing the vendor\u2019s OpenWRT with open source builds of the OpenWRT firmware."}),(0,n.jsx)("li",{children:"SPR is designed to run in docker containers on systems with a bit more memory and storage, opening up many possibilities like hosting voice assistants, network fuzzers, and media servers. However, it likely won\u2019t work as a replacement for embedded router firmware."}),(0,n.jsx)("li",{children:"OpenWRT tries to optimize builds for embedded devices without much storage space or memory. It supports a tremendous range of devices and hardware, although older devices are losing support due to storage and memory limitations."}),(0,n.jsx)("li",{children:"SPR is built mostly with golang and a react frontend. Where possible, memory-safe languages with good security track records are preferred over native code such as C or code that is difficult to write securely, like PHP."}),(0,n.jsx)("li",{children:"OpenWRT is built mostly with C, Shell Scripts, and Lua/LUCI for the web front end."})]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"How do I update SPR?"})}),(0,n.jsxs)(s.p,{children:["You do not need to reflash your system.\nFrom the UI: go to ",(0,n.jsx)(s.em,{children:"System Info"})," -> ",(0,n.jsx)(s.em,{children:"SPR Release"}),". You can run ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"Check"})})," to see if there's an update and hit ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"Update"})}),"."]}),(0,n.jsxs)(s.p,{children:["From the CLI:\nGo to the SPR directory (",(0,n.jsx)(s.code,{children:"/home/spr/super/"}),"), Run:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd /home/spr/super\ngit pull\ndocker-compose pull\ndocker-compose up -d\n"})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"How is SPR different from an ordinary network?"})}),(0,n.jsx)(s.p,{children:"SPR places each WiFi device into its own VLAN and subnet, using per-device passphrases. When combined together, the devices form a supernetwork. The VLAN isolation creates strong hardening features. Devices can not sniff each other\u2019s traffic, they can not perform ARP/MAC spoofing, and they can not communicate with each other without being granted access while they may still be able to access the internet."})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Is there any telemetry or statistics sent from SPR to Supernetworks or Third Parties?"})}),(0,n.jsx)(s.p,{children:"No. This can be confirmed by viewing the code in the github repo or if you prefer, look at the network traffic from SPR"})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"What are groups vs tags?"})}),(0,n.jsx)(s.p,{children:"Groups in SPR refer to network access and which devices should be able to communicate with one another. There are three special, built-in groups:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"wan"})," : the device can communicate with the internet"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"dns"})," : the device can make DNS queries"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"lan"})," : the device can communicate with all other devices"]}),"\n"]}),(0,n.jsxs)(s.p,{children:["When custom groups are created, all of the devices in that group can communicate with each other. For example, a custom ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"gaming"})})," group could be created for devices that need to access one another, or a ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"media"})})," group for streaming to TVs."]}),(0,n.jsxs)(s.p,{children:["Tags are an additional mechanism for organizing devices and applying special features to them. Today there is one built-in tag, ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"lan_upstream"})}),"."]}),(0,n.jsxs)(s.p,{children:["Custom tags can be used with DNS block lists, to apply blocklists to only select devices. Place the tag with both the list and the devices it should apply to. For example, a user can set a ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"focus"})})," tag on specific devices, and create a dns block list under the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"focus"})})," tag."]}),(0,n.jsxs)(s.p,{children:["Custom tags can be used with PLUS's Programmable Firewall plugin. An advanced feature is to use PFW to apply tags on a schedule. The ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"focus"})})," tag could be applied from 9AM-5pm for example."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:'How does the "lan_upstream" tag work?'})}),(0,n.jsxs)(s.p,{children:["By default, SPR prevents devices from accessing LAN addresses upstream of SPR. This is useful to restrict access to other subnets that SPR may be on. If a user does want a device to be able to access LAN networks upstream of SPR, the device should have the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"lan_upstream"})})," tag applied to grant access."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Does SPR work with iCloud Keychain Sync?"})}),(0,n.jsx)(s.p,{children:"Yes - however you need to set the same password on each of the iOS devices that are in the same keychain. Without this, they would sync the wrong password to each other and lock each other out of the network."})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Can I try SPR without the hardware?"})}),(0,n.jsx)(s.p,{children:"Yes. You can run SPR in docker, either locally or on a cloud instance. NOTE: wifi-features will not be available on MacOS & Windows"})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Can I run SPR without a wifi-card?"})}),(0,n.jsxs)(s.p,{children:["Yes. SPR runs great as a VPN service as well. See: ",(0,n.jsx)(s.a,{href:"/pages/docs/virtual_spr",children:"Virtual Setup Guide"})," to setup SPR with VPN and DNS support"]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Why does SPR need AP/VLAN mode?"})}),(0,n.jsx)(s.p,{children:"AP/VLAN is used to place each wifi station into a VLAN with its own virtual interface. Not all drivers may support this feature."}),(0,n.jsxs)(s.p,{children:["It is possible to use SPR for wifi without this but it is not recommended. To do so run hostapd with VLANs disabled (set ",(0,n.jsx)(s.code,{children:"per_sta_vif=0"}),"), and under ",(0,n.jsx)(s.code,{children:"base/config/config.sh"})," set LANIF to your wifi interface (i.e.",(0,n.jsx)(s.code,{children:"wlan1"}),"). With this configuration, MAC spoofing and packet injection across devices is possible, as with an ordinary wifi network."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Does SPR run on x86 / x86-64?"})}),(0,n.jsxs)(s.p,{children:["Yes. We publish docker containers for both arm64 and x86-64. See: ",(0,n.jsx)(s.a,{href:"/pages/docs/setup_run_spr#building-the-project",children:"Building the project"})," to build from source."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Does SPR support extensions?"})}),(0,n.jsxs)(s.p,{children:["SPR supports plugins running as docker containers. See: ",(0,n.jsx)(s.a,{href:"https://www.supernetworks.org/pages/docs/services/extensions",children:"Extensions Documentation"})]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Which wifi drivers work with SPR?"})}),(0,n.jsx)(s.p,{children:"The MT76 family of drivers has been best tested. Mt76x2u, mt7915, mt7915e have seen the most use."}),(0,n.jsx)(s.p,{children:"Note that iwlwifi, from intel, disables AP mode, and so the popular ax210/ax200 cards are not today compatible with hostapd. It is possible to run some AP with wpa_supplicant but important features are missing. Contributions to get these working with SPR are welcome but it may not be feasible."}),(0,n.jsx)(s.p,{children:"Recommended features for SPR:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"WPA3 Support"}),"\n",(0,n.jsx)(s.li,{children:"AP/VLAN mode"}),"\n"]}),(0,n.jsxs)(s.p,{children:["If you have SPR installed you can see if your card is supported under ",(0,n.jsx)(s.em,{children:"Wifi -> Interfaces -> SPR compatibility"})]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Does SPR support Wifi 6?"})}),(0,n.jsx)(s.p,{children:"Yes."})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Does SPR support Mesh Networking?"})}),(0,n.jsxs)(s.p,{children:["Mesh is currently a ",(0,n.jsx)(s.a,{href:"https://www.supernetworks.org/plus.html",children:"PLUS"})," plugin. It supports mesh nodes with wired backhaul. Mesh networking (802.11s) is not currently configurable for a wireless backhaul from the API, but can be applied by configuring wpa_supplicant manually."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"What is PLUS?"})}),(0,n.jsx)(s.p,{children:"Plus offers extended features & lets you back the development of SPR"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://www.supernetworks.org/plus.html",children:"Read more about SPR PLUS"})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"What is PFW?"})}),(0,n.jsxs)(s.p,{children:["PFW is a ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.strong,{children:"P"}),"rogrammble ",(0,n.jsx)(s.strong,{children:"F"}),"ire",(0,n.jsx)(s.strong,{children:"w"}),"all"]})," available to ",(0,n.jsx)(s.a,{href:"https://www.supernetworks.org/plus.html",children:"PLUS users"}),". It allows scheduling and event based firewall rules. It supports advanced features such as per-device rerouting to site-to-site VPNs and docker containers, and scheduled focus mode."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Think I've found a bug, where can I report it?"})}),(0,n.jsxs)(s.p,{children:["The best place to file an issue is our ",(0,n.jsx)(s.a,{href:"https://github.com/spr-networks/super/issues",children:"Github Issue Tracker"})]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Do you have a mobile app for the admin interface?"})}),(0,n.jsxs)(s.p,{children:["The iOS app is available on ",(0,n.jsx)(s.a,{href:"https://apps.apple.com/se/app/secure-programmable-router/id6443709201",children:"App Store"}),"."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Can I use the mobile app for Virtual SPR?"})}),(0,n.jsx)(s.p,{children:"Yes!"}),(0,n.jsxs)(s.p,{children:["If you have setup SPR using the ",(0,n.jsx)(s.a,{href:"/pages/docs/virtual_spr",children:"Virtual Setup Guide"})," you can login to SPR (192.168.2.1) when connected to the VPN."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Can I run a dev branch of this project?"})}),(0,n.jsxs)(s.p,{children:["Yes, See ",(0,n.jsx)(s.em,{children:"System -> Releases"})]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"What Operating System is SPR based on?"})}),(0,n.jsx)(s.p,{children:"Ubuntu Linux 22.04. It can run on a variety of Linux hosts though."})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Do you have a custom Linux kernel?"})}),(0,n.jsxs)(s.p,{children:["The Clearfog release is running a ",(0,n.jsx)(s.a,{href:"https://github.com/spr-networks/cn913x_build",children:"custom build"}),". The Raspberry Pi image is using the default kernel for ubuntu."]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Where can I learn more about Wifi security?"})}),(0,n.jsxs)(s.p,{children:["Check out our turtles ",(0,n.jsx)(s.a,{href:"https://turtles.supernetworks.org",children:"ctf challenges"})," & ",(0,n.jsx)(s.a,{href:"https://www.supernetworks.org/pages/blog",children:"write-ups"})]})]}),"\n",(0,n.jsx)(s.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Device can't connect using WPA3"})}),(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Some IOT devices may have problems with WPA3 support, or even incorrectly detect WPA3 as an Open Network. Try adding the device with WPA2 and connect again. Some IOT may not even support WPA2, and require WPA1."})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"How can I set a custom subnet for my SPR network?"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"System -> Supernetworks"})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"I'm running other containers on my SPR & they have no internet connection"})}),(0,n.jsx)(s.p,{children:"If SPR is not running, make sure to setup the firewall rules. Make sure WANIF is configured with your upstream interface in config/config.sh and try running the base/docker_nftables_setup.sh script. SPR disabled docker\u2019s reliance on IPtables and so custom NFTable scripts are required for docker containers to reach the internet."})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"How can I debug dropped packets?"})}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Retrieve JSON packet logs  with"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker exec -it superpacket_logs /stream-json-logs\n"})}),(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["Or build the ",(0,n.jsx)(s.a,{href:"http://localhost:3002/pages/docs/services/sprbus#command-line-tools",children:"sprbus tool"}),' and connect with an API token.\nYou can generate an API token in the UI under  "Auth-> Add Auth Token"\n',(0,n.jsx)(s.img,{alt:"sprbus",src:r(502).Z+"",width:"1200",height:"750"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},502:(e,s,r)=>{r.d(s,{Z:()=>n});const n=r.p+"assets/images/sprbus-cli-476cc4f905e635d16c3fdcc0041fc30a.gif"},1151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>o});var n=r(7294);const i={},t=n.createContext(i);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);