(function(e){function n(n){for(var r,o,u=n[0],c=n[1],l=n[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={2:0},a={2:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{1:"c7cecf8b",3:"19e24f24",4:"550386f8",5:"87e1e3d1",6:"aabec819",7:"6594901c",8:"3fb884fd",9:"9ca36a0d",10:"85d95525",11:"d4736d27",12:"119c2e77",13:"4000fe2e",14:"c775a531",15:"5f71e44a"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={1:1,3:1,4:1,5:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{1:"0679ac1f",3:"ec0d5731",4:"0852755f",5:"0852755f",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),t(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var d=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=s;i.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"272a":function(e,n,t){"use strict";function r(){}function o(){}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},"2f39":function(e,n,t){"use strict";t.r(n);t("ac1f"),t("5319"),t("573e"),t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("f64d");var r=t("2b0e"),o=t("1f91"),a=t("42d2"),i=t("b05d"),u=t("2a19"),c=t("f508");r["a"].use(i["a"],{config:{brand:{primary:"#2E3B4E"}},lang:o["a"],iconSet:a["a"],plugins:{Notify:u["a"],Loading:c["a"]}});var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},s=[],d={name:"App"},f=d,m=t("2877"),p=Object(m["a"])(f,l,s,!1,null,null,null),h=p.exports,b=t("2f62");r["a"].use(b["a"]);var g=function(){const e=new b["a"].Store({modules:{},strict:!1});return e},v=t("8c4f");t("ddb0");const w=[{path:"/user",name:"user",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"documents",name:"documents",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"de62")),meta:{requiresAuth:!0}},{path:"myAccount",name:"myAccount",component:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"526f")),meta:{requiresAuth:!0}},{path:"newDocument",name:"newDocument",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"78f7")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"documents/:id",name:"documentViewer",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"f9c3")),meta:{requiresAuth:!0}},{path:"documents/documentFileViewerPdf/:id",name:"documentFileViewerPdf",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"9a80")),meta:{requiresAuth:!0}},{path:"documents/documentFileViewerImg/:id",name:"documentFileViewerImg",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"c07b")),meta:{requiresAuth:!0}},{path:"usermanagement",name:"userManagement",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"7367")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"departmentmanagement",name:"departmentManagement",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"9dd3")),meta:{requiresAuth:!0,isAdmin:!0}}]},{path:"/",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"034d")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"/login",name:"login",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"013f"))},{path:"/about",name:"about",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"a1d1"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"e51e"))}];var y=w;r["a"].use(v["a"]);var P=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"history",base:"/"});return e.beforeEach(((e,n,t)=>{const r=JSON.parse(localStorage.getItem("user")),o=localStorage.getItem("token");if(e.meta.requiresAuth){if(r&&o){if(e.meta.isAdmin&&"admin"===r.role)return t();if(e.meta.isAdmin&&"admin"!==r.role)return t("/login");t()}}else t()})),e},A=async function(){const e="function"===typeof g?await g({Vue:r["a"]}):g,n="function"===typeof P?await P({Vue:r["a"],store:e}):P;e.$router=n;const t={router:n,store:e,render:e=>e(h),el:"#q-app"};return{app:t,store:e,router:n}},O=t("a925"),C={failed:"Action failed",success:"Action was successful"},S={"en-us":C};r["a"].use(O["a"]);const j=new O["a"]({locale:"el-GR",fallbackLocale:"el-GR",messages:S});var k=({app:e})=>{e.i18n=j},q=t("6441"),E=t("2e98");const _="/";async function x(){const{app:e,store:n,router:t}=await A();let o=!1;const a=e=>{o=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},i=window.location.href.replace(window.location.origin,""),u=[k,q["a"],E["a"]];for(let l=0;!1===o&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:t,store:n,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:_})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new r["a"](e)}x()},"31cd":function(e,n,t){},3863:function(e,n,t){"use strict";n["a"]=function(){let e="";return e=void 0,{default:{httpLinkConfig:{uri:e},cacheConfig:{},additionalConfig:{}},ssrOnServer:{additionalConfig:{ssrMode:!0}},ssrOnClient:{additionalConfig:{ssrForceFetchDelay:100}}}}},ee25:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return c}));var r=t("ded3"),o=t.n(r),a=t("0014"),i=t.n(a),u=t("c2c3");let c={};function l({apolloClientConfigObj:e}){let n;n=new i.a({uri:void 0});const t=Object(u["a"])(((e,{headers:n})=>{const t=localStorage.getItem("token");return{headers:o()(o()({},n),t&&{authorization:`Bearer ${t}`,token:`${t}`})}}));e.link=t.concat(n)}function s(e){c=e}}});