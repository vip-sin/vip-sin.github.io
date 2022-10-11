"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[575],{1087:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var i=t(92336),l=t(2884),a=t(24694),o=t(6306),r=t(46417);function s(e){var n=e.collapseID,t=(e.setcollapseID,e.collapseItem),s=e.formatme,d=e.toggleCollapse;return(0,r.jsxs)(i.Z,{sx:{my:.5},expanded:n===t.id,onChange:function(){return d(t.id)},children:[(0,r.jsx)(a.Z,{expandIcon:(0,r.jsx)(o.Z,{}),children:s(t.title)}),(0,r.jsx)(l.Z,{children:t.content})]})}},18825:function(e,n,t){t.d(n,{z:function(){return s}});var i=t(71535),l=t(40229),a=t(22449),o=(t(47313),t(94843)),r=t(46417),s=function(e){return(0,r.jsxs)(i.ZP,{container:!0,sx:{px:2.5,py:1},children:[(0,r.jsx)(i.ZP,{item:!0,xs:6,children:(0,r.jsx)(o.ll,{title:e.heading})}),(0,r.jsx)(i.ZP,{item:!0,xs:6,children:(0,r.jsx)(l.Z,{display:"flex",justifyContent:"flex-end",children:(0,r.jsx)(a.Z,{onChange:function(n){return e.search(n.target.value)},placeholder:"Search"})})})]})}},39995:function(e,n,t){t(47313);var i=t(51268),l=t.n(i),a=t(71535),o=t(60236),r=t(86282),s=t(46417);function d(e){return(0,s.jsx)(o.Z,{component:"img",image:e.item.img,alt:e.item.label})}n.Z=function(e){var n=[{label:"Random Name #1",description:"Probably !",img:r.oX},{label:"Random Name #2",description:"Hello World!",img:r.XL},{label:"Random Name #3",description:"Probably !",img:r.Ev},{label:"Random Name #4",description:"Hello World!",img:r.yc},{label:"Random Name #5",description:"Hello World!",img:r.Ye}];return(0,s.jsx)(a.ZP,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:(0,s.jsx)(l(),{stopAutoPlayOnHover:!0,navButtonsAlwaysInvisible:!0,swipe:!0,height:160,sx:{alignItems:"center",width:"250px"},animation:"fade",children:n.map((function(e,n){return(0,s.jsx)(d,{item:e},n)}))})})}},50850:function(e,n,t){t.d(n,{Id:function(){return x},Vh:function(){return g},zV:function(){return Z}});var i=t(1413),l=(t(47313),t(7081)),a=t(5448),o=t(88356),r=t(71535),s=t(71363),d=t(45959),u=t(39653),c=t(49461),v=t.n(c),m=t(54727),h=t(61474),f=t(46417),p=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0}],x=function(e){var n=e.modal,t=e.fname,r=e.ftype,s=(e.loading,e.addfield),d=e.messages,c=e.setfname,v=e.setftype,m=e.assetType,x=e.toggleModal,g=(e.selectCustomRef,e.clearCustomField);return(0,f.jsxs)(l.Z,{open:n,onClose:x,centered:!0,children:[(0,f.jsx)(a.Z,{children:"Add Custom Field"}),(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(h.gc,{disabled:void 0===m,options:p,onChange:function(e,n){return v(n?n.value:"")},renderInput:function(e){return(0,f.jsx)(u.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:"Field Type..."}))}}),(0,f.jsx)(u.Z,{name:"Email",margin:"normal",type:"email",disabled:""===m,id:"EmailMulti",value:t,placeholder:"Enter Field Name",onChange:function(e){return c(e.target.value)}}),(0,f.jsx)(h.AG,{label:null!==d&&void 0!==d&&d.resetButton?null===d||void 0===d?void 0:d.resetButton:"Cancel",disabled:void 0===m,handleClick:function(){g(),x()}}),(0,f.jsx)(h.k4,{label:null!==d&&void 0!==d&&d.submitButton?null===d||void 0===d?void 0:d.submitButton:"Add",disabled:""===t||""===r,handleClick:function(e){return s(e)}})]})]})},g=function(e,n,t,i,l,a,o){var d=[];(null===o||void 0===o?void 0:o.length)&&o.forEach((function(a,o){if(a.id){var u,c,v,h,p="";(null===a||void 0===a||null===(u=a.nominees)||void 0===u?void 0:u.length)&&a.nominees.forEach((function(n,t){var i=e.data.filter((function(e){return e._id===n.id}));i.length&&(t===a.nominees.length-1?p+=i[0].name:p="".concat(p+i[0].name,", "))}));var x=null,g=(0,f.jsxs)(r.ZP,{container:!0,columnSpacing:1,children:[null===a||void 0===a||null===(c=a.assetDetails)||void 0===c?void 0:c.map((function(e,t){if("Remarks"===e.key&&e.val)return x=t,"";if(""!==e.val){var i,l=e.val;if("File"===e.type){var a=e.val.split("#~#");l=(0,f.jsx)("u",{children:(0,f.jsx)("span",{style:{color:"blue",cursor:"pointer"},onClick:function(){return n(a[2])},children:a[0]})})}return(0,f.jsx)(r.ZP,{item:!0,sm:4,xs:12,children:(0,f.jsxs)(s.Z,{children:[e.key&&(null===(i=e.key.split("*"))||void 0===i?void 0:i[0])," :"," ",(0,f.jsx)("b",{children:"Date"===e.type?(0,m.p6)(l):l})]})},t+e.key)}return""})),(0,f.jsxs)(r.ZP,{item:!0,display:"flex",sm:2,xs:12,children:[(0,f.jsx)(s.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){return t(a)},children:"Edit"}),(0,f.jsx)(s.Z,{sx:{mx:1,color:"red",cursor:"pointer"},onClick:function(){i(a.id),l(!0)},children:"Delete"})]}),(0,f.jsx)(r.ZP,{item:!0,children:(0,f.jsxs)(s.Z,{children:["Nominees :",(0,f.jsx)("b",{children:p})]})}),x&&(0,f.jsx)(r.ZP,{item:!0,children:(0,f.jsxs)(s.Z,{children:[(null===a||void 0===a?void 0:a.assetDetails[x].key)&&(null===a||void 0===a||null===(v=a.assetDetails[x].key.split("*"))||void 0===v?void 0:v[0])," ",": ",(0,f.jsx)("b",{children:null===a||void 0===a||null===(h=a.assetDetails[x])||void 0===h?void 0:h.val})]})})]}),Z={id:o+1,trashIt:function(){i(a.id),l(!0)},editIt:function(){t(a)},title:a.assetType,content:g};console.log("ast",Z),d.push(Z)}})),a(null===d||void 0===d?void 0:d.reverse())},Z=function(e){var n=e.prviewmodal,t=e.setprviewmodal,i=e.loading,s=e.blobUrl,u=e.reset;return(0,f.jsx)(v(),{children:(0,f.jsxs)(l.Z,{open:n,onClose:function(){t(!n),u()},fullWidth:!0,children:[(0,f.jsx)(a.Z,{children:(0,f.jsx)(r.ZP,{container:!0,spacing:2,children:(0,f.jsx)(r.ZP,{children:"Preview Attachment"})})}),(0,f.jsxs)(o.Z,{children:[i&&(0,f.jsx)(d.Z,{}),!i&&(0,f.jsx)("div",{children:(0,f.jsx)("iframe",{style:{height:"auto",width:"100%"},title:"Aaq",src:s})})]})]})})}},10226:function(e,n,t){t.d(n,{Z:function(){return E}});var i=t(1413),l=t(93433),a=t(29439),o=t(47313),r=t(40229),s=t(82500),d=t(71535),u=t(71363),c=t(34940),v=t(89870),m=t(62463),h=t(39653),f=t(8586),p=t(46095),x=t(46417),g=(0,p.Z)((0,x.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Z=t(71207),j=t(54727),C=t(61474),y=t(85120),b=t(12613),D=t(86282),S=t(7081),w=t(5448),k=t(88356);function A(e){var n=e.modal,t=e.toggleModal,l=e.fname,a=e.setfname,o=e.ftype,r=e.setftype,s=e.editID,d=e.clearCustomField,u=e.handleSecrets,c=e.secrets;return(0,x.jsxs)(S.Z,{open:n,fullWidth:!0,maxWidth:"xs",onClose:t,children:[(0,x.jsx)(w.Z,{children:"Add a secret question"}),(0,x.jsxs)(k.Z,{children:[(0,x.jsx)(C.gc,{name:"relation",options:function(){var e=D.DD.filter((function(e){var n,t,i;return e.value!==(null===c||void 0===c||null===(n=c[0])||void 0===n?void 0:n.question)&&e.value!==(null===c||void 0===c||null===(t=c[1])||void 0===t?void 0:t.question)&&e.value!==(null===c||void 0===c||null===(i=c[2])||void 0===i?void 0:i.question)}));return console.log("temp",e,c),e}(),onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;a(n)}(n)},value:(0,D.NA)(D.DD,l),renderInput:function(e){return(0,x.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:" Secret Question"}))}}),(0,x.jsx)(h.Z,{type:"text",name:"Answer",margin:"normal",size:"small",fullWidth:!0,value:o,placeholder:"Answer",onChange:function(e){r(e.target.value)}}),(0,x.jsxs)(m.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"start"},children:[(0,x.jsx)(C.ZP,{varient:"outlined",label:"Cancel",onClick:function(e){d()}}),(0,x.jsx)(C.ZP,{varient:"contained",label:s?"Update":"Add",disabled:!(null!==l&&void 0!==l&&l.length)||""===o.trim(),onClick:u})]})]})]})}var N=t(75969),P=t(95716),I=JSON.parse(sessionStorage.getItem("dropdowns")).nomineeRelation;function E(e){var n=(0,o.useState)(),t=(0,a.Z)(n,2),p=t[0],S=t[1],w=(0,o.useState)(""),k=(0,a.Z)(w,2),E=k[0],R=k[1],L=(0,o.useState)(""),z=(0,a.Z)(L,2),V=z[0],F=z[1],O=(0,o.useState)(""),M=(0,a.Z)(O,2),W=M[0],T=M[1],U=(0,o.useState)(""),q=(0,a.Z)(U,2),B=q[0],_=q[1],H=(0,o.useState)(!0),J=(0,a.Z)(H,2),Q=J[0],Y=J[1],$=(0,o.useState)(""),G=(0,a.Z)($,2),K=G[0],X=G[1],ee=(0,o.useState)(""),ne=(0,a.Z)(ee,2),te=ne[0],ie=ne[1],le=(0,o.useState)(""),ae=(0,a.Z)(le,2),oe=ae[0],re=ae[1],se=(0,o.useState)(!1),de=(0,a.Z)(se,2),ue=de[0],ce=de[1],ve=(0,o.useState)(""),me=(0,a.Z)(ve,2),he=me[0],fe=me[1],pe=(0,o.useState)(""),xe=(0,a.Z)(pe,2),ge=xe[0],Ze=xe[1],je=(0,o.useState)(""),Ce=(0,a.Z)(je,2),ye=Ce[0],be=Ce[1],De=(0,o.useState)(""),Se=(0,a.Z)(De,2),we=Se[0],ke=Se[1],Ae=(0,o.useState)(""),Ne=(0,a.Z)(Ae,2),Pe=Ne[0],Ie=Ne[1],Ee=(0,o.useState)(""),Re=(0,a.Z)(Ee,2),Le=Re[0],ze=Re[1],Ve=(0,o.useState)(""),Fe=(0,a.Z)(Ve,2),Oe=Fe[0],Me=Fe[1],We=(0,o.useState)(""),Te=(0,a.Z)(We,2),Ue=Te[0],qe=Te[1],Be=(0,o.useState)([]),_e=(0,a.Z)(Be,2),He=_e[0],Je=_e[1],Qe=(0,o.useState)(!1),Ye=(0,a.Z)(Qe,2),$e=Ye[0],Ge=Ye[1],Ke=(0,o.useState)(""),Xe=(0,a.Z)(Ke,2),en=Xe[0],nn=Xe[1],tn=function(){Me(""),qe(""),Ge(!$e)},ln=function(){$e&&tn(),Ge(!$e)};(0,o.useEffect)((function(){if(e.data){var n=e.data,t=n.id,i=n.name,a=n.relation,o=n.relation1,r=n.address,s=n.email,d=n.primaryContact,u=n.secondaryContact,c=e.data.secrets;mn(),ie(t),re(i),S(a),"Others"===a&&R(o),T(r),F(s),_(d),X(u),(null===c||void 0===c?void 0:c.length)&&Je((0,l.Z)(c))}else(null===e.data||ue)&&(vn(),mn());ce(!1)}),[e.data]);var an=function(){return ze("Enter Valid Name")},on=function(){return be("Enter Valid Email")},rn=function(){return ke("Enter Valid Contact No.")},sn=function(){return Ze("Enter Valid Relation")},dn=function(){return fe("Enter Valid Relation")},un=function(e){var n,t=e.target.name,i=null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value;switch(t){case"name":re(i),null!==i&&void 0!==i&&i.length&&i.trim()?ze(""):an();break;case"email":F(i);var l=i.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);i&&l&&i.trim()?be(""):on();break;case"address":T(i);break;case"phone":_(i),Q&&X(i),null!==i&&void 0!==i&&i.length&&10===i.length&&i.trim()&&j.Yd.test(i)?ke(""):rn();break;case"phoneC":X(i),10===i.length&&i.trim()&&j.Yd.test(i)?Ie(""):Ie("Enter Valid whatsapp No."),(null===i||void 0===i||!i.length)&&Ie("");break;case"relation":null!==i&&void 0!==i&&i.length&&i.trim()?Ze(""):sn();break;case"relation1":R(i),null!==i&&void 0!==i&&i.length&&i.trim()?fe(""):dn()}},cn=function(){console.log("das");var n=((null===oe||void 0===oe||!oe.length)&&an(),(null===V||void 0===V||!V.length)&&on(),(null===B||void 0===B||!B.length)&&rn(),(null===p||void 0===p||!p.length)&&sn(),"Others"===p&&(null===E||void 0===E||!E.length)&&dn(),"Others"!==p&&fe(""),Le||!(null!==oe&&void 0!==oe&&oe.length)||ge||!(null!==p&&void 0!==p&&p.length)||he||"Others"===p&&!(null!==E&&void 0!==E&&E.length)||ye||!(null!==V&&void 0!==V&&V.length)||we||!(null!==B&&void 0!==B&&B.length)||Pe);if(n&&b.A9,n)console.log(n,"inValid");else if(e.isLoading&&(b.A9,e.data),!e.isLoading){var t={relation:null===p||void 0===p?void 0:p.trim(),relation1:null===E||void 0===E?void 0:E.trim(),email:null===V||void 0===V?void 0:V.trim(),address:null===W||void 0===W?void 0:W.trim(),contact1:null===B||void 0===B?void 0:B.trim(),contact2:null===K||void 0===K?void 0:K.trim(),id:null===te||void 0===te?void 0:te.trim(),name:null===oe||void 0===oe?void 0:oe.trim(),secrets:He};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(ce(!0),e.addData(t),vn(),mn())}},vn=function(){re(""),Je([]),S(""),R(""),F(""),T(""),_(""),X("")},mn=function(){ze(""),ke(""),Ie(""),be(""),fe("")},hn=e.handleSidebar,fn=e.show,pn=e.data;return(0,x.jsx)(s.Z,{anchor:"right",open:fn,children:(0,x.jsxs)(r.Z,{sx:{mt:10,width:350,px:2},component:"form",children:[(0,x.jsxs)(d.ZP,{item:!0,sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,x.jsx)(u.Z,{children:null!==pn?"UPDATE NOMINEE":"ADD NEW NOMINEE"}),(0,x.jsx)(f.Z,{size:20,onClick:function(){hn(!1,!0),vn(),mn()}})]}),(0,x.jsx)(c.Z,{}),(0,x.jsx)(h.Z,{name:"name",value:oe,margin:"dense",invalid:!!Le,placeholder:"Name*",onChange:un,id:"data-name"}),(0,x.jsx)(d.ZP,{item:!0,sx:{mt:1},children:(0,x.jsx)(C.gc,{id:"relationID",name:"relation",onChange:function(e,n){return function(e){var n=null===e||void 0===e?void 0:e.value;S(n),"Others"!==n&&(fe(""),R("")),null!==n&&void 0!==n&&n.length&&n.trim()&&Ze("")}(n)},options:I,value:(0,D.NA)(I,p),renderInput:function(e){return(0,x.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:"Relation*"}))}})}),"Others"===p&&(0,x.jsx)(h.Z,{margin:"dense",name:"relation1",value:E,invalid:!!he,placeholder:"Relation Name*",onChange:un,id:"data-Relation",style:{borderColor:he?"red":""}}),(0,x.jsx)(h.Z,{type:"email",name:"email",margin:"dense",value:V,invalid:!!ye,placeholder:"Email*",onChange:un,id:"data-email"}),(0,x.jsx)(h.Z,{type:"tel",maxLength:10,margin:"dense",value:B,invalid:!!we,name:"phone",onChange:un,onKeyPress:function(e){return(0,j.ZP)(e)},id:"data-price1",placeholder:"Contact No.*"}),(0,x.jsx)(N.Z,{sx:{margin:0},control:(0,x.jsx)(P.Z,{sx:{padding:0},color:"secondary",name:"whatsapp",size:"small",checked:null!==pn?K===B:Q,onChange:function(){return X(Q?"":B),void Y(!Q)}}),label:(0,x.jsx)(u.Z,{fontSize:"15px",children:"Whatsapp same as Contact"})}),(0,x.jsx)(h.Z,{type:"tel",maxLength:10,margin:"dense",value:B,name:"phoneC",invalid:!!Pe,disabled:null!==pn?K===B:Q,onChange:un,onKeyPress:function(e){return(0,j.ZP)(e)},id:"data-price",placeholder:"WhatsApp"}),(0,x.jsx)(h.Z,{type:"textarea",value:W,margin:"dense",name:"address",placeholder:"Address",onChange:function(e){return un(e)},id:"data-Address",multiline:!0}),(0,x.jsx)("div",{children:He.map((function(e){return(0,x.jsx)(r.Z,{children:(0,x.jsxs)(u.Z,{children:["".concat(e.id," ").concat(e.question)," ",(0,x.jsx)(g,{size:"10",onClick:function(){return function(e){var n,t=(0,l.Z)(He);t=t.filter((function(n){return n.id!==e})),null!==(n=t)&&void 0!==n&&n.length&&t.forEach((function(e,n){e.id=n+1})),Je((0,l.Z)(t))}(e.id)}}),(0,x.jsx)(Z.Z,{size:"10",onClick:function(){return function(e){nn(e),Ge(!0),He.forEach((function(n){n.id===e&&(qe(n.answer),Me(n.question))}))}(e.id)}})]})},e.id)}))}),(null===He||void 0===He?void 0:He.length)<3&&(0,x.jsx)(v.Z,{disabled:3===(null===He||void 0===He?void 0:He.length),onClick:ln,children:"Add Secret Questions"}),(0,x.jsxs)(m.Z,{spacing:3,direction:"row",sx:{mt:3,justifyContent:"end"},children:[(0,x.jsx)(C.ZP,{varient:"outlined",label:null!==pn?"Cancel":"Reset",onClick:function(){null!==pn&&hn(!1,!0),vn(),mn()}}),(0,x.jsx)(C.ZP,{onClick:function(){return cn()},disabled:!(null!==He&&void 0!==He&&He.length),label:null!==pn?e.isLoading?(0,x.jsx)(y.Z,{}):"Update":e.isLoading?(0,x.jsx)(y.Z,{}):"Add"})]}),(0,x.jsx)(A,{modal:$e,secrets:He,toggleModal:ln,fname:Oe,setfname:Me,ftype:Ue,setftype:qe,editID:en,clearCustomField:tn,handleSecrets:function(){if(en){var e=(0,l.Z)(He),n=e.findIndex((function(e){return e.id===en}));e[n].question=Oe,e[n].answer=Ue,Je((0,l.Z)(e)),nn("")}else{var t=(0,l.Z)(He);t.push({id:(null===t||void 0===t?void 0:t.length)+1,question:Oe,answer:Ue}),Je((0,l.Z)(t))}Ge(!1),Me(""),qe("")}})]})})}},13798:function(e,n,t){t.d(n,{GR:function(){return m},UB:function(){return v}});var i=t(29439),l=t(47313),a=t(96900),o=t(34940),r=t(56972),s=t(12613),d=t(1087),u=t(18825),c=t(46417);n.ZP=function(e){var n,t,v=(0,l.useState)(""),m=(0,i.Z)(v,2),h=m[0],f=m[1],p=null===(n=JSON.parse(sessionStorage.getItem("logInUserData")))||void 0===n?void 0:n.assets,x=null===(t=JSON.parse(sessionStorage.getItem("logInUserData")))||void 0===t?void 0:t.liabilities,g=(0,l.useState)([]),Z=(0,i.Z)(g,2),j=Z[0],C=Z[1],y=(0,l.useState)(),b=(0,i.Z)(y,2),D=b[0],S=b[1],w=e.collapseItems,k=e.colorOption,A=function(e){return null!==k&&void 0!==k&&k[e]?k[e]:e},N=function(e){f(h!==e?e:"")},P=(null===D||void 0===D?void 0:D.length)>0?j:w,I=P.length>0?P.map((function(e){return(0,c.jsx)(l.Fragment,{children:(0,c.jsx)(d.Z,{collapseID:h,setcollapseID:f,collapseItem:e,formatme:A,toggleCollapse:N})},e.id)})):e.isLoading?(0,c.jsx)(s.$j,{}):(0,c.jsx)("span",{style:{fontSize:"14px",marginTop:"-10px"},children:"No Data Found"});return(0,c.jsxs)(a.Z,{children:[(0,c.jsx)(u.z,{heading:e.heading,search:function(n){S(n);var t=w.filter((function(t){var i,l,a=(e.assetShow?null===(i=x[t.id-1])||void 0===i?void 0:i.liabilityDetails:null===(l=p[t.id-1])||void 0===l?void 0:l.assetDetails).filter((function(e){var t=e.val.toLowerCase().startsWith(n.toLowerCase()),i=e.val.toLowerCase().includes(n.toLowerCase());return!(!t&&!i)})),o=t.title.toLowerCase().startsWith(n.toLowerCase()),r=t.title.toLowerCase().includes(n.toLowerCase());return!!(o||r||a.length>0)}));C(t)}}),(0,c.jsx)(o.Z,{}),(0,c.jsx)(r.Z,{children:I})]})};var v=["Lendor Details","Card Details *","Account Details","EMI Details *","Loan Details*","Scheme Details","Payments Details *","Amount","Amount *","Liability Name","Scheme Details *","Remarks"],m=["Bank Name","Debtor Name","Details","Currency Details","Depositor","Depositor *","Account Details","Account Details *","Bank Name *","Debtor Name *","Investment Firm *","Policy Number *","Amount *","Amount / Quantity","Policy Number","Property Type","Property Area","Retirals Details *","Amount","Remarks"]},6306:function(e,n,t){var i=t(64836);n.Z=void 0;var l=i(t(45045)),a=t(46417),o=(0,l.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=o},8586:function(e,n,t){var i=t(46095),l=t(46417);n.Z=(0,i.Z)((0,l.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},71207:function(e,n,t){var i=t(46095),l=t(46417);n.Z=(0,i.Z)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},95162:function(e,n,t){var i;t.d(n,{Z:function(){return c}});var l=new Uint8Array(16);function a(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(l)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var r=function(e){return"string"===typeof e&&o.test(e)},s=[],d=0;d<256;++d)s.push((d+256).toString(16).substr(1));var u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(s[e[n+0]]+s[e[n+1]]+s[e[n+2]]+s[e[n+3]]+"-"+s[e[n+4]]+s[e[n+5]]+"-"+s[e[n+6]]+s[e[n+7]]+"-"+s[e[n+8]]+s[e[n+9]]+"-"+s[e[n+10]]+s[e[n+11]]+s[e[n+12]]+s[e[n+13]]+s[e[n+14]]+s[e[n+15]]).toLowerCase();if(!r(t))throw TypeError("Stringified UUID is invalid");return t};var c=function(e,n,t){var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){t=t||0;for(var l=0;l<16;++l)n[t+l]=i[l];return n}return u(i)}}}]);