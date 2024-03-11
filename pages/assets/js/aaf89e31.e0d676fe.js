"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[4452],{36961:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var n=s(85893),t=s(11151);const d={sidebar_position:1},c="Manage Devices",a={id:"guides/device",title:"Manage Devices",description:"Add a Device",source:"@site/docs/guides/device.md",sourceDirName:"guides",slug:"/guides/device",permalink:"/pages/docs/guides/device",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pages/docs/guides/overview"},next:{title:"Firewall",permalink:"/pages/docs/guides/firewall"}},r={},o=[{value:"Add a Device",id:"add-a-device",level:2},{value:"Authentication",id:"authentication",level:4},{value:"Policies",id:"policies",level:4},{value:"Groups",id:"groups",level:4},{value:"Advanced Settings",id:"advanced-settings",level:3},{value:"Tags",id:"tags",level:5},{value:"Expiration",id:"expiration",level:5},{value:"Edit Device",id:"edit-device",level:2},{value:"Copy or Duplicate A Device Entry",id:"copy-or-duplicate-a-device-entry",level:2}];function l(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:d}=i;return d||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"manage-devices",children:"Manage Devices"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"#add-a-device",children:"Add a Device"}),"\nLearn how to add new devices to your network. Since there is no global wifi password, a new entry is made for each new device."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"#edit-device",children:"Edit Devices"}),"\nSet tags, edit styles & update device info"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"#copy-or-duplicate-a-device-entry",children:"Copy a device"}),"\nLets you share wireless password between devices"]}),"\n",(0,n.jsx)(i.h2,{id:"add-a-device",children:"Add a Device"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device-list",src:s(20052).Z+"",width:"1280",height:"800"})}),"\n",(0,n.jsxs)(i.p,{children:["Navigate to ",(0,n.jsx)(i.em,{children:"Devices"})," in the menu & click ",(0,n.jsx)(i.em,{children:"Add Device"}),"."]}),"\n",(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(i.p,{children:"\u26a0\ufe0f iCloud Keychain Sync and WiFi Passwords"})}),(0,n.jsx)(i.p,{children:"You need to set the same password on each of the iOS devices that are in the same keychain. Without this, they would sync the wrong password to each other and lock each other out of the network.\nYou can copy an existing iOS device instead of adding a new one, to keep the same password."})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device-add",src:s(85577).Z+"",width:"1280",height:"720"})}),"\n",(0,n.jsxs)(i.p,{children:["You are required to enter a ",(0,n.jsx)(i.em,{children:"Device Name"}),". Pick a name for your device & enter a password (or leave empty for random), click ",(0,n.jsx)(i.strong,{children:"Save"}),"."]}),"\n",(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(i.p,{children:"Authentication, Policies, and Groups"})}),(0,n.jsx)(i.h4,{id:"authentication",children:"Authentication"}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"WPA3"})," works for newer devices and is recommended.\nChoose ",(0,n.jsx)(i.em,{children:"WPA2"})," if ",(0,n.jsx)(i.em,{children:"WPA3"})," does not work or ",(0,n.jsx)(i.em,{children:"Wired"})," if you are connecting the device over ethernet."]}),(0,n.jsx)(i.h4,{id:"policies",children:"Policies"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"wan"})," internet access"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"dns"})," for domain lookups, block/filter dns"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"lan"})," access to all other local devices"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"lan_upstream"})," allows the device to query LAN addresses from ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc1918",children:"rfc1918"})," upstream of SPR"]}),"\n"]}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"wan"})," and ",(0,n.jsx)(i.strong,{children:"dns"})," is enabled by default. Add the device to ",(0,n.jsx)(i.strong,{children:"lan"})," sparingly, as this grants it access to all other devices. You can create groups and rules later for defining more specific access."]}),(0,n.jsx)(i.h4,{id:"groups",children:"Groups"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Devices assigned to a Group can intercommunicate over ICMP, UDP, and TCP"}),"\n",(0,n.jsx)(i.li,{children:"A firewall rule can be used if only a particular port should be reachable"}),"\n"]})]}),"\n",(0,n.jsx)(i.p,{children:"Connect to the Wifi with your device, either by scanning the QR code or with the password."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device-connect",src:s(39986).Z+"",width:"1280",height:"800"})}),"\n",(0,n.jsx)(i.p,{children:"A notification will popup when the device is connected & the device is available in the device view."}),"\n",(0,n.jsx)(i.h3,{id:"advanced-settings",children:"Advanced Settings"}),"\n",(0,n.jsxs)(i.p,{children:["Toggle ",(0,n.jsx)(i.em,{children:'"Advanced View"'})," in the menu if you want to add Device expiry & other features."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device-add-advanced",src:s(64479).Z+"",width:"1280",height:"800"})}),"\n",(0,n.jsx)(i.p,{children:"The advanced settings allow you to set MAC address, VLAN Tag ID and other settings for the device."}),"\n",(0,n.jsx)(i.h5,{id:"tags",children:"Tags"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"guest"})," if this is a guest device. This currently has no impact but may in the future"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Custom tags can also enable tag-specific block lists"}),"\n",(0,n.jsx)(i.h5,{id:"expiration",children:"Expiration"}),"\n",(0,n.jsx)(i.p,{children:"Set Expiration (example 1 day) if the device only needs temporary access, also if you want to automatically delete the device on expiry."}),"\n",(0,n.jsx)(i.h2,{id:"edit-device",children:"Edit Device"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device-edit",src:s(21691).Z+"",width:"1280",height:"800"})}),"\n",(0,n.jsx)(i.p,{children:"Set groups, tags, icon, color and other settings for your devices in the edit view."}),"\n",(0,n.jsx)(i.h2,{id:"copy-or-duplicate-a-device-entry",children:"Copy or Duplicate A Device Entry"}),"\n",(0,n.jsx)(i.p,{children:"Click the ellipse on the end of the device listing, and select duplicate, then rename the device.\nThis will copy the device to a new entry, and wait for a connection for a MAC address to be assigned."}),"\n",(0,n.jsx)(i.p,{children:"The new entry will have the same WiFi password. This is especially useful for devices using iCloud Keychain Sync, which assumes the same WiFi password for all devices."}),"\n",(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(i.p,{children:"\u26a0\ufe0f iCloud Keychain Sync and WiFi Passwords"})}),(0,n.jsx)(i.p,{children:"You need to set the same password on each of the iOS devices that are in the same keychain. Without this, they would sync the wrong password to each other and lock each other out of the network."})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device-copy",src:s(79302).Z+"",width:"2148",height:"844"})})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},64479:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/device-add-advanced-657ce914387e5868ed646c4c8edd91fd.png"},85577:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/device-add-6f5a9eae031d6c78b73d3ed317e3675e.png"},39986:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/device-connect-b49ea107649cdfbb2f9bc924ca0a198f.png"},79302:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/device-copy-2e6d768a16518d082672f97bc6f23a35.png"},21691:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/device-edit-4c06f135ad5be5bd6f67377e0c57f67e.png"},20052:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/device-list-add-a84ccbbb4f77ffebc636efb8b5daa82e.png"},11151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>c});var n=s(67294);const t={},d=n.createContext(t);function c(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);