"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[1251],{5519:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var i=t(5893),a=t(1151);const n={slug:"multipsk and wpa3",title:"SPR Supports WPA3 with Multiple Passwords",authors:"ltsrad",tags:["SPR","wifi6","WPA3","PPSK"]},o=void 0,r={permalink:"/pages/blog/multipsk and wpa3",source:"@site/blog/2022-05-02-wpa3-multipsk.md",title:"SPR Supports WPA3 with Multiple Passwords",description:"SPR's WPA3 Multiple Passwords per SSID Surprises People",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"wifi6",permalink:"/pages/blog/tags/wifi-6"},{label:"WPA3",permalink:"/pages/blog/tags/wpa-3"},{label:"PPSK",permalink:"/pages/blog/tags/ppsk"}],readingTime:1.885,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"multipsk and wpa3",title:"SPR Supports WPA3 with Multiple Passwords",authors:"ltsrad",tags:["SPR","wifi6","WPA3","PPSK"]},unlisted:!1,prevItem:{title:"Securely Chaining Routers",permalink:"/pages/blog/secure router chaining"},nextItem:{title:"Gigabit WiFi with SPR & The 4x4 MT7915",permalink:"/pages/blog/wifi6"}},d={authorsImageUrls:[void 0]},l=[{value:"SPR&#39;s WPA3 Multiple Passwords per SSID Surprises People",id:"sprs-wpa3-multiple-passwords-per-ssid-surprises-people",level:3},{value:"WPA3 Authentication is Fundamentally Different",id:"wpa3-authentication-is-fundamentally-different",level:3},{value:"SPR Uses HostAP&#39;s MAC Assignment",id:"spr-uses-hostaps-mac-assignment",level:3},{value:"Adding Device is Seamless",id:"adding-device-is-seamless",level:3},{value:"Devices Workflow",id:"devices-workflow",level:3},{value:"First, go to the add device modal and add a device name and hit next",id:"first-go-to-the-add-device-modal-and-add-a-device-name-and-hit-next",level:4},{value:"Next, scan the QR code  or type the passphrase on a new device",id:"next-scan-the-qr-code--or-type-the-passphrase-on-a-new-device",level:4},{value:"Upon connection the UI will notify success and the PSK will be assigned to the MAC",id:"upon-connection-the-ui-will-notify-success-and-the-psk-will-be-assigned-to-the-mac",level:4}];function c(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h3,{id:"sprs-wpa3-multiple-passwords-per-ssid-surprises-people",children:"SPR's WPA3 Multiple Passwords per SSID Surprises People"}),"\n",(0,i.jsx)(s.p,{children:"WiFi nerds and people working on WiFi products have shared their surprise with me a few times now about the integration for multi-PSK with WPA3. This is something already mostly built into HostAP so it should be possible anywhere, although it is not obvious from the documentation. I'm told that most other projects simply don't do it, putting SPR at the head of the pack! In this post I'll share how it's integrated, so that others can benefit from the ideas and improve WiFi security for people all around the world."}),"\n",(0,i.jsx)(s.h3,{id:"wpa3-authentication-is-fundamentally-different",children:"WPA3 Authentication is Fundamentally Different"}),"\n",(0,i.jsxs)(s.p,{children:["WPA3 authentication uses ",(0,i.jsx)(s.a,{href:"https://datatracker.ietf.org/doc/html/rfc7664",children:"Dragonfly"}),", a Zero-Knowledge Proof in its Simulataneous Authentication of Equals Handshake protocol. With SAE there is nothing to sniff and crack offline from the key exchange. This is in contrast to WPA/WPA2 which is notorious for password cracking of weak passwords from captured handshakes -- or even more conteniently, by using the ",(0,i.jsx)(s.a,{href:"https://hashcat.net/forum/thread-7717.html",children:"RSN IE specification flaw"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"For Multi-PSK, a router can go down the list of stored PSKs and try each key and see if it had a matching one.\nFor WPA3, this is not possible. Authenticating a password requires an interactive zero knowledge proof, so a new handshake is required to try a different password."}),"\n",(0,i.jsx)(s.h3,{id:"spr-uses-hostaps-mac-assignment",children:"SPR Uses HostAP's MAC Assignment"}),"\n",(0,i.jsx)(s.p,{children:"PSKs are assigned by MAC address. HostAP finds the passphrase to use by MAC address to perform the authentication, using the correct PSK the first time around for the interactive proof."}),"\n",(0,i.jsx)(s.p,{children:"The syntax for hostapd.conf to assign multiple devices is as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sae_password=1stPassphraseHere|mac=01:23:45:67:89:aa\nsae_password=2ndPassphraseHere|mac=01:23:45:67:89:ab\n"})}),"\n",(0,i.jsx)(s.h3,{id:"adding-device-is-seamless",children:"Adding Device is Seamless"}),"\n",(0,i.jsx)(s.p,{children:"Adding devices is an easy process. If a user does know a MAC address, they can certainly\nspecify the MAC address ahead of time. However, SPR can use a wildcard MAC to match a new\nincoming device. When the device authenticates, that PSK will be assigned to the device."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sae_password=3rdPassphraseHere|mac=ff:ff:ff:ff:ff:ff\n"})}),"\n",(0,i.jsx)(s.h3,{id:"devices-workflow",children:"Devices Workflow"}),"\n",(0,i.jsx)(s.h4,{id:"first-go-to-the-add-device-modal-and-add-a-device-name-and-hit-next",children:"First, go to the add device modal and add a device name and hit next"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(6795).Z+"",width:"980",height:"642"})}),"\n",(0,i.jsx)(s.h4,{id:"next-scan-the-qr-code--or-type-the-passphrase-on-a-new-device",children:"Next, scan the QR code  or type the passphrase on a new device"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(184).Z+"",width:"968",height:"809"})}),"\n",(0,i.jsx)(s.h4,{id:"upon-connection-the-ui-will-notify-success-and-the-psk-will-be-assigned-to-the-mac",children:"Upon connection the UI will notify success and the PSK will be assigned to the MAC"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(1224).Z+"",width:"974",height:"846"})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6795:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/add_device_1-01b0f5f44775c92f40090e85db695506.png"},184:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/add_device_2-ec89e7ff6f26c0d21d79dc9d059c18d9.png"},1224:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/add_device_3-48bef3bc65a140fc598aa1497ed71e56.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var i=t(7294);const a={},n=i.createContext(a);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);