!function(){"use strict";var e={},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}},u=!0;try{e[r].call(i.exports,i,i.exports,n),u=!1}finally{u&&delete t[r]}return i.loaded=!0,i.exports}n.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=function(e){e&&(e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},o=function(e){!--e.r&&e()},i=function(e,t){e?e.push(t):o(t)};n.a=function(n,u,c){var f,a,s,l=c&&[],d=n.exports,p=!0,b=!1,h=function(t,n,r){b||(b=!0,n.r+=t.length,t.map((function(t,o){t[e](n,r)})),b=!1)},m=new Promise((function(e,t){s=t,a=function(){e(d),r(l),l=0}}));m[t]=d,m[e]=function(e,t){if(p)return o(e);f&&h(f,e,t),i(l,e),m.catch(t)},n.exports=m,u((function(n){if(!n)return a();var u,c;f=function(n){return n.map((function(n){if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var u=[];n.then((function(e){c[t]=e,r(u),u=0}));var c={[e]:function(e,t){i(u,e),n.catch(t)}};return c}}return{[e]:function(e){o(e)},[t]:n}}))}(n);var s=new Promise((function(e,n){(u=function(){e(c=f.map((function(e){return e[t]})))}).r=0,h(f,u,n)}));return u.r?s:c})).then(a,s),p=!1}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(a=0;a<e.length;a++){r=e[a][0],o=e[a][1],i=e[a][2];for(var c=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[f])}))?r.splice(f--,1):(c=!1,i<u&&(u=i));c&&(e.splice(a--,1),t=o())}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[r,o,i]}}(),n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){u[e]=function(){return r[e]}}));return u.default=function(){return r},n.d(i,u),i}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/chunks/"+e+"."+{83:"68ef9fd7ef6b37f9c643",120:"82cb11a1bfeace9c61b4"}[e]+".js"},n.miniCssF=function(e){return"static/css/720895017e614e6aad45.css"},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="_N_E:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var c,f;if(void 0!==i)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),f&&document.head.appendChild(c)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/web-wordcloud/_next/",function(){var e={272:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(272!=t){var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),c=new Error;n.l(u,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}}),"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],c=r[1],f=r[2],a=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(f)var s=f(n);for(t&&t(r);a<u.length;a++)i=u[a],n.o(e,i)&&e[i]&&e[i][0](),e[u[a]]=0;return n.O(s)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.v=function(e,t,r,o){var i=fetch(n.p+"static/wasm/webassembly.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,o).then((function(t){return Object.assign(e,t.instance.exports)})):i.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,o)})).then((function(t){return Object.assign(e,t.instance.exports)}))}}();