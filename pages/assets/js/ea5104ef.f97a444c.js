"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[1885],{63189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(85893),s=r(11151);const o={slug:"spr-mitmproxy",title:"Transparent Socket Forwarding with SPR and MITMProxy",authors:"ltsrad",tags:["mitmproxy","microsegmentation","transparent sockets","PLUS"]},i=void 0,a={permalink:"/pages/blog/spr-mitmproxy",source:"@site/blog/2023-11-14-mitmproxy.md",title:"Transparent Socket Forwarding with SPR and MITMProxy",description:"Update",date:"2023-11-14T00:00:00.000Z",formattedDate:"November 14, 2023",tags:[{label:"mitmproxy",permalink:"/pages/blog/tags/mitmproxy"},{label:"microsegmentation",permalink:"/pages/blog/tags/microsegmentation"},{label:"transparent sockets",permalink:"/pages/blog/tags/transparent-sockets"},{label:"PLUS",permalink:"/pages/blog/tags/plus"}],readingTime:1.925,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"spr-mitmproxy",title:"Transparent Socket Forwarding with SPR and MITMProxy",authors:"ltsrad",tags:["mitmproxy","microsegmentation","transparent sockets","PLUS"]},unlisted:!1,prevItem:{title:"Loading an nzyme tap on SPR",permalink:"/pages/blog/spr-nzyme-tap"},nextItem:{title:"Loading up nexmon on a RPI4 with SPR",permalink:"/pages/blog/spr-nexmon"}},l={authorsImageUrls:[void 0]},c=[{value:"Update",id:"update",level:2},{value:"Overview",id:"overview",level:2},{value:"Prepare the plugin",id:"prepare-the-plugin",level:3},{value:"Configure SPR",id:"configure-spr",level:3},{value:"Using mitmproxy",id:"using-mitmproxy",level:3},{value:"Leveraging Transparent Sockets",id:"leveraging-transparent-sockets",level:2},{value:"We&#39;d love to hear from you",id:"wed-love-to-hear-from-you",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"update",children:"Update"}),"\n",(0,n.jsxs)(t.p,{children:["This post has become a guide which is being kept up to date, ",(0,n.jsx)(t.a,{href:"/pages/docs/guides_plus/mitmproxy",children:"check it out!"})]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["In this post we'll show how PLUS members can add a ",(0,n.jsx)(t.code,{children:"mitmproxy"})," plugin to their SPR setup,\nand then use the ",(0,n.jsx)(t.a,{href:"https://www.supernetworks.org/plus.html",children:"Programmable Firewall (PFW)"})," plugin to redirect traffic through ",(0,n.jsx)(t.code,{children:"mitmproxy"})," with DNAT forwarding."]}),"\n",(0,n.jsxs)(t.p,{children:["We do not need to configure our clients with proxy settings to point to ",(0,n.jsx)(t.code,{children:"mitmproxy"}),", or rewrite DNS responses,\nsince we are using the PFW feature to do the redirection."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/spr-networks/spr-mitmproxy",children:"This plugin is available on github."})}),"\n",(0,n.jsx)(t.h3,{id:"prepare-the-plugin",children:"Prepare the plugin"}),"\n",(0,n.jsxs)(t.p,{children:["from the SPR directory, typically ",(0,n.jsx)(t.code,{children:"/home/spr/super"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'cd plugins\ngit clone https://github.com/spr-networks/spr-mitmproxy\necho [\\"plugins/spr-mitmproxy/docker-compose.yml\\"] > ../configs/base/custom_compose_paths.json\ncd spr-mitmproxy\ndocker-compose build\n'})}),"\n",(0,n.jsx)(t.h3,{id:"configure-spr",children:"Configure SPR"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to the SPR UI. Add mitmproxy under the Plugins page"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["be sure its been added to ",(0,n.jsx)(t.code,{children:"configs/base/custom_compose_paths.json"})," as above"]}),"\n",(0,n.jsxs)(t.li,{children:["Enable it by toggling the slider\n",(0,n.jsx)(t.img,{src:"https://github.com/spr-networks/spr-mitmproxy/assets/37549748/dcc0f1ea-724a-4ed0-856a-56444ea2569f",alt:""})]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.code,{children:"mitmweb0"})," to the custom interface rules. You can verify your container's network address in the Container tab ->\nUnder ",(0,n.jsx)(t.code,{children:"Firewall-> Custom Interface Access"})," Add a new rule, make sure mitmproxy has ",(0,n.jsx)(t.code,{children:"wan"})," at least to access the internet."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/spr-networks/spr-mitmproxy/assets/37549748/71d4c8c9-3812-452f-86df-a7d19fb703a6",alt:""})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a forwarding rule to the container web interface :8081. Pick an arbitrary IP in the subnet -- although not the same one as the container as that confuses dnat.\n",(0,n.jsx)(t.img,{src:"https://github.com/spr-networks/spr-mitmproxy/assets/37549748/ff1424c6-b6ad-48d4-8ffe-03186f61abc6",alt:""})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a site forward rule with PFW for traffic to intercept\n",(0,n.jsx)(t.img,{src:"https://github.com/spr-networks/spr-mitmproxy/assets/37549748/4d5e49b4-5860-4aad-ac17-510589ee31c5",alt:""})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"using-mitmproxy",children:"Using mitmproxy"}),"\n",(0,n.jsxs)(t.p,{children:["Then make a curl request from any of the LAN devices, and it should populate on the mitmweb host. This was the :8081 host that was earlier defined\n",(0,n.jsx)(t.img,{src:"https://github.com/spr-networks/spr-mitmproxy/assets/37549748/a70a9f7e-91b9-4798-926b-2cb625f71e78",alt:""})]}),"\n",(0,n.jsx)(t.h2,{id:"leveraging-transparent-sockets",children:"Leveraging Transparent Sockets"}),"\n",(0,n.jsxs)(t.p,{children:["Behind the scenes, ",(0,n.jsx)(t.code,{children:"mitmproxy"})," is using transparent sockets with DNAT. Inside the container network,\nwe establish dnat rules to ",(0,n.jsx)(t.code,{children:"mitmproxy"})," from incoming ports ",(0,n.jsx)(t.code,{children:"80"}),", ",(0,n.jsx)(t.code,{children:"443"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"#!/bin/bash\n\nnft -f - << EOF\ntable inet nat {\n        chain prerouting {\n                type nat hook prerouting priority filter; policy accept;\n                tcp dport { 80, 443 } dnat ip to 127.0.0.1:9999\n        }\n}\nEOF\n\nmitmweb -p 9999 -m transparent --web-host 0.0.0.0\n"})}),"\n",(0,n.jsx)(t.h2,{id:"wed-love-to-hear-from-you",children:"We'd love to hear from you"}),"\n",(0,n.jsxs)(t.p,{children:["We're always thrilled to get feedback on plugins people would like to see, and we're\nexcited to hear about what people will be able to do with ",(0,n.jsx)(t.code,{children:"mitmproxy"})," running\nalongside SPR. Drop a line at ",(0,n.jsx)(t.a,{href:"mailto:outreach+s@supernetworks.org",children:"outreach[at]supernetworks.org"})," or join us on ",(0,n.jsx)(t.a,{href:"https://discord.com/invite/EUjTKJPPAX",children:"discord"})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);