(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[424],{39500:function(e,n,t){"use strict";t(47313);var r=t(94469),i=t(69625),o=t(47605),a=t(9506),s=t(61474),c=t(46417);n.Z=function(e){var n=e.modalMessage,t=e.handleConfirm,l=e.isOpen,u=e.closeModal,d=e.confirmText,p=void 0===d?"Delete":d,f=e.cancelText,v=void 0===f?"Cancel":f,h=e.warning,m=void 0===h?"":h,x=n||"Are you sure you want to delete this record?";return(0,c.jsx)("div",{children:(0,c.jsx)(r.Z,{open:!!l,children:(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(o.Z,{children:x}),(0,c.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:[!m&&(0,c.jsx)(s.AG,{handleClick:u,label:v}),(0,c.jsx)(s.k4,{label:m?"Ok":p,handleClick:t})]})]})})})}},72845:function(e,n,t){"use strict";t.d(n,{BS:function(){return d},E4:function(){return s},HH:function(){return a},Q7:function(){return l},a1:function(){return c},mo:function(){return u}});var r=t(80571),i=JSON.parse(sessionStorage.getItem("logInUserData")),o=r.g.injectEndpoints({endpoints:function(e){return{getDocs:e.query({query:function(){return"/backendapi/document/".concat(i._id)},providesTags:["Document"]}),getAllDocs:e.query({query:function(e){return"/backendapi/sender/msg/".concat(e)},providesTags:["Document"]}),previewDocs:e.query({query:function(e){return"/backendapi/sender/msg/".concat(e)},providesTags:["Document"]}),resetPreview:function(){return function(e){e({type:"RESET_PREVIEW_DATA"})}},addDoc:e.mutation({query:function(e){return{url:"backendapi/document/add",method:"POST",body:e}},invalidatesTags:["Document"]}),deleteDocs:e.mutation({query:function(e){return{url:"/backendapi/document/deletebyid/".concat(e.deleteId),method:"DELETE"}},invalidatesTags:["Document"]}),deleteOneDoc:e.mutation({query:function(e){return{url:"/backendapi/document/media/deletebyid/".concat(e.deleteId,"/").concat(e.selecteddoc),method:"DELETE"}},invalidatesTags:["Document"]})}}}),a=o.useGetDocsQuery,s=o.useGetAllDocsQuery,c=o.usePreviewDocsQuery,l=o.useAddDocMutation,u=o.useDeleteDocsMutation,d=o.useDeleteOneDocMutation},54727:function(e,n,t){"use strict";t.d(n,{Yd:function(){return r},p6:function(){return i}});n.ZP=function(e){var n=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which);n=String.fromCharCode(n);if(!/^[0-9]*$/.test(n))return e.preventDefault(),!1};var r=RegExp(/^[6-9]{1}[0-9]{9}$/),i=function(e,n){var t="";if(!e)return t;var r=new Date(e),i=r.getFullYear(),o="".concat(r.getMonth()+1),a="".concat(r.getDate());if(o.length<2&&(o="0".concat(o)),a.length<2&&(a="0".concat(a)),"dd/mm/yyyy"===n)t=[a,o,i].join("/");else t=[a,o,i].join("-");return t}},97729:function(e,n,t){"use strict";t.d(n,{Gf:function(){return l},Y:function(){return u},c_:function(){return s},zY:function(){return c}});var r=t(74165),i=t(15861),o=t(42612),a=t.n(o),s=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",a().md.sha512.create().update(n).digest().toHex());case 4:e.prev=4,e.t0=e.catch(0),console.log("Error while hashing: ",e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=n||sessionStorage.getItem("secretkey"),e.next=4,s(t);case 4:return o=e.sent,e.next=7,l(i,o);case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log("Error while hashing: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,o,s,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===n||void 0===n?void 0:n.length)>0)){e.next=19;break}return i=sessionStorage.getItem("secretkey"),o=null!==t&&void 0!==t?t:i,s=a().random.getBytesSync(32),c=a().cipher.createCipher("AES-GCM",o),e.prev=5,c.start({iv:s,additionalData:"binary-encoded string"}),c.update(a().util.createBuffer(n)),c.finish(),l={iv:s,tag:c.mode.tag.toHex(),output:c.output.toHex()},e.abrupt("return",JSON.stringify(l));case 13:return e.prev=13,e.t0=e.catch(5),console.log("Error while encrypting data: ",e.t0),e.abrupt("return","");case 17:e.next=20;break;case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,o,s,c,l,u,d,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:i=sessionStorage.getItem("secretkey"),o=null!==t&&void 0!==t?t:i;try{s=JSON.parse(n)}catch(r){console.log(r)}if(c=s.iv,l=a().util.hexToBytes(s.tag),!(u=s.output)){e.next=28;break}if(e.prev=9,(d=a().cipher.createDecipher("AES-GCM",o)).start({iv:c,additionalData:"binary-encoded string",tag:l}),p=a().util.hexToBytes(u),d.update(a().util.createBuffer(p)),!d.finish()){e.next=19;break}return e.abrupt("return",d.output.toString());case 19:console.log("Error authentication tag didn't match ");case 20:e.next=26;break;case 22:return e.prev=22,e.t0=e.catch(9),console.log("Error while decrypting data: ",e.t0),e.abrupt("return","");case 26:e.next=29;break;case 28:return e.abrupt("return",n);case 29:case"end":return e.stop()}}),e,null,[[9,22]])})));return function(n,t){return e.apply(this,arguments)}}()},4450:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ne}});var r=t(74165),i=t(15861),o=t(29439),a=t(47313),s=t(9506),c=t(19641),l=t(20938),u=t(39500),d=t(94469),p=t(33604),f=t(35898),v=t(47605),h=t(69625),m=t(98668),x=t(18377),g=t(54750),Z=t(46417),y=(0,g.Z)((0,Z.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined"),j=(0,g.Z)((0,Z.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"}),"ArrowForwardOutlined"),w=t(35192),b=t(64162),k=t.n(b),S=t(72845),C=t(97729),D=function(e){var n=e.modal,t=e.setprevidx,l=e.selectedatt,g=e.previdx,b=e.setDeleteId,D=e.setopen,A=e.toggleModal,M=e.open,E=e.previewId,P=e.deletedoc,I=e.preview,L=(0,S.a1)(E),T=L.data,O=L.isFetching,z=(0,a.useState)(),F=(0,o.Z)(z,2),U=F[0],_=F[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,o,a,s,c,l,u,d,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null===T||void 0===T||null===(n=T[0])||void 0===n?void 0:n.media,o=k().decompressFromUTF16(i),e.next=4,(0,C.Y)(o);case 4:if(a=e.sent){for(c=atob(null===a||void 0===a?void 0:a.split("base64,")[1]),l=new Array(c.length),u=0;u<c.length;u++)l[u]=c.charCodeAt(u);d=new Uint8Array(l),p=new Blob([d],{type:null===(s=T[0])||void 0===s?void 0:s.type}),t=URL.createObjectURL(p),_({blobUrl:t,selectedforpreview:T,fileName:null===T||void 0===T?void 0:T.name,id:null===T||void 0===T?void 0:T._id,mediaData:a})}case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();T&&e()}),[T]),(0,Z.jsxs)(d.Z,{open:n,onClose:function(){A(),t(0)},fullWidth:!0,children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)(f.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[!O&&(0,Z.jsx)("a",{href:null===U||void 0===U?void 0:U.mediaData,download:null===U||void 0===U?void 0:U.fileName,tabIndex:"_balnk",style:{cursor:"pointer",display:"flex"},children:(0,Z.jsx)(x.Z,{size:25,color:"primary"})})," ",(0,Z.jsxs)(c.ZP,{style:{display:"flex",justifyContent:"center"},children:[g>0&&!O&&(0,Z.jsx)(y,{style:{marginRight:"5px",cursor:"pointer"},color:"primary",size:35,onClick:function(){I(l[g-1]),t(g-1)}}),(0,Z.jsxs)(v.Z,{style:{fontSize:"1rem",fontWeight:"bold",letterSpacing:"1px"},children:["Preview ",g+1," of ",null===l||void 0===l?void 0:l.length]}),l.length>g+1&&!O&&(0,Z.jsx)(j,{size:35,style:{marginLeft:"5px",cursor:"pointer"},color:"primary",onClick:function(){I(l[g+1]),t(g+1)}})]}),(0,Z.jsx)("div",{children:!O&&l.length>1&&(0,Z.jsx)(w.Z,{style:{cursor:"pointer"},color:"primary",size:25,className:"collapse-icon",onClick:function(){b(null===U||void 0===U?void 0:U.id),D(!0)}})})]})}),(0,Z.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,Z.jsx)(u.Z,{handleConfirm:function(){P(),D(!1)},isOpen:M,closeModal:function(){return D(!1)}}),O&&(0,Z.jsx)(m.Z,{}),!O&&(0,Z.jsx)(s.Z,{height:500,width:"100%",children:(0,Z.jsx)("iframe",{style:{height:"100%",width:"100%"},allowFullScreen:!0,alt:"Documents",title:"Documents",src:null===U||void 0===U?void 0:U.mediaData})})]})]})},A=t(1413),M=t(37762),E=t(56605),P=t(19536),I=t(61474),L=t(54727),T=(0,g.Z)((0,Z.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),O=t(91210),z=t(31881),F=t.n(z),U=t(71003),_=t(79428),H=sessionStorage.getItem("authtoken"),N=JSON.parse(sessionStorage.getItem("logInUserData")),B=[{value:"1h",label:"1 Hour"},{value:"1d",label:"1 Day"},{value:"1w",label:"1 Week"},{value:"1m",label:"1 Month"}],R=[{value:!0,label:"Allow Download"},{value:!1,label:"Allow View Only"}],V=function(e){var n=(0,a.useState)(""),t=(0,o.Z)(n,2),r=t[0],i=t[1],s=(0,a.useState)(""),u=(0,o.Z)(s,2),f=u[0],v=u[1],x=(0,a.useState)(""),g=(0,o.Z)(x,2),y=g[0],j=g[1],w=(0,a.useState)(!1),b=(0,o.Z)(w,2),k=b[0],S=b[1];return console.log(e.loading),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(d.Z,{open:e.modal,onClose:function(){e.toggleModal()},centered:!0,size:"lg",fullWidth:!0,children:[(0,Z.jsx)(p.Z,{children:"Send as mail"}),(0,Z.jsxs)(h.Z,{children:[e.loading&&(0,Z.jsx)(m.Z,{}),!e.loading&&(0,Z.jsxs)(c.ZP,{container:!0,rowSpacing:.01,spacing:2,children:[(0,Z.jsx)(c.ZP,{item:!0,xs:6,children:(0,Z.jsx)(l.nv,{value:r,label:"Email *",onChange:function(e){return i(e.target.value)}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:6,children:(0,Z.jsx)(l.nv,{value:f,label:"Name *",onChange:function(e){return v(e.target.value)}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:6,children:(0,Z.jsx)(I.gc,{id:"data-category",name:"label",onChange:function(e,n){return j(null===n||void 0===n?void 0:n.value)},options:B,value:(0,_.NA)(B,y),renderInput:function(e){return(0,Z.jsx)(l.nv,(0,A.Z)((0,A.Z)({},e),{},{label:"Expiry for Documents *"}))}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:6,children:(0,Z.jsx)(I.gc,{id:"data-category",onChange:function(e,n){return S(null===n||void 0===n?void 0:n.value)},name:"label",options:R,value:(0,_.NA)(R,k),renderInput:function(e){return(0,Z.jsx)(l.nv,(0,A.Z)((0,A.Z)({},e),{},{label:"Allow Download"}))}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,justifyContent:"center",children:(0,Z.jsx)(U.Z,{onClick:function(n){if(n.preventDefault(),""===r)return(0,Z.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Mail Id",severity:"warning"});if(""===f)return(0,Z.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Enter reciver Name",severity:"warning"});if(""===y)return(0,Z.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Select Document Expiry",severity:"warning"});var t=new Date;"1m"===y?t.setMonth(t.getMonth()+1):"1d"===y?t.setDate(t.getDate()+1):"1w"===y?t.setDate(t.getDate()+7):"1h"===y&&t.setHours(t.getHours()+1);var o={email:r,name:f,expiry:t,allowdownload:k,docs:e.mailAtt,status:0,user:null===N||void 0===N?void 0:N._id};F().post("/backendapi/document/mail",o,{headers:{Authorization:"Bearer ".concat(H)}}).then((function(n){return"Success"===(null===n||void 0===n?void 0:n.data)?(i(""),v(""),j(""),S(!1),e.toggleModal(),(0,Z.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent successfully"})):(0,Z.jsx)(l.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Mail sent failed. Please check email address",severity:"error"})}))},variant:"contained",children:"Send"})})]})]})]})})},G=sessionStorage.getItem("authtoken"),Y=[{value:"Asset",label:"Asset"},{value:"Expenses",label:"Expenses"},{value:"Vault",label:"Document Vault"},{value:"Liability",label:"Liability"},{value:"Postman",label:"Postman"}],q=function(e){var n=(0,a.useState)(),t=(0,o.Z)(n,2),s=t[0],u=t[1],d=(0,S.HH)().data,p=(0,S.E4)(s,{skip:!0}).data,f=e.handleClick,v=e.handleDelete,h=e.selecteddoc,m=e.setdocumentList,g=e.documentList,y=e.setselectedatt,j=e.preview,b=(0,a.useState)([]),D=(0,o.Z)(b,2),z=D[0],U=D[1],_=(0,a.useState)(!1),H=(0,o.Z)(_,2),N=H[0],B=H[1],R=(0,a.useState)(!0),q=(0,o.Z)(R,2),W=q[0],J=q[1],Q=(0,a.useState)([]),$=(0,o.Z)(Q,2),K=$[0],X=$[1],ee=(0,a.useState)([]),ne=(0,o.Z)(ee,2),te=ne[0],re=ne[1],ie=[{label:"Send",id:"send",cell:function(e){return(0,Z.jsx)(T,{sx:{cursor:"pointer"},onClick:function(){return ae(e.attachment)}})}},{label:"Name / Alias",id:"alias",cell:function(e){return e.alias}},{label:"Expiry",id:"expiry",sortable:!0,cell:function(e){return(null===e||void 0===e?void 0:e.expiry)&&(0,L.p6)(e.expiry.split("T")[0])}},{label:"Created At",id:"createdat",cell:function(e){return(null===e||void 0===e?void 0:e.createdAt)&&(0,L.p6)(e.createdAt.split("T")[0])}},{label:"Type",id:"type",cell:function(e){return e.type}},{label:"View",id:"view",cell:function(e){return(0,Z.jsx)(O.Z,{style:{cursor:"pointer"},size:20,onClick:function(){return f(e)}})}},{label:"",id:"download",cell:function(e){return(0,Z.jsx)(x.Z,{sx:{cursor:"pointer"},size:20,onClick:function(){return oe(e.attachment)}})}},{label:"",id:"trash",cell:function(e){return"Document Vault"===e.type&&(0,Z.jsx)(w.Z,{size:20,onClick:function(){return v(e._id)}})}}];(0,a.useEffect)((function(){if(null!==te&&void 0!==te&&te.length){var e=[];null===g||void 0===g||g.filter((function(n){var t=n.type,r=!1;return te.forEach((function(i){var o,a;return"all"===(null===i||void 0===i||null===(o=i.name)||void 0===o?void 0:o.toLowerCase())?m(g):(r=(null===i||void 0===i||null===(a=i.name)||void 0===a?void 0:a.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase()))?(e.push(n),r):void 0})),r})),U(e)}else m(g)}),[te]),(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t={},i=(0,M.Z)(d),e.prev=3,i.s();case 5:if((o=i.n()).done){e.next=23;break}if(a=o.value,t=(0,A.Z)({},a),null===a||void 0===a||!a.desc){e.next=12;break}return e.next=11,(0,C.Y)(a.desc);case 11:t.desc=e.sent;case 12:if(null===a||void 0===a||!a.expiry){e.next=16;break}return e.next=15,(0,C.Y)(a.expiry);case 15:t.expiry=e.sent;case 16:if(null===a||void 0===a||!a.alias){e.next=20;break}return e.next=19,(0,C.Y)(a.alias);case 19:t.alias=e.sent;case 20:n.push(t);case 21:e.next=5;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(3),i.e(e.t0);case 28:return e.prev=28,i.f(),e.finish(28);case 31:m(n);case 32:case"end":return e.stop()}}),e,null,[[3,25,28,31]])})));return function(){return e.apply(this,arguments)}}();null!==d&&void 0!==d&&d.length&&(e(),h&&d.forEach((function(e){e._id===h&&(y(e.attachment),j(e.attachment[0]))})))}),[d]),(0,a.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,o,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null===p||void 0===p?void 0:p[0],i=null===t||void 0===t?void 0:t.media,o=k().decompressFromUTF16(i),a=(0,C.Y)(o),(s=document.createElement("a")).href=a,s.setAttribute("download","".concat(null===p||void 0===p||null===(n=p[0])||void 0===n?void 0:n.name)),document.body.appendChild(s),s.click(),s.parentNode.removeChild(s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p&&function(){e.apply(this,arguments)}()}),[p]);var oe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.forEach((function(e){u(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ae=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(!0),B(!0),t=[],o=0;case 4:if(!(o<n.length)){e.next=10;break}return e.next=7,F().get("".concat("https://ladevapi.onrender.com","/backendapi/sender/msg/").concat(n[o]),{headers:{Authorization:"Bearer ".concat(G)}}).then(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var i,o,a,s,c,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(i=n.data)||void 0===i||null===(o=i[0])||void 0===o?void 0:o.media,c=k().decompressFromUTF16(s),e.next=4,(0,C.Y)(c);case 4:l=e.sent,u=null===(a=n.data[0])||void 0===a?void 0:a.name,t.push({data:l,filename:u});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 7:o+=1,e.next=4;break;case 10:X(t),J(!1);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,Z.jsxs)(a.Fragment,{children:[N&&(0,Z.jsx)(V,{modal:N,toggleModal:function(){return B(!N)},loading:W,mailAtt:K}),(0,Z.jsxs)(c.ZP,{container:!0,sx:{p:2},spacing:3,alignItems:"center",children:[(0,Z.jsx)(c.ZP,{item:!0,lg:4,xs:12,children:(0,Z.jsx)(l.ll,{title:"Documents List"})}),(null===g||void 0===g?void 0:g.length)>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(c.ZP,{item:!0,lg:4,xs:6,children:(0,Z.jsx)(E.Z,{type:"text",onChange:function(e){return function(e){if(null!==g&&void 0!==g&&g.length){var n=g.filter((function(n){var t=n.desc,r=n.alias,i=(null===t||void 0===t?void 0:t.toLowerCase().startsWith(e.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().startsWith(e.toLowerCase())),o=(null===t||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().includes(e.toLowerCase()));return!(!i&&!o)}));U(n)}}(e.target.value)},label:"Search"})}),(0,Z.jsx)(c.ZP,{item:!0,lg:4,xs:6,children:(0,Z.jsx)(I.gc,{isMulti:!0,id:"optionSelect",onChange:function(e,n){return function(e){var n=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){n.push({id:e.value,name:e.label})})),re(n)}(n)},options:Y,value:te.map((function(e){var n=Y.filter((function(n){return n.value===e.id}));return{value:n[0].value,label:n[0].label}})),renderInput:function(e){return(0,Z.jsx)(l.nv,(0,A.Z)((0,A.Z)({},e),{},{label:"Select Category"}))}})})]})]}),(0,Z.jsx)(P.Z,{}),(0,Z.jsx)(l.Gn,{columns:ie,rows:null!==z&&void 0!==z&&z.length?z:g})]})},W=t(57775),J=t(51057),Q=t(81800),$=t(47578),K=function(e){return new Promise((function(n,t){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return n(r.result)},r.onerror=function(e){return t(e)}}))},X=JSON.parse(sessionStorage.getItem("logInUserData")),ee=function(e){var n=(0,a.useState)([]),t=(0,o.Z)(n,2),s=t[0],u=t[1],d=(0,a.useState)(!1),p=(0,o.Z)(d,2),v=p[0],h=p[1],m=(0,a.useState)(""),x=(0,o.Z)(m,2),g=x[0],y=x[1],j=(0,S.Q7)(),w=(0,o.Z)(j,2),b=w[0],D=w[1],A=D.isError,M=D.isSuccess,E=D.isFetching,P=D.error,L=e.alias,T=e.setalias,O=e.desc,z=e.setdesc,F=e.setfilesParent,U=e.setSnackMsg,H=e.setSeverity,N=function(){return new Date(g).getTime()<(new Date).getTime()},B=function(){T(""),z(""),y(""),u([]),h(!0)},R=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,o,a,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),null!==s&&void 0!==s&&s.length){e.next=5;break}return H("error"),U("No File Selected"),e.abrupt("return");case 5:return e.prev=5,i=[],(t={}).userId=null===X||void 0===X?void 0:X._id,t.type="Document Vault",e.next=12,(0,C.Gf)(L);case 12:return t.alias=e.sent,e.next=15,(0,C.Gf)(O);case 15:return t.desc=e.sent,e.next=18,(0,C.Gf)(g);case 18:t.expiry=e.sent,o=0;case 20:if(!(o<s.length)){e.next=32;break}return e.next=23,K(s[o]);case 23:return a=e.sent,e.next=26,(0,C.Gf)(a);case 26:c=e.sent,l=k().compressToUTF16(c),i.push({media:l,name:s[o].name,type:s[o].type,userId:null===X||void 0===X?void 0:X._id});case 29:o++,e.next=20;break;case 32:t.attachment=i,b(t),e.next=39;break;case 36:e.prev=36,e.t0=e.catch(5),console.log("error",e.t0);case 39:case"end":return e.stop()}}),e,null,[[5,36]])})));return function(n){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){M&&B(),A&&(T(),z(),y(),h(!0),U(P),H("error"))}),[M,A]),(0,Z.jsxs)(a.Fragment,{children:[(0,Z.jsx)(c.ZP,{item:!0,xs:12,md:9,lg:9,children:(0,Z.jsx)(W.Z,{children:(0,Z.jsxs)(J.Z,{children:[(0,Z.jsx)(l.ll,{title:"Secure Your Document"}),(0,Z.jsxs)(c.ZP,{container:!0,rowSpacing:.01,spacing:1,children:[(0,Z.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(l.nv,{margin:"dense",name:"AttachmentName",id:"AttachmentName",label:"Attachment Name / Alias",value:L,onChange:function(e){var n;return T(null===(n=e.target.value)||void 0===n?void 0:n.trim())}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(l.nv,{margin:"dense",type:"Date",name:"Date",id:"nameMultiExpiry",label:"Expiry Date",InputProps:{inputProps:{min:(0,_.BZ)(),max:"9999-12-31"}},InputLabelProps:{shrink:!0},value:g,error:N(),onChange:function(e){return y(e.target.value)},onClick:function(e){return y(e.target.value)}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,sm:12,children:(0,Z.jsx)(l.nv,{margin:"dense",type:"textarea",name:"name1",id:"nameMultiDescription1",label:"Description",value:O,multiline:!0,onChange:function(e){var n;return z(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value)}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,sm:12,children:(0,Z.jsx)($.r,{setfilesOndrop:function(e){h(!1),u(e)},setfilesParent:F,resetDropzone:v,isMulti:!0,notMulti:!1,buttonText:"Drag `n` drop Or Browse"})})]}),(0,Z.jsxs)(f.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,Z.jsx)(I.ZP,{varient:"outlined",label:"Reset",onClick:function(){return B()}}),(0,Z.jsx)(I.ZP,{varient:"contained",label:"Add",disabled:E||!g||!s.length||N(),onClick:function(e){R(e)}})]})]})})}),(0,Z.jsx)(Q.Z,{})]})},ne=function(){var e=(0,a.useState)(),n=(0,o.Z)(e,2),t=n[0],d=n[1],p=(0,S.mo)(),f=(0,o.Z)(p,2),v=f[0],h=f[1],m=h.isError,x=h.isSuccess,g=(0,S.BS)(),y=(0,o.Z)(g,2),j=y[0],w=y[1],b=w.isError,k=w.isSuccess,C=(0,a.useState)(!1),A=(0,o.Z)(C,2),M=A[0],E=A[1],P=(0,a.useState)(),I=(0,o.Z)(P,2),L=I[0],T=I[1],O=(0,a.useState)([]),z=(0,o.Z)(O,2),F=z[0],U=z[1],_=(0,a.useState)(0),H=(0,o.Z)(_,2),N=H[0],B=H[1],R=(0,a.useState)(""),V=(0,o.Z)(R,2),G=V[0],Y=V[1],W=(0,a.useState)(""),J=(0,o.Z)(W,2),Q=J[0],$=J[1],K=(0,a.useState)([]),X=(0,o.Z)(K,2),ne=X[0],te=X[1],re=(0,a.useState)(!1),ie=(0,o.Z)(re,2),oe=ie[0],ae=ie[1],se=(0,a.useState)(!1),ce=(0,o.Z)(se,2),le=ce[0],ue=ce[1],de=function(){E(!M)};(0,a.useEffect)((function(){b&&(ye("error"),me((null===b||void 0===b?void 0:b.length)||"Document Deleted Successfully")),k&&(ye("success"),me("Document  deleted successfully!"))}),[b,k]),(0,a.useEffect)((function(){x&&(U([]),B(0),de(),ye("success"),me("Attachment deleted successfully!")),m&&(me((null===m||void 0===m?void 0:m.length)||"Attachment deletion failed!"),ye("error"))}),[x,m]);var pe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{v({deleteId:le})}catch(n){console.log("error",n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=(0,a.useState)(""),ve=(0,o.Z)(fe,2),he=ve[0],me=ve[1],xe=(0,a.useState)(""),ge=(0,o.Z)(xe,2),Ze=ge[0],ye=ge[1];return(0,Z.jsxs)(s.Z,{children:[(0,Z.jsx)(l.A9,{handleClick:function(){me(""),ye("")},severity:Ze,openSnack:!!he,openSnackMsg:he}),(0,Z.jsx)(u.Z,{handleConfirm:function(){pe(),ae(!1)},isOpen:oe,closeModal:function(){return ae(!1)}}),M&&(0,Z.jsx)(D,{modal:M,setprevidx:B,selectedatt:F,previdx:N,setDeleteId:ue,setopen:ae,open:oe,toggleModal:de,deletedoc:function(e){try{j({deleteId:le,selecteddoc:L})}catch(n){console.log("error",n)}},preview:function(e){return d(e)},previewId:t}),(0,Z.jsx)(c.ZP,{container:!0,spacing:1,sx:{p:2},children:(0,Z.jsx)(ee,{alias:G,setalias:Y,desc:Q,setdesc:$})}),(0,Z.jsx)(c.ZP,{container:!0,spacing:1,sx:{p:2},children:(0,Z.jsx)(c.ZP,{item:!0,xs:12,md:9,lg:9,children:(0,Z.jsx)(q,{handleClick:function(e){T(e._id),U(e.attachment),de(),d(e.attachment[0])},handleDelete:function(e){ue(e._id),ae(!0)},setdocumentList:te,selecteddoc:L,documentList:ne,setselectedatt:U,preview:function(e){return d(e)}})})})]})}},47578:function(e,n,t){"use strict";t.d(n,{r:function(){return m}});var r=t(1413),i=t(93433),o=t(29439),a=t(47313),s=t(30712),c=t(13760),l=t(80614),u=t(44610),d=t(47605),p=t(71003),f=t(35898),v=t(20938),h=t(46417),m=function(e){var n=(0,a.useState)(e.file?e.file:[]),t=(0,o.Z)(n,2),m=t[0],x=t[1],g=(0,l.uI)({maxFiles:e.notMulti?1:5,multiple:!e.notMulti,onDrop:function(n){if(1===e.notMulti)e.setfilesOndrop(n),x(n.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})));else{if((m.length?m.filter((function(e){var t;return(null===e||void 0===e?void 0:e.name)===(null===(t=n[0])||void 0===t?void 0:t.name)})):[]).length)return(0,h.jsx)(v.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"File already added"});e.setfilesOndrop([].concat((0,i.Z)(m),(0,i.Z)(n))),x([].concat((0,i.Z)(m),(0,i.Z)(n)))}}}),Z=g.getInputProps,y=g.open,j=null===m||void 0===m?void 0:m.map((function(n){return(0,h.jsx)(u.Z,{sx:{m:1},label:(0,h.jsxs)(d.Z,{children:["".concat(n.name.length>15?"".concat(n.name.slice(0,10),"..."):n.name),(0,h.jsx)(s.Z,{size:15,sx:{margin:"-6px 6px"},onClick:function(t){t.stopPropagation(),function(n){1===(null===m||void 0===m?void 0:m.length)&&e.setfilesParent([]),e.isMulti&&(x(m.filter((function(e){return e!==n}))),e.setfilesParent(m.filter((function(e){return e!==n}))))}(n)}})]},n.name),variant:"outlined"},n.name)}));return(0,a.useEffect)((function(){return function(){m.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[m]),(0,a.useEffect)((function(){e.resetDropzone&&x([])}),[e.resetDropzone]),(0,h.jsxs)(p.Z,{variant:"outlined",fullWidth:!0,sx:{display:"inline-block",my:1},children:[(0,h.jsxs)(f.Z,{onClick:y,children:[(0,h.jsx)(v.nv,(0,r.Z)({},Z())),(j.length<=0||e.isMulti)&&(0,h.jsxs)(d.Z,{children:[e.buttonText," ",(0,h.jsx)(c.Z,{sx:{margin:"-6px 6px"}})]})]}),(0,h.jsx)("div",{children:j.length>0&&(0,h.jsx)("aside",{style:{display:"flex"},children:j})})]})}},35192:function(e,n,t){"use strict";var r=t(54750),i=t(46417);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},18377:function(e,n,t){"use strict";var r=t(54750),i=t(46417);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},91210:function(e,n,t){"use strict";var r=t(54750),i=t(46417);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},64162:function(e,n,t){var r,i=function(){var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function i(e,n){if(!r[e]){r[e]={};for(var t=0;t<e.length;t++)r[e][e.charAt(t)]=t}return r[e][n]}var o={compressToBase64:function(e){if(null==e)return"";var t=o._compress(e,6,(function(e){return n.charAt(e)}));switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:o._decompress(e.length,32,(function(t){return i(n,e.charAt(t))}))},compressToUTF16:function(n){return null==n?"":o._compress(n,15,(function(n){return e(n+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:o._decompress(e.length,16384,(function(n){return e.charCodeAt(n)-32}))},compressToUint8Array:function(e){for(var n=o.compress(e),t=new Uint8Array(2*n.length),r=0,i=n.length;r<i;r++){var a=n.charCodeAt(r);t[2*r]=a>>>8,t[2*r+1]=a%256}return t},decompressFromUint8Array:function(n){if(null===n||void 0===n)return o.decompress(n);for(var t=new Array(n.length/2),r=0,i=t.length;r<i;r++)t[r]=256*n[2*r]+n[2*r+1];var a=[];return t.forEach((function(n){a.push(e(n))})),o.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":o._compress(e,6,(function(e){return t.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),o._decompress(e.length,32,(function(n){return i(t,e.charAt(n))})))},compress:function(n){return o._compress(n,16,(function(n){return e(n)}))},_compress:function(e,n,t){if(null==e)return"";var r,i,o,a={},s={},c="",l="",u="",d=2,p=3,f=2,v=[],h=0,m=0;for(o=0;o<e.length;o+=1)if(c=e.charAt(o),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=p++,s[c]=!0),l=u+c,Object.prototype.hasOwnProperty.call(a,l))u=l;else{if(Object.prototype.hasOwnProperty.call(s,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)h<<=1,m==n-1?(m=0,v.push(t(h)),h=0):m++;for(i=u.charCodeAt(0),r=0;r<8;r++)h=h<<1|1&i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i>>=1}else{for(i=1,r=0;r<f;r++)h=h<<1|i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i=0;for(i=u.charCodeAt(0),r=0;r<16;r++)h=h<<1|1&i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i>>=1}0==--d&&(d=Math.pow(2,f),f++),delete s[u]}else for(i=a[u],r=0;r<f;r++)h=h<<1|1&i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i>>=1;0==--d&&(d=Math.pow(2,f),f++),a[l]=p++,u=String(c)}if(""!==u){if(Object.prototype.hasOwnProperty.call(s,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)h<<=1,m==n-1?(m=0,v.push(t(h)),h=0):m++;for(i=u.charCodeAt(0),r=0;r<8;r++)h=h<<1|1&i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i>>=1}else{for(i=1,r=0;r<f;r++)h=h<<1|i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i=0;for(i=u.charCodeAt(0),r=0;r<16;r++)h=h<<1|1&i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i>>=1}0==--d&&(d=Math.pow(2,f),f++),delete s[u]}else for(i=a[u],r=0;r<f;r++)h=h<<1|1&i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i>>=1;0==--d&&(d=Math.pow(2,f),f++)}for(i=2,r=0;r<f;r++)h=h<<1|1&i,m==n-1?(m=0,v.push(t(h)),h=0):m++,i>>=1;for(;;){if(h<<=1,m==n-1){v.push(t(h));break}m++}return v.join("")},decompress:function(e){return null==e?"":""==e?null:o._decompress(e.length,32768,(function(n){return e.charCodeAt(n)}))},_decompress:function(n,t,r){var i,o,a,s,c,l,u,d=[],p=4,f=4,v=3,h="",m=[],x={val:r(0),position:t,index:1};for(i=0;i<3;i+=1)d[i]=i;for(a=0,c=Math.pow(2,2),l=1;l!=c;)s=x.val&x.position,x.position>>=1,0==x.position&&(x.position=t,x.val=r(x.index++)),a|=(s>0?1:0)*l,l<<=1;switch(a){case 0:for(a=0,c=Math.pow(2,8),l=1;l!=c;)s=x.val&x.position,x.position>>=1,0==x.position&&(x.position=t,x.val=r(x.index++)),a|=(s>0?1:0)*l,l<<=1;u=e(a);break;case 1:for(a=0,c=Math.pow(2,16),l=1;l!=c;)s=x.val&x.position,x.position>>=1,0==x.position&&(x.position=t,x.val=r(x.index++)),a|=(s>0?1:0)*l,l<<=1;u=e(a);break;case 2:return""}for(d[3]=u,o=u,m.push(u);;){if(x.index>n)return"";for(a=0,c=Math.pow(2,v),l=1;l!=c;)s=x.val&x.position,x.position>>=1,0==x.position&&(x.position=t,x.val=r(x.index++)),a|=(s>0?1:0)*l,l<<=1;switch(u=a){case 0:for(a=0,c=Math.pow(2,8),l=1;l!=c;)s=x.val&x.position,x.position>>=1,0==x.position&&(x.position=t,x.val=r(x.index++)),a|=(s>0?1:0)*l,l<<=1;d[f++]=e(a),u=f-1,p--;break;case 1:for(a=0,c=Math.pow(2,16),l=1;l!=c;)s=x.val&x.position,x.position>>=1,0==x.position&&(x.position=t,x.val=r(x.index++)),a|=(s>0?1:0)*l,l<<=1;d[f++]=e(a),u=f-1,p--;break;case 2:return m.join("")}if(0==p&&(p=Math.pow(2,v),v++),d[u])h=d[u];else{if(u!==f)return null;h=o+o.charAt(0)}m.push(h),d[f++]=o+h.charAt(0),o=h,0==--p&&(p=Math.pow(2,v),v++)}}};return o}();void 0===(r=function(){return i}.call(n,t,n,e))||(e.exports=r)},25819:function(){}}]);