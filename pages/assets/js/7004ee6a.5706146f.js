"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[2811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),d=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,f=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return a?s.createElement(f,r(r({ref:t},p),{},{components:a})):s.createElement(f,r({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(7462),n=(a(7294),a(3905));const i={slug:"multipsk and wpa3",title:"SPR Supports WPA3 with Multiple Passwords",authors:"ltsrad",tags:["SPR","wifi6","WPA3","PPSK"]},r=void 0,o={permalink:"/pages/blog/multipsk and wpa3",source:"@site/blog/2022-05-02-wpa3-multipsk.md",title:"SPR Supports WPA3 with Multiple Passwords",description:"SPR's WPA3 Multiple Passwords per SSID Surprises People",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"wifi6",permalink:"/pages/blog/tags/wifi-6"},{label:"WPA3",permalink:"/pages/blog/tags/wpa-3"},{label:"PPSK",permalink:"/pages/blog/tags/ppsk"}],readingTime:1.885,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"multipsk and wpa3",title:"SPR Supports WPA3 with Multiple Passwords",authors:"ltsrad",tags:["SPR","wifi6","WPA3","PPSK"]},prevItem:{title:"Securely Chaining Routers",permalink:"/pages/blog/secure router chaining"},nextItem:{title:"Gigabit WiFi with SPR & The 4x4 MT7915",permalink:"/pages/blog/wifi6"}},l={authorsImageUrls:[void 0]},d=[{value:"SPR&#39;s WPA3 Multiple Passwords per SSID Surprises People",id:"sprs-wpa3-multiple-passwords-per-ssid-surprises-people",level:3},{value:"WPA3 Authentication is Fundamentally Different",id:"wpa3-authentication-is-fundamentally-different",level:3},{value:"SPR Uses HostAP&#39;s MAC Assignment",id:"spr-uses-hostaps-mac-assignment",level:3},{value:"Adding Device is Seamless",id:"adding-device-is-seamless",level:3},{value:"Devices Workflow",id:"devices-workflow",level:3},{value:"First, go to the add device modal and add a device name and hit next",id:"first-go-to-the-add-device-modal-and-add-a-device-name-and-hit-next",level:4},{value:"Next, scan the QR code  or type the passphrase on a new device",id:"next-scan-the-qr-code--or-type-the-passphrase-on-a-new-device",level:4},{value:"Upon connection the UI will notify success and the PSK will be assigned to the MAC",id:"upon-connection-the-ui-will-notify-success-and-the-psk-will-be-assigned-to-the-mac",level:4}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"sprs-wpa3-multiple-passwords-per-ssid-surprises-people"},"SPR's WPA3 Multiple Passwords per SSID Surprises People"),(0,n.kt)("p",null," WiFi nerds and people working on WiFi products have shared their surprise with me a few times now about the integration for multi-PSK with WPA3. This is something already mostly built into HostAP so it should be possible anywhere, although it is not obvious from the documentation. I'm told that most other projects simply don't do it, putting SPR at the head of the pack! In this post I'll share how it's integrated, so that others can benefit from the ideas and improve WiFi security for people all around the world."),(0,n.kt)("h3",{id:"wpa3-authentication-is-fundamentally-different"},"WPA3 Authentication is Fundamentally Different"),(0,n.kt)("p",null,"WPA3 authentication uses ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7664"},"Dragonfly"),", a Zero-Knowledge Proof in its Simulataneous Authentication of Equals Handshake protocol. With SAE there is nothing to sniff and crack offline from the key exchange. This is in contrast to WPA/WPA2 which is notorious for password cracking of weak passwords from captured handshakes -- or even more conteniently, by using the ",(0,n.kt)("a",{parentName:"p",href:"https://hashcat.net/forum/thread-7717.html"},"RSN IE specification flaw"),"."),(0,n.kt)("p",null,"For Multi-PSK, a router can go down the list of stored PSKs and try each key and see if it had a matching one.\nFor WPA3, this is not possible. Authenticating a password requires an interactive zero knowledge proof, so a new handshake is required to try a different password."),(0,n.kt)("h3",{id:"spr-uses-hostaps-mac-assignment"},"SPR Uses HostAP's MAC Assignment"),(0,n.kt)("p",null,"PSKs are assigned by MAC address. HostAP finds the passphrase to use by MAC address to perform the authentication, using the correct PSK the first time around for the interactive proof."),(0,n.kt)("p",null,"The syntax for hostapd.conf to assign multiple devices is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sae_password=1stPassphraseHere|mac=01:23:45:67:89:aa\nsae_password=2ndPassphraseHere|mac=01:23:45:67:89:ab\n")),(0,n.kt)("h3",{id:"adding-device-is-seamless"},"Adding Device is Seamless"),(0,n.kt)("p",null,"Adding devices is an easy process. If a user does know a MAC address, they can certainly\nspecify the MAC address ahead of time. However, SPR can use a wildcard MAC to match a new\nincoming device. When the device authenticates, that PSK will be assigned to the device."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sae_password=3rdPassphraseHere|mac=ff:ff:ff:ff:ff:ff\n")),(0,n.kt)("h3",{id:"devices-workflow"},"Devices Workflow"),(0,n.kt)("h4",{id:"first-go-to-the-add-device-modal-and-add-a-device-name-and-hit-next"},"First, go to the add device modal and add a device name and hit next"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7242).Z,width:"980",height:"642"})),(0,n.kt)("h4",{id:"next-scan-the-qr-code--or-type-the-passphrase-on-a-new-device"},"Next, scan the QR code  or type the passphrase on a new device"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(711).Z,width:"968",height:"809"})),(0,n.kt)("h4",{id:"upon-connection-the-ui-will-notify-success-and-the-psk-will-be-assigned-to-the-mac"},"Upon connection the UI will notify success and the PSK will be assigned to the MAC"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2697).Z,width:"974",height:"846"})))}c.isMDXComponent=!0},7242:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/add_device_1-01b0f5f44775c92f40090e85db695506.png"},711:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/add_device_2-ec89e7ff6f26c0d21d79dc9d059c18d9.png"},2697:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/add_device_3-48bef3bc65a140fc598aa1497ed71e56.png"}}]);