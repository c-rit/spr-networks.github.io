!function(){"use strict";var e,c,f,a,t,d={},n={};function r(e){var c=n[e];if(void 0!==c)return c.exports;var f=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=d,r.c=n,e=[],r.O=function(c,f,a,t){if(!f){var d=1/0;for(u=0;u<e.length;u++){f=e[u][0],a=e[u][1],t=e[u][2];for(var n=!0,b=0;b<f.length;b++)(!1&t||d>=t)&&Object.keys(r.O).every((function(e){return r.O[e](f[b])}))?f.splice(b--,1):(n=!1,t<d&&(d=t));if(n){e.splice(u--,1);var o=a();void 0!==o&&(c=o)}}return c}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[f,a,t]},r.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(c,{a:c}),c},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var t=Object.create(null);r.r(t);var d={};c=c||[null,f({}),f([]),f(f)];for(var n=2&a&&e;"object"==typeof n&&!~c.indexOf(n);n=f(n))Object.getOwnPropertyNames(n).forEach((function(c){d[c]=function(){return e[c]}}));return d.default=function(){return e},r.d(t,d),t},r.d=function(e,c){for(var f in c)r.o(c,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(c,f){return r.f[f](e,c),c}),[]))},r.u=function(e){return"assets/js/"+({33:"194aa9ed",43:"b829ca9c",53:"935f2afb",74:"4b717bc7",75:"ee7ada9a",117:"c500a658",583:"09aa9f9e",756:"66c5e8db",935:"31265703",952:"dc83d5a7",1262:"8aacda7c",1400:"7e1657a3",1409:"84aebfa4",1457:"d8f35fa4",1602:"bb65e76f",1613:"328a5745",1859:"234905a5",2174:"b1946702",2387:"6df7deb1",2535:"814f3328",2686:"730a48c5",2811:"7004ee6a",2858:"dabbc565",2862:"5046f3e9",2894:"39304e99",2898:"f7b70096",2968:"8534c058",3089:"a6aa9e1f",3205:"03a386c0",3275:"8dc0d417",3292:"06156f16",3491:"8955b57a",3558:"57d0e979",3608:"9e4087bc",3830:"7bf04a2c",3953:"c7e8d662",4013:"01a85c17",4195:"c4f5d8e4",4337:"b8e79904",4348:"e44f8b74",4471:"c00a8442",4572:"e9d3736a",4635:"d50f434d",4721:"8d7d8740",4950:"614d564a",4989:"853a7f55",5029:"4e8323b9",5166:"9f969a1f",5475:"623e01c4",5599:"19d0a338",5870:"e8e7e444",6089:"7434e569",6103:"ccc49370",6117:"5608acc4",6258:"88109ec1",6263:"1d65002b",6290:"2645fe86",6343:"57b05002",6410:"81fdc0c8",6582:"8d8a50e0",6653:"db32d859",6673:"639d4659",6972:"e27b570a",7155:"4c998c22",7223:"b348df40",7418:"bffca146",7441:"44f44116",7457:"ed8ace0e",7918:"17896441",7974:"49128993",8158:"347bbf58",8222:"e06b60f2",8469:"45900ff0",8610:"6875c492",8612:"f0ad3fbb",8676:"0ca777a1",8985:"5385eb44",9086:"acf3f472",9156:"324905b6",9304:"93e82c63",9514:"1be78505",9591:"cd65f4c7",9640:"737187d1",9671:"0e384e19",9696:"00007bce",9748:"1fb23435",9765:"63e5f49c",9888:"85a2c06e",9968:"22a6d31f"}[e]||e)+"."+{33:"cdb2e9a5",43:"1b18bacc",53:"11d459c8",74:"4b94fbe1",75:"78756da4",117:"4bd84ff8",583:"a1a9dd05",756:"f6c56fc1",935:"82d41c9d",952:"c5510724",1262:"137cf23a",1400:"dcab0a49",1409:"cd20fb72",1457:"f71c2aed",1602:"4144d508",1613:"7197295b",1859:"78b2db43",2174:"94e3bff9",2387:"7828da6d",2535:"6a6dbd8f",2686:"440b3098",2811:"6b5ef68b",2858:"88a3e7f6",2862:"ee7ec6be",2894:"4bb91d84",2898:"15f44620",2968:"0f5ac542",3089:"31b3ffaf",3205:"a8d23c76",3275:"f35cecb7",3292:"b6cf98e6",3491:"d7471365",3558:"ea16cc40",3608:"b9c8eced",3830:"02c03d58",3953:"7b136b3a",4013:"16e21d19",4195:"40c2067f",4337:"56c16d97",4348:"40a1c559",4471:"284839ab",4572:"aa833cdf",4608:"c6528b94",4635:"ce5c0cd4",4721:"dd14730a",4950:"aef9c705",4989:"71d06e97",5029:"16971b5e",5166:"49c95a52",5475:"babca9d6",5599:"d585b383",5870:"0c402c9a",5897:"9b43251a",6089:"1c62a45d",6103:"04036d1a",6117:"ea104fe0",6258:"acec7778",6263:"40dd2590",6290:"2f5520c6",6343:"20373983",6383:"7f32d34a",6410:"8aa1a4a6",6582:"0f3440c1",6653:"6533aa62",6673:"bba1846b",6972:"30049942",7155:"b63ecbc7",7223:"60d287bc",7418:"31bfa229",7441:"f54af226",7457:"cee7c245",7918:"46fd9fba",7974:"d12ebc1e",8158:"e11fa66e",8222:"cd656017",8469:"bf8000a7",8610:"de881e5e",8612:"cf07bfa5",8676:"6a13dd29",8985:"092777e7",9086:"d5bc52c8",9156:"9e5ce766",9304:"d865c15f",9514:"44c01da6",9591:"c0960b33",9640:"912850ce",9671:"4f4c0381",9696:"3fd3b23e",9748:"8c3c37d0",9765:"90135e4e",9888:"bf1759bd",9968:"7f6f47ff"}[e]+".js"},r.miniCssF=function(e){},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a={},t="spr-docs:",r.l=function(e,c,f,d){if(a[e])a[e].push(c);else{var n,b;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==t+f){n=i;break}}n||(b=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",t+f),n.src=e),a[e]=[c];var l=function(c,f){n.onerror=n.onload=null,clearTimeout(s);var t=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),t&&t.forEach((function(e){return e(f)})),c)return c(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),b&&document.head.appendChild(n)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="/pages/",r.gca=function(e){return e={17896441:"7918",31265703:"935",49128993:"7974","194aa9ed":"33",b829ca9c:"43","935f2afb":"53","4b717bc7":"74",ee7ada9a:"75",c500a658:"117","09aa9f9e":"583","66c5e8db":"756",dc83d5a7:"952","8aacda7c":"1262","7e1657a3":"1400","84aebfa4":"1409",d8f35fa4:"1457",bb65e76f:"1602","328a5745":"1613","234905a5":"1859",b1946702:"2174","6df7deb1":"2387","814f3328":"2535","730a48c5":"2686","7004ee6a":"2811",dabbc565:"2858","5046f3e9":"2862","39304e99":"2894",f7b70096:"2898","8534c058":"2968",a6aa9e1f:"3089","03a386c0":"3205","8dc0d417":"3275","06156f16":"3292","8955b57a":"3491","57d0e979":"3558","9e4087bc":"3608","7bf04a2c":"3830",c7e8d662:"3953","01a85c17":"4013",c4f5d8e4:"4195",b8e79904:"4337",e44f8b74:"4348",c00a8442:"4471",e9d3736a:"4572",d50f434d:"4635","8d7d8740":"4721","614d564a":"4950","853a7f55":"4989","4e8323b9":"5029","9f969a1f":"5166","623e01c4":"5475","19d0a338":"5599",e8e7e444:"5870","7434e569":"6089",ccc49370:"6103","5608acc4":"6117","88109ec1":"6258","1d65002b":"6263","2645fe86":"6290","57b05002":"6343","81fdc0c8":"6410","8d8a50e0":"6582",db32d859:"6653","639d4659":"6673",e27b570a:"6972","4c998c22":"7155",b348df40:"7223",bffca146:"7418","44f44116":"7441",ed8ace0e:"7457","347bbf58":"8158",e06b60f2:"8222","45900ff0":"8469","6875c492":"8610",f0ad3fbb:"8612","0ca777a1":"8676","5385eb44":"8985",acf3f472:"9086","324905b6":"9156","93e82c63":"9304","1be78505":"9514",cd65f4c7:"9591","737187d1":"9640","0e384e19":"9671","00007bce":"9696","1fb23435":"9748","63e5f49c":"9765","85a2c06e":"9888","22a6d31f":"9968"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(c,f){var a=r.o(e,c)?e[c]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var t=new Promise((function(f,t){a=e[c]=[f,t]}));f.push(a[2]=t);var d=r.p+r.u(c),n=new Error;r.l(d,(function(f){if(r.o(e,c)&&(0!==(a=e[c])&&(e[c]=void 0),a)){var t=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;n.message="Loading chunk "+c+" failed.\n("+t+": "+d+")",n.name="ChunkLoadError",n.type=t,n.request=d,a[1](n)}}),"chunk-"+c,c)}},r.O.j=function(c){return 0===e[c]};var c=function(c,f){var a,t,d=f[0],n=f[1],b=f[2],o=0;if(d.some((function(c){return 0!==e[c]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(b)var u=b(r)}for(c&&c(f);o<d.length;o++)t=d[o],r.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return r.O(u)},f=self.webpackChunkspr_docs=self.webpackChunkspr_docs||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}()}();