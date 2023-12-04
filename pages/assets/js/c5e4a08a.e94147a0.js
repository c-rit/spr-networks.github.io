"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[8266],{91529:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var s=n(85893),l=n(11151);const r={sidebar_position:0},a="Overview",d={id:"guides/overview",title:"Overview",description:"Need a guide thats missing? File a ticket",source:"@site/docs/guides/overview.md",sourceDirName:"guides",slug:"/guides/overview",permalink:"/pages/docs/guides/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Virtual Setup Guide",permalink:"/pages/docs/setup_guides/virtual_spr"},next:{title:"Manage Devices",permalink:"/pages/docs/guides/device"}},c={},t=[{value:"Updating SPR",id:"updating-spr",level:2},{value:"Manage Devices",id:"manage-devices",level:2},{value:"Mange DNS Rules",id:"mange-dns-rules",level:2},{value:"Link Setup",id:"link-setup",level:2},{value:"Uplink Configuration",id:"uplink-configuration",level:4},{value:"Downlink Configuration (LAN)",id:"downlink-configuration-lan",level:4},{value:"Firewall",id:"firewall",level:2},{value:"Common rules",id:"common-rules",level:4},{value:"Advanced firewall configuration",id:"advanced-firewall-configuration",level:4},{value:"Logging and Events",id:"logging-and-events",level:2},{value:"WiFi Settings",id:"wifi-settings",level:2}];function o(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(i.p,{children:["Need a guide thats missing? ",(0,s.jsx)(i.a,{href:"https://github.com/spr-networks/super/issues",children:"File a ticket"})]}),"\n",(0,s.jsx)(i.h2,{id:"updating-spr",children:"Updating SPR"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"updating#how-to-update",children:"How to update"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"manage-devices",children:"Manage Devices"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"device#add-a-device",children:"Add a Device"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"device#edit-device",children:"Edit Devices"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"device#copy-or-duplicate-a-device-entry",children:"Copy a device"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"mange-dns-rules",children:"Mange DNS Rules"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"dns#block-lists",children:"DNS Block Lists"})," Block Ads, Tracking & More"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"dns#block-lists-tags",children:"DNS & Tags"})," Make block lists select devices by Tag"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"dns#dns-overrides",children:"DNS Overrides"})," Make custom DNS Rules"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"dns#settings",children:"DNS Settings"})," Set DNS Privacy settings, DNS Provider"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"dns#logs",children:"DNS Logs"})," Inspect DNS Queries"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"link-setup",children:"Link Setup"}),"\n",(0,s.jsx)(i.h4,{id:"uplink-configuration",children:"Uplink Configuration"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"links#set-uplink-interface-ip",children:"Set DHCP settings or assign a Static IP"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"links#lenable-a-wifi-uplink",children:"Enable a Wireless Uplink"})}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"downlink-configuration-lan",children:"Downlink Configuration (LAN)"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"links#enable-wired-lan-interface",children:"Enable Wired LAN Interface"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"links#enable-vlan-trunk-port",children:"Enable VLAN Trunk Port"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"firewall",children:"Firewall"}),"\n",(0,s.jsx)(i.h4,{id:"common-rules",children:"Common rules"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"firewall#port-forwarding",children:"Port Forwarding"})," is if you want to open a port ",(0,s.jsx)(i.em,{children:"from WAN"})," and forward the traffic to a local device"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"firewall#inbound-traffic-block",children:"Inbound Traffic Block"})," block access from a specific address and/or destination"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"firewall#forwarding-traffic-block",children:"Forwarding Traffic Block"})," allow/block devices from your local network"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"advanced-firewall-configuration",children:"Advanced firewall configuration"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"firewall#custom-interface-access",children:"Custom Interface Access"})," - Join a docker bridge or custom interface to SPR networking"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"firewall#multicast-proxy",children:"Multicast Proxy"})," -- Configure mDNS, SSDP, and other UDP broadcast services"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"firewall#endpoints",children:"Endpoints"})," - Define one-way connectivity rules"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"logging-and-events",children:"Logging and Events"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"logs",children:"Logs view"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"logs#events",children:"Events view"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"logs#enable-notifications",children:"Enable notifications"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"logs#using-the-cli-tools",children:"Using the cli tools"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"wifi-settings",children:"WiFi Settings"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"wifi#wifi-spr-compability",children:"wifi-spr-compability"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"wifi#ssid",children:"Updating SSID Name"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"wifi#channel-configuration",children:"Channel configuration"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>a});var s=n(67294);const l={},r=s.createContext(l);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);