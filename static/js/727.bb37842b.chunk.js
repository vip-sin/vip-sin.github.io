(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[727],{51427:function(e,t,n){"use strict";n.d(t,{EL:function(){return p},cm:function(){return v},is:function(){return f},qi:function(){return d}});var a=n(74165),r=n(15861),i=n(31881),o=n.n(i),l=n(12613),u=n(97729),c=n(46417),s=JSON.parse(sessionStorage.getItem("logInUserData")),d=function(e){var t=e.user,n=e.token;return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:"GET_ALL_DOCS_LOADING",data:!0}),o().get("/backendapi/documents/".concat(null===t||void 0===t?void 0:t._id),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){r({type:"GET_ALL_DOCS_LOADING",data:!1});for(var t=e.data,n=0;n<t.length;n+=1)t[n].desc=(0,u.Y)(t[n].desc),t[n].id=n+1,t[n].expiry=(0,u.Y)(t[n].expiry),t[n].alias=(0,u.Y)(t[n].alias);r({type:"GET_ALL_DOCS",resp:t})})).catch((function(e){r({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,o().post("/backendapi/users/get",{id:s._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(t({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var n=e.data[0];t({type:"GET_USER_ALL_DATA",data:n})}})).catch((function(e){t({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},p=function(e){return function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().post("/backendapi/update/secrets",{secrets:e,_id:s._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,c.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},10226:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var a=n(1413),r=n(93433),i=n(29439),o=n(47313),l=n(40229),u=n(82500),c=n(71535),s=n(71363),d=n(34940),f=n(89870),v=n(62463),p=n(39653),h=n(8586),m=n(46095),Z=n(46417),x=(0,m.Z)((0,Z.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),g=n(71207),j=n(54727),S=n(61474),D=n(85120),C=n(12613),k=n(86282),y=n(7081),A=n(5448),b=n(88356);function w(e){var t=e.modal,n=e.toggleModal,r=e.fname,i=e.setfname,o=e.ftype,l=e.setftype,u=e.editID,c=e.clearCustomField,s=e.handleSecrets,d=e.secrets;return(0,Z.jsxs)(y.Z,{open:t,fullWidth:!0,maxWidth:"xs",onClose:n,children:[(0,Z.jsx)(A.Z,{children:"Add a secret question"}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(S.gc,{name:"relation",options:k.DD.filter((function(e){var t,n,a;return e.value!==(null===d||void 0===d||null===(t=d[0])||void 0===t?void 0:t.question)&&e.value!==(null===d||void 0===d||null===(n=d[1])||void 0===n?void 0:n.question)&&e.value!==(null===d||void 0===d||null===(a=d[2])||void 0===a?void 0:a.question)})),onChange:function(e,t){return function(e){var t=null===e||void 0===e?void 0:e.value;i(t)}(t)},value:(0,k.NA)(k.DD,r),renderInput:function(e){return(0,Z.jsx)(p.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:" Secret Question"}))}}),(0,Z.jsx)(p.Z,{type:"text",name:"Answer",margin:"normal",size:"small",fullWidth:!0,error:!!((null===o||void 0===o?void 0:o.length)<4),value:o,placeholder:"Answer",onChange:function(e){l(e.target.value)}}),(0,Z.jsxs)(v.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"start"},children:[(0,Z.jsx)(S.ZP,{varient:"outlined",label:"Cancel",onClick:function(e){c()}}),(0,Z.jsx)(S.ZP,{varient:"contained",label:u?"Update":"Add",disabled:!(null!==r&&void 0!==r&&r.length)||""===o.trim(),onClick:s})]})]})]})}var L=n(75969),E=n(95716),_=JSON.parse(sessionStorage.getItem("dropdowns")).nomineeRelation;function I(e){var t=(0,o.useState)(),n=(0,i.Z)(t,2),m=n[0],y=n[1],A=(0,o.useState)(""),b=(0,i.Z)(A,2),I=b[0],N=b[1],O=(0,o.useState)(""),R=(0,i.Z)(O,2),z=R[0],P=R[1],T=(0,o.useState)(""),M=(0,i.Z)(T,2),G=M[0],U=M[1],V=(0,o.useState)(""),q=(0,i.Z)(V,2),F=q[0],B=q[1],W=(0,o.useState)(!0),H=(0,i.Z)(W,2),Y=H[0],K=H[1],$=(0,o.useState)(""),J=(0,i.Z)($,2),Q=J[0],X=J[1],ee=(0,o.useState)(""),te=(0,i.Z)(ee,2),ne=te[0],ae=te[1],re=(0,o.useState)(""),ie=(0,i.Z)(re,2),oe=ie[0],le=ie[1],ue=(0,o.useState)(!1),ce=(0,i.Z)(ue,2),se=ce[0],de=ce[1],fe=(0,o.useState)(""),ve=(0,i.Z)(fe,2),pe=ve[0],he=ve[1],me=(0,o.useState)(""),Ze=(0,i.Z)(me,2),xe=Ze[0],ge=Ze[1],je=(0,o.useState)(""),Se=(0,i.Z)(je,2),De=Se[0],Ce=Se[1],ke=(0,o.useState)(""),ye=(0,i.Z)(ke,2),Ae=ye[0],be=ye[1],we=(0,o.useState)(""),Le=(0,i.Z)(we,2),Ee=Le[0],_e=Le[1],Ie=(0,o.useState)(""),Ne=(0,i.Z)(Ie,2),Oe=Ne[0],Re=Ne[1],ze=(0,o.useState)(""),Pe=(0,i.Z)(ze,2),Te=Pe[0],Me=Pe[1],Ge=(0,o.useState)(""),Ue=(0,i.Z)(Ge,2),Ve=Ue[0],qe=Ue[1],Fe=(0,o.useState)([]),Be=(0,i.Z)(Fe,2),We=Be[0],He=Be[1],Ye=(0,o.useState)(!1),Ke=(0,i.Z)(Ye,2),$e=Ke[0],Je=Ke[1],Qe=(0,o.useState)(""),Xe=(0,i.Z)(Qe,2),et=Xe[0],tt=Xe[1],nt=function(){Me(""),qe(""),Je(!$e)},at=function(){$e&&nt(),Je(!$e)};(0,o.useEffect)((function(){if(e.data){var t=e.data,n=t.id,a=t.name,i=t.relation,o=t.relation1,l=t.address,u=t.email,c=t.primaryContact,s=t.secondaryContact,d=e.data.secrets;ft(),ae(n),le(a),y(i),"Others"===i&&N(o),U(l),P(u),B(c),X(s),(null===d||void 0===d?void 0:d.length)&&He((0,r.Z)(d))}else(null===e.data||se)&&(dt(),ft());de(!1)}),[e.data]);var rt=function(){return Re("Enter Valid Name")},it=function(){return Ce("Enter Valid Email")},ot=function(){return be("Enter Valid Contact No.")},lt=function(){return ge("Enter Valid Relation")},ut=function(){return he("Enter Valid Relation")},ct=function(e){var t,n=e.target.name,a=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value;switch(n){case"name":le(a),null!==a&&void 0!==a&&a.length&&a.trim()?Re(""):rt();break;case"email":P(a);var r=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&r&&a.trim()?Ce(""):it();break;case"address":U(a);break;case"phone":B(a),Y&&X(a),null!==a&&void 0!==a&&a.length&&10===a.length&&a.trim()&&j.Yd.test(a)?be(""):ot();break;case"phoneC":X(a),10===a.length&&a.trim()&&j.Yd.test(a)?_e(""):_e("Enter Valid whatsapp No."),(null===a||void 0===a||!a.length)&&_e("");break;case"relation":null!==a&&void 0!==a&&a.length&&a.trim()?ge(""):lt();break;case"relation1":N(a),null!==a&&void 0!==a&&a.length&&a.trim()?he(""):ut()}},st=function(t){console.log("das"),t.preventDefault();var n=((null===oe||void 0===oe||!oe.length)&&rt(),(null===z||void 0===z||!z.length)&&it(),(null===F||void 0===F||!F.length)&&ot(),(null===m||void 0===m||!m.length)&&lt(),"Others"===m&&(null===I||void 0===I||!I.length)&&ut(),"Others"!==m&&he(""),Oe||!(null!==oe&&void 0!==oe&&oe.length)||xe||!(null!==m&&void 0!==m&&m.length)||pe||"Others"===m&&!(null!==I&&void 0!==I&&I.length)||De||!(null!==z&&void 0!==z&&z.length)||Ae||!(null!==F&&void 0!==F&&F.length)||Ee);if(n&&C.A9,e.isLoading&&(C.A9,e.data),n||e.isLoading)console.log(n,"inValid");else{var a={relation:null===m||void 0===m?void 0:m.trim(),relation1:null===I||void 0===I?void 0:I.trim(),email:null===z||void 0===z?void 0:z.trim(),address:null===G||void 0===G?void 0:G.trim(),contact1:null===F||void 0===F?void 0:F.trim(),contact2:null===Q||void 0===Q?void 0:Q.trim(),id:null===ne||void 0===ne?void 0:ne.trim(),name:null===oe||void 0===oe?void 0:oe.trim(),secrets:We};null!==e.data?(a._id=e.data._id,a.usage=e.data.usage,e.updateData(a)):(de(!0),e.addData(a),dt(),ft())}},dt=function(){le(""),He([]),y(""),N(""),P(""),U(""),B(""),X("")},ft=function(){Re(""),be(""),_e(""),Ce(""),he("")},vt=e.handleSidebar,pt=e.show,ht=e.data;return(0,Z.jsx)(u.Z,{anchor:"right",open:pt,children:(0,Z.jsxs)(l.Z,{sx:{mt:10,width:350,px:2},component:"form",children:[(0,Z.jsxs)(c.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,Z.jsx)(s.Z,{children:null!==ht?"UPDATE NOMINEE":"ADD NEW NOMINEE"}),(0,Z.jsx)(h.Z,{size:20,onClick:function(){vt(!1,!0),dt(),ft()}})]}),(0,Z.jsx)(d.Z,{}),(0,Z.jsx)(p.Z,{name:"name",value:oe,margin:"dense",error:!!Oe,placeholder:"Name*",onChange:ct,id:"data-name"}),(0,Z.jsx)(c.ZP,{item:!0,sx:{mt:1},children:(0,Z.jsx)(S.gc,{id:"relationID",name:"relation",onChange:function(e,t){return function(e){var t=null===e||void 0===e?void 0:e.value;y(t),"Others"!==t&&(he(""),N("")),null!==t&&void 0!==t&&t.length&&t.trim()&&ge("")}(t)},options:_,value:(0,k.NA)(_,m),renderInput:function(e){return(0,Z.jsx)(p.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Relation*"}))}})}),"Others"===m&&(0,Z.jsx)(p.Z,{margin:"dense",name:"relation1",value:I,error:!!pe,placeholder:"Relation Name*",onChange:ct,id:"data-Relation",style:{borderColor:pe?"red":""}}),(0,Z.jsx)(p.Z,{type:"email",name:"email",margin:"dense",value:z,error:!!De,placeholder:"Email*",onChange:ct,id:"data-email"}),(0,Z.jsx)(p.Z,{type:"tel",maxLength:10,margin:"dense",value:F,error:!!Ae,name:"phone",onChange:ct,onKeyPress:function(e){return(0,j.ZP)(e)},id:"data-price1",placeholder:"Contact No.*"}),(0,Z.jsx)(L.Z,{sx:{margin:0},control:(0,Z.jsx)(E.Z,{sx:{padding:0},color:"secondary",name:"whatsapp",size:"small",checked:null!==ht?Q===F:Y,onChange:function(){return X(Y?"":F),void K(!Y)}}),label:(0,Z.jsx)(s.Z,{fontSize:"15px",children:"Whatsapp same as Contact"})}),(0,Z.jsx)(p.Z,{type:"tel",maxLength:10,value:Y?F:Q,name:"phoneC",error:!!Ee,disabled:null!==ht?Q===F:Y,onChange:ct,onKeyPress:function(e){return(0,j.ZP)(e)},id:"data-price",placeholder:"WhatsApp"}),(0,Z.jsx)(p.K,{value:G,margin:"dense",name:"address",placeholder:"Address",onChange:function(e){return ct(e)},id:"data-Address"}),(0,Z.jsx)("div",{children:We.map((function(e){return(0,Z.jsx)(l.Z,{children:(0,Z.jsxs)(s.Z,{children:["".concat(e.id," ").concat(e.question)," ",(0,Z.jsx)(x,{size:"10",onClick:function(){return function(e){var t,n=(0,r.Z)(We);n=n.filter((function(t){return t.id!==e})),null!==(t=n)&&void 0!==t&&t.length&&n.forEach((function(e,t){e.id=t+1})),He((0,r.Z)(n))}(e.id)}}),(0,Z.jsx)(g.Z,{size:"10",onClick:function(){return function(e){tt(e),Je(!0),We.forEach((function(t){t.id===e&&(qe(t.answer),Me(t.question))}))}(e.id)}})]})},e.id)}))}),(null===We||void 0===We?void 0:We.length)<3&&(0,Z.jsx)(f.Z,{disabled:3===(null===We||void 0===We?void 0:We.length),onClick:at,children:"Add Secret Questions"}),(0,Z.jsxs)(v.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"end"},children:[(0,Z.jsx)(S.ZP,{varient:"outlined",label:null!==ht?"Cancel":"Reset",onClick:function(){null!==ht&&vt(!1,!0),dt(),ft()}}),(0,Z.jsx)(S.ZP,{onClick:function(e){return st(e)},disabled:!(null!==We&&void 0!==We&&We.length),label:null!==ht?e.isLoading?(0,Z.jsx)(D.Z,{}):"Update":e.isLoading?(0,Z.jsx)(D.Z,{}):"Add"})]}),(0,Z.jsx)(w,{modal:$e,secrets:We,toggleModal:at,fname:Te,setfname:Me,ftype:Ve,setftype:qe,editID:et,clearCustomField:nt,handleSecrets:function(){if(et){var e=(0,r.Z)(We),t=e.findIndex((function(e){return e.id===et}));e[t].question=Te,e[t].answer=Ve,He((0,r.Z)(e)),tt("")}else{var n=(0,r.Z)(We);n.push({id:(null===n||void 0===n?void 0:n.length)+1,question:Te,answer:Ve}),He((0,r.Z)(n))}Je(!1),Me(""),qe("")}})]})})}},50398:function(e,t,n){"use strict";n.r(t);var a=n(74165),r=n(15861),i=n(29439),o=n(47313),l=n(6938),u=n(40229),c=n(94345),s=n(71535),d=n(89870),f=n(22449),v=n(34940),p=(n(48737),n(31616)),h=n(12613),m=n(35192),Z=n(71207),x=n(66135),g=n(10226),j=n(36936),S=n(51427),D=n(46417),C=function(e){return(0,D.jsx)(m.Z,{onClick:function(){var t;return!(null!==(t=e.row.usage)&&void 0!==t&&t.length)&&e.setRow()}})},k=function(e){return(0,D.jsx)(Z.Z,{onClick:function(){return e.currentData(e.row)}})};t.default=(0,x.$j)((function(e){var t=e.reducer.dataList,n=void 0===t?{}:t;return{dataList:n,listLoading:n.totalRecordsLoading,filteredData:n.filteredData}}),(function(e){return{deleteData:function(t){return e(j.SD.endpoints.deleteData.initiate(t))},updateData:function(t){return e(j.SD.endpoints.updateData.initiate(t))},addData:function(t){return e(j.SD.endpoints.addData.initiate(t))},getData:function(t){return e(j.SD.endpoints.getData.initiate(t))},filterData:function(t){return e((0,S.cm)(t))},dataTest:function(){return e({type:"GET_ALL_DATA_LOADING",data:!0})}}}))((function(e){var t=[{label:"Edit",numeric:!1,cell:function(e){return(0,D.jsx)(k,{row:e,currentData:ue})}},{label:"Name",numeric:!1,id:"name",cell:function(e){return(0,D.jsx)("p",{title:e.name,children:e.name})}},{label:"Relation",numeric:!1,id:"relation",cell:function(e){return(0,D.jsx)("p",{title:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation),children:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation)})}},{label:"Contact",numeric:!1,id:"primaryContact",cell:function(e){return(0,D.jsx)("p",{title:e.primaryContact,children:e.primaryContact})}},{label:"Email",numeric:!1,id:"email",cell:function(e){return(0,D.jsx)("p",{title:e.email,children:e.email})}},{label:"Status",numeric:!1,id:"unused",cell:function(e){var t;return null!==(t=e.usage)&&void 0!==t&&t.length?(0,D.jsx)(l.Z,{label:"Used",color:"primary",sx:{width:"80px"}}):(0,D.jsx)(l.Z,{label:"Unused",sx:{width:"80px"}})}},{label:"Delete",cell:function(e){return(0,D.jsx)(C,{row:e,setRow:function(){N(!0),L(e)},deleteRow:ie})}}],n=(0,o.useState)({}),m=(0,i.Z)(n,2),Z=(m[0],m[1]),x=(0,o.useState)([]),j=(0,i.Z)(x,2),S=j[0],y=j[1],A=(0,o.useState)(null),b=(0,i.Z)(A,2),w=b[0],L=b[1],E=(0,o.useState)(!1),_=(0,i.Z)(E,2),I=_[0],N=_[1],O=(0,o.useState)([]),R=(0,i.Z)(O,2),z=R[0],P=R[1],T=(0,o.useState)(""),M=(0,i.Z)(T,2),G=M[0],U=M[1],V=(0,o.useState)(!1),q=(0,i.Z)(V,2),F=q[0],B=q[1],W=(0,o.useState)(null),H=(0,i.Z)(W,2),Y=H[0],K=H[1],$=(0,o.useState)(""),J=(0,i.Z)($,2),Q=J[0],X=J[1],ee=(0,o.useState)(!1),te=(0,i.Z)(ee,2),ne=te[0],ae=te[1];(0,o.useEffect)((function(){var t,n;if(null!==(t=e.dataList)&&void 0!==t&&t.allData){var a=e.dataList.allData;a&&a.forEach((function(e,t){if(e.date){var n=new Date(e.date),r=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),i=new Intl.DateTimeFormat("en",{month:"long"}).format(n);a[t].seperator="".concat(i,", ").concat(r)}}));var r=(n="seperator",a.reduce((function(e,t){return e[t[n]]||(e[t[n]]=[]),e[t[n]].push(t),e}),{}));Z(r)}y(e.dataList.data),P(e.dataList.filteredData)}),[e.dataList]),(0,o.useEffect)((function(){var t;e.filteredData&&(null===(t=e.filteredData)||void 0===t?void 0:t.length)>0&&(y(e.filteredData),P(e.filteredData))}),[e.filteredData]),(0,o.useEffect)((function(){e.getData()}),[]);var re=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];B(e),!0===t&&(K(null),X(t))},ie=function(t){e.deleteData(t)},oe=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ae(!0),t.prev=1,t.next=4,e.addData(n);case 4:ae(!1),re(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),ae(!1),h.A9;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),le=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n.name&&""!==n.relation&&""!==n.email&&""!==n.contact1){t.next=4;break}return t.abrupt("return",(0,D.jsx)(h.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Please Fill All Mandatory Details",severity:"error"}));case 4:return ae(!0),t.prev=5,t.next=8,e.updateData(n);case 8:ae(!1),re(!1,!0),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),ae(!1);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),ue=function(e){K(e),re(!0)};return(0,D.jsxs)(u.Z,{children:[(0,D.jsx)(p.Z,{handleConfirm:function(){ie(w),N(!1)},isOpen:I,closeModal:function(){return N(!1)}}),(0,D.jsx)(c.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,D.jsxs)(s.ZP,{container:!0,justifyContent:"space-between",spacing:2,children:[(0,D.jsx)(s.ZP,{item:!0,children:(0,D.jsx)(d.Z,{variant:"outlined",onClick:function(){return re(!0,!0)},children:"Add Nominee"})}),(0,D.jsx)(s.ZP,{item:!0,children:(0,D.jsx)(f.Z,{onChange:function(t){return function(t){U(t.target.value),e.filterData(t.target.value)}(t)},placeholder:"Search"})})]})}),(0,D.jsx)(v.Z,{}),e.listLoading?(0,D.jsx)(h.$j,{}):(0,D.jsx)(h.Gn,{columns:t,rows:G.length?z:S}),(0,D.jsx)(g.Z,{show:F,data:Y,updateData:le,addData:oe,isLoading:ne,handleSidebar:re,addNew:Q})]})}))},95716:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(4942),r=n(63366),i=n(87462),o=n(47313),l=n(21921),u=n(17551),c=n(45359),s=n(46095),d=n(46417),f=(0,s.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=n(28170),m=n(11236),Z=n(64164),x=n(42035),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],j=(0,Z.ZP)(c.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,h.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,i.Z)({color:(n.vars||n).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===r.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,u.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,a.Z)(t,"&.".concat(x.Z.checked,", &.").concat(x.Z.indeterminate),{color:(n.vars||n).palette[r.color].main}),(0,a.Z)(t,"&.".concat(x.Z.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),S=(0,d.jsx)(v,{}),D=(0,d.jsx)(f,{}),C=(0,d.jsx)(p,{}),k=o.forwardRef((function(e,t){var n,a,u=(0,m.Z)({props:e,name:"MuiCheckbox"}),c=u.checkedIcon,s=void 0===c?S:c,f=u.color,v=void 0===f?"primary":f,p=u.icon,Z=void 0===p?D:p,k=u.indeterminate,y=void 0!==k&&k,A=u.indeterminateIcon,b=void 0===A?C:A,w=u.inputProps,L=u.size,E=void 0===L?"medium":L,_=(0,r.Z)(u,g),I=y?b:Z,N=y?b:s,O=(0,i.Z)({},u,{color:v,indeterminate:y,size:E}),R=function(e){var t=e.classes,n=e.indeterminate,a=e.color,r={root:["root",n&&"indeterminate","color".concat((0,h.Z)(a))]},o=(0,l.Z)(r,x.y,t);return(0,i.Z)({},t,o)}(O);return(0,d.jsx)(j,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":y},w),icon:o.cloneElement(I,{fontSize:null!=(n=I.props.fontSize)?n:E}),checkedIcon:o.cloneElement(N,{fontSize:null!=(a=N.props.fontSize)?a:E}),ownerState:O,ref:t},_,{classes:R}))}))},42035:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var a=n(32298);function r(e){return(0,a.Z)("MuiCheckbox",e)}var i=(0,n(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);t.Z=i},5448:function(e,t,n){"use strict";var a=n(87462),r=n(63366),i=n(47313),o=n(83061),l=n(21921),u=n(71363),c=n(64164),s=n(11236),d=n(19838),f=n(11954),v=n(46417),p=["className","id"],h=(0,c.ZP)(u.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),m=i.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiDialogTitle"}),u=n.className,c=n.id,m=(0,r.Z)(n,p),Z=n,x=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},d.a,t)}(Z),g=i.useContext(f.Z).titleId,j=void 0===g?c:g;return(0,v.jsx)(h,(0,a.Z)({component:"h2",className:(0,o.default)(x.root,u),ownerState:Z,ref:t,variant:"h6",id:j},m))}));t.Z=m},20067:function(){}}]);