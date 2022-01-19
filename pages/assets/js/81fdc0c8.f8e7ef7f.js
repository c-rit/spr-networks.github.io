"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[410],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,v=f["".concat(u,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5533:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},u="API Overview",s={unversionedId:"apis/overview",id:"apis/overview",title:"API Overview",description:"The API service exists for communication between service containers and to support",source:"@site/docs/apis/overview.md",sourceDirName:"apis",slug:"/apis/overview",permalink:"/docs/apis/overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to SPR!",permalink:"/docs/intro"},next:{title:"Web API",permalink:"/docs/apis/web_api"}},p=[],l={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-overview"},"API Overview"),(0,i.kt)("p",null,"The API service exists for communication between service containers and to support\nexternal requests from the web front end or CLI tools."),(0,i.kt)("p",null,"The internal APIs run over unix sockets and rely on filesystem namespaces for authentication.\nCurrently there are two internal APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for ",(0,i.kt)("a",{parentName:"li",href:"unix_sockets/wifi_unix_socket"},"wifid service accepting stations")),(0,i.kt)("li",{parentName:"ul"},"Setting up dynamic firewall rules for ",(0,i.kt)("a",{parentName:"li",href:"unix_sockets/dhcp_unix_socket"},"DHCP clients"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/api"}," \u21e8 View the code")))}f.isMDXComponent=!0}}]);