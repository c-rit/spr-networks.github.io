"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[4348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},p="Packet Logs",i={unversionedId:"services/packet_logs",id:"services/packet_logs",title:"Packet Logs",description:"This service receives packets over NFLog netlink messages.",source:"@site/docs/services/packet_logs.md",sourceDirName:"services",slug:"/services/packet_logs",permalink:"/pages/docs/services/packet_logs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multicast UDP Proxy",permalink:"/pages/docs/services/multicast_proxy"},next:{title:"PPP",permalink:"/pages/docs/services/ppp"}},l={},s=[{value:"The Groups",id:"the-groups",level:2},{value:"Group 0",id:"group-0",level:3},{value:"wan:in",id:"wanin",level:4},{value:"lan:in",id:"lanin",level:4},{value:"wan:out",id:"wanout",level:4},{value:"lan:out",id:"lanout",level:4},{value:"Group 1 - Dropped packets",id:"group-1---dropped-packets",level:3},{value:"drop:private",id:"dropprivate",level:4},{value:"drop:forward",id:"dropforward",level:4},{value:"drop:input",id:"dropinput",level:4},{value:"drop:mac",id:"dropmac",level:4}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packet-logs"},"Packet Logs"),(0,o.kt)("p",null,"This service receives packets over NFLog netlink messages."),(0,o.kt)("p",null,"The packet info is sent to the sprbus /pages/docs/services/sprbus where clients subscribing to the ",(0,o.kt)("em",{parentName:"p"},"nft"),"-prefix gets notified.\n",(0,o.kt)("em",{parentName:"p"},"Example"),": The ",(0,o.kt)("a",{parentName:"p",href:"/pages/docs/services/db"},"db service")," can enable storage of logs by adding the topic to ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/db/config.json")," under the ",(0,o.kt)("em",{parentName:"p"},"SaveEvents")," key."),(0,o.kt)("p",null,"See also: sprbus /pages/docs/services/sprbus"),(0,o.kt)("h2",{id:"the-groups"},"The Groups"),(0,o.kt)("h3",{id:"group-0"},"Group 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'chain INPUT  { ...\n$(if [ "$WANIF" ]; then echo "iifname $WANIF log prefix \\"wan:in \\" group 0"; fi)\n$(if [ "$WANIF" ]; then echo "iifname ne $WANIF log prefix \\"lan:in \\" group 0"; else echo "log prefix \\"lan:in \\" group 0"; fi)\n\n}\n\nchain FORWARD { ...\n\n$(if [ "$WANIF" ]; then echo "oifname $WANIF log prefix \\"wan:out \\" group 0"; fi)\n$(if [ "$WANIF" ]; then echo "oifname ne $WANIF log prefix \\"lan:out \\" group 0"; else echo "log prefix \\"lan:out \\" group 0"; fi)\n')),(0,o.kt)("p",null,"}"),(0,o.kt)("h4",{id:"wanin"},"wan:in"),(0,o.kt)("p",null,"Input from the upstream interface ($WANIF)"),(0,o.kt)("h4",{id:"lanin"},"lan:in"),(0,o.kt)("p",null,"Input from all other devices (wireguard, wireless clients, wired devices)"),(0,o.kt)("h4",{id:"wanout"},"wan:out"),(0,o.kt)("p",null,"Packets forwarded upstream to the internet over the $WANIF interface"),(0,o.kt)("h4",{id:"lanout"},"lan:out"),(0,o.kt)("p",null,"Packets forwaded to any other non-upstream interface"),(0,o.kt)("h3",{id:""}),(0,o.kt)("h3",{id:"group-1---dropped-packets"},"Group 1 - Dropped packets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'log prefix "drop:private " group 1\ncounter log prefix "drop:forward " group 1\ncounter log prefix "drop:input " group 1\nlog prefix "drop:mac " group 1\n')),(0,o.kt)("h4",{id:"dropprivate"},"drop:private"),(0,o.kt)("p",null,"This prefix marks packets that were dropped because they were headed upstream\nto a private network address, but blocked from doing so because they were not\nin a permitted group"),(0,o.kt)("h4",{id:"dropforward"},"drop:forward"),(0,o.kt)("p",null,"Packets that were dropped during forward"),(0,o.kt)("h4",{id:"dropinput"},"drop:input"),(0,o.kt)("p",null,"Input packets into SPR that were dropped"),(0,o.kt)("h4",{id:"dropmac"},"drop:mac"),(0,o.kt)("p",null,"Packets that were dropped because of an strict MAC filtering in\nthe INPUT chain in the FORWARD chain."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/packet_logs"}," \u21e8 View the code")))}u.isMDXComponent=!0}}]);