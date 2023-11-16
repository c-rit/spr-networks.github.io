"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[9671],{7876:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(5893),t=n(1151);const s={sidebar_position:0,sidebar_label:"Welcome to SPR!"},o="SPR : A Secure Programmable Router",a={id:"intro",title:"SPR : A Secure Programmable Router",description:"SPR lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pages/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Welcome to SPR!"},sidebar:"tutorialSidebar",next:{title:"API Overview",permalink:"/pages/docs/apis/overview"}},c={},l=[{value:"The Network Design",id:"the-network-design",level:2},{value:"Default deny",id:"default-deny",level:4},{value:"Zero-trust networking",id:"zero-trust-networking",level:4},{value:"Device isolation",id:"device-isolation",level:4},{value:"Multicast Support",id:"multicast-support",level:4},{value:"Design Ethos",id:"design-ethos",level:2},{value:"Transparent and Modifiable",id:"transparent-and-modifiable",level:4},{value:"Containerized",id:"containerized",level:4},{value:"Sound Software Selection",id:"sound-software-selection",level:4},{value:"The Service Listing",id:"the-service-listing",level:2},{value:"API Extensions",id:"api-extensions",level:2}];function d(e){const r={a:"a",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"spr--a-secure-programmable-router",children:"SPR : A Secure Programmable Router"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"SPR"})," lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security."]}),"\n",(0,i.jsx)(r.h2,{id:"the-network-design",children:"The Network Design"}),"\n",(0,i.jsx)(r.h4,{id:"default-deny",children:"Default deny"}),"\n",(0,i.jsx)(r.p,{children:"Devices are explicitly marked for communicating to the internet, accessing DNS, or intranet communications either by a general LAN group or custom groups."}),"\n",(0,i.jsx)(r.h4,{id:"zero-trust-networking",children:"Zero-trust networking"}),"\n",(0,i.jsx)(r.p,{children:"Per-device WiFi passphrases create a source of identity for devices. This enables a high degree of confidence about where packets come from and where they can go. This happens without installing agents, custom software, or certificates on devices making a router runing SPR compatible with all WiFi devices."}),"\n",(0,i.jsx)(r.h4,{id:"device-isolation",children:"Device isolation"}),"\n",(0,i.jsx)(r.p,{children:"Each device on the network is sequestered into a tiny subnet, and all devices must communicate through the router to communicate with one another."}),"\n",(0,i.jsx)(r.p,{children:"Groups are used to inform nftable verdict maps about a device's network access, by MAC address, virtual interface, and IP address. By trading off negligible latency and additional packet processing for better control, the router arbitrates communication between intranet devices. The verdict maps, similar to ipsets, provide scalable groups without an exponential number of firewall rules."}),"\n",(0,i.jsx)(r.h4,{id:"multicast-support",children:"Multicast Support"}),"\n",(0,i.jsx)(r.p,{children:"Zeroconf and mDNS are both prevalent and a requisite for home networking. However, these require being on the same subnet to work or a router that supports IGMP forwarding or a proxy. SPR has a userland proxy to transparently relay multicast traffic between devices and across network interfaces."}),"\n",(0,i.jsx)(r.h2,{id:"design-ethos",children:"Design Ethos"}),"\n",(0,i.jsx)(r.h4,{id:"transparent-and-modifiable",children:"Transparent and Modifiable"}),"\n",(0,i.jsxs)(r.p,{children:["SPR is built as an ",(0,i.jsx)(r.a,{href:"https://github.com/spr-networks/super",children:"open source"})," project."]}),"\n",(0,i.jsx)(r.h4,{id:"containerized",children:"Containerized"}),"\n",(0,i.jsx)(r.p,{children:"Containers make it simple to build the code from scratch or run prebuilt images.\nThe containers split network services up by functionality and are orchestrated with\nAPIs. SPR is built to run as a WiFi router, but it can also run in a network namespace\nas a standalone VPN & DNS Service with a virtualized network."}),"\n",(0,i.jsx)(r.h4,{id:"sound-software-selection",children:"Sound Software Selection"}),"\n",(0,i.jsx)(r.p,{children:"SPR is built mostly with golang and a react frontend. Where possible, memory-safe languages with good security track records are preferred over native code such as C or code that is difficult to write securely, like PHP."}),"\n",(0,i.jsx)(r.h2,{id:"the-service-listing",children:"The Service Listing"}),"\n",(0,i.jsx)(r.p,{children:"The following services are currently included with SPR:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"apis/overview",children:"api"})," \u21e8 API for frontends and CLIs to manage connected devices, network groups, and firewall rules"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/base",children:"base"})," \u21e8 Networking initialization and configuration at startup"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/db",children:"db"})," \u21e8 Database key/value store"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/dhcp",children:"dhcp"})," \u21e8 DHCP Server"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/dhcp_client",children:"dhcp_client"})," \u21e8 DHCP Client for requesting IP addresses from uplink"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/dns",children:"dns"})," \u21e8 DNS Service, running CoreDNS"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/multicast_proxy",children:"multicast_udp_proxy"})," \u21e8 A multicast proxy to support multicast networking for usability"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/packet_logs",children:"packet_logs"})," \u21e8 NFLog packet log emitter"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/ppp",children:"ppp"})," \u21e8 A Point-to-Point protocol service for authenticating and requesting IP addresses from uplink"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/superd",children:"superd"})," \u21e8 Daemon to manage docker comms and restarting SPR"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/watchdog",children:"watchdog"})," \u21e8 A failure mode detection service for restarting the router in case of crashes"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"services/wifid",children:"wifid"})," \u21e8 Wifi Base Station Service, running hostapd"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"api-extensions",children:"API Extensions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://www.supernetworks.org/pages/api/0#tag/dnsblock",children:"DNS Block & Log"})," \u21e8 Fine grained DNS Rules & Logs"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://www.supernetworks.org/pages/api/0#tag/wireguard",children:"Wireguard"})," \u21e8 Configuration service for running a Wireguard VPN"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://www.supernetworks.org/pages/api/0#tag/lookup",children:"Lookup"})," \u21e8 OUI & ASN Lookup Service"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://www.supernetworks.org/pages/api/0#tag/dyndns",children:"Dyndns"})," \u21e8 Dyndns Service"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>o});var i=n(7294);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);