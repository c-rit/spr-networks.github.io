"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:0,sidebar_label:"Welcome to SPR!"},o="SPR : A Secure Programmable Router",s={unversionedId:"intro",id:"intro",title:"SPR : A Secure Programmable Router",description:"SPR lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pages/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Welcome to SPR!"},sidebar:"tutorialSidebar",next:{title:"API Overview",permalink:"/pages/docs/apis/overview"}},l={},c=[{value:"The Network Design",id:"the-network-design",level:2},{value:"Default deny",id:"default-deny",level:4},{value:"Zero-trust networking",id:"zero-trust-networking",level:4},{value:"Device isolation",id:"device-isolation",level:4},{value:"Multicast Support",id:"multicast-support",level:4},{value:"Design Ethos",id:"design-ethos",level:2},{value:"Transparent and Modifiable",id:"transparent-and-modifiable",level:4},{value:"Containerized",id:"containerized",level:4},{value:"Sound Software Selection",id:"sound-software-selection",level:4},{value:"The Service Listing",id:"the-service-listing",level:2},{value:"API Extensions",id:"api-extensions",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spr--a-secure-programmable-router"},"SPR : A Secure Programmable Router"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SPR")," lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security."),(0,a.kt)("h2",{id:"the-network-design"},"The Network Design"),(0,a.kt)("h4",{id:"default-deny"},"Default deny"),(0,a.kt)("p",null,"Devices are explicitly marked for communicating to the internet, accessing DNS, or intranet communications either by a general LAN group or custom groups."),(0,a.kt)("h4",{id:"zero-trust-networking"},"Zero-trust networking"),(0,a.kt)("p",null,"Per-device WiFi passphrases create a source of identity for devices. This enables a high degree of confidence about where packets come from and where they can go. This happens without installing agents, custom software, or certificates on devices making a router runing SPR compatible with all WiFi devices."),(0,a.kt)("h4",{id:"device-isolation"},"Device isolation"),(0,a.kt)("p",null,"Each device on the network is sequestered into a tiny subnet, and all devices must communicate through the router to communicate with one another."),(0,a.kt)("p",null,"Groups are used to inform nftable verdict maps about a device's network access, by MAC address, virtual interface, and IP address. By trading off negligible latency and additional packet processing for better control, the router arbitrates communication between intranet devices. The verdict maps, similar to ipsets, provide scalable groups without an exponential number of firewall rules."),(0,a.kt)("h4",{id:"multicast-support"},"Multicast Support"),(0,a.kt)("p",null,"Zeroconf and mDNS are both prevalent and a requisite for home networking. However, these require being on the same subnet to work or a router that supports IGMP forwarding or a proxy. SPR has a userland proxy to transparently relay multicast traffic between devices and across network interfaces."),(0,a.kt)("h2",{id:"design-ethos"},"Design Ethos"),(0,a.kt)("h4",{id:"transparent-and-modifiable"},"Transparent and Modifiable"),(0,a.kt)("p",null,"SPR is built as an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super"},"open source")," project."),(0,a.kt)("h4",{id:"containerized"},"Containerized"),(0,a.kt)("p",null,"Containers make it simple to build the code from scratch or run prebuilt images.\nThe containers split network services up by functionality and are orchestrated with\nAPIs. SPR is built to run as a WiFi router, but it can also run in a network namespace\nas a standalone VPN & DNS Service with a virtualized network."),(0,a.kt)("h4",{id:"sound-software-selection"},"Sound Software Selection"),(0,a.kt)("p",null,"SPR is built mostly with golang and a react frontend. Where possible, memory-safe languages with good security track records are preferred over native code such as C or code that is difficult to write securely, like PHP."),(0,a.kt)("h2",{id:"the-service-listing"},"The Service Listing"),(0,a.kt)("p",null,"The following services are currently included with SPR:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"apis/overview"},"api")," \u21e8 API for frontends and CLIs to manage connected devices, network groups, and firewall rules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/base"},"base")," \u21e8 Networking initialization and configuration at startup"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/db"},"db")," \u21e8 Database key/value store"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/dhcp"},"dhcp")," \u21e8 DHCP Server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/dhcp_client"},"dhcp_client")," \u21e8 DHCP Client for requesting IP addresses from uplink"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/dns"},"dns")," \u21e8 DNS Service, running CoreDNS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/multicast_proxy"},"multicast_udp_proxy")," \u21e8 A multicast proxy to support multicast networking for usability"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/packet_logs"},"packet_logs")," \u21e8 NFLog packet log emitter"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/ppp"},"ppp")," \u21e8 A Point-to-Point protocol service for authenticating and requesting IP addresses from uplink"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/superd"},"superd")," \u21e8 Daemon to manage docker comms and restarting SPR"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/watchdog"},"watchdog")," \u21e8 A failure mode detection service for restarting the router in case of crashes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/wifid"},"wifid")," \u21e8 Wifi Base Station Service, running hostapd")),(0,a.kt)("h2",{id:"api-extensions"},"API Extensions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.supernetworks.org/pages/api/0#tag/dnsblock"},"DNS Block & Log")," \u21e8 Fine grained DNS Rules & Logs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.supernetworks.org/pages/api/0#tag/wireguard"},"Wireguard")," \u21e8 Configuration service for running a Wireguard VPN"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.supernetworks.org/pages/api/0#tag/lookup"},"Lookup")," \u21e8 OUI & ASN Lookup Service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.supernetworks.org/pages/api/0#tag/dyndns"},"Dyndns")," \u21e8 Dyndns Service")))}p.isMDXComponent=!0}}]);