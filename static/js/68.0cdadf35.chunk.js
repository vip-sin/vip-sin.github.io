(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[68],{30976:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var a=t(1413),i=t(74165),o=t(15861),r=t(29439),l=t(47313),s=t(48737),u=t(61474),d=t(40229),c=t(94345),v=t(71535),p=t(89870),h=t(22449),f=t(80699),m=t(68847),x=t(34940),Z=t(96900),j=t(56972),g=t(71363),w=t(31616),b=t(12613),C=t(54727),D=t(71207),S=t(35192),L=t(46095),k=t(46417),y=(0,L.Z)((0,k.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"FileDownload"),A=t(18377),P=t(66135),E=t(45959),I=t(49205),_=t(82500),N=t(62463),O=t(8586),M=t(39653),z=t(86282),F=JSON.parse(sessionStorage.getItem("dropdowns")).dailySpendsLabels,H=function(e){var n=e.data,t=(0,l.useState)(""),i=(0,r.Z)(t,2),o=i[0],s=i[1],c=(0,l.useState)("other"),p=(0,r.Z)(c,2),h=p[0],f=p[1],m=(0,l.useState)(""),Z=(0,r.Z)(m,2),j=Z[0],w=Z[1],D=(0,l.useState)(""),S=(0,r.Z)(D,2),L=S[0],y=S[1],A=(0,l.useState)(""),P=(0,r.Z)(A,2),E=P[0],I=P[1],H=(0,l.useState)(""),T=(0,r.Z)(H,2),R=T[0],J=T[1],W=(0,l.useState)(""),U=(0,r.Z)(W,2),V=U[0],G=U[1],K=(0,l.useState)(!1),$=(0,r.Z)(K,2),q=$[0],B=$[1],Q=function(){J(""),G(""),s(""),f(""),w(""),y(""),I("")};(0,l.useEffect)((function(){if(n){var e=n.id,t=n.name,a=n.relation,i=n.address,o=n.date,r=n.primaryContact;J(e),G(t),s(a),f(null===n||void 0===n?void 0:n.relation1),y(i),w(o),I(r)}n&&!q||Q(),B(!1)}),[n]);var X=function(e){var n=e.target.name,t=e.target.value;switch(n){case"item":G(t);break;case"description":y(t);break;case"date":w(t);break;case"price":t>=0&&t<=999999999999999&&I(t);break;case"relation1":f(t)}},Y=e.handleSidebar,ee=e.data,ne=e.show;return(0,k.jsx)(_.Z,{anchor:"right",open:ne,onClose:function(){},onOpen:function(){},children:(0,k.jsxs)(d.Z,{sx:{mt:10,width:350,px:2},component:"form",children:[(0,k.jsxs)(v.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,k.jsx)(g.Z,{children:null!==ee?"UPDATE SPEND DETAILS":"ADD NEW SPEND"}),(0,k.jsx)(O.Z,{size:20,onClick:function(){Y(!1,!0),Q()}})]}),(0,k.jsx)(x.Z,{}),(0,k.jsx)(M.Z,{name:"item",value:V,margin:"dense",placeholder:"Item *",onChange:X,id:"data-name"}),(0,k.jsx)(v.ZP,{item:!0,sx:{mt:1},children:(0,k.jsx)(u.gc,{id:"labelId",name:"label",value:(0,z.NA)(F,o),onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;s(n),"Others"!==n&&f("")}(n)},options:F,renderInput:function(e){return(0,k.jsx)(M.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Select Label *"}))}})}),"Others"===o&&(0,k.jsx)(M.Z,{margin:"dense",name:"relation1",value:h,placeholder:"Label Name",onChange:X,id:"data-name"}),(0,k.jsx)(M.Z,{type:"date",value:j,name:"date",margin:"dense",placeholder:"Enter Date",id:"data-name",max:"9999-12-31",min:"1900-01-01",onChange:X}),(0,k.jsx)(M.Z,{type:"number",onKeyPress:function(e){return(0,C.ZP)(e)},value:E,margin:"dense",id:"data-price",name:"price",max:999999999999999,placeholder:"Enter spend amount *",onChange:X}),(0,k.jsx)(M.Z,{type:"textarea",value:L,margin:"dense",name:"description",placeholder:"Description",id:"data-name",onChange:X}),(0,k.jsxs)(N.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"end"},children:[(0,k.jsx)(u.ZP,{varient:"outlined",label:null!==ee?"Cancel":"Reset",onClick:function(){null!==ee&&Y(!1,!0),Q()}}),(0,k.jsx)(u.ZP,{varient:"contained",onClick:function(){return function(){if(e.isLoading)return(0,k.jsx)(b.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:null!==n?"Updating still in process":"Adding Spend in process",severity:"warning"});var t={relation:null===o||void 0===o?void 0:o.trim(),relation1:null===h||void 0===h?void 0:h.trim(),date:null===j||void 0===j?void 0:j.trim(),address:null===L||void 0===L?void 0:L.trim(),contact1:E,_id:null===R||void 0===R?void 0:R.trim(),name:null===V||void 0===V?void 0:V.trim()};null!==n?(t._id=n._id,t.usage=n.usage,e.updateData(t)):(B(!0),e.addData(t),Q())}()},disabled:function(){var t=!(null!==V&&void 0!==V&&V.length)||!(null!==o&&void 0!==o&&o.length)||"Others"===o&&!(null!==h&&void 0!==h&&h.length)||!E||!(null!==j&&void 0!==j&&j.length),a=null!==e.data&&V===(null===n||void 0===n?void 0:n.name)&&o===(null===n||void 0===n?void 0:n.relation)&&h===(null===n||void 0===n?void 0:n.relation1)&&L===(null===n||void 0===n?void 0:n.address)&&j===(null===n||void 0===n?void 0:n.date)&&E===(null===n||void 0===n?void 0:n.primaryContact);return t||a}(),label:null!==ee?"Update":"Add",isLoading:e.isLoading})]})]})})},T=JSON.parse(sessionStorage.getItem("dropdowns")).dailySpendsLabels,R=[{label:"Last 3 month",value:3},{label:"Last 6 month",value:6},{label:"Last 1 year",value:12},{label:"Last 3 years",value:36}],J=function(e){return(0,k.jsx)(D.Z,{size:15,onClick:function(){return e.currentData(e.row)}})},W=function(e){return(0,k.jsx)(S.Z,{size:15,onClick:function(){return e.setRow()}})},U=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.preventDefault();var a=s.P6.book_new(),i="Spenditure_Report.xlsx";if(t){var o=[];n[t].forEach((function(e){o.push({Month:e.seperator,Date:e.date,Label:e.label,Item:e.item,Amount:"\u20b9".concat(e.amount),Description:e.desc,"Created At":(0,C.p6)(e.updatedAt)})}));var r=s.P6.json_to_sheet(o),l=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}];r["!cols"]=l,r.A1.s={font:{sz:24,bold:!0,color:{rgb:"FFAA00"}}},s.P6.book_append_sheet(a,r,t),i="Spediture_Report-".concat(t,".xlsx")}else Object.keys(n).forEach((function(e){var t=[];n[e].forEach((function(e){t.push({Month:e.seperator,Date:e.date,Label:e.label,Item:e.item,Amount:e.amount,Description:e.desc,"Created At":(0,C.p6)(e.updatedAt)})}));var i=s.P6.json_to_sheet(t);i["!cols"]=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}],s.P6.book_append_sheet(a,i,e)}));(0,s.NC)(a,i)},V=(0,P.$j)((function(e){var n=e.reducer.dataList,t=n.expenseData,a=void 0===t?[]:t,i=n.allexpenseData,o=void 0===i?[]:i,r=n.spendLoading,l=void 0!==r&&r,s=JSON.parse(JSON.stringify(a));return s.map((function(e){var n,t=null===e||void 0===e||null===(n=e.date)||void 0===n?void 0:n.split("T");return e.date=null===t||void 0===t?void 0:t[0],e})),{allexpenseData:o,expenseData:s,spendLoading:l}}),(function(e){return{deleteData:function(n){return e(I.Id.endpoints.deleteData.initiate(n))},getExpenseData:function(n){return e(I.Id.endpoints.getData.initiate(n))},addExpenseData:function(n){return e(I.Id.endpoints.addData.initiate(n))},updateData:function(n){return e(I.Id.endpoints.updateData.initiate(n))}}}))((function(e){var n=(0,l.useState)([]),t=(0,r.Z)(n,2),s=t[0],D=t[1],S=(0,l.useState)(),L=(0,r.Z)(S,2),P=L[0],I=L[1],_=(0,l.useState)(!1),N=(0,r.Z)(_,2),O=N[0],M=N[1],F=(0,l.useState)(""),V=(0,r.Z)(F,2),G=V[0],K=V[1],$=(0,l.useState)(!1),q=(0,r.Z)($,2),B=q[0],Q=q[1],X=(0,l.useState)(null),Y=(0,r.Z)(X,2),ee=Y[0],ne=Y[1],te=(0,l.useState)(""),ae=(0,r.Z)(te,2),ie=ae[0],oe=ae[1],re=(0,l.useState)({}),le=(0,r.Z)(re,2),se=le[0],ue=le[1],de=(0,l.useState)(!1),ce=(0,r.Z)(de,2),ve=ce[0],pe=ce[1],he=[{label:"Edit",cell:function(e){return(0,k.jsx)(J,{row:e,currentData:be})}},{label:"Item",id:"item",cell:function(e){return e.item}},{label:"Description",id:"desc",cell:function(e){return e.desc}},{label:"Label",id:"label",cell:function(e){return(null===e||void 0===e?void 0:e.label1)||(null===e||void 0===e?void 0:e.label)}},{label:"Date",id:"date",cell:function(e){return(0,C.p6)(null===e||void 0===e?void 0:e.date)}},{label:"Amount",id:"amount",cell:function(e){return e.amount}},{label:"Delete",cell:function(e){return(0,k.jsx)(W,{row:e,setRow:function(){K(e),M(!0)}})}}],fe=e.spendLoading,me=e.expenseData,xe=e.allexpenseData;(0,l.useEffect)((function(){e.getExpenseData()}),[]),(0,l.useEffect)((function(){me&&Ze(me)}),[me]);var Ze=function(e){e&&e.forEach((function(n,t){if(n.date){var a=new Date(n.date),i=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),o=new Intl.DateTimeFormat("en",{month:"long"}).format(a);e[t].seperator="".concat(o,", ").concat(i)}}));var n,t=(n="seperator",e.reduce((function(e,t){return e[t[n]]||(e[t[n]]=[]),e[t[n]].push(t),e}),{}));ue(t)},je=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Q(e),!0===n&&(ne(null),oe(!0))},ge=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return pe(!0),n.prev=1,n.next=4,e.addExpenseData(t);case 4:pe(!1),b.A9,je(!1,!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),pe(!1),b.A9;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),we=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return pe(!0),n.prev=1,n.next=4,e.updateData(t);case 4:b.A9,je(!1,!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),b.A9;case 11:return n.prev=11,pe(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(e){return n.apply(this,arguments)}}(),be=function(e){e.name=e.item,e.relation=e.label,e.relation1=e.label1,e.address=e.desc,e.primaryContact=e.amount,ne(e),je(!0)};return fe?(0,k.jsx)(E.Z,{}):(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(w.Z,{handleConfirm:function(){e.deleteData(G),M(!1)},isOpen:O,closeModal:function(){return M(!1)}}),(0,k.jsx)(H,{show:B,data:ee,updateData:we,addData:ge,isLoading:ve,handleSidebar:je,addNew:ie}),(0,k.jsx)(c.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,k.jsxs)(v.ZP,{container:!0,justifyContent:"space-between",spacing:.5,children:[(0,k.jsx)(v.ZP,{item:!0,xs:5,children:(0,k.jsx)(p.Z,{variant:"outlined",onClick:function(){return je(!0,!0)},children:"Add Item"})}),(0,k.jsx)(v.ZP,{item:!0,xs:5,children:(0,k.jsx)(h.Z,{onChange:function(e){return function(e){var n=e.target.value;if(n.length){var t=(me.length?me:null!==xe&&void 0!==xe?xe:[]).filter((function(e){var t,a,i,o,r=e.desc,l=e.item,s=e.amount,u=e.label;return i=(null===r||void 0===r?void 0:r.toLowerCase().startsWith(n.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().startsWith(n.toLowerCase()))||(null===(t=toString(s))||void 0===t?void 0:t.toLowerCase().startsWith(n.toLowerCase()))||(null===u||void 0===u?void 0:u.toLowerCase().includes(n.toLowerCase())),o=(null===r||void 0===r?void 0:r.toLowerCase().includes(n.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().includes(n.toLowerCase()))||(null===(a=toString(s))||void 0===a?void 0:a.toLowerCase().includes(n.toLowerCase()))||(null===u||void 0===u?void 0:u.toLowerCase().includes(n.toLowerCase())),i||(!i&&o?o:null)}));Ze(t)}else Ze(xe)}(e)},placeholder:"Search"})}),(0,k.jsx)(v.ZP,{item:!0,xs:2,children:(0,k.jsx)(f.Z,{title:"Download",children:(0,k.jsx)(m.Z,{onClick:function(e){return U(e,se)},children:(0,k.jsx)(y,{})})})})]})}),(0,k.jsx)(x.Z,{}),(0,k.jsx)(Z.Z,{children:(0,k.jsx)(j.Z,{children:(0,k.jsxs)(v.ZP,{container:!0,rowSpacing:.01,spacing:4,alignItems:"center",children:[(0,k.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(u.gc,{isMulti:!0,id:"data-category",name:"label",value:null===s||void 0===s?void 0:s.map((function(e){var n=T.filter((function(n){return n.value===e.value}));return{value:n[0].value,label:n[0].label}})),onChange:function(e,n){return function(e){var n=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){n.push(e)})),console.log(n),D(n)}(n)},options:T,renderInput:function(e){return(0,k.jsx)(b.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Filter by label"}))}})}),(0,k.jsx)(v.ZP,{item:!0,xs:12,sm:3,children:(0,k.jsx)(u.gc,{id:"dateID",name:"date",onChange:function(e,n){return I(null===n||void 0===n?void 0:n.value)},options:R,value:(0,z.NA)(R,P),renderInput:function(e){return(0,k.jsx)(b.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Date range filter",onChange:function(e){return I(null===e||void 0===e?void 0:e.value)}}))}})}),(0,k.jsx)(v.ZP,{item:!0,xs:12,sm:3,children:(0,k.jsx)(p.Z,{variant:"outlined",onClick:function(n){e.getData({labels:s.map((function(e){return e.value})).join(","),year:P})},children:"Apply Filters"})})]})})}),Object.keys(se).map((function(e,n){var t,a=null===(t=se[e])||void 0===t?void 0:t.map((function(e){return Number(e.amount)})).reduce((function(e,n){return e+n}));return(0,k.jsx)(Z.Z,{sx:{m:1},children:(0,k.jsxs)(j.Z,{children:[(0,k.jsxs)(v.ZP,{container:!0,spacing:1,sx:{display:"flex",justifyContent:"space-around"},children:[(0,k.jsxs)(g.Z,{children:["Total Spends :",a]}),(0,k.jsx)(g.Z,{children:e}),(0,k.jsx)(A.Z,{onClick:function(n){return U(n,se,e)}})]}),(0,k.jsx)(x.Z,{}),(0,k.jsx)(b.Gn,{columns:he,rows:se[e]})]})},n+1)}))]})}))},18377:function(e,n,t){"use strict";var a=t(46095),i=t(46417);n.Z=(0,a.Z)((0,i.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},20067:function(){}}]);