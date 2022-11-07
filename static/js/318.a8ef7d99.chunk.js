"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[318],{1087:function(e,n,t){t.d(n,{Z:function(){return r}});t(47313);var i=t(92336),a=t(2884),o=t(24694),l=t(6306),s=t(46417);function r(e){var n=e.collapseID,t=(e.setcollapseID,e.collapseItem),r=e.formatme,d=e.toggleCollapse;return(0,s.jsxs)(i.Z,{sx:{my:.9},expanded:n===t.id,onChange:function(){return d(t.id)},children:[(0,s.jsx)(o.Z,{expandIcon:(0,s.jsx)(l.Z,{}),children:r(t.title)}),(0,s.jsx)(a.Z,{children:t.content})]})}},18825:function(e,n,t){t.d(n,{z:function(){return r}});var i=t(71535),a=t(40229),o=t(22449),l=(t(47313),t(94843)),s=t(46417),r=function(e){return(0,s.jsxs)(i.ZP,{container:!0,sx:{px:2.5,py:1},children:[(0,s.jsx)(i.ZP,{item:!0,xs:6,children:(0,s.jsx)(l.ll,{title:e.heading})}),(0,s.jsx)(i.ZP,{item:!0,xs:6,children:(0,s.jsx)(a.Z,{display:"flex",justifyContent:"flex-end",children:(0,s.jsx)(o.Z,{onChange:function(n){return e.search(n.target.value)},placeholder:"Search"})})})]})}},69933:function(e,n,t){t.d(n,{r:function(){return x}});var i=t(1413),a=t(93433),o=t(29439),l=t(47313),s=t(30712),r=t(13760),d=t(80614),u=t(71363),c=t(89870),h=t(62463),v=t(12613),f=t(46417),x=function(e){var n=(0,l.useState)(e.file?e.file:[]),t=(0,o.Z)(n,2),x=t[0],m=t[1],p=(0,d.uI)({maxFiles:e.notMulti?1:5,multiple:!e.notMulti,onDrop:function(n){if(1===e.notMulti)e.setfilesOndrop(n),m(n.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})));else{if((x.length?x.filter((function(e){var t;return(null===e||void 0===e?void 0:e.name)===(null===(t=n[0])||void 0===t?void 0:t.name)})):[]).length)return(0,f.jsx)(v.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"File already added"});e.setfilesOndrop([].concat((0,a.Z)(x),(0,a.Z)(n))),m([].concat((0,a.Z)(x),(0,a.Z)(n)))}}}),g=p.getInputProps,Z=p.open,j=null===x||void 0===x?void 0:x.map((function(n){return(0,f.jsxs)(u.Z,{children:["".concat(n.name.length>15?"".concat(n.name.slice(0,15),"..."):n.name),(0,f.jsx)(s.Z,{size:15,sx:{margin:"-6px 6px"},onClick:function(t){t.stopPropagation(),function(n){e.isMulti?m(x.filter((function(e){return e!==n}))):m([])}(n)}})]},n.name)}));return(0,l.useEffect)((function(){return function(){x.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[x]),(0,l.useEffect)((function(){e.resetDropzone&&m([])}),[e.resetDropzone]),(0,f.jsxs)(c.Z,{variant:"outlined",fullWidth:!0,children:[(0,f.jsxs)(h.Z,{onClick:Z,children:[(0,f.jsx)(v.nv,(0,i.Z)({},g())),(j.length<=0||e.isMulti)&&(0,f.jsxs)(u.Z,{children:["Drag `n` drop Or Browse ",(0,f.jsx)(r.Z,{sx:{margin:"-6px 6px"}})]})]}),j.length>0&&(0,f.jsx)("aside",{style:{display:"flex"},children:j})]})}},10226:function(e,n,t){t.d(n,{Z:function(){return L}});var i=t(1413),a=t(93433),o=t(29439),l=t(47313),s=t(40229),r=t(82500),d=t(71535),u=t(71363),c=t(34940),h=t(89870),v=t(62463),f=t(39653),x=t(8586),m=t(46095),p=t(46417),g=(0,m.Z)((0,p.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Z=t(54727),j=t(61474),S=t(85120),C=t(12613),b=t(86282),y=t(7081),P=t(5448),D=t(88356);function w(e){var n=e.modal,t=e.toggleModal,a=e.fname,o=e.setfname,l=e.ftype,s=e.setftype,r=e.editID,d=e.clearCustomField,u=e.handleSecrets,c=e.secrets;return(0,p.jsxs)(y.Z,{open:n,fullWidth:!0,maxWidth:"xs",onClose:t,children:[(0,p.jsx)(P.Z,{children:"Add a secret question"}),(0,p.jsxs)(D.Z,{children:[(0,p.jsx)(j.gc,{name:"relation",options:b.DD.filter((function(e){var n,t,i;return e.value!==(null===c||void 0===c||null===(n=c[0])||void 0===n?void 0:n.question)&&e.value!==(null===c||void 0===c||null===(t=c[1])||void 0===t?void 0:t.question)&&e.value!==(null===c||void 0===c||null===(i=c[2])||void 0===i?void 0:i.question)})),onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;o(n)}(n)},value:(0,b.NA)(b.DD,a),renderInput:function(e){return(0,p.jsx)(f.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:" Secret Question"}))}}),(0,p.jsx)(f.Z,{type:"text",name:"Answer",margin:"normal",size:"small",fullWidth:!0,error:!!((null===l||void 0===l?void 0:l.length)<4),value:l,placeholder:"Answer",onChange:function(e){s(e.target.value)}}),(0,p.jsxs)(v.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"start"},children:[(0,p.jsx)(j.ZP,{varient:"outlined",label:"Cancel",onClick:function(e){d()}}),(0,p.jsx)(j.ZP,{varient:"contained",label:r?"Update":"Add",disabled:!(null!==a&&void 0!==a&&a.length)||""===l.trim(),onClick:u})]})]})]})}var k=t(75969),R=t(95716),A=JSON.parse(sessionStorage.getItem("dropdowns")).nomineeRelation;function L(e){var n=(0,l.useState)(),t=(0,o.Z)(n,2),m=t[0],y=t[1],P=(0,l.useState)(""),D=(0,o.Z)(P,2),L=D[0],E=D[1],M=(0,l.useState)(""),I=(0,o.Z)(M,2),V=I[0],O=I[1],z=(0,l.useState)(""),N=(0,o.Z)(z,2),F=N[0],U=N[1],B=(0,l.useState)(""),_=(0,o.Z)(B,2),W=_[0],q=_[1],T=(0,l.useState)(!0),Y=(0,o.Z)(T,2),K=Y[0],$=Y[1],Q=(0,l.useState)(""),H=(0,o.Z)(Q,2),J=H[0],G=H[1],X=(0,l.useState)(""),ee=(0,o.Z)(X,2),ne=ee[0],te=ee[1],ie=(0,l.useState)(""),ae=(0,o.Z)(ie,2),oe=ae[0],le=ae[1],se=(0,l.useState)(!1),re=(0,o.Z)(se,2),de=re[0],ue=re[1],ce=(0,l.useState)(""),he=(0,o.Z)(ce,2),ve=he[0],fe=he[1],xe=(0,l.useState)(""),me=(0,o.Z)(xe,2),pe=me[0],ge=me[1],Ze=(0,l.useState)(""),je=(0,o.Z)(Ze,2),Se=je[0],Ce=je[1],be=(0,l.useState)(""),ye=(0,o.Z)(be,2),Pe=ye[0],De=ye[1],we=(0,l.useState)(""),ke=(0,o.Z)(we,2),Re=ke[0],Ae=ke[1],Le=(0,l.useState)(""),Ee=(0,o.Z)(Le,2),Me=Ee[0],Ie=Ee[1],Ve=(0,l.useState)(""),Oe=(0,o.Z)(Ve,2),ze=Oe[0],Ne=Oe[1],Fe=(0,l.useState)(""),Ue=(0,o.Z)(Fe,2),Be=Ue[0],_e=Ue[1],We=(0,l.useState)([]),qe=(0,o.Z)(We,2),Te=qe[0],Ye=qe[1],Ke=(0,l.useState)(!1),$e=(0,o.Z)(Ke,2),Qe=$e[0],He=$e[1],Je=(0,l.useState)(""),Ge=(0,o.Z)(Je,2),Xe=Ge[0],en=Ge[1],nn=function(){Ne(""),_e(""),He(!Qe)},tn=function(){Qe&&nn(),He(!Qe)};(0,l.useEffect)((function(){if(e.data){var n=e.data,t=n.id,i=n.name,o=n.relation,l=n.relation1,s=n.address,r=n.email,d=n.primaryContact,u=n.secondaryContact,c=e.data.secrets;hn(),te(t),le(i),y(o),"Others"===o&&E(l),U(s),O(r),q(d),G(u),(null===c||void 0===c?void 0:c.length)&&Ye((0,a.Z)(c))}else(null===e.data||de)&&(cn(),hn());ue(!1)}),[e.data]);var an=function(){return Ie("Enter Valid Name")},on=function(){return Ce("Enter Valid Email")},ln=function(){return De("Enter Valid Contact No.")},sn=function(){return ge("Enter Valid Relation")},rn=function(){return fe("Enter Valid Relation")},dn=function(e){var n,t=e.target.name,i=null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value;switch(t){case"name":le(i),null!==i&&void 0!==i&&i.length&&i.trim()?Ie(""):an();break;case"email":O(i);var a=i.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);i&&a&&i.trim()?Ce(""):on();break;case"address":U(i);break;case"phone":q(i),K&&G(i),null!==i&&void 0!==i&&i.length&&10===i.length&&i.trim()&&Z.Yd.test(i)?De(""):ln();break;case"phoneC":G(i),10===i.length&&i.trim()&&Z.Yd.test(i)?Ae(""):Ae("Enter Valid whatsapp No."),(null===i||void 0===i||!i.length)&&Ae("");break;case"relation":null!==i&&void 0!==i&&i.length&&i.trim()?ge(""):sn();break;case"relation1":E(i),null!==i&&void 0!==i&&i.length&&i.trim()?fe(""):rn()}},un=function(n){console.log("das"),n.preventDefault();var t=((null===oe||void 0===oe||!oe.length)&&an(),(null===V||void 0===V||!V.length)&&on(),(null===W||void 0===W||!W.length)&&ln(),(null===m||void 0===m||!m.length)&&sn(),"Others"===m&&(null===L||void 0===L||!L.length)&&rn(),"Others"!==m&&fe(""),Me||!(null!==oe&&void 0!==oe&&oe.length)||pe||!(null!==m&&void 0!==m&&m.length)||ve||"Others"===m&&!(null!==L&&void 0!==L&&L.length)||Se||!(null!==V&&void 0!==V&&V.length)||Pe||!(null!==W&&void 0!==W&&W.length)||Re);if(t&&C.A9,e.isLoading&&(C.A9,e.data),t||e.isLoading)console.log(t,"inValid");else{var i={relation:null===m||void 0===m?void 0:m.trim(),relation1:null===L||void 0===L?void 0:L.trim(),email:null===V||void 0===V?void 0:V.trim(),address:null===F||void 0===F?void 0:F.trim(),contact1:null===W||void 0===W?void 0:W.trim(),contact2:null===J||void 0===J?void 0:J.trim(),id:null===ne||void 0===ne?void 0:ne.trim(),name:null===oe||void 0===oe?void 0:oe.trim(),secrets:Te};null!==e.data?(i._id=e.data._id,i.usage=e.data.usage,e.updateData(i)):(ue(!0),e.addData(i),cn(),hn())}},cn=function(){le(""),Ye([]),y(""),E(""),O(""),U(""),q(""),G("")},hn=function(){Ie(""),De(""),Ae(""),Ce(""),fe("")},vn=e.handleSidebar,fn=e.show,xn=e.data;return(0,p.jsx)(r.Z,{anchor:"right",open:fn,children:(0,p.jsxs)(s.Z,{sx:{mt:8,width:350,px:2},component:"form",children:[(0,p.jsxs)(d.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,p.jsx)(u.Z,{children:null!==xn?"UPDATE NOMINEE":"ADD NEW NOMINEE"}),(0,p.jsx)(x.Z,{size:20,onClick:function(){vn(!1,!0),cn(),hn()}})]}),(0,p.jsx)(c.Z,{}),(0,p.jsx)(f.Z,{name:"name",value:oe,margin:"dense",error:!!Me,placeholder:"Name*",onChange:dn,id:"data-name"}),(0,p.jsx)(d.ZP,{item:!0,children:(0,p.jsx)(j.gc,{id:"relationID",name:"relation",onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;y(n),"Others"!==n&&(fe(""),E("")),null!==n&&void 0!==n&&n.length&&n.trim()&&ge("")}(n)},options:A,value:(0,b.NA)(A,m),renderInput:function(e){return(0,p.jsx)(f.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:"Relation*"}))}})}),"Others"===m&&(0,p.jsx)(f.Z,{margin:"dense",name:"relation1",value:L,error:!!ve,placeholder:"Relation Name*",onChange:dn,id:"data-Relation",style:{borderColor:ve?"red":""}}),(0,p.jsx)(f.Z,{type:"email",name:"email",margin:"dense",value:V,error:!!Se,placeholder:"Email*",onChange:dn,id:"data-email"}),(0,p.jsx)(f.Z,{type:"tel",maxLength:10,margin:"dense",value:W,error:!!Pe,name:"phone",onChange:dn,onKeyPress:function(e){return(0,Z.ZP)(e)},id:"data-price1",placeholder:"Contact No.*"}),(0,p.jsx)(k.Z,{sx:{margin:0},control:(0,p.jsx)(R.Z,{sx:{padding:0},color:"secondary",name:"whatsapp",size:"small",checked:null!==xn?J===W:K,onChange:function(){return G(K?"":W),void $(!K)}}),label:(0,p.jsx)(u.Z,{fontSize:"15px",children:"Whatsapp same as Contact"})}),(0,p.jsx)(f.Z,{type:"tel",maxLength:10,value:K?W:J,name:"phoneC",error:!!Re,disabled:null!==xn?J===W:K,onChange:dn,onKeyPress:function(e){return(0,Z.ZP)(e)},id:"data-price",placeholder:"WhatsApp"}),(0,p.jsx)(f.Z,{value:F,margin:"dense",name:"address",placeholder:"Address",onChange:function(e){return dn(e)},id:"data-Address",multiline:!0,minRows:2}),(0,p.jsx)("div",{children:Te.map((function(e){return(0,p.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,p.jsxs)(u.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){return function(e){en(e),He(!0),Te.forEach((function(n){n.id===e&&(_e(n.answer),Ne(n.question))}))}(e.id)},children:["".concat(e.id,". ").concat(e.question)," "]})," ",(0,p.jsx)(g,{size:"1",onClick:function(){return function(e){var n,t=(0,a.Z)(Te);t=t.filter((function(n){return n.id!==e})),null!==(n=t)&&void 0!==n&&n.length&&t.forEach((function(e,n){e.id=n+1})),Ye((0,a.Z)(t))}(e.id)}})]},e.id)}))}),(null===Te||void 0===Te?void 0:Te.length)<3&&(0,p.jsx)(h.Z,{disabled:3===(null===Te||void 0===Te?void 0:Te.length),onClick:tn,children:"Add Secret Questions"}),(0,p.jsxs)(v.Z,{spacing:3,direction:"row",sx:{mt:2,justifyContent:"end"},children:[(0,p.jsx)(j.ZP,{varient:"outlined",label:null!==xn?"Cancel":"Reset",onClick:function(){null!==xn&&vn(!1,!0),cn(),hn()}}),(0,p.jsx)(j.ZP,{onClick:function(e){return un(e)},disabled:!(null!==Te&&void 0!==Te&&Te.length),label:null!==xn?e.isLoading?(0,p.jsx)(S.Z,{}):"Update":e.isLoading?(0,p.jsx)(S.Z,{}):"Add"})]}),(0,p.jsx)(w,{modal:Qe,secrets:Te,toggleModal:tn,fname:ze,setfname:Ne,ftype:Be,setftype:_e,editID:Xe,clearCustomField:nn,handleSecrets:function(){if(Xe){var e=(0,a.Z)(Te),n=e.findIndex((function(e){return e.id===Xe}));e[n].question=ze,e[n].answer=Be,Ye((0,a.Z)(e)),en("")}else{var t=(0,a.Z)(Te);t.push({id:(null===t||void 0===t?void 0:t.length)+1,question:ze,answer:Be}),Ye((0,a.Z)(t))}He(!1),Ne(""),_e("")}})]})})}},25240:function(e,n,t){var i=t(29439),a=t(42357),o=t(47313),l=t(71535),s=t(96900),r=t(56972),d=t(71363),u=t(8247),c=t(61474),h=t(46417);n.Z=function(e){var n=(0,o.useState)("00"),t=(0,i.Z)(n,2),v=t[0],f=t[1],x=(0,o.useState)("00"),m=(0,i.Z)(x,2),p=m[0],g=m[1],Z=(0,o.useState)(!1),j=(0,i.Z)(Z,2),S=j[0],C=j[1],b=(0,o.useState)(0),y=(0,i.Z)(b,2),P=y[0],D=y[1];(0,o.useEffect)((function(){var e;return S&&(e=setInterval((function(){var e=P%60,n=Math.floor(P/60),t=1===String(e).length?"0".concat(e):e,i=1===String(n).length?"0".concat(n):n;f(t),g(i),D((function(e){return e+1}))}),650)),function(){return clearInterval(e)}}),[S,P]);var w=(0,a.useReactMediaRecorder)({video:!1,audio:!0,echoCancellation:!0,onStop:function(n,t){console.log(t),function(e){var n=new FileReader;return n.readAsDataURL(e),new Promise((function(e){n.onloadend=function(){e(n.result)}}))}(t).then((function(n){e.setRecVideo(n)}))}}),k=w.status,R=w.startRecording,A=w.stopRecording,L=w.pauseRecording,E=w.clearBlobUrl,M=w.mediaBlobUrl;return(0,h.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,h.jsxs)(s.Z,{variant:"outlined",children:[(0,h.jsxs)(r.Z,{children:[(0,h.jsxs)(d.Z,{sx:{background:"#f1f3f4"},borderRadius:"50px",padding:"15px",marginBottom:1,children:["Recording Status : ",k]}),(M||e.recVideo)&&(0,h.jsx)("audio",{style:{width:"100%"},src:M||e.recVideo,controls:!0}),(0,h.jsxs)(d.Z,{margin:"auto",border:" #cccccc",boxShadow:"0 0 0 0.06rem #cccccc",borderRadius:"2px",padding:"2px",width:"max-content",children:[p," : ",v]})]}),(0,h.jsxs)(u.Z,{sx:{justifyContent:"center"},children:[(0,h.jsx)(c.ZP,{varient:"contained",label:S?"Pause":"paused"===k?"Resume":"Start",onClick:function(){S?L():R(),C(!S)}}),(0,h.jsx)(c.ZP,{varient:"outlined",label:"Stop",onClick:function(){A(),C(!1)}}),(0,h.jsx)(c.ZP,{varient:"outlined",label:"Clear",onClick:function(){C(!1),D(0),f("00"),g("00"),E(),C(!1)}})]})]})})}},5318:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var i=t(74165),a=t(15861),o=t(29439),l=t(47313),s=t(40229),r=t(71535),d=t(66135),u=t(36936),c=t(12613),h=t(39995),v=t(71363),f=t(7081),x=t(5448),m=t(88356),p=t(45959),g=t(60236),Z=t(96900),j=t(34940),S=t(56972),C=t(31881),b=t.n(C),y=t(31616),P=t(54727),D=t(1087),w=t(18825),k=t(46417),R=function(e){var n=(0,l.useState)(!1),t=(0,o.Z)(n,2),i=t[0],a=t[1],d=(0,l.useState)(""),u=(0,o.Z)(d,2),h=u[0],C=u[1],R=(0,l.useState)(""),A=(0,o.Z)(R,2),L=A[0],E=A[1],M=(0,l.useState)(!1),I=(0,o.Z)(M,2),V=I[0],O=I[1],z=(0,l.useState)(),N=(0,o.Z)(z,2),F=N[0],U=N[1],B=(0,l.useState)(!1),_=(0,o.Z)(B,2),W=_[0],q=_[1],T=(0,l.useState)([]),Y=(0,o.Z)(T,2),K=Y[0],$=Y[1],Q=(0,l.useState)(""),H=(0,o.Z)(Q,2),J=H[0],G=H[1],X=(0,l.useState)(),ee=(0,o.Z)(X,2),ne=ee[0],te=ee[1],ie=function(){a(!i)},ae=function(e){C(h!==e?e:"")},oe=function(n){var t;return null!==(t=e.colorOption)&&void 0!==t&&t[n]?e.colorOption[n]:n},le=function(n){var t,i,a="";return(null===n||void 0===n||null===(t=n.nominees)||void 0===t?void 0:t.length)&&n.nominees.forEach((function(e,t){t===n.nominees.length-1?a+=null===e||void 0===e?void 0:e.name:a="".concat(a+(null===e||void 0===e?void 0:e.name),", ")})),(0,k.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,k.jsx)(r.ZP,{item:!0,sm:4,xs:12,children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)("b",{children:" Type : "})," ",n.type,(0,k.jsx)("br",{}),(0,k.jsx)("b",{children:" Description : "})," ",n.desc,(0,k.jsx)("br",{}),(0,k.jsx)("b",{children:" Date : "})," ",null!==n&&void 0!==n&&n.date?(0,P.p6)(null===n||void 0===n||null===(i=n.date)||void 0===i?void 0:i.split("T")[0]):"After Death"]})}),(0,k.jsx)(r.ZP,{item:!0,sm:4,xs:12,children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)("b",{children:"Receiver Name :"})," ",n.rname,(0,k.jsx)("br",{}),(0,k.jsx)("b",{children:"Receiver Email :"})," ",n.remail,(0,k.jsx)("br",{}),(0,k.jsx)("b",{children:"Receiver Phone :"})," ",n.rphone]})}),(0,k.jsxs)(r.ZP,{item:!0,sm:4,xs:12,children:[(0,k.jsx)("b",{children:"Status :"})," ",0===n.status?(0,k.jsx)("span",{children:"Pending"}):1===n.status?(0,k.jsx)("span",{children:"Delivered"}):(0,k.jsxs)("span",{children:["Failed : ",n.failReason]}),(0,k.jsx)("br",{}),("Video"===n.type||"Voice"===n.type)&&(0,k.jsx)(v.Z,{sx:{color:"#20756d",cursor:"pointer"},onClick:function(){return function(e,n){O(!0),q("Video"===n),ie();var t=sessionStorage.getItem("authtoken");b().get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){var n;if(e.data&&null!==(n=e.data[0])&&void 0!==n&&n.media){for(var t,i,a=null===(t=e.data[0])||void 0===t||null===(i=t.media)||void 0===i?void 0:i.split("base64,"),o=a[0].substring(5,a[0].length-1),l=atob(a[1]),s=new Array(l.length),r=0;r<l.length;r++)s[r]=l.charCodeAt(r);var d=new Uint8Array(s),u=new Blob([d],{type:o}),c=URL.createObjectURL(u);U(c),O(!1)}}))}(n.msg,n.type)},children:"Video"===n.type?"Play Video":"Play Audio"}),(0,k.jsxs)(r.ZP,{item:!0,display:"flex",children:[(0,k.jsx)(v.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){return e.editItem(n)},children:"Edit"}),(0,k.jsx)(v.Z,{sx:{marginLeft:"10px",color:"red",cursor:"pointer"},onClick:function(){G(n._id),E(!0)},children:"Delete"})]})]})]})},se=(null===ne||void 0===ne?void 0:ne.length)>0?K:e.collapseItems;return(0,k.jsxs)(s.Z,{children:[(0,k.jsxs)(f.Z,{open:i,onClose:ie,centered:!0,children:[(0,k.jsx)(x.Z,{children:"Message"}),(0,k.jsx)(m.Z,{children:V?(0,k.jsx)(p.Z,{}):(0,k.jsx)(g.Z,{component:W?"video":"audio",controls:!0,src:F,autoPlay:!0,sx:{minWidth:"250px"}})})]}),e.loadingmsg&&null===e.collapseItems?(0,k.jsx)(p.Z,{}):(0,k.jsxs)(Z.Z,{children:[(0,k.jsx)(w.z,{heading:e.heading,search:function(n){te(n);var t=e.collapseItems.filter((function(e){var t=e.desc.toLowerCase().startsWith(n.toLowerCase())||e.type.toLowerCase().startsWith(n.toLowerCase())||e.title.toLowerCase().startsWith(n.toLowerCase()),i=e.desc.toLowerCase().includes(n.toLowerCase())||e.type.toLowerCase().includes(n.toLowerCase())||e.title.toLowerCase().includes(n.toLowerCase());return!(!t&&!i)}));$(t)}}),(0,k.jsx)(y.Z,{handleConfirm:function(){var n;n=J,b().delete("/backendapi/sender/deletebyid/".concat(n),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){e&&c.A9})).catch(),E(!1),e.refreshData.callFunc(!e.refreshData.value)},isOpen:L,closeModal:function(){return E(!1)}}),(0,k.jsx)(j.Z,{}),(0,k.jsx)(S.Z,{children:(null===se||void 0===se?void 0:se.length)>0?se.map((function(e){return(0,k.jsx)(l.Fragment,{children:(0,k.jsx)(D.Z,{collapseID:h,setcollapseID:C,collapseItem:{content:le(e),title:null===e||void 0===e?void 0:e.title,id:e._id},formatme:oe,toggleCollapse:ae})},e._id)})):(0,k.jsx)("span",{children:"No Messages Found"})})]})]})},A=t(10226),L=t(1413),E=t(75969),M=t(95716),I=t(62463),V=t(82363),O=t(25240),z=t(61474),N=t(69933),F=t(86282),U=t(39653),B=[{value:"Attachment",label:"Attachment",color:"#00B8D9",isFixed:!0},{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"Voice",label:"Voice",color:"#0052CC",isFixed:!0},{value:"Video",label:"Video",color:"#0052CC",isFixed:!0}],_=function(e){var n,t=e.oldMsg,i=e.rname,a=e.sameAsAbove,s=e.setRecVideo,d=e.rphone,u=e.setrphone,h=e.edititem,v=e.settype,f=e.settitle,x=e.nomineeOption2,m=e.userInput,p=e.setuserInput,g=e.remail,j=e.setremail,C=e.setdesc,b=e.desc,y=e.type,D=e.title,w=e.setdate,R=e.date,A=e.setsignature,_=e.signature,W=e.handleCheck,q=e.handleReset,T=e.handleSubmit,Y=e.validEmail,K=e.validPhone,$=e.validDate,Q=e.recVideo,H=e.setfilesOndrop,J=e.resetDropzone,G=(0,l.useState)(""),X=(0,o.Z)(G,2),ee=X[0],ne=X[1],te=!(null!==i&&void 0!==i&&i.length)||!(null!==d&&void 0!==d&&d.length)||!(null!==g&&void 0!==g&&g.length)||!(null!==y&&void 0!==y&&y.length)||!(null!==D&&void 0!==D&&D.length)||!a&&!(null!==R&&void 0!==R&&R.length)||!Y||!K||!a&&!$||R===(null===t||void 0===t||null===(n=t.date)||void 0===n?void 0:n.split("T")[0])&&b===(null===t||void 0===t?void 0:t.desc)&&i===(null===t||void 0===t?void 0:t.rname)&&g===(null===t||void 0===t?void 0:t.remail)&&d===(null===t||void 0===t?void 0:t.rphone)&&_===(null===t||void 0===t?void 0:t.signature)&&D===(null===t||void 0===t?void 0:t.title),ie=function(e){e.length<=10&&(u(e),null!==e&&void 0!==e&&e.length&&10===e.length&&e.trim()&&P.Yd.test(e)?ne(""):ne("Enter Valid Contact No."))};return(0,k.jsx)(Z.Z,{children:(0,k.jsxs)(S.Z,{children:[(0,k.jsx)(c.ll,{title:h?"Edit Message":"Schedule Message"}),(0,k.jsxs)(r.ZP,{container:!0,rowSpacing:.01,spacing:1,justifyContent:"center",children:[(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(z.gc,{name:"color",options:B,isDisabled:h,onChange:function(e,n){return v(null===n||void 0===n?void 0:n.value)},value:(0,F.NA)(B,y),renderInput:function(e){return(0,k.jsx)(U.Z,(0,L.Z)((0,L.Z)({},e),{},{placeholder:h?y:"Message Type *"}))}})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(z.gc,{name:i,options:x,onChange:function(e,n){return p(n)},value:(0,F.NA)(x,null===m||void 0===m?void 0:m.value),renderInput:function(e){return(0,k.jsx)(U.Z,(0,L.Z)((0,L.Z)({},e),{},{placeholder:"Reciever"}))}})}),y&&(0,k.jsxs)(l.Fragment,{children:[(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(U.Z,{type:"email",id:"remail",placeholder:"Receiver Email *",value:g,onChange:function(e){return j(e.target.value)}})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(U.Z,{type:"number",id:"phone",maxLength:10,error:!!ee,placeholder:"Receiver Phone *",value:d,onChange:function(e){ie(e.target.value)},onKeyPress:function(e){return(0,P.ZP)(e)}})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(U.Z,{id:"title",placeholder:"Subject *",value:D,onChange:function(e){return f(e.target.value)}})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(U.Z,{type:"Date",name:"Date",value:R,id:"exampleDate",placeholder:"Enter Date",disabled:!!a,min:(0,F.BZ)(),max:"9999-12-31",onChange:function(e){return w(e.target.value)}})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:12,sx:{py:"7px"},children:"Attachment"===y&&(0,k.jsx)(N.r,{notMulti:1,setfilesOndrop:H,resetDropzone:J,file:Q})}),"Voice"===y&&(0,k.jsx)(O.Z,(0,L.Z)({},e)),"Video"===y&&(0,k.jsx)(V.Z,{setRecVideo:s,recVideo:Q}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:12,children:(0,k.jsx)(U.Z,{type:"textarea",placeholder:"Description",rows:"3",id:"description",value:b,onChange:function(e){return C(e.target.value)}})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(U.Z,{type:"textarea",placeholder:"Signature",className:"input-label placeholder ",rows:"1",id:"signature",value:_,onChange:function(e){return A(e.target.value)}})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(E.Z,{label:"Deliver after my death",control:(0,k.jsx)(M.Z,{checked:a,onChange:function(){return W()}})})})]})]}),(0,k.jsxs)(I.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,k.jsx)(z.ZP,{varient:"outlined",label:h?"Cancel":"Reset",onClick:function(){return q()}}),(0,k.jsx)(z.ZP,{varient:"contained",label:h?"Update":"Add",onClick:T,disabled:te})]})]})})},W=t(66529),q=(0,d.$j)((function(e){var n,t=e.reducer,i=t.dataList,a=void 0===i?{}:i,o=t.sender,l=void 0===o?{}:o,s=null!==l&&void 0!==l&&null!==(n=l.getmesssages)&&void 0!==n&&n.length?l.getmesssages:[];return{dataList:a,listLoading:a.totalRecordsLoading,messages:s,loadingmsg:l.loadingmsg}}),(function(e){return{scheduleNewMessage:function(n){return e(W.tb.endpoints.scheduleNewMessage.initiate(n))},getScheduledMessages:function(n){return e(W.tb.endpoints.getScheduledMessages.initiate(n))},editMessage:function(n){return e(W.tb.endpoints.editMessage.initiate(n))},addData:function(n){return e(u.SD.endpoints.addData.initiate(n))},getData:function(n){return e(u.SD.endpoints.getData.initiate(n))}}}))((function(e){var n,t=l.createRef(),d=(0,l.useState)(""),u=(0,o.Z)(d,2),v=u[0],f=u[1],x=(0,l.useState)(""),m=(0,o.Z)(x,2),p=m[0],g=m[1],Z=(0,l.useState)(!1),j=(0,o.Z)(Z,2),S=j[0],C=j[1],b=(0,l.useState)(""),y=(0,o.Z)(b,2),D=y[0],w=y[1],L=(0,l.useState)(""),E=(0,o.Z)(L,2),M=E[0],I=E[1],V=(0,l.useState)(""),O=(0,o.Z)(V,2),z=O[0],N=O[1],F=(0,l.useState)(!1),U=(0,o.Z)(F,2),B=U[0],W=U[1],q=(0,l.useState)(null),T=(0,o.Z)(q,2),Y=T[0],K=T[1],$=(0,l.useState)(null),Q=(0,o.Z)($,2),H=Q[0],J=Q[1],G=(0,l.useState)([]),X=(0,o.Z)(G,2),ee=X[0],ne=X[1],te=(0,l.useState)(!1),ie=(0,o.Z)(te,2),ae=ie[0],oe=ie[1],le=(0,l.useState)(!1),se=(0,o.Z)(le,2),re=se[0],de=se[1],ue=(0,l.useState)(""),ce=(0,o.Z)(ue,2),he=ce[0],ve=ce[1],fe=(0,l.useState)(!1),xe=(0,o.Z)(fe,2),me=xe[0],pe=xe[1],ge=(0,l.useState)(null),Ze=(0,o.Z)(ge,2),je=Ze[0],Se=Ze[1],Ce=(0,l.useState)(!1),be=(0,o.Z)(Ce,2),ye=be[0],Pe=be[1],De=(0,l.useState)([]),we=(0,o.Z)(De,2),ke=we[0],Re=we[1],Ae=(0,l.useState)([]),Le=(0,o.Z)(Ae,2),Ee=Le[0],Me=Le[1],Ie=(0,l.useState)(""),Ve=(0,o.Z)(Ie,2),Oe=Ve[0],ze=Ve[1],Ne=(0,l.useState)(""),Fe=(0,o.Z)(Ne,2),Ue=Fe[0],Be=Fe[1],_e=(0,l.useState)(""),We=(0,o.Z)(_e,2),qe=We[0],Te=We[1],Ye=(0,l.useState)(""),Ke=(0,o.Z)(Ye,2),$e=Ke[0],Qe=Ke[1],He=(0,l.useState)([]),Je=(0,o.Z)(He,2),Ge=Je[0],Xe=Je[1],en=(0,l.useState)(!1),nn=(0,o.Z)(en,2),tn=nn[0],an=nn[1],on=(0,l.useState)(!0),ln=(0,o.Z)(on,2),sn=ln[0],rn=ln[1],dn=(0,l.useState)(!0),un=(0,o.Z)(dn,2),cn=un[0],hn=un[1],vn=(0,l.useState)(!0),fn=(0,o.Z)(vn,2),xn=fn[0],mn=fn[1];(0,l.useEffect)((function(){if(console.log($e),null!==$e&&void 0!==$e&&$e.value){var e=Ee.filter((function(e){return e._id===$e.value}));ze(null===e||void 0===e?void 0:e[0].name),Be(null===e||void 0===e?void 0:e[0].email),Te(null===e||void 0===e?void 0:e[0].primaryContact)}else 0===(null===$e||void 0===$e?void 0:$e.length)?(ze($e),Be(""),Te("")):ze($e)}),[$e]);(0,l.useEffect)((function(){e.getScheduledMessages(),e.getData()}),[]);var pn=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];de(e),n&&(Se(null),pe(!0))};(0,l.useEffect)((function(){if(e.dataList.data.length){var n=[];Me(e.dataList.data),e.dataList.data.forEach((function(e){var t={value:e._id,label:"".concat(e.name," - ").concat(e.relation),color:"#00B8D9",isFixed:!1};n.push(t)})),Xe(n)}}),[e.dataList.data]);var gn=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Pe(!0),n.prev=1,n.next=4,e.addData(t);case 4:ze(""),Te(""),Be(""),pn(!1,!0),n.next=13;break;case 10:return n.prev=10,n.t0=n.catch(1),n.abrupt("return",(0,k.jsx)(c.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Add Nominee Failed! Please contact admin",severity:"error"}));case 13:return n.prev=13,Pe(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(e){return n.apply(this,arguments)}}(),Zn=function(){W(!1),ze(""),Te(""),Be(""),ve(""),N(""),I(""),g(""),C(!1),w(""),Re([]),Qe(""),f(""),ne("")};return(0,k.jsxs)(s.Z,{children:[(0,k.jsx)(A.Z,{show:re,data:je,updateData:e.addData,addData:gn,isLoading:ye,handleSidebar:pn,getData:e.getData,dataParams:e.parsedFilter,addNew:me}),(0,k.jsxs)(r.ZP,{container:!0,spacing:1,sx:{p:2},children:[(0,k.jsx)(r.ZP,{item:!0,xs:12,sm:9,children:(0,k.jsx)(_,{oldMsg:H,handleReset:Zn,handleSubmit:function(){B?e.editMessage({_id:Y,desc:M,type:z,title:he,date:p,signature:D,rname:Oe,remail:Ue,rphone:qe,msg:("Voice"===z||"Video"===z||"Attachment"===z)&&v||ee.length&&ee||""}):e.scheduleNewMessage({desc:M,type:z,title:he,date:p,signature:D,rname:Oe,remail:Ue,rphone:qe,msg:("Voice"===z||"Video"===z||"Attachment"===z)&&v||ee.length&&ee||""}),Zn()},sameAsAbove:S,setdate:function(e){var n=new Date(e)>new Date||""===e;g(e),mn(n)},setfilesOndrop:function(e){oe(!1),ne(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))},resetDropzone:ae,setRecVideo:f,setdesc:I,setsignature:w,rphone:qe,setrphone:function(e){var n=P.Yd.test(e);Te(e),hn(n)},validPhone:cn,selecttype:t,edititem:B,settype:N,settitle:ve,nomineeOption2:Ge,remail:Ue,validEmail:sn,rname:Oe,setremail:function(e){var n=String(e).toLowerCase().match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);Be(e),rn(n)},desc:M,type:z,title:he,date:p,validDate:xn,signature:D,handleCheck:function(){!S&&g(""),C(!S)},userInput:$e,setuserInput:Qe,recVideo:v})}),(0,k.jsx)(h.Z,{}),(0,k.jsx)(r.ZP,{item:!0,xs:9,children:(0,k.jsx)(R,{heading:"Messages History",collapseItems:e.messages,colorOption:null===(n=e.messages)||void 0===n?void 0:n.colorOption,editItem:function(e){var n;J(e);var t=e.date,i=e.desc,a=e.rname,o=e.remail,l=e.rphone,s=e.signature,r=e.title,d=e.type,u=e._id,c=e.mediaDetails;W(!0),K(u),g(null===t||void 0===t?void 0:t.split("T")[0]),I(i),Re(ke),Be(o),ze(a),Te(l),w(s),ve(r),N(d),C(!t),f("Attachment"===d?c:null===(n=c[0])||void 0===n?void 0:n.media)},loadingmsg:e.loadingmsg,handleFilter:function(){console.log("Call filter function")},refreshData:{value:tn,callFunc:an}})})]})]})}))},82363:function(e,n,t){var i=t(29439),a=t(47313),o=t(61474),l=t(42357),s=t(38693),r=t(57441),d=t(16423),u=t(91536),c=t(71535),h=t(96900),v=t(56972),f=t(71363),x=t(40229),m=t(8247),p=t(46417),g=function(e){var n=e.stream,t=(0,a.useRef)(null);return(0,a.useEffect)((function(){t.current&&n&&(t.current.srcObject=n)}),[n]),n?(0,p.jsx)("video",{ref:t,width:"100%",height:"100%",autoPlay:!0,controls:!0}):null};n.Z=function(e){var n=e.setRecVideo,t=e.recVideo,Z=(0,a.useState)(!0),j=(0,i.Z)(Z,2),S=j[0],C=j[1],b=(0,a.useState)(!1),y=(0,i.Z)(b,2),P=y[0],D=y[1],w=(0,a.useState)(!1),k=(0,i.Z)(w,2),R=k[0],A=k[1];return(0,p.jsx)(c.ZP,{item:!0,xs:12,sm:8,children:(0,p.jsx)(l.ReactMediaRecorder,{screen:R,video:!R,audio:S,onStop:function(e,t){console.log(t),function(e){var n=new FileReader;return n.readAsDataURL(e),new Promise((function(e){n.onloadend=function(){e(n.result)}}))}(t).then((function(e){console.log(e),n(e)}))},render:function(e){var n=e.status,i=e.startRecording,a=e.pauseRecording,l=e.stopRecording,c=e.clearBlobUrl,Z=e.mediaBlobUrl,j=e.previewStream;return(0,p.jsxs)(h.Z,{variant:"outlined",children:[(0,p.jsxs)(v.Z,{children:[(0,p.jsxs)(f.Z,{textAlign:"center",children:["Status : ",n]}),P&&j&&(0,p.jsx)(g,{stream:j}),!P&&(Z||t)&&(0,p.jsx)("video",{src:Z||t,controls:!0,autoPlay:!1,width:"100%",height:"100%"}),(0,p.jsxs)(x.Z,{display:"flex",justifyContent:"space-evenly",sx:{mt:2},children:[S?(0,p.jsx)(s.Z,{fontSize:"large",onClick:function(){return C(!S)}}):(0,p.jsx)(r.Z,{fontSize:"large",onClick:function(){return C(!S)}}),(0,p.jsx)(d.Z,{fontSize:"large",onClick:function(e){A(!0)},color:"".concat(R&&"primary")}),(0,p.jsx)(u.Z,{fontSize:"large",onClick:function(e){A(!1)},color:"".concat(!R&&"primary")})]})]}),(0,p.jsxs)(m.Z,{sx:{justifyContent:"center"},children:[(0,p.jsx)(o.ZP,{varient:"contained",label:P?"Pause":"paused"===n?"Resume":"Start",onClick:function(){P?a():i(),D(!P)}}),(0,p.jsx)(o.ZP,{varient:"outlined",label:"Stop",onClick:function(){l(),D(!1)}}),(0,p.jsx)(o.ZP,{varient:"outlined",label:"Clear",onClick:function(){c(),D(!1)}})]})]})}})})}},6306:function(e,n,t){var i=t(64836);n.Z=void 0;var a=i(t(45045)),o=t(46417),l=(0,a.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=l}}]);