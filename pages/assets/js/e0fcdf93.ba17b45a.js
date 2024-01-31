"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6203],{29717:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(85893),t=n(11151);const o={sidebar_position:10},c="Logs and Events",a={id:"guides/logs",title:"Logs and Events",description:"Logs",source:"@site/docs/guides/logs.md",sourceDirName:"guides",slug:"/guides/logs",permalink:"/pages/docs/guides/logs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Installing Extensions",permalink:"/pages/docs/guides/plugins"},next:{title:"Alerts",permalink:"/pages/docs/guides/alerts"}},r={},d=[{value:"Logs",id:"logs",level:2},{value:"Events",id:"events",level:2},{value:"Notifications",id:"notifications",level:3},{value:"Enable notifications",id:"enable-notifications",level:4},{value:"Using the cli tools",id:"using-the-cli-tools",level:2},{value:"Packet logs",id:"packet-logs",level:3},{value:"Events",id:"events-1",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"logs-and-events",children:"Logs and Events"}),"\n",(0,i.jsx)(s.h2,{id:"logs",children:"Logs"}),"\n",(0,i.jsxs)(s.p,{children:["Logs are available under ",(0,i.jsx)(s.em,{children:"System -> Logs"}),". this is a UI of stdout for the containers & kernel logs."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logs-list",src:n(87704).Z+"",width:"1280",height:"800"})}),"\n",(0,i.jsxs)(s.p,{children:["Logs can also be found on the spr host by running ",(0,i.jsx)(s.code,{children:"docker compose logs"})," in the super directory."]}),"\n",(0,i.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"events-list",src:n(61038).Z+"",width:"1280",height:"800"})}),"\n",(0,i.jsxs)(s.p,{children:["In addition to API logs, evetns include device actions ando ther activity. Examples: when a\ndevice connects, a dns lookup is made or traffic is routed. See the\n",(0,i.jsx)(s.a,{href:"/pages/docs/services/sprbus",children:"sprbus"})," service for more information about available events."]}),"\n",(0,i.jsx)(s.h3,{id:"notifications",children:"Notifications"}),"\n",(0,i.jsxs)(s.p,{children:["NOTE: Notifications are deprecated and have been replaced by ",(0,i.jsx)(s.a,{href:"alerts",children:"Alerts"})," which support notifications."]}),"\n",(0,i.jsxs)(s.p,{children:["Notifications can be set for certain events. ",(0,i.jsx)(s.em,{children:"Example:"})," a device connects to a specific IP address."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"notification-list",src:n(41728).Z+"",width:"1280",height:"551"}),"\nSee the ",(0,i.jsx)(s.code,{children:"nft:"})," -prefix events from ",(0,i.jsx)(s.a,{href:"/pages/docs/services/sprbus#available-events",children:"sprbus"})," documentation for more information."]}),"\n",(0,i.jsx)(s.h4,{id:"enable-notifications",children:"Enable notifications"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"notification-add",src:n(10787).Z+"",width:"1280",height:"598"})}),"\n",(0,i.jsxs)(s.p,{children:["Navigate to ",(0,i.jsx)(s.em,{children:"Events -> Notifications"})," click ",(0,i.jsx)(s.em,{children:"Add Notification"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Select prefix (direction of traffic), protocol and address information.\nIf the notification is enabled, when triggered, a popup will appear in the ui (or notification on iOS app)."}),"\n",(0,i.jsx)(s.h2,{id:"using-the-cli-tools",children:"Using the cli tools"}),"\n",(0,i.jsxs)(s.p,{children:["View main logs for spr containers with ",(0,i.jsx)(s.code,{children:"docker compose logs -f"})," in super directory."]}),"\n",(0,i.jsx)(s.h3,{id:"packet-logs",children:"Packet logs"}),"\n",(0,i.jsx)(s.p,{children:"Retrieve JSON packet logs with"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"docker exec -it superpacket_logs /stream-json-logs\n"})}),"\n",(0,i.jsx)(s.h3,{id:"events-1",children:"Events"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"/pages/docs/services/sprbus#command-line-tools",children:"sprbus tool"})," can be used to view logs and events. Either run it locally or connect with an API\ntoken."]}),"\n",(0,i.jsxs)(s.p,{children:["You can generate an API token in the UI under ",(0,i.jsx)(s.em,{children:'"Auth-> Add Auth Token"'})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:'export TOKEN="SPR-API-TOKEN"\n./sprbus --addr 192.168.2.1\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sprbus",src:n(502).Z+"",width:"1200",height:"750"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},61038:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/events-list-70e82a4f8f4e225cbf57e3a97294d99d.png"},87704:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logs-list-95a7af90c3d30e0c07e10e5678976f75.png"},10787:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/notification-add-91065efefdf2bfdbf17176d367f88184.png"},41728:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/notification-list-28ecde5f9e1e56ddf712920a1bef75b0.png"},502:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sprbus-cli-476cc4f905e635d16c3fdcc0041fc30a.gif"},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>c});var i=n(67294);const t={},o=i.createContext(t);function c(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);