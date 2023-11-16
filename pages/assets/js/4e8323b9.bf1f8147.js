"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[5029],{2241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(5893),r=n(1151);const i={slug:"virtual-spr-on-a-digital-ocean-droplet",title:"Run Virtual SPR on a DigitalOcean Droplet",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard","DigitalOcean"]},s=void 0,l={permalink:"/pages/blog/virtual-spr-on-a-digital-ocean-droplet",source:"@site/blog/2022-10-03-virtual-spr-do.md",title:"Run Virtual SPR on a DigitalOcean Droplet",description:"Introduction",date:"2022-10-03T00:00:00.000Z",formattedDate:"October 3, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Virtual",permalink:"/pages/blog/tags/virtual"},{label:"Cloud",permalink:"/pages/blog/tags/cloud"},{label:"VPN",permalink:"/pages/blog/tags/vpn"},{label:"WireGuard",permalink:"/pages/blog/tags/wire-guard"},{label:"DigitalOcean",permalink:"/pages/blog/tags/digital-ocean"}],readingTime:1.32,hasTruncateMarker:!1,authors:[{name:"Philip Olausson",url:"https://twitter.com/capslcc",key:"ltspo"}],frontMatter:{slug:"virtual-spr-on-a-digital-ocean-droplet",title:"Run Virtual SPR on a DigitalOcean Droplet",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard","DigitalOcean"]},unlisted:!1,prevItem:{title:"Run Virtual SPR on a AWS Micro Tier Instance",permalink:"/pages/blog/virtual-spr-on-a-aws-micro-tier-instance"},nextItem:{title:"SPR in the cloud",permalink:"/pages/blog/virtual SPR"}},o={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Create a Droplet",id:"create-a-droplet",level:2},{value:"Install Virtual SPR",id:"install-virtual-spr",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"This guide shows how to setup Virtual SPR on a DigitalOcean Droplet and connect to it using WireGuard VPN."}),"\n",(0,a.jsxs)(t.p,{children:["For a more general and in-depth guide see the ",(0,a.jsx)(t.a,{href:"/blog/virtual%20SPR",children:"Virtual SPR Guide"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-droplet",children:"Create a Droplet"}),"\n",(0,a.jsxs)(t.p,{children:["Login to ",(0,a.jsx)(t.a,{href:"https://cloud.digitalocean.com",children:"DigitalOcean"})," and click ",(0,a.jsx)(t.em,{children:"Create Droplet"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(5572).Z+"",width:"2880",height:"1622"})}),"\n",(0,a.jsxs)(t.p,{children:["Select prefered Region and Datacenter (",(0,a.jsx)(t.em,{children:"Amsterdam"})," and ",(0,a.jsx)(t.em,{children:"AMS3"})," in the example),\ngo with default ",(0,a.jsx)(t.em,{children:"Ubuntu 22.04 x64"})," for OS and version."]}),"\n",(0,a.jsxs)(t.p,{children:["For Droplet Size, the smallest ",(0,a.jsx)(t.em,{children:"$4/month"})," Basic with 512 MB RAM is enough but feel free to choose another one."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(2145).Z+"",width:"2880",height:"1618"})}),"\n",(0,a.jsxs)(t.p,{children:["If you already have a ssh key configured for a project you can choose the pubkey or click ",(0,a.jsx)(t.em,{children:"New SSH Key"})," for ",(0,a.jsx)(t.em,{children:"Choose Authentication Method"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.em,{children:"Create Droplet"})," & wait for it to spin up."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(7216).Z+"",width:"2880",height:"1621"})}),"\n",(0,a.jsx)(t.h2,{id:"install-virtual-spr",children:"Install Virtual SPR"}),"\n",(0,a.jsx)(t.p,{children:"When the droplet has started, copy the ipv4 address and ssh into the box using your ssh key as root:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"ssh -i .ssh/id_rsa root@paste-ipv4-address-here\n"})}),"\n",(0,a.jsx)(t.p,{children:"Run the SPR virtual installer as root on the droplet:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:'bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The script will download the ",(0,a.jsx)(t.a,{href:"https://github.com/spr-networks/super",children:"SPR repository"})," and run ",(0,a.jsx)(t.em,{children:"virtual_install.sh"})," (you can also checkout the ",(0,a.jsx)(t.a,{href:"https://github.com/spr-networks/super",children:"repository"})," and run the script manually if you want to inspect the script before running it.)"]}),"\n",(0,a.jsx)(t.p,{children:"If you want to add another device, just run the setup script again:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"cd super\n./virtual_install.sh\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now you have a WireGuard VPN config ready, either scan the QR Code or paste the config into the ",(0,a.jsx)(t.a,{href:"https://www.wireguard.com/install/",children:"WireGuard client"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For more information on setting up the client see ",(0,a.jsx)(t.a,{href:"/blog/virtual%20SPR#configure-the-vpn-client-on-your-device",children:"the Virtual SPR Guide"})," on how to connect your VPN client to the droplet instance."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5572:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-digital-ocean-1-bedee1ad9531fc8bcda5933b7dfa45c9.png"},2145:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-digital-ocean-2-ca9699589bf6a28aa093388e8024b00b.png"},7216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-digital-ocean-3-aaefd596e6c71828de8211b4bb61d104.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(7294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);