(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[297],{51427:function(e,n,t){"use strict";t.d(n,{EL:function(){return L},IZ:function(){return m},Id:function(){return x},Jj:function(){return y},Pe:function(){return v},SR:function(){return _},VA:function(){return S},Yu:function(){return h},ZT:function(){return g},cm:function(){return Z},is:function(){return p},qi:function(){return f}});var a=t(37762),r=t(74165),i=t(15861),o=t(31881),u=t.n(o),s=t(63861),c=t(97729),l=t(46417),d=JSON.parse(sessionStorage.getItem("logInUserData")),f=function(e){var n=e.user,t=e.token;return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"GET_ALL_DOCS_LOADING",data:!0}),u().get("/backendapi/documents/".concat(null===n||void 0===n?void 0:n._id),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){a({type:"GET_ALL_DOCS_LOADING",data:!1});for(var n=e.data,t=0;t<n.length;t+=1)n[t].desc=(0,c.Y)(n[t].desc),n[t].id=t+1,n[t].expiry=(0,c.Y)(n[t].expiry),n[t].alias=(0,c.Y)(n[t].alias);a({type:"GET_ALL_DOCS",resp:n})})).catch((function(e){a({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},h=function(e){return function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"GET_ALL_DATA_LOADING",data:!0}),n.next=3,u().get("/backendapi/nominee/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){if(t({type:"GET_ALL_DATA_LOADING",data:!1}),null!==n&&void 0!==n&&n.data){var r,i=(0,a.Z)(n.data);try{for(i.s();!(r=i.n()).done;){var o=r.value;o.nomineeId=(null===o||void 0===o?void 0:o.nomineeId)&&(0,c.Y)(o.nomineeId,!0),o.name=(null===o||void 0===o?void 0:o.name)&&(0,c.Y)(o.name,!0),o.relation=(null===o||void 0===o?void 0:o.relation)&&(0,c.Y)(o.relation,!0),o.relation1=(null===o||void 0===o?void 0:o.relation1)&&(0,c.Y)(o.relation1,!0),o.email=(null===o||void 0===o?void 0:o.email)&&(0,c.Y)(o.email,!0),o.primaryContact=(null===o||void 0===o?void 0:o.primaryContact)&&(0,c.Y)(o.primaryContact,!0),o.secondaryContact=(null===o||void 0===o?void 0:o.secondaryContact)&&(0,c.Y)(o.secondaryContact,!0),o.address=(null===o||void 0===o?void 0:o.address)&&(0,c.Y)(o.address,!0)}}catch(u){i.e(u)}finally{i.f()}t({type:"GET_DATA",data:n.data,totalPages:n.length,params:e})}})).catch((function(e){t({type:"GET_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},p=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,u().post("/backendapi/users/get",{id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(n({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var t=e.data[0];n({type:"GET_USER_ALL_DATA",data:t})}})).catch((function(e){n({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},v=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"GET_ALL_ASSET_DATA_LOADING",data:!0}),u().get("/backendapi/user/assets/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){n({type:"GET_ALL_ASSET_DATA_LOADING",data:!1});var t=JSON.parse((0,c.Y)(e.data[0]));n({type:"GET_ALL_ASSET_DATA",data:t})})).catch((function(e){n({type:"ERROR_ALL_ASSET_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},m=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!0}),u().get("/backendapi/user/liabilities/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){n({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!1});var t=JSON.parse((0,c.Y)(e.data[0]));n({type:"GET_ALL_LIABILITY_DATA",data:t})})).catch((function(e){n({type:"ERROR_ALL_LIABILITY_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},g=function(e,n){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(a){var i,o,s,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_SPEND_DATA_LOADING",data:!0}),null!==n&&void 0!==n&&n.year&&(i=new Date,o=A(i),s=Number(n.year?n.year:3),i.setMonth(i.getMonth()-s),i.setDate(1),c=A(i),e.dateRangeStart=c,e.dateRangeEnd=o),null!==n&&void 0!==n&&n.labels&&(e.labels=n.labels),t.next=5,u().get("/backendapi/spend/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===n||void 0===n?void 0:n.data,totalPages:n.length,params:e})})).catch((function(e){a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){var n="".concat(e.getMonth()+1);1===n.length&&(n="0".concat(n));var t="".concat(e.getDate());return 1===t.length&&(t="0".concat(t)),[e.getFullYear(),n,t].join("-")},Z=function(e){return function(n){return n({type:"FILTER_DATA",value:e})}},_=function(e){return function(n){u().post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){n({type:"DELETE_DATA",obj:e})}))}},y=function(e){return function(n){u().post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){n({type:"DELETE_DATA",obj:e})}))}},x=function(e){var n={userId:d._id,name:(0,c.G)(e.name,!0),relation:(0,c.G)(e.relation,!0),relation1:(0,c.G)(e.relation1,!0),email:(0,c.G)(e.email,!0),primaryContact:(0,c.G)(e.contact1,!0),secondaryContact:(0,c.G)(e.contact2,!0),address:(0,c.G)(e.address,!0),secrets:e.secrets};return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("/backendapi/nominee/add",n,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){e.data&&(s.A9,"Success"===e.data||e.data,e.data),t(h())}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},S=function(e){var n={_id:e._id,usage:e.usage?e.usage:"Unused",userId:d._id,name:(0,c.G)(e.name,!0),relation:(0,c.G)(e.relation,!0),relation1:(0,c.G)(e.relation1,!0),email:(0,c.G)(e.email,!0),primaryContact:(0,c.G)(e.contact1,!0),secondaryContact:(0,c.G)(e.contact2,!0),address:(0,c.G)(e.address,!0),secrets:e.secrets};return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("/backendapi/nominee/update",n,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,l.jsx)(s.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Nominee Updated Successfully"})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},L=function(e){return function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().post("/backendapi/update/secrets",{secrets:e,_id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,l.jsx)(s.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},54727:function(e,n,t){"use strict";t.d(n,{Yd:function(){return a},p6:function(){return r}}),n.ZP=function(e){var n=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which);if(n=String.fromCharCode(n),!/^[0-9]*$/.test(n))return e.preventDefault(),!1};var a=RegExp(/^[6-9]{1}[0-9]{9}$/),r=function(e,n){var t="";if(!e)return t;var a=new Date(e),r=a.getFullYear(),i="".concat(a.getMonth()+1),o="".concat(a.getDate());if(i.length<2&&(i="0".concat(i)),o.length<2&&(o="0".concat(o)),"dd/mm/yyyy"===n)t=[o,i,r].join("/");else t=[o,i,r].join("-");return t}},97729:function(e,n,t){"use strict";t.d(n,{G:function(){return s},Y:function(){return c}});var a=t(25542),r=t.n(a),i=t(67492),o=t.n(i),u="l@st@rz!",s=function(e,n,t){var a=n?u:sessionStorage.getItem("secretkey");return e.length?o().stringify(r().encrypt(e,t||a)):e},c=function(e,n,t){var a=n?u:sessionStorage.getItem("secretkey");return e.length?r().decrypt(e,t||a):e}},10226:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var a=t(1413),r=t(93433),i=t(29439),o=t(47313),u=t(9506),s=t(49920),c=t(19641),l=t(47605),d=t(19536),f=t(71003),h=t(35898),p=t(39653),v=t(8586),m=t(54750),g=t(46417),A=(0,m.Z)((0,g.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Z=t(71207),_=t(54727),y=t(61474),x=t(85120),S=t(63861),L=t(86240),D=t(94469),E=t(33604),k=t(69625);function I(e){var n=e.modal,t=e.toggleModal,r=e.fname,i=e.setfname,o=e.ftype,u=e.setftype,s=e.editID,c=e.clearCustomField,l=e.handleSecrets,d=e.secrets;return(0,g.jsxs)(D.Z,{open:n,fullWidth:!0,maxWidth:"xs",onClose:t,children:[(0,g.jsx)(E.Z,{children:"Add a secret question"}),(0,g.jsxs)(k.Z,{children:[(0,g.jsx)(y.gc,{name:"relation",options:function(){var e=L.DD.filter((function(e){var n,t,a;return e.value!==(null===d||void 0===d||null===(n=d[0])||void 0===n?void 0:n.question)&&e.value!==(null===d||void 0===d||null===(t=d[1])||void 0===t?void 0:t.question)&&e.value!==(null===d||void 0===d||null===(a=d[2])||void 0===a?void 0:a.question)}));return console.log("temp",e,d),e}(),onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;i(n)}(n)},value:(0,L.NA)(L.DD,r),renderInput:function(e){return(0,g.jsx)(p.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:" Secret Question"}))}}),(0,g.jsx)(p.Z,{type:"text",name:"Answer",margin:"normal",size:"small",fullWidth:!0,value:o,placeholder:"Answer",onChange:function(e){u(e.target.value)}}),(0,g.jsxs)(h.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"start"},children:[(0,g.jsx)(y.ZP,{varient:"outlined",label:"Cancel",onClick:function(e){c()}}),(0,g.jsx)(y.ZP,{varient:"contained",label:s?"Update":"Add",disabled:!(null!==r&&void 0!==r&&r.length)||""===o.trim(),onClick:l})]})]})]})}var T=t(69173),C=t(49969),G=JSON.parse(sessionStorage.getItem("dropdowns")).nomineeRelation;function j(e){var n=(0,o.useState)(),t=(0,i.Z)(n,2),m=t[0],D=t[1],E=(0,o.useState)(""),k=(0,i.Z)(E,2),j=k[0],b=k[1],w=(0,o.useState)(""),N=(0,i.Z)(w,2),O=N[0],R=N[1],Y=(0,o.useState)(""),z=(0,i.Z)(Y,2),P=z[0],B=z[1],M=(0,o.useState)(""),U=(0,i.Z)(M,2),q=U[0],V=U[1],W=(0,o.useState)(!0),F=(0,i.Z)(W,2),J=F[0],$=F[1],K=(0,o.useState)(""),Q=(0,i.Z)(K,2),H=Q[0],X=Q[1],ee=(0,o.useState)(""),ne=(0,i.Z)(ee,2),te=ne[0],ae=ne[1],re=(0,o.useState)(""),ie=(0,i.Z)(re,2),oe=ie[0],ue=ie[1],se=(0,o.useState)(!1),ce=(0,i.Z)(se,2),le=ce[0],de=ce[1],fe=(0,o.useState)(""),he=(0,i.Z)(fe,2),pe=he[0],ve=he[1],me=(0,o.useState)(""),ge=(0,i.Z)(me,2),Ae=ge[0],Ze=ge[1],_e=(0,o.useState)(""),ye=(0,i.Z)(_e,2),xe=ye[0],Se=ye[1],Le=(0,o.useState)(""),De=(0,i.Z)(Le,2),Ee=De[0],ke=De[1],Ie=(0,o.useState)(""),Te=(0,i.Z)(Ie,2),Ce=Te[0],Ge=Te[1],je=(0,o.useState)(""),be=(0,i.Z)(je,2),we=be[0],Ne=be[1],Oe=(0,o.useState)(""),Re=(0,i.Z)(Oe,2),Ye=Re[0],ze=Re[1],Pe=(0,o.useState)(""),Be=(0,i.Z)(Pe,2),Me=Be[0],Ue=Be[1],qe=(0,o.useState)([]),Ve=(0,i.Z)(qe,2),We=Ve[0],Fe=Ve[1],Je=(0,o.useState)(!1),$e=(0,i.Z)(Je,2),Ke=$e[0],Qe=$e[1],He=(0,o.useState)(""),Xe=(0,i.Z)(He,2),en=Xe[0],nn=Xe[1],tn=function(){ze(""),Ue(""),Qe(!Ke)},an=function(){Ke&&tn(),Qe(!Ke)};(0,o.useEffect)((function(){if(e.data){var n=e.data,t=n.id,a=n.name,i=n.relation,o=n.relation1,u=n.address,s=n.email,c=n.primaryContact,l=n.secondaryContact,d=e.data.secrets;hn(),ae(t),ue(a),D(i),"Others"===i&&b(o),B(u),R(s),V(c),X(l),(null===d||void 0===d?void 0:d.length)&&Fe((0,r.Z)(d))}else(null===e.data||le)&&(fn(),hn());de(!1)}),[e.data]);var rn=function(){return Ne("Enter Valid Name")},on=function(){return Se("Enter Valid Email")},un=function(){return ke("Enter Valid Contact No.")},sn=function(){return Ze("Enter Valid Relation")},cn=function(){return ve("Enter Valid Relation")},ln=function(e){var n,t=e.target.name,a=null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value;switch(t){case"name":ue(a),null!==a&&void 0!==a&&a.length&&a.trim()?Ne(""):rn();break;case"email":R(a);var r=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&r&&a.trim()?Se(""):on();break;case"address":B(a);break;case"phone":V(a),J&&X(a),null!==a&&void 0!==a&&a.length&&10===a.length&&a.trim()&&_.Yd.test(a)?ke(""):un();break;case"phoneC":X(a),10===a.length&&a.trim()&&_.Yd.test(a)?Ge(""):Ge("Enter Valid whatsapp No."),(null===a||void 0===a||!a.length)&&Ge("");break;case"relation":null!==a&&void 0!==a&&a.length&&a.trim()?Ze(""):sn();break;case"relation1":b(a),null!==a&&void 0!==a&&a.length&&a.trim()?ve(""):cn()}},dn=function(){console.log("das");var n=((null===oe||void 0===oe||!oe.length)&&rn(),(null===O||void 0===O||!O.length)&&on(),(null===q||void 0===q||!q.length)&&un(),(null===m||void 0===m||!m.length)&&sn(),"Others"===m&&(null===j||void 0===j||!j.length)&&cn(),"Others"!==m&&ve(""),we||!(null!==oe&&void 0!==oe&&oe.length)||Ae||!(null!==m&&void 0!==m&&m.length)||pe||"Others"===m&&!(null!==j&&void 0!==j&&j.length)||xe||!(null!==O&&void 0!==O&&O.length)||Ee||!(null!==q&&void 0!==q&&q.length)||Ce);if(n&&S.A9,n)console.log(n,"inValid");else if(e.isLoading&&(S.A9,e.data),!e.isLoading){var t={relation:null===m||void 0===m?void 0:m.trim(),relation1:null===j||void 0===j?void 0:j.trim(),email:null===O||void 0===O?void 0:O.trim(),address:null===P||void 0===P?void 0:P.trim(),contact1:null===q||void 0===q?void 0:q.trim(),contact2:null===H||void 0===H?void 0:H.trim(),id:null===te||void 0===te?void 0:te.trim(),name:null===oe||void 0===oe?void 0:oe.trim(),secrets:We};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(de(!0),e.addData(t),fn(),hn())}},fn=function(){ue(""),Fe([]),D(""),b(""),R(""),B(""),V(""),X("")},hn=function(){Ne(""),ke(""),Ge(""),Se(""),ve("")},pn=e.handleSidebar,vn=e.show,mn=e.data;return(0,g.jsx)(s.Z,{anchor:"right",open:vn,children:(0,g.jsxs)(u.Z,{sx:{mt:10,width:350,px:2},component:"form",children:[(0,g.jsxs)(c.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,g.jsx)(l.Z,{children:null!==mn?"UPDATE NOMINEE":"ADD NEW NOMINEE"}),(0,g.jsx)(v.Z,{size:20,onClick:function(){pn(!1,!0),fn(),hn()}})]}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(p.Z,{name:"name",value:oe,margin:"dense",invalid:!!we,placeholder:"Name*",onChange:ln,id:"data-name"}),(0,g.jsx)(c.ZP,{item:!0,sx:{mt:1},children:(0,g.jsx)(y.gc,{id:"relationID",name:"relation",onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;D(n),"Others"!==n&&(ve(""),b("")),null!==n&&void 0!==n&&n.length&&n.trim()&&Ze("")}(n)},options:G,value:(0,L.NA)(G,m),renderInput:function(e){return(0,g.jsx)(p.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Relation*"}))}})}),"Others"===m&&(0,g.jsx)(p.Z,{margin:"dense",name:"relation1",value:j,invalid:!!pe,placeholder:"Relation Name*",onChange:ln,id:"data-Relation",style:{borderColor:pe?"red":""}}),(0,g.jsx)(p.Z,{type:"email",name:"email",margin:"dense",value:O,invalid:!!xe,placeholder:"Email*",onChange:ln,id:"data-email"}),(0,g.jsx)(p.Z,{type:"tel",maxLength:10,margin:"dense",value:q,invalid:!!Ee,name:"phone",onChange:ln,onKeyPress:function(e){return(0,_.ZP)(e)},id:"data-price1",placeholder:"Contact No.*"}),(0,g.jsx)(T.Z,{sx:{margin:0},control:(0,g.jsx)(C.Z,{sx:{padding:0},color:"secondary",name:"whatsapp",size:"small",checked:null!==mn?H===q:J,onChange:function(){return X(J?"":q),void $(!J)}}),label:(0,g.jsx)(l.Z,{fontSize:"15px",children:"Whatsapp same as Contact"})}),(0,g.jsx)(p.Z,{type:"tel",maxLength:10,margin:"dense",value:q,name:"phoneC",invalid:!!Ce,disabled:null!==mn?H===q:J,onChange:ln,onKeyPress:function(e){return(0,_.ZP)(e)},id:"data-price",placeholder:"WhatsApp"}),(0,g.jsx)(p.Z,{type:"textarea",value:P,margin:"dense",name:"address",placeholder:"Address",onChange:function(e){return ln(e)},id:"data-Address",multiline:!0}),(0,g.jsx)("div",{children:We.map((function(e){return(0,g.jsx)(u.Z,{children:(0,g.jsxs)(l.Z,{children:["".concat(e.id," ").concat(e.question)," ",(0,g.jsx)(A,{size:"10",onClick:function(){return function(e){var n,t=(0,r.Z)(We);t=t.filter((function(n){return n.id!==e})),null!==(n=t)&&void 0!==n&&n.length&&t.forEach((function(e,n){e.id=n+1})),Fe((0,r.Z)(t))}(e.id)}}),(0,g.jsx)(Z.Z,{size:"10",onClick:function(){return function(e){nn(e),Qe(!0),We.forEach((function(n){n.id===e&&(Ue(n.answer),ze(n.question))}))}(e.id)}})]})},e.id)}))}),(null===We||void 0===We?void 0:We.length)<3&&(0,g.jsx)(f.Z,{disabled:3===(null===We||void 0===We?void 0:We.length),onClick:an,children:"Add Secret Questions"}),(0,g.jsxs)(h.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"end"},children:[(0,g.jsx)(y.ZP,{varient:"outlined",label:null!==mn?"Cancel":"Reset",onClick:function(){null!==mn&&pn(!1,!0),fn(),hn()}}),console.log(We,"secrets length"),(0,g.jsx)(y.ZP,{onClick:function(){return dn()},disabled:!(null!==We&&void 0!==We&&We.length),label:null!==mn?e.isLoading?(0,g.jsx)(x.Z,{}):"Update":e.isLoading?(0,g.jsx)(x.Z,{}):"Add"})]}),(0,g.jsx)(I,{modal:Ke,secrets:We,toggleModal:an,fname:Ye,setfname:ze,ftype:Me,setftype:Ue,editID:en,clearCustomField:tn,handleSecrets:function(){if(en){var e=(0,r.Z)(We),n=e.findIndex((function(e){return e.id===en}));e[n].question=Ye,e[n].answer=Me,Fe((0,r.Z)(e)),nn("")}else{var t=(0,r.Z)(We);t.push({id:(null===t||void 0===t?void 0:t.length)+1,question:Ye,answer:Me}),Fe((0,r.Z)(t))}Qe(!1),ze(""),Ue("")}})]})})}},42480:function(){}}]);