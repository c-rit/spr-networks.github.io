"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[2387],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_label:"SPR Setup Guide"},l="Secure Programmable Router Setup Guide",p={unversionedId:"setup_run_spr",id:"setup_run_spr",title:"Secure Programmable Router Setup Guide",description:"SPR is built to run on systems capable of running Ubuntu and docker. For also developing on-device,",source:"@site/docs/setup_run_spr.md",sourceDirName:".",slug:"/setup_run_spr",permalink:"/pages/docs/setup_run_spr",tags:[],version:"current",frontMatter:{sidebar_label:"SPR Setup Guide"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/pages/docs/security"}},u={},c=[{value:"Base System Setup",id:"base-system-setup",level:3},{value:"Configuring the project",id:"configuring-the-project",level:3},{value:"Running the project using prebuilt containers",id:"running-the-project-using-prebuilt-containers",level:3},{value:"Building the project",id:"building-the-project",level:3},{value:"Additional Notes",id:"additional-notes",level:3},{value:"Sign in to the Web UI",id:"sign-in-to-the-web-ui",level:3},{value:"Add new devices",id:"add-new-devices",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secure-programmable-router-setup-guide"},"Secure Programmable Router Setup Guide"),(0,o.kt)("p",null,"SPR is built to run on systems capable of running Ubuntu and docker. For also developing on-device,\nsystems should have 32-64GB of writable storage and 4GB of RAM."),(0,o.kt)("h3",{id:"base-system-setup"},"Base System Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install ubuntu server 64-bit.")),(0,o.kt)("p",{parentName:"li"},"a. For Running on a Raspberry Pi you can grab the  21.10 Ubuntu image ",(0,o.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi"},"here")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On a mac, write the image to the external disk (rdisk2)\n$ xzcat ubuntu-21.10-preinstalled-server-arm64+raspi.img.xz | dd of=/dev/rdisk2 bs=$[1024*1024]\n")),(0,o.kt)("p",{parentName:"li"},"b. For other hardware, grab an Ubuntu server installer approprate for your architecutre (arm64 or amd64) ",(0,o.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/server"}," here"),", then boot the device into the installer. SPR has been tested on 20.04, 21.10, and the future 22.04 Release")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Log in and set up the SPR repository. The default credentials are ubuntu/ubuntu")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On the booted system\ngit clone https://github.com/spr-networks/super\ncd super\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Prepare the Ubuntu Install for SPR ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/spr-networks/super/blob/main/base/setup.sh"},"base/setup.sh"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#if using a flash drive\nsudo base/setup.sh\n#or if using an sdcard the following script reduces disk usage\n# base/setup-sdcard.sh #this setup will reduce writes from log files\nreboot\n")))),(0,o.kt)("h3",{id:"configuring-the-project"},"Configuring the project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Inside the super directory, copy base/template_configs to configs/")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd super\ncp -R base/template_configs configs\n")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"strong"},"configs/base/config.sh")," to set an SSID_NAME or change other options"))),(0,o.kt)("p",null,"Ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"WANIF")," matches the name of the outbound interface if not using the builtin ethernet port."),(0,o.kt)("p",null,"Also, consider disabling UPSTREAM_SERVICES_ENABLE=1 if you do not want the API and SSH exposed to the WAN port."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Set an api username and password for the web UI")),(0,o.kt)("p",{parentName:"li"},"The UI will be reachable on port 80 from connected devices."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo {\\"admin\\" : \\"your password goes here\\"} > configs/base/auth_users.json\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"(Optional) Configure WiFi PSKs on command line. This can also be done in the UI.")))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"(Optional) Assign devices to Groups")),(0,o.kt)("p",{parentName:"li"},"Lastly,  manually add those devices to groups in ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/devices/devices.json"),"\nThe default groups are:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Group"),(0,o.kt)("th",{parentName:"tr",align:null},"Access"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isolated"),(0,o.kt)("td",{parentName:"tr",align:null},"No access to anything")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dns"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows DNS query access")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wan"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows internet/WAN forwarding")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lan"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows full LAN access")))))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"(Optional) Set the WiFi Channel")),(0,o.kt)("p",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/wifi/hostapd.conf")," and set ",(0,o.kt)("em",{parentName:"p"},"channel=")," and ",(0,o.kt)("em",{parentName:"p"},"vht_oper_centr_freq_seg0_idx="),"."))),(0,o.kt)("h3",{id:"running-the-project-using-prebuilt-containers"},"Running the project using prebuilt containers"),(0,o.kt)("p",null,"Testing containers are built and published to GitHub's Container Registry,\nand can be run without building on the device. If you would instead like to build everything\nfrom source, proceed to the ",(0,o.kt)("a",{parentName:"p",href:"#building-the-project"},"next section"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./configs/scripts/gen_coredhcp_yaml.sh > configs/dhcp/coredhcp.yml\n./configs/scripts/gen_hostapd.sh > configs/wifi/hostapd.conf\n./configs/scripts/gen_watchdog.sh  > configs/watchdog/watchdog.conf\n\n./run_prebuilt.sh\n")),(0,o.kt)("p",null,"To see logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose logs -f\n")),(0,o.kt)("h3",{id:"building-the-project"},"Building the project"),(0,o.kt)("p",null,"SPR can be built on device. Because the system uses ",(0,o.kt)("inlineCode",{parentName:"p"},"nftables")," exclusively,\nand docker is made to work with ",(0,o.kt)("inlineCode",{parentName:"p"},"iptables"),",  minimal docker forwarding\nrules have to be recreated to build with docker before SPR first runs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#fix forwarding rules for Docker\nsudo ./base/docker_nftables_setup.sh  \n")),(0,o.kt)("p",null,"And build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo ./build_docker_compose.sh\n")),(0,o.kt)("p",null,"Extract the frontend from the prebuilt image (or modify docker-compose.yml to build the frontend locally)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo frontend/gen_frontend.sh  \n")),(0,o.kt)("p",null,"If something went wrong with with a cached stage, it is possible to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-cache"),".\nFor example: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ./build_docker_compose.sh --no-cache")),(0,o.kt)("p",null,"A specific service can also be built by passing it as an argument (",(0,o.kt)("inlineCode",{parentName:"p"},"./build_docker_compose.sh api"),")"),(0,o.kt)("p",null,"To run the local build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./run_docker_compose.sh\n")),(0,o.kt)("h3",{id:"additional-notes"},"Additional Notes"),(0,o.kt)("p",null,"Check dns-Corefile to tweak DNS server configuration as well as the hostapd settings in ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/dns/")),(0,o.kt)("p",null,"It is possible to use SPR's DNS server for the host system's DNS requests too, by updating the resolv.conf file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo -e "nameserver 127.0.0.1" > /etc/resolv.conf\n')),(0,o.kt)("h3",{id:"sign-in-to-the-web-ui"},"Sign in to the Web UI"),(0,o.kt)("p",null,"To connect to the device, assuming steps 3 and 4 of  ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuring the project")," were followed,\nconnect to the IP of the device from the wired WAN interface in a browser, i.e. ",(0,o.kt)("a",{parentName:"p",href:"http://192.168.1.100."},"http://192.168.1.100."),"\nSign in with the username and password assigned in step 2."),(0,o.kt)("p",null,"If steps 5 and 6 were followed, and the device was placed in the LAN group, it will be possible\nto connect over WiFI to the API. Connect to the new SSID and navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://192.168.2.1"},"http://192.168.2.1")," (or whatever $LANIP was set to in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/base/config.sh"),")."),(0,o.kt)("h3",{id:"add-new-devices"},"Add new devices"),(0,o.kt)("div",null,(0,o.kt)("video",{width:"100%",height:"100%",playsInline:!0,muted:!0,controls:!0,src:"/pages/video/sprui.mp4",type:"video/mp4"})))}m.isMDXComponent=!0}}]);