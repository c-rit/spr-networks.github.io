"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[3491],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5575:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Virtual Setup Guide"},u="Virtual Setup Guide",s={unversionedId:"virtual_spr",id:"virtual_spr",title:"Virtual Setup Guide",description:"SPR can run its services in a network namespace and expose Wireguard or DNS as services.",source:"@site/docs/virtual_spr.md",sourceDirName:".",slug:"/virtual_spr",permalink:"/pages/docs/virtual_spr",tags:[],version:"current",frontMatter:{sidebar_label:"Virtual Setup Guide"},sidebar:"tutorialSidebar",previous:{title:"Setup Guide",permalink:"/pages/docs/setup_run_spr"}},p={},c=[{value:"Configuration",id:"configuration",level:3},{value:"Running the prebuilt images",id:"running-the-prebuilt-images",level:3},{value:"Alternately, building from source",id:"alternately-building-from-source",level:3},{value:"Sign in to the Web UI",id:"sign-in-to-the-web-ui",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"virtual-setup-guide"},"Virtual Setup Guide"),(0,o.kt)("p",null,"SPR can run its services in a network namespace and expose Wireguard or DNS as services.\nThis is helpful for running SPR in the cloud as a personal VPN, for example."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Clone the super repository"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:spr-networks/super.git\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Populate the configuration directory"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd super\n$ cp -R base/template_configs/ configs/\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"strong"},"configs/base/config.sh")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the VIRTUAL_SPR=1 variable")),(0,o.kt)("p",null,"Example configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#!/bin/sh\nVIRTUAL_SPR=1\nUPSTREAM_SERVICES_ENABLE=1\nWANIF=eth0\nRUN_WAN_DHCP=true\nRUN_WAN_DHCP_IPV=4\nLANIP=192.168.2.1\nDNSIP=$LANIP\nTINYNETSTART=192.168.2.4\nTINYNETSTOP=192.168.2.255\nTINYNETMASK=255.255.255.252\nTINYSLASHMASK=30\nDOCKERNET=172.17.0.0/16\nDOCKERIF=docker0\nWIREGUARD_PORT=51280\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set an api username and password for the web UI"))),(0,o.kt)("p",null,"The UI will be reachable on port 8000 when running SPR Virtually"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo {\\"admin\\" : \\"your password goes here\\"} > configs/base/auth_users.json\n')),(0,o.kt)("h3",{id:"running-the-prebuilt-images"},"Running the prebuilt images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose -f docker-compose-virt.yml up -d\n")),(0,o.kt)("p",null,"Note: ",(0,o.kt)("em",{parentName:"p"},"On MacOS you may need to modify docker-compose-virt.yml to disable the ",(0,o.kt)("inlineCode",{parentName:"em"},"journald")," driver and enable the ",(0,o.kt)("inlineCode",{parentName:"em"},"json-file")," driver instead.")),(0,o.kt)("h3",{id:"alternately-building-from-source"},"Alternately, building from source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose -f docker-compose-virtsrc.yml up -d\n")),(0,o.kt)("p",null,"Note: ",(0,o.kt)("em",{parentName:"p"},"On MacOS you may need to modify docker-compose-virt.yml to disable the ",(0,o.kt)("inlineCode",{parentName:"em"},"journald")," driver and enable the ",(0,o.kt)("inlineCode",{parentName:"em"},"json-file")," driver instead.")),(0,o.kt)("h3",{id:"sign-in-to-the-web-ui"},"Sign in to the Web UI"),(0,o.kt)("p",null,"The API is set to run on port 8000 on the host. Navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/%5D"},"http://localhost:8000/")),(0,o.kt)("p",null,"Sign in with the username and password assigned in step 3 of the configuration."))}m.isMDXComponent=!0}}]);