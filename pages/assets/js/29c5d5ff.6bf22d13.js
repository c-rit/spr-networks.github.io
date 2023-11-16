"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[3558],{7061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(5893),s=n(1151);const i={slug:"barely-ap",title:"Barely AP is Almost an Access Point",authors:"ltsrad",tags:["Python","Scapy","WiFi"]},o=void 0,r={permalink:"/pages/blog/barely-ap",source:"@site/blog/2023-05-11-barely-ap.md",title:"Barely AP is Almost an Access Point",description:"Introducing Barely AP",date:"2023-05-11T00:00:00.000Z",formattedDate:"May 11, 2023",tags:[{label:"Python",permalink:"/pages/blog/tags/python"},{label:"Scapy",permalink:"/pages/blog/tags/scapy"},{label:"WiFi",permalink:"/pages/blog/tags/wi-fi"}],readingTime:.675,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"barely-ap",title:"Barely AP is Almost an Access Point",authors:"ltsrad",tags:["Python","Scapy","WiFi"]},unlisted:!1,prevItem:{title:"SPR Now Available on the iOS App Store",permalink:"/pages/blog/ios-app-released"},nextItem:{title:"March 2023's Turtles Challenge",permalink:"/pages/blog/spr-turtles-march"}},l={authorsImageUrls:[void 0]},c=[{value:"Introducing Barely AP",id:"introducing-barely-ap",level:2},{value:"What",id:"what",level:3},{value:"Note",id:"note",level:3},{value:"Usage:",id:"usage",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introducing-barely-ap",children:"Introducing Barely AP"}),"\n",(0,a.jsxs)(t.p,{children:["We've ",(0,a.jsx)(t.a,{href:"https://github.com/spr-networks/barely-ap",children:"published barely an implementation of a WiFi 802.11 Access Point, using Scapy"})," to teach people about WiFi authentication."]}),"\n",(0,a.jsx)(t.h3,{id:"what",children:"What"}),"\n",(0,a.jsx)(t.p,{children:"On Linux, this code lets you spin up a python access point over monitor mode.  It implements features like handling probe requests, authentication, association, and reassociation, and encryption and decryption of data using CCMP (Counter Mode Cipher Block Chaining Message Authentication Code Protocol)."}),"\n",(0,a.jsx)(t.h3,{id:"note",children:"Note"}),"\n",(0,a.jsx)(t.p,{children:"This code just barely gets the job done -- it should NOT be used as a reference for writing production code. It has NO protocol security, as it is not security robust despite performing authenticated CCMP encryption."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage:"}),"\n",(0,a.jsx)(t.p,{children:"Building & running"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./build.sh\n./setup.sh\n"})}),"\n",(0,a.jsx)(t.p,{children:"Inspect IP traffic"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"\ndocker exec -it barely-ap tcpdump -i scapyap\ndocker exec -it barely-sta tcpdump -i wlan1\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(7294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);