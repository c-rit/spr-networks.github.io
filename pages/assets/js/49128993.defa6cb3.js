"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[7974],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3141:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},c="DHCP",p={unversionedId:"services/dhcp",id:"services/dhcp",title:"DHCP",description:"DHCP is powered by CoreDHCP. CoreDHCP is an extensible DHCP",source:"@site/docs/services/dhcp.md",sourceDirName:"services",slug:"/services/dhcp",permalink:"/pages/docs/services/dhcp",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/pages/docs/services/db"},next:{title:"DHCP Client",permalink:"/pages/docs/services/dhcp_client"}},u={},l=[{value:"Execute",id:"execute",level:3},{value:"Tiny Subnets",id:"tiny-subnets",level:3}],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dhcp"},"DHCP"),(0,i.kt)("p",null,"DHCP is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://coredhcp.io/"},"CoreDHCP"),". CoreDHCP is an extensible DHCP\nclient and server purely written in golang."),(0,i.kt)("p",null,"SPR maintains a fork with two additional plugins:"),(0,i.kt)("h3",{id:"execute"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/spr-networks/coredhcp/blob/master/plugins/execute/plugin.go"},"Execute")),(0,i.kt)("p",null,"The Execute script receives:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The assigned IP Address"),(0,i.kt)("li",{parentName:"ol"},"The MAC address"),(0,i.kt)("li",{parentName:"ol"},"The provided DHCP Client Hostname"),(0,i.kt)("li",{parentName:"ol"},"The interface name where the DHCP request arrived"),(0,i.kt)("li",{parentName:"ol"},"The assigned Router IP address")),(0,i.kt)("h3",{id:"tiny-subnets"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/spr-networks/coredhcp/tree/master/plugins/tiny_subnets"},"Tiny Subnets")),(0,i.kt)("p",null,"This plugin creates tiny subnets that build up the LAN supernetwork. It also hosts a unix socket API\nfor arbitrary IP assignment over HTTP: ",(0,i.kt)("a",{parentName:"p",href:"hhttps://github.com/spr-networks/coredhcp/blob/bc16fdc4d07ea93ade2fc088eb736b23e9e181ce/plugins/tiny_subnets/plugin.go#L38"},"abstractDHCP")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/dhcp"}," \u21e8 View the code")))}f.isMDXComponent=!0}}]);