"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const s={slug:"secure router chaining",title:"Securely Chaining Routers",authors:"ltsrad",tags:["SPR","Routers","Networking 101"]},o=void 0,a={permalink:"/pages/blog/secure router chaining",source:"@site/blog/2022-09-03-secure-router-chaining.md",title:"Securely Chaining Routers",description:"Building a Home WiFi Network",date:"2022-09-03T00:00:00.000Z",formattedDate:"September 3, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Routers",permalink:"/pages/blog/tags/routers"},{label:"Networking 101",permalink:"/pages/blog/tags/networking-101"}],readingTime:3.715,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"secure router chaining",title:"Securely Chaining Routers",authors:"ltsrad",tags:["SPR","Routers","Networking 101"]},prevItem:{title:"SPR in the cloud",permalink:"/pages/blog/virtual SPR"},nextItem:{title:"SPR Supports WPA3 with Multiple Passwords",permalink:"/pages/blog/multipsk and wpa3"}},l={authorsImageUrls:[void 0]},u=[{value:"Building a Home WiFi Network",id:"building-a-home-wifi-network",level:2},{value:"What&#39;s the Best Way to Chain Your Routers?",id:"whats-the-best-way-to-chain-your-routers",level:2},{value:"The Worst Choice",id:"the-worst-choice",level:4},{value:"Split ESSIDs",id:"split-essids",level:4},{value:"The Best of the Three: Guest Router First, Secure Router Second",id:"the-best-of-the-three-guest-router-first-secure-router-second",level:4},{value:"Multi PSK &amp; VLANs",id:"multi-psk--vlans",level:3},{value:"SPR Supports Plugging into An Existing Router Securely",id:"spr-supports-plugging-into-an-existing-router-securely",level:3}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"building-a-home-wifi-network"},"Building a Home WiFi Network"),(0,i.kt)("p",null,"Putting together a home network has several subtly annoying security tradeoffs."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Users want")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ease of Use & Connectivity")),(0,i.kt)("p",{parentName:"li"},"Maximized by keeping devices maximally connected with a simple passphrase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy and Security")),(0,i.kt)("p",{parentName:"li"},"Maximized by keeping devices minimally connected. And ideally offline  \ud83e\udda6"))),(0,i.kt)("p",null,"If the goal is a bit of both, how to do segmentation correctly quickly becomes\na bit of a puzzle"),(0,i.kt)("h2",{id:"whats-the-best-way-to-chain-your-routers"},"What's the Best Way to Chain Your Routers?"),(0,i.kt)("p",null,'The "Secure Router" can be considered the Work From Home access point,\nand the "Guest Router" can be considered the Guest, Personal, or IOT access point.'),(0,i.kt)("p",null," ",(0,i.kt)("img",{src:r(8761).Z,width:"1812",height:"940"})),(0,i.kt)("h4",{id:"the-worst-choice"},"The Worst Choice"),(0,i.kt)("p",null,"Option #3 is to connect the internet to the secure router, and then plug the\nguest router into the secure router. Guests and untrustworthy devices can connect\nto the guest router."),(0,i.kt)("p",null,"This might make sense intuitively for some. You put the Secure Router close\nto the internet since that's where all the internet traffic will go out from, and\nif the Guest Router is compromised, it can't intercept traffic."),(0,i.kt)("p",null,'However, since the Guest Router is a Peer on the Secure Router network\'s LAN,\nevery "Guest" station and the router will be able to reach the secure router and\ndevices on the secure network LAN.'),(0,i.kt)("p",null,"Unless either the Guest Router can block requests to the Secure LAN with its firewall,\nor the Secure Router can isolate the port for the Guest Router for only internet access,\nthis is not an accepted best practice."),(0,i.kt)("h4",{id:"split-essids"},"Split ESSIDs"),(0,i.kt)("p",null,"Option #2 is to share a router for both SSIDs, with one ESSID and password for the\nSecure LAN and one for the Guest LAN."),(0,i.kt)("p",null,"The expectation is that devices can not send packets across the two LANs."),(0,i.kt)("p",null,"The great tradeoff with this is that if a user wants to control their IOT devices\nthey have to switch to the guest network. And if device isolation is enabled on the guest network,\ndevices won't be able to communicate at all. So as security improves, usability decreases."),(0,i.kt)("p",null,"The guest isolation may also be insufficient. The shared passphrase implies MITM capabilities,\nand passive traffic decryption capabilities with WPA2 or active decryption capabilities with WPA3."),(0,i.kt)("p",null,"Some routers place both ESSIDs on the SAME LAN. Usually this allows the secure devices\nto reach the guest devices. Usability has been increased, but this often leads to subtle flaws\nthat allow the guest devices to bypass their isolation entirely."),(0,i.kt)("p",null,"Another upside to this approach is that bandwidth can be shared for the ESSIDs,\nreducing wasted WiFi spectrum."),(0,i.kt)("p",null,"Overall, this is an accepted best practice, but it comes down to the details where very quickly\nusers are trading off security for usability."),(0,i.kt)("h4",{id:"the-best-of-the-three-guest-router-first-secure-router-second"},"The Best of the Three: Guest Router First, Secure Router Second"),(0,i.kt)("p",null,"Option #1 is the recommended and accepted best practice. The guest network connects\ndirectly to the internet, and the secure router plugs into the guest Router."),(0,i.kt)("p",null,"This approach yields a favorable combination of security and usability. Devices on the\nsecure LAN can access devices on the Guest LAN, which is great for controlling IOT devices.\nAnd devices on the Guest LAN have no way to initiate communication to devices on the\nSecure LAN, blocked by the Guest Router firewall."),(0,i.kt)("p",null,"The main downsides: The guest router could have ISP credentials, and could MITM\ninternet traffic if compromised by an untrusted device"),(0,i.kt)("h3",{id:"multi-psk--vlans"},"Multi PSK & VLANs"),(0,i.kt)("p",null,"Today's most featureful home routers offer support for one passphrase per device. This solves\nmany of the MITM and decryption issues for guest isolation. The devices can be placed into VLANs with unique WiFi passphrases, GTKs, and secure firewall rules creating truly strong isolation. These mechanisms provide powerful mechanisms for designing a home network securely."),(0,i.kt)("p",null,"This is the approach SPR follows, and we've ",(0,i.kt)("a",{parentName:"p",href:"/blog/multipsk%20and%20wpa3"},"spearheaded Multi-PSK with WPA3"),".\nSPR provides maximum isolation capabilities by placing each station into its own LAN. Users can then easily\ncreate groups of interconnected devices."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7759).Z,width:"1594",height:"932"})),(0,i.kt)("h3",{id:"spr-supports-plugging-into-an-existing-router-securely"},"SPR Supports Plugging into An Existing Router Securely"),(0,i.kt)("p",null,"We recommend running SPR by plugging it into an existing router. To support securely doing this,\nby default -- the firewall will block access to private network addresses over the upstream interface."),(0,i.kt)("p",null,"This prevents devices connected to SPR from accessing devices on the LAN of the current router."),(0,i.kt)("p",null,"To allow a device access to private network addresses upstream, users can apply the ",(0,i.kt)("inlineCode",{parentName:"p"},"lan_upstream")," tag to the device."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2637).Z,width:"1602",height:"960"})),(0,i.kt)("p",null,"And then manage the tag in the Devices view"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4824).Z,width:"2176",height:"1066"})))}p.isMDXComponent=!0},2637:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_wifi_device_lan_upstream-145072582030d7952626322f2bd1575b.png"},8761:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/chaining_choices-f543aa893de8eefeda219c3d1e6619fe.png"},4824:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/manage_lan_upstream_tag-88b8dd183fce79f2313324b0725db7a8.png"},7759:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tinynets-1cc6f9d81a93c8b078f78fc0f5ad2f21.png"}}]);