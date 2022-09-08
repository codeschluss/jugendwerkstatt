"use strict";(self.webpackChunkjugendwerkstatt=self.webpackChunkjugendwerkstatt||[]).push([[278],{69278:function(r,e,t){t.r(e);var n=t(1413),a=t(4245),o=t(16871),i=t(1841),c=t(34204),u=t(7043),s=t(33778),l=t(80184);e.default=function(){var r=(0,o.s0)(),e=(0,o.TH)().search,t=a.parse(e),f=(0,o.UO)().id,p=(0,i.MlS)({variables:{entity:{id:f},year:t.year?Number(t.year):0}}),d=p.data,y=(d=void 0===d?{}:d).group,m=void 0===y?null:y,v=p.loading,g=(null===m||void 0===m?void 0:m.courses)||[];return v?(0,l.jsx)("h1",{children:"Loading..."}):(0,l.jsxs)("div",{className:"flex flex-col max-w-5xl gap-x-5 md:flex-row",children:[(0,l.jsx)("div",{className:"flex-1 p-10 bg-white ",children:(0,l.jsx)(u.Gi,{headerData:["Kurs - ".concat(null===m||void 0===m?void 0:m.name),"Bewertung \xd8"],bodyData:g.map((function(r){return(0,l.jsxs)(c.iA.Row,{children:[(0,l.jsx)(c.iA.Data,{children:null===r||void 0===r?void 0:r.name}),(0,l.jsx)(c.iA.Data,{children:null===r||void 0===r?void 0:r.averageRating})]},null===r||void 0===r?void 0:r.id)}))})}),(0,l.jsx)("div",{className:"flex flex-col mx-5 space-y-5 xs:mt-5 md:mt-0",children:(0,l.jsx)(c.s_,{title:"Jahr",className:"flex flex-col space-y-5",submitButton:!1,children:[2022,2023,2024,"Alle Jahre"].map((function(e,a){return(0,l.jsx)(c.zx,(0,n.Z)((0,n.Z)({},(Number(t.year)===Number(e)||3===a)&&{variant:s.l.SECONDARY}),{},{onClick:(o=e,function(){return r("Alle Jahre"===o?"":"?year=".concat(o))}),className:"w-fit",children:e}),e);var o}))})})]})}},59412:function(r){var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(r,e){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],a(t),a(n))}function o(r){try{return decodeURIComponent(r)}catch(o){for(var e=r.match(t),n=1;n<e.length;n++)e=(r=a(e,n).join("")).match(t);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=n.exec(r);a;){try{t[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(t[a[0]]=i)}a=n.exec(r)}t["%C2"]="\ufffd";for(var c=Object.keys(t),u=0;u<c.length;u++){var s=c[u];r=r.replace(new RegExp(s,"g"),t[s])}return r}(r)}}},62683:function(r){r.exports=function(r,e){for(var t={},n=Object.keys(r),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],c=r[i];(a?-1!==e.indexOf(i):e(i,c,r))&&(t[i]=c)}return t}},4245:function(r,e,t){var n=t(59713).default,a=t(63038).default,o=t(43269).default,i=t(319).default,c=t(40499),u=t(59412),s=t(70845),l=t(62683),f=Symbol("encodeFragmentIdentifier");function p(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(r,e){return e.encode?e.strict?c(r):encodeURIComponent(r):r}function y(r,e){return e.decode?u(r):r}function m(r){return Array.isArray(r)?r.sort():"object"===typeof r?m(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function v(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function g(r){var e=(r=v(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function b(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function x(r,e){p((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return function(r,t,n){e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var a="string"===typeof t&&t.includes(r.arrayFormatSeparator),o="string"===typeof t&&!a&&y(t,r).includes(r.arrayFormatSeparator);t=o?y(t,r):t;var i=a||o?t.split(r.arrayFormatSeparator).map((function(e){return y(e,r)})):null===t?t:y(t,r);n[e]=i};case"bracket-separator":return function(e,t,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===t?[]:t.split(r.arrayFormatSeparator).map((function(e){return y(e,r)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=t?y(t,r):t};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!==typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var i,c=o(r.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var l=s(e.decode?u.replace(/\+/g," "):u,"="),f=a(l,2),d=f[0],v=f[1];v=void 0===v?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?v:y(v,e),t(y(d,e),v,n)}}}catch(w){c.e(w)}finally{c.f()}for(var g=0,x=Object.keys(n);g<x.length;g++){var h=x[g],j=n[h];if("object"===typeof j&&null!==j)for(var k=0,F=Object.keys(j);k<F.length;k++){var O=F[k];j[O]=b(j[O],e)}else n[h]=b(j,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(r,e){var t=n[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?r[e]=m(t):r[e]=t,r}),Object.create(null))}e.extract=g,e.parse=x,e.stringify=function(r,e){if(!r)return"";p((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&(null===(n=r[t])||void 0===n)||e.skipEmptyString&&""===r[t];var n},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var a=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),"[",a,"]"].join("")]:[[d(e,r),"[",d(a,r),"]=",d(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),"[]"].join("")]:[[d(e,r),"[]=",d(n,r)].join("")])}};case"colon-list-separator":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),":list="].join("")]:[[d(e,r),":list=",d(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===r.arrayFormat?"[]=":"=";return function(t){return function(n,a){return void 0===a||r.skipNull&&null===a||r.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[d(t,r),e,d(a,r)].join("")]:[[n,d(a,r)].join(r.arrayFormatSeparator)])}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[d(e,r)]:[[d(e,r),"=",d(n,r)].join("")])}}}}(e),a={},o=0,c=Object.keys(r);o<c.length;o++){var u=c[o];t(u)||(a[u]=r[u])}var s=Object.keys(a);return!1!==e.sort&&s.sort(e.sort),s.map((function(t){var a=r[t];return void 0===a?"":null===a?d(t,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?d(t,e)+"[]":a.reduce(n(t),[]).join("&"):d(t,e)+"="+d(a,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=s(r,"#"),n=a(t,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:x(g(r),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:y(i,e)}:{})},e.stringifyUrl=function(r,t){t=Object.assign(n({encode:!0,strict:!0},f,!0),t);var a=v(r.url).split("?")[0]||"",o=e.extract(r.url),i=e.parse(o,{sort:!1}),c=Object.assign(i,r.query),u=e.stringify(c,t);u&&(u="?".concat(u));var s=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(s="#".concat(t[f]?d(r.fragmentIdentifier,t):r.fragmentIdentifier)),"".concat(a).concat(u).concat(s)},e.pick=function(r,t,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var o=e.parseUrl(r,a),i=o.url,c=o.query,u=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:l(c,t),fragmentIdentifier:u},a)},e.exclude=function(r,t,n){var a=Array.isArray(t)?function(r){return!t.includes(r)}:function(r,e){return!t(r,e)};return e.pick(r,a,n)}},70845:function(r){r.exports=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},40499:function(r){r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}}}]);
//# sourceMappingURL=278.247a27dc.chunk.js.map