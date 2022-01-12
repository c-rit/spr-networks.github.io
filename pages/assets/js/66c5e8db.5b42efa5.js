"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[756],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(r),c=n,f=h["".concat(l,".").concat(c)]||h[c]||d[c]||a;return r?o.createElement(f,s(s({ref:t},p),{},{components:r})):o.createElement(f,s({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3386:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return c}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),s=["components"],i={slug:"first-blog-post",title:"Announcing The SPR Project",authors:"ltsrad",tags:["SPR","Hello World"]},l=void 0,u={permalink:"/pages/blog/first-blog-post",source:"@site/blog/2022-01-10-first-blog-post.md",title:"Announcing The SPR Project",description:"Hello, SPR",date:"2022-01-10T00:00:00.000Z",formattedDate:"January 10, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Hello World",permalink:"/pages/blog/tags/hello-world"}],readingTime:5.17,truncated:!1,authors:[{name:"Alex Radocea",title:"Network Wrangler",url:"https://twitter.com/defendtheworld",key:"ltsrad"}]},p={authorsImageUrls:[void 0]},d=[{value:"Hello, SPR",id:"hello-spr",children:[],level:2},{value:"The SPR project is about several things:",id:"the-spr-project-is-about-several-things",children:[],level:2},{value:"How SPR Came To Be",id:"how-spr-came-to-be",children:[],level:2},{value:"What&#39;s Next",id:"whats-next",children:[],level:2}],h={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hello-spr"},"Hello, SPR"),(0,a.kt)("p",null,"I'm happy to start releasing the ",(0,a.kt)("strong",{parentName:"p"},"Secure Programmable Router")," project to the world. I've been running my home WiFi\nwith it for the past few months and I'm beyond excited to give back to the open source community.\nI started working on this project because I think that Linux provides a tremendous amount of agility and\npower for secure home networking but I felt like there was no router project out there that pulled it all together."),(0,a.kt)("h2",{id:"the-spr-project-is-about-several-things"},"The SPR project is about several things:"),(0,a.kt)("p",null,"It's about a highly secure foundation to operate a home network where using the internet is safe and it's easy to see and control what IOT devices are up to when they are plugged in. It's about making home privacy easy instead of begrudgingly sharing telemetry with big data companies."),(0,a.kt)("p",null,"It's about open source and empowering developers to innovate with home networking. It's about reducing the barrier for entry. It's about enabling scripting and rapid prototyping."),(0,a.kt)("p",null,"It's about trying something new. It's about adapting modern networking paradigms and tools that can meets today's needs."),(0,a.kt)("h2",{id:"how-spr-came-to-be"},"How SPR Came To Be"),(0,a.kt)("p",null,"During the past year, I took a serious look at ",(0,a.kt)("a",{parentName:"p",href:"https://opnsense.org/"},"opnsense")," and ",(0,a.kt)("a",{parentName:"p",href:"https://openwrt.org/"},"OpenWRT"),", and ordered over a dozen different wifi routers to set up my home network. I sat down and built and deployed my own OpenWRT images and to set up secure wifi networks to connect with a more serious firewall. What I found was that the setups I had managed to achieve were not only frustrating to manage, but when I went to test their security, I found time and time again that vendor wifi routers were insecure due to fundamental limitations with the network designs. On top of that, they were ",(0,a.kt)("a",{parentName:"p",href:"https://www.zerodayinitiative.com/blog/2021/11/1/pwn2ownaustin"},"riddled with software security holes"),". Unfortunately, running the open source builds of OpenWRT often had degraded performance versus the proprietary vendor patches or required breaking secure boot."),(0,a.kt)("p",null,"I felt frustrated because I felt like I had lost control over my own home network. I had only a basic idea of what I was running and what my devices were doing, let alone the routers themselves. Between smart bulbs and vacuum cleaners and home security cameras and speakers, tvs, gaming consoles, laptops, desktops, streaming devices, more routers, and work equipment, there was a lot of stuff that was online."),(0,a.kt)("p",null,"I've been working in computer security for over 15 years and I often get asked for how to set up a home network."),(0,a.kt)("p",null,"The best advice I could give people for their home wifi was to keep their mission critical stuff on a dedicated wifi router, and plug that one into the main wifi router with all the other Stuff that ultimately connects to the internet. This is awkward and requires switching networks or IGMP proxying to do discovery or zeroconf. This doesn't scale well across a multi-office home with repeaters and backhaul. It also doesn't scale well in an apartment where there's competition for radio bandwidth with neighbors for essentially one of only three coveted 80mhz channels on 5ghz."),(0,a.kt)("p",null,"The next best advice was to split out the Whatever non-critical devices to the guest network, and the mission critical stuff on the main network. Hardening the guest network with isolation breaks discovery and streaming as well. In practice I found that most of the routers I looked at did not have good guest isolation anyway when enabled, something I will blog about later. No exploits are required, because more or less an attacker can just ask a router to send packets for them to work around hostapd's AP Isolation feature, and most of the routers will happily do what they do best, route the packets..."),(0,a.kt)("p",null,"At the end of the day though, it's fundamentally a flawed idea to have a shared passphrase across many devices because that passphrase effectively lets devices spoof each other or attempt to intercept traffic, making it tough to truly firewall devices."),(0,a.kt)("p",null,"So then I started looking into enterprise wifi authentication: 802.1x  (EAP-PEAP, EAP-TLS, EAP-PWD). EAP-TLS really is the only secure way to do things since EAP-PEAP suffers from fundamental ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-josefsson-pppext-eap-tls-eap-10#section-5.8"},"man in the middle issues")," that were ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/latelee/hostapd/commit/a190189d221aaef869ae2f52f7ead75b0c327995"},"never fixed"),". Or EAP-PWD (which is almost wpa3) would be great,  if it was supported by more devices and drivers... and well with EAP-TLS... certificate management is pain..."),(0,a.kt)("p",null,"I really wished that one could just use a unique passphrase per device. Well, it turns out that yes, that works, and hostapd supports it out of the box. With some logic and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/hostap/commit/279c5203e4c767701ac9fb7cf31624390437d854"},"usability and correctness fixes")," to hostapd, and it was easy to seamlessly add new devices and their passphrases on the fly."),(0,a.kt)("p",null,"Okay that was great. Next, I created strong device isolation with per-device subnets that could be configured to communicate with other subnets using forwarding rules. The resulting network was a bit too different than the spirit of the networking scripts in OpenWRT, and the patching became unreasonable to expect for upstream to accept, so I started from fresh ground."),(0,a.kt)("p",null,"SPR is implemented for rapid iteration. Services are containerized so that developers can swap out core services or roll up new ones in a testable, reproducible manner. An API drives configuration to allow for innovation. SPR Runs off of Ubuntu, with Docker containers, and manages the network with NFTables. It uses hostapd for the base station software, CoreDHCP for DHCP, CoreDNS for DNS, and supports Wireguard."),(0,a.kt)("p",null,"SPR simply enables users to do better than today's status quo. It lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security."),(0,a.kt)("h2",{id:"whats-next"},"What's Next"),(0,a.kt)("p",null,"Today SPR runs as a proof of concept on a raspberry pi.  With a USB dongle it's well able to handle over a dozen wifi stations and server data from the internet with rates up to 500mbps. Work is underway to expand to new systems."),(0,a.kt)("p",null,"I'm currently wrapping up a Web UI to make SPR user friendly. In the near future I'll be posting a road map for what's planned."),(0,a.kt)("p",null,"SPR is looking for users and contributors. If you're interested, join the matrix chat: ",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#spr:matrix.org"},"https://matrix.to/#/#spr:matrix.org")))}c.isMDXComponent=!0}}]);