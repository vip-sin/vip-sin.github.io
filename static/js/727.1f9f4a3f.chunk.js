(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[727],{51427:function(e,t,n){"use strict";n.d(t,{EL:function(){return v},cm:function(){return h},is:function(){return f},qi:function(){return d}});var a=n(74165),i=n(15861),r=n(31881),o=n.n(r),l=n(58470),c=n(97729),s=n(46417),u=JSON.parse(sessionStorage.getItem("logInUserData")),d=function(e){var t=e.user,n=e.token;return function(){var e=(0,i.Z)((0,a.Z)().mark((function e(i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i({type:"GET_ALL_DOCS_LOADING",data:!0}),o().get("/backendapi/documents/".concat(null===t||void 0===t?void 0:t._id),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){i({type:"GET_ALL_DOCS_LOADING",data:!1});for(var t=e.data,n=0;n<t.length;n+=1)t[n].desc=(0,c.Y)(t[n].desc),t[n].id=n+1,t[n].expiry=(0,c.Y)(t[n].expiry),t[n].alias=(0,c.Y)(t[n].alias);i({type:"GET_ALL_DOCS",resp:t})})).catch((function(e){i({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,o().post("/backendapi/users/get",{id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(t({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var n=e.data[0];t({type:"GET_USER_ALL_DATA",data:n})}})).catch((function(e){t({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},v=function(e){return function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().post("/backendapi/update/secrets",{secrets:e,_id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,s.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},10226:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(1413),i=n(93433),r=n(29439),o=n(47313),l=n(40229),c=n(82500),s=n(71535),u=n(71363),d=n(34940),f=n(89870),h=n(62463),v=n(39653),p=n(8586),m=n(46095),Z=n(46417),x=(0,m.Z)((0,Z.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),g=n(71207),j=n(54727),S=n(61474),D=n(85120),C=n(58470),w=n(86282),k=n(7081),b=n(5448),y=n(88356);function A(e){var t=e.modal,n=e.toggleModal,i=e.fname,r=e.setfname,o=e.ftype,l=e.setftype,c=e.editID,s=e.clearCustomField,u=e.handleSecrets,d=e.secrets;return(0,Z.jsxs)(k.Z,{open:t,fullWidth:!0,maxWidth:"xs",onClose:n,children:[(0,Z.jsx)(b.Z,{children:"Add a secret question"}),(0,Z.jsxs)(y.Z,{children:[(0,Z.jsx)(S.gc,{name:"relation",options:function(){var e=w.DD.filter((function(e){var t,n,a;return e.value!==(null===d||void 0===d||null===(t=d[0])||void 0===t?void 0:t.question)&&e.value!==(null===d||void 0===d||null===(n=d[1])||void 0===n?void 0:n.question)&&e.value!==(null===d||void 0===d||null===(a=d[2])||void 0===a?void 0:a.question)}));return console.log("temp",e,d),e}(),onChange:function(e,t){return function(e){var t=null===e||void 0===e?void 0:e.value;r(t)}(t)},value:(0,w.NA)(w.DD,i),renderInput:function(e){return(0,Z.jsx)(v.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:" Secret Question"}))}}),(0,Z.jsx)(v.Z,{type:"text",name:"Answer",margin:"normal",size:"small",fullWidth:!0,value:o,placeholder:"Answer",onChange:function(e){l(e.target.value)}}),(0,Z.jsxs)(h.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"start"},children:[(0,Z.jsx)(S.ZP,{varient:"outlined",label:"Cancel",onClick:function(e){s()}}),(0,Z.jsx)(S.ZP,{varient:"contained",label:c?"Update":"Add",disabled:!(null!==i&&void 0!==i&&i.length)||""===o.trim(),onClick:u})]})]})]})}var _=n(75969),L=n(95716),E=JSON.parse(sessionStorage.getItem("dropdowns")).nomineeRelation;function N(e){var t=(0,o.useState)(),n=(0,r.Z)(t,2),m=n[0],k=n[1],b=(0,o.useState)(""),y=(0,r.Z)(b,2),N=y[0],I=y[1],R=(0,o.useState)(""),O=(0,r.Z)(R,2),P=O[0],z=O[1],T=(0,o.useState)(""),M=(0,r.Z)(T,2),G=M[0],F=M[1],U=(0,o.useState)(""),V=(0,r.Z)(U,2),q=V[0],B=V[1],W=(0,o.useState)(!0),H=(0,r.Z)(W,2),Y=H[0],$=H[1],J=(0,o.useState)(""),K=(0,r.Z)(J,2),Q=K[0],X=K[1],ee=(0,o.useState)(""),te=(0,r.Z)(ee,2),ne=te[0],ae=te[1],ie=(0,o.useState)(""),re=(0,r.Z)(ie,2),oe=re[0],le=re[1],ce=(0,o.useState)(!1),se=(0,r.Z)(ce,2),ue=se[0],de=se[1],fe=(0,o.useState)(""),he=(0,r.Z)(fe,2),ve=he[0],pe=he[1],me=(0,o.useState)(""),Ze=(0,r.Z)(me,2),xe=Ze[0],ge=Ze[1],je=(0,o.useState)(""),Se=(0,r.Z)(je,2),De=Se[0],Ce=Se[1],we=(0,o.useState)(""),ke=(0,r.Z)(we,2),be=ke[0],ye=ke[1],Ae=(0,o.useState)(""),_e=(0,r.Z)(Ae,2),Le=_e[0],Ee=_e[1],Ne=(0,o.useState)(""),Ie=(0,r.Z)(Ne,2),Re=Ie[0],Oe=Ie[1],Pe=(0,o.useState)(""),ze=(0,r.Z)(Pe,2),Te=ze[0],Me=ze[1],Ge=(0,o.useState)(""),Fe=(0,r.Z)(Ge,2),Ue=Fe[0],Ve=Fe[1],qe=(0,o.useState)([]),Be=(0,r.Z)(qe,2),We=Be[0],He=Be[1],Ye=(0,o.useState)(!1),$e=(0,r.Z)(Ye,2),Je=$e[0],Ke=$e[1],Qe=(0,o.useState)(""),Xe=(0,r.Z)(Qe,2),et=Xe[0],tt=Xe[1],nt=function(){Me(""),Ve(""),Ke(!Je)},at=function(){Je&&nt(),Ke(!Je)};(0,o.useEffect)((function(){if(e.data){var t=e.data,n=t.id,a=t.name,r=t.relation,o=t.relation1,l=t.address,c=t.email,s=t.primaryContact,u=t.secondaryContact,d=e.data.secrets;ft(),ae(n),le(a),k(r),"Others"===r&&I(o),F(l),z(c),B(s),X(u),(null===d||void 0===d?void 0:d.length)&&He((0,i.Z)(d))}else(null===e.data||ue)&&(dt(),ft());de(!1)}),[e.data]);var it=function(){return Oe("Enter Valid Name")},rt=function(){return Ce("Enter Valid Email")},ot=function(){return ye("Enter Valid Contact No.")},lt=function(){return ge("Enter Valid Relation")},ct=function(){return pe("Enter Valid Relation")},st=function(e){var t,n=e.target.name,a=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value;switch(n){case"name":le(a),null!==a&&void 0!==a&&a.length&&a.trim()?Oe(""):it();break;case"email":z(a);var i=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&i&&a.trim()?Ce(""):rt();break;case"address":F(a);break;case"phone":B(a),Y&&X(a),null!==a&&void 0!==a&&a.length&&10===a.length&&a.trim()&&j.Yd.test(a)?ye(""):ot();break;case"phoneC":X(a),10===a.length&&a.trim()&&j.Yd.test(a)?Ee(""):Ee("Enter Valid whatsapp No."),(null===a||void 0===a||!a.length)&&Ee("");break;case"relation":null!==a&&void 0!==a&&a.length&&a.trim()?ge(""):lt();break;case"relation1":I(a),null!==a&&void 0!==a&&a.length&&a.trim()?pe(""):ct()}},ut=function(){console.log("das");var t=((null===oe||void 0===oe||!oe.length)&&it(),(null===P||void 0===P||!P.length)&&rt(),(null===q||void 0===q||!q.length)&&ot(),(null===m||void 0===m||!m.length)&&lt(),"Others"===m&&(null===N||void 0===N||!N.length)&&ct(),"Others"!==m&&pe(""),Re||!(null!==oe&&void 0!==oe&&oe.length)||xe||!(null!==m&&void 0!==m&&m.length)||ve||"Others"===m&&!(null!==N&&void 0!==N&&N.length)||De||!(null!==P&&void 0!==P&&P.length)||be||!(null!==q&&void 0!==q&&q.length)||Le);if(t&&C.A9,t)console.log(t,"inValid");else if(e.isLoading&&(C.A9,e.data),!e.isLoading){var n={relation:null===m||void 0===m?void 0:m.trim(),relation1:null===N||void 0===N?void 0:N.trim(),email:null===P||void 0===P?void 0:P.trim(),address:null===G||void 0===G?void 0:G.trim(),contact1:null===q||void 0===q?void 0:q.trim(),contact2:null===Q||void 0===Q?void 0:Q.trim(),id:null===ne||void 0===ne?void 0:ne.trim(),name:null===oe||void 0===oe?void 0:oe.trim(),secrets:We};null!==e.data?(n._id=e.data._id,n.usage=e.data.usage,e.updateData(n)):(de(!0),e.addData(n),dt(),ft())}},dt=function(){le(""),He([]),k(""),I(""),z(""),F(""),B(""),X("")},ft=function(){Oe(""),ye(""),Ee(""),Ce(""),pe("")},ht=e.handleSidebar,vt=e.show,pt=e.data;return(0,Z.jsx)(c.Z,{anchor:"right",open:vt,children:(0,Z.jsxs)(l.Z,{sx:{mt:10,width:350,px:2},component:"form",children:[(0,Z.jsxs)(s.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,Z.jsx)(u.Z,{children:null!==pt?"UPDATE NOMINEE":"ADD NEW NOMINEE"}),(0,Z.jsx)(p.Z,{size:20,onClick:function(){ht(!1,!0),dt(),ft()}})]}),(0,Z.jsx)(d.Z,{}),(0,Z.jsx)(v.Z,{name:"name",value:oe,margin:"dense",invalid:!!Re,placeholder:"Name*",onChange:st,id:"data-name"}),(0,Z.jsx)(s.ZP,{item:!0,sx:{mt:1},children:(0,Z.jsx)(S.gc,{id:"relationID",name:"relation",onChange:function(e,t){return function(e){var t=null===e||void 0===e?void 0:e.value;k(t),"Others"!==t&&(pe(""),I("")),null!==t&&void 0!==t&&t.length&&t.trim()&&ge("")}(t)},options:E,value:(0,w.NA)(E,m),renderInput:function(e){return(0,Z.jsx)(v.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Relation*"}))}})}),"Others"===m&&(0,Z.jsx)(v.Z,{margin:"dense",name:"relation1",value:N,invalid:!!ve,placeholder:"Relation Name*",onChange:st,id:"data-Relation",style:{borderColor:ve?"red":""}}),(0,Z.jsx)(v.Z,{type:"email",name:"email",margin:"dense",value:P,invalid:!!De,placeholder:"Email*",onChange:st,id:"data-email"}),(0,Z.jsx)(v.Z,{type:"tel",maxLength:10,margin:"dense",value:q,invalid:!!be,name:"phone",onChange:st,onKeyPress:function(e){return(0,j.ZP)(e)},id:"data-price1",placeholder:"Contact No.*"}),(0,Z.jsx)(_.Z,{sx:{margin:0},control:(0,Z.jsx)(L.Z,{sx:{padding:0},color:"secondary",name:"whatsapp",size:"small",checked:null!==pt?Q===q:Y,onChange:function(){return X(Y?"":q),void $(!Y)}}),label:(0,Z.jsx)(u.Z,{fontSize:"15px",children:"Whatsapp same as Contact"})}),(0,Z.jsx)(v.Z,{type:"tel",maxLength:10,margin:"dense",value:q,name:"phoneC",invalid:!!Le,disabled:null!==pt?Q===q:Y,onChange:st,onKeyPress:function(e){return(0,j.ZP)(e)},id:"data-price",placeholder:"WhatsApp"}),(0,Z.jsx)(v.Z,{type:"textarea",value:G,margin:"dense",name:"address",placeholder:"Address",onChange:function(e){return st(e)},id:"data-Address",multiline:!0}),(0,Z.jsx)("div",{children:We.map((function(e){return(0,Z.jsx)(l.Z,{children:(0,Z.jsxs)(u.Z,{children:["".concat(e.id," ").concat(e.question)," ",(0,Z.jsx)(x,{size:"10",onClick:function(){return function(e){var t,n=(0,i.Z)(We);n=n.filter((function(t){return t.id!==e})),null!==(t=n)&&void 0!==t&&t.length&&n.forEach((function(e,t){e.id=t+1})),He((0,i.Z)(n))}(e.id)}}),(0,Z.jsx)(g.Z,{size:"10",onClick:function(){return function(e){tt(e),Ke(!0),We.forEach((function(t){t.id===e&&(Ve(t.answer),Me(t.question))}))}(e.id)}})]})},e.id)}))}),(null===We||void 0===We?void 0:We.length)<3&&(0,Z.jsx)(f.Z,{disabled:3===(null===We||void 0===We?void 0:We.length),onClick:at,children:"Add Secret Questions"}),(0,Z.jsxs)(h.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"end"},children:[(0,Z.jsx)(S.ZP,{varient:"outlined",label:null!==pt?"Cancel":"Reset",onClick:function(){null!==pt&&ht(!1,!0),dt(),ft()}}),(0,Z.jsx)(S.ZP,{onClick:function(){return ut()},disabled:!(null!==We&&void 0!==We&&We.length),label:null!==pt?e.isLoading?(0,Z.jsx)(D.Z,{}):"Update":e.isLoading?(0,Z.jsx)(D.Z,{}):"Add"})]}),(0,Z.jsx)(A,{modal:Je,secrets:We,toggleModal:at,fname:Te,setfname:Me,ftype:Ue,setftype:Ve,editID:et,clearCustomField:nt,handleSecrets:function(){if(et){var e=(0,i.Z)(We),t=e.findIndex((function(e){return e.id===et}));e[t].question=Te,e[t].answer=Ue,He((0,i.Z)(e)),tt("")}else{var n=(0,i.Z)(We);n.push({id:(null===n||void 0===n?void 0:n.length)+1,question:Te,answer:Ue}),He((0,i.Z)(n))}Ke(!1),Me(""),Ve("")}})]})})}},50398:function(e,t,n){"use strict";n.r(t);var a=n(74165),i=n(15861),r=n(29439),o=n(47313),l=n(6938),c=n(40229),s=n(94345),u=n(71535),d=n(89870),f=n(22449),h=n(80699),v=n(68847),p=n(34940),m=n(48737),Z=n(31616),x=n(58470),g=n(35192),j=n(71207),S=n(11610),D=n(66135),C=n(10226),w=n(36936),k=n(51427),b=n(46417),y=function(e){return(0,b.jsx)(g.Z,{onClick:function(){var t;return!(null!==(t=e.row.usage)&&void 0!==t&&t.length)&&e.setRow()}})},A=function(e){return(0,b.jsx)(j.Z,{onClick:function(){return e.currentData(e.row)}})};t.default=(0,D.$j)((function(e){var t=e.reducer.dataList,n=void 0===t?{}:t;return{dataList:n,listLoading:n.totalRecordsLoading,filteredData:n.filteredData}}),(function(e){return{deleteData:function(t){return e(w.SD.endpoints.deleteData.initiate(t))},updateData:function(t){return e(w.SD.endpoints.updateData.initiate(t))},addData:function(t){return e(w.SD.endpoints.addData.initiate(t))},getData:function(t){return e(w.SD.endpoints.getData.initiate(t))},filterData:function(t){return e((0,k.cm)(t))},dataTest:function(){return e({type:"GET_ALL_DATA_LOADING",data:!0})}}}))((function(e){var t=[{label:"Name",numeric:!1,id:"name",cell:function(e){return(0,b.jsx)("p",{title:e.name,children:e.name})}},{label:"Relation",numeric:!1,id:"relation",cell:function(e){return(0,b.jsx)("p",{title:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation),children:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation)})}},{label:"Contact",numeric:!1,id:"primaryContact",cell:function(e){return(0,b.jsx)("p",{title:e.primaryContact,children:e.primaryContact})}},{label:"Email",numeric:!1,id:"email",cell:function(e){return(0,b.jsx)("p",{title:e.email,children:e.email})}},{label:"Status",numeric:!1,id:"unused",cell:function(e){var t;return null!==(t=e.usage)&&void 0!==t&&t.length?(0,b.jsx)(l.Z,{label:"Used",color:"primary",sx:{width:"80px"}}):(0,b.jsx)(l.Z,{label:"Unused",sx:{width:"80px"}})}},{label:"Edit",numeric:!1,cell:function(e){return(0,b.jsx)(A,{row:e,currentData:he})}},{label:"Trash",cell:function(e){return(0,b.jsx)(y,{row:e,setRow:function(){T(!0),R(e)},deleteRow:ue})}}],n=(0,o.useState)({}),g=(0,r.Z)(n,2),j=g[0],D=g[1],w=(0,o.useState)([]),k=(0,r.Z)(w,2),_=k[0],L=k[1],E=(0,o.useState)(null),N=(0,r.Z)(E,2),I=N[0],R=N[1],O=(0,o.useState)(!1),P=(0,r.Z)(O,2),z=P[0],T=P[1],M=(0,o.useState)([]),G=(0,r.Z)(M,2),F=G[0],U=G[1],V=(0,o.useState)(""),q=(0,r.Z)(V,2),B=q[0],W=q[1],H=(0,o.useState)(!1),Y=(0,r.Z)(H,2),$=Y[0],J=Y[1],K=(0,o.useState)(null),Q=(0,r.Z)(K,2),X=Q[0],ee=Q[1],te=(0,o.useState)(""),ne=(0,r.Z)(te,2),ae=ne[0],ie=ne[1],re=(0,o.useState)(!1),oe=(0,r.Z)(re,2),le=oe[0],ce=oe[1];(0,o.useEffect)((function(){var t,n;if(null!==(t=e.dataList)&&void 0!==t&&t.allData){var a=e.dataList.allData;a&&a.forEach((function(e,t){if(e.date){var n=new Date(e.date),i=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),r=new Intl.DateTimeFormat("en",{month:"long"}).format(n);a[t].seperator="".concat(r,", ").concat(i)}}));var i=(n="seperator",a.reduce((function(e,t){return e[t[n]]||(e[t[n]]=[]),e[t[n]].push(t),e}),{}));D(i)}L(e.dataList.data),U(e.dataList.filteredData)}),[e.dataList]),(0,o.useEffect)((function(){var t;e.filteredData&&(null===(t=e.filteredData)||void 0===t?void 0:t.length)>0&&(L(e.filteredData),U(e.filteredData))}),[e.filteredData]),(0,o.useEffect)((function(){e.getData()}),[]);var se=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];J(e),!0===t&&(ee(null),ie(t))},ue=function(t){e.deleteData(t)},de=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ce(!0),t.prev=1,t.next=4,e.addData(n);case 4:ce(!1),se(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),ce(!1),x.A9;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),fe=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n.name&&""!==n.relation&&""!==n.email&&""!==n.contact1){t.next=4;break}return t.abrupt("return",(0,b.jsx)(x.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Please Fill All Mandatory Details",severity:"error"}));case 4:return ce(!0),t.prev=5,t.next=8,e.updateData(n);case 8:ce(!1),se(!1,!0),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),ce(!1);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),he=function(e){ee(e),se(!0)};return(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(Z.Z,{handleConfirm:function(){ue(I),T(!1)},isOpen:z,closeModal:function(){return T(!1)}}),(0,b.jsx)(s.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,b.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",spacing:2,children:[(0,b.jsx)(u.ZP,{item:!0,children:(0,b.jsx)(d.Z,{variant:"outlined",onClick:function(){return se(!0,!0)},children:"Add Nominee"})}),(0,b.jsx)(u.ZP,{item:!0,children:(0,b.jsx)(f.Z,{onChange:function(t){return function(t){W(t.target.value),e.filterData(t.target.value)}(t)},placeholder:"Search"})}),(0,b.jsx)(u.ZP,{item:!0,children:(0,b.jsx)(h.Z,{title:"Download",onClick:function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.preventDefault();var a=m.P6.book_new(),i="NomineeList.xlsx";if(n){var r=[];t[n].forEach((function(e){r.push({Month:e.seperator,Date:e.date,Label:e.label,Item:e.item,Amount:"\u20b9".concat(e.amount),Description:e.desc})}));var o=m.P6.json_to_sheet(r),l=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}];o["!cols"]=l,o.A1.s={font:{sz:24,bold:!0,color:{rgb:"FFAA00"}}},console.log(o),m.P6.book_append_sheet(a,o,n),i="Spediture_Report-".concat(n,".xlsx")}else Object.keys(t).forEach((function(e){var n=[];t[e].forEach((function(e){n.push({Name:e.name,Relation:e.relation1||e.relation,Email:e.email,"Contact No.":e.primaryContact,"Whatsapp No.":e.secondaryContact,Address:e.address})}));var i=m.P6.json_to_sheet(n);i["!cols"]=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}],m.P6.book_append_sheet(a,i,e)}));(0,m.NC)(a,i)}(e,j)},children:(0,b.jsx)(v.Z,{children:(0,b.jsx)(S.Z,{})})})})]})}),(0,b.jsx)(p.Z,{}),e.listLoading?(0,b.jsx)(x.$j,{}):(0,b.jsx)(x.Gn,{columns:t,rows:B.length?F:_}),(0,b.jsx)(C.Z,{show:$,data:X,updateData:fe,addData:de,isLoading:le,handleSidebar:se,addNew:ae})]})}))},95716:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(4942),i=n(63366),r=n(87462),o=n(47313),l=n(21921),c=n(17551),s=n(45359),u=n(46095),d=n(46417),f=(0,u.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),v=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(28170),m=n(11236),Z=n(64164),x=n(42035),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],j=(0,Z.ZP)(s.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,p.Z)(n.color))]]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,r.Z)({color:(n.vars||n).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===i.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,c.Fq)("default"===i.color?n.palette.action.active:n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},(0,a.Z)(t,"&.".concat(x.Z.checked,", &.").concat(x.Z.indeterminate),{color:(n.vars||n).palette[i.color].main}),(0,a.Z)(t,"&.".concat(x.Z.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),S=(0,d.jsx)(h,{}),D=(0,d.jsx)(f,{}),C=(0,d.jsx)(v,{}),w=o.forwardRef((function(e,t){var n,a,c=(0,m.Z)({props:e,name:"MuiCheckbox"}),s=c.checkedIcon,u=void 0===s?S:s,f=c.color,h=void 0===f?"primary":f,v=c.icon,Z=void 0===v?D:v,w=c.indeterminate,k=void 0!==w&&w,b=c.indeterminateIcon,y=void 0===b?C:b,A=c.inputProps,_=c.size,L=void 0===_?"medium":_,E=(0,i.Z)(c,g),N=k?y:Z,I=k?y:u,R=(0,r.Z)({},c,{color:h,indeterminate:k,size:L}),O=function(e){var t=e.classes,n=e.indeterminate,a=e.color,i={root:["root",n&&"indeterminate","color".concat((0,p.Z)(a))]},o=(0,l.Z)(i,x.y,t);return(0,r.Z)({},t,o)}(R);return(0,d.jsx)(j,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":k},A),icon:o.cloneElement(N,{fontSize:null!=(n=N.props.fontSize)?n:L}),checkedIcon:o.cloneElement(I,{fontSize:null!=(a=I.props.fontSize)?a:L}),ownerState:R,ref:t},E,{classes:O}))}))},42035:function(e,t,n){"use strict";n.d(t,{y:function(){return i}});var a=n(32298);function i(e){return(0,a.Z)("MuiCheckbox",e)}var r=(0,n(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);t.Z=r},5448:function(e,t,n){"use strict";var a=n(87462),i=n(63366),r=n(47313),o=n(83061),l=n(21921),c=n(71363),s=n(64164),u=n(11236),d=n(19838),f=n(11954),h=n(46417),v=["className","id"],p=(0,s.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),m=r.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiDialogTitle"}),c=n.className,s=n.id,m=(0,i.Z)(n,v),Z=n,x=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},d.a,t)}(Z),g=r.useContext(f.Z).titleId,j=void 0===g?s:g;return(0,h.jsx)(p,(0,a.Z)({component:"h2",className:(0,o.default)(x.root,c),ownerState:Z,ref:t,variant:"h6",id:j},m))}));t.Z=m},20067:function(){}}]);