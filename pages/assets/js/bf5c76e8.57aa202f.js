"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[5827],{88678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(85893),a=n(11151);const i={slug:"spr-2024-alerts",title:"Alerts to Improve Network Visibility",authors:["ltsrad"],tags:["SPR","alerts","jpath","events"]},r=void 0,l={permalink:"/pages/blog/spr-2024-alerts",source:"@site/blog/2024-01-31-we-have-alerts.md",title:"Alerts to Improve Network Visibility",description:"Alerting Made Easy",date:"2024-01-31T00:00:00.000Z",formattedDate:"January 31, 2024",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"alerts",permalink:"/pages/blog/tags/alerts"},{label:"jpath",permalink:"/pages/blog/tags/jpath"},{label:"events",permalink:"/pages/blog/tags/events"}],readingTime:3.205,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"spr-2024-alerts",title:"Alerts to Improve Network Visibility",authors:["ltsrad"],tags:["SPR","alerts","jpath","events"]},unlisted:!1,prevItem:{title:"What the I-Soon Leak Tells Us About WiFi Hacking",permalink:"/pages/blog/isoon-wifi-exploitation-2024"},nextItem:{title:"2023 Year in Review",permalink:"/pages/blog/spr-2023-in-review"}},o={authorsImageUrls:[void 0]},c=[{value:"Alerting Made Easy",id:"alerting-made-easy",level:2},{value:"The stack",id:"the-stack",level:2},{value:"Expression Matching with JSONPath",id:"expression-matching-with-jsonpath",level:2},{value:"JSONPath in SPR",id:"jsonpath-in-spr",level:3},{value:"Customizability &amp; Decorators",id:"customizability--decorators",level:2},{value:"Need a feature?",id:"need-a-feature",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"alerting-made-easy",children:"Alerting Made Easy"}),"\n",(0,s.jsx)(t.p,{children:"We've rolled out a lightweight alerting mechanism built right inside of SPR."}),"\n",(0,s.jsx)(t.p,{children:"So SPR already has an event system and we wanted to improve the existing notification system\nas well as persist alerts for later."}),"\n",(0,s.jsx)(t.p,{children:"We wanted something with the following properties:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Allow powerful matching expressions"}),"\n",(0,s.jsx)(t.li,{children:"Work with our lightweight key-value database for concurrent access"}),"\n",(0,s.jsx)(t.li,{children:"Minimal system performance impact"}),"\n",(0,s.jsx)(t.li,{children:"User Customizable, in UX with minimal coding"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"the-stack",children:"The stack"}),"\n",(0,s.jsx)(t.p,{children:"We carry extensive experience building threat detection products in the infosec space.\nTypically these have been substantial systems where event and graph databases manage petabytes of information,\nand reports get generated as part of data pipelines or by processing during ingestion."}),"\n",(0,s.jsx)(t.p,{children:"We wanted to keep it simple. So this is the stack we've settled on for alerts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Run alert matching during event ingestion"}),"\n",(0,s.jsx)(t.li,{children:"Keep using BoltDB as a KV which scales well and is already built"}),"\n",(0,s.jsxs)(t.li,{children:["Use  ",(0,s.jsx)(t.code,{children:"PaesslerAG/jsonpath"})," and ",(0,s.jsx)(t.code,{children:"gval"})," for JSONPath expressions and evaluation"]}),"\n",(0,s.jsxs)(t.li,{children:["Extensible later with custom operators and functions. We get this from ",(0,s.jsx)(t.code,{children:"gval"})]}),"\n",(0,s.jsx)(t.li,{children:"UX with our React frontend"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For advanced users, exporting to InfluxDB, Splunk, or ELK can be done with the ",(0,s.jsx)(t.code,{children:"sprbus"})," tools or by pulling the API for events,\nso threat detection experts can integrate SPR data into more sophisticated detection tools."]}),"\n",(0,s.jsx)(t.h2,{id:"expression-matching-with-jsonpath",children:"Expression Matching with JSONPath"}),"\n",(0,s.jsxs)(t.p,{children:["Let's quickly take a tour of ",(0,s.jsx)(t.a,{href:"https://www.jsonpath.com",children:"JSONPath"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alerts-custom",src:n(50050).Z+"",width:"800",height:"419"})}),"\n",(0,s.jsx)(t.p,{children:"JSONPath is a query syntax for matching fields of a JSON Object."}),"\n",(0,s.jsx)(t.p,{children:"Consider the event below"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "MAC": "30:58:90:32:7d:e5",\n  "Reason": "mismatch",\n  "Status": "",\n  "Type": "wpa",\n  "time": "2024-02-02T04:10:19.511662376Z",\n  "bucket": "wifi:auth:fail",\n  "MeaningOfLife": 42\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To retrieve the ",(0,s.jsx)(t.code,{children:"MeaningOfLife"})," field, we can construct the following path:"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$.MeaningOfLife"})," which returns ",(0,s.jsx)(t.code,{children:"42"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Looking at the basic operators for JSONPath, its very much built to recurse objects and iterate through arrays.\n",(0,s.jsx)(t.img,{alt:"alerts-custom",src:n(28253).Z+"",width:"2568",height:"856"})]}),"\n",(0,s.jsx)(t.p,{children:"So suppose we have an array of events, we can build a filter expression to query for matches."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "MAC": "30:58:90:32:7d:e5",\n    "Reason": "mismatch",\n    "Status": "",\n    "Type": "wpa",\n    "time": "2024-02-02T04:10:19.511662376Z",\n    "bucket": "wifi:auth:fail",\n    "MeaningOfLife": 42\n  }\n]\n'})}),"\n",(0,s.jsx)(t.p,{children:"To pull out events with MeaningOfLife 42, we would apply this query:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSONPath",children:"$[?(@.MeaningOfLife==42)]\n"})}),"\n",(0,s.jsx)(t.p,{children:"We could also use other mathematical comparisons"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSONPath",children:"$[?(@.MeaningOfLife>0)]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Or with gval we can even add numbers"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSONPath",children:"$[?(@.MeaningOfLife>(1+10))]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Other useful ways to match are regular expressions on strings:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSONPath",children:'$[?(@.Reason=~"^mismatch$")]\n'})}),"\n",(0,s.jsx)(t.h3,{id:"jsonpath-in-spr",children:"JSONPath in SPR"}),"\n",(0,s.jsxs)(t.p,{children:["The best part is we don't need a SQL schema to get started. JSONPath work for all of the events in SPR.\nIt may seem a bit intimidating at first, and we hide out some of the extra syntax ",(0,s.jsx)(t.code,{children:"$[?@(.)]"}),". However,\nthis provides a lot of flexibility and is relatively easy once you get the hang of it."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alerts-custom",src:n(59459).Z+"",width:"2826",height:"2014"})}),"\n",(0,s.jsx)(t.p,{children:"To simplify rule writing we allow multiple JSONPath queries and provide toggles\nfor inverting logic as well as Match One (OR) or Match Any (AND). Each JSONPath query can match on multiple fields too."}),"\n",(0,s.jsx)(t.p,{children:"The JSONPath query language is also available under the events search view for searching."}),"\n",(0,s.jsx)(t.h2,{id:"customizability--decorators",children:"Customizability & Decorators"}),"\n",(0,s.jsx)(t.p,{children:"Alerts can Notify in the UI or they can sit on the Alerts page for triaging. When defining an alert,\nusers can fill out the 'Title' and 'Body' for the alert to display. These support a templating language,\nfor populating text with fields from the Alert Event. Furthermore, we've added a few decorators with hashtags\nto convert identifiers to device icons or go from something like a MAC address to a device name or IP Address."}),"\n",(0,s.jsxs)(t.p,{children:["Templates expand event fields inside of curly brackets as elow:\n",(0,s.jsx)(t.code,{children:" MAC Mismatch IP Violation {{IP.SrcIP#Device}} {{IP.SrcIP}} {{Ethernet.SrcMAC}} to {{IP.DstIP}} {{Ethernet.DstMAC}}"})]}),"\n",(0,s.jsxs)(t.p,{children:["Check out the guide for more details about ",(0,s.jsx)(t.a,{href:"/pages/docs/guides/alerts",children:"how to configure alerts"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"need-a-feature",children:"Need a feature?"}),"\n",(0,s.jsx)(t.p,{children:"If you'd like to see more added or have a question, don't hesitate to file a github issue or reach out on our discord"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alerts-overview",src:n(54185).Z+"",width:"2806",height:"1638"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},59459:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/alert-custom-5193040408fcedefce9a3c9d82bea448.png"},54185:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/alerts-overview-56a12de61748d397aa699ebbd74bc063.png"},28253:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/jsonpath-com-6305b9073dcaaccfd840112a45dc3895.jpg"},50050:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/jsonpath-image-8ef8e05fe413ef9ceb88e276a1a282bd.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);