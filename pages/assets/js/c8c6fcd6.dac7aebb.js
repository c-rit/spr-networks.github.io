"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[3688],{70970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(85893),n=a(11151);const s={slug:"spr-tailscale-integration",title:"SPR Tailscale",authors:["ltsrad"],tags:["tailscale","wireguard","microsegmentation","vpn","plugins"]},l=void 0,r={permalink:"/pages/blog/spr-tailscale-integration",source:"@site/blog/2024-03-26-spr-tailscale-plugin.md",title:"SPR Tailscale",description:"Introducing SPR-Tailscale",date:"2024-03-26T00:00:00.000Z",formattedDate:"March 26, 2024",tags:[{label:"tailscale",permalink:"/pages/blog/tags/tailscale"},{label:"wireguard",permalink:"/pages/blog/tags/wireguard"},{label:"microsegmentation",permalink:"/pages/blog/tags/microsegmentation"},{label:"vpn",permalink:"/pages/blog/tags/vpn"},{label:"plugins",permalink:"/pages/blog/tags/plugins"}],readingTime:1.34,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"spr-tailscale-integration",title:"SPR Tailscale",authors:["ltsrad"],tags:["tailscale","wireguard","microsegmentation","vpn","plugins"]},unlisted:!1,nextItem:{title:"Beacon Double Free in IWD",permalink:"/pages/blog/beacon-double-free-inet-wireless-daemon-CVE-2024-28084"}},o={authorsImageUrls:[void 0]},c=[{value:"Introducing SPR-Tailscale",id:"introducing-spr-tailscale",level:2},{value:"Under The Hood",id:"under-the-hood",level:2},{value:"What can it do ?",id:"what-can-it-do-",level:2},{value:"Links",id:"links",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introducing-spr-tailscale",children:"Introducing SPR-Tailscale"}),"\n",(0,i.jsxs)(t.p,{children:["We've released a new iteration of the ",(0,i.jsx)(t.a,{href:"https://github.com/spr-networks/spr-tailscale",children:"Tailscale integration for SPR"}),"!\nThis plugin was put together with ",(0,i.jsx)(t.a,{href:"https://twitter.com/willy_wong",children:"@willy_wong"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"spr-tailscale",src:a(52905).Z+"",width:"2210",height:"1218"})}),"\n",(0,i.jsx)(t.h2,{id:"under-the-hood",children:"Under The Hood"}),"\n",(0,i.jsx)(t.p,{children:"Getting this plugin to work in the first place required some thinking.\nThe first was addressing a key missing feature for SPR: interface-based firewall rules and routing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"firewall-custom-interface-rule-add",src:a(6375).Z+"",width:"1280",height:"599"})}),"\n",(0,i.jsx)(t.p,{children:"This capability lets SPR perform container microsegmentation.  Any interface can be treated this way actually.\nIt allows for connecting interfaces with policies and groups that SPR has not been explicitly programmed for, as well as providing them API access."}),"\n",(0,i.jsx)(t.p,{children:"The Tailscale plugin sets up its own policy based routing and firewall rules, so being able to run it inside of its own network namespace is ideal.\nSPR then uses the custom interface rule to route to the container's network and let it do the forwarding on its own."}),"\n",(0,i.jsxs)(t.p,{children:["Next, setting it up was awkward, painful. To fix this the SPR team added UX for plugins, and the ability to install a plugin via a URL with an OTP code verification. And today we've released this capability for ",(0,i.jsx)(t.code,{children:"spr-tailscale"}),"!  It's supported from SPR version 0.3.7"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"spr-tailscale",src:a(34387).Z+"",width:"2384",height:"1158"})}),"\n",(0,i.jsx)(t.h2,{id:"what-can-it-do-",children:"What can it do ?"}),"\n",(0,i.jsx)(t.p,{children:"This integration lets SPR devices selectively access Tailscale peers. And similarly, Tailscale peers can be joined to SPR groups to give them access to SPR devices."}),"\n",(0,i.jsx)(t.p,{children:"The Plugin presents a React Based UI and simplifies the install. After the install, a user needs to present their Auth Key and they're good to go."}),"\n",(0,i.jsx)(t.p,{children:"The container can run as an exit node as well."}),"\n",(0,i.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.p,{children:["You can check out the ",(0,i.jsx)(t.a,{href:"https://github.com/spr-networks/spr-tailscale",children:"spr-tailscale"})," integration here!"]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6375:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/firewall-custom-interface-rule-add-6c2885f7af0f5fd0911a4fde33cb4c27.png"},52905:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/combo-6570affc7ea16f7b29e7fafdfb216593.png"},34387:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tailscale-ui-29391be90e22dc10a329d1a499d63c55.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>l});var i=a(67294);const n={},s=i.createContext(n);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);