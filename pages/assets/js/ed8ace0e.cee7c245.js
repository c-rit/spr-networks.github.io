"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[7457],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||p;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8047:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=r(7462),o=r(3366),p=(r(7294),r(3905)),a=["components"],i={},s="PPP",c={unversionedId:"services/ppp",id:"services/ppp",title:"PPP",description:"SPR can be run as the point of entry for home internet.",source:"@site/docs/services/ppp.md",sourceDirName:"services",slug:"/services/ppp",permalink:"/pages/docs/services/ppp",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packet Logs",permalink:"/pages/docs/services/packet_logs"},next:{title:"Superd",permalink:"/pages/docs/services/superd"}},u={},l=[],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"ppp"},"PPP"),(0,p.kt)("p",null,"SPR can be run as the point of entry for home internet."),(0,p.kt)("p",null,"PPPoE is supported with the standard ubuntu ppp daemon. To configure it,\nset ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/blob/main/base/template_configs/ppp/chap-secrets"},"chap-secrets"),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/blob/main/base/template_configs/ppp/peers/peer_sample"},"the peer information"),", and the ",(0,p.kt)("inlineCode",{parentName:"p"},"PPPIF"),",",(0,p.kt)("inlineCode",{parentName:"p"},"PPP_VLANID"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"PPP_PROVIDER")," variables in ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/blob/main/base/template_configs/base/config.sh#L8"},(0,p.kt)("inlineCode",{parentName:"a"},"config/base/config.sh"))),(0,p.kt)("p",null,"For example, provided the ",(0,p.kt)("inlineCode",{parentName:"p"},"eth0")," interface goes to the ISP, and the ISP expects VLAN tagged traffic with id 201,\nthe following variables should be set in config.sh, where ",(0,p.kt)("inlineCode",{parentName:"p"},"provider-config")," is the name of the peers file."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"PPPIF=eth0\nWANIF=ppp0\nPPP_VLANID=201\nPPP_PROVIDER=provider-config\n")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/ppp"}," \u21e8 View the code")))}m.isMDXComponent=!0}}]);