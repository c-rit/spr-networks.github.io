"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[2610],{5868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(5893),a=t(1151);const i={slug:"UI Push",title:"Supernetworks just Released a React User Interface",authors:"ltsrad",tags:["SPR","UI","React","Golang"]},r=void 0,o={permalink:"/pages/blog/UI Push",source:"@site/blog/2022-01-19-min-ui.md",title:"Supernetworks just Released a React User Interface",description:"User Friendliness",date:"2022-01-19T00:00:00.000Z",formattedDate:"January 19, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"UI",permalink:"/pages/blog/tags/ui"},{label:"React",permalink:"/pages/blog/tags/react"},{label:"Golang",permalink:"/pages/blog/tags/golang"}],readingTime:2.335,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"UI Push",title:"Supernetworks just Released a React User Interface",authors:"ltsrad",tags:["SPR","UI","React","Golang"]},unlisted:!1,prevItem:{title:"Running SPR on a Mini PC with WiFi 6",permalink:"/pages/blog/spr_mini_pc"},nextItem:{title:"Announcing The SPR Project",permalink:"/pages/blog/first-blog-post"}},l={authorsImageUrls:[void 0]},d=[{value:"User Friendliness",id:"user-friendliness",level:2},{value:"This Release Delivers Basic UI Features",id:"this-release-delivers-basic-ui-features",level:2},{value:"See a Demo",id:"see-a-demo",level:2},{value:"How Devices are Connected to SPR",id:"how-devices-are-connected-to-spr",level:3},{value:"Some of the challenges were",id:"some-of-the-challenges-were",level:4},{value:"The Zones",id:"the-zones",level:2},{value:"What&#39;s Next for the UI",id:"whats-next-for-the-ui",level:2}];function c(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"user-friendliness",children:"User Friendliness"}),"\n",(0,s.jsx)(n.p,{children:"The SPR project started out as a series of bash scripts and configuration files. Adding new devices\nwas a little bit error prone, as everything was done on the command line. Each device would\nrequire a new, strong password, and each device needed to be added to a zone's configuration.\nNext, hostapd had to be restarted to get WPA3 password reloading to work. It was hard to debug and not apparent if things failed."}),"\n",(0,s.jsx)(n.p,{children:"What would make SPR super useful, though, would be if it was easy to use. And a user interface can do that for us."}),"\n",(0,s.jsxs)(n.p,{children:["So this week, Supernetworks pushed out a ",(0,s.jsx)(n.a,{href:"https://github.com/spr-networks/super/tree/main/frontend",children:"frontend"})," for testing."]}),"\n",(0,s.jsx)(n.h2,{id:"this-release-delivers-basic-ui-features",children:"This Release Delivers Basic UI Features"}),"\n",(0,s.jsx)(n.p,{children:"Three functions are now available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add a new wireless device to the network"}),"\n",(0,s.jsx)(n.li,{children:"List devices"}),"\n",(0,s.jsx)(n.li,{children:"Set device access zones"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"While these are simple things, and seemingly easy, SPR's services work together to build a network\nthat is virtually unlike all other wifi setups available today. As a result, the base station service,\nthe DHCP server, and the API need to work together to leverage their features so that users have\na super smooth  experience."}),"\n",(0,s.jsx)(n.h2,{id:"see-a-demo",children:"See a Demo"}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("video",{width:"100%",height:"100%",playsInline:!0,muted:!0,controls:!0,src:"/pages/video/sprui.mp4",type:"video/mp4"})}),"\n",(0,s.jsx)(n.h3,{id:"how-devices-are-connected-to-spr",children:"How Devices are Connected to SPR"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each wireless device is on an isolated network, keyed in by their MAC address and passphrase"}),"\n",(0,s.jsx)(n.li,{children:"MAC/ARP spoofing is blocked by hardened firewall rules to completely stop ethernet/IP-based evasion for lateral movement"}),"\n",(0,s.jsx)(n.li,{children:"Zones specify the level of each individual device's access"}),"\n",(0,s.jsx)(n.li,{children:"Custom zones can create groups of devices that can intercommunicate without having full LAN access"}),"\n",(0,s.jsx)(n.li,{children:"Built in ad blocking with CoreDNS"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"some-of-the-challenges-were",children:"Some of the challenges were"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Laying down a solid foundation between the API and frontend to make adding new features great"}),"\n",(0,s.jsx)(n.li,{children:"Supporting a smooth WPA3 experience, which uses a ZKP for authentication"}),"\n",(0,s.jsx)(n.li,{children:"Making it fast and easy to add a device without having to also know or enter its MAC address ahead of time"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"the-zones",children:"The Zones"}),"\n",(0,s.jsx)(n.p,{children:"The built in zones are"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DNS for outbound DNS queries"}),"\n",(0,s.jsx)(n.li,{children:"WAN for outbound internet access"}),"\n",(0,s.jsx)(n.li,{children:"LAN for general access to all local devices"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'When a user types in a new name, such as "Cameras",  NFTables verdict maps gets created\nby the API. All of the members of the maps can send and receive IP traffic to one another,\nbut do not get general access to the LAN.  In the future, custom firewall rules will be added\nto further specify how the groups interact.'}),"\n",(0,s.jsx)(n.h2,{id:"whats-next-for-the-ui",children:"What's Next for the UI"}),"\n",(0,s.jsx)(n.p,{children:"For the road map, I'm thinking about security features such as intrusion detection\nor automated security scanning and fingerprinting, network debugging and bandwidth monitoring,\nper-device ad blocking, and home automation."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);