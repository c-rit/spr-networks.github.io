"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},s="Database",c={unversionedId:"services/db",id:"services/db",title:"Database",description:"The database service is powered by bolt.",source:"@site/docs/services/db.md",sourceDirName:"services",slug:"/services/db",permalink:"/pages/docs/services/db",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Base",permalink:"/pages/docs/services/base"},next:{title:"DHCP",permalink:"/pages/docs/services/dhcp"}},i={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"database"},"Database"),(0,a.kt)("p",null,"The database service is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/boltdb/bolt"},"bolt"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Bolt is a pure Go key/value store inspired by Howard Chu's LMDB project. The goal of the project is to provide a simple, fast, and reliable database for projects that don't require a full database server such as Postgres or MySQL.\"")),(0,a.kt)("p",null,"The API communicates with SPR over a unix socket, located at ",(0,a.kt)("inlineCode",{parentName:"p"},"state/plugins/db/socket")," and is ",(0,a.kt)("a",{parentName:"p",href:"/api/0#tag/db"},"documented here"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/db"}," \u21e8 View the code")))}u.isMDXComponent=!0}}]);