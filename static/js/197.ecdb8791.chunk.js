(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[197],{34269:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var a=t(1413),o=t(74165),r=t(15861),i=t(29439),l=t(47313),s=t(48737),u=t(61474),d=t(40229),c=t(94345),v=t(71535),p=t(89870),f=t(22449),h=t(80699),m=t(68847),x=t(34940),Z=t(96900),j=t(56972),g=t(71363),w=t(31616),C=t(69125),b=t(54727),D=t(71207),S=t(35192),L=t(11610),y=t(18377),k=t(66135),P=t(45959),A=t(49205),N=t(82500),E=t(62463),I=t(8586),M=t(39653),_=t(86282),O=t(46417),R=JSON.parse(sessionStorage.getItem("dropdowns")).dailySpendsLabels,z=function(e){var n=e.data,t=(0,l.useState)(""),o=(0,i.Z)(t,2),r=o[0],s=o[1],c=(0,l.useState)("other"),p=(0,i.Z)(c,2),f=p[0],h=p[1],m=(0,l.useState)(""),Z=(0,i.Z)(m,2),j=Z[0],w=Z[1],D=(0,l.useState)(""),S=(0,i.Z)(D,2),L=S[0],y=S[1],k=(0,l.useState)(""),P=(0,i.Z)(k,2),A=P[0],z=P[1],F=(0,l.useState)(""),T=(0,i.Z)(F,2),J=T[0],W=T[1],H=(0,l.useState)(""),U=(0,i.Z)(H,2),B=U[0],G=U[1],K=(0,l.useState)(!1),V=(0,i.Z)(K,2),$=V[0],q=V[1],Q=function(){W(""),G(""),s(""),h(""),w(""),y(""),z("")};(0,l.useEffect)((function(){if(n){var e=n.id,t=n.name,a=n.relation,o=n.address,r=n.date,i=n.primaryContact;W(e),G(t),s(a),h(null===n||void 0===n?void 0:n.relation1),y(o),w(r),z(i)}n&&!$||Q(),q(!1)}),[n]);var X=function(e){var n=e.target.name,t=e.target.value;switch(n){case"item":G(t);break;case"description":y(t);break;case"date":w(t);break;case"price":t>=0&&t<=999999999999999&&z(t);break;case"relation1":h(t)}},Y=e.handleSidebar,ee=e.data,ne=e.show;return(0,O.jsx)(N.Z,{anchor:"right",open:ne,onClose:function(){},onOpen:function(){},children:(0,O.jsxs)(d.Z,{sx:{mt:10,width:350,px:2},component:"form",children:[(0,O.jsxs)(v.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,O.jsx)(g.Z,{children:null!==ee?"UPDATE SPEND DETAILS":"ADD NEW SPEND"}),(0,O.jsx)(I.Z,{size:20,onClick:function(){Y(!1,!0),Q()}})]}),(0,O.jsx)(x.Z,{}),(0,O.jsx)(M.Z,{name:"item",value:B,margin:"dense",placeholder:"Item *",onChange:X,id:"data-name"}),(0,O.jsx)(v.ZP,{item:!0,sx:{mt:1},children:(0,O.jsx)(u.gc,{id:"labelId",name:"label",value:(0,_.NA)(R,r),onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;s(n),"Others"!==n&&h("")}(n)},options:R,renderInput:function(e){return(0,O.jsx)(M.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Select Label *"}))}})}),"Others"===r&&(0,O.jsx)(M.Z,{margin:"dense",name:"relation1",value:f,placeholder:"Label Name",onChange:X,id:"data-name"}),(0,O.jsx)(M.Z,{type:"date",value:j,name:"date",margin:"dense",placeholder:"Enter Date",id:"data-name",max:"9999-12-31",min:"1900-01-01",onChange:X}),(0,O.jsx)(M.Z,{type:"number",onKeyPress:function(e){return(0,b.ZP)(e)},value:A,margin:"dense",id:"data-price",name:"price",max:999999999999999,placeholder:"Enter spend amount *",onChange:X}),(0,O.jsx)(M.Z,{type:"textarea",value:L,margin:"dense",name:"description",placeholder:"Description",id:"data-name",onChange:X}),(0,O.jsxs)(E.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"end"},children:[(0,O.jsx)(u.ZP,{varient:"outlined",label:null!==ee?"Cancel":"Reset",onClick:function(){null!==ee&&Y(!1,!0),Q()}}),(0,O.jsx)(u.ZP,{varient:"contained",onClick:function(){return function(){if(e.isLoading)return(0,O.jsx)(C.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:null!==n?"Updating still in process":"Adding Spend in process",severity:"warning"});var t={relation:null===r||void 0===r?void 0:r.trim(),relation1:null===f||void 0===f?void 0:f.trim(),date:null===j||void 0===j?void 0:j.trim(),address:null===L||void 0===L?void 0:L.trim(),contact1:A,_id:null===J||void 0===J?void 0:J.trim(),name:null===B||void 0===B?void 0:B.trim()};null!==n?(t._id=n._id,t.usage=n.usage,e.updateData(t)):(q(!0),e.addData(t),Q())}()},disabled:function(){var t=!(null!==B&&void 0!==B&&B.length)||!(null!==r&&void 0!==r&&r.length)||"Others"===r&&!(null!==f&&void 0!==f&&f.length)||!A||!(null!==j&&void 0!==j&&j.length),a=null!==e.data&&B===(null===n||void 0===n?void 0:n.name)&&r===(null===n||void 0===n?void 0:n.relation)&&f===(null===n||void 0===n?void 0:n.relation1)&&L===(null===n||void 0===n?void 0:n.address)&&j===(null===n||void 0===n?void 0:n.date)&&A===(null===n||void 0===n?void 0:n.primaryContact);return t||a}(),label:null!==ee?"Update":"Add",isLoading:e.isLoading})]})]})})},F=JSON.parse(sessionStorage.getItem("dropdowns")).dailySpendsLabels,T=[{label:"Last 3 month",value:3},{label:"Last 6 month",value:6},{label:"Last 1 year",value:12},{label:"Last 3 years",value:36}],J=function(e){return(0,O.jsx)(D.Z,{size:15,onClick:function(){return e.currentData(e.row)}})},W=function(e){return(0,O.jsx)(S.Z,{size:15,onClick:function(){return e.setRow()}})},H=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.preventDefault();var a=s.P6.book_new(),o="Spenditure_Report.xlsx";if(t){var r=[];n[t].forEach((function(e){r.push({Month:e.seperator,Date:e.date,Label:e.label,Item:e.item,Amount:"\u20b9".concat(e.amount),Description:e.desc,"Created At":(0,b.p6)(e.updatedAt)})}));var i=s.P6.json_to_sheet(r),l=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}];i["!cols"]=l,i.A1.s={font:{sz:24,bold:!0,color:{rgb:"FFAA00"}}},s.P6.book_append_sheet(a,i,t),o="Spediture_Report-".concat(t,".xlsx")}else Object.keys(n).forEach((function(e){var t=[];n[e].forEach((function(e){t.push({Month:e.seperator,Date:e.date,Label:e.label,Item:e.item,Amount:e.amount,Description:e.desc,"Created At":(0,b.p6)(e.updatedAt)})}));var o=s.P6.json_to_sheet(t);o["!cols"]=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}],s.P6.book_append_sheet(a,o,e)}));(0,s.NC)(a,o)},U=(0,k.$j)((function(e){var n=e.reducer.dataList,t=n.expenseData,a=void 0===t?[]:t,o=n.allexpenseData,r=void 0===o?[]:o,i=n.spendLoading,l=void 0!==i&&i,s=JSON.parse(JSON.stringify(a));return s.map((function(e){var n,t=null===e||void 0===e||null===(n=e.date)||void 0===n?void 0:n.split("T");return e.date=null===t||void 0===t?void 0:t[0],e})),{allexpenseData:r,expenseData:s,spendLoading:l}}),(function(e){return{deleteData:function(n){return e(A.Id.endpoints.deleteData.initiate(n))},getExpenseData:function(n){return e(A.Id.endpoints.getData.initiate(n))},addExpenseData:function(n){return e(A.Id.endpoints.addData.initiate(n))},updateData:function(n){return e(A.Id.endpoints.updateData.initiate(n))}}}))((function(e){var n=(0,l.useState)([]),t=(0,i.Z)(n,2),s=t[0],D=t[1],S=(0,l.useState)(),k=(0,i.Z)(S,2),A=k[0],N=k[1],E=(0,l.useState)(!1),I=(0,i.Z)(E,2),M=I[0],R=I[1],U=(0,l.useState)(""),B=(0,i.Z)(U,2),G=B[0],K=B[1],V=(0,l.useState)(!1),$=(0,i.Z)(V,2),q=$[0],Q=$[1],X=(0,l.useState)(null),Y=(0,i.Z)(X,2),ee=Y[0],ne=Y[1],te=(0,l.useState)(""),ae=(0,i.Z)(te,2),oe=ae[0],re=ae[1],ie=(0,l.useState)({}),le=(0,i.Z)(ie,2),se=le[0],ue=le[1],de=(0,l.useState)(!1),ce=(0,i.Z)(de,2),ve=ce[0],pe=ce[1],fe=[{label:"Edit",cell:function(e){return(0,O.jsx)(J,{row:e,currentData:Ce})}},{label:"Item",id:"item",cell:function(e){return e.item}},{label:"Description",id:"desc",cell:function(e){return e.desc}},{label:"Label",id:"label",cell:function(e){return(null===e||void 0===e?void 0:e.label1)||(null===e||void 0===e?void 0:e.label)}},{label:"Date",id:"date",cell:function(e){return(0,b.p6)(null===e||void 0===e?void 0:e.date)}},{label:"Amount",id:"amount",cell:function(e){return e.amount}},{label:"Delete",cell:function(e){return(0,O.jsx)(W,{row:e,setRow:function(){K(e),R(!0)}})}}],he=e.spendLoading,me=e.expenseData,xe=e.allexpenseData;(0,l.useEffect)((function(){e.getExpenseData()}),[]),(0,l.useEffect)((function(){me&&Ze(me)}),[me]);var Ze=function(e){e&&e.forEach((function(n,t){if(n.date){var a=new Date(n.date),o=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),r=new Intl.DateTimeFormat("en",{month:"long"}).format(a);e[t].seperator="".concat(r,", ").concat(o)}}));var n,t=(n="seperator",e.reduce((function(e,t){return e[t[n]]||(e[t[n]]=[]),e[t[n]].push(t),e}),{}));ue(t)},je=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Q(e),!0===n&&(ne(null),re(!0))},ge=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(t){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return pe(!0),n.prev=1,n.next=4,e.addExpenseData(t);case 4:pe(!1),C.A9,je(!1,!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),pe(!1),C.A9;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),we=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(t){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return pe(!0),n.prev=1,n.next=4,e.updateData(t);case 4:C.A9,je(!1,!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),C.A9;case 11:return n.prev=11,pe(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(e){return n.apply(this,arguments)}}(),Ce=function(e){e.name=e.item,e.relation=e.label,e.relation1=e.label1,e.address=e.desc,e.primaryContact=e.amount,ne(e),je(!0)};return he?(0,O.jsx)(P.Z,{}):(0,O.jsxs)(d.Z,{children:[(0,O.jsx)(w.Z,{handleConfirm:function(){e.deleteData(G),R(!1)},isOpen:M,closeModal:function(){return R(!1)}}),(0,O.jsx)(z,{show:q,data:ee,updateData:we,addData:ge,isLoading:ve,handleSidebar:je,addNew:oe}),(0,O.jsx)(c.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,O.jsxs)(v.ZP,{container:!0,justifyContent:"space-between",spacing:.5,children:[(0,O.jsx)(v.ZP,{item:!0,xs:5,children:(0,O.jsx)(p.Z,{variant:"outlined",onClick:function(){return je(!0,!0)},children:"Add Item"})}),(0,O.jsx)(v.ZP,{item:!0,xs:5,children:(0,O.jsx)(f.Z,{onChange:function(e){return function(e){var n=e.target.value;if(n.length){var t=(me.length?me:null!==xe&&void 0!==xe?xe:[]).filter((function(e){var t,a,o,r,i=e.desc,l=e.item,s=e.amount,u=e.label;return o=(null===i||void 0===i?void 0:i.toLowerCase().startsWith(n.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().startsWith(n.toLowerCase()))||(null===(t=toString(s))||void 0===t?void 0:t.toLowerCase().startsWith(n.toLowerCase()))||(null===u||void 0===u?void 0:u.toLowerCase().includes(n.toLowerCase())),r=(null===i||void 0===i?void 0:i.toLowerCase().includes(n.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().includes(n.toLowerCase()))||(null===(a=toString(s))||void 0===a?void 0:a.toLowerCase().includes(n.toLowerCase()))||(null===u||void 0===u?void 0:u.toLowerCase().includes(n.toLowerCase())),o||(!o&&r?r:null)}));Ze(t)}else Ze(xe)}(e)},placeholder:"Search"})}),(0,O.jsx)(v.ZP,{item:!0,xs:2,children:(0,O.jsx)(h.Z,{title:"Download",children:(0,O.jsx)(m.Z,{onClick:function(e){return H(e,se)},children:(0,O.jsx)(L.Z,{})})})})]})}),(0,O.jsx)(x.Z,{}),(0,O.jsx)(Z.Z,{children:(0,O.jsx)(j.Z,{children:(0,O.jsxs)(v.ZP,{container:!0,spacing:4,alignItems:"center",children:[(0,O.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,O.jsx)(u.gc,{isMulti:!0,id:"data-category",name:"label",value:null===s||void 0===s?void 0:s.map((function(e){var n=F.filter((function(n){return n.value===e.value}));return{value:n[0].value,label:n[0].label}})),onChange:function(e,n){return function(e){var n=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){n.push(e)})),console.log(n),D(n)}(n)},options:F,renderInput:function(e){return(0,O.jsx)(C.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Filter by label"}))}})}),(0,O.jsx)(v.ZP,{item:!0,xs:12,sm:3,children:(0,O.jsx)(u.gc,{id:"dateID",name:"date",onChange:function(e,n){return N(null===n||void 0===n?void 0:n.value)},options:T,value:(0,_.NA)(T,A),renderInput:function(e){return(0,O.jsx)(C.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Date range filter",onChange:function(e){return N(null===e||void 0===e?void 0:e.value)}}))}})}),(0,O.jsx)(v.ZP,{item:!0,xs:12,sm:3,children:(0,O.jsx)(p.Z,{variant:"outlined",onClick:function(n){e.getData({labels:s.map((function(e){return e.value})).join(","),year:A})},children:"Apply Filters"})})]})})}),Object.keys(se).map((function(e,n){var t,a=null===(t=se[e])||void 0===t?void 0:t.map((function(e){return Number(e.amount)})).reduce((function(e,n){return e+n}));return(0,O.jsx)(Z.Z,{sx:{m:1},children:(0,O.jsxs)(j.Z,{children:[(0,O.jsxs)(v.ZP,{container:!0,spacing:1,sx:{display:"flex",justifyContent:"space-around"},children:[(0,O.jsxs)(g.Z,{children:["Total Spends :",a]}),(0,O.jsx)(g.Z,{children:e}),(0,O.jsx)(y.Z,{onClick:function(n){return H(n,se,e)}})]}),(0,O.jsx)(x.Z,{}),(0,O.jsx)(C.Gn,{columns:fe,rows:se[e]})]})},n+1)}))]})}))},18377:function(e,n,t){"use strict";var a=t(46095),o=t(46417);n.Z=(0,a.Z)((0,o.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},56972:function(e,n,t){"use strict";var a=t(87462),o=t(63366),r=t(47313),i=t(83061),l=t(21921),s=t(64164),u=t(11236),d=t(65269),c=t(46417),v=["className","component"],p=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=r.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCardContent"}),r=t.className,s=t.component,f=void 0===s?"div":s,h=(0,o.Z)(t,v),m=(0,a.Z)({},t,{component:f}),x=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},d.N,n)}(m);return(0,c.jsx)(p,(0,a.Z)({as:f,className:(0,i.default)(x.root,r),ownerState:m,ref:n},h))}));n.Z=f},65269:function(e,n,t){"use strict";t.d(n,{N:function(){return o}});var a=t(32298);function o(e){return(0,a.Z)("MuiCardContent",e)}var r=(0,t(77430).Z)("MuiCardContent",["root"]);n.Z=r},96900:function(e,n,t){"use strict";var a=t(87462),o=t(63366),r=t(47313),i=t(83061),l=t(21921),s=t(64164),u=t(11236),d=t(54295),c=t(74604),v=t(46417),p=["className","raised"],f=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),h=r.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCard"}),r=t.className,s=t.raised,d=void 0!==s&&s,h=(0,o.Z)(t,p),m=(0,a.Z)({},t,{raised:d}),x=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},c.y,n)}(m);return(0,v.jsx)(f,(0,a.Z)({className:(0,i.default)(x.root,r),elevation:d?8:void 0,ref:n,ownerState:m},h))}));n.Z=h},74604:function(e,n,t){"use strict";t.d(n,{y:function(){return o}});var a=t(32298);function o(e){return(0,a.Z)("MuiCard",e)}var r=(0,t(77430).Z)("MuiCard",["root"]);n.Z=r},20067:function(){}}]);