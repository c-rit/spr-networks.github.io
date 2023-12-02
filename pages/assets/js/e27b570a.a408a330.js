"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6972],{20558:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=s(85893),i=s(11151);const r={slug:"secure router chaining",title:"Securely Chaining Routers",authors:"ltsrad",tags:["SPR","Routers","Networking 101"]},o=void 0,a={permalink:"/pages/blog/secure router chaining",source:"@site/blog/2022-09-03-secure-router-chaining.md",title:"Securely Chaining Routers",description:"Building a Home WiFi Network",date:"2022-09-03T00:00:00.000Z",formattedDate:"September 3, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Routers",permalink:"/pages/blog/tags/routers"},{label:"Networking 101",permalink:"/pages/blog/tags/networking-101"}],readingTime:3.715,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"secure router chaining",title:"Securely Chaining Routers",authors:"ltsrad",tags:["SPR","Routers","Networking 101"]},unlisted:!1,prevItem:{title:"SPR in the cloud",permalink:"/pages/blog/virtual SPR"},nextItem:{title:"SPR Supports WPA3 with Multiple Passwords",permalink:"/pages/blog/multipsk and wpa3"}},c={authorsImageUrls:[void 0]},h=[{value:"Building a Home WiFi Network",id:"building-a-home-wifi-network",level:2},{value:"What&#39;s the Best Way to Chain Your Routers?",id:"whats-the-best-way-to-chain-your-routers",level:2},{value:"The Worst Choice",id:"the-worst-choice",level:4},{value:"Split ESSIDs",id:"split-essids",level:4},{value:"The Best of the Three: Guest Router First, Secure Router Second",id:"the-best-of-the-three-guest-router-first-secure-router-second",level:4},{value:"Multi PSK &amp; VLANs",id:"multi-psk--vlans",level:3},{value:"SPR Supports Plugging into An Existing Router Securely",id:"spr-supports-plugging-into-an-existing-router-securely",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"building-a-home-wifi-network",children:"Building a Home WiFi Network"}),"\n",(0,n.jsx)(t.p,{children:"Putting together a home network has several subtly annoying security tradeoffs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Users want"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Ease of Use & Connectivity"})}),"\n",(0,n.jsx)(t.p,{children:"Maximized by keeping devices maximally connected with a simple passphrase"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Privacy and Security"})}),"\n",(0,n.jsx)(t.p,{children:"Maximized by keeping devices minimally connected. And ideally offline  \ud83e\udda6"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If the goal is a bit of both, how to do segmentation correctly quickly becomes\na bit of a puzzle"}),"\n",(0,n.jsx)(t.h2,{id:"whats-the-best-way-to-chain-your-routers",children:"What's the Best Way to Chain Your Routers?"}),"\n",(0,n.jsx)(t.p,{children:'The "Secure Router" can be considered the Work From Home access point,\nand the "Guest Router" can be considered the Guest, Personal, or IOT access point.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(37927).Z+"",width:"1812",height:"940"})}),"\n",(0,n.jsx)(t.h4,{id:"the-worst-choice",children:"The Worst Choice"}),"\n",(0,n.jsx)(t.p,{children:"Option #3 is to connect the internet to the secure router, and then plug the\nguest router into the secure router. Guests and untrustworthy devices can connect\nto the guest router."}),"\n",(0,n.jsx)(t.p,{children:"This might make sense intuitively for some. You put the Secure Router close\nto the internet since that's where all the internet traffic will go out from, and\nif the Guest Router is compromised, it can't intercept traffic."}),"\n",(0,n.jsx)(t.p,{children:'However, since the Guest Router is a Peer on the Secure Router network\'s LAN,\nevery "Guest" station and the router will be able to reach the secure router and\ndevices on the secure network LAN.'}),"\n",(0,n.jsx)(t.p,{children:"Unless either the Guest Router can block requests to the Secure LAN with its firewall,\nor the Secure Router can isolate the port for the Guest Router for only internet access,\nthis is not an accepted best practice."}),"\n",(0,n.jsx)(t.h4,{id:"split-essids",children:"Split ESSIDs"}),"\n",(0,n.jsx)(t.p,{children:"Option #1 is to share a router for both SSIDs, with one ESSID and password for the\nSecure LAN and one for the Guest LAN."}),"\n",(0,n.jsx)(t.p,{children:"The expectation is that devices can not send packets across the two LANs."}),"\n",(0,n.jsx)(t.p,{children:"The great tradeoff with this is that if a user wants to control their IOT devices\nthey have to switch to the guest network. And if device isolation is enabled on the guest network,\ndevices won't be able to communicate at all. So as security improves, usability decreases."}),"\n",(0,n.jsx)(t.p,{children:"The guest isolation may also be insufficient. The shared passphrase implies MITM capabilities,\nand passive traffic decryption capabilities with WPA2 or active decryption capabilities with WPA3."}),"\n",(0,n.jsx)(t.p,{children:"Some routers place both ESSIDs on the SAME LAN. Usually this allows the secure devices\nto reach the guest devices. Usability has been increased, but this often leads to subtle flaws\nthat allow the guest devices to bypass their isolation entirely."}),"\n",(0,n.jsx)(t.p,{children:"Another upside to this approach is that bandwidth can be shared for the ESSIDs,\nreducing wasted WiFi spectrum."}),"\n",(0,n.jsx)(t.p,{children:"Overall, this is an accepted best practice, but it comes down to the details where very quickly\nusers are trading off security for usability."}),"\n",(0,n.jsx)(t.h4,{id:"the-best-of-the-three-guest-router-first-secure-router-second",children:"The Best of the Three: Guest Router First, Secure Router Second"}),"\n",(0,n.jsx)(t.p,{children:"Option #2 is the recommended and accepted best practice. The Guest router connects\ndirectly to the internet, and the Secure router plugs into the Guest Router."}),"\n",(0,n.jsx)(t.p,{children:"This approach yields a favorable combination of security and usability. Devices on the\nsecure LAN can access devices on the Guest LAN, which is great for controlling IOT devices.\nAnd devices on the Guest LAN have no way to initiate communication to devices on the\nSecure LAN, blocked by the Secure Router firewall."}),"\n",(0,n.jsx)(t.p,{children:"The main downsides: The guest router could have ISP credentials, and could MITM\ninternet traffic if compromised by an untrusted device."}),"\n",(0,n.jsx)(t.h3,{id:"multi-psk--vlans",children:"Multi PSK & VLANs"}),"\n",(0,n.jsx)(t.p,{children:"Today's most featureful home routers offer support for one passphrase per device. This solves\nmany of the MITM and decryption issues for guest isolation. The devices can be placed into VLANs with unique WiFi passphrases, GTKs, and secure firewall rules creating truly strong isolation. These mechanisms provide powerful mechanisms for designing a home network securely."}),"\n",(0,n.jsxs)(t.p,{children:["This is the approach SPR follows, and we've ",(0,n.jsx)(t.a,{href:"/blog/multipsk%20and%20wpa3",children:"spearheaded Multi-PSK with WPA3"}),".\nSPR provides maximum isolation capabilities by placing each station into its own LAN. Users can then easily\ncreate groups of interconnected devices."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(14199).Z+"",width:"1594",height:"932"})}),"\n",(0,n.jsx)(t.h3,{id:"spr-supports-plugging-into-an-existing-router-securely",children:"SPR Supports Plugging into An Existing Router Securely"}),"\n",(0,n.jsx)(t.p,{children:"We recommend running SPR by plugging it into an existing router. To support securely doing this,\nby default -- the firewall will block access to private network addresses over the upstream interface."}),"\n",(0,n.jsx)(t.p,{children:"This prevents devices connected to SPR from accessing devices on the LAN of the current router."}),"\n",(0,n.jsxs)(t.p,{children:["To allow a device access to private network addresses upstream, users can apply the ",(0,n.jsx)(t.code,{children:"lan_upstream"})," tag to the device."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(61006).Z+"",width:"1602",height:"960"})}),"\n",(0,n.jsx)(t.p,{children:"And then manage the tag in the Devices view"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(58865).Z+"",width:"2176",height:"1066"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},61006:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/add_wifi_device_lan_upstream-145072582030d7952626322f2bd1575b.png"},37927:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/chaining_choices-f543aa893de8eefeda219c3d1e6619fe.png"},58865:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/manage_lan_upstream_tag-88b8dd183fce79f2313324b0725db7a8.png"},14199:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/tinynets-1cc6f9d81a93c8b078f78fc0f5ad2f21.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);