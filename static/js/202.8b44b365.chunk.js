"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[202],{51427:function(e,n,t){t.d(n,{EL:function(){return v},cm:function(){return p},is:function(){return f},qi:function(){return d}});var i=t(74165),r=t(15861),o=t(31881),a=t.n(o),l=t(12613),s=t(97729),c=t(46417),u=JSON.parse(sessionStorage.getItem("logInUserData")),d=function(e){var n=e.user,t=e.token;return function(){var e=(0,r.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:"GET_ALL_DOCS_LOADING",data:!0}),a().get("/backendapi/documents/".concat(null===n||void 0===n?void 0:n._id),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){r({type:"GET_ALL_DOCS_LOADING",data:!1});for(var n=e.data,t=0;t<n.length;t+=1)n[t].desc=(0,s.Y)(n[t].desc),n[t].id=t+1,n[t].expiry=(0,s.Y)(n[t].expiry),n[t].alias=(0,s.Y)(n[t].alias);r({type:"GET_ALL_DOCS",resp:n})})).catch((function(e){r({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},f=function(){return function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,a().post("/backendapi/users/get",{id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(n({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var t=e.data[0];n({type:"GET_USER_ALL_DATA",data:t})}})).catch((function(e){n({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},p=function(e){return function(n){return n({type:"FILTER_DATA",value:e})}},v=function(e){return function(){var n=(0,r.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().post("/backendapi/update/secrets",{secrets:e,_id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,c.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},34202:function(e,n,t){t.r(n),t.d(n,{default:function(){return te}});var i=t(74165),r=t(15861),o=t(29439),a=t(47313),l=t(64162),s=t.n(l),c=t(40229),u=t(71535),d=t(12613),f=t(96327),p=t(97729),v=t(46095),h=t(46417),x=(0,v.Z)((0,h.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),m=t(18377),g=t(91210),Z=t(35192),j=t(1413),D=t(66135),y=t(51427),b=t(31881),w=t.n(b),S=t(7081),k=t(5448),A=t(88356),C=t(45959),L=t(89870),E=t(86282),M=t(61474),_=sessionStorage.getItem("authtoken"),P=JSON.parse(sessionStorage.getItem("logInUserData")),z=[{value:"1h",label:"1 Hour"},{value:"1d",label:"1 Day"},{value:"1w",label:"1 Week"},{value:"1m",label:"1 Month"}],I=[{value:!0,label:"Allow Download"},{value:!1,label:"Allow View Only"}],O=(0,D.$j)((function(e){var n;return{docsList:null===(n=e.reducer.dataList)||void 0===n?void 0:n.docsList}}),(function(e){return{getDocuments:function(n){return e((0,y.qi)(n))}}}))((function(e){var n=(0,a.useState)(""),t=(0,o.Z)(n,2),i=t[0],r=t[1],l=(0,a.useState)(""),s=(0,o.Z)(l,2),c=s[0],f=s[1],p=(0,a.useState)(""),v=(0,o.Z)(p,2),x=v[0],m=v[1],g=(0,a.useState)(!1),Z=(0,o.Z)(g,2),D=Z[0],y=Z[1];return console.log(e.loading),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(S.Z,{open:e.modal,onClose:function(){e.toggleModal()},centered:!0,size:"lg",fullWidth:!0,children:[(0,h.jsx)(k.Z,{children:"Send as mail"}),(0,h.jsxs)(A.Z,{children:[e.loading&&(0,h.jsx)(C.Z,{}),!e.loading&&(0,h.jsxs)(u.ZP,{container:!0,rowSpacing:.01,spacing:2,children:[(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(d.nv,{value:i,label:"Email *",onChange:function(e){return r(e.target.value)},placeholder:"Enter Email"})}),(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(d.nv,{value:c,label:"Name *",onChange:function(e){return f(e.target.value)},placeholder:"Enter Name"})}),(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(M.gc,{id:"data-category",name:"label",onChange:function(e,n){return m(null===n||void 0===n?void 0:n.value)},options:z,value:(0,E.NA)(z,x),renderInput:function(e){return(0,h.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Expiry for Documents *"}))}})}),(0,h.jsx)(u.ZP,{item:!0,xs:6,children:(0,h.jsx)(M.gc,{id:"data-category",onChange:function(e,n){return y(null===n||void 0===n?void 0:n.value)},name:"label",options:I,value:(0,E.NA)(I,D),renderInput:function(e){return(0,h.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Allow Download"}))}})}),(0,h.jsx)(u.ZP,{item:!0,xs:12,justifyContent:"center",children:(0,h.jsx)(L.Z,{onClick:function(n){if(n.preventDefault(),""===i)return(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Mail Id",severity:"warning"});if(""===c)return(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Name",severity:"warning"});if(""===x)return(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Select Document Expiry",severity:"warning"});var t=new Date;"1m"===x?t.setMonth(t.getMonth()+1):"1d"===x?t.setDate(t.getDate()+1):"1w"===x?t.setDate(t.getDate()+7):"1h"===x&&t.setHours(t.getHours()+1);var o={email:i,name:c,expiry:t,allowdownload:D,docs:e.mailAtt,status:0,user:null===P||void 0===P?void 0:P._id};w().post("/backendapi/documentmail",o,{headers:{Authorization:"Bearer ".concat(_)}}).then((function(n){return"Success"===(null===n||void 0===n?void 0:n.data)?(r(""),f(""),m(""),y(!1),e.toggleModal(),(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent successfully"})):(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent failed. Please check email address",severity:"error"})}))},variant:"contained",children:"Send"})})]})]})]})})})),N=t(62463),T=t(71363),R=(0,v.Z)((0,h.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined"),U=(0,v.Z)((0,h.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"}),"ArrowForwardOutlined"),G=function(e){var n=e.modal,t=e.setprevidx,i=e.loading,r=e.selectedforpreview,o=e.selectedatt,a=e.previdx,l=e.setDeleteId,s=e.setopen,c=e.toggleModal,d=e.open,p=e.deletedoc,v=e.preview,x=e.mediaData;return(0,h.jsxs)(S.Z,{open:n,onClose:function(){c(),t(0)},maxWidth:"fit-content",children:[(0,h.jsx)(k.Z,{children:(0,h.jsxs)(N.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[!i&&(0,h.jsx)("a",{href:x,download:null===r||void 0===r?void 0:r.name,tabIndex:"_balnk",style:{cursor:"pointer",display:"flex"},children:(0,h.jsx)(m.Z,{size:25,color:"primary"})})," ",(0,h.jsxs)(u.ZP,{style:{display:"flex",justifyContent:"center"},children:[a>0&&!i&&(0,h.jsx)(R,{style:{marginRight:"5px",cursor:"pointer"},color:"primary",size:35,onClick:function(){v(o[a-1]),t(a-1)}}),(0,h.jsxs)(T.Z,{style:{fontSize:"1rem",fontWeight:"bold",letterSpacing:"1px"},children:["Preview ",a+1," of ",null===o||void 0===o?void 0:o.length]}),o.length>a+1&&!i&&(0,h.jsx)(U,{size:35,style:{marginLeft:"5px",cursor:"pointer"},color:"primary",onClick:function(){v(o[a+1]),t(a+1)}})]}),(0,h.jsx)("div",{children:!i&&o.length>1&&(0,h.jsx)(Z.Z,{style:{cursor:"pointer"},color:"primary",size:25,className:"collapse-icon",onClick:function(){l(r._id),s(!0)}})})]})}),(0,h.jsxs)(A.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,h.jsx)(f.Z,{handleConfirm:function(){p(),s(!1)},isOpen:d,closeModal:function(){return s(!1)}}),i&&(0,h.jsx)(C.Z,{}),!i&&(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:x,alt:"Documents"})})]})]})},F=t(96900),H=t(56972),V=t(22449),W=t(34940),B=t(39995),X=t(69933),Y=[{value:"Asset",label:"Asset"},{value:"Expenses",label:"Expenses"},{value:"Vault",label:"Document Vault"},{value:"Liability",label:"Liability"},{value:"Postman",label:"Postman"}],J=function(e){var n=e.alias,t=e.setalias,i=e.expiry,r=e.setexpiry,o=e.desc,l=e.setdesc,s=e.handleReset,c=e.isDisabled,f=e.submitDropzone,p=e.setfilesOndrop,v=e.setfilesParent,x=e.resetDropzone,m=e.checkExpiry;return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(u.ZP,{item:!0,xs:12,md:9,lg:9,children:(0,h.jsx)(F.Z,{children:(0,h.jsxs)(H.Z,{children:[(0,h.jsx)(d.ll,{title:"Upload any file, scans, documents"}),(0,h.jsxs)(u.ZP,{container:!0,rowSpacing:.01,spacing:1,children:[(0,h.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,h.jsx)(d.nv,{margin:"dense",name:"AttachmentName",id:"AttachmentName",placeholder:"Attachment Name / Alias",value:n,onChange:function(e){var n;return t(null===(n=e.target.value)||void 0===n?void 0:n.trim())}})}),(0,h.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,h.jsx)(d.nv,{margin:"dense",type:"Date",name:"Date",id:"nameMultiExpiry",placeholder:"Expiry Date",InputProps:{inputProps:{min:(0,E.BZ)(),max:"9999-12-31"}},InputLabelProps:{shrink:!0},value:i,error:m(),onChange:function(e){return r(e.target.value)},onClick:function(e){return r(e.target.value)}})}),(0,h.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,h.jsx)(d.nv,{margin:"dense",type:"textarea",name:"name1",id:"nameMultiDescription1",placeholder:"Description",value:o,multiline:!0,onChange:function(e){var n;return l(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value)}})}),(0,h.jsx)(u.ZP,{item:!0,xs:12,sm:12,sx:{py:7},children:(0,h.jsx)(X.r,{setfilesOndrop:p,setfilesParent:v,resetDropzone:x,isMulti:!0,notMulti:!1})})]}),(0,h.jsxs)(N.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,h.jsx)(M.ZP,{varient:"outlined",label:"Reset",onClick:function(){return s()}}),(0,h.jsx)(M.ZP,{varient:"contained",label:"Add",disabled:c,onClick:function(e){f(e)}})]})]})})}),(0,h.jsx)(B.Z,{})]})},q=function(e){var n,t=e.filter,i=e.handleFilter,r=e.search,o=e.columns,l=e.searchresult;return(0,h.jsx)(a.Fragment,{children:(0,h.jsx)(u.ZP,{item:!0,xs:12,md:9,lg:9,children:(0,h.jsxs)(F.Z,{children:[(0,h.jsxs)(u.ZP,{container:!0,sx:{p:2},spacing:3,alignItems:"center",children:[(0,h.jsx)(u.ZP,{item:!0,lg:4,xs:12,children:(0,h.jsx)(d.ll,{title:"Documents List"})}),(0,h.jsx)(u.ZP,{item:!0,lg:4,xs:6,children:(0,h.jsx)(V.Z,{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Search"})}),(0,h.jsx)(u.ZP,{item:!0,lg:4,xs:6,children:(0,h.jsx)(M.gc,{isMulti:!0,id:"optionSelect",onChange:function(e,n){return i(n)},options:Y,value:t.map((function(e){var n=Y.filter((function(n){return n.value===e.id}));return{value:n[0].value,label:n[0].label}})),renderInput:function(e){return(0,h.jsx)(d.nv,(0,j.Z)((0,j.Z)({},e),{},{placeholder:"Select Category"}))}})})]}),(0,h.jsx)(W.Z,{}),(0,h.jsx)(d.Gn,{columns:o,rows:null!==l&&void 0!==l&&l.length?l:null!==(n=e.documentList)&&void 0!==n&&n.length?e.documentList:[]})]})})})},$=t(72845),K=t(54727),Q=sessionStorage.getItem("authtoken"),ee=function(e){return new Promise((function(n,t){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return n(i.result)},i.onerror=function(e){return t(e)}}))},ne=JSON.parse(sessionStorage.getItem("logInUserData")),te=(0,D.$j)((function(e){var n=e.reducer.dataList,t=void 0===n?{}:n;return{docsList:null===t||void 0===t?void 0:t.docsList,selectedforpreview:null===t||void 0===t?void 0:t.selectedforpreview,blobUrl:null===t||void 0===t?void 0:t.blobUrl,blobUrlAllDocs:null===t||void 0===t?void 0:t.blobUrlAllDocs,fileNameAllDocs:null===t||void 0===t?void 0:t.fileNameAllDocs,addDocsSuccess:null===t||void 0===t?void 0:t.addDocsSuccess,addDocsFailure:null===t||void 0===t?void 0:t.addDocsFailure,addDocsFailureMsg:null===t||void 0===t?void 0:t.addDocsFailureMsg,removedDocSuccess:null===t||void 0===t?void 0:t.removedDocSuccess,removingDocfailed:null===t||void 0===t?void 0:t.removingDocfailed,deletedDoc:null===t||void 0===t?void 0:t.deletedDoc,deletedDocfailed:null===t||void 0===t?void 0:t.deletedDocfailed,loading:null===t||void 0===t?void 0:t.previewLoading,uploading:null===t||void 0===t?void 0:t.addDocsLoading,mediaData:null===t||void 0===t?void 0:t.mediaData}}),(function(e){return{getDocs:function(n){return e($.Xg.endpoints.getData.initiate(n))},getAllDocs:function(n){return e($.Xg.endpoints.getAllDocs.initiate(n,{subscribe:!1,forceRefetch:!0}))},previewDoc:function(n){return e($.Xg.endpoints.previewDoc.initiate(n,{subscribe:!1,forceRefetch:!0}))},addDoc:function(n){return e($.Xg.endpoints.addDoc.initiate(n))},deleteWholeDoc:function(n){return e($.Xg.endpoints.deleteDoc.initiate(n))},removeOneDoc:function(n){return e($.Xg.endpoints.deleteOneDoc.initiate(n))}}}))((function(e){var n=e.getDocs,t=e.getAllDocs,l=e.previewDoc,v=e.addDoc,j=e.deleteWholeDoc,D=e.removeOneDoc,y=e.docsList,b=e.selectedforpreview,S=e.bloburl,k=e.loading,A=e.uploading,C=e.blobUrlAllDocs,L=e.fileNameAllDocs,E=e.addDocsSuccess,M=e.addDocsFailure,_=(e.addDocsFailureMsg,e.removedDocSuccess),P=e.deletedDoc,z=e.deletedDocfailed,I=e.removingDocfailed,N=e.mediaData,T=[{label:"Send",id:"send",cell:function(e){return(0,h.jsx)(x,{onClick:function(){return $e(e.attachment)}})}},{label:"Name / Alias",id:"alias",cell:function(e){return e.alias}},{label:"Expiry",id:"expiry",sortable:!0,cell:function(e){return(null===e||void 0===e?void 0:e.expiry)&&(0,K.p6)(e.expiry.split("T")[0])}},{label:"Created At",id:"createdat",cell:function(e){return(null===e||void 0===e?void 0:e.createdAt)&&(0,K.p6)(e.createdAt.split("T")[0])}},{label:"Type",id:"type",cell:function(e){return e.type}},{label:"Download",id:"download",cell:function(e){return(0,h.jsx)(m.Z,{size:20,onClick:function(){return qe(e.attachment)}})}},{label:"View",id:"view",cell:function(e){return(0,h.jsx)(g.Z,{style:{cursor:"pointer"},size:20,onClick:function(){X(e._id),ie(e.attachment),Ye(),Je(e.attachment[0])}})}},{label:"Delete",id:"trash",cell:function(e){return"Document Vault"===e.type&&(0,h.jsx)(Z.Z,{size:20,onClick:function(){Xe(e._id),He(!0)}})}}],R=(0,a.useState)(!1),U=(0,o.Z)(R,2),F=U[0],H=U[1],V=(0,a.useState)(),W=(0,o.Z)(V,2),B=W[0],X=W[1],Y=(0,a.useState)([]),$=(0,o.Z)(Y,2),te=$[0],ie=$[1],re=(0,a.useState)(0),oe=(0,o.Z)(re,2),ae=oe[0],le=oe[1],se=(0,a.useState)([]),ce=(0,o.Z)(se,2),ue=ce[0],de=ce[1],fe=(0,a.useState)([]),pe=(0,o.Z)(fe,2),ve=pe[0],he=pe[1],xe=(0,a.useState)(!1),me=(0,o.Z)(xe,2),ge=me[0],Ze=me[1],je=(0,a.useState)(""),De=(0,o.Z)(je,2),ye=De[0],be=De[1],we=(0,a.useState)(""),Se=(0,o.Z)(we,2),ke=Se[0],Ae=Se[1],Ce=(0,a.useState)(""),Le=(0,o.Z)(Ce,2),Ee=Le[0],Me=Le[1],_e=(0,a.useState)([]),Pe=(0,o.Z)(_e,2),ze=Pe[0],Ie=Pe[1],Oe=(0,a.useState)([]),Ne=(0,o.Z)(Oe,2),Te=Ne[0],Re=Ne[1],Ue=(0,a.useState)(!1),Ge=(0,o.Z)(Ue,2),Fe=Ge[0],He=Ge[1],Ve=(0,a.useState)(!1),We=(0,o.Z)(Ve,2),Be=We[0],Xe=We[1],Ye=function(){H(!F)};(0,a.useEffect)((function(){if(null!==ve&&void 0!==ve&&ve.length){var e=[];null===y||void 0===y||y.filter((function(n){var t=n.type,i=!1;return ve.forEach((function(r){var o,a;return"all"===(null===r||void 0===r||null===(o=r.name)||void 0===o?void 0:o.toLowerCase())?Ie(y):(i=(null===r||void 0===r||null===(a=r.name)||void 0===a?void 0:a.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase()))?(e.push(n),i):void 0})),i})),Ie(e)}else Ie(y)}),[ve]);var Je=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(n);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),Ye(),e.abrupt("return",(0,h.jsx)(d.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Something went wrong",severity:"warning"}));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){if(C){var e=document.createElement("a");e.href=C,e.setAttribute("download","".concat(L)),document.body.appendChild(e),e.click(),e.parentNode.removeChild(e)}}),[C]);var qe=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.forEach((function(e){try{t(e)}catch(n){console.log("error",n)}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),$e=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:un(!0),an(!0),t=[],r=0;case 4:if(!(r<n.length)){e.next=10;break}return e.next=7,w().get("/backendapi/sender/msg/".concat(n[r]),{headers:{Authorization:"Bearer ".concat(Q)}}).then((function(e){var n,i,r=(0,p.Y)(null===(n=e.data[0])||void 0===n?void 0:n.media),o=s().decompress(r),a=null===(i=e.data[0])||void 0===i?void 0:i.name;t.push({data:o,filename:a})}));case 7:r+=1,e.next=4;break;case 10:vn(t),un(!1);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){n()}),[]),(0,a.useEffect)((function(){Ie(y),null!==y&&void 0!==y&&y.length&&B&&y.forEach((function(e){e._id===B&&(ie(e.attachment),Je(e.attachment[0]))}))}),[y]);var Ke=function(){be(""),Me(""),Ae(""),de([]),Ze(!0)};(0,a.useEffect)((function(){E&&Ke(),M&&(be(),Me(),Ae(),Ze(!0),d.A9)}),[E,M]);var Qe=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t,r,o,a,l,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),(null===ue||void 0===ue||!ue.length)&&d.A9,null!==ue&&void 0!==ue&&ue.length){e.next=4;break}return e.abrupt("return");case 4:e.prev=4,r=[],(t={}).user=null===ne||void 0===ne?void 0:ne._id,t.type="Document Vault",t.alias=(0,p.Gf)(ye),t.desc=(0,p.Gf)(Ee),t.expiry=(0,p.Gf)(ke),o=0;case 13:if(!(o<ue.length)){e.next=23;break}return e.next=16,ee(ue[o]);case 16:a=e.sent,l=(0,p.Gf)(a),c=s().compressToUTF16(l),r.push({media:c,name:ue[o].name,type:ue[o].type,user:null===ne||void 0===ne?void 0:ne._id});case 20:o++,e.next=13;break;case 23:t.attachment=r,v(t),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(4),console.log("error",e.t0);case 30:case"end":return e.stop()}}),e,null,[[4,27]])})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){z&&(d.A9,null===z||void 0===z||z.length),P&&d.A9}),[z,P]),(0,a.useEffect)((function(){_&&(ie([]),le(0),Ye(),d.A9),I&&(d.A9,null===I||void 0===I||I.length)}),[_,I]);var en=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{j({deleteId:Be})}catch(n){console.log("error",n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nn=function(){return new Date(ke).getTime()<(new Date).getTime()},tn=(0,a.useState)(!1),rn=(0,o.Z)(tn,2),on=rn[0],an=rn[1],ln=(0,a.useState)(!0),sn=(0,o.Z)(ln,2),cn=sn[0],un=sn[1],dn=(0,a.useState)([]),fn=(0,o.Z)(dn,2),pn=fn[0],vn=fn[1];return(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(O,{modal:on,toggleModal:function(){return an(!on)},loading:cn,mailAtt:pn}),(0,h.jsx)(f.Z,{handleConfirm:function(){en(),He(!1)},isOpen:Fe,closeModal:function(){return He(!1)}}),F&&(0,h.jsx)(G,{modal:F,setprevidx:le,loading:k,bloburl:S,selectedforpreview:b,selectedatt:te,previdx:ae,setDeleteId:Xe,setopen:He,open:Fe,toggleModal:Ye,deletedoc:function(e){try{D({deleteId:Be,selecteddoc:B})}catch(n){console.log("error",n)}},preview:Je,mediaData:N}),(0,h.jsx)(u.ZP,{container:!0,spacing:1,sx:{p:2},children:(0,h.jsx)(J,{alias:ye,setalias:be,expiry:ke,setexpiry:Ae,desc:Ee,checkExpiry:nn,setdesc:Me,handleReset:Ke,isDisabled:A||!ke||!ue.length||nn(),setfilesParent:de,uploading:A,submitDropzone:Qe,setfilesOndrop:function(e){Ze(!1),de(e)},resetDropzone:ge})}),(0,h.jsx)(u.ZP,{container:!0,spacing:1,sx:{p:2},children:(0,h.jsx)(q,{filter:ve,handleFilter:function(e){var n=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){n.push({id:e.value,name:e.label})})),he(n)},search:function(e){if(null!==ze&&void 0!==ze&&ze.length){var n=ze.filter((function(n){var t=n.desc,i=n.alias,r=(null===t||void 0===t?void 0:t.toLowerCase().startsWith(e.toLowerCase()))||(null===i||void 0===i?void 0:i.toLowerCase().startsWith(e.toLowerCase())),o=(null===t||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase()))||(null===i||void 0===i?void 0:i.toLowerCase().includes(e.toLowerCase()));return!(!r&&!o)}));Re(n)}},columns:T,searchresult:Te,documentList:ze})})]})}))},69933:function(e,n,t){t.d(n,{r:function(){return x}});var i=t(1413),r=t(93433),o=t(29439),a=t(47313),l=t(30712),s=t(13760),c=t(80614),u=t(6938),d=t(71363),f=t(89870),p=t(62463),v=t(12613),h=t(46417),x=function(e){var n=(0,a.useState)(e.file?e.file:[]),t=(0,o.Z)(n,2),x=t[0],m=t[1],g=(0,c.uI)({maxFiles:e.notMulti?1:5,multiple:!e.notMulti,onDrop:function(n){if(1===e.notMulti)e.setfilesOndrop(n),m(n.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})));else{if((x.length?x.filter((function(e){var t;return(null===e||void 0===e?void 0:e.name)===(null===(t=n[0])||void 0===t?void 0:t.name)})):[]).length)return(0,h.jsx)(v.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"File already added"});e.setfilesOndrop([].concat((0,r.Z)(x),(0,r.Z)(n))),m([].concat((0,r.Z)(x),(0,r.Z)(n)))}}}),Z=g.getInputProps,j=g.open,D=null===x||void 0===x?void 0:x.map((function(n){return(0,h.jsx)(u.Z,{sx:{m:1},label:(0,h.jsxs)(d.Z,{children:["".concat(n.name.length>15?"".concat(n.name.slice(0,10),"..."):n.name),(0,h.jsx)(l.Z,{size:15,sx:{margin:"-6px 6px"},onClick:function(t){t.stopPropagation(),function(n){1===(null===x||void 0===x?void 0:x.length)&&e.setfilesParent([]),e.isMulti&&(m(x.filter((function(e){return e!==n}))),e.setfilesParent(x.filter((function(e){return e!==n}))))}(n)}})]},n.name),variant:"outlined"},n.name)}));return(0,a.useEffect)((function(){return function(){x.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[x]),(0,a.useEffect)((function(){e.resetDropzone&&m([])}),[e.resetDropzone]),(0,h.jsxs)(f.Z,{variant:"outlined",fullWidth:!0,sx:{display:"inline-block",my:1},children:[(0,h.jsxs)(p.Z,{onClick:j,children:[(0,h.jsx)(v.nv,(0,i.Z)({},Z())),(D.length<=0||e.isMulti)&&(0,h.jsxs)(d.Z,{children:["Drag `n` drop Or Browse ",(0,h.jsx)(s.Z,{sx:{margin:"-6px 6px"}})]})]}),(0,h.jsx)("div",{children:D.length>0&&(0,h.jsx)("aside",{style:{display:"flex"},children:D})})]})}},35192:function(e,n,t){var i=t(46095),r=t(46417);n.Z=(0,i.Z)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},18377:function(e,n,t){var i=t(46095),r=t(46417);n.Z=(0,i.Z)((0,r.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},91210:function(e,n,t){var i=t(46095),r=t(46417);n.Z=(0,i.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")}}]);