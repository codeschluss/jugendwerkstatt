"use strict";(self.webpackChunkjugendwerkstatt=self.webpackChunkjugendwerkstatt||[]).push([[131],{94131:function(n,e,i){i.r(e);var o=i(29439),t=i(16871),a=i(1841),d=i(34204),r=i(7043),u=i(80184);e.default=function(){var n=(0,t.s0)(),e=(0,t.UO)().id,i=(0,a.EFC)({fetchPolicy:"cache-and-network",variables:{entity:{id:e}}}),c=i.data,l=(c=void 0===c?{}:c).group,s=void 0===l?null:l,v=i.refetch,f=(0,a.a_I)({onCompleted:function(){return v()}}),h=(0,o.Z)(f,1)[0],p=function(n){return function(){confirm("M\xf6chten Sie dies l\xf6schen?")&&h({variables:{id:n}})}},j=(null===s||void 0===s?void 0:s.courses)||[];return(0,u.jsx)(d.s_.Wrapper,{action:{to:"/admin/groups/".concat((null===s||void 0===s?void 0:s.id)||"","/courses/new"),label:"Neuen Kurs anlegen"},children:(0,u.jsx)(r.Gi,{headerData:["Kursname","Aktionen"],bodyData:null===j||void 0===j?void 0:j.map((function(i){return(0,u.jsxs)(d.iA.Row,{children:[(0,u.jsx)(d.iA.Data,{children:null===i||void 0===i?void 0:i.name}),(0,u.jsx)(d.iA.Data,{children:(0,u.jsx)(d.aU,{onUpdate:(o=(null===i||void 0===i?void 0:i.id)||"",function(){return n("/admin/groups/".concat(e,"/courses/").concat(o))}),onDelete:p((null===i||void 0===i?void 0:i.id)||"")})})]},null===i||void 0===i?void 0:i.id);var o}))})})}}}]);
//# sourceMappingURL=131.64eb7621.chunk.js.map