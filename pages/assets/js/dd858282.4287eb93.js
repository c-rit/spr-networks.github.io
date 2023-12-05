"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[4475],{86956:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const r={},a="SPR on Amazon AWS",c={id:"guides/virtual/setup_amazon_aws",title:"SPR on Amazon AWS",description:"This guide shows how to setup Virtual SPR on a Micro Tier Instance on AWS, and connect to it using WireGuard VPN.",source:"@site/docs/guides/virtual/setup_amazon_aws.md",sourceDirName:"guides/virtual",slug:"/guides/virtual/setup_amazon_aws",permalink:"/pages/docs/guides/virtual/setup_amazon_aws",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPR on DigitalOcean 1-click",permalink:"/pages/docs/guides/virtual/setup_one_click"},next:{title:"SPR on DigitalOcean",permalink:"/pages/docs/guides/virtual/setup_digitalocean"}},o={},l=[{value:"Create a Instance",id:"create-a-instance",level:2},{value:"Allow VPN access",id:"allow-vpn-access",level:3},{value:"Install Virtual SPR",id:"install-virtual-spr",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"spr-on-amazon-aws",children:"SPR on Amazon AWS"}),"\n",(0,t.jsx)(n.p,{children:"This guide shows how to setup Virtual SPR on a Micro Tier Instance on AWS, and connect to it using WireGuard VPN."}),"\n",(0,t.jsx)(n.p,{children:"The result is a private VPN with a custom DNS server able to block ads, log traffic, and more features included in SPR."}),"\n",(0,t.jsxs)(n.p,{children:["For a more general and in-depth guide see the ",(0,t.jsx)(n.a,{href:"/pages/docs/setup_guides/virtual_spr",children:"Virtual SPR Guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-instance",children:"Create a Instance"}),"\n",(0,t.jsxs)(n.p,{children:["Sign in to ",(0,t.jsx)(n.a,{href:"https://console.aws.amazon.com/ec2/home",children:"AWS Console"})," and navigate to ",(0,t.jsx)(n.em,{children:"Instances"})," in the menu.\nClick ",(0,t.jsx)(n.strong,{children:"Launch Instances"})," for your selected region."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(67225).Z+"",width:"2880",height:"1562"})}),"\n",(0,t.jsx)(n.p,{children:"Name your instance and select Ubuntu and 64-bit (x86) as architecture under OS Images."}),"\n",(0,t.jsx)(n.p,{children:"For instance type choose any micro tier eligible for free, t2.micro is used in the example."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(64220).Z+"",width:"2880",height:"1563"})}),"\n",(0,t.jsxs)(n.p,{children:["If you already have a keypair that you want to use, select it under ",(0,t.jsx)(n.em,{children:"Key pair"})," or click ",(0,t.jsx)(n.strong,{children:"Create new key pair"}),", save the .pem-file to your ~/.ssh directory and make sure only your user can read it."]}),"\n",(0,t.jsx)(n.h3,{id:"allow-vpn-access",children:"Allow VPN access"}),"\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.em,{children:"Network settings"})," click ",(0,t.jsx)(n.strong,{children:"Edit"})," and scroll down to ",(0,t.jsx)(n.strong,{children:"Add security group rule"}),'.\nSelect UDP & port 5128, "vpn" as description and if you want to allow access from a specific source ip or range.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(57540).Z+"",width:"2880",height:"1562"})}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Launch Instance"})," in the bottom right."]}),"\n",(0,t.jsx)(n.h2,{id:"install-virtual-spr",children:"Install Virtual SPR"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.em,{children:"Instances"}),", the newly created instance should be available in the listing and shown as Running, click it.\nCopy the value under Public IPv4 address and ssh into the box as the ubuntu user:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"ssh -i ~/.ssh/awsspr.pem ubuntu@paste-ipv4-address-here\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"NOTE"})," You can also use the ",(0,t.jsx)(n.em,{children:"Instance Connect"}),"-feature if you don't have access to a ssh client. Click ",(0,t.jsx)(n.strong,{children:"Connect"})," under the ",(0,t.jsx)(n.em,{children:"Instance Summary"})," to get access to a terminal."]}),"\n",(0,t.jsx)(n.p,{children:"Run the SPR virtual installer with sudo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'sudo bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["NOTE: If the script cannot get the public ip address of the instance from one of the network interfaces, it will ask to fetch this from ",(0,t.jsx)(n.a,{href:"https://ifconfig.me",children:"https://ifconfig.me"}),".\nAnswer yes to fetch this or edit this later (",(0,t.jsx)(n.strong,{children:"Endpoint"})," in the WireGuard config)."]})}),"\n",(0,t.jsxs)(n.p,{children:["The script will download the ",(0,t.jsx)(n.a,{href:"https://github.com/spr-networks/super",children:"SPR repository"})," and run ",(0,t.jsx)(n.em,{children:"virtual_install.sh"})," (you can also checkout the ",(0,t.jsx)(n.a,{href:"https://github.com/spr-networks/super",children:"repository"})," and run the script manually if you want to inspect the script before running it.)"]}),"\n",(0,t.jsx)(n.p,{children:"If you want to add another device, just run the setup script again:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd super\nsudo ./virtual_install.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now you have a WireGuard VPN config ready, either scan the QR Code or paste the config into the ",(0,t.jsx)(n.a,{href:"https://www.wireguard.com/install/",children:"WireGuard client"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on setting up the VPN client see ",(0,t.jsx)(n.a,{href:"/pages/docs/setup_guides/virtual_spr#configure-the-vpn-client-on-your-device",children:"the Virtual SPR Guide"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},67225:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/aws-1-bdfd66fa6b9c8d0ed108eb8f38ee259a.png"},64220:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/aws-2-1d0a29f7e8401ee36884f579741adc3a.png"},57540:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/aws-3-f078d071e2539fa79b380f117e5c6387.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var t=s(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);