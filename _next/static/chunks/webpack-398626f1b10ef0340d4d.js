!function(){"use strict";var n={},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}},u=!0;try{n[r].call(i.exports,i,i.exports,e),u=!1}finally{u&&delete t[r]}return i.loaded=!0,i.exports}e.m=n,function(){var n="function"===typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=function(n){n&&(n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},o=function(n){!--n.r&&n()},i=function(n,t){n?n.push(t):o(t)};e.a=function(e,u,c){var f,a,s,l=c&&[],p=e.exports,d=!0,b=!1,h=function(t,e,r){b||(b=!0,e.r+=t.length,t.map((function(t,o){t[n](e,r)})),b=!1)},m=new Promise((function(n,t){s=t,a=function(){n(p),r(l),l=0}}));m[t]=p,m[n]=function(n,t){if(d)return o(n);f&&h(f,n,t),i(l,n),m.catch(t)},e.exports=m,u((function(e){if(!e)return a();var u,c;f=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[n])return e;if(e.then){var u=[];e.then((function(n){c[t]=n,r(u),u=0}));var c={[n]:function(n,t){i(u,n),e.catch(t)}};return c}}return{[n]:function(n){o(n)},[t]:e}}))}(e);var s=new Promise((function(n,e){(u=function(){n(c=f.map((function(n){return n[t]})))}).r=0,h(f,u,e)}));return u.r?s:c})).then(a,s),d=!1}}(),function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(a=0;a<n.length;a++){r=n[a][0],o=n[a][1],i=n[a][2];for(var c=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[f])}))?r.splice(f--,1):(c=!1,i<u&&(u=i));c&&(n.splice(a--,1),t=o())}return t}i=i||0;for(var a=n.length;a>0&&n[a-1][2]>i;a--)n[a]=n[a-1];n[a]=[r,o,i]}}(),e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},function(){var n,t=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__};e.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);e.r(i);var u={};n=n||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~n.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(n){u[n]=function(){return r[n]}}));return u.default=function(){return r},e.d(i,u),i}}(),e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))},e.u=function(n){return"static/chunks/"+n+"."+{83:"68ef9fd7ef6b37f9c643",120:"b3688193ed0bc31d0c33"}[n]+".js"},e.miniCssF=function(n){},e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}(),e.hmd=function(n){return(n=Object.create(n)).children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){var n={},t="_N_E:";e.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var c,f;if(void 0!==i)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.setAttribute("data-webpack",t+i),c.src=r),n[r]=[o];var p=function(t,e){c.onerror=c.onload=null,clearTimeout(d);var o=n[r];if(delete n[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(n){return n(e)})),t)return t(e)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),f&&document.head.appendChild(c)}}}(),e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.p="/web-wordcloud/_next/",function(){var n={272:0};e.f.j=function(t,r){var o=e.o(n,t)?n[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(272!=t){var i=new Promise((function(e,r){o=n[t]=[e,r]}));r.push(o[2]=i);var u=e.p+e.u(t),c=new Error;e.l(u,(function(r){if(e.o(n,t)&&(0!==(o=n[t])&&(n[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}}),"chunk-"+t,t)}else n[t]=0},e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],c=r[1],f=r[2],a=0;for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(f)var s=f(e);for(t&&t(r);a<u.length;a++)i=u[a],e.o(n,i)&&n[i]&&n[i][0](),n[u[a]]=0;return e.O(s)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),e.v=function(n,t,r,o){var i=fetch(e.p+"static/wasm/webassembly.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,o).then((function(t){return Object.assign(n,t.instance.exports)})):i.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,o)})).then((function(t){return Object.assign(n,t.instance.exports)}))}}();