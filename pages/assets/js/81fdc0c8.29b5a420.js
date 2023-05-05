"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6410],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],p={},o="API Overview",l={unversionedId:"apis/overview",id:"apis/overview",title:"API Overview",description:"View the OpenAPI Documentation here",source:"@site/docs/apis/overview.md",sourceDirName:"apis",slug:"/apis/overview",permalink:"/pages/docs/apis/overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to SPR!",permalink:"/pages/docs/intro"},next:{title:"Authentication",permalink:"/pages/docs/apis/p_webapi_authentication"}},u={},c=[{value:"API Plugins",id:"api-plugins",level:2},{value:"Query the http API",id:"query-the-http-api",level:3},{value:"Query a plugin API",id:"query-a-plugin-api",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-overview"},"API Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/0"},"View the OpenAPI Documentation here")),(0,i.kt)("p",null,"The API service exists for communication between service containers and to support\nexternal requests from the web front end or CLI tools."),(0,i.kt)("p",null,"The internal APIs run over unix sockets and rely on filesystem namespaces for authentication.\nCurrently there are a few internal APIs exposed to containers over unix sockets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for ",(0,i.kt)("a",{parentName:"li",href:"/api/0#tag/unix_wifid"},"wifid service accepting stations")),(0,i.kt)("li",{parentName:"ul"},"Setting up dynamic firewall rules for ",(0,i.kt)("a",{parentName:"li",href:"/api/0#tag/unix_dhcpd"},"DHCP clients")),(0,i.kt)("li",{parentName:"ul"},"Support for ",(0,i.kt)("a",{parentName:"li",href:"/api/0#tag/unix_wireguard"},"wireguard peers "))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/api"}," \u21e8 View the code")),(0,i.kt)("h2",{id:"api-plugins"},"API Plugins"),(0,i.kt)("p",null,"API plugins let other docker services expose web APIs with unix sockets that\nare relayed with a reverse proxy."),(0,i.kt)("p",null,"To add a new plugin in the UI navigate to ",(0,i.kt)("em",{parentName:"p"},"System -> Plugins"),".\nExample dyndns plugin from ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/base/api.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Plugins": [\n    {\n      "Name": "dyndns extension",\n      "URI": "dyndns",\n      "UnixPath": "/state/plugins/dyndns/dyndns_plugin"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"You can also talk to the spr api directly to list/add/delete plugins - see the ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/0#tag/plugins/operation/showPlugins"},"api documentation for plugins"),"."),(0,i.kt)("h3",{id:"query-the-http-api"},"Query the http API"),(0,i.kt)("p",null,"It is recommended to create a token to talk to the API (more info about authentication ",(0,i.kt)("a",{parentName:"p",href:"/pages/docs/apis/p_webapi_authentication"},"here"),").\nIn the Admin UI, click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Add Auth Token"))," under ",(0,i.kt)("em",{parentName:"p"},"System -> Auth"),". Use this token for authorization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN="paste-token-here"\ncurl -s -H "Authorization: Bearer $TOKEN" 192.168.2.1/plugins\n')),(0,i.kt)("h3",{id:"query-a-plugin-api"},"Query a plugin API"),(0,i.kt)("p",null,"If developing a plugin on the same host as spr you can talk to a specific plugins unix socket."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," - talk to db service to get stats:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pwd\n/home/spr/super\nsudo curl -s --unix-socket ./state/plugins/db/socket 0/stats\n")),(0,i.kt)("h1",{id:"spr-event-bus"},"SPR Event Bus"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/sprbus"},"sprbus")," is an event bus for publishing and subscribing to events.\nThe server routing messages between services is setup in the ",(0,i.kt)("a",{parentName:"p",href:"/pages/docs/apis/overview"},"api service"),"."),(0,i.kt)("p",null,"Clients connect to ",(0,i.kt)("inlineCode",{parentName:"p"},"/state/api/eventbus.sock"),", either subscribing to a topic or publishing events for other clients to handle."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example use in services")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/docs/apis/overview"},"api")," for notifications"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/docs/services/packet_logs"},"packet_logs")," for network traffic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/docs/services/dns"},"dns:block")," for block notifications"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/docs/services/db"},"db")," subscribe and store events")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Events")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"wifi:auth:success")," is published when a device connect"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"device:save")," is published when a device is updated")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/0"},"View the API documentation for sprbus here")),(0,i.kt)("p",null,"The sprbus command line tool can be used to inspect live events:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/37542945/231619971-96b18ec8-36a9-4e36-bf37-0b0f1e982c7d.gif",alt:"sprbus"})),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/sprbus"},"github repository")," for more examples."))}d.isMDXComponent=!0}}]);