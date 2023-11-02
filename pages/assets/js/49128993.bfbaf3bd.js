"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[7974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},73141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},s="DHCP",i={unversionedId:"services/dhcp",id:"services/dhcp",title:"DHCP",description:"DHCP is powered by CoreDHCP. CoreDHCP is an extensible DHCP",source:"@site/docs/services/dhcp.md",sourceDirName:"services",slug:"/services/dhcp",permalink:"/pages/docs/services/dhcp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/pages/docs/services/db"},next:{title:"DHCP Client",permalink:"/pages/docs/services/dhcp_client"}},c={},p=[{value:"Execute",id:"execute",level:3},{value:"Tiny Subnets",id:"tiny-subnets",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dhcp"},"DHCP"),(0,a.kt)("p",null,"DHCP is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://coredhcp.io/"},"CoreDHCP"),". CoreDHCP is an extensible DHCP\nclient and server purely written in golang."),(0,a.kt)("p",null,"SPR maintains a fork with two additional plugins:"),(0,a.kt)("h3",{id:"execute"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/spr-networks/coredhcp/blob/master/plugins/execute/plugin.go"},"Execute")),(0,a.kt)("p",null,"The Execute script receives:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The assigned IP Address"),(0,a.kt)("li",{parentName:"ol"},"The MAC address"),(0,a.kt)("li",{parentName:"ol"},"The provided DHCP Client Hostname"),(0,a.kt)("li",{parentName:"ol"},"The interface name where the DHCP request arrived"),(0,a.kt)("li",{parentName:"ol"},"The assigned Router IP address")),(0,a.kt)("h3",{id:"tiny-subnets"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/spr-networks/coredhcp/tree/master/plugins/tiny_subnets"},"Tiny Subnets")),(0,a.kt)("p",null,"This plugin creates tiny subnets that build up the LAN supernetwork. It also hosts a unix socket API\nfor arbitrary IP assignment over HTTP: ",(0,a.kt)("a",{parentName:"p",href:"hhttps://github.com/spr-networks/coredhcp/blob/bc16fdc4d07ea93ade2fc088eb736b23e9e181ce/plugins/tiny_subnets/plugin.go#L38"},"abstractDHCP")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/dhcp"}," \u21e8 View the code")))}u.isMDXComponent=!0}}]);