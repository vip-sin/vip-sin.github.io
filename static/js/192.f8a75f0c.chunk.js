(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[192],{39995:function(e,n,t){"use strict";t(47313);var s=t(51268),a=t.n(s),r=t(19641),o=t(87124),i=t(86240),c=t(46417);function l(e){return(0,c.jsx)(o.Z,{component:"img",image:e.item.img,alt:e.item.label})}n.Z=function(e){var n=[{label:"Random Name #1",description:"Probably !",img:i.oX},{label:"Random Name #2",description:"Hello World!",img:i.XL},{label:"Random Name #3",description:"Probably !",img:i.Ev},{label:"Random Name #4",description:"Hello World!",img:i.yc},{label:"Random Name #5",description:"Hello World!",img:i.Ye}];return(0,c.jsx)(r.ZP,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:(0,c.jsx)(a(),{stopAutoPlayOnHover:!0,navButtonsAlwaysInvisible:!0,swipe:!0,height:160,sx:{alignItems:"center",width:"250px"},animation:"fade",children:n.map((function(e,n){return(0,c.jsx)(l,{item:e},n)}))})})}},97729:function(e,n,t){"use strict";t.d(n,{G:function(){return o},Y:function(){return i}});var s=t(75575),a=t.n(s),r="l@st@rz!",o=function(e,n,t){var s=n?r:sessionStorage.getItem("secretkey");return e&&e.length>0?a().encrypt(t||s,e):e},i=function(e,n,t){var s=n?r:sessionStorage.getItem("secretkey");return e&&e.length>0?a().decrypt(t||s,e):e}},64046:function(e,n,t){"use strict";t.r(n);var s=t(1413),a=t(74165),r=t(15861),o=t(93433),i=t(29439),c=t(47313),l=t(31881),u=t.n(l),d=t(9506),p=t(56605),f=t(96327),h=t(39995),m=t(94469),v=t(69625),w=t(6961),x=t(71003),g=t(33604),j=t(60636),Z=t(19641),S=t(57775),y=t(51057),b=t(47605),C=t(61474),k=t(97729),P=t(63861),N=t(71207),I=t(35192),A=t(91210),M=t(5390),L=t(86240),z=t(46417),G=function(e){return(0,z.jsx)(N.Z,{onClick:function(){return e.editRow(!0)}})},O=function(e){var n=(0,c.useState)(!1),t=(0,i.Z)(n,2),s=t[0],a=t[1];return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(m.Z,{open:s,children:[(0,z.jsx)(v.Z,{children:"Are you sure you want to delete this record?"}),(0,z.jsxs)(w.Z,{children:[(0,z.jsx)(x.Z,{onClick:function(){return a(!1)},children:"Cancel"}),(0,z.jsx)(x.Z,{onClick:function(){e.deleteRow(),a(!1)},children:"Delete"})]})]}),(0,z.jsx)(f.Z,{handleConfirm:function(){e.deleteRow(),a(!1)},isOpen:s,closeModal:function(){return a(!1)}}),(0,z.jsx)(I.Z,{size:window.screen.width<500?13:20,onClick:function(){return a(!0)}})]})},R=function(e){return(0,z.jsx)(A.Z,{onClick:function(){if(e.showPass){var n=JSON.parse(sessionStorage.getItem("logInUserData")).pwdtime;(n>10||n<2)&&(n=3),n&&(P.A9,"Wait for ".concat(n," seconds as one password is already visible !"))}else e.set()}})},D=JSON.parse(sessionStorage.getItem("dropdowns")).passwordTypes;n.default=function(e){var n=(0,c.useState)(!1),t=(0,i.Z)(n,2),l=t[0],f=t[1],N=(0,c.useState)(!1),I=(0,i.Z)(N,2),A=I[0],U=I[1],W=(0,c.useState)(!1),Y=(0,i.Z)(W,2),E=Y[0],J=Y[1],_=(0,c.useState)(null),B=(0,i.Z)(_,2),H=B[0],T=B[1],V=(0,c.useState)(!1),F=(0,i.Z)(V,2),X=F[0],q=F[1],K=(0,c.useState)(""),Q=(0,i.Z)(K,2),$=Q[0],ee=Q[1],ne=(0,c.useState)(""),te=(0,i.Z)(ne,2),se=te[0],ae=te[1],re=(0,c.useState)(""),oe=(0,i.Z)(re,2),ie=oe[0],ce=oe[1],le=(0,c.useState)(""),ue=(0,i.Z)(le,2),de=ue[0],pe=ue[1],fe=(0,c.useState)(""),he=(0,i.Z)(fe,2),me=he[0],ve=he[1],we=(0,c.useState)(""),xe=(0,i.Z)(we,2),ge=xe[0],je=xe[1],Ze=(0,c.useState)(""),Se=(0,i.Z)(Ze,2),ye=Se[0],be=Se[1],Ce=(0,c.useState)([]),ke=(0,i.Z)(Ce,2),Pe=ke[0],Ne=ke[1],Ie=(0,c.useState)([]),Ae=(0,i.Z)(Ie,2),Me=Ae[0],Le=Ae[1],ze=[{label:"Edit",id:"edit",cell:function(e){return(0,z.jsx)(G,{row:e,editRow:function(){Oe(e)}})}},{label:"Alias",selector:"pwdname",id:"pwdname",cell:function(e){return e.pwdname}},{label:"Type",selector:"ptype",id:"ptype",cell:function(e){return e.ptype}},{label:"UserName",selector:"userName",id:"userName",cell:function(e){return(0,z.jsx)("span",{children:e.showPass?e.userName:"********"})}},{label:"Password",selector:"pwd",cell:function(e){return(0,z.jsx)("span",{children:e.showPass?e.pwd:"********"})}},{label:"View",sortable:!1,cell:function(e){return(0,z.jsx)(R,{showPass:A,set:function(){je(e),q(!X)}})}},{label:"Trash",sortable:!1,cell:function(e){return(0,z.jsx)(O,{row:e,deleteRow:function(){return Ue(e)}})}}];(0,c.useEffect)((function(){Re()}),[]),(0,c.useEffect)((function(){if(se.length){var e=(Me.length?Me:Pe).filter((function(e){var n,t,s=e.userName,a=e.pwdName,r=e.pType;return n=(null===s||void 0===s?void 0:s.toLowerCase().startsWith(se.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().startsWith(se.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().startsWith(se.toLowerCase())),t=(null===s||void 0===s?void 0:s.toLowerCase().includes(se.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().includes(se.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().includes(se.toLowerCase())),n||(!n&&t?t:null)}));Ne((0,o.Z)(e))}else Ne((0,o.Z)(Me))}),[se]);var Ge=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0e09ca7a4644c68c6c002ed1338bb40b",e.next=3,M.pbkdf2Sync(n,"0e09ca7a4644c68c6c002ed1338bb40b",1e3,20,"sha512").toString("hex");case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Oe=function(e){var n=e.ptype,t=e.pwd,s=e.pwdname,a=e.userName;ce(n),J(!0),T(e),ee(t),pe(a),ve(s)},Re=function(){var e=JSON.parse(sessionStorage.getItem("logInUserData"));e&&u().post("/backendapi/pwd/list",{user:e._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){for(var n,t,s=0;s<(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.length);s+=1){var a;e.data[s].ptype=(0,k.Y)(e.data[s].ptype),e.data[s].pwd=(0,k.Y)(e.data[s].pwd),e.data[s].pwdId=(0,k.Y)(e.data[s].pwdId),e.data[s].pwdname=(0,k.Y)(e.data[s].pwdname),e.data[s].userName=(0,k.Y)(e.data[s].userName)}Ne(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.reverse()),Le(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.reverse())}))},De=function(e,n){var t=Pe.map((function(e){return Object.assign({},e)}));t[n].showPass=e,Ne(t),U(e)},Ue=function(e){u().post("/backendapi/pwd/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){n&&P.A9;var t=Pe.filter((function(n){return n._id!==e._id}));Ne(t),Le(t)})),We(!1,null)},We=function(e,n){},Ye=JSON.parse(sessionStorage.getItem("logInUserData")),Ee="";return Ye&&((Ee=Ye.pwdtime)>10||Ee<2)&&(Ee=3),(0,z.jsxs)(d.Z,{children:[(0,z.jsxs)(m.Z,{open:X,onClose:function(){q(!X),be(""),je("")},fade:!1,children:[(0,z.jsx)(g.Z,{children:"Confirm your identity"}),(0,z.jsxs)(v.Z,{children:["Enter your login password to continue",(0,z.jsx)(P.nv,{type:"password",id:"password",placeholder:"Password",value:ye,onChange:function(e){be(e.target.value)}}),(0,z.jsx)(j.Z,{children:(0,z.jsxs)("span",{children:["Your password will only be visible for ",Ee," seconds!"]})})]}),(0,z.jsxs)(w.Z,{children:[(0,z.jsx)(x.Z,{color:""===ye?"primary":"success",disabled:""===ye,onClick:function(){var e=JSON.parse(sessionStorage.getItem("logInUserData")).pwdtime;(e>10||e<2)&&(e=3),Ge(ye).then((function(n){if(n!==sessionStorage.getItem("secretkey"))return(0,z.jsx)(P.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Wrong Password",severity:"warning"});var t=Pe.indexOf(ge);De(!0,t),setTimeout((function(){De(!1,t),U(!1)}),e?1e3*e:3e3),q(!X),be("")}))},children:"Accept"})," "]})]}),(0,z.jsxs)(Z.ZP,{container:!0,spacing:2,sx:{p:.5},children:[(0,z.jsx)(Z.ZP,{item:!0,xs:12,sm:8,children:(0,z.jsx)(Z.ZP,{item:!0,children:(0,z.jsxs)(S.Z,{children:[(0,z.jsx)(P.ll,{title:E?"Edit Password":"Save new Password"}),(0,z.jsxs)(y.Z,{children:[(0,z.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,z.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,z.jsx)(C.gc,{id:"color",name:"color",options:D,onChange:function(e,n){return ce(n?n.value:"")},value:(0,L.NA)(D,ie),renderInput:function(e){return(0,z.jsx)(P.nv,(0,s.Z)((0,s.Z)({},e),{},{placeholder:"Password Type *"}))}})}),(0,z.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,z.jsx)(P.nv,{name:"accountNumber",id:"accountNumberMulti",placeholder:"Name of ".concat(ie," *"),value:me,onChange:function(e){var n=e.target.value.trim();ve(n?e.target.value:"")}})}),(0,z.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,z.jsx)(P.nv,{name:"userName1",id:"userNameMulti1",placeholder:"User Name",value:de,onChange:function(e){var n=e.target.value.trim();pe(n||"")}})}),(0,z.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,z.jsx)(P.nv,{type:"password",name:"name",id:"nameMultiPassword",placeholder:"Password *",value:$,onChange:function(e){ee(e.target.value)}})})]}),(0,z.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:[(0,z.jsx)(C.AG,{label:E?"Cancel":"Reset",handleClick:function(){return J(!1),ee(""),ce(""),pe(""),void ve("")}}),(0,z.jsx)(C.k4,{isLoading:l,label:E?"Update":"Add",handleClick:function(e){!l&&(E?function(e){if(f(!0),e.preventDefault(),""===ie||""===$||""===me)return f(!1),(0,z.jsx)(P.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mandatory Field Missing !!",severity:"warning"});var n={showPass:!1,pwdname:(0,k.G)(me),pwd:(0,k.G)($),ptype:(0,k.G)(ie),userName:(0,k.G)(de),user:JSON.parse(sessionStorage.getItem("logInUserData"))._id,_id:H._id};Ne(""),ee(""),J(!1),T(null),ce(""),pe(""),ve(""),u().post("/backendapi/pwd/update",n,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return Re(),f(!1),(0,z.jsx)(P.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Password saved successfully"})}))}(e):function(e){if(f(!0),e.preventDefault(),""===ie||""===$||""===me)return f(!1),(0,z.jsx)(P.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mandatory Field Missing !!",severity:"warning"});var n={pwdname:me,pwd:$,showPass:!1,userName:de,accountNumber:me},t={showPass:!1,pwdname:(0,k.G)(me),pwd:(0,k.G)($),ptype:(0,k.G)(ie),userName:(0,k.G)(de),user:JSON.parse(sessionStorage.getItem("logInUserData"))._id};Pe.push(n),Ne(""),ee(""),ce(""),pe(""),ve(""),u().post("/backendapi/pwd/savepwd",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return Re(),f(!1),(0,z.jsx)(P.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Password saved successfully"})}))}(e))}})]})]})]})})}),(0,z.jsx)(h.Z,{}),(0,z.jsx)(Z.ZP,{item:!0,xs:12,children:(0,z.jsxs)(S.Z,{children:[(0,z.jsxs)(Z.ZP,{container:!0,justifyContent:"space-around",spacing:2,children:[(0,z.jsx)(Z.ZP,{item:!0,children:(0,z.jsx)(b.Z,{color:"text.secondary",gutterBottom:!0,children:"Saved Passwords"})}),(0,z.jsx)(Z.ZP,{item:!0,children:(0,z.jsx)(p.Z,{onChange:function(e){return function(e){ae(e.target.value)}(e)},placeholder:"Search"})})]}),(0,z.jsxs)(y.Z,{children:[0===(null===Pe||void 0===Pe?void 0:Pe.length)&&(0,z.jsx)(b.Z,{children:"No records found!!!"}),(null===Pe||void 0===Pe?void 0:Pe.length)>0&&(0,z.jsx)(P.Gn,{rows:Pe,columns:ze})]})]})})]})]})}},35192:function(e,n,t){"use strict";var s=t(54750),a=t(46417);n.Z=(0,s.Z)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},71207:function(e,n,t){"use strict";var s=t(54750),a=t(46417);n.Z=(0,s.Z)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},91210:function(e,n,t){"use strict";var s=t(54750),a=t(46417);n.Z=(0,s.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}}]);