(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2848:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return pe}});var n=r(5893),o=r(9008),c=r(7294),i=r(1752),s=function(e){return(0,i.default)().publicRuntimeConfig.urlPrefix+e},a=function(){var e={path:s("/icons/GitHub.svg"),alt:"GitHub"};return(0,n.jsxs)("header",{className:"px-16 py-2 border-b border-gray-200 w-full flex justify-between",children:[(0,n.jsx)("p",{className:"text-2xl text-gray-600 font-noto_sans_jp",children:"Japanese Word Cloud"}),(0,n.jsx)("a",{href:"https://github.com/ran350/web-wordcloud",className:"text-red-400",children:(0,n.jsx)("img",{src:e.path,alt:e.alt,className:"w-6 h-full align-middle"})})]})},u=function(e){var t=e.sentence,r=e.setSentence;return(0,n.jsx)("div",{className:"my-2 flex justify-center",children:(0,n.jsx)("textarea",{rows:5,onChange:function(e){var t=e.currentTarget.value;r(t)},placeholder:t,className:"w-full px-3 py-1 border rounded-lg text-lg text-gray-700 focus:outline-none"})})},l=function(e){var t=e.text,r=e.onClick;return(0,n.jsx)("button",{className:"bg-green-700 p-2 rounded-md w-full text-xl text-white",onClick:r,children:t})},f=r(6265),p=r(8771),b=r.n(p),d=[].concat(["\u304c","\u306e","\u3092","\u306b","\u3078","\u3067","\u3068","\u3084"],["\u3070","\u3068","\u3057","\u3066"],["\u306f","\u3082","\u304b"],["\u306a","\u306d","\u305e","\u3088","\u308f"],["\u308c","\u305b","\u306d","\u305f","\u3060","\u3046"],[".",",","\u3002","\u3001","\u300c","\u300d","\n","(",")","\uff08","\uff09"]);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t,r=e.filter((function(e){return!d.includes(e)}));return t=r,Object.entries(t.reduce((function(e,t){var r;return m(m({},e),{},(0,f.Z)({},t,(null!==(r=e[t])&&void 0!==r?r:0)+1))}),{}))},y={1:{name:"Dela Gothic One ",css:"font-dela_gothic_one"},2:{name:"DotGothic16",css:"font-dot_gothic_16"},3:{name:"Hachi Maru Pop",css:"font-hachi_maru_pop"},4:{name:"Kaisei Tokumin",css:"font-kaisei_tokumin"},5:{name:"Kiwi Maru",css:"font-kiwi_maru"},6:{name:"M PLUS 1",css:"font-m_plus_1"},7:{name:"M PLUS Rounded 1c",css:"font-m_plus_rounded_1c"},8:{name:"Mochiy Pop One",css:"font-mochiy_pop_one"},9:{name:"Noto Sans JP",css:"font-noto_sans_jp"},10:{name:"Noto Serif JP",css:"font-noto_serif_jp"},11:{name:"Potta One",css:"font-potta_one"},12:{name:"Rampart One",css:"font-rampart_one"},13:{name:"RocknRoll One",css:"font-rocknroll_one"},14:{name:"Sawarabi Mincho",css:"font-sawarabi_mincho"},15:{name:"Train One",css:"font-train_one"},16:{name:"Yuji Syuku",css:"font-yuji_syu"}},g=function(){var e=function(){if("undefined"!==typeof document){var e=document.getElementById("canvas");if(null===e)throw new Error("canvas not found");return e}}();if(void 0!==e)return Math.round(16*e.width/1024)};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x=function(e){var t=e.sentence,o=e.form,i=e.ranCount,s=(0,c.useRef)(null);return(0,c.useEffect)((function(){console.time("all"),console.time("seg");var e=(new(b())).segment(t);console.timeEnd("seg");var n=O(e);r.e(83).then(r.t.bind(r,5083,23)).then((function(e){var t=e.default;if(null!==s.current){var r=function(e){return{fontFamily:y[e.fontFamilyId].css,fontWeight:e.fontWeight,color:(t=e.colors,function(e,r,n){return n>=32?t[0]:n>16?t[1]:t[2]}),backgroundColor:e.backgroundColor,minSize:e.minSize,weightFactor:function(e){return Math.pow(11*e,1.1)},gridSize:g(),drawMask:e.drawMask,maskColor:e.maskColor,maskGapWidth:void 0,minRotation:e.minRotation,maxRotation:e.maxRotation,rotationSteps:e.rotationSteps,rotateRatio:e.rotateRatio,shape:e.shape};var t}(o);t(s.current,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({list:n},r)),console.log(r)}})),console.timeEnd("all")}),[i]),(0,n.jsx)("div",{className:"my-2",children:(0,n.jsx)("canvas",{ref:s,id:"canvas",width:"800",height:"500"})})},v={fontFamilyId:"1",fontWeight:"normal",colors:["#285943","#77af9c","#8cd790"],backgroundColor:"#f4f7f7",minSize:0,gridSize:50,drawMask:!1,maskColor:"#555555",maskGapWidth:20,minRotation:-90,maxRotation:90,rotationSteps:2,rotateRatio:.5,shape:"circle"},w=function(e){var t=e.color,r=e.onChange;return(0,n.jsx)("input",{type:"color",value:t,onChange:r,className:"block w-1/2 h-8"})},P=function(e){var t=e.text;return(0,n.jsx)("label",{className:"pr-6 text-lg text-gray-700",children:t})};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"background color"}),(0,n.jsx)(w,{color:t.backgroundColor,onChange:function(e){r((function(t){return D(D({},t),{},{backgroundColor:e.target.value})}))}})]})},_=function(e){var t=e.checked,r=e.onChange;return(0,n.jsxs)("label",{children:[(0,n.jsx)("input",{type:"checkbox",checked:t,onChange:r,className:"peer sr-only"}),(0,n.jsx)("span",{className:"block w-16 cursor-pointer bg-gray-500 rounded-full p-1  peer-checked:bg-blue-500 after:block after:h-6 after:w-6 after:rounded-full after:bg-white after:transition  peer-checked:after:translate-x-[calc(130%)]"})]})};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"draw mask"}),(0,n.jsx)(_,{checked:t.drawMask,onChange:function(){return r((function(e){return N(N({},e),{},{drawMask:!e.drawMask})}))}})]})};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"font colors"}),Array.from({length:t.colors.length}).map((function(e,o){return(0,n.jsx)(w,{color:t.colors[o],onChange:function(e){var n=t.colors;n[o]=e.target.value,r((function(e){return R(R({},e),{},{colors:n})}))}},o)}))]})},M=r(9227),z=function(e){var t=e.ariaLabel,r=e.summary,o=e.children;return(0,n.jsxs)("details",{"aria-label":t,className:"relative",children:[(0,n.jsx)("summary",{className:"rounded px-4 py-2 bg-white border border-gray-200  text-sm select-none",children:r}),o]})},W=r(8347),I=function(e){var t=e.text1,r=e.text2,o=e.onKeyPress,c=e.selected;return(0,n.jsxs)("div",{role:"option",tabIndex:0,"aria-selected":!0,className:"px-4 py-2 flex cursor-pointer group select-none bg-gray-800 hover:bg-blue-600",onKeyPress:o,children:[c&&(0,n.jsx)("img",{src:s("/icons/check.svg"),alt:"selected"}),(0,n.jsx)("span",{className:"text-sm text-gray-50 ".concat(t.fontFamily,"\n                    group-hover:text-white"),children:t.text}),r&&(0,n.jsx)("span",{className:"ml-auto\n                   text-gray-500 text-xs text-right\n                   group-hover:text-white ".concat(r.fontFamily),children:r.text})]})},K=function(e){var t=e.list;return(0,n.jsx)("div",{role:"listbox",className:"z-10 w-full flex flex-col overflow-y-auto divide-y",children:t.map((function(e){var t=e.id,r=(0,W.Z)(e,["id"]);return(0,n.jsx)(I,{text1:r.text1,text2:r.text2,onKeyPress:function(){return r.onKeyPress()},selected:r.selected},t)}))})};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=function(e){var t,r=e.form,o=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"font family"}),(0,n.jsx)(z,{ariaLabel:"font-family",summary:(t=r.fontFamilyId,y[t].name),children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)(K,{list:Object.entries(y).map((function(e){var t=(0,M.Z)(e,2),n=t[0],c=t[1];return{id:n,text1:{text:"\u30b5\u30f3\u30d7\u30eb",fontFamily:c.css},text2:{text:c.name,fontFamily:"font-noto_sans_jp"},onKeyPress:function(){return o(T(T({},r),{},{fontFamilyId:n}))},selected:r.fontFamilyId===n}}))})})})]})},L=function(e){var t=e.onChange,r=e.children;return(0,n.jsx)("select",{onChange:function(e){t(e.target.value)},onBlur:function(){},className:"form-select appearance-none block m-0 border border-solid border-gray-300 rounded px-3 py-1.5 w-full text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-label":"Default select example",children:r})},H=[100,200,300,400,500,600,700,800,900,"normal","bold","bolder","lighter"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"font weight"}),(0,n.jsx)(L,{onChange:function(e){return r((function(t){return U(U({},t),{},{fontWeight:e})}))},children:H.map((function(e){return(0,n.jsx)("option",{value:e,selected:e===t.fontWeight,children:e},e)}))})]})},q=function(e){var t=e.number,r=e.onChange,o=e.placeholder,c=e.min,i=void 0===c?0:c;return(0,n.jsx)("input",{type:"number",value:t,onChange:function(e){var t=Number(e.target.value);t<i||r(t)},placeholder:o,className:"m-0 border border-solid border-gray-300 rounded px-3 py-1.5 w-1/2 block form-control bg-white bg-clip-padding text-base font-normal text-gray-700 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"})};function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"grid size"}),(0,n.jsx)(q,{number:t.gridSize,onChange:function(e){r((function(t){return Y(Y({},t),{},{gridSize:e})}))},placeholder:"grid size"})]})};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"mask color"}),(0,n.jsx)(w,{color:t.maskColor,onChange:function(e){r((function(t){return $($({},t),{},{maskColor:e.target.value})}))}})]})};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"mask width"}),(0,n.jsx)(q,{number:t.gridSize,onChange:function(e){r((function(t){return re(re({},t),{},{gridSize:e})}))}})]})};function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"Rotation Ratio"}),(0,n.jsx)(q,{number:t.gridSize,onChange:function(e){r((function(t){return ce(ce({},t),{},{rotationRatio:e})}))},placeholder:"rotation ratio"})]})},se=["circle","cardioid","diamond","square","triangle-forward","triangle","pentagon","star"];function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{text:"shape"}),(0,n.jsx)(L,{onChange:function(e){r((function(t){return ue(ue({},t),{},{shape:e})}))},children:se.map((function(e){return(0,n.jsx)("option",{selected:e===t.shape,children:e},e)}))})]})},fe=function(e){var t=e.form,r=e.setForm;return(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsx)(J,{form:t,setForm:r}),(0,n.jsx)(X,{form:t,setForm:r}),(0,n.jsx)(Z,{form:t,setForm:r}),(0,n.jsx)(S,{form:t,setForm:r}),(0,n.jsx)(Q,{form:t,setForm:r}),(0,n.jsx)(E,{form:t,setForm:r}),(0,n.jsx)(ee,{form:t,setForm:r}),(0,n.jsx)(ne,{form:t,setForm:r}),(0,n.jsx)(ie,{form:t,setForm:r}),(0,n.jsx)(le,{form:t,setForm:r})]})},pe=function(){var e=(0,c.useState)(0),t=e[0],r=e[1],i=(0,c.useState)(v),s=i[0],f=i[1],p=(0,c.useState)("\u543e\u8f29\u306f\u732b\u3067\u3042\u308b\u3002\u540d\u524d\u306f\u307e\u3060\u7121\u3044\u3002\n\u3069\u3053\u3067\u751f\u308c\u305f\u304b\u3068\u3093\u3068\u898b\u5f53\u304c\u3064\u304b\u306c\u3002\u4f55\u3067\u3082\u8584\u6697\u3044\u3058\u3081\u3058\u3081\u3057\u305f\u6240\u3067\u30cb\u30e3\u30fc\u30cb\u30e3\u30fc\u6ce3\u3044\u3066\u3044\u305f\u4e8b\u3060\u3051\u306f\u8a18\u61b6\u3057\u3066\u3044\u308b\u3002\u543e\u8f29\u306f\u3053\u3053\u3067\u59cb\u3081\u3066\u4eba\u9593\u3068\u3044\u3046\u3082\u306e\u3092\u898b\u305f\u3002\u3057\u304b\u3082\u3042\u3068\u3067\u805e\u304f\u3068\u305d\u308c\u306f\u66f8\u751f\u3068\u3044\u3046\u4eba\u9593\u4e2d\u3067\u4e00\u756a\u7370\u60aa\u306a\u7a2e\u65cf\u3067\u3042\u3063\u305f\u305d\u3046\u3060\u3002\u3053\u306e\u66f8\u751f\u3068\u3044\u3046\u306e\u306f\u6642\u3005\u6211\u3005\u3092\u6355\u3048\u3066\u716e\u3066\u98df\u3046\u3068\u3044\u3046\u8a71\u3067\u3042\u308b\u3002\u3057\u304b\u3057\u305d\u306e\u5f53\u6642\u306f\u4f55\u3068\u3044\u3046\u8003\u3082\u306a\u304b\u3063\u305f\u304b\u3089\u5225\u6bb5\u6050\u3057\u3044\u3068\u3082\u601d\u308f\u306a\u304b\u3063\u305f\u3002\u305f\u3060\u5f7c\u306e\u638c\u306b\u8f09\u305b\u3089\u308c\u3066\u30b9\u30fc\u3068\u6301\u3061\u4e0a\u3052\u3089\u308c\u305f\u6642\u4f55\u3060\u304b\u30d5\u30ef\u30d5\u30ef\u3057\u305f\u611f\u3058\u304c\u3042\u3063\u305f\u3070\u304b\u308a\u3067\u3042\u308b\u3002\u638c\u306e\u4e0a\u3067\u5c11\u3057\u843d\u3061\u3064\u3044\u3066\u66f8\u751f\u306e\u9854\u3092\u898b\u305f\u306e\u304c\u3044\u308f\u3086\u308b\u4eba\u9593\u3068\u3044\u3046\u3082\u306e\u306e\u898b\u59cb\u3067\u3042\u308d\u3046\u3002\u3053\u306e\u6642\u5999\u306a\u3082\u306e\u3060\u3068\u601d\u3063\u305f\u611f\u3058\u304c\u4eca\u3067\u3082\u6b8b\u3063\u3066\u3044\u308b\u3002\u7b2c\u4e00\u6bdb\u3092\u3082\u3063\u3066\u88c5\u98fe\u3055\u308c\u3079\u304d\u306f\u305a\u306e\u9854\u304c\u3064\u308b\u3064\u308b\u3057\u3066\u307e\u308b\u3067\u85ac\u7f36\u3060\u3002\u305d\u306e\u5f8c\u732b\u306b\u3082\u3060\u3044\u3076\u9022\u3063\u305f\u304c\u3053\u3093\u306a\u7247\u8f2a\u306b\u306f\u4e00\u5ea6\u3082\u51fa\u4f1a\u308f\u3057\u305f\u4e8b\u304c\u306a\u3044\u3002\u306e\u307f\u306a\u3089\u305a\u9854\u306e\u771f\u4e2d\u304c\u3042\u307e\u308a\u306b\u7a81\u8d77\u3057\u3066\u3044\u308b\u3002\u305d\u3046\u3057\u3066\u305d\u306e\u7a74\u306e\u4e2d\u304b\u3089\u6642\u3005\u3077\u3046\u3077\u3046\u3068\u7159\u3092\u5439\u304f\u3002\u3069\u3046\u3082\u54bd\u305b\u307d\u304f\u3066\u5b9f\u306b\u5f31\u3063\u305f\u3002\u3053\u308c\u304c\u4eba\u9593\u306e\u98f2\u3080\u7159\u8349\u3068\u3044\u3046\u3082\u306e\u3067\u3042\u308b\u4e8b\u306f\u3088\u3046\u3084\u304f\u3053\u306e\u9803\u77e5\u3063\u305f\u3002"),b=p[0],d=p[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Japanese Wordcloud"})}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)(a,{}),(0,n.jsxs)("div",{className:"flex justify-between h-[calc(100vh-3em)] w-full",children:[(0,n.jsxs)("div",{className:"mx-auto my-4 flex flex-col justify-between",children:[(0,n.jsx)(x,{sentence:b,form:s,ranCount:t}),(0,n.jsx)(u,{sentence:b,setSentence:d})]}),(0,n.jsxs)("div",{className:"px-8 py-4 border border-gray-200 w-80 bg-gray-50 flex flex-col justify-between",children:[(0,n.jsx)("div",{className:"pb-4 max-h-[600px] overflow-y-scroll",children:(0,n.jsx)(fe,{form:s,setForm:f})}),(0,n.jsx)(l,{text:"Run",onClick:function(){return r(t+1)}})]})]})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2848)}])}},function(e){e.O(0,[647,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);