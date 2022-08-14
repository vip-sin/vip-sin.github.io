(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[105],{51427:function(e,t,n){"use strict";n.d(t,{EL:function(){return k},IZ:function(){return m},Id:function(){return j},Jj:function(){return Z},Pe:function(){return v},SR:function(){return A},VA:function(){return S},Yu:function(){return p},ZT:function(){return g},cm:function(){return y},is:function(){return h},qi:function(){return f}});var a=n(37762),r=n(74165),i=n(15861),o=n(31881),s=n.n(o),c=n(63861),l=n(97729),u=n(46417),d=JSON.parse(sessionStorage.getItem("logInUserData")),f=function(e){var t=e.user,n=e.token;return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"GET_ALL_DOCS_LOADING",data:!0}),s().get("/backendapi/documents/".concat(null===t||void 0===t?void 0:t._id),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){a({type:"GET_ALL_DOCS_LOADING",data:!1});for(var t=e.data,n=0;n<t.length;n+=1)t[n].desc=(0,l.Y)(t[n].desc),t[n].id=n+1,t[n].expiry=(0,l.Y)(t[n].expiry),t[n].alias=(0,l.Y)(t[n].alias);a({type:"GET_ALL_DOCS",resp:t})})).catch((function(e){a({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_ALL_DATA_LOADING",data:!0}),t.next=3,s().get("/backendapi/nominee/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){if(n({type:"GET_ALL_DATA_LOADING",data:!1}),null!==t&&void 0!==t&&t.data){var r,i=(0,a.Z)(t.data);try{for(i.s();!(r=i.n()).done;){var o=r.value;o.nomineeId=(0,l.Y)(o.nomineeId),o.name=(0,l.Y)(o.name),o.relation=(0,l.Y)(o.relation),o.relation1=(0,l.Y)(o.relation1),o.email=(0,l.Y)(o.email),o.primaryContact=(0,l.Y)(o.primaryContact),o.secondaryContact=(0,l.Y)(o.secondaryContact),o.address=(0,l.Y)(o.address)}}catch(s){i.e(s)}finally{i.f()}n({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}})).catch((function(e){n({type:"GET_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,s().post("/backendapi/users/get",{id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(t({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var n=e.data[0];t({type:"GET_USER_ALL_DATA",data:n})}})).catch((function(e){t({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_ALL_ASSET_DATA_LOADING",data:!0}),s().get("/backendapi/user/assets/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){t({type:"GET_ALL_ASSET_DATA_LOADING",data:!1});var n=JSON.parse((0,l.Y)(e.data[0]));t({type:"GET_ALL_ASSET_DATA",data:n})})).catch((function(e){t({type:"ERROR_ALL_ASSET_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!0}),s().get("/backendapi/user/liabilities/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){t({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!1});var n=JSON.parse((0,l.Y)(e.data[0]));t({type:"GET_ALL_LIABILITY_DATA",data:n})})).catch((function(e){t({type:"ERROR_ALL_LIABILITY_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t){return function(){var n=(0,i.Z)((0,r.Z)().mark((function n(a){var i,o,c,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"GET_SPEND_DATA_LOADING",data:!0}),null!==t&&void 0!==t&&t.year&&(i=new Date,o=x(i),c=Number(t.year?t.year:3),i.setMonth(i.getMonth()-c),i.setDate(1),l=x(i),e.dateRangeStart=l,e.dateRangeEnd=o),null!==t&&void 0!==t&&t.labels&&(e.labels=t.labels),n.next=5,s().get("/backendapi/spend/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===t||void 0===t?void 0:t.data,totalPages:t.length,params:e})})).catch((function(e){a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(e){var t="".concat(e.getMonth()+1);1===t.length&&(t="0".concat(t));var n="".concat(e.getDate());return 1===n.length&&(n="0".concat(n)),[e.getFullYear(),t,n].join("-")},y=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},A=function(e){return function(t){s().post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){t({type:"DELETE_DATA",obj:e})}))}},Z=function(e){return function(t){s().post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){t({type:"DELETE_DATA",obj:e})}))}},j=function(e){var t={userId:d._id,name:(0,l.Gf)(e.name),relation:(0,l.Gf)(e.relation),relation1:(0,l.Gf)(e.relation1),email:(0,l.Gf)(e.email),primaryContact:(0,l.Gf)(e.contact1),secondaryContact:(0,l.Gf)(e.contact2),address:(0,l.Gf)(e.address),secrets:e.secrets};return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){e.data&&(c.A9,"Success"===e.data||e.data,e.data),n(p())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){var t={_id:e._id,usage:e.usage?e.usage:"Unused",userId:d._id,name:(0,l.Gf)(e.name),relation:(0,l.Gf)(e.relation),relation1:(0,l.Gf)(e.relation1),email:(0,l.Gf)(e.email),primaryContact:(0,l.Gf)(e.contact1),secondaryContact:(0,l.Gf)(e.contact2),address:(0,l.Gf)(e.address),secrets:e.secrets};return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("/backendapi/nominee/update",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,u.jsx)(c.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Nominee Updated Successfully"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().post("/backendapi/update/secrets",{secrets:e,_id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,u.jsx)(c.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},39995:function(e,t,n){"use strict";n(47313);var a=n(51268),r=n.n(a),i=n(19641),o=n(87124),s=n(86240),c=n(46417);function l(e){return(0,c.jsx)(o.Z,{component:"img",image:e.item.img,alt:e.item.label})}t.Z=function(e){var t=[{label:"Random Name #1",description:"Probably !",img:s.oX},{label:"Random Name #2",description:"Hello World!",img:s.XL},{label:"Random Name #3",description:"Probably !",img:s.Ev},{label:"Random Name #4",description:"Hello World!",img:s.yc},{label:"Random Name #5",description:"Hello World!",img:s.Ye}];return(0,c.jsx)(i.ZP,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:(0,c.jsx)(r(),{stopAutoPlayOnHover:!0,navButtonsAlwaysInvisible:!0,swipe:!0,height:160,sx:{alignItems:"center",width:"250px"},animation:"fade",children:t.map((function(e,t){return(0,c.jsx)(l,{item:e},t)}))})})}},54727:function(e,t,n){"use strict";n.d(t,{Yd:function(){return a},p6:function(){return r}}),t.ZP=function(e){var t=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which);if(t=String.fromCharCode(t),!/^[0-9]*$/.test(t))return e.preventDefault(),!1};var a=RegExp(/^[6-9]{1}[0-9]{9}$/),r=function(e,t){var n="";if(!e)return n;var a=new Date(e),r=a.getFullYear(),i="".concat(a.getMonth()+1),o="".concat(a.getDate());if(i.length<2&&(i="0".concat(i)),o.length<2&&(o="0".concat(o)),"dd/mm/yyyy"===t)n=[o,i,r].join("/");else n=[o,i,r].join("-");return n}},97729:function(e,t,n){"use strict";n.d(t,{Gf:function(){return c},Y:function(){return l},tc:function(){return i}});var a=n(42612),r=n.n(a);function i(e){try{var t=r().md.sha512.create();return t.update(e),t.digest().toHex()}catch(n){return console.log("Error while hashing: ",n),""}}var o=r().random.getBytesSync(16),s=r().random.getBytesSync(16),c=function(e,t,n){if(!e)return e;var a=r().cipher.createCipher("AES-GCM",o);try{a.start({iv:s,additionalData:"binary-encoded string",tagLength:128}),a.update(r().util.createBuffer(e)),a.finish();var i=a.output,c=a.mode.tag;return console.log("keyForge,encryptdata, iv",o,s,c.toHex()),i.toHex()}catch(l){return console.log("Error while encrypting data: ",l),""}},l=function(e,t,n){if(!e)return e;var a=r().cipher.createCipher("AES-GCM",o),i=a.mode.tag;console.log("keyForge decryptdata, iv",o,s,i);try{var c=r().cipher.createDecipher("AES-GCM",o);if(c.start({iv:s,additionalData:"binary-encoded string",tagLength:128,tag:a.mode.tag}),c.update(e),c.finish())return console.log(c.output.toHex()),c.output.toHex();console.log("Error authentication tag didn't match ")}catch(l){return console.log("Error while decrypting data: ",l),""}}},71639:function(e,t,n){"use strict";n.d(t,{RS:function(){return L},fh:function(){return j},zY:function(){return k}});var a=n(1413),r=n(93433),i=n(29439),o=n(47313),s=n(30712),c=n(13760),l=n(80614),u=n(47605),d=n(35898),f=n(19641),p=n(57775),h=n(51057),v=n(56605),m=n(19536),g=n(39995),x=n(86240),y=n(61474),A=n(63861),Z=n(46417),j=function(e){var t=(0,o.useState)(e.file?e.file:[]),n=(0,i.Z)(t,2),f=n[0],p=n[1],h=(0,l.uI)({maxFiles:e.notMulti?1:5,multiple:!e.notMulti,onDrop:function(t){if(1===e.notMulti)e.setfilesOndrop(t),p(t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})));else{if((f.length?f.filter((function(e){var n;return(null===e||void 0===e?void 0:e.name)===(null===(n=t[0])||void 0===n?void 0:n.name)})):[]).length)return(0,Z.jsx)(A.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"File already added"});e.setfilesOndrop([].concat((0,r.Z)(f),(0,r.Z)(t))),p([].concat((0,r.Z)(f),(0,r.Z)(t)))}}}),v=h.getInputProps,m=h.open,g=null===f||void 0===f?void 0:f.map((function(t){return(0,Z.jsxs)(u.Z,{children:["".concat(t.name.length>15?"".concat(t.name.slice(0,15),"..."):t.name),(0,Z.jsx)(s.Z,{size:15,onClick:function(n){n.stopPropagation(),function(t){e.isMulti?p(f.filter((function(e){return e!==t}))):p([])}(t)}})]},t.name)}));return(0,o.useEffect)((function(){return function(){f.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[f]),(0,o.useEffect)((function(){e.resetDropzone&&p([])}),[e.resetDropzone]),(0,Z.jsx)(d.Z,{children:(0,Z.jsxs)("div",{onClick:m,children:[(0,Z.jsx)(A.nv,(0,a.Z)({},v())),(0,Z.jsxs)(u.Z,{sx:{display:"flex",border:"2px solid lightgray",padding:"1rem",margin:"2rem"},children:[g.length>0?(0,Z.jsx)("aside",{children:g}):"Drag `n` drop Or Browse",(0,Z.jsx)(c.Z,{})]})]})})},S=[{value:"Asset",label:"Asset"},{value:"Expenses",label:"Expenses"},{value:"Vault",label:"Document Vault"},{value:"Liability",label:"Liability"},{value:"Postman",label:"Postman"}],k=function(e){var t=e.alias,n=e.setalias,a=e.expiry,r=e.setexpiry,i=e.desc,s=e.setdesc,c=e.handleReset,l=e.isDisabled,u=e.submitDropzone,v=e.setfilesOndrop,m=e.resetDropzone;return(0,Z.jsxs)(o.Fragment,{children:[(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:8,children:(0,Z.jsxs)(p.Z,{children:[(0,Z.jsx)(A.ll,{title:"Upload any file, scans, documents"}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsxs)(f.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(A.nv,{margin:"dense",name:"AttachmentName",id:"AttachmentName",placeholder:"Attachment Name / Alias",value:t,onChange:function(e){var t;return n(null===(t=e.target.value)||void 0===t?void 0:t.trim())}})}),(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(A.nv,{margin:"dense",type:"Date",name:"Date",id:"nameMultiExpiry",placeholder:"Expiry Date",min:(0,x.BZ)(),max:"9999-12-31",value:a,onChange:function(e){return r(e.target.value)}})}),(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(A.nv,{margin:"dense",type:"textarea",name:"name1",id:"nameMultiDescription1",placeholder:"Description",value:i,onChange:function(e){var t;return s(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}})}),(0,Z.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(j,{setfilesOndrop:v,resetDropzone:m,isMulti:!0,notMulti:!1})})]}),(0,Z.jsxs)(d.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,Z.jsx)(y.ZP,{varient:"outlined",label:"Reset",onClick:function(){return c()}}),(0,Z.jsx)(y.ZP,{varient:"contained",label:"Add",disabled:l,onClick:function(e){u(e)}})]})]})]})}),(0,Z.jsx)(g.Z,{})]})},L=function(e){var t,n=e.filter,r=e.handleFilter,i=e.search,o=e.columns,s=e.searchresult;return(0,Z.jsxs)(p.Z,{sx:{minHeight:"300px"},children:[(0,Z.jsxs)(f.ZP,{container:!0,justifyContent:"space-between",sx:{p:2},spacing:3,children:[(0,Z.jsx)(f.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"secondary",component:"h3",children:"Documents List"})}),(0,Z.jsx)(f.ZP,{item:!0,children:(0,Z.jsx)(y.gc,{isMulti:!0,id:"optionSelect",onChange:function(e,t){return r(t)},options:S,value:n.map((function(e){var t=S.filter((function(t){return t.value===e.id}));return{value:t[0].value,label:t[0].label}})),renderInput:function(e){return(0,Z.jsx)(A.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Select Category"}))}})}),(0,Z.jsx)(f.ZP,{item:!0,children:(0,Z.jsx)(v.Z,{type:"text",className:"searchPlaceholder",onChange:function(e){return i(e.target.value)},placeholder:"Search"})})]}),(0,Z.jsx)(m.Z,{}),(0,Z.jsx)(h.Z,{children:(0,Z.jsx)(A.Gn,{columns:o,rows:null!==s&&void 0!==s&&s.length?s:null!==(t=e.documentList)&&void 0!==t&&t.length?e.documentList:[]})})]})}},4106:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var a=n(74165),r=n(15861),i=n(29439),o=n(47313),s=n(64162),c=n.n(s),l=n(9506),u=n(19641),d=n(63861),f=n(96327),p=n(66135),h=n(97729),v=n(54750),m=n(46417),g=(0,v.Z)((0,m.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),x=n(91210),y=n(18377),A=n(35192),Z=n(51427),j=n(1413),S=n(56605),k=n(47992),L=n(31881),b=n.n(L),D=n(94469),_=n(33604),w=n(69625),C=n(98668),E=n(57204),T=n(69746),I=n(71003),G=n(86240),M=n(61474),z=sessionStorage.getItem("authtoken"),N=JSON.parse(sessionStorage.getItem("logInUserData")),P=[{value:"1h",label:"1 Hour"},{value:"1d",label:"1 Day"},{value:"1w",label:"1 Week"},{value:"1m",label:"1 Month"}],O=[{value:!0,label:"Allow Download"},{value:!1,label:"Allow View Only"}],R=(0,p.$j)((function(e){var t;return{docsList:null===(t=e.dataList)||void 0===t?void 0:t.docsList}}),(function(e){return{getDocuments:function(t){return e((0,Z.qi)(t))}}}))((function(e){var t=(0,o.useState)(""),n=(0,i.Z)(t,2),a=n[0],r=n[1],s=(0,o.useState)(""),c=(0,i.Z)(s,2),l=c[0],f=c[1],p=(0,o.useState)(""),h=(0,i.Z)(p,2),v=h[0],g=h[1],x=(0,o.useState)(!1),y=(0,i.Z)(x,2),A=y[0],Z=y[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(D.Z,{open:e.modal,toggle:function(){e.toggleModal()},centered:!0,size:"lg",children:[(0,m.jsx)(_.Z,{toggle:function(){e.toggleModal()},cssModule:{"modal-title":"w-100 text-center"},children:"Send as mail"}),(0,m.jsxs)(w.Z,{children:[e.loading&&(0,m.jsx)(C.Z,{}),!e.loading&&(0,m.jsx)("div",{children:(0,m.jsxs)(E.Z,{children:[(0,m.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsxs)(T.Z,{className:"form-label-group",children:[(0,m.jsx)(S.Z,{type:"text",name:"name",id:"nameMultiname",value:a,placeholder:"Email *",onChange:function(e){return r(e.target.value)}}),(0,m.jsx)(k.Z,{className:G.LP?"dark-label":"light-label",children:"Email"})]})}),(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsxs)(T.Z,{className:"form-label-group",children:[(0,m.jsx)(S.Z,{type:"text",name:"name",id:"nameMultiname",value:l,placeholder:"Name *",onChange:function(e){return f(e.target.value)}}),(0,m.jsx)(k.Z,{children:"Name"})]})}),(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsx)(M.gc,{id:"data-category",name:"label",onChange:function(e,t){return g(null===t||void 0===t?void 0:t.value)},options:P,value:(0,G.NA)(P,v),renderInput:function(e){return(0,m.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Expiry for Documents *"}))}})}),(0,m.jsx)(u.ZP,{item:!0,xs:6,children:(0,m.jsx)(M.gc,{id:"data-category",onChange:function(e,t){return Z(null===t||void 0===t?void 0:t.value)},name:"label",options:O,value:(0,G.NA)(O,A),renderInput:function(e){return(0,m.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Allow Download"}))}})})]}),(0,m.jsx)(u.ZP,{container:!0,spacing:2,children:(0,m.jsx)(u.ZP,{item:!0,xs:12,children:(0,m.jsx)(I.Z,{onClick:function(t){if(t.preventDefault(),""===a)return(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Mail Id",severity:"warning"});if(""===l)return(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Name",severity:"warning"});if(""===v)return(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Select Document Expiry",severity:"warning"});var n=new Date;"1m"===v?n.setMonth(n.getMonth()+1):"1d"===v?n.setDate(n.getDate()+1):"1w"===v?n.setDate(n.getDate()+7):"1h"===v&&n.setHours(n.getHours()+1);var i={email:a,name:l,expiry:n,allowdownload:A,docs:e.mailAtt,status:0,user:null===N||void 0===N?void 0:N._id};b().post("/backendapi/documentmail",i,{headers:{Authorization:"Bearer ".concat(z)}}).then((function(t){return"Success"===(null===t||void 0===t?void 0:t.data)?(r(""),f(""),g(""),Z(!1),e.toggleModal(),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent successfully"})):(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent failed. Please check email address",severity:"error"})}))},children:"Send"})})})]})})]})]})})})),B=n(71639),Y=(0,v.Z)((0,m.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),U=(0,v.Z)((0,m.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),H=n(49461),F=n.n(H),V=function(e){var t=e.modal,n=e.setprevidx,a=e.loading,r=e.bloburl,i=e.selectedforpreview,o=e.selectedatt,s=e.previdx,c=e.setDeleteId,l=e.setopen,d=e.toggleModal,p=e.open,h=e.deletedoc,v=e.preview;return(0,m.jsx)(F(),{children:(0,m.jsxs)(D.Z,{isOpen:t,toggle:function(){d(),n(0)},centered:!0,size:"lg",children:[(0,m.jsx)(_.Z,{toggle:function(){d(),n(0)},cssModule:{"modal-title":"w-100 text-center"},children:(0,m.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,m.jsxs)(u.ZP,{children:[!a&&(0,m.jsx)("a",{href:r,download:null===i||void 0===i?void 0:i.name,tabIndex:"_balnk",style:{margin:"10px",cursor:"pointer"},children:(0,m.jsx)(y.Z,{size:25,className:"collapse-icon"})}),!a&&o.length>1&&(0,m.jsx)(A.Z,{style:{margin:"5px",cursor:"pointer"},size:25,className:"collapse-icon",onClick:function(){c(i._id),l(!0)}})]}),(0,m.jsxs)(u.ZP,{style:{color:"var(--warning)",fontSize:"1.45rem",fontWeight:"bold",letterSpacing:"1px"},children:["Preview ",s+1," of ",null===o||void 0===o?void 0:o.length]}),(0,m.jsxs)(u.ZP,{style:{justifyContent:"center"},children:[s>0&&!a&&(0,m.jsx)(Y,{style:{cursor:"pointer"},size:25,onClick:function(){v(o[s-1]),n(s-1)}}),o.length>s+1&&!a&&(0,m.jsx)(U,{size:25,style:{cursor:"pointer"},onClick:function(){v(o[s+1]),n(s+1)}})]})]})}),(0,m.jsxs)(w.Z,{className:"justify-content-center",children:[(0,m.jsx)(f.Z,{handleConfirm:function(){h(),l(!1)},isOpen:p,closeModal:function(){return l(!1)}}),a&&(0,m.jsx)(C.Z,{}),!a&&(0,m.jsx)("div",{children:(0,m.jsx)("iframe",{style:{height:"400px",width:"100%"},className:"myiframe",title:"Aaq",src:"".concat(r,"#zoom=200")})})]})]})})},W=n(54727),J=sessionStorage.getItem("authtoken"),q=JSON.parse(sessionStorage.getItem("logInUserData")),$=(0,p.$j)((function(e){var t;return{docsList:null===(t=e.dataList)||void 0===t?void 0:t.docsList}}),(function(e){return{getDocuments:function(t){return e((0,Z.qi)(t))}}}))((function(e){var t=[{label:"Send",id:"send",cell:function(e){return(0,m.jsx)(g,{onClick:function(){return Fe(e.attachment)}})}},{label:"View",id:"view",cell:function(e){return(0,m.jsx)(x.Z,{style:{cursor:"pointer"},size:20,onClick:function(){w(e._id),I(e.attachment),Ye(),Ue(e.attachment[0])}})}},{label:"Name / Alias",id:"alias",cell:function(e){return e.alias}},{label:"Expiry",id:"expiry",sortable:!0,cell:function(e){return(null===e||void 0===e?void 0:e.expiry)&&(0,W.p6)(e.expiry.split("T")[0])}},{label:"Created At",id:"createdat",cell:function(e){return(null===e||void 0===e?void 0:e.createdAt)&&(0,W.p6)(e.createdAt.split("T")[0])}},{label:"Type",id:"type",cell:function(e){return e.type}},{label:"Download",id:"download",cell:function(e){return(0,m.jsx)(y.Z,{size:20,onClick:function(){return He(e.attachment)}})}},{label:"Trash",id:"trash",cell:function(e){return"Document Vault"===e.type&&(0,m.jsx)(A.Z,{size:20,onClick:function(){Be(e._id),Ne(!0)}})}}],n=(0,o.useState)(!1),s=(0,i.Z)(n,2),p=s[0],v=s[1],Z=(0,o.useState)(),j=(0,i.Z)(Z,2),S=j[0],k=j[1],L=(0,o.useState)(),D=(0,i.Z)(L,2),_=D[0],w=D[1],C=(0,o.useState)([]),E=(0,i.Z)(C,2),T=E[0],I=E[1],G=(0,o.useState)(0),M=(0,i.Z)(G,2),z=M[0],N=M[1],P=(0,o.useState)([]),O=(0,i.Z)(P,2),Y=O[0],U=O[1],H=(0,o.useState)([]),F=(0,i.Z)(H,2),$=F[0],X=F[1],K=(0,o.useState)(!1),Q=(0,i.Z)(K,2),ee=Q[0],te=Q[1],ne=(0,o.useState)(!1),ae=(0,i.Z)(ne,2),re=ae[0],ie=ae[1],oe=(0,o.useState)(""),se=(0,i.Z)(oe,2),ce=se[0],le=se[1],ue=(0,o.useState)(""),de=(0,i.Z)(ue,2),fe=de[0],pe=de[1],he=(0,o.useState)(""),ve=(0,i.Z)(he,2),me=ve[0],ge=ve[1],xe=(0,o.useState)([]),ye=(0,i.Z)(xe,2),Ae=ye[0],Ze=ye[1],je=(0,o.useState)([]),Se=(0,i.Z)(je,2),ke=Se[0],Le=Se[1],be=(0,o.useState)(),De=(0,i.Z)(be,2),_e=De[0],we=De[1],Ce=(0,o.useState)(!1),Ee=(0,i.Z)(Ce,2),Te=Ee[0],Ie=Ee[1],Ge=(0,o.useState)(!1),Me=(0,i.Z)(Ge,2),ze=Me[0],Ne=Me[1],Pe=(0,o.useState)(!1),Oe=(0,i.Z)(Pe,2),Re=Oe[0],Be=Oe[1],Ye=function(){v(!p)};(0,o.useEffect)((function(){if(null!==$&&void 0!==$&&$.length){var t,n=[];null===e||void 0===e||null===(t=e.docsList)||void 0===t||t.filter((function(t){var a=t.type,r=!1;return $.forEach((function(i){var o,s;return"all"===(null===i||void 0===i||null===(o=i.name)||void 0===o?void 0:o.toLowerCase())?Ze(e.docsList):(r=(null===i||void 0===i||null===(s=i.name)||void 0===s?void 0:s.toLowerCase())===(null===a||void 0===a?void 0:a.toLowerCase()))?(n.push(t),r):void 0})),r})),Ze(n)}else Ze(e.docsList)}),[$]);var Ue=function(e){te(!0);var t=sessionStorage.getItem("authtoken");b().get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){var t;k(e.data[0]);var n=null===(t=e.data[0])||void 0===t?void 0:t.media,a=c().decompressFromUTF16(n),r=(0,h.Y)(a);if(!r)return Ye(),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Something went wrong",severity:"warning"});for(var i,o=atob(null===r||void 0===r?void 0:r.split("base64,")[1]),s=new Array(o.length),l=0;l<o.length;l++)s[l]=o.charCodeAt(l);var u=new Uint8Array(s),f=new Blob([u],{type:null===(i=e.data[0])||void 0===i?void 0:i.type}),p=URL.createObjectURL(f);we(p),te(!1)}))},He=function(e){e.forEach((function(e){var t=sessionStorage.getItem("authtoken");b().get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){for(var t,n,a,r=(0,h.Y)(null===(t=e.data[0])||void 0===t?void 0:t.media),i=c().decompress(r),o=atob(i.split("base64,")[1]),s=new Array(o.length),l=0;l<o.length;l++)s[l]=o.charCodeAt(l);var u=new Uint8Array(s),d=new Blob([u],{type:null===(n=e.data[0])||void 0===n?void 0:n.type}),f=URL.createObjectURL(d),p=document.createElement("a");p.href=f,p.setAttribute("download","".concat(null===(a=e.data[0])||void 0===a?void 0:a.name)),document.body.appendChild(p),p.click(),p.parentNode.removeChild(p)}))}))},Fe=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:nt(!0),Ke(!0),n=[],r=0;case 4:if(!(r<t.length)){e.next=10;break}return e.next=7,b().get("/backendapi/sender/msg/".concat(t[r]),{headers:{Authorization:"Bearer ".concat(J)}}).then((function(e){var t,a,r=(0,h.Y)(null===(t=e.data[0])||void 0===t?void 0:t.media),i=c().decompress(r),o=null===(a=e.data[0])||void 0===a?void 0:a.name;n.push({data:i,filename:o})}));case 7:r+=1,e.next=4;break;case 10:ot(n),nt(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){e.getDocuments({user:q,token:J})}),[]),(0,o.useEffect)((function(){Ze(e.docsList)}),[e.docsList]);var Ve=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},We=function(){le(""),ge(""),pe(""),U([]),ie(!0)},Je=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n){var r,i,o,s,l,u;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),Ie(!0),(null===Y||void 0===Y||!Y.length)&&d.A9,null!==Y&&void 0!==Y&&Y.length){t.next=5;break}return t.abrupt("return");case 5:r=[],(i={}).user=null===q||void 0===q?void 0:q._id,i.type="Document Vault",i.alias=(0,h.Gf)(ce),i.desc=(0,h.Gf)(me),i.expiry=(0,h.Gf)(fe),o=0;case 13:if(!(o<Y.length)){t.next=23;break}return t.next=16,Ve(Y[o]);case 16:s=t.sent,l=(0,h.Gf)(s),u=c().compressToUTF16(l),r.push({media:u,name:Y[o].name,type:Y[o].type,user:null===q||void 0===q?void 0:q._id});case 20:o++,t.next=13;break;case 23:i.attachment=r,b().post("/backendapi/documents/add",i,{headers:{Authorization:"Bearer ".concat(J)}}).then((function(t){We(),"Success"!==t.data&&(d.A9,t.data),e.getDocuments({user:q,token:J})})).catch((function(e){var t,n;le(),ge(),pe(),ie(!0),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&(d.A9,null===e||void 0===e||null===(n=e.response)||void 0===n||n.data)})).finally((function(){return Ie(!1)}));case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),qe=(0,o.useState)(!1),$e=(0,i.Z)(qe,2),Xe=$e[0],Ke=$e[1],Qe=(0,o.useState)(!0),et=(0,i.Z)(Qe,2),tt=et[0],nt=et[1],at=(0,o.useState)([]),rt=(0,i.Z)(at,2),it=rt[0],ot=rt[1];return(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(R,{modal:Xe,toggleModal:function(){return Ke(!Xe)},loading:tt,mailAtt:it}),(0,m.jsx)(f.Z,{handleConfirm:function(){b().delete("/backendapi/document/deletebyid/".concat(Re),{headers:{Authorization:"Bearer ".concat(J)}}).then((function(t){return e.getDocuments({user:q,token:J}),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Document Deleted Successfully"})})),Ne(!1)},isOpen:ze,closeModal:function(){return Ne(!1)}}),p&&(0,m.jsx)(V,{modal:p,setprevidx:N,loading:ee,bloburl:_e,selectedforpreview:S,selectedatt:T,previdx:z,setDeleteId:Be,setopen:Ne,open:ze,toggleModal:Ye,deletedoc:function(t){b().delete("/backendapi/document/media/deletebyid/".concat(Re,"/").concat(_),{headers:{Authorization:"Bearer ".concat(J)}}).then((function(t){return e.getDocuments({user:q,token:J}),I([]),N(0),Ye(),(0,m.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Attachment deleted successfully!"})})).catch()},preview:Ue}),(0,m.jsx)(u.ZP,{container:!0,spacing:1,sx:{p:1},children:(0,m.jsx)(B.zY,{alias:ce,setalias:le,expiry:fe,setexpiry:pe,desc:me,setdesc:ge,handleReset:We,isDisabled:Te||!fe||!Y.length||new Date(fe).getTime()<(new Date).getTime(),uploading:Te,submitDropzone:Je,setfilesOndrop:function(e){ie(!1),U(e)},resetDropzone:re})}),(0,m.jsx)(B.RS,{filter:$,handleFilter:function(e){var t=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){t.push({id:e.value,name:e.label})})),X(t)},search:function(e){if(null!==Ae&&void 0!==Ae&&Ae.length){var t=Ae.filter((function(t){var n=t.desc,a=t.alias,r=(null===n||void 0===n?void 0:n.toLowerCase().startsWith(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().startsWith(e.toLowerCase())),i=(null===n||void 0===n?void 0:n.toLowerCase().includes(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().includes(e.toLowerCase()));return!(!r&&!i)}));Le(t)}},columns:t,searchresult:ke,documentList:Ae})]})}))},18377:function(e,t,n){"use strict";var a=n(54750),r=n(46417);t.Z=(0,a.Z)((0,r.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},91210:function(e,t,n){"use strict";var a=n(54750),r=n(46417);t.Z=(0,a.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},25819:function(){}}]);