"use strict";(self.webpackChunkjugendwerkstatt=self.webpackChunkjugendwerkstatt||[]).push([[606],{90606:function(e,r,i){i.r(r);var n=i(1413),o=i(29439),d=i(72791),s=i(16871),a=i(61134),l=i(35820),t=i(7043),u=i(80305),c=i(1841),m=i(34204),p=i(77260),v=i(99374),g=i(80184);r.default=function(){var e,r,i,b=(0,s.s0)(),f=(0,s.UO)(),h=f.id,j=f.courseId,x=(0,a.cI)({mode:"onChange",resolver:(0,l.L)(u.m)}),Z=x.reset,k=x.register,N=x.handleSubmit,q=x.formState.errors,w=(0,c.KyK)().data,y=(w=void 0===w?{}:w).groups,S=void 0===y?null:y,C=(0,c.Kyp)({variables:{id:j},skip:!j}).data,K=(C=void 0===C?{}:C).course,U=void 0===K?null:K,G=(0,c.VlL)({onCompleted:function(){return b("/admin/groups")}}),D=(0,o.Z)(G,1)[0];(0,d.useEffect)((function(){var e;h&&U&&Z({name:U.name||"",group:(null===(e=U.group)||void 0===e?void 0:e.id)||"",description:U.description||""})}),[h,U,Z]);return(0,g.jsx)(a.RV,(0,n.Z)((0,n.Z)({},x),{},{children:(0,g.jsxs)("form",{className:"max-w-6xl",children:[(0,g.jsxs)(t.UQ,{title:"Stammdaten",open:!!j,className:(0,v.Tn)(q.name&&"border border-primary"),children:[(0,g.jsx)(t.UP,(0,n.Z)((0,n.Z)({id:"name",label:"Kursname"},k("name")),{},{error:null===(e=q.name)||void 0===e?void 0:e.message,className:"mb-4"})),(0,g.jsxs)(m.Ph,(0,n.Z)((0,n.Z)({id:"group",label:"Gruppe"},k("group")),{},{error:null===(r=q.group)||void 0===r?void 0:r.message,children:[!U&&(0,g.jsx)("option",{value:"",children:"W\xe4hlen Sie eine Gruppe"}),null===S||void 0===S||null===(i=S.result)||void 0===i?void 0:i.map((function(e){return(0,g.jsx)("option",{value:(null===e||void 0===e?void 0:e.id)||"",children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))]}))]}),(0,g.jsx)(t.UQ,{title:"Beschreibung",className:(0,v.Tn)(q.description&&"border border-primary"),children:(0,g.jsx)(p.kz,{})}),(0,g.jsx)(t.iN,{onSubmit:N((function(e){var r=e.name,i=e.group,o=e.description;D({variables:{entity:(0,n.Z)((0,n.Z)({},j&&{id:j}),{},{name:r,group:{id:i},description:o})}})}))})]})}))}},80305:function(e,r,i){i.d(r,{J:function(){return d},m:function(){return s}});var n=i(4819),o=i.n(n),d=o().object({name:o().string().required().label("Name"),description:o().string().required().label("Description")}),s=o().object({name:o().string().required().label("Name"),group:o().string().required().label("Group"),description:o().string().required().label("Description")})}}]);
//# sourceMappingURL=606.f619ba39.chunk.js.map