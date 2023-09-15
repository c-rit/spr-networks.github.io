"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[8222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"virtual SPR",title:"SPR in the cloud",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard"]},l=void 0,i={permalink:"/pages/blog/virtual SPR",source:"@site/blog/2022-09-07-virtual-spr.md",title:"SPR in the cloud",description:"Introduction",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Virtual",permalink:"/pages/blog/tags/virtual"},{label:"Cloud",permalink:"/pages/blog/tags/cloud"},{label:"VPN",permalink:"/pages/blog/tags/vpn"},{label:"WireGuard",permalink:"/pages/blog/tags/wire-guard"}],readingTime:3.17,hasTruncateMarker:!1,authors:[{name:"Philip Olausson",url:"https://twitter.com/capslcc",key:"ltspo"}],frontMatter:{slug:"virtual SPR",title:"SPR in the cloud",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard"]},prevItem:{title:"Run Virtual SPR on a DigitalOcean Droplet",permalink:"/pages/blog/virtual-spr-on-a-digital-ocean-droplet"},nextItem:{title:"Securely Chaining Routers",permalink:"/pages/blog/secure router chaining"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Virtual SPR Install",id:"virtual-spr-install",level:2},{value:"Configure the VPN client on your device",id:"configure-the-vpn-client-on-your-device",level:2},{value:"Admin interface",id:"admin-interface",level:2},{value:"Modify Blocklists",id:"modify-blocklists",level:2},{value:"View traffic",id:"view-traffic",level:2},{value:"Outro and random notes",id:"outro-and-random-notes",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This guide will show how to setup virtual SPR and connect to it using a WireGuard VPN client from your phone or desktop computer."),(0,r.kt)("p",null,"The result is a private VPN with a custom DNS server able to block ads, log traffic, and more."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quick install")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n')),(0,r.kt)("p",null,"Open WireGuard & scan the QR Code/import config - Done!"),(0,r.kt)("h2",{id:"virtual-spr-install"},"Virtual SPR Install"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What you need")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A linux server running Ubuntu 22.04"),(0,r.kt)("li",{parentName:"ul"},"If there is a firewall ",(0,r.kt)("em",{parentName:"li"},"port 51280/udp")," needs to be open for incoming traffic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"WireGuard")," (",(0,r.kt)("em",{parentName:"li"},"\xa9 Jason A. Donenfeld"),") installed on your client phone or desktop",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apt install wireguard")," for ubuntu"),(0,r.kt)("li",{parentName:"ul"},"Official clients for ",(0,r.kt)("a",{parentName:"li",href:"https://download.wireguard.com/windows-client/wireguard-installer.exe"},"Windows"),", ",(0,r.kt)("a",{parentName:"li",href:"https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&mt=12"},"macOS"),", ",(0,r.kt)("a",{parentName:"li",href:"https://itunes.apple.com/us/app/wireguard/id1441195209?ls=1&mt=8"},"iOS"),", ",(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.wireguard.android"},"Android"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run Virtual Installer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What the script does")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"downloads the latest SPR repository from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/spr-networks/super/"},"https://github.com/spr-networks/super/")),(0,r.kt)("li",{parentName:"ul"},"downloads prebuilt docker images"),(0,r.kt)("li",{parentName:"ul"},"generate default configs"),(0,r.kt)("li",{parentName:"ul"},"setup admin password and auth token for API access"),(0,r.kt)("li",{parentName:"ul"},"start SPR"),(0,r.kt)("li",{parentName:"ul"},"add a VPN peer and output the WireGuard config")),(0,r.kt)("p",null,"You can also download the script if you want to check it out or add blocklists for ads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s -O https://raw.githubusercontent.com/spr-networks/super/main/virtual_install.sh\nchmod +x virtual_install.sh\nsudo DNS_BLOCK=hosts,ads,tracking,redirects ./virtual_install.sh\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blocklistproject/Lists"},"here")," for available blocklists."),(0,r.kt)("p",null,"Example to block DNS requests to adservers and social media:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo DNS_BLOCK=ads,tracking,facebook,tiktok ./virtual_install.sh\n")),(0,r.kt)("p",null,"If you want to change the admin password you can edit the file ",(0,r.kt)("inlineCode",{parentName:"p"},"configs/base/auth_users.json")),(0,r.kt)("p",null,"Running the script you should see login info, a QR Code & the WireGuard client config. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"...\n[+] WireGuard config: (save this as wg.conf & import in client)\n----------------------------------------------------------\n\n[Interface]\nPrivateKey = privkey\nAddress = 192.168.2.94\nDNS = 192.168.2.1\n\n[Peer]\nPublicKey = pubkey\nAllowedIPs = 0.0.0.0/0, ::/0\nEndpoint = 198.211.120.224:51280\nPersistentKeepalive = 25\nPresharedKey = psk\n")),(0,r.kt)("p",null,"If you want to connect to the VPN using a desktop client, save the config as wg.conf on your local computer."),(0,r.kt)("h2",{id:"configure-the-vpn-client-on-your-device"},"Configure the VPN client on your device"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For iOS and Android")),(0,r.kt)("p",null,"Scan the QR Code in the official WireGuard App (",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/wireguard/id1441195209?ls=1&mt=8"},"iOS"),", ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.wireguard.android"},"Android"),") to import your VPN profile."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linux, macOS and Windows")),(0,r.kt)("p",null,"Click ",(0,r.kt)("em",{parentName:"p"},'"Add empty tunnel..."')," paste the config and set a name for the tunnel. Or, if you saved the config to a file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open your WireGuard client and click ",(0,r.kt)("em",{parentName:"li"},'"Import tunnel(s) from file"')),(0,r.kt)("li",{parentName:"ul"},"Select the wg.conf file"),(0,r.kt)("li",{parentName:"ul"},"Click Activate")),(0,r.kt)("h2",{id:"admin-interface"},"Admin interface"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9546).Z,width:"1998",height:"1010"})),(0,r.kt)("p",null,"Make sure you're connected to the VPN endpoint & browse to ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.2.1"},"http://192.168.2.1")," to access the admin interface."),(0,r.kt)("p",null,"Login using the credentials shown in the output from the script or if you set the password manually (",(0,r.kt)("em",{parentName:"p"},"NOTE")," you can check the login info by running ",(0,r.kt)("inlineCode",{parentName:"p"},"SKIP_VPN=1 ./virtual_install.sh"),")."),(0,r.kt)("p",null,"If you prefer to use curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ export TOKEN="BASE64-TOKEN-FROM-OUTPUT"\n$ curl -s -H "Authorization: Bearer $TOKEN" 192.168.2.1/devices\n')),(0,r.kt)("p",null,"Checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://www.supernetworks.org/pages/api/0#section/Introduction"},"documentation")," to get started using the SPR API."),(0,r.kt)("h2",{id:"modify-blocklists"},"Modify Blocklists"),(0,r.kt)("p",null,"In the admin interface you can enable more blocklists by clicking ",(0,r.kt)("em",{parentName:"p"},"Blocklists/Ad-block")," under DNS:\n",(0,r.kt)("img",{src:n(4314).Z,width:"1974",height:"940"})),(0,r.kt)("p",null,"SPR comes bundled with the hosts file from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/StevenBlack/hosts"},"https://github.com/StevenBlack/hosts")," and the blocklists from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blocklistproject/Lists"},"https://github.com/blocklistproject/Lists")," repository, including:\n",(0,r.kt)("em",{parentName:"p"},"redirect, ads, facebook, twitter, malware, porn, redirect, tracking, youtube, everything")),(0,r.kt)("p",null,"If something is missing you can always add custom blocklists or block specific domains."),(0,r.kt)("h2",{id:"view-traffic"},"View traffic"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("em",{parentName:"p"},"DNS Log")," in the DNS category, select the client to get a log of domains:\n",(0,r.kt)("img",{src:n(6387).Z,width:"1990",height:"944"})),(0,r.kt)("p",null,"Here you can also add more blocks, domain overrides if you want to allow something temporarily, delete logs or disable them completely under ",(0,r.kt)("em",{parentName:"p"},"Settings"),"."),(0,r.kt)("p",null,"It is also possible to get more detail traffic for connections under ",(0,r.kt)("em",{parentName:"p"},"Traffic"),":\n",(0,r.kt)("img",{src:n(829).Z,width:"2086",height:"880"})),(0,r.kt)("h2",{id:"outro-and-random-notes"},"Outro and random notes"),(0,r.kt)("p",null,"You can remove lan from your device groups for a device but its needed to access the admin interface."),(0,r.kt)("p",null,"SPR is configured to use DNS over HTTPs when resolving domains. You can modify the Coredns configuration under configs/dns/Corefile"))}c.isMDXComponent=!0},4314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot_dns_blocklist-579c25c2088d86938ca50e098f225501.png"},6387:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot_dns_log-370b2aa4ba0241c3e494facd7d4dcec9.png"},9546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot_login-d6eccf46d43c7a5a3cdd6d7872ff7415.png"},829:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot_traffic-2f69a0c1ea6d51d18677a11246c41bdd.png"}}]);