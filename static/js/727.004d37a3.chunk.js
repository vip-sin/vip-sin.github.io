(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[727],{51427:function(e,t,n){"use strict";n.d(t,{EL:function(){return v},cm:function(){return h},is:function(){return f},qi:function(){return c}});var a=n(74165),i=n(15861),r=n(31881),l=n.n(r),o=n(12613),u=n(97729),s=n(46417),d=JSON.parse(sessionStorage.getItem("logInUserData")),c=function(e){var t=e.user,n=e.token;return function(){var e=(0,i.Z)((0,a.Z)().mark((function e(i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i({type:"GET_ALL_DOCS_LOADING",data:!0}),l().get("/backendapi/documents/".concat(null===t||void 0===t?void 0:t._id),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){i({type:"GET_ALL_DOCS_LOADING",data:!1});for(var t=e.data,n=0;n<t.length;n+=1)t[n].desc=(0,u.Y)(t[n].desc),t[n].id=n+1,t[n].expiry=(0,u.Y)(t[n].expiry),t[n].alias=(0,u.Y)(t[n].alias);i({type:"GET_ALL_DOCS",resp:t})})).catch((function(e){i({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,l().post("/backendapi/users/get",{id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(t({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var n=e.data[0];t({type:"GET_USER_ALL_DATA",data:n})}})).catch((function(e){t({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},v=function(e){return function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().post("/backendapi/update/secrets",{secrets:e,_id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,s.jsx)(o.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},10226:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(1413),i=n(93433),r=n(29439),l=n(47313),o=n(40229),u=n(82500),s=n(71535),d=n(71363),c=n(34940),f=n(89870),h=n(62463),v=n(39653),p=n(8586),m=n(46095),Z=n(46417),g=(0,m.Z)((0,Z.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),x=n(54727),j=n(61474),D=n(85120),S=n(12613),C=n(86282),A=n(7081),w=n(5448),y=n(88356);function L(e){var t=e.modal,n=e.toggleModal,i=e.fname,r=e.setfname,l=e.ftype,o=e.setftype,u=e.editID,s=e.clearCustomField,d=e.handleSecrets,c=e.secrets;return(0,Z.jsxs)(A.Z,{open:t,fullWidth:!0,maxWidth:"xs",onClose:n,children:[(0,Z.jsx)(w.Z,{children:"Add a secret question"}),(0,Z.jsxs)(y.Z,{children:[(0,Z.jsx)(j.gc,{name:"relation",options:C.DD.filter((function(e){var t,n,a;return e.value!==(null===c||void 0===c||null===(t=c[0])||void 0===t?void 0:t.question)&&e.value!==(null===c||void 0===c||null===(n=c[1])||void 0===n?void 0:n.question)&&e.value!==(null===c||void 0===c||null===(a=c[2])||void 0===a?void 0:a.question)})),onChange:function(e,t){return function(e){var t=null===e||void 0===e?void 0:e.value;r(t)}(t)},value:(0,C.NA)(C.DD,i),renderInput:function(e){return(0,Z.jsx)(v.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:" Secret Question"}))}}),(0,Z.jsx)(v.Z,{type:"text",name:"Answer",margin:"normal",size:"small",fullWidth:!0,error:!!((null===l||void 0===l?void 0:l.length)<4),value:l,placeholder:"Answer",onChange:function(e){o(e.target.value)}}),(0,Z.jsxs)(h.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"start"},children:[(0,Z.jsx)(j.ZP,{varient:"outlined",label:"Cancel",onClick:function(e){s()}}),(0,Z.jsx)(j.ZP,{varient:"contained",label:u?"Update":"Add",disabled:!(null!==i&&void 0!==i&&i.length)||""===l.trim(),onClick:d})]})]})]})}var k=n(75969),E=n(95716),b=JSON.parse(sessionStorage.getItem("dropdowns")).nomineeRelation;function _(e){var t=(0,l.useState)(),n=(0,r.Z)(t,2),m=n[0],A=n[1],w=(0,l.useState)(""),y=(0,r.Z)(w,2),_=y[0],N=y[1],O=(0,l.useState)(""),I=(0,r.Z)(O,2),R=I[0],T=I[1],G=(0,l.useState)(""),P=(0,r.Z)(G,2),z=P[0],U=P[1],q=(0,l.useState)(""),M=(0,r.Z)(q,2),V=M[0],F=M[1],W=(0,l.useState)(!0),Y=(0,r.Z)(W,2),B=Y[0],$=Y[1],J=(0,l.useState)(""),K=(0,r.Z)(J,2),Q=K[0],H=K[1],X=(0,l.useState)(""),ee=(0,r.Z)(X,2),te=ee[0],ne=ee[1],ae=(0,l.useState)(""),ie=(0,r.Z)(ae,2),re=ie[0],le=ie[1],oe=(0,l.useState)(!1),ue=(0,r.Z)(oe,2),se=ue[0],de=ue[1],ce=(0,l.useState)(""),fe=(0,r.Z)(ce,2),he=fe[0],ve=fe[1],pe=(0,l.useState)(""),me=(0,r.Z)(pe,2),Ze=me[0],ge=me[1],xe=(0,l.useState)(""),je=(0,r.Z)(xe,2),De=je[0],Se=je[1],Ce=(0,l.useState)(""),Ae=(0,r.Z)(Ce,2),we=Ae[0],ye=Ae[1],Le=(0,l.useState)(""),ke=(0,r.Z)(Le,2),Ee=ke[0],be=ke[1],_e=(0,l.useState)(""),Ne=(0,r.Z)(_e,2),Oe=Ne[0],Ie=Ne[1],Re=(0,l.useState)(""),Te=(0,r.Z)(Re,2),Ge=Te[0],Pe=Te[1],ze=(0,l.useState)(""),Ue=(0,r.Z)(ze,2),qe=Ue[0],Me=Ue[1],Ve=(0,l.useState)([]),Fe=(0,r.Z)(Ve,2),We=Fe[0],Ye=Fe[1],Be=(0,l.useState)(!1),$e=(0,r.Z)(Be,2),Je=$e[0],Ke=$e[1],Qe=(0,l.useState)(""),He=(0,r.Z)(Qe,2),Xe=He[0],et=He[1],tt=function(){Pe(""),Me(""),Ke(!Je)},nt=function(){Je&&tt(),Ke(!Je)};(0,l.useEffect)((function(){if(e.data){var t=e.data,n=t.id,a=t.name,r=t.relation,l=t.relation1,o=t.address,u=t.email,s=t.primaryContact,d=t.secondaryContact,c=e.data.secrets;ct(),ne(n),le(a),A(r),"Others"===r&&N(l),U(o),T(u),F(s),H(d),(null===c||void 0===c?void 0:c.length)&&Ye((0,i.Z)(c))}else(null===e.data||se)&&(dt(),ct());de(!1)}),[e.data]);var at=function(){return Ie("Enter Valid Name")},it=function(){return Se("Enter Valid Email")},rt=function(){return ye("Enter Valid Contact No.")},lt=function(){return ge("Enter Valid Relation")},ot=function(){return ve("Enter Valid Relation")},ut=function(e){var t,n=e.target.name,a=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value;switch(n){case"name":le(a),null!==a&&void 0!==a&&a.length&&a.trim()?Ie(""):at();break;case"email":T(a);var i=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&i&&a.trim()?Se(""):it();break;case"address":U(a);break;case"phone":F(a),B&&H(a),null!==a&&void 0!==a&&a.length&&10===a.length&&a.trim()&&x.Yd.test(a)?ye(""):rt();break;case"phoneC":H(a),10===a.length&&a.trim()&&x.Yd.test(a)?be(""):be("Enter Valid whatsapp No."),(null===a||void 0===a||!a.length)&&be("");break;case"relation":null!==a&&void 0!==a&&a.length&&a.trim()?ge(""):lt();break;case"relation1":N(a),null!==a&&void 0!==a&&a.length&&a.trim()?ve(""):ot()}},st=function(t){console.log("das"),t.preventDefault();var n=((null===re||void 0===re||!re.length)&&at(),(null===R||void 0===R||!R.length)&&it(),(null===V||void 0===V||!V.length)&&rt(),(null===m||void 0===m||!m.length)&&lt(),"Others"===m&&(null===_||void 0===_||!_.length)&&ot(),"Others"!==m&&ve(""),Oe||!(null!==re&&void 0!==re&&re.length)||Ze||!(null!==m&&void 0!==m&&m.length)||he||"Others"===m&&!(null!==_&&void 0!==_&&_.length)||De||!(null!==R&&void 0!==R&&R.length)||we||!(null!==V&&void 0!==V&&V.length)||Ee);if(n&&S.A9,e.isLoading&&(S.A9,e.data),n||e.isLoading)console.log(n,"inValid");else{var a={relation:null===m||void 0===m?void 0:m.trim(),relation1:null===_||void 0===_?void 0:_.trim(),email:null===R||void 0===R?void 0:R.trim(),address:null===z||void 0===z?void 0:z.trim(),contact1:null===V||void 0===V?void 0:V.trim(),contact2:null===Q||void 0===Q?void 0:Q.trim(),id:null===te||void 0===te?void 0:te.trim(),name:null===re||void 0===re?void 0:re.trim(),secrets:We};null!==e.data?(a._id=e.data._id,a.usage=e.data.usage,e.updateData(a)):(de(!0),e.addData(a),dt(),ct())}},dt=function(){le(""),Ye([]),A(""),N(""),T(""),U(""),F(""),H("")},ct=function(){Ie(""),ye(""),be(""),Se(""),ve("")},ft=e.handleSidebar,ht=e.show,vt=e.data;return(0,Z.jsx)(u.Z,{anchor:"right",open:ht,children:(0,Z.jsxs)(o.Z,{sx:{mt:8,width:350,px:2},component:"form",children:[(0,Z.jsxs)(s.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,Z.jsx)(d.Z,{children:null!==vt?"UPDATE NOMINEE":"ADD NEW NOMINEE"}),(0,Z.jsx)(p.Z,{size:20,onClick:function(){ft(!1,!0),dt(),ct()}})]}),(0,Z.jsx)(c.Z,{}),(0,Z.jsx)(v.Z,{name:"name",value:re,margin:"dense",error:!!Oe,placeholder:"Name*",onChange:ut,id:"data-name"}),(0,Z.jsx)(s.ZP,{item:!0,children:(0,Z.jsx)(j.gc,{id:"relationID",name:"relation",onChange:function(e,t){return function(e){var t=null===e||void 0===e?void 0:e.value;A(t),"Others"!==t&&(ve(""),N("")),null!==t&&void 0!==t&&t.length&&t.trim()&&ge("")}(t)},options:b,value:(0,C.NA)(b,m),renderInput:function(e){return(0,Z.jsx)(v.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Relation*"}))}})}),"Others"===m&&(0,Z.jsx)(v.Z,{margin:"dense",name:"relation1",value:_,error:!!he,placeholder:"Relation Name*",onChange:ut,id:"data-Relation",style:{borderColor:he?"red":""}}),(0,Z.jsx)(v.Z,{type:"email",name:"email",margin:"dense",value:R,error:!!De,placeholder:"Email*",onChange:ut,id:"data-email"}),(0,Z.jsx)(v.Z,{type:"tel",maxLength:10,margin:"dense",value:V,error:!!we,name:"phone",onChange:ut,onKeyPress:function(e){return(0,x.ZP)(e)},id:"data-price1",placeholder:"Contact No.*"}),(0,Z.jsx)(k.Z,{sx:{margin:0},control:(0,Z.jsx)(E.Z,{sx:{padding:0},color:"secondary",name:"whatsapp",size:"small",checked:null!==vt?Q===V:B,onChange:function(){return H(B?"":V),void $(!B)}}),label:(0,Z.jsx)(d.Z,{fontSize:"15px",children:"Whatsapp same as Contact"})}),(0,Z.jsx)(v.Z,{type:"tel",maxLength:10,value:B?V:Q,name:"phoneC",error:!!Ee,disabled:null!==vt?Q===V:B,onChange:ut,onKeyPress:function(e){return(0,x.ZP)(e)},id:"data-price",placeholder:"WhatsApp"}),(0,Z.jsx)(v.Z,{value:z,margin:"dense",name:"address",placeholder:"Address",onChange:function(e){return ut(e)},id:"data-Address",multiline:!0,minRows:2}),(0,Z.jsx)("div",{children:We.map((function(e){return(0,Z.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,Z.jsxs)(d.Z,{onClick:function(){return function(e){et(e),Ke(!0),We.forEach((function(t){t.id===e&&(Me(t.answer),Pe(t.question))}))}(e.id)},children:["".concat(e.id," ").concat(e.question)," "]})," ",(0,Z.jsx)(g,{size:"1",onClick:function(){return function(e){var t,n=(0,i.Z)(We);n=n.filter((function(t){return t.id!==e})),null!==(t=n)&&void 0!==t&&t.length&&n.forEach((function(e,t){e.id=t+1})),Ye((0,i.Z)(n))}(e.id)}})]},e.id)}))}),(null===We||void 0===We?void 0:We.length)<3&&(0,Z.jsx)(f.Z,{disabled:3===(null===We||void 0===We?void 0:We.length),onClick:nt,children:"Add Secret Questions"}),(0,Z.jsxs)(h.Z,{spacing:3,direction:"row",sx:{mt:2,justifyContent:"end"},children:[(0,Z.jsx)(j.ZP,{varient:"outlined",label:null!==vt?"Cancel":"Reset",onClick:function(){null!==vt&&ft(!1,!0),dt(),ct()}}),(0,Z.jsx)(j.ZP,{onClick:function(e){return st(e)},disabled:!(null!==We&&void 0!==We&&We.length),label:null!==vt?e.isLoading?(0,Z.jsx)(D.Z,{}):"Update":e.isLoading?(0,Z.jsx)(D.Z,{}):"Add"})]}),(0,Z.jsx)(L,{modal:Je,secrets:We,toggleModal:nt,fname:Ge,setfname:Pe,ftype:qe,setftype:Me,editID:Xe,clearCustomField:tt,handleSecrets:function(){if(Xe){var e=(0,i.Z)(We),t=e.findIndex((function(e){return e.id===Xe}));e[t].question=Ge,e[t].answer=qe,Ye((0,i.Z)(e)),et("")}else{var n=(0,i.Z)(We);n.push({id:(null===n||void 0===n?void 0:n.length)+1,question:Ge,answer:qe}),Ye((0,i.Z)(n))}Ke(!1),Pe(""),Me("")}})]})})}},50398:function(e,t,n){"use strict";n.r(t);var a=n(74165),i=n(15861),r=n(29439),l=n(47313),o=n(6938),u=n(40229),s=n(94345),d=n(71535),c=n(89870),f=n(22449),h=n(34940),v=(n(48737),n(31616)),p=n(12613),m=n(35192),Z=n(71207),g=n(66135),x=n(10226),j=n(36936),D=n(51427),S=n(46417),C=function(e){return(0,S.jsx)(m.Z,{onClick:function(){var t;return!(null!==(t=e.row.usage)&&void 0!==t&&t.length)&&e.setRow()}})},A=function(e){return(0,S.jsx)(Z.Z,{onClick:function(){return e.currentData(e.row)}})};t.default=(0,g.$j)((function(e){var t=e.reducer.dataList,n=void 0===t?{}:t;return{dataList:n,listLoading:n.totalRecordsLoading,filteredData:n.filteredData}}),(function(e){return{deleteData:function(t){return e(j.SD.endpoints.deleteData.initiate(t))},updateData:function(t){return e(j.SD.endpoints.updateData.initiate(t))},addData:function(t){return e(j.SD.endpoints.addData.initiate(t))},getData:function(t){return e(j.SD.endpoints.getData.initiate(t))},filterData:function(t){return e((0,D.cm)(t))},dataTest:function(){return e({type:"GET_ALL_DATA_LOADING",data:!0})}}}))((function(e){var t=[{label:"Edit",width:40,numeric:!1,cell:function(e){return(0,S.jsx)(A,{row:e,currentData:ue})}},{label:"Name",width:100,numeric:!1,id:"name",cell:function(e){return(0,S.jsx)("p",{title:e.name,children:e.name})}},{label:"Relation",width:80,numeric:!1,id:"relation",cell:function(e){return(0,S.jsx)("p",{title:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation),children:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation)})}},{label:"Contact",width:80,numeric:!1,id:"primaryContact",cell:function(e){return(0,S.jsx)("p",{title:e.primaryContact,children:e.primaryContact})}},{label:"Email",width:100,numeric:!1,id:"email",cell:function(e){return(0,S.jsx)("p",{title:e.email,children:e.email})}},{label:"Status",width:40,numeric:!1,id:"unused",cell:function(e){var t;return null!==(t=e.usage)&&void 0!==t&&t.length?(0,S.jsx)(o.Z,{label:"Used",color:"primary",sx:{width:"80px"}}):(0,S.jsx)(o.Z,{label:"Unused",sx:{width:"80px"}})}},{label:"Delete",width:40,cell:function(e){return(0,S.jsx)(C,{row:e,setRow:function(){O(!0),E(e)},deleteRow:re})}}],n=(0,l.useState)({}),m=(0,r.Z)(n,2),Z=(m[0],m[1]),g=(0,l.useState)([]),j=(0,r.Z)(g,2),D=j[0],w=j[1],y=(0,l.useState)(null),L=(0,r.Z)(y,2),k=L[0],E=L[1],b=(0,l.useState)(!1),_=(0,r.Z)(b,2),N=_[0],O=_[1],I=(0,l.useState)([]),R=(0,r.Z)(I,2),T=R[0],G=R[1],P=(0,l.useState)(""),z=(0,r.Z)(P,2),U=z[0],q=z[1],M=(0,l.useState)(!1),V=(0,r.Z)(M,2),F=V[0],W=V[1],Y=(0,l.useState)(null),B=(0,r.Z)(Y,2),$=B[0],J=B[1],K=(0,l.useState)(""),Q=(0,r.Z)(K,2),H=Q[0],X=Q[1],ee=(0,l.useState)(!1),te=(0,r.Z)(ee,2),ne=te[0],ae=te[1];(0,l.useEffect)((function(){var t,n;if(null!==(t=e.dataList)&&void 0!==t&&t.allData){var a=e.dataList.allData;a&&a.forEach((function(e,t){if(e.date){var n=new Date(e.date),i=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),r=new Intl.DateTimeFormat("en",{month:"long"}).format(n);a[t].seperator="".concat(r,", ").concat(i)}}));var i=(n="seperator",a.reduce((function(e,t){return e[t[n]]||(e[t[n]]=[]),e[t[n]].push(t),e}),{}));Z(i)}w(e.dataList.data),G(e.dataList.filteredData)}),[e.dataList]),(0,l.useEffect)((function(){var t;e.filteredData&&(null===(t=e.filteredData)||void 0===t?void 0:t.length)>0&&(w(e.filteredData),G(e.filteredData))}),[e.filteredData]),(0,l.useEffect)((function(){e.getData()}),[]);var ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];W(e),!0===t&&(J(null),X(t))},re=function(t){e.deleteData(t)},le=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ae(!0),t.prev=1,t.next=4,e.addData(n);case 4:ae(!1),ie(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),ae(!1),p.A9;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),oe=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n.name&&""!==n.relation&&""!==n.email&&""!==n.contact1){t.next=4;break}return t.abrupt("return",(0,S.jsx)(p.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Please Fill All Mandatory Details",severity:"error"}));case 4:return ae(!0),t.prev=5,t.next=8,e.updateData(n);case 8:ae(!1),ie(!1,!0),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),ae(!1);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),ue=function(e){J(e),ie(!0)};return(0,S.jsxs)(u.Z,{children:[(0,S.jsx)(v.Z,{handleConfirm:function(){re(k),O(!1)},isOpen:N,closeModal:function(){return O(!1)}}),(0,S.jsx)(s.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,S.jsxs)(d.ZP,{container:!0,justifyContent:"space-between",spacing:2,children:[(0,S.jsx)(d.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"outlined",onClick:function(){return ie(!0,!0)},children:"Add Nominee"})}),(0,S.jsx)(d.ZP,{item:!0,children:(0,S.jsx)(f.Z,{onChange:function(t){return function(t){q(t.target.value),e.filterData(t.target.value)}(t)},placeholder:"Search"})})]})}),(0,S.jsx)(h.Z,{}),e.listLoading?(0,S.jsx)(p.$j,{}):(0,S.jsx)(p.Gn,{columns:t,ad:!0,rows:U.length?T:D}),(0,S.jsx)(x.Z,{show:F,data:$,updateData:oe,addData:le,isLoading:ne,handleSidebar:ie,addNew:H})]})}))},20067:function(){}}]);