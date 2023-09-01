"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[477],{32767:function(e,n,t){t.d(n,{Z:function(){return k}});var a=t(1413),i=t(93433),r=t(74165),s=t(15861),l=t(29439),o=t(47313),c=t(71003),d=t(57775),u=t(51057),h=t(19641),x=t(57227),v=t(47605),m=t(19536),p=t(35898),Z=t(29917),j=t(17592),f=t(67426),g=(t(63709),t(71147),t(46417)),b=(0,j.ZP)(f.Z)((function(e){var n=e.theme;return{width:28,height:16,padding:0,display:"flex","&:active":{"& .MuiSwitch-thumb":{width:15},"& .MuiSwitch-switchBase.Mui-checked":{transform:"translateX(9px)"}},"& .MuiSwitch-switchBase":{padding:2,"&.Mui-checked":{transform:"translateX(12px)",color:"#fff","& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===n.palette.mode?"#177ddc":"#1890ff"}}},"& .MuiSwitch-thumb":{boxShadow:"0 2px 4px 0 rgb(0 35 11 / 20%)",width:12,height:12,borderRadius:6,transition:n.transitions.create(["width"],{duration:200})},"& .MuiSwitch-track":{borderRadius:8,opacity:1,backgroundColor:"dark"===n.palette.mode?"rgba(255,255,255,.35)":"rgba(0,0,0,.25)",boxSizing:"border-box"}}}));function y(e){var n=e.tier,t=e.handleChange;return(0,g.jsxs)(p.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,g.jsx)(v.Z,{color:"text.primary",children:"Monthly"}),(0,g.jsx)(b,{checked:n.SelectedPrice!==n.price,onChange:t,inputProps:{"aria-label":"ant design"}}),(0,g.jsx)(v.Z,{color:n.SelectedPrice===n.annualPrice?"text.secondary":"text.primary",children:"Yearly"})]})}var S=t(20938),P=t(79428),C=t(80571).g.injectEndpoints({endpoints:function(e){return{createOrder:e.mutation({query:function(e){return{url:"backendapi/payments/razorpay",method:"POST"}},invalidatesTags:["Payments"],onQueryStarted:function(e,n){return(0,s.Z)((0,r.Z)().mark((function e(){var t,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.dispatch,a=n.queryFulfilled,e.prev=1,e.next=4,a;case 4:i=e.sent,t({type:"POST_CREATEORDER_DATA",data:i.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("POST_CREATEORDER_DATA",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}})}}}).useCreateOrderMutation,w=function(e){return new Promise((function(n){var t=document.createElement("script");t.src=e,document.body.appendChild(t),t.onload=function(){n(!0)},t.onerror=function(){n(!1)}}))},k=function(e){var n=e.toggleLoginModal,t=e.plan,j=e.setPlan,f=e.defaultTiers,b=e.orderDetails,k=C(),z=(0,l.Z)(k,1)[0],M=sessionStorage.getItem("authtoken"),D=o.useState(f),F=(0,l.Z)(D,2),I=F[0],A=F[1],O=o.useState(!1),_=(0,l.Z)(O,2),Q=(_[0],_[1],"www.dev.lastarzi.com"===document.domain||"localhost"===document.domain),E=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,a,i,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://checkout.razorpay.com/v1/checkout.js");case 2:if(t=e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:if(a=n.amount,i=n.id,s=n.currency,t){e.next=9;break}return e.abrupt("return",alert("Loading Failed"));case 9:l={key:Q?"rzp_test_cgSPFXNnKZx14s":"unavailable",amount:null===a||void 0===a?void 0:a.toString(),currency:s,name:"LastArzi",description:"Pay Dev",image:P.TR,order_id:i,callback_url:"https://eneqd3r9zrjok.x.pipedream.net/",handler:function(e){alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature)},prefill:{name:"Vipin Kumar",email:"vksforum@gmail.com",contact:"9458706129"},theme:{backGroundColor:"#20756D"},notes:{address:"LastArzi Corporate Office"}},new window.Razorpay(l).open();case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{z()}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.useEffect((function(){b&&E(b)}),[b]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(x.Z,{children:[!t&&(0,g.jsx)(v.Z,{component:"h2",variant:"h4",textAlign:"center",sx:{mt:"3rem"},children:"Our Plans"}),(0,g.jsxs)(h.ZP,{container:!0,spacing:4,sx:{mt:"2rem"},justifyContent:"center",children:[I.map((function(e){return(0,g.jsx)(h.ZP,{item:!0,xs:12,sm:4,sx:(0,a.Z)({},M&&"Basic"===e.title&&{display:"none"}),children:(0,g.jsxs)(d.Z,{raised:!0,style:{boxShadow:" 0px 4px 25px 0px rgb(0 0 0 / 10%)",minHeight:"360px"},children:[(0,g.jsx)(S.ll,{align:"center",title:e.title}),(0,g.jsx)(m.Z,{}),(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(p.Z,{direction:"column",spacing:1,sx:{mb:3},alignItems:"center",children:"0"!==e.annualPrice?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(v.Z,{variant:"h3",color:e.SelectedPrice===e.annualPrice?"text.secondary":"text.primary",children:["\u20b9",e.SelectedPrice===e.price?e.price:e.annualPrice]}),(0,g.jsx)(y,{tier:e,handleChange:function(){return function(e){var n=(0,i.Z)(I);n.forEach((function(n){n.title===e.title&&(n.SelectedPrice===n.price?n.SelectedPrice=n.annualPrice:n.SelectedPrice=n.price)})),A(n)}(e)}})]}):(0,g.jsxs)(v.Z,{variant:"h3",children:["\u20b9",e.price]})}),(0,g.jsx)("ul",{children:e.description.map((function(e){return(0,g.jsx)(v.Z,{component:"li",align:"left",children:e},e)}))})]}),(0,g.jsx)(Z.Z,{sx:{justifyContent:"center"},children:(0,g.jsx)(c.Z,{onClick:function(){return function(e){n("SignUp"),j(e)}(e)},variant:e.buttonVariant,children:e.buttonText})})]})},e.title)})),(0,g.jsx)(c.Z,{onClick:function(){T()},children:"RazorPay"})]})]})})}},89477:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ze}});var a=t(29439),i=t(1413),r=t(45987),s=t(47313),l=t(85028),o=t(67176),c=t(47605),d=t(9506),u=t(93433),h=t(19641),x=t(57204),v=t(5178),m=t(69746),p=t(69173),Z=t(49969),j=t(20938),f=t(61474),g=t(46417),b=[{value:"Male",label:"Male",isFixed:!1},{value:"Female",label:"Female",isFixed:!0},{value:"Others",label:"Others",isFixed:!1}],y=[{value:"Mr",label:"Mr",isFixed:!1},{value:"Mx",label:"Mx",isFixed:!0},{value:"Ms",label:"Ms",isFixed:!0}],S=[{value:"3",label:"3 Seconds",isFixed:!1},{value:"5",label:"5 Seconds",isFixed:!0},{value:"10",label:"10 Seconds",isFixed:!0}],P=[{value:"1",label:"1 Month Inactivity",isFixed:!1},{value:"2",label:"2 Months Inactivity",isFixed:!0},{value:"3",label:"3 Months Inactivity",isFixed:!0}],C=[{value:"light",label:"Light",isFixed:!0},{value:"dark",label:"Dark",isFixed:!1}],w=function(e){var n=e.salutation,t=e.setsalutation,a=e.gender,r=e.setGender,s=e.dob,l=e.handledob,o=e.firstname,c=e.setfirstname,d=e.middlename,u=e.setmiddlename,x=e.lastname,v=e.setlastname;return(0,g.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(f.gc,{options:y,id:"Salutation",name:"Salutation",value:{value:n,label:n||"Salutation",isFixed:!1},onChange:function(e,n){return t(n&&n.value?n.value:null)},isDisabled:!1,renderInput:function(e){return(0,g.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{label:"Salutation"}))}})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(f.gc,{options:b,id:"gender",name:"gender",value:{value:a,label:a||"Gender",isFixed:!1},onChange:function(e,n){return r(n&&n.value?n.value:null)},isDisabled:!1,renderInput:function(e){return(0,g.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{label:"Gender"}))}})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"Date",name:"dob",label:"Date of Birth",InputLabelProps:{shrink:!0},value:s,onChange:function(e){return l(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"text",label:"First Name",required:!0,value:o,onChange:function(e){return c(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{label:"Middle Name",type:"text",value:d,onChange:function(e){return u(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"text",label:"Last Name",required:!0,value:x,onChange:function(e){return v(e.target.value)},readOnly:!1})})]})},k=function(e){var n=e.mobile,t=e.setmobile,a=e.secondarymobile,i=e.setsecondarymobile,r=e.emailPrimary,s=e.secondaryemail,l=e.setsecondaryemail;return(0,g.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"tel",label:"Primary Contact",required:!0,value:n,onChange:function(e){return t(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"tel",label:"Secondary Contact",required:!0,value:a,onChange:function(e){return i(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"email",label:"Primary Email",required:!0,value:r,readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"email",label:"Secondary Email",required:!0,value:s,onChange:function(e){return l(e.target.value)},readOnly:!1})})]})},z=function(e){e.setlastname;var n=e.address1,t=e.setaddress1,a=e.address2,i=e.setaddress2,r=e.city,s=e.setcity,l=e.state,o=e.setstate,c=e.country,d=e.setcountry,u=e.postalCode,x=e.setpostalCode;return(0,g.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{id:"address1",label:"House No.",value:n,onChange:function(e){return t(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{id:"address1",label:"Address Line 1",value:a,onChange:function(e){return i(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{id:"city",label:"City",value:r,onChange:function(e){return s(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{id:"State",label:"State",value:l,onChange:function(e){return o(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{id:"Country",label:"Country",value:c,onChange:function(e){return d(e.target.value)},readOnly:!1})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(j.nv,{type:"tel",id:"postcode",label:"Postcode",value:u,onChange:function(e){return x(e.target.value)},readOnly:!1})})]})},M=function(e){var n=e.theme,t=e.settheme,a=e.deadtime,r=e.deadtimeChange,s=e.pwdtime,l=e.pwdtimeChange,o=e.options,c=e.checkedItems,d=e.handleCheckboxChange;return(0,g.jsxs)(h.ZP,{container:!0,xs:12,md:6,spacing:2,children:[(0,g.jsx)(h.ZP,{item:!0,xs:12,children:(0,g.jsx)(f.gc,{options:C,id:"theme",name:"theme",value:{value:n,label:null!==n&&void 0!==n?n:"Theme (default)",isFixed:!1},onChange:function(e,n){var a;return t(null!==(a=null===n||void 0===n?void 0:n.value)&&void 0!==a?a:null)},isDisabled:!1,renderInput:function(e){return(0,g.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{label:"Theme (default)"}))}})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,children:(0,g.jsx)(f.gc,{value:{value:s,label:s?S.filter((function(e){return e.value===s})):"Password Visibility",isFixed:!1},id:"pwdVisibility",name:"pwdVisibility",options:S,isDisabled:!1,onChange:function(e,n){var t;return l(null!==(t=null===n||void 0===n?void 0:n.value)&&void 0!==t?t:null)},renderInput:function(e){return(0,g.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{label:"Password Visibility"}))}})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,children:(0,g.jsx)(f.gc,{options:P,id:"deathTime",name:"deathTime",value:{value:a,label:null!==a&&void 0!==a?a:"Presumed death duration",isFixed:!1},onChange:function(e,n){var t;return r(null!==(t=null===n||void 0===n?void 0:n.value)&&void 0!==t?t:null)},isDisabled:!1,renderInput:function(e){return(0,g.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{label:"Presumed death duration"}))}})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,children:(0,g.jsxs)(x.Z,{children:[(0,g.jsx)(v.Z,{children:"Communication Options"}),(0,g.jsx)(m.Z,{children:o.map((function(e){return(0,g.jsx)(p.Z,{control:(0,g.jsx)(Z.Z,{checked:c.includes(e.value),onChange:d,value:e.value}),label:e.label,labelPlacement:"end"},e.value)}))})]})})]})},D=t(31881),F=t.n(D),I=t(24813),A=t(35898),O=t(54285),_=t(88989),Q=t(54750),E=(0,Q.Z)((0,g.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts"),T=(0,Q.Z)([(0,g.jsx)("path",{d:"M1 11v10h5v-6h4v6h5V11L8 6z"},"0"),(0,g.jsx)("path",{d:"M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"},"1")],"HomeWork"),V=(0,Q.Z)((0,g.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");function L(e){var n=e.children,t=e.value,a=e.index;return(0,g.jsx)("div",{role:"tabpanel",hidden:t!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a),style:{width:"100%"},children:t===a&&(0,g.jsx)(d.Z,{sx:{p:3},children:n})})}function H(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var N=JSON.parse(sessionStorage.getItem("logInUserData"));function R(){var e=s.useState(0),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,I.Z)("(max-width: 768px)"),h="Mr"===(null===N||void 0===N?void 0:N.salutation)?"male":"Ms"===(null===N||void 0===N?void 0:N.salutation)?"female":"Mx"===(null===N||void 0===N?void 0:N.salutation)?"others":"",x=(0,O.Z)().persist,v=(0,s.useState)(h),m=(0,a.Z)(v,2),p=m[0],Z=m[1],j=(0,s.useState)("light"),b=(0,a.Z)(j,2),y=b[0],S=b[1],P=(null!==N&&void 0!==N?N:"").address,C=void 0===P?"":P,D=(0,s.useState)("Save Changes"),Q=(0,a.Z)(D,2),R=Q[0],B=Q[1],q=(0,s.useState)(""),U=(0,a.Z)(q,2),G=U[0],J=U[1],W=(0,s.useState)(""),K=(0,a.Z)(W,2),X=K[0],Y=K[1],$=(0,s.useState)(""),ee=(0,a.Z)($,2),ne=ee[0],te=ee[1],ae=(0,s.useState)(""),ie=(0,a.Z)(ae,2),re=ie[0],se=ie[1],le=(0,s.useState)(""),oe=(0,a.Z)(le,2),ce=oe[0],de=oe[1],ue=(0,s.useState)(""),he=(0,a.Z)(ue,2),xe=he[0],ve=he[1],me=(0,s.useState)(""),pe=(0,a.Z)(me,2),Ze=pe[0],je=pe[1],fe=(0,s.useState)(""),ge=(0,a.Z)(fe,2),be=ge[0],ye=ge[1],Se=(0,s.useState)(""),Pe=(0,a.Z)(Se,2),Ce=Pe[0],we=Pe[1],ke=(0,s.useState)("1"),ze=(0,a.Z)(ke,2),Me=ze[0],De=ze[1],Fe=(0,s.useState)(null===C||void 0===C?void 0:C.postalCode),Ie=(0,a.Z)(Fe,2),Ae=Ie[0],Oe=Ie[1],_e=(0,s.useState)(null===C||void 0===C?void 0:C.address1),Qe=(0,a.Z)(_e,2),Ee=Qe[0],Te=Qe[1],Ve=(0,s.useState)(null===C||void 0===C?void 0:C.address2),Le=(0,a.Z)(Ve,2),He=Le[0],Ne=Le[1],Re=(0,s.useState)(null===C||void 0===C?void 0:C.city),Be=(0,a.Z)(Re,2),qe=Be[0],Ue=Be[1],Ge=(0,s.useState)(null===C||void 0===C?void 0:C.state),Je=(0,a.Z)(Ge,2),We=Je[0],Ke=Je[1],Xe=(0,s.useState)(null===C||void 0===C?void 0:C.country),Ye=(0,a.Z)(Xe,2),$e=Ye[0],en=Ye[1],nn=(0,s.useState)(""),tn=(0,a.Z)(nn,2),an=tn[0],rn=tn[1],sn=(0,s.useState)([]),ln=(0,a.Z)(sn,2),on=ln[0],cn=ln[1];(0,s.useEffect)((function(){var e,n=null!==N&&void 0!==N&&null!==(e=N.name)&&void 0!==e&&e.length?null===N||void 0===N?void 0:N.name.split(" "):null===N||void 0===N?void 0:N.username.split(" "),t="",a="",i="";if(1===(null===n||void 0===n?void 0:n.length)?t=n[0]:2===(null===n||void 0===n?void 0:n.length)&&(t=n[0],i=n[1]),3===(null===n||void 0===n?void 0:n.length)&&(t=n[0],i=n[2],a=n[1]),(null===n||void 0===n?void 0:n.length)>3){t=n[0];for(var r=1;r<(null===n||void 0===n?void 0:n.length)-1;r+=1)a="".concat(a," ").concat(n[r]);i=n[2],a=n[(null===n||void 0===n?void 0:n.length)-1]}ve(t),je(a),ye(i),se(null===N||void 0===N?void 0:N.email),Y(null===N||void 0===N?void 0:N.mobile)}),[]);return(0,g.jsxs)(d.Z,{children:[(0,g.jsxs)(d.Z,{sx:{bgcolor:"background.paper",display:"flex"},children:[(0,g.jsxs)(l.Z,{orientation:"vertical",value:t,onChange:function(e,n){r(n)},sx:{borderRight:1,borderColor:"divider",minWidth:c?100:150},children:[(0,g.jsx)(o.Z,(0,i.Z)((0,i.Z)({},c?{icon:(0,g.jsx)(_.Z,{})}:{label:"Basic Info"}),H(0))),(0,g.jsx)(o.Z,(0,i.Z)((0,i.Z)({},c?{icon:(0,g.jsx)(E,{})}:{label:"Contacts"}),H(1))),(0,g.jsx)(o.Z,(0,i.Z)((0,i.Z)({},c?{icon:(0,g.jsx)(T,{})}:{label:"Address"}),H(2))),(0,g.jsx)(o.Z,(0,i.Z)((0,i.Z)({},c?{icon:(0,g.jsx)(V,{})}:{label:"Settings"}),H(3)))]}),(0,g.jsx)(L,{value:t,index:0,children:(0,g.jsx)(w,{salutation:an,setsalutation:rn,gender:p,setGender:Z,dob:G,handledob:function(e){J(e)},firstname:xe,setfirstname:ve,middlename:Ze,setmiddlename:je,lastname:be,setlastname:ye})}),(0,g.jsx)(L,{value:t,index:1,children:(0,g.jsx)(k,{mobile:X,setmobile:Y,secondarymobile:ne,setsecondarymobile:te,emailPrimary:re,secondaryemail:ce,setsecondaryemail:de})}),(0,g.jsx)(L,{value:t,index:2,children:(0,g.jsx)(z,{setlastname:ye,address1:Ee,setaddress1:Te,address2:He,setaddress2:Ne,city:qe,setcity:Ue,state:We,setstate:Ke,country:$e,setcountry:en,postalCode:Ae,setpostalCode:Oe})}),(0,g.jsx)(L,{value:t,index:3,children:(0,g.jsx)(M,{theme:y,settheme:S,deadtime:Me,deadtimeChange:De,pwdtime:Ce,pwdtimeChange:we,handleCheckboxChange:function(e){var n=e.target,t=n.value,a=n.checked;cn(a?function(e){return[].concat((0,u.Z)(e),[t])}:function(e){return e.filter((function(e){return e!==t}))})},options:[{label:"Email",value:"email"},{label:"SMS",value:"sms"},{label:"Phone",value:"phone"}],checkedItems:on})})]}),(0,g.jsx)(A.Z,{display:"flex",justifyContent:"center",direction:"row",children:(0,g.jsx)(f.k4,{handleClick:function(e){!function(e){e.preventDefault(),B("Saving "),N.dob=G,N.pwdtime=Ce,N.theme=null===y||void 0===y?void 0:y.value,N.secondarymobile=ne,N.secondaryemail=ce,N.salutation=an,N.name="".concat(xe," ").concat(Ze," ").concat(be),N.mobile=X;var n={address1:Ee,address2:He,postalCode:Ae,city:qe,state:We,country:$e};N.address=n,x&&sessionStorage.setItem("logInUserData",JSON.stringify(N)),F().post("/backendapi/user/update",{_id:null===N||void 0===N?void 0:N._id,user:N},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){B("Save Changes")})).catch()}(e)},label:R})})]})}var B=t(32767),q=t(74165),U=t(15861),G=t(4942),J=t(94469),W=t(33604),K=t(69625),X=t(57775),Y=t(71003),$=t(35271),ee=t(97729),ne=t(79428),te=t(63709),ae=(0,t(14156).Z)(),ie=t(16176),re=function(e){var n=(0,ie.gS)(),t=(0,a.Z)(n,1)[0],r=(0,ie.IZ)(),l=(0,a.Z)(r,1)[0],o=(0,te.v9)((function(e){var n,t,a;return(null===e||void 0===e||null===(n=e.reducer)||void 0===n||null===(t=n.dataList)||void 0===t||null===(a=t.userData)||void 0===a?void 0:a.secrets)||[]})),d=JSON.parse(sessionStorage.getItem("logInUserData")),u=(0,s.useState)(!1),x=(0,a.Z)(u,2),v=x[0],m=x[1],p=(0,s.useState)(),Z=(0,a.Z)(p,2),b=Z[0],y=Z[1],S=(0,s.useState)(),P=(0,a.Z)(S,2),C=P[0],w=P[1],k=(0,s.useState)(!1),z=(0,a.Z)(k,2),M=z[0],D=z[1];(0,s.useEffect)((function(){t()}),[M]),(0,s.useEffect)((function(){w(o)}),[o]);var I=(0,s.useState)(""),O=(0,a.Z)(I,2),_=O[0],Q=O[1],E=function(e,n){console.log((0,ee.c_)(C[n]),"cewbfiew"),y({key:e,answer:n}),Q("secretQuestion"),w((0,i.Z)((0,i.Z)({},C),{},(0,G.Z)({},n,(0,ee.c_)(C[n]))))},T=function(){var e=(0,U.Z)((0,q.Z)().mark((function e(){var n;return(0,q.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.Z)({},C),e.next=3,(0,ee.c_)(n[b.answer]);case 3:n[b.answer]=e.sent,console.log(n),l(n),Q(""),D(!M),w(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,U.Z)((0,q.Z)().mark((function e(){return(0,q.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q(!1),e.t0="secretQuestion"===_,!e.t0){e.next=16;break}return e.t1=w,e.t2=i.Z,e.t3=(0,i.Z)({},C),e.t4={},e.t5=G.Z,e.t6={},e.t7=b.answer,e.next=12,(0,ee.c_)(C[b.answer]);case 12:e.t8=e.sent,e.t9=(0,e.t5)(e.t6,e.t7,e.t8),e.t10=(0,e.t2)(e.t3,e.t4,e.t9),(0,e.t1)(e.t10);case 16:y({});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsxs)(ae,{children:[(0,g.jsxs)(J.Z,{open:""!==_,children:[(0,g.jsx)(W.Z,{toggle:V,children:"changePassword"===_?"Change Password":"secretQuestion"===_?"Edit Secret Question ":""}),(0,g.jsxs)(K.Z,{children:["changePassword"===_&&(0,g.jsx)($.Z,{backtoLogin:function(){return Q("")},fromChangePassword:!0,changePassword:function(e){(0,ee.c_)(e.currentPass).then((function(n){n.includes(sessionStorage.getItem("secretkey"))?(0,ee.c_)(e.newPass).then((function(e){var t={_id:d._id,password:"".concat(e,"&&").concat(sessionStorage.getItem("secretkey")),pwdHashed:n};console.log(t,"userData",d._id),F().post("/backendapi/user/changepassword",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){console.log("Password Changed Successfully"),Q("")})).catch((function(e){e&&j.A9}))})):m("Current Password did not match")}))},error:v}),"secretQuestion"===_&&(0,g.jsxs)(ae,{children:[(0,g.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(f.gc,{options:null===ne.DD||void 0===ne.DD?void 0:ne.DD.filter((function(e){return e.value!==o.secretQuestion1&&e.value!==o.secretQuestion2&&e.value!==o.secretQuestion3})),onChange:function(e,n){return w((0,i.Z)((0,i.Z)({},C),{},(0,G.Z)({},b.key,null===n||void 0===n?void 0:n.value)))},value:(0,ne.NA)(ne.DD,C[b.key]),id:"secret3",name:"secret3",renderInput:function(e){return(0,g.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{placeholder:"Select Third Secret Question"}))},placeholder:" Secret Question"})}),(0,g.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(j.nv,{type:"password",name:"Answer",value:C[b.answer],placeholder:"Answer",onChange:function(e){return w((0,i.Z)((0,i.Z)({},C),{},(0,G.Z)({},b.answer,e.target.value)))}})}),(0,g.jsxs)(A.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,g.jsx)(f.AG,{label:"Cancel",handleClick:function(e){V()}}),(0,g.jsx)(f.k4,{label:"Submit",handleClick:T})]})]})]})]}),(0,g.jsxs)(X.Z,{sx:{px:1},children:[(0,g.jsx)(j.ll,{title:"Account Activity"}),(0,g.jsxs)(h.ZP,{container:!0,spacing:1,sx:{px:2.5,py:1},children:[(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:4,children:(0,g.jsxs)(c.Z,{children:["Active Sessions : ",(0,g.jsx)("b",{children:"2"})]})}),(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:4,children:(0,g.jsxs)(c.Z,{children:["Application Version : ",(0,g.jsx)("b",{children:"1.1.1"})]})}),(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:4,children:(0,g.jsxs)(c.Z,{children:["Last Login : ",(0,g.jsx)("b",{children:"California USA"})]})})]})]}),(0,g.jsxs)(X.Z,{sx:{p:1,mt:1},children:[(0,g.jsx)(j.ll,{title:"Manage Secrets"}),(0,g.jsxs)(h.ZP,{container:!0,spacing:1,sx:{px:2.5,py:1},children:[(0,g.jsxs)(h.ZP,{item:!0,xs:10,sm:4,children:[(0,g.jsx)(c.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){E("secretQuestion1","secretAnswer1")},children:"Edit Question 1 :"}),(0,g.jsx)(c.Z,{children:o&&o.secretQuestion1})]}),(0,g.jsxs)(h.ZP,{item:!0,xs:10,sm:4,children:[(0,g.jsx)(c.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){E("secretQuestion2","secretAnswer2")},children:"Edit Question 2"}),(0,g.jsx)(c.Z,{children:o&&o.secretQuestion2})]}),(0,g.jsxs)(h.ZP,{item:!0,xs:10,sm:4,children:[(0,g.jsx)(c.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){E("secretQuestion3","secretAnswer3")},children:"Edit Question 3"}),(0,g.jsx)(c.Z,{children:o&&o.secretQuestion3})]})]})]})," ",(0,g.jsx)(X.Z,{sx:{p:1,mt:1},children:(0,g.jsxs)(h.ZP,{container:!0,spacing:1,sx:{px:2.5,py:1},children:[(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:4,children:(0,g.jsx)(Y.Z,{variant:"contained",children:"End other Sessions"})}),(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:4,children:(0,g.jsx)(Y.Z,{variant:"contained",onClick:function(){Q("changePassword")},children:"Change Password"})}),(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:4,children:(0,g.jsx)(Y.Z,{variant:"contained",onClick:function(){},children:"Delete Account"})})]})})]})},se=t(25160),le=[{value:"Query",label:"Query",color:"#00B8D9",isFixed:!0},{value:"Complain",label:"Complain",color:"#00B8D9",isFixed:!0},{value:"Feedback",label:"Feedback",color:"#00B8D9",isFixed:!0}],oe=JSON.parse(sessionStorage.getItem("logInUserData")),ce=function(e){var n=(0,s.useState)("Submit"),t=(0,a.Z)(n,2),r=t[0],l=t[1],o=(0,s.useState)(""),c=(0,a.Z)(o,2),d=c[0],u=c[1],x=(0,s.useState)(""),v=(0,a.Z)(x,2),m=v[0],p=v[1];return(0,g.jsxs)(se.Z,{sx:{bgcolor:"background.paper"},children:[(0,g.jsxs)(h.ZP,{container:!0,rowSpacing:.01,spacing:2,children:[(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:5,children:(0,g.jsx)(f.gc,{id:"optionSelect",name:"Select",options:le,value:(0,ne.NA)(le,d),onChange:function(e,n){return u(n?n.value:"")},renderInput:function(e){return(0,g.jsx)(j.nv,(0,i.Z)((0,i.Z)({},e),{},{label:"Choose a Topic"}))}})}),(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:5,children:(0,g.jsx)(j.nv,{type:"File",label:"",id:"attachment"})}),(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:5,children:(0,g.jsx)(j.nv,{id:"firstName",name:"firstName",label:"Your name",fullWidth:!0,autoComplete:"given-name",variant:"outlined"})}),(0,g.jsxs)(h.ZP,{item:!0,xs:10,sm:5,children:[" ",(0,g.jsx)(j.nv,{id:"email",name:"email",label:"Your email",fullWidth:!0,variant:"outlined"})]}),(0,g.jsx)(h.ZP,{item:!0,xs:10,sm:10,children:(0,g.jsx)(j.nv,{type:"textarea",label:"Description",id:"description",value:m,onChange:function(e){return p(e.target.value)}})})]})," ",(0,g.jsx)(A.Z,{direction:"row",children:(0,g.jsx)(f.k4,{disabled:!(m.length&&d.length),handleClick:function(e){return function(e){e.preventDefault(),l("Submiting ... "),F().post("/backendapi/contactus",{name:oe.name,email:oe.email,topic:d,msg:m},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(){l("Submit"),u(""),p("")})).catch()}(e)},label:r})})]})},de=t(68409),ue=(0,Q.Z)((0,g.jsx)("path",{d:"M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4-6-3.27v6.53L16 16z"}),"Subscriptions"),he=(0,Q.Z)((0,g.jsx)("path",{d:"M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"}),"ContactSupport"),xe=(0,Q.Z)([(0,g.jsx)("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z"},"0"),(0,g.jsx)("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"},"1")],"AdminPanelSettings"),ve=["children","value","index"];function me(e){var n=e.children,t=e.value,a=e.index,s=(0,r.Z)(e,ve);return(0,g.jsx)("div",(0,i.Z)((0,i.Z)({role:"tabpanel",hidden:t!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},s),{},{children:t===a&&(0,g.jsx)(d.Z,{sx:{p:1===a?1:3},children:(0,g.jsx)(c.Z,{children:n})})}))}function pe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ze=function(e){var n=e.messages,t=(void 0===n?{}:n).HomePage,r=void 0===t?{}:t,c=s.useState(0),u=(0,a.Z)(c,2),h=u[0],x=u[1],v=s.useState(ne._m[0]),m=(0,a.Z)(v,2),p=m[0],Z=m[1],j=(0,I.Z)("(max-width: 768px)"),f=[{label:"Profile",id:0,icon:(0,g.jsx)(de.Z,{}),component:(0,g.jsx)(R,{})},{label:"Subscriptions",id:1,icon:(0,g.jsx)(ue,{}),component:(0,g.jsx)(B.Z,{plan:p,setPlan:Z,defaultTiers:ne._m,toggleLoginModal:function(e){console.log("plans",e)},HomePage:r})},{label:"Contact Us",id:2,icon:(0,g.jsx)(he,{}),component:(0,g.jsx)(ce,{})},{label:"Security",id:3,icon:(0,g.jsx)(xe,{}),component:(0,g.jsx)(re,{})}];return(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(d.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,g.jsx)(l.Z,{value:h,centered:j,onChange:function(e,n){x(n)},children:f.map((function(e,n){return j?(0,g.jsx)(o.Z,(0,i.Z)({icon:e.icon},pe(n)),e.id):(0,g.jsx)(o.Z,(0,i.Z)({label:e.label},pe(n)),e.id)}))})}),f.map((function(e,n){return(0,g.jsx)(me,{value:h,index:n,children:e.component},e.id)}))]})}},88989:function(e,n,t){var a=t(54750),i=t(46417);n.Z=(0,a.Z)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info")},68409:function(e,n,t){var a=t(54750),i=t(46417);n.Z=(0,a.Z)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person")},25160:function(e,n,t){var a=(0,t(53249).Z)();n.Z=a}}]);