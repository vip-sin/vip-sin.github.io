(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[456],{51427:function(e,n,t){"use strict";t.d(n,{EL:function(){return k},IZ:function(){return m},Id:function(){return j},Jj:function(){return Z},Pe:function(){return v},SR:function(){return y},VA:function(){return S},Yu:function(){return p},ZT:function(){return g},cm:function(){return A},is:function(){return h},qi:function(){return f}});var a=t(37762),r=t(74165),i=t(15861),o=t(31881),s=t.n(o),c=t(63861),l=t(97729),u=t(46417),d=JSON.parse(sessionStorage.getItem("logInUserData")),f=function(e){var n=e.user,t=e.token;return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"GET_ALL_DOCS_LOADING",data:!0}),s().get("/backendapi/documents/".concat(null===n||void 0===n?void 0:n._id),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){a({type:"GET_ALL_DOCS_LOADING",data:!1});for(var n=e.data,t=0;t<n.length;t+=1)n[t].desc=(0,l.Y)(n[t].desc),n[t].id=t+1,n[t].expiry=(0,l.Y)(n[t].expiry),n[t].alias=(0,l.Y)(n[t].alias);a({type:"GET_ALL_DOCS",resp:n})})).catch((function(e){a({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},p=function(e){return function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"GET_ALL_DATA_LOADING",data:!0}),n.next=3,s().get("/backendapi/nominee/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){if(t({type:"GET_ALL_DATA_LOADING",data:!1}),null!==n&&void 0!==n&&n.data){var r,i=(0,a.Z)(n.data);try{for(i.s();!(r=i.n()).done;){var o=r.value;o.nomineeId=(null===o||void 0===o?void 0:o.nomineeId)&&(0,l.Y)(o.nomineeId,!0),o.name=(null===o||void 0===o?void 0:o.name)&&(0,l.Y)(o.name,!0),o.relation=(null===o||void 0===o?void 0:o.relation)&&(0,l.Y)(o.relation,!0),o.relation1=(null===o||void 0===o?void 0:o.relation1)&&(0,l.Y)(o.relation1,!0),o.email=(null===o||void 0===o?void 0:o.email)&&(0,l.Y)(o.email,!0),o.primaryContact=(null===o||void 0===o?void 0:o.primaryContact)&&(0,l.Y)(o.primaryContact,!0),o.secondaryContact=(null===o||void 0===o?void 0:o.secondaryContact)&&(0,l.Y)(o.secondaryContact,!0),o.address=(null===o||void 0===o?void 0:o.address)&&(0,l.Y)(o.address,!0)}}catch(s){i.e(s)}finally{i.f()}t({type:"GET_DATA",data:n.data,totalPages:n.length,params:e})}})).catch((function(e){t({type:"GET_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,s().post("/backendapi/users/get",{id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(n({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var t=e.data[0];n({type:"GET_USER_ALL_DATA",data:t})}})).catch((function(e){n({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},v=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"GET_ALL_ASSET_DATA_LOADING",data:!0}),s().get("/backendapi/user/assets/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){n({type:"GET_ALL_ASSET_DATA_LOADING",data:!1});var t=JSON.parse((0,l.Y)(e.data[0]));n({type:"GET_ALL_ASSET_DATA",data:t})})).catch((function(e){n({type:"ERROR_ALL_ASSET_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},m=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!0}),s().get("/backendapi/user/liabilities/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){n({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!1});var t=JSON.parse((0,l.Y)(e.data[0]));n({type:"GET_ALL_LIABILITY_DATA",data:t})})).catch((function(e){n({type:"ERROR_ALL_LIABILITY_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},g=function(e,n){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(a){var i,o,c,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_SPEND_DATA_LOADING",data:!0}),null!==n&&void 0!==n&&n.year&&(i=new Date,o=x(i),c=Number(n.year?n.year:3),i.setMonth(i.getMonth()-c),i.setDate(1),l=x(i),e.dateRangeStart=l,e.dateRangeEnd=o),null!==n&&void 0!==n&&n.labels&&(e.labels=n.labels),t.next=5,s().get("/backendapi/spend/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===n||void 0===n?void 0:n.data,totalPages:n.length,params:e})})).catch((function(e){a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){var n="".concat(e.getMonth()+1);1===n.length&&(n="0".concat(n));var t="".concat(e.getDate());return 1===t.length&&(t="0".concat(t)),[e.getFullYear(),n,t].join("-")},A=function(e){return function(n){return n({type:"FILTER_DATA",value:e})}},y=function(e){return function(n){s().post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){n({type:"DELETE_DATA",obj:e})}))}},Z=function(e){return function(n){s().post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){n({type:"DELETE_DATA",obj:e})}))}},j=function(e){var n={userId:d._id,name:(0,l.G)(e.name,!0),relation:(0,l.G)(e.relation,!0),relation1:(0,l.G)(e.relation1,!0),email:(0,l.G)(e.email,!0),primaryContact:(0,l.G)(e.contact1,!0),secondaryContact:(0,l.G)(e.contact2,!0),address:(0,l.G)(e.address,!0),secrets:e.secrets};return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("/backendapi/nominee/add",n,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){e.data&&(c.A9,"Success"===e.data||e.data,e.data),t(p())}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},S=function(e){var n={_id:e._id,usage:e.usage?e.usage:"Unused",userId:d._id,name:(0,l.G)(e.name,!0),relation:(0,l.G)(e.relation,!0),relation1:(0,l.G)(e.relation1,!0),email:(0,l.G)(e.email,!0),primaryContact:(0,l.G)(e.contact1,!0),secondaryContact:(0,l.G)(e.contact2,!0),address:(0,l.G)(e.address,!0),secrets:e.secrets};return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("/backendapi/nominee/update",n,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,u.jsx)(c.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Nominee Updated Successfully"})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},k=function(e){return function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("/backendapi/update/secrets",{secrets:e,_id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,u.jsx)(c.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},39995:function(e,n,t){"use strict";t(47313);var a=t(51268),r=t.n(a),i=t(19641),o=t(87124),s=t(86240),c=t(46417);function l(e){return(0,c.jsx)(o.Z,{component:"img",image:e.item.img,alt:e.item.label})}n.Z=function(e){var n=[{label:"Random Name #1",description:"Probably !",img:s.oX},{label:"Random Name #2",description:"Hello World!",img:s.XL},{label:"Random Name #3",description:"Probably !",img:s.Ev},{label:"Random Name #4",description:"Hello World!",img:s.yc},{label:"Random Name #5",description:"Hello World!",img:s.Ye}];return(0,c.jsx)(i.ZP,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:(0,c.jsx)(r(),{stopAutoPlayOnHover:!0,navButtonsAlwaysInvisible:!0,swipe:!0,height:160,sx:{alignItems:"center",width:"250px"},animation:"fade",children:n.map((function(e,n){return(0,c.jsx)(l,{item:e},n)}))})})}},54727:function(e,n,t){"use strict";t.d(n,{Yd:function(){return a},p6:function(){return r}}),n.ZP=function(e){var n=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which);if(n=String.fromCharCode(n),!/^[0-9]*$/.test(n))return e.preventDefault(),!1};var a=RegExp(/^[6-9]{1}[0-9]{9}$/),r=function(e,n){var t="";if(!e)return t;var a=new Date(e),r=a.getFullYear(),i="".concat(a.getMonth()+1),o="".concat(a.getDate());if(i.length<2&&(i="0".concat(i)),o.length<2&&(o="0".concat(o)),"dd/mm/yyyy"===n)t=[o,i,r].join("/");else t=[o,i,r].join("-");return t}},97729:function(e,n,t){"use strict";t.d(n,{G:function(){return o},Y:function(){return s}});var a=t(75575),r=t.n(a),i="l@st@rz!",o=function(e,n,t){var a=n?i:sessionStorage.getItem("secretkey");return e&&e.length>0?r().encrypt(t||a,e):e},s=function(e,n,t){var a=n?i:sessionStorage.getItem("secretkey");return e&&e.length>0?r().decrypt(t||a,e):e}},71639:function(e,n,t){"use strict";t.d(n,{RS:function(){return L},fh:function(){return j},zY:function(){return k}});var a=t(1413),r=t(93433),i=t(29439),o=t(47313),s=t(30712),c=t(13760),l=t(80614),u=t(47605),d=t(35898),f=t(19641),p=t(57775),h=t(51057),v=t(56605),m=t(19536),g=t(39995),x=t(86240),A=t(61474),y=t(63861),Z=t(46417),j=function(e){var n=(0,o.useState)(e.file?e.file:[]),t=(0,i.Z)(n,2),f=t[0],p=t[1],h=(0,l.uI)({maxFiles:e.notMulti?1:5,multiple:!e.notMulti,onDrop:function(n){if(1===e.notMulti)e.setfilesOndrop(n),p(n.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})));else{if((f.length?f.filter((function(e){var t;return(null===e||void 0===e?void 0:e.name)===(null===(t=n[0])||void 0===t?void 0:t.name)})):[]).length)return(0,Z.jsx)(y.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"File already added"});e.setfilesOndrop([].concat((0,r.Z)(f),(0,r.Z)(n))),p([].concat((0,r.Z)(f),(0,r.Z)(n)))}}}),v=h.getInputProps,m=h.open,g=null===f||void 0===f?void 0:f.map((function(n){return(0,Z.jsxs)(u.Z,{children:["".concat(n.name.length>15?"".concat(n.name.slice(0,15),"..."):n.name),(0,Z.jsx)(s.Z,{size:15,onClick:function(t){t.stopPropagation(),function(n){e.isMulti?p(f.filter((function(e){return e!==n}))):p([])}(n)}})]},n.name)}));return(0,o.useEffect)((function(){return function(){f.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[f]),(0,o.useEffect)((function(){e.resetDropzone&&p([])}),[e.resetDropzone]),(0,Z.jsxs)(d.Z,{onClick:m,children:[(0,Z.jsx)(y.nv,(0,a.Z)({},v())),(0,Z.jsxs)(u.Z,{sx:{display:"flex",border:"2px solid lightgray",padding:"1rem"},children:[g.length>0?(0,Z.jsx)("aside",{children:g}):"Drag `n` drop Or Browse",(0,Z.jsx)(c.Z,{})]})]})},S=[{value:"Asset",label:"Asset"},{value:"Expenses",label:"Expenses"},{value:"Vault",label:"Document Vault"},{value:"Liability",label:"Liability"},{value:"Postman",label:"Postman"}],k=function(e){var n=e.alias,t=e.setalias,a=e.expiry,r=e.setexpiry,i=e.desc,s=e.setdesc,c=e.handleReset,l=e.isDisabled,u=e.submitDropzone,v=e.setfilesOndrop,m=e.resetDropzone;return(0,Z.jsxs)(o.Fragment,{children:[(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:8,children:(0,Z.jsxs)(p.Z,{children:[(0,Z.jsx)(y.ll,{title:"Upload any file, scans, documents"}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsxs)(f.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(y.nv,{margin:"dense",name:"AttachmentName",id:"AttachmentName",placeholder:"Attachment Name / Alias",value:n,onChange:function(e){var n;return t(null===(n=e.target.value)||void 0===n?void 0:n.trim())}})}),(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(y.nv,{margin:"dense",type:"Date",name:"Date",id:"nameMultiExpiry",placeholder:"Expiry Date",min:(0,x.BZ)(),max:"9999-12-31",value:a,onChange:function(e){return r(e.target.value)}})}),(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(y.nv,{margin:"dense",type:"textarea",name:"name1",id:"nameMultiDescription1",placeholder:"Description",value:i,onChange:function(e){var n;return s(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value)}})}),(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(j,{setfilesOndrop:v,resetDropzone:m,isMulti:!0,notMulti:!1})})]}),(0,Z.jsxs)(d.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,Z.jsx)(A.ZP,{varient:"outlined",label:"Reset",onClick:function(){return c()}}),(0,Z.jsx)(A.ZP,{varient:"contained",label:"Add",disabled:l,onClick:function(e){u(e)}})]})]})]})}),(0,Z.jsx)(g.Z,{})]})},L=function(e){var n,t=e.filter,r=e.handleFilter,i=e.search,o=e.columns,s=e.searchresult;return(0,Z.jsxs)(p.Z,{sx:{minHeight:"300px"},children:[(0,Z.jsxs)(f.ZP,{container:!0,justifyContent:"space-between",sx:{p:2},spacing:2,alignItems:"center",children:[(0,Z.jsx)(f.ZP,{item:!0,lg:4,xs:12,children:(0,Z.jsx)(u.Z,{variant:"secondary",component:"h3",children:"Documents List"})}),(0,Z.jsx)(f.ZP,{item:!0,lg:4,xs:6,children:(0,Z.jsx)(A.gc,{isMulti:!0,id:"optionSelect",onChange:function(e,n){return r(n)},options:S,value:t.map((function(e){var n=S.filter((function(n){return n.value===e.id}));return{value:n[0].value,label:n[0].label}})),renderInput:function(e){return(0,Z.jsx)(y.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Select Category"}))}})}),(0,Z.jsx)(f.ZP,{item:!0,lg:4,xs:6,children:(0,Z.jsx)(v.Z,{type:"text",onChange:function(e){return i(e.target.value)},placeholder:"Search",fullWidth:!0})})]}),(0,Z.jsx)(m.Z,{}),(0,Z.jsx)(h.Z,{children:(0,Z.jsx)(y.Gn,{columns:o,rows:null!==s&&void 0!==s&&s.length?s:null!==(n=e.documentList)&&void 0!==n&&n.length?e.documentList:[]})})]})}},4106:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return J}});var a=t(74165),r=t(15861),i=t(29439),o=t(47313),s=t(64162),c=t.n(s),l=t(9506),u=t(19641),d=t(63861),f=t(96327),p=t(66135),h=t(97729),v=t(54750),m=t(46417),g=(0,v.Z)((0,m.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),x=t(91210),A=t(18377),y=t(35192),Z=t(51427),j=t(1413),S=t(31881),k=t.n(S),L=t(94469),b=t(33604),D=t(69625),_=t(98668),w=t(71003),C=t(86240),E=t(61474),I=sessionStorage.getItem("authtoken"),T=JSON.parse(sessionStorage.getItem("logInUserData")),G=[{value:"1h",label:"1 Hour"},{value:"1d",label:"1 Day"},{value:"1w",label:"1 Week"},{value:"1m",label:"1 Month"}],z=[{value:!0,label:"Allow Download"},{value:!1,label:"Allow View Only"}],M=(0,p.$j)((function(e){var n;return{docsList:null===(n=e.dataList)||void 0===n?void 0:n.docsList}}),(function(e){return{getDocuments:function(n){return e((0,Z.qi)(n))}}}))((function(e){var n=(0,o.useState)(""),t=(0,i.Z)(n,2),a=t[0],r=t[1],s=(0,o.useState)(""),c=(0,i.Z)(s,2),l=c[0],f=c[1],p=(0,o.useState)(""),h=(0,i.Z)(p,2),v=h[0],g=h[1],x=(0,o.useState)(!1),A=(0,i.Z)(x,2),y=A[0],Z=A[1];return console.log(e.loading),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(L.Z,{open:e.modal,onClose:function(){e.toggleModal()},centered:!0,size:"lg",fullWidth:!0,children:[(0,m.jsx)(b.Z,{children:"Send as mail"}),(0,m.jsxs)(D.Z,{children:[e.loading&&(0,m.jsx)(_.Z,{}),!e.loading&&(0,m.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsx)(d.nv,{value:a,label:"Email *",onChange:function(e){return r(e.target.value)},placeholder:"Enter Email"})}),(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsx)(d.nv,{value:l,label:"Name *",onChange:function(e){return f(e.target.value)},placeholder:"Enter Name"})}),(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsx)(E.gc,{id:"data-category",name:"label",onChange:function(e,n){return g(null===n||void 0===n?void 0:n.value)},options:G,value:(0,C.NA)(G,v),renderInput:function(e){return(0,m.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Expiry for Documents *"}))}})}),(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsx)(E.gc,{id:"data-category",onChange:function(e,n){return Z(null===n||void 0===n?void 0:n.value)},name:"label",options:z,value:(0,C.NA)(z,y),renderInput:function(e){return(0,m.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Allow Download"}))}})}),(0,m.jsx)(u.ZP,{item:!0,xs:12,justifyContent:"center",children:(0,m.jsx)(w.Z,{onClick:function(n){if(n.preventDefault(),""===a)return(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Mail Id",severity:"warning"});if(""===l)return(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Name",severity:"warning"});if(""===v)return(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Select Document Expiry",severity:"warning"});var t=new Date;"1m"===v?t.setMonth(t.getMonth()+1):"1d"===v?t.setDate(t.getDate()+1):"1w"===v?t.setDate(t.getDate()+7):"1h"===v&&t.setHours(t.getHours()+1);var i={email:a,name:l,expiry:t,allowdownload:y,docs:e.mailAtt,status:0,user:null===T||void 0===T?void 0:T._id};k().post("/backendapi/documentmail",i,{headers:{Authorization:"Bearer ".concat(I)}}).then((function(n){return"Success"===(null===n||void 0===n?void 0:n.data)?(r(""),f(""),g(""),Z(!1),e.toggleModal(),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent successfully"})):(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent failed. Please check email address",severity:"error"})}))},variant:"contained",children:"Send"})})]})]})]})})})),N=t(71639),O=t(35898),R=t(47605),P=(0,v.Z)((0,m.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),Y=(0,v.Z)((0,m.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),B=t(49461),U=t.n(B),F=function(e){var n=e.modal,t=e.setprevidx,a=e.loading,r=e.bloburl,i=e.selectedforpreview,o=e.selectedatt,s=e.previdx,c=e.setDeleteId,l=e.setopen,d=e.toggleModal,p=e.open,h=e.deletedoc,v=e.preview;return(0,m.jsx)(U(),{children:(0,m.jsxs)(L.Z,{open:n,onClose:function(){d(),t(0)},centered:!0,size:"lg",fullWidth:!0,children:[(0,m.jsx)(b.Z,{toggle:function(){d(),t(0)},children:(0,m.jsxs)(O.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[!a&&(0,m.jsx)("a",{href:r,download:null===i||void 0===i?void 0:i.name,tabIndex:"_balnk",style:{cursor:"pointer",display:"flex"},children:(0,m.jsx)(A.Z,{size:25,color:"primary"})}),!a&&o.length>1&&(0,m.jsx)(y.Z,{style:{cursor:"pointer",display:"flex"},color:"primary",size:25,className:"collapse-icon",onClick:function(){c(i._id),l(!0)}}),(0,m.jsxs)(u.ZP,{style:{justifyContent:"center"},children:[s>0&&!a&&(0,m.jsx)(P,{style:{cursor:"pointer"},color:"primary",size:25,onClick:function(){v(o[s-1]),t(s-1)}}),o.length>s+1&&!a&&(0,m.jsx)(Y,{size:25,style:{cursor:"pointer"},color:"primary",onClick:function(){v(o[s+1]),t(s+1)}})]}),(0,m.jsxs)(R.Z,{style:{color:"var(--warning)",fontSize:"1.45rem",fontWeight:"bold",letterSpacing:"1px"},children:["Preview ",s+1," of ",null===o||void 0===o?void 0:o.length]})]})}),(0,m.jsxs)(D.Z,{className:"justify-content-center",children:[(0,m.jsx)(f.Z,{handleConfirm:function(){h(),l(!1)},isOpen:p,closeModal:function(){return l(!1)}}),a&&(0,m.jsx)(_.Z,{}),!a&&(0,m.jsx)("div",{children:(0,m.jsx)("iframe",{style:{height:"500px",width:"100%"},title:"Aaq",src:"".concat(r)})})]})]})})},H=t(54727),V=sessionStorage.getItem("authtoken"),W=JSON.parse(sessionStorage.getItem("logInUserData")),J=(0,p.$j)((function(e){var n;return{docsList:null===(n=e.dataList)||void 0===n?void 0:n.docsList}}),(function(e){return{getDocuments:function(n){return e((0,Z.qi)(n))}}}))((function(e){var n=[{label:"Send",id:"send",cell:function(e){return(0,m.jsx)(g,{onClick:function(){return He(e.attachment)}})}},{label:"View",id:"view",cell:function(e){return(0,m.jsx)(x.Z,{style:{cursor:"pointer"},size:20,onClick:function(){w(e._id),T(e.attachment),Be(),Ue(e.attachment[0])}})}},{label:"Name / Alias",id:"alias",cell:function(e){return e.alias}},{label:"Expiry",id:"expiry",sortable:!0,cell:function(e){return(null===e||void 0===e?void 0:e.expiry)&&(0,H.p6)(e.expiry.split("T")[0])}},{label:"Created At",id:"createdat",cell:function(e){return(null===e||void 0===e?void 0:e.createdAt)&&(0,H.p6)(e.createdAt.split("T")[0])}},{label:"Type",id:"type",cell:function(e){return e.type}},{label:"Download",id:"download",cell:function(e){return(0,m.jsx)(A.Z,{size:20,onClick:function(){return Fe(e.attachment)}})}},{label:"Trash",id:"trash",cell:function(e){return"Document Vault"===e.type&&(0,m.jsx)(y.Z,{size:20,onClick:function(){Ye(e._id),Ne(!0)}})}}],t=(0,o.useState)(!1),s=(0,i.Z)(t,2),p=s[0],v=s[1],Z=(0,o.useState)(),j=(0,i.Z)(Z,2),S=j[0],L=j[1],b=(0,o.useState)(),D=(0,i.Z)(b,2),_=D[0],w=D[1],C=(0,o.useState)([]),E=(0,i.Z)(C,2),I=E[0],T=E[1],G=(0,o.useState)(0),z=(0,i.Z)(G,2),O=z[0],R=z[1],P=(0,o.useState)([]),Y=(0,i.Z)(P,2),B=Y[0],U=Y[1],J=(0,o.useState)([]),q=(0,i.Z)(J,2),$=q[0],X=q[1],K=(0,o.useState)(!1),Q=(0,i.Z)(K,2),ee=Q[0],ne=Q[1],te=(0,o.useState)(!1),ae=(0,i.Z)(te,2),re=ae[0],ie=ae[1],oe=(0,o.useState)(""),se=(0,i.Z)(oe,2),ce=se[0],le=se[1],ue=(0,o.useState)(""),de=(0,i.Z)(ue,2),fe=de[0],pe=de[1],he=(0,o.useState)(""),ve=(0,i.Z)(he,2),me=ve[0],ge=ve[1],xe=(0,o.useState)([]),Ae=(0,i.Z)(xe,2),ye=Ae[0],Ze=Ae[1],je=(0,o.useState)([]),Se=(0,i.Z)(je,2),ke=Se[0],Le=Se[1],be=(0,o.useState)(),De=(0,i.Z)(be,2),_e=De[0],we=De[1],Ce=(0,o.useState)(!1),Ee=(0,i.Z)(Ce,2),Ie=Ee[0],Te=Ee[1],Ge=(0,o.useState)(!1),ze=(0,i.Z)(Ge,2),Me=ze[0],Ne=ze[1],Oe=(0,o.useState)(!1),Re=(0,i.Z)(Oe,2),Pe=Re[0],Ye=Re[1],Be=function(){v(!p)};(0,o.useEffect)((function(){if(null!==$&&void 0!==$&&$.length){var n,t=[];null===e||void 0===e||null===(n=e.docsList)||void 0===n||n.filter((function(n){var a=n.type,r=!1;return $.forEach((function(i){var o,s;return"all"===(null===i||void 0===i||null===(o=i.name)||void 0===o?void 0:o.toLowerCase())?Ze(e.docsList):(r=(null===i||void 0===i||null===(s=i.name)||void 0===s?void 0:s.toLowerCase())===(null===a||void 0===a?void 0:a.toLowerCase()))?(t.push(n),r):void 0})),r})),Ze(t)}else Ze(e.docsList)}),[$]);var Ue=function(e){ne(!0);var n=sessionStorage.getItem("authtoken");k().get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){var n;L(e.data[0]);var t=null===(n=e.data[0])||void 0===n?void 0:n.media,a=c().decompressFromUTF16(t),r=(0,h.Y)(a);if(!r)return Be(),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Something went wrong",severity:"warning"});for(var i,o=atob(null===r||void 0===r?void 0:r.split("base64,")[1]),s=new Array(o.length),l=0;l<o.length;l++)s[l]=o.charCodeAt(l);var u=new Uint8Array(s),f=new Blob([u],{type:null===(i=e.data[0])||void 0===i?void 0:i.type}),p=URL.createObjectURL(f);we(p),ne(!1)}))},Fe=function(e){e.forEach((function(e){var n=sessionStorage.getItem("authtoken");k().get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){for(var n,t,a,r=(0,h.Y)(null===(n=e.data[0])||void 0===n?void 0:n.media),i=c().decompress(r),o=atob(i.split("base64,")[1]),s=new Array(o.length),l=0;l<o.length;l++)s[l]=o.charCodeAt(l);var u=new Uint8Array(s),d=new Blob([u],{type:null===(t=e.data[0])||void 0===t?void 0:t.type}),f=URL.createObjectURL(d),p=document.createElement("a");p.href=f,p.setAttribute("download","".concat(null===(a=e.data[0])||void 0===a?void 0:a.name)),document.body.appendChild(p),p.click(),p.parentNode.removeChild(p)}))}))},He=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:tn(!0),Ke(!0),t=[],r=0;case 4:if(!(r<n.length)){e.next=10;break}return e.next=7,k().get("/backendapi/sender/msg/".concat(n[r]),{headers:{Authorization:"Bearer ".concat(V)}}).then((function(e){var n,a,r=(0,h.Y)(null===(n=e.data[0])||void 0===n?void 0:n.media),i=c().decompress(r),o=null===(a=e.data[0])||void 0===a?void 0:a.name;t.push({data:i,filename:o})}));case 7:r+=1,e.next=4;break;case 10:sn(t),tn(!1);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){e.getDocuments({user:W,token:V})}),[]),(0,o.useEffect)((function(){Ze(e.docsList)}),[e.docsList]);var Ve=function(e){return new Promise((function(n,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return n(a.result)},a.onerror=function(e){return t(e)}}))},We=function(){le(""),ge(""),pe(""),U([]),ie(!0)},Je=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(t){var r,i,o,s,l,u;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),Te(!0),(null===B||void 0===B||!B.length)&&d.A9,null!==B&&void 0!==B&&B.length){n.next=5;break}return n.abrupt("return");case 5:r=[],(i={}).user=null===W||void 0===W?void 0:W._id,i.type="Document Vault",i.alias=(0,h.G)(ce),i.desc=(0,h.G)(me),i.expiry=(0,h.G)(fe),o=0;case 13:if(!(o<B.length)){n.next=23;break}return n.next=16,Ve(B[o]);case 16:s=n.sent,l=(0,h.G)(s),u=c().compressToUTF16(l),r.push({media:u,name:B[o].name,type:B[o].type,user:null===W||void 0===W?void 0:W._id});case 20:o++,n.next=13;break;case 23:i.attachment=r,k().post("/backendapi/documents/add",i,{headers:{Authorization:"Bearer ".concat(V)}}).then((function(n){We(),"Success"!==n.data&&(d.A9,n.data),e.getDocuments({user:W,token:V})})).catch((function(e){var n,t;le(),ge(),pe(),ie(!0),(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data)&&(d.A9,null===e||void 0===e||null===(t=e.response)||void 0===t||t.data)})).finally((function(){return Te(!1)}));case 26:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),qe=(0,o.useState)(!1),$e=(0,i.Z)(qe,2),Xe=$e[0],Ke=$e[1],Qe=(0,o.useState)(!0),en=(0,i.Z)(Qe,2),nn=en[0],tn=en[1],an=(0,o.useState)([]),rn=(0,i.Z)(an,2),on=rn[0],sn=rn[1];return(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(M,{modal:Xe,toggleModal:function(){return Ke(!Xe)},loading:nn,mailAtt:on}),(0,m.jsx)(f.Z,{handleConfirm:function(){k().delete("/backendapi/document/deletebyid/".concat(Pe),{headers:{Authorization:"Bearer ".concat(V)}}).then((function(n){return e.getDocuments({user:W,token:V}),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Document Deleted Successfully"})})),Ne(!1)},isOpen:Me,closeModal:function(){return Ne(!1)}}),p&&(0,m.jsx)(F,{modal:p,setprevidx:R,loading:ee,bloburl:_e,selectedforpreview:S,selectedatt:I,previdx:O,setDeleteId:Ye,setopen:Ne,open:Me,toggleModal:Be,deletedoc:function(n){k().delete("/backendapi/document/media/deletebyid/".concat(Pe,"/").concat(_),{headers:{Authorization:"Bearer ".concat(V)}}).then((function(n){return e.getDocuments({user:W,token:V}),T([]),R(0),Be(),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Attachment deleted successfully!"})})).catch()},preview:Ue}),(0,m.jsx)(u.ZP,{container:!0,spacing:1,sx:{p:1},children:(0,m.jsx)(N.zY,{alias:ce,setalias:le,expiry:fe,setexpiry:pe,desc:me,setdesc:ge,handleReset:We,isDisabled:Ie||!fe||!B.length||new Date(fe).getTime()<(new Date).getTime(),uploading:Ie,submitDropzone:Je,setfilesOndrop:function(e){ie(!1),U(e)},resetDropzone:re})}),(0,m.jsx)(N.RS,{filter:$,handleFilter:function(e){var n=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){n.push({id:e.value,name:e.label})})),X(n)},search:function(e){if(null!==ye&&void 0!==ye&&ye.length){var n=ye.filter((function(n){var t=n.desc,a=n.alias,r=(null===t||void 0===t?void 0:t.toLowerCase().startsWith(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().startsWith(e.toLowerCase())),i=(null===t||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().includes(e.toLowerCase()));return!(!r&&!i)}));Le(n)}},columns:n,searchresult:ke,documentList:ye})]})}))},18377:function(e,n,t){"use strict";var a=t(54750),r=t(46417);n.Z=(0,a.Z)((0,r.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},91210:function(e,n,t){"use strict";var a=t(54750),r=t(46417);n.Z=(0,a.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}}]);