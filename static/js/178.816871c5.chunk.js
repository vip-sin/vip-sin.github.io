"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[178],{51427:function(e,n,t){t.d(n,{EL:function(){return v},cm:function(){return p},is:function(){return f},qi:function(){return d}});var i=t(74165),r=t(15861),o=t(31881),a=t.n(o),l=t(69125),s=t(97729),c=t(46417),u=JSON.parse(sessionStorage.getItem("logInUserData")),d=function(e){var n=e.user,t=e.token;return function(){var e=(0,r.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:"GET_ALL_DOCS_LOADING",data:!0}),a().get("/backendapi/documents/".concat(null===n||void 0===n?void 0:n._id),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){r({type:"GET_ALL_DOCS_LOADING",data:!1});for(var n=e.data,t=0;t<n.length;t+=1)n[t].desc=(0,s.Y)(n[t].desc),n[t].id=t+1,n[t].expiry=(0,s.Y)(n[t].expiry),n[t].alias=(0,s.Y)(n[t].alias);r({type:"GET_ALL_DOCS",resp:n})})).catch((function(e){r({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},f=function(){return function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,a().post("/backendapi/users/get",{id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(n({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var t=e.data[0];n({type:"GET_USER_ALL_DATA",data:t})}})).catch((function(e){n({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},p=function(e){return function(n){return n({type:"FILTER_DATA",value:e})}},v=function(e){return function(){var n=(0,r.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().post("/backendapi/update/secrets",{secrets:e,_id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,c.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},39995:function(e,n,t){t(47313);var i=t(51268),r=t.n(i),o=t(71535),a=t(60236),l=t(86282),s=t(46417);function c(e){return(0,s.jsx)(a.Z,{component:"img",image:e.item.img,alt:e.item.label})}n.Z=function(e){var n=[{label:"Random Name #1",description:"Probably !",img:l.oX},{label:"Random Name #2",description:"Hello World!",img:l.XL},{label:"Random Name #3",description:"Probably !",img:l.Ev},{label:"Random Name #4",description:"Hello World!",img:l.yc},{label:"Random Name #5",description:"Hello World!",img:l.Ye}];return(0,s.jsx)(o.ZP,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:(0,s.jsx)(r(),{stopAutoPlayOnHover:!0,navButtonsAlwaysInvisible:!0,swipe:!0,height:160,sx:{alignItems:"center",width:"250px"},animation:"fade",children:n.map((function(e,n){return(0,s.jsx)(c,{item:e},n)}))})})}},71639:function(e,n,t){t.d(n,{RS:function(){return S},fh:function(){return y},zY:function(){return w}});var i=t(1413),r=t(93433),o=t(29439),a=t(47313),l=t(30712),s=t(13760),c=t(80614),u=t(71363),d=t(62463),f=t(71535),p=t(96900),v=t(56972),h=t(22449),m=t(34940),x=t(39995),g=t(86282),Z=t(61474),j=t(69125),D=t(46417),y=function(e){var n=(0,a.useState)(e.file?e.file:[]),t=(0,o.Z)(n,2),f=t[0],p=t[1],v=(0,c.uI)({maxFiles:e.notMulti?1:5,multiple:!e.notMulti,onDrop:function(n){if(1===e.notMulti)e.setfilesOndrop(n),p(n.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})));else{if((f.length?f.filter((function(e){var t;return(null===e||void 0===e?void 0:e.name)===(null===(t=n[0])||void 0===t?void 0:t.name)})):[]).length)return(0,D.jsx)(j.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"File already added"});e.setfilesOndrop([].concat((0,r.Z)(f),(0,r.Z)(n))),p([].concat((0,r.Z)(f),(0,r.Z)(n)))}}}),h=v.getInputProps,m=v.open,x=null===f||void 0===f?void 0:f.map((function(n){return(0,D.jsxs)(u.Z,{children:["".concat(n.name.length>15?"".concat(n.name.slice(0,15),"..."):n.name),(0,D.jsx)(l.Z,{size:15,onClick:function(t){t.stopPropagation(),function(n){e.isMulti?p(f.filter((function(e){return e!==n}))):p([])}(n)}})]},n.name)}));return(0,a.useEffect)((function(){return function(){f.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[f]),(0,a.useEffect)((function(){e.resetDropzone&&p([])}),[e.resetDropzone]),(0,D.jsxs)(d.Z,{onClick:m,children:[(0,D.jsx)(j.nv,(0,i.Z)({},h())),(0,D.jsxs)(u.Z,{sx:{display:"flex",border:"2px solid lightgray",padding:"1rem"},children:[x.length>0?(0,D.jsx)("aside",{children:x}):"Drag `n` drop Or Browse",(0,D.jsx)(s.Z,{})]})]})},b=[{value:"Asset",label:"Asset"},{value:"Expenses",label:"Expenses"},{value:"Vault",label:"Document Vault"},{value:"Liability",label:"Liability"},{value:"Postman",label:"Postman"}],w=function(e){var n=e.alias,t=e.setalias,i=e.expiry,r=e.setexpiry,o=e.desc,l=e.setdesc,s=e.handleReset,c=e.isDisabled,u=e.submitDropzone,h=e.setfilesOndrop,m=e.resetDropzone;return(0,D.jsxs)(a.Fragment,{children:[(0,D.jsx)(f.ZP,{item:!0,xs:12,sm:8,children:(0,D.jsx)(p.Z,{children:(0,D.jsxs)(v.Z,{children:[(0,D.jsx)(j.ll,{title:"Upload any file, scans, documents"}),(0,D.jsxs)(f.ZP,{container:!0,spacing:1,children:[(0,D.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsx)(j.nv,{margin:"dense",name:"AttachmentName",id:"AttachmentName",placeholder:"Attachment Name / Alias",value:n,onChange:function(e){var n;return t(null===(n=e.target.value)||void 0===n?void 0:n.trim())}})}),(0,D.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsx)(j.nv,{margin:"dense",type:"Date",name:"Date",id:"nameMultiExpiry",placeholder:"Expiry Date",min:(0,g.BZ)(),max:"9999-12-31",value:i,onChange:function(e){return r(e.target.value)}})}),(0,D.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsx)(j.nv,{margin:"dense",type:"textarea",name:"name1",id:"nameMultiDescription1",placeholder:"Description",value:o,onChange:function(e){var n;return l(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value)}})}),(0,D.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsx)(y,{setfilesOndrop:h,resetDropzone:m,isMulti:!0,notMulti:!1})})]}),(0,D.jsxs)(d.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,D.jsx)(Z.ZP,{varient:"outlined",label:"Reset",onClick:function(){return s()}}),(0,D.jsx)(Z.ZP,{varient:"contained",label:"Add",disabled:c,onClick:function(e){u(e)}})]})]})})}),(0,D.jsx)(x.Z,{})]})},S=function(e){var n,t=e.filter,r=e.handleFilter,o=e.search,a=e.columns,l=e.searchresult;return(0,D.jsxs)(p.Z,{sx:{minHeight:"300px"},children:[(0,D.jsxs)(f.ZP,{container:!0,sx:{px:2.5,py:1},spacing:4,alignItems:"center",children:[(0,D.jsx)(f.ZP,{item:!0,lg:4,xs:12,children:(0,D.jsx)(j.ll,{title:"Documents List"})}),(0,D.jsx)(f.ZP,{item:!0,lg:4,xs:6,children:(0,D.jsx)(h.Z,{type:"text",onChange:function(e){return o(e.target.value)},placeholder:"Search"})}),(0,D.jsx)(f.ZP,{item:!0,lg:4,xs:6,children:(0,D.jsx)(Z.gc,{isMulti:!0,id:"optionSelect",onChange:function(e,n){return r(n)},options:b,value:t.map((function(e){var n=b.filter((function(n){return n.value===e.id}));return{value:n[0].value,label:n[0].label}})),renderInput:function(e){return(0,D.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{placeholder:"Select Category"}))}})})]}),(0,D.jsx)(m.Z,{}),(0,D.jsx)(v.Z,{children:(0,D.jsx)(j.Gn,{columns:a,rows:null!==l&&void 0!==l&&l.length?l:null!==(n=e.documentList)&&void 0!==n&&n.length?e.documentList:[]})})]})}},50178:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var i=t(74165),r=t(15861),o=t(29439),a=t(47313),l=t(64162),s=t.n(l),c=t(40229),u=t(71535),d=t(69125),f=t(31616),p=t(97729),v=t(46095),h=t(46417),m=(0,v.Z)((0,h.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),x=t(91210),g=t(18377),Z=t(35192),j=t(1413),D=t(66135),y=t(51427),b=t(31881),w=t.n(b),S=t(7081),A=t(5448),k=t(88356),L=t(45959),C=t(89870),E=t(86282),M=t(61474),_=sessionStorage.getItem("authtoken"),z=JSON.parse(sessionStorage.getItem("logInUserData")),I=[{value:"1h",label:"1 Hour"},{value:"1d",label:"1 Day"},{value:"1w",label:"1 Week"},{value:"1m",label:"1 Month"}],O=[{value:!0,label:"Allow Download"},{value:!1,label:"Allow View Only"}],P=(0,D.$j)((function(e){var n;return{docsList:null===(n=e.reducer.dataList)||void 0===n?void 0:n.docsList}}),(function(e){return{getDocuments:function(n){return e((0,y.qi)(n))}}}))((function(e){var n=(0,a.useState)(""),t=(0,o.Z)(n,2),i=t[0],r=t[1],l=(0,a.useState)(""),s=(0,o.Z)(l,2),c=s[0],f=s[1],p=(0,a.useState)(""),v=(0,o.Z)(p,2),m=v[0],x=v[1],g=(0,a.useState)(!1),Z=(0,o.Z)(g,2),D=Z[0],y=Z[1];return console.log(e.loading),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(S.Z,{open:e.modal,onClose:function(){e.toggleModal()},centered:!0,size:"lg",fullWidth:!0,children:[(0,h.jsx)(A.Z,{children:"Send as mail"}),(0,h.jsxs)(k.Z,{children:[e.loading&&(0,h.jsx)(L.Z,{}),!e.loading&&(0,h.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(d.nv,{value:i,label:"Email *",onChange:function(e){return r(e.target.value)},placeholder:"Enter Email"})}),(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(d.nv,{value:c,label:"Name *",onChange:function(e){return f(e.target.value)},placeholder:"Enter Name"})}),(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(M.gc,{id:"data-category",name:"label",onChange:function(e,n){return x(null===n||void 0===n?void 0:n.value)},options:I,value:(0,E.NA)(I,m),renderInput:function(e){return(0,h.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Expiry for Documents *"}))}})}),(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(M.gc,{id:"data-category",onChange:function(e,n){return y(null===n||void 0===n?void 0:n.value)},name:"label",options:O,value:(0,E.NA)(O,D),renderInput:function(e){return(0,h.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Allow Download"}))}})}),(0,h.jsx)(u.ZP,{item:!0,xs:12,justifyContent:"center",children:(0,h.jsx)(C.Z,{onClick:function(n){if(n.preventDefault(),""===i)return(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Mail Id",severity:"warning"});if(""===c)return(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Name",severity:"warning"});if(""===m)return(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Select Document Expiry",severity:"warning"});var t=new Date;"1m"===m?t.setMonth(t.getMonth()+1):"1d"===m?t.setDate(t.getDate()+1):"1w"===m?t.setDate(t.getDate()+7):"1h"===m&&t.setHours(t.getHours()+1);var o={email:i,name:c,expiry:t,allowdownload:D,docs:e.mailAtt,status:0,user:null===z||void 0===z?void 0:z._id};w().post("/backendapi/documentmail",o,{headers:{Authorization:"Bearer ".concat(_)}}).then((function(n){return"Success"===(null===n||void 0===n?void 0:n.data)?(r(""),f(""),x(""),y(!1),e.toggleModal(),(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent successfully"})):(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent failed. Please check email address",severity:"error"})}))},variant:"contained",children:"Send"})})]})]})]})})})),N=t(62463),R=t(71363),T=(0,v.Z)((0,h.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined"),U=(0,v.Z)((0,h.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"}),"ArrowForwardOutlined"),G=t(49461),F=t.n(G),H=function(e){var n=e.modal,t=e.setprevidx,i=e.loading,r=e.selectedforpreview,o=e.selectedatt,a=e.previdx,l=e.setDeleteId,s=e.setopen,c=e.toggleModal,d=e.open,p=e.deletedoc,v=e.preview,m=e.mediaData;return(0,h.jsx)(F(),{children:(0,h.jsxs)(S.Z,{open:n,onClose:function(){c(),t(0)},fullWidth:!0,children:[(0,h.jsx)(A.Z,{children:(0,h.jsxs)(N.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[!i&&(0,h.jsx)("a",{href:m,download:null===r||void 0===r?void 0:r.name,tabIndex:"_balnk",style:{cursor:"pointer",display:"flex"},children:(0,h.jsx)(g.Z,{size:25,color:"primary"})})," ",(0,h.jsxs)(u.ZP,{style:{display:"flex",justifyContent:"center"},children:[a>0&&!i&&(0,h.jsx)(T,{style:{marginRight:"5px",cursor:"pointer"},color:"primary",size:35,onClick:function(){v(o[a-1]),t(a-1)}}),(0,h.jsxs)(R.Z,{style:{fontSize:"1rem",fontWeight:"bold",letterSpacing:"1px"},children:["Preview ",a+1," of ",null===o||void 0===o?void 0:o.length]}),o.length>a+1&&!i&&(0,h.jsx)(U,{size:35,style:{marginLeft:"5px",cursor:"pointer"},color:"primary",onClick:function(){v(o[a+1]),t(a+1)}})]}),(0,h.jsx)("div",{children:!i&&o.length>1&&(0,h.jsx)(Z.Z,{style:{cursor:"pointer"},color:"primary",size:25,className:"collapse-icon",onClick:function(){l(r._id),s(!0)}})})]})}),(0,h.jsxs)(k.Z,{className:"justify-content-center",children:[(0,h.jsx)(f.Z,{handleConfirm:function(){p(),s(!1)},isOpen:d,closeModal:function(){return s(!1)}}),i&&(0,h.jsx)(L.Z,{}),!i&&(0,h.jsx)("div",{children:(0,h.jsx)("iframe",{style:{height:"auto",width:"100%"},title:"Aaq",src:m})})]})]})})},W=t(71639),V=t(72845),B=t(54727),X=sessionStorage.getItem("authtoken"),Y=function(e){return new Promise((function(n,t){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return n(i.result)},i.onerror=function(e){return t(e)}}))},q=JSON.parse(sessionStorage.getItem("logInUserData")),J=(0,D.$j)((function(e){var n=e.reducer.dataList,t=void 0===n?{}:n;return{docsList:null===t||void 0===t?void 0:t.docsList,selectedforpreview:null===t||void 0===t?void 0:t.selectedforpreview,blobUrl:null===t||void 0===t?void 0:t.blobUrl,blobUrlAllDocs:null===t||void 0===t?void 0:t.blobUrlAllDocs,fileNameAllDocs:null===t||void 0===t?void 0:t.fileNameAllDocs,addDocsSuccess:null===t||void 0===t?void 0:t.addDocsSuccess,addDocsFailure:null===t||void 0===t?void 0:t.addDocsFailure,addDocsFailureMsg:null===t||void 0===t?void 0:t.addDocsFailureMsg,removedDocSuccess:null===t||void 0===t?void 0:t.removedDocSuccess,removingDocfailed:null===t||void 0===t?void 0:t.removingDocfailed,deletedDoc:null===t||void 0===t?void 0:t.deletedDoc,deletedDocfailed:null===t||void 0===t?void 0:t.deletedDocfailed,loading:null===t||void 0===t?void 0:t.previewLoading,uploading:null===t||void 0===t?void 0:t.addDocsLoading,mediaData:null===t||void 0===t?void 0:t.mediaData}}),(function(e){return{getDocs:function(n){return e(V.Xg.endpoints.getData.initiate(n))},getAllDocs:function(n){return e(V.Xg.endpoints.getAllDocs.initiate(n,{subscribe:!1,forceRefetch:!0}))},previewDoc:function(n){return e(V.Xg.endpoints.previewDoc.initiate(n,{subscribe:!1,forceRefetch:!0}))},addDoc:function(n){return e(V.Xg.endpoints.addDoc.initiate(n))},deleteWholeDoc:function(n){return e(V.Xg.endpoints.deleteDoc.initiate(n))},removeOneDoc:function(n){return e(V.Xg.endpoints.deleteOneDoc.initiate(n))}}}))((function(e){var n=e.getDocs,t=e.getAllDocs,l=e.previewDoc,v=e.addDoc,j=e.deleteWholeDoc,D=e.removeOneDoc,y=e.docsList,b=e.selectedforpreview,S=e.bloburl,A=e.loading,k=e.uploading,L=e.blobUrlAllDocs,C=e.fileNameAllDocs,E=e.addDocsSuccess,M=e.addDocsFailure,_=(e.addDocsFailureMsg,e.removedDocSuccess),z=e.deletedDoc,I=e.deletedDocfailed,O=e.removingDocfailed,N=e.mediaData,R=[{label:"Send",id:"send",cell:function(e){return(0,h.jsx)(m,{onClick:function(){return Je(e.attachment)}})}},{label:"View",id:"view",cell:function(e){return(0,h.jsx)(x.Z,{style:{cursor:"pointer"},size:20,onClick:function(){K(e._id),te(e.attachment),Xe(),Ye(e.attachment[0])}})}},{label:"Name / Alias",id:"alias",cell:function(e){return e.alias}},{label:"Expiry",id:"expiry",sortable:!0,cell:function(e){return(null===e||void 0===e?void 0:e.expiry)&&(0,B.p6)(e.expiry.split("T")[0])}},{label:"Created At",id:"createdat",cell:function(e){return(null===e||void 0===e?void 0:e.createdAt)&&(0,B.p6)(e.createdAt.split("T")[0])}},{label:"Type",id:"type",cell:function(e){return e.type}},{label:"Download",id:"download",cell:function(e){return(0,h.jsx)(g.Z,{size:20,onClick:function(){return qe(e.attachment)}})}},{label:"Trash",id:"trash",cell:function(e){return"Document Vault"===e.type&&(0,h.jsx)(Z.Z,{size:20,onClick:function(){Be(e._id),Fe(!0)}})}}],T=(0,a.useState)(!1),U=(0,o.Z)(T,2),G=U[0],F=U[1],V=(0,a.useState)(),J=(0,o.Z)(V,2),$=J[0],K=J[1],Q=(0,a.useState)([]),ee=(0,o.Z)(Q,2),ne=ee[0],te=ee[1],ie=(0,a.useState)(0),re=(0,o.Z)(ie,2),oe=re[0],ae=re[1],le=(0,a.useState)([]),se=(0,o.Z)(le,2),ce=se[0],ue=se[1],de=(0,a.useState)([]),fe=(0,o.Z)(de,2),pe=fe[0],ve=fe[1],he=(0,a.useState)(!1),me=(0,o.Z)(he,2),xe=me[0],ge=me[1],Ze=(0,a.useState)(""),je=(0,o.Z)(Ze,2),De=je[0],ye=je[1],be=(0,a.useState)(""),we=(0,o.Z)(be,2),Se=we[0],Ae=we[1],ke=(0,a.useState)(""),Le=(0,o.Z)(ke,2),Ce=Le[0],Ee=Le[1],Me=(0,a.useState)([]),_e=(0,o.Z)(Me,2),ze=_e[0],Ie=_e[1],Oe=(0,a.useState)([]),Pe=(0,o.Z)(Oe,2),Ne=Pe[0],Re=Pe[1],Te=(0,a.useState)(!1),Ue=(0,o.Z)(Te,2),Ge=Ue[0],Fe=Ue[1],He=(0,a.useState)(!1),We=(0,o.Z)(He,2),Ve=We[0],Be=We[1],Xe=function(){F(!G)};(0,a.useEffect)((function(){if(null!==pe&&void 0!==pe&&pe.length){var e=[];null===y||void 0===y||y.filter((function(n){var t=n.type,i=!1;return pe.forEach((function(r){var o,a;return"all"===(null===r||void 0===r||null===(o=r.name)||void 0===o?void 0:o.toLowerCase())?Ie(y):(i=(null===r||void 0===r||null===(a=r.name)||void 0===a?void 0:a.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase()))?(e.push(n),i):void 0})),i})),Ie(e)}else Ie(y)}),[pe]);var Ye=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(n);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),Xe(),e.abrupt("return",(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Something went wrong",severity:"warning"}));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){if(L){var e=document.createElement("a");e.href=L,e.setAttribute("download","".concat(C)),document.body.appendChild(e),e.click(),e.parentNode.removeChild(e)}}),[L]);var qe=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.forEach((function(e){try{t(e)}catch(n){console.log("error",n)}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Je=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:sn(!0),rn(!0),t=[],r=0;case 4:if(!(r<n.length)){e.next=10;break}return e.next=7,w().get("/backendapi/sender/msg/".concat(n[r]),{headers:{Authorization:"Bearer ".concat(X)}}).then((function(e){var n,i,r=(0,p.Y)(null===(n=e.data[0])||void 0===n?void 0:n.media),o=s().decompress(r),a=null===(i=e.data[0])||void 0===i?void 0:i.name;t.push({data:o,filename:a})}));case 7:r+=1,e.next=4;break;case 10:fn(t),sn(!1);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){n()}),[]),(0,a.useEffect)((function(){Ie(y)}),[y]);var $e=function(){ye(""),Ee(""),Ae(""),ue([]),ge(!0)};(0,a.useEffect)((function(){E&&$e(),M&&(ye(),Ee(),Ae(),ge(!0),d.A9)}),[E,M]);var Ke=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t,r,o,a,l,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),(null===ce||void 0===ce||!ce.length)&&d.A9,null!==ce&&void 0!==ce&&ce.length){e.next=4;break}return e.abrupt("return");case 4:e.prev=4,r=[],(t={}).user=null===q||void 0===q?void 0:q._id,t.type="Document Vault",t.alias=(0,p.Gf)(De),t.desc=(0,p.Gf)(Ce),t.expiry=(0,p.Gf)(Se),o=0;case 13:if(!(o<ce.length)){e.next=23;break}return e.next=16,Y(ce[o]);case 16:a=e.sent,l=(0,p.Gf)(a),c=s().compressToUTF16(l),r.push({media:c,name:ce[o].name,type:ce[o].type,user:null===q||void 0===q?void 0:q._id});case 20:o++,e.next=13;break;case 23:t.attachment=r,v(t),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(4),console.log("error",e.t0);case 30:case"end":return e.stop()}}),e,null,[[4,27]])})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){I&&(d.A9,null===I||void 0===I||I.length),z&&d.A9}),[I,z]),(0,a.useEffect)((function(){_&&(te([]),ae(0),Xe(),d.A9),O&&(d.A9,null===O||void 0===O||O.length)}),[_,O]);var Qe=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{j({deleteId:Ve})}catch(n){console.log("error",n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),en=(0,a.useState)(!1),nn=(0,o.Z)(en,2),tn=nn[0],rn=nn[1],on=(0,a.useState)(!0),an=(0,o.Z)(on,2),ln=an[0],sn=an[1],cn=(0,a.useState)([]),un=(0,o.Z)(cn,2),dn=un[0],fn=un[1];return(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(P,{modal:tn,toggleModal:function(){return rn(!tn)},loading:ln,mailAtt:dn}),(0,h.jsx)(f.Z,{handleConfirm:function(){Qe(),Fe(!1)},isOpen:Ge,closeModal:function(){return Fe(!1)}}),G&&(0,h.jsx)(H,{modal:G,setprevidx:ae,loading:A,bloburl:S,selectedforpreview:b,selectedatt:ne,previdx:oe,setDeleteId:Be,setopen:Fe,open:Ge,toggleModal:Xe,deletedoc:function(e){try{D({deleteId:Ve,selecteddoc:$})}catch(n){console.log("error",n)}},preview:Ye,mediaData:N}),(0,h.jsx)(u.ZP,{container:!0,spacing:1,sx:{p:1},children:(0,h.jsx)(W.zY,{alias:De,setalias:ye,expiry:Se,setexpiry:Ae,desc:Ce,setdesc:Ee,handleReset:$e,isDisabled:k||!Se||!ce.length||new Date(Se).getTime()<(new Date).getTime(),uploading:k,submitDropzone:Ke,setfilesOndrop:function(e){ge(!1),ue(e)},resetDropzone:xe})}),(0,h.jsx)(W.RS,{filter:pe,handleFilter:function(e){var n=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){n.push({id:e.value,name:e.label})})),ve(n)},search:function(e){if(null!==ze&&void 0!==ze&&ze.length){var n=ze.filter((function(n){var t=n.desc,i=n.alias,r=(null===t||void 0===t?void 0:t.toLowerCase().startsWith(e.toLowerCase()))||(null===i||void 0===i?void 0:i.toLowerCase().startsWith(e.toLowerCase())),o=(null===t||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase()))||(null===i||void 0===i?void 0:i.toLowerCase().includes(e.toLowerCase()));return!(!r&&!o)}));Re(n)}},columns:R,searchresult:Ne,documentList:ze})]})}))},18377:function(e,n,t){var i=t(46095),r=t(46417);n.Z=(0,i.Z)((0,r.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},91210:function(e,n,t){var i=t(46095),r=t(46417);n.Z=(0,i.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")}}]);