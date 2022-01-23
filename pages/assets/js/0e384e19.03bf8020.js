"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:1,sidebar_label:"Welcome to SPR!"},l="SPR: A Secure Programmable Router",c={unversionedId:"intro",id:"intro",title:"SPR: A Secure Programmable Router",description:"The aim of SPR is to make home networks much more secure, programmable, and reliable.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pages/docs/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Welcome to SPR!"},sidebar:"tutorialSidebar",next:{title:"API Overview",permalink:"/pages/docs/apis/overview"}},u=[{value:"The Network Design",id:"the-network-design",children:[{value:"Default deny",id:"default-deny",children:[],level:4},{value:"Zero-trust networking",id:"zero-trust-networking",children:[],level:4},{value:"Device isolation",id:"device-isolation",children:[],level:4},{value:"Usability",id:"usability",children:[],level:4}],level:2},{value:"The Software Design",id:"the-software-design",children:[{value:"Fully Open Source",id:"fully-open-source",children:[],level:4},{value:"Containerized",id:"containerized",children:[],level:4},{value:"Sound software selection",id:"sound-software-selection",children:[],level:4}],level:2},{value:"The Service Listing",id:"the-service-listing",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spr-a-secure-programmable-router"},"SPR: A Secure Programmable Router"),(0,a.kt)("p",null,"The aim of SPR is to make home networks much more secure, programmable, and reliable."),(0,a.kt)("p",null,"SPR lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security."),(0,a.kt)("h2",{id:"the-network-design"},"The Network Design"),(0,a.kt)("h4",{id:"default-deny"},"Default deny"),(0,a.kt)("p",null,"Devices are explicitly marked for communicating to the internet, accessing DNS, or intranet communications either by a general LAN group or custom groups."),(0,a.kt)("h4",{id:"zero-trust-networking"},"Zero-trust networking"),(0,a.kt)("p",null,"Per-device WiFi passphrases create a source of identity for devices. This enables a high degree of confidence about where packets come from and where they can go. This happens without installing agents, custom software, or certificates on devices making a router runing SPR compatible with all WiFi devices."),(0,a.kt)("h4",{id:"device-isolation"},"Device isolation"),(0,a.kt)("p",null,"Each device on the network is sequestered into a tiny subnet, and all devices must communicate through the router to communicate with one another."),(0,a.kt)("p",null,"Groups are used to inform nftable verdict maps about a device's network access, by MAC address, virtual interface, and IP address. By trading off negligible latency and additional packet processing for better control, the router arbitrates communication between intranet devices. The verdict maps, similar to ipsets, provide scalable groups without exponential firewall rules."),(0,a.kt)("h4",{id:"usability"},"Usability"),(0,a.kt)("p",null," Great things can happen with multicast, and zeroconf and mDNS are both prevalent and a requisite for home networking. However, these require being on the same subnet to work or a router that supports IGMP forwarding or a proxy. SPR has a userland proxy to transparently relay multicast traffic between devices and across network interfaces."),(0,a.kt)("h2",{id:"the-software-design"},"The Software Design"),(0,a.kt)("h4",{id:"fully-open-source"},"Fully Open Source"),(0,a.kt)("h4",{id:"containerized"},"Containerized"),(0,a.kt)("p",null,"Networking services are split across docker services. Containers are used for separation of concerns\nand in the future could contribute to system sandboxing to mitigate security risks."),(0,a.kt)("h4",{id:"sound-software-selection"},"Sound software selection"),(0,a.kt)("p",null,"Where possible, memory-safe languages with good security track records are preferred over native code\nsuch as C or code that is difficult to write securely, like PHP."),(0,a.kt)("h2",{id:"the-service-listing"},"The Service Listing"),(0,a.kt)("p",null,"The following services are currently included with SPR:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"apis/overview"},"api")," \u21e8 API for frontends and CLIs to manage connected devices, network groups, and firewall rules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/base"},"base")," \u21e8 Networking initialization and configuration at startup"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/dhcp"},"dhcp")," \u21e8 DHCP Server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/dhcp_client"},"dhcp_client")," \u21e8 DHCP Client for requesting IP addresses from uplink"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/dns"},"dns")," \u21e8 DNS Service, running CoreDNS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/wifid"},"wifid")," \u21e8 Wifi Base Station Service, running hostapd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/multicast_proxy"},"multicast_udp_proxy")," \u21e8 A multicast proxy to support multicast networking for usability"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/ppp"},"ppp")," \u21e8 A Point-to-Point protocol service for authenticating and requesting IP addresses from uplink"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/watchdog"},"watchdog")," \u21e8 A failure mode detection service for restarting the router in case of crashes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"services/wireguard"},"wireguard")," \u21e8 Configuration service for running a Wireguard VPN")))}p.isMDXComponent=!0}}]);