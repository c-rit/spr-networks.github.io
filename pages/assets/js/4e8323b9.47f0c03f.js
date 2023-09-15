"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[5029],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,h=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8893:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={slug:"virtual-spr-on-a-digital-ocean-droplet",title:"Run Virtual SPR on a DigitalOcean Droplet",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard","DigitalOcean"]},l=void 0,i={permalink:"/pages/blog/virtual-spr-on-a-digital-ocean-droplet",source:"@site/blog/2022-10-03-virtual-spr-do.md",title:"Run Virtual SPR on a DigitalOcean Droplet",description:"Introduction",date:"2022-10-03T00:00:00.000Z",formattedDate:"October 3, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Virtual",permalink:"/pages/blog/tags/virtual"},{label:"Cloud",permalink:"/pages/blog/tags/cloud"},{label:"VPN",permalink:"/pages/blog/tags/vpn"},{label:"WireGuard",permalink:"/pages/blog/tags/wire-guard"},{label:"DigitalOcean",permalink:"/pages/blog/tags/digital-ocean"}],readingTime:1.32,hasTruncateMarker:!1,authors:[{name:"Philip Olausson",url:"https://twitter.com/capslcc",key:"ltspo"}],frontMatter:{slug:"virtual-spr-on-a-digital-ocean-droplet",title:"Run Virtual SPR on a DigitalOcean Droplet",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard","DigitalOcean"]},prevItem:{title:"Run Virtual SPR on a AWS Micro Tier Instance",permalink:"/pages/blog/virtual-spr-on-a-aws-micro-tier-instance"},nextItem:{title:"SPR in the cloud",permalink:"/pages/blog/virtual SPR"}},p={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Create a Droplet",id:"create-a-droplet",level:2},{value:"Install Virtual SPR",id:"install-virtual-spr",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This guide shows how to setup Virtual SPR on a DigitalOcean Droplet and connect to it using WireGuard VPN."),(0,n.kt)("p",null,"For a more general and in-depth guide see the ",(0,n.kt)("a",{parentName:"p",href:"/blog/virtual%20SPR"},"Virtual SPR Guide"),"."),(0,n.kt)("h2",{id:"create-a-droplet"},"Create a Droplet"),(0,n.kt)("p",null,"Login to ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com"},"DigitalOcean")," and click ",(0,n.kt)("em",{parentName:"p"},"Create Droplet"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5572).Z,width:"2880",height:"1622"})),(0,n.kt)("p",null,"Select prefered Region and Datacenter (",(0,n.kt)("em",{parentName:"p"},"Amsterdam")," and ",(0,n.kt)("em",{parentName:"p"},"AMS3")," in the example),\ngo with default ",(0,n.kt)("em",{parentName:"p"},"Ubuntu 22.04 x64")," for OS and version."),(0,n.kt)("p",null,"For Droplet Size, the smallest ",(0,n.kt)("em",{parentName:"p"},"$4/month")," Basic with 512 MB RAM is enough but feel free to choose another one."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2145).Z,width:"2880",height:"1618"})),(0,n.kt)("p",null,"If you already have a ssh key configured for a project you can choose the pubkey or click ",(0,n.kt)("em",{parentName:"p"},"New SSH Key")," for ",(0,n.kt)("em",{parentName:"p"},"Choose Authentication Method"),"."),(0,n.kt)("p",null,"Click ",(0,n.kt)("em",{parentName:"p"},"Create Droplet")," & wait for it to spin up."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7216).Z,width:"2880",height:"1621"})),(0,n.kt)("h2",{id:"install-virtual-spr"},"Install Virtual SPR"),(0,n.kt)("p",null,"When the droplet has started, copy the ipv4 address and ssh into the box using your ssh key as root:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ssh -i .ssh/id_rsa root@paste-ipv4-address-here\n")),(0,n.kt)("p",null,"Run the SPR virtual installer as root on the droplet:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n')),(0,n.kt)("p",null,"The script will download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super"},"SPR repository")," and run ",(0,n.kt)("em",{parentName:"p"},"virtual_install.sh")," (you can also checkout the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super"},"repository")," and run the script manually if you want to inspect the script before running it.)"),(0,n.kt)("p",null,"If you want to add another device, just run the setup script again:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd super\n./virtual_install.sh\n")),(0,n.kt)("p",null,"Now you have a WireGuard VPN config ready, either scan the QR Code or paste the config into the ",(0,n.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"WireGuard client"),"."),(0,n.kt)("p",null,"For more information on setting up the client see ",(0,n.kt)("a",{parentName:"p",href:"/blog/virtual%20SPR#configure-the-vpn-client-on-your-device"},"the Virtual SPR Guide")," on how to connect your VPN client to the droplet instance."))}c.isMDXComponent=!0},5572:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-digital-ocean-1-bedee1ad9531fc8bcda5933b7dfa45c9.png"},2145:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-digital-ocean-2-ca9699589bf6a28aa093388e8024b00b.png"},7216:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-digital-ocean-3-aaefd596e6c71828de8211b4bb61d104.png"}}]);