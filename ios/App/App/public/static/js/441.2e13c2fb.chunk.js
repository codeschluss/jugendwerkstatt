"use strict";(self.webpackChunkjugendwerkstatt=self.webpackChunkjugendwerkstatt||[]).push([[441],{23441:function(e,t,a){a.r(t);var i=a(1413),d=a(29439),n=a(35820),r=a(97892),o=a.n(r),l=a(72791),s=a(61134),u=a(16871),c=a(1841),m=a(7043),v=a(77260),f=a(99374),p=a(80822),b=a(80184);t.default=function(){var e=(0,u.UO)().id,t=(0,u.s0)(),a=(0,s.cI)({resolver:(0,n.L)(p.sK),defaultValues:{date:{startDate:o()().format(),dueDate:o()().add(7,"day").format()}}}),r=a.reset,j=a.handleSubmit,y=a.formState.errors,D=(0,c.jvk)({variables:{entity:{id:e}},skip:!e}).data,h=(D=void 0===D?{}:D).getJobAd,k=void 0===h?null:h,x=(0,c.nlS)({onCompleted:function(){return t("/admin/job-announcements")}}),g=(0,d.Z)(x,1)[0];return(0,l.useEffect)((function(){var e,t;k&&r({baseData:{title:(null===k||void 0===k?void 0:k.title)||"",company:(null===k||void 0===k||null===(e=k.company)||void 0===e?void 0:e.id)||"",category:(null===k||void 0===k||null===(t=k.type)||void 0===t?void 0:t.id)||""},date:{startDate:o()(null===k||void 0===k?void 0:k.startDate).format(),dueDate:o()(null===k||void 0===k?void 0:k.dueDate).format()},description:(null===k||void 0===k?void 0:k.content)||""})}),[k,r]),console.log(k),(0,b.jsx)(s.RV,(0,i.Z)((0,i.Z)({},a),{},{children:(0,b.jsxs)("form",{className:"min-h-full",children:[(0,b.jsx)(m.UQ,{title:"Stammdaten",open:!!e,className:(0,f.Tn)(y.baseData&&"border border-primary"),children:(0,b.jsx)(v.V1,{})}),(0,b.jsx)(m.UQ,{title:"Beschreibung",className:(0,f.Tn)(y.description&&"border border-primary"),children:(0,b.jsx)(v.kz,{})}),(0,b.jsx)(m.UQ,{title:"Termine",className:(0,f.Tn)(y.date&&"border border-primary"),children:(0,b.jsx)(v.lK,{})}),(0,b.jsx)(m.iN,{onSubmit:j((function(e){var t=e.description,a=e.date,d=a.dueDate,n=a.startDate,r=e.baseData,o=r.title,l=r.company,s=r.category;g((0,f.XX)((0,i.Z)({title:o,dueDate:d,startDate:n,content:t,company:{id:l},type:{id:s}},!!k&&{id:null===k||void 0===k?void 0:k.id})))}))})]})}))}}}]);
//# sourceMappingURL=441.2e13c2fb.chunk.js.map