"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={slug:"UI Push",title:"Supernetworks just Released a React User Interface",authors:"ltsrad",tags:["SPR","UI","React","Golang"]},s=void 0,i={permalink:"/pages/blog/UI Push",source:"@site/blog/2022-01-19-min-ui.md",title:"Supernetworks just Released a React User Interface",description:"User Friendliness",date:"2022-01-19T00:00:00.000Z",formattedDate:"January 19, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"UI",permalink:"/pages/blog/tags/ui"},{label:"React",permalink:"/pages/blog/tags/react"},{label:"Golang",permalink:"/pages/blog/tags/golang"}],readingTime:2.335,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"UI Push",title:"Supernetworks just Released a React User Interface",authors:"ltsrad",tags:["SPR","UI","React","Golang"]},prevItem:{title:"Running SPR on a Mini PC with WiFi 6",permalink:"/pages/blog/spr_mini_pc"},nextItem:{title:"Announcing The SPR Project",permalink:"/pages/blog/first-blog-post"}},l={authorsImageUrls:[void 0]},u=[{value:"User Friendliness",id:"user-friendliness",level:2},{value:"This Release Delivers Basic UI Features",id:"this-release-delivers-basic-ui-features",level:2},{value:"See a Demo",id:"see-a-demo",level:2},{value:"How Devices are Connected to SPR",id:"how-devices-are-connected-to-spr",level:3},{value:"Some of the challenges were",id:"some-of-the-challenges-were",level:4},{value:"The Zones",id:"the-zones",level:2},{value:"What&#39;s Next for the UI",id:"whats-next-for-the-ui",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-friendliness"},"User Friendliness"),(0,r.kt)("p",null,"The SPR project started out as a series of bash scripts and configuration files. Adding new devices\nwas a little bit error prone, as everything was done on the command line. Each device would\nrequire a new, strong password, and each device needed to be added to a zone's configuration.\nNext, hostapd had to be restarted to get WPA3 password reloading to work. It was hard to debug and not apparent if things failed."),(0,r.kt)("p",null,"What would make SPR super useful, though, would be if it was easy to use. And a user interface can do that for us."),(0,r.kt)("p",null,"So this week, Supernetworks pushed out a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/frontend"},"frontend")," for testing."),(0,r.kt)("h2",{id:"this-release-delivers-basic-ui-features"},"This Release Delivers Basic UI Features"),(0,r.kt)("p",null,"Three functions are now available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new wireless device to the network"),(0,r.kt)("li",{parentName:"ul"},"List devices"),(0,r.kt)("li",{parentName:"ul"},"Set device access zones")),(0,r.kt)("p",null,"While these are simple things, and seemingly easy, SPR's services work together to build a network\nthat is virtually unlike all other wifi setups available today. As a result, the base station service,\nthe DHCP server, and the API need to work together to leverage their features so that users have\na super smooth  experience."),(0,r.kt)("h2",{id:"see-a-demo"},"See a Demo"),(0,r.kt)("div",null,(0,r.kt)("video",{width:"100%",height:"100%",playsInline:!0,muted:!0,controls:!0,src:"/pages/video/sprui.mp4",type:"video/mp4"})),(0,r.kt)("h3",{id:"how-devices-are-connected-to-spr"},"How Devices are Connected to SPR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each wireless device is on an isolated network, keyed in by their MAC address and passphrase"),(0,r.kt)("li",{parentName:"ul"},"MAC/ARP spoofing is blocked by hardened firewall rules to completely stop ethernet/IP-based evasion for lateral movement"),(0,r.kt)("li",{parentName:"ul"},"Zones specify the level of each individual device's access"),(0,r.kt)("li",{parentName:"ul"},"Custom zones can create groups of devices that can intercommunicate without having full LAN access"),(0,r.kt)("li",{parentName:"ul"},"Built in ad blocking with CoreDNS")),(0,r.kt)("h4",{id:"some-of-the-challenges-were"},"Some of the challenges were"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Laying down a solid foundation between the API and frontend to make adding new features great"),(0,r.kt)("li",{parentName:"ul"},"Supporting a smooth WPA3 experience, which uses a ZKP for authentication"),(0,r.kt)("li",{parentName:"ul"},"Making it fast and easy to add a device without having to also know or enter its MAC address ahead of time")),(0,r.kt)("h2",{id:"the-zones"},"The Zones"),(0,r.kt)("p",null,"The built in zones are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DNS for outbound DNS queries"),(0,r.kt)("li",{parentName:"ul"},"WAN for outbound internet access"),(0,r.kt)("li",{parentName:"ul"},"LAN for general access to all local devices")),(0,r.kt)("p",null,'When a user types in a new name, such as "Cameras",  NFTables verdict maps gets created\nby the API. All of the members of the maps can send and receive IP traffic to one another,\nbut do not get general access to the LAN.  In the future, custom firewall rules will be added\nto further specify how the groups interact.'),(0,r.kt)("h2",{id:"whats-next-for-the-ui"},"What's Next for the UI"),(0,r.kt)("p",null,"For the road map, I'm thinking about security features such as intrusion detection\nor automated security scanning and fingerprinting, network debugging and bandwidth monitoring,\nper-device ad blocking, and home automation."))}d.isMDXComponent=!0}}]);