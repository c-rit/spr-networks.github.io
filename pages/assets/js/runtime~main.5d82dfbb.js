(()=>{"use strict";var e,a,c,f,d,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,e=[],t.O=(a,c,f,d)=>{if(!c){var b=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],d=e[i][2];for(var r=!0,o=0;o<c.length;o++)(!1&d||b>=d)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,d<b&&(b=d));if(r){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[c,f,d]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(d,b),d},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({33:"194aa9ed",43:"b829ca9c",53:"935f2afb",66:"059f43f3",74:"4b717bc7",75:"ee7ada9a",117:"c500a658",289:"7c3f84ab",402:"3389a026",409:"a8da0d0d",514:"4a9877ac",583:"09aa9f9e",685:"22e3876f",756:"66c5e8db",781:"4ae77c92",836:"0480b142",889:"883a860b",935:"31265703",952:"dc83d5a7",961:"54f38a03",968:"c730d660",1172:"814cb8bc",1238:"03942592",1251:"7004ee6a",1262:"8aacda7c",1377:"f791f678",1379:"c4cb79d6",1400:"7e1657a3",1409:"84aebfa4",1457:"d8f35fa4",1539:"c4eab7d8",1552:"8a27b3d2",1602:"bb65e76f",1613:"328a5745",1697:"d8b8a567",1745:"78d01496",1746:"2ffff700",1792:"da0a9f10",1801:"7562933f",1859:"234905a5",1885:"ea5104ef",1968:"67c7e699",2123:"0c8145af",2151:"8f5b577a",2221:"6adb8232",2318:"9eb0c370",2356:"5b4f0243",2370:"da412d33",2421:"c85fbf71",2495:"11f10799",2535:"814f3328",2610:"57d0e979",2645:"0544ec32",2686:"730a48c5",2725:"a531c628",2748:"4d69bf97",2760:"c8faa4cc",2811:"62f02a17",2858:"dabbc565",2862:"5046f3e9",2872:"ab24d638",2878:"f44bd4e5",2894:"39304e99",2898:"f7b70096",2964:"58ed12ec",2968:"8534c058",3074:"5aeed257",3089:"a6aa9e1f",3112:"5597ec7d",3182:"a8d62058",3184:"a1d6a10e",3205:"03a386c0",3207:"8a77700d",3257:"c1245bef",3275:"8dc0d417",3292:"06156f16",3372:"4698810b",3380:"8147a316",3558:"29c5d5ff",3608:"9e4087bc",3614:"d03d3138",3652:"a047ddaa",3665:"edd61398",3830:"7bf04a2c",3852:"99cbf54e",3942:"a6c44ad8",3953:"c7e8d662",4013:"01a85c17",4131:"ecf9496d",4195:"c4f5d8e4",4330:"03fae39c",4337:"b8e79904",4348:"e44f8b74",4368:"a94703ab",4452:"aaf89e31",4464:"4f7c5178",4471:"c00a8442",4475:"dd858282",4476:"d96f4cb8",4477:"9b0fb70d",4488:"da5504e7",4517:"bb350c59",4572:"e9d3736a",4603:"cd4c6be6",4635:"d50f434d",4677:"2f338b40",4721:"8d7d8740",4746:"e730a39c",4775:"443806e5",4860:"1b79966f",4950:"614d564a",4955:"9e080b86",4980:"caa9c513",4989:"853a7f55",5029:"4e8323b9",5155:"9f854cc3",5166:"9f969a1f",5401:"ce33bb68",5475:"623e01c4",5516:"d0cb0f87",5629:"fcd4ed3e",5643:"9ea96a08",5827:"bf5c76e8",5870:"e8e7e444",5878:"878377cd",5898:"40a763d7",6089:"7434e569",6103:"ccc49370",6105:"cec58dfe",6112:"2e436cbc",6117:"5608acc4",6131:"9e08b927",6194:"55af8d3a",6198:"dea2c0b7",6201:"2c62c1ab",6203:"e0fcdf93",6263:"1d65002b",6290:"2645fe86",6337:"802a9b50",6346:"9a61e94f",6347:"fdcfb38c",6406:"88a65412",6410:"81fdc0c8",6508:"c6a982ea",6536:"c6c562c8",6582:"8d8a50e0",6638:"cf9f94dc",6653:"db32d859",6673:"639d4659",6693:"da825fe6",6801:"0b7f5e33",6859:"63c5ac2e",6945:"c4d3d77a",6967:"f6b2b713",6972:"e27b570a",6976:"3de812d9",7008:"6eddc704",7027:"0fa79863",7128:"2d2967f7",7155:"4c998c22",7213:"f2e05022",7223:"b348df40",7298:"4aa539c2",7370:"52ea80f2",7418:"bffca146",7441:"44f44116",7450:"60bd687c",7457:"ed8ace0e",7472:"174c6a50",7480:"6b973a4f",7729:"03be7dae",7767:"6f15c042",7811:"29c1fe81",7918:"17896441",7920:"1a4e3797",7974:"49128993",7995:"b6c370ed",8019:"e5c4ecc1",8043:"356e722b",8158:"347bbf58",8222:"e06b60f2",8266:"c5e4a08a",8306:"c0201518",8331:"60ce153a",8357:"2117709b",8376:"a878abb1",8469:"45900ff0",8517:"0bc4edbe",8518:"a7bd4aaa",8610:"6875c492",8612:"f0ad3fbb",8676:"0ca777a1",8689:"c56038fa",8699:"d1d393b4",8769:"d36039e1",8841:"8a504810",8843:"e6cc2e41",8863:"9d07a288",8920:"9f804a25",8921:"421727a1",8962:"ccffc301",8985:"5385eb44",8994:"fa3a0472",9012:"0ddcb04a",9065:"b4eca77f",9086:"acf3f472",9156:"324905b6",9304:"93e82c63",9308:"5ad49f69",9380:"868cf5e2",9438:"dfdc690f",9439:"bc1310c9",9591:"cd65f4c7",9593:"1d020476",9610:"29fbe9f0",9620:"e4ed71a0",9640:"737187d1",9648:"3f5f133a",9649:"a1b3b7ae",9661:"5e95c892",9671:"0e384e19",9696:"00007bce",9748:"1fb23435",9765:"63e5f49c",9829:"6b55a435",9854:"27813de2",9862:"4fc2fd13",9888:"85a2c06e",9897:"6e42b864",9968:"22a6d31f"}[e]||e)+"."+{33:"64c5527f",43:"49dc1d65",53:"78d6ba86",66:"16e20251",74:"fd39882a",75:"83175dcc",117:"f4427e9f",130:"ba0e9ce7",289:"97f366c6",402:"a7fd2aa0",409:"a71798f2",514:"8dfe3ecd",583:"34454e70",685:"e4e74c9d",756:"2cc65648",781:"d25ac5ea",836:"d6ffdf58",889:"1392981e",935:"aceea00d",952:"1f11473d",961:"9cdadeed",968:"be56ab7d",1172:"88ff02f4",1238:"d56e4850",1251:"735ba6e8",1262:"152e13e2",1377:"be112684",1379:"f5a15316",1400:"648f0b61",1409:"85f1456b",1426:"07397cab",1457:"988af5fb",1539:"88722c8f",1552:"183807f6",1602:"a3f75bd0",1613:"8a1b506c",1697:"3056b3d8",1745:"d7744324",1746:"ef87ea8a",1772:"c4408e98",1792:"7f94b1d9",1801:"c816fe82",1859:"a6dd1db2",1885:"81b830e8",1968:"efd53fe7",2123:"e0ef8e0b",2151:"97faa66e",2221:"7c1a14ed",2318:"bb199c64",2356:"169affa6",2370:"ab99e83e",2421:"1fb37106",2495:"56b49d31",2535:"4dd098ae",2610:"f304ee1f",2645:"4bfc9a89",2686:"ed759724",2725:"2958b06d",2748:"0627db60",2760:"d052e93a",2811:"e9176229",2858:"a39fda9f",2862:"13996082",2872:"1581d0d4",2878:"868c1759",2894:"627b43ce",2898:"789b28c3",2964:"58f078da",2968:"3c4e1129",3074:"4316a784",3089:"704236db",3112:"4beca567",3182:"31d07f4d",3184:"66204e72",3205:"b84c859b",3207:"5d192eb5",3257:"0969eae1",3275:"ace6833c",3292:"ecd7d078",3372:"b42dc90b",3380:"6adad3ba",3558:"a3401fbb",3608:"d6d82317",3614:"12270aac",3652:"18a707d7",3665:"371dc1f3",3830:"e9955fb4",3852:"4a367fd4",3942:"a9b8f617",3953:"73cef745",3969:"677e5593",4013:"956b1d30",4131:"093f86bf",4195:"9b2027f8",4330:"0bfcbc37",4337:"0654489a",4348:"ba4fa91b",4368:"69633928",4452:"dc6ecc00",4464:"f61e92f9",4471:"fe0b11eb",4475:"4287eb93",4476:"bc05c12a",4477:"25b4ae6f",4488:"4f9e9d5b",4517:"4c9d2ac3",4572:"986f58f6",4603:"0476aa79",4635:"f52abc58",4677:"6924aa9a",4721:"4ee779ac",4746:"e62a069a",4775:"6204eecf",4860:"f3166773",4950:"ff34340f",4955:"6705c912",4980:"6cf5f5b4",4989:"60432787",5029:"867bdf25",5155:"1bc5aa2f",5166:"dc4157f9",5401:"13d5bf28",5475:"3c148ce7",5516:"4f822c43",5629:"47928dc5",5643:"40848e4d",5679:"6bb0771c",5827:"57aa202f",5870:"69fbae35",5878:"8f8620ec",5898:"2c0508cc",6089:"73db6621",6103:"6ba27d6b",6105:"1ff6ea4d",6112:"311c845f",6117:"75502adb",6131:"70287f3a",6194:"490fac64",6198:"5092cfb0",6201:"f8ac64a3",6203:"ba17b45a",6263:"29f6ce52",6290:"9374e285",6337:"546a4708",6346:"931fcbb3",6347:"3f979adc",6406:"21350903",6410:"69a58204",6508:"1949e8be",6536:"76b11d4e",6582:"6793b1ab",6638:"91b4d7ec",6653:"b67ec5d4",6673:"7494ddc9",6693:"d7db3e96",6801:"b93e2468",6859:"176ba59d",6945:"b16e7955",6967:"9217241c",6972:"a408a330",6976:"8a2bf217",7008:"359d7bf4",7027:"c930ae49",7128:"7a56b753",7155:"4133908e",7213:"e759cb22",7223:"248bd114",7298:"052dbee8",7370:"858b8738",7418:"da4bd89c",7441:"ced56d99",7450:"078bfe4f",7457:"4520e928",7472:"98f62405",7480:"7a070cc9",7729:"643b380d",7767:"d3e4e444",7811:"d8a45c9b",7874:"18650d4a",7918:"da677aca",7920:"44114a16",7974:"2fe9ad5b",7995:"cb9d2440",8019:"5662514b",8043:"afd7cfe4",8158:"bb0aef97",8222:"1fbfc316",8266:"1794a00e",8306:"83ab41e1",8331:"3610d57e",8357:"f8e79255",8376:"4eb17a31",8469:"9a5c94ff",8517:"50a9c881",8518:"2622a6e4",8610:"31a4134b",8612:"fe6c4ff2",8676:"f09077af",8689:"7c2661e9",8699:"b51f532e",8769:"587c27bf",8841:"116a7d90",8843:"6f36c826",8863:"653e4ff3",8894:"4cded5d2",8920:"b0925199",8921:"31e9e75f",8962:"0bfe9ba7",8985:"0e714b04",8994:"665e118c",9012:"37cb546e",9065:"1bf73365",9086:"56563acc",9156:"75dffc3e",9304:"2c2f9d39",9308:"51f9b00c",9380:"51ee2528",9438:"7b20c03d",9439:"aa760b49",9591:"5bf2c37d",9593:"cfcfc33e",9610:"0e4cb994",9620:"b17dac7b",9640:"f643c3e9",9648:"429fa667",9649:"aeee3f17",9661:"8fb9e4ee",9671:"9b76c2c3",9696:"da7cc0c9",9748:"348d313d",9765:"d4a2a4c8",9829:"de602182",9854:"ee212765",9862:"1155fbe1",9888:"f2bb1cee",9897:"726149ff",9968:"e795f69f"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},d="spr-docs:",t.l=(e,a,c,b)=>{if(f[e])f[e].push(a);else{var r,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+c){r=l;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+c),r.src=e),f[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/pages/",t.gca=function(e){return e={17896441:"7918",31265703:"935",49128993:"7974","194aa9ed":"33",b829ca9c:"43","935f2afb":"53","059f43f3":"66","4b717bc7":"74",ee7ada9a:"75",c500a658:"117","7c3f84ab":"289","3389a026":"402",a8da0d0d:"409","4a9877ac":"514","09aa9f9e":"583","22e3876f":"685","66c5e8db":"756","4ae77c92":"781","0480b142":"836","883a860b":"889",dc83d5a7:"952","54f38a03":"961",c730d660:"968","814cb8bc":"1172","03942592":"1238","7004ee6a":"1251","8aacda7c":"1262",f791f678:"1377",c4cb79d6:"1379","7e1657a3":"1400","84aebfa4":"1409",d8f35fa4:"1457",c4eab7d8:"1539","8a27b3d2":"1552",bb65e76f:"1602","328a5745":"1613",d8b8a567:"1697","78d01496":"1745","2ffff700":"1746",da0a9f10:"1792","7562933f":"1801","234905a5":"1859",ea5104ef:"1885","67c7e699":"1968","0c8145af":"2123","8f5b577a":"2151","6adb8232":"2221","9eb0c370":"2318","5b4f0243":"2356",da412d33:"2370",c85fbf71:"2421","11f10799":"2495","814f3328":"2535","57d0e979":"2610","0544ec32":"2645","730a48c5":"2686",a531c628:"2725","4d69bf97":"2748",c8faa4cc:"2760","62f02a17":"2811",dabbc565:"2858","5046f3e9":"2862",ab24d638:"2872",f44bd4e5:"2878","39304e99":"2894",f7b70096:"2898","58ed12ec":"2964","8534c058":"2968","5aeed257":"3074",a6aa9e1f:"3089","5597ec7d":"3112",a8d62058:"3182",a1d6a10e:"3184","03a386c0":"3205","8a77700d":"3207",c1245bef:"3257","8dc0d417":"3275","06156f16":"3292","4698810b":"3372","8147a316":"3380","29c5d5ff":"3558","9e4087bc":"3608",d03d3138:"3614",a047ddaa:"3652",edd61398:"3665","7bf04a2c":"3830","99cbf54e":"3852",a6c44ad8:"3942",c7e8d662:"3953","01a85c17":"4013",ecf9496d:"4131",c4f5d8e4:"4195","03fae39c":"4330",b8e79904:"4337",e44f8b74:"4348",a94703ab:"4368",aaf89e31:"4452","4f7c5178":"4464",c00a8442:"4471",dd858282:"4475",d96f4cb8:"4476","9b0fb70d":"4477",da5504e7:"4488",bb350c59:"4517",e9d3736a:"4572",cd4c6be6:"4603",d50f434d:"4635","2f338b40":"4677","8d7d8740":"4721",e730a39c:"4746","443806e5":"4775","1b79966f":"4860","614d564a":"4950","9e080b86":"4955",caa9c513:"4980","853a7f55":"4989","4e8323b9":"5029","9f854cc3":"5155","9f969a1f":"5166",ce33bb68:"5401","623e01c4":"5475",d0cb0f87:"5516",fcd4ed3e:"5629","9ea96a08":"5643",bf5c76e8:"5827",e8e7e444:"5870","878377cd":"5878","40a763d7":"5898","7434e569":"6089",ccc49370:"6103",cec58dfe:"6105","2e436cbc":"6112","5608acc4":"6117","9e08b927":"6131","55af8d3a":"6194",dea2c0b7:"6198","2c62c1ab":"6201",e0fcdf93:"6203","1d65002b":"6263","2645fe86":"6290","802a9b50":"6337","9a61e94f":"6346",fdcfb38c:"6347","88a65412":"6406","81fdc0c8":"6410",c6a982ea:"6508",c6c562c8:"6536","8d8a50e0":"6582",cf9f94dc:"6638",db32d859:"6653","639d4659":"6673",da825fe6:"6693","0b7f5e33":"6801","63c5ac2e":"6859",c4d3d77a:"6945",f6b2b713:"6967",e27b570a:"6972","3de812d9":"6976","6eddc704":"7008","0fa79863":"7027","2d2967f7":"7128","4c998c22":"7155",f2e05022:"7213",b348df40:"7223","4aa539c2":"7298","52ea80f2":"7370",bffca146:"7418","44f44116":"7441","60bd687c":"7450",ed8ace0e:"7457","174c6a50":"7472","6b973a4f":"7480","03be7dae":"7729","6f15c042":"7767","29c1fe81":"7811","1a4e3797":"7920",b6c370ed:"7995",e5c4ecc1:"8019","356e722b":"8043","347bbf58":"8158",e06b60f2:"8222",c5e4a08a:"8266",c0201518:"8306","60ce153a":"8331","2117709b":"8357",a878abb1:"8376","45900ff0":"8469","0bc4edbe":"8517",a7bd4aaa:"8518","6875c492":"8610",f0ad3fbb:"8612","0ca777a1":"8676",c56038fa:"8689",d1d393b4:"8699",d36039e1:"8769","8a504810":"8841",e6cc2e41:"8843","9d07a288":"8863","9f804a25":"8920","421727a1":"8921",ccffc301:"8962","5385eb44":"8985",fa3a0472:"8994","0ddcb04a":"9012",b4eca77f:"9065",acf3f472:"9086","324905b6":"9156","93e82c63":"9304","5ad49f69":"9308","868cf5e2":"9380",dfdc690f:"9438",bc1310c9:"9439",cd65f4c7:"9591","1d020476":"9593","29fbe9f0":"9610",e4ed71a0:"9620","737187d1":"9640","3f5f133a":"9648",a1b3b7ae:"9649","5e95c892":"9661","0e384e19":"9671","00007bce":"9696","1fb23435":"9748","63e5f49c":"9765","6b55a435":"9829","27813de2":"9854","4fc2fd13":"9862","85a2c06e":"9888","6e42b864":"9897","22a6d31f":"9968"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var f=t.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((c,d)=>f=e[a]=[c,d]));c.push(f[2]=d);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",r.name="ChunkLoadError",r.type=d,r.request=b,f[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var f,d,b=c[0],r=c[1],o=c[2],n=0;if(b.some((a=>0!==e[a]))){for(f in r)t.o(r,f)&&(t.m[f]=r[f]);if(o)var i=o(t)}for(a&&a(c);n<b.length;n++)d=b[n],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(i)},c=self.webpackChunkspr_docs=self.webpackChunkspr_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})(),t.nc=void 0})();