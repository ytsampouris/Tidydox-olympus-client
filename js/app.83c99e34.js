(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{1:"782498d2",3:"030aac68",4:"550386f8",5:"87e1e3d1",6:"aabec819",7:"6594901c",8:"fbbe921f",9:"9ca36a0d",10:"85d95525",11:"d4736d27",12:"119c2e77",13:"4000fe2e",14:"c775a531",15:"5f71e44a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={1:1,3:1,4:1,5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"0519c36b",3:"763fdaeb",4:"0852755f",5:"0852755f",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"272a":function(e,t,n){"use strict";function r(){}function o(){}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},"2f39":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("f64d");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),i=n("b05d"),u=n("2a19"),c=n("f508");r["a"].use(i["a"],{config:{brand:{primary:"#036145"}},lang:o["a"],iconSet:a["a"],plugins:{Notify:u["a"],Loading:c["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],d={name:"App"},f=d,m=n("2877"),p=Object(m["a"])(f,l,s,!1,null,null,null),h=p.exports,b=n("2f62");r["a"].use(b["a"]);var g=function(){const e=new b["a"].Store({modules:{},strict:!1});return e},v=n("8c4f");n("ddb0");const y=[{path:"/user",name:"user",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8b24"))},{path:"documents",name:"documents",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"de62")),meta:{requiresAuth:!0}},{path:"myAccount",name:"myAccount",component:()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"526f")),meta:{requiresAuth:!0}},{path:"newDocument",name:"newDocument",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"78f7")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"documents/:id",name:"documentViewer",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"f9c3")),meta:{requiresAuth:!0}},{path:"documents/documentFileViewerPdf/:id",name:"documentFileViewerPdf",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"9a80")),meta:{requiresAuth:!0}},{path:"documents/documentFileViewerImg/:id",name:"documentFileViewerImg",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"c07b")),meta:{requiresAuth:!0}},{path:"usermanagement",name:"userManagement",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"7367")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"departmentmanagement",name:"departmentManagement",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"9dd3")),meta:{requiresAuth:!0,isAdmin:!0}}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"034d")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8b24"))},{path:"/login",name:"login",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"013f"))},{path:"/about",name:"about",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"a1d1"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"e51e"))}];var w=y;r["a"].use(v["a"]);var P=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:w,mode:"history",base:"/"});return e.beforeEach(((e,t,n)=>{const r=JSON.parse(localStorage.getItem("user")),o=localStorage.getItem("token");if(e.meta.requiresAuth){if(r&&o){if(e.meta.isAdmin&&"admin"===r.role)return n();if(e.meta.isAdmin&&"admin"!==r.role)return n("/login");n()}}else n()})),e},A=async function(){const e="function"===typeof g?await g({Vue:r["a"]}):g,t="function"===typeof P?await P({Vue:r["a"],store:e}):P;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},O=n("a925"),C={failed:"Action failed",success:"Action was successful"},S={"en-us":C};r["a"].use(O["a"]);const j=new O["a"]({locale:"el-GR",fallbackLocale:"el-GR",messages:S});var k=({app:e})=>{e.i18n=j},q=n("6441"),x=n("2e98");const E="/";async function _(){const{app:e,store:t,router:n}=await A();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),u=[k,q["a"],x["a"]];for(let l=0;!1===o&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:E})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new r["a"](e)}_()},"31cd":function(e,t,n){},3863:function(e,t,n){"use strict";t["a"]=function(){let e="";return e="https://tidydox.herokuapp.com/graphql",{default:{httpLinkConfig:{uri:e},cacheConfig:{},additionalConfig:{}},ssrOnServer:{additionalConfig:{ssrMode:!0}},ssrOnClient:{additionalConfig:{ssrForceFetchDelay:100}}}}},ee25:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var r=n("ded3"),o=n.n(r),a=n("0014"),i=n.n(a),u=n("c2c3");let c={};function l({apolloClientConfigObj:e}){let t;t=new i.a({uri:"https://tidydox.herokuapp.com/graphql"});const n=Object(u["a"])(((e,{headers:t})=>{const n=localStorage.getItem("token");return{headers:o()(o()({},t),n&&{authorization:`Bearer ${n}`,token:`${n}`})}}));e.link=n.concat(t)}function s(e){c=e}}});