"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[772],{55328:function(e,n,t){t.d(n,{Y0:function(){return o},gl:function(){return c},jt:function(){return u},li:function(){return d},sW:function(){return l}});var r=t(74165),a=t(15861),s=t(31881),i=t.n(s),o=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"VALIDATING_MOBILE_NUMBER"}),n.next=3,i().post("/backendapi/otp/newuser/send",e).then((function(e){t({type:"VALIDATED_MOBILE_NUMBER",data:e.data})})).catch((function(e){t({type:"INVALID_MOBILE_NUMBER",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},l=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"REQUEST_CHANGE_PASSWORD"}),n.next=3,i().post("/backendapi/user/changepassword",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){"ok"===e.data&&t({type:"RECEIVE_CHANGE_PASSWORD"})})).catch((function(e){t({type:"FAILURE_CHANGE_PASSWORD"})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},c=function(e){var n=e.otp,t=e.key;return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"VALIDATING_OTP"}),e.next=3,i().post("/backendapi/otp/verify",{otp:n,key:t}).then((function(e){a({type:"VALIDATED_OTP",data:e.data})})).catch((function(e){a({type:"INVALID_OTP",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},u=function(e,n){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"VALIDATING_OTP"}),t.next=3,i().post("/backendapi/otp/send",e).then((function(e){n&&a({type:"RECEIVE_RECOVERY_ID",data:{recoveryId:n,recoveryOtp:e.data}}),a({type:"VALIDATED_OTP",data:e.data})})).catch((function(e){a({type:"INVALID_OTP",data:null===e||void 0===e?void 0:e.response}),n&&a({type:"FAILURE_RECOVERY_ID",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"REQUEST_RECOVERY_ID"}),n.next=3,i().post("/backendapi/user/recovercheck",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){var r=null===n||void 0===n?void 0:n.data[0];t(u(e,r))})).catch((function(e){t({type:"FAILURE_RECOVERY_ID",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},51427:function(e,n,t){t.d(n,{EL:function(){return v},cm:function(){return p},is:function(){return h},qi:function(){return d}});var r=t(74165),a=t(15861),s=t(31881),i=t.n(s),o=t(12613),l=t(97729),c=t(46417),u=JSON.parse(sessionStorage.getItem("logInUserData")),d=function(e){var n=e.user,t=e.token;return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"GET_ALL_DOCS_LOADING",data:!0}),i().get("/backendapi/documents/".concat(null===n||void 0===n?void 0:n._id),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){a({type:"GET_ALL_DOCS_LOADING",data:!1});for(var n=e.data,t=0;t<n.length;t+=1)n[t].desc=(0,l.Y)(n[t].desc),n[t].id=t+1,n[t].expiry=(0,l.Y)(n[t].expiry),n[t].alias=(0,l.Y)(n[t].alias);a({type:"GET_ALL_DOCS",resp:n})})).catch((function(e){a({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},h=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,i().post("/backendapi/users/get",{id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(n({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null!==e&&void 0!==e&&e.data){var t=e.data[0];n({type:"GET_USER_ALL_DATA",data:t})}})).catch((function(e){n({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},p=function(e){return function(n){return n({type:"FILTER_DATA",value:e})}},v=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().post("/backendapi/update/secrets",{secrets:e,_id:u._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){return(0,c.jsx)(o.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Secret Updated Successfully"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},49301:function(e,n,t){t.d(n,{o:function(){return b}});var r=t(93433),a=t(74165),s=t(15861),i=t(29439),o=t(47313),l=t(89870),c=t(96900),u=t(56972),d=t(71535),h=t(71363),p=t(34940),v=t(62463),x=t(8247),m=t(86808),f=t(12613),g=t(86282),Z=t(31881),j=t.n(Z),y=t(46417),w=function(e){return new Promise((function(n){var t=document.createElement("script");t.src=e,document.body.appendChild(t),t.onload=function(){n(!0)},t.onerror=function(){n(!1)}}))},b=function(e){var n=e.toggleLoginModal,t=e.plan,Z=e.setPlan,b=e.defaultTiers,P=o.useState(b),S=(0,i.Z)(P,2),C=S[0],A=S[1],D="lastarzi.com"===document.domain,k=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var t,r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.amount,r=n.id,e.next=3,w("https://checkout.razorpay.com/v1/checkout.js");case 3:if(e.sent){e.next=6;break}return e.abrupt("return",alert("Loading Failed"));case 6:s={key:D?"unavailable":"rzp_test_ppuCw11USIQQym",amount:null===t||void 0===t?void 0:t.toString(),currency:"INR",name:"LastArzi",description:"Pay Dev",image:g.TR,order_id:r,callback_url:"https://eneqd3r9zrjok.x.pipedream.net/",prefill:{name:"Vipin Kumar",email:"vksforum@gmail.com",contact:"9458706129"},notes:{address:"LastArzi Corporate Office"},theme:{color:"#FF9F43"}},new window.Razorpay(s).open();case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={method:"post",url:"https://api.razorpay.com/v1/orders",data:{amount:199,currency:"INR",receipt:"Receipt no.981",payment_capture:1,notes:{notes_key_1:"Tea, Earl Grey, Hot",notes_key_2:"Tea, Earl Grey\u2026 decaf."}}},j()(n).then((function(e){k(e.data)})).catch((function(){alert("Failed api")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[!t&&(0,y.jsx)(h.Z,{component:"h2",variant:"h4",textAlign:"center",sx:{mt:10},children:"My Plans"}),(0,y.jsxs)(d.ZP,{container:!0,spacing:4,alignItems:"center",justifyContent:"center",children:[C.map((function(e){return(0,y.jsx)(d.ZP,{item:!0,xs:12,sm:3.7,sx:{mt:10},children:(0,y.jsxs)(c.Z,{raised:!0,style:{boxShadow:" 0px 4px 25px 0px rgb(0 0 0 / 10%)"},children:[(0,y.jsx)(f.ll,{align:"center",title:e.title}),(0,y.jsx)(p.Z,{}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(v.Z,{direction:"column",spacing:1,sx:{mb:3},alignItems:"center",children:"0"!==e.annualPrice?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h.Z,{variant:"h3",color:e.SelectedPrice===e.annualPrice?"text.secondary":"text.primary",children:["\u20b9",e.SelectedPrice===e.price?e.price:e.annualPrice]}),(0,y.jsx)(m.Z,{tier:e,handleChange:function(){return function(e){var n=(0,r.Z)(C);n.forEach((function(n){n.title===e.title&&(n.SelectedPrice===n.price?n.SelectedPrice=n.annualPrice:n.SelectedPrice=n.price)})),A(n)}(e)}})]}):(0,y.jsxs)(h.Z,{variant:"h3",children:["\u20b9",e.price]})}),(0,y.jsx)("ul",{children:e.description.map((function(e){return(0,y.jsx)(h.Z,{component:"li",align:"left",children:e},e)}))})]}),(0,y.jsx)(x.Z,{sx:{justifyContent:"center"},children:(0,y.jsx)(l.Z,{onClick:function(){return function(e){n("SignUp"),Z(e)}(e)},variant:e.buttonVariant,children:e.buttonText})})]})},e.title)})),(0,y.jsx)(l.Z,{onClick:function(){_()},children:"RazorPay"})]})]})}},89709:function(e,n,t){var r=t(1413),a=t(29439),s=t(47313),i=t(66135),o=t(55328),l=t(71535),c=t(40229),u=t(89870),d=t(97729),h=t(39653),p=t(2127),v=t(8586),x=t(46417);n.Z=(0,i.$j)((function(e){var n,t,r=e.reducer.auth,a=void 0===r?{}:r,s=null===a||void 0===a?void 0:a.phoneotp;return{validatedotp:null===s||void 0===s||null===(n=s.validatedotp)||void 0===n||null===(t=n.status)||void 0===t?void 0:t.toLowerCase(),validatingotp:null===s||void 0===s?void 0:s.validatingotp}}),{forgotpwd:o.sW})((function(e){var n={specialChars:/(?=.*?[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,digit:/[0-9]/,lowercase:/[a-z]/,uppercase:/[A-Z]/,noWhitespace:/^\S*$/},t="Invalid input",i="Password and confirm password did not match.",o="Password should be less than 64 characters",m="Are Madatory fields blank?",f=(0,s.useState)(!1),g=(0,a.Z)(f,2),Z=g[0],j=g[1],y=(0,s.useState)(""),w=(0,a.Z)(y,2),b=w[0],P=w[1],S=(0,s.useState)(""),C=(0,a.Z)(S,2),A=C[0],D=C[1],k=(0,s.useState)(!1),_=(0,a.Z)(k,2),I=_[0],E=_[1],L=(0,s.useState)({}),O=(0,a.Z)(L,2),F=O[0],R=O[1],T=(0,s.useState)(""),N=(0,a.Z)(T,2),G=N[0],M=N[1],U=function(e){var n=e.show;return(0,x.jsx)("span",{style:{marginRight:"5px"},children:n?(0,x.jsx)(p.Z,{size:"15",color:"green"}):(0,x.jsx)(v.Z,{size:"15",color:"red"})})},z=function(){return(0,x.jsx)(l.ZP,{item:!0,children:(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{show:F.minimumLength}),(0,x.jsx)("span",{style:{color:F.minimumLength?"grey":"red"},children:"Minimum 8 characters"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{show:F.uppercase}),(0,x.jsx)("span",{style:{color:F.uppercase?"grey":"red"},children:"Upper case alphabet"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{show:F.lowercase}),(0,x.jsx)("span",{style:{color:F.lowercase?"grey":"red"},children:"Lower case alphabet"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{show:F.digit}),(0,x.jsx)("span",{style:{color:F.digit?"grey":"red"},children:"Numeric"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{show:F.noWhitespace}),(0,x.jsx)("span",{style:{color:F.noWhitespace?"grey":"red"},children:"No spaces"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{show:F.specialChars}),(0,x.jsx)("span",{style:{color:F.specialChars?"grey":"red"},children:"Special character"})]})]})})},Q=function(e,n){e&&(n.minimumLength&&n.specialChars&&n.digit&&n.lowercase&&n.uppercase&&n.noWhitespace?n.newPassword===t&&delete n.newPassword:n.newPassword=t)},B=function(){var n=(0,r.Z)({},F);e.fromChangePassword&&function(e,n){0===e.length?(n.currentPassword=m,j(m)):(j(""),delete n.currentPassword)}(G,n),function(e,n){e.length>64?(n.newPassword=o,j(o)):0===e.length?(n.newPassword=m,j(m)):(delete n.newPassword,j(""))}(b,n),Q(b,n),function(e,n){0===e.length?(n.confirmNewPassword=m,j(m)):b!==e?(n.confirmNewPassword=i,j(i)):(j(""),delete n.confirmNewPassword)}(A,n),R(n);var t=Object.values(n);return 6===t.length&&t.every((function(e){return!0===e}))},V=function(t){var a,s;t.preventDefault();var i=null===(a=t.target)||void 0===a?void 0:a.name,o=null===(s=t.target)||void 0===s?void 0:s.value,l=(0,r.Z)({},F);"newPassword"===i?(E(!0),function(e,t){e.length>=8?t.minimumLength=!0:delete t.minimumLength,n.specialChars.test(e)?t.specialChars=!0:delete t.specialChars,n.digit.test(e)?t.digit=!0:delete t.digit,n.lowercase.test(e)?t.lowercase=!0:delete t.lowercase,n.uppercase.test(e)?t.uppercase=!0:delete t.uppercase,n.noWhitespace.test(e)?t.noWhitespace=!0:delete t.noWhitespace}(o,l),Q(o,l)):E(!1),"newPassword"===i?e.signup?e.setpassword(o):P(o):e.signup?e.setconfirmPass(o):D(o),R(l)};return(0,x.jsxs)(c.Z,{type:"form",children:[e.fromChangePassword&&(0,x.jsx)(h.Z,{margin:"normal",required:!0,type:"password",value:G,placeholder:"Current Password",name:"currentPassword",onChange:function(e){return M(e.target.value)},onBlur:function(e){return M(e.target.value)},onFocus:function(e){M(e.target.value)},id:"password"}),(0,x.jsx)(h.Z,{margin:"normal",required:!0,fullWidth:!0,type:"password",inputProps:{autocomplete:"new-password",form:{autocomplete:"off"}},value:e.signup?e.password:b,placeholder:"New Password",name:"newPassword",onChange:V,onBlur:V,onFocus:V}),(0,x.jsx)(h.Z,{margin:"normal",required:!0,fullWidth:!0,type:"password",inputProps:{autocomplete:"new-password",form:{autocomplete:"off"}},value:e.signup?e.confirmPass:A,placeholder:"Confirm Password",name:"confirmPassword",onChange:V,onBlur:V,onFocus:V}),I&&(0,x.jsx)(c.Z,{children:(0,x.jsx)(z,{})}),Z&&(0,x.jsx)("div",{style:{color:"red",textAlign:"center"},children:Z}),e.error&&(0,x.jsx)("div",{style:{color:"red",textAlign:"center"},children:e.error}),!e.signup&&(0,x.jsx)(u.Z,{variant:"contained",sx:{mt:3,mb:2},type:"submit",fullWidth:!0,onClick:function(n){if(n.preventDefault(),B())if(e.fromChangePassword)e.changePassword({currentPass:G,newPass:b});else{var t=(0,d.Gf)(e.changePass,!1,b),r={_id:e.userId,password:t};console.log("body",r),e.forgotpwd(r)}else console.log("formErrors",F)},children:"Change"})]})}))},42772:function(e,n,t){t.r(n),t.d(n,{default:function(){return te}});var r=t(29439),a=t(1413),s=t(45987),i=t(47313),o=t(38424),l=t(3204),c=t(71363),u=t(40229),d=t(71535),h=t(91363),p=t(75969),v=t(95716),x=t(12613),m=t(61474),f=t(46417),g=[{value:"Male",label:"Male",isFixed:!1},{value:"Female",label:"Female",isFixed:!0},{value:"Others",label:"Others",isFixed:!1}],Z=[{value:"Mr",label:"Mr",isFixed:!1},{value:"Mx",label:"Mx",isFixed:!0},{value:"Ms",label:"Ms",isFixed:!0}],j=[{value:"3",label:"3 Seconds",isFixed:!1},{value:"5",label:"5 Seconds",isFixed:!0},{value:"10",label:"10 Seconds",isFixed:!0}],y=[{value:"1",label:"1 Month Inactivity",isFixed:!1},{value:"2",label:"2 Months Inactivity",isFixed:!0},{value:"3",label:"3 Months Inactivity",isFixed:!0}],w=[{value:"light",label:"Light",isFixed:!0},{value:"dark",label:"Dark",isFixed:!1}],b=function(e){var n=e.salutation,t=e.setsalutation,r=e.gender,s=e.setGender,i=e.dob,o=e.handledob,l=e.firstname,c=e.setfirstname,u=e.middlename,h=e.setmiddlename,p=e.lastname,v=e.setlastname;return(0,f.jsxs)(d.ZP,{container:!0,rowSpacing:.01,spacing:2,sx:{p:1},children:[(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(m.gc,{options:Z,id:"Salutation",name:"Salutation",value:{value:n,label:n||"Salutation",isFixed:!1},onChange:function(e,n){return t(n&&n.value?n.value:null)},isDisabled:!1,renderInput:function(e){return(0,f.jsx)(x.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Salutation"}))}})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(m.gc,{options:g,id:"gender",name:"gender",value:{value:r,label:r||"Gender",isFixed:!1},onChange:function(e,n){return s(n&&n.value?n.value:null)},isDisabled:!1,renderInput:function(e){return(0,f.jsx)(x.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Gender"}))}})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"Date",name:"dob",placeholder:"Date of birth",value:i,onChange:function(e){return o(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"text",placeholder:"First Name",required:!0,value:l,onChange:function(e){return c(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{placeholder:"Middle Name",type:"text",value:u,onChange:function(e){return h(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"text",placeholder:"Last Name",required:!0,value:p,onChange:function(e){return v(e.target.value)},readOnly:!1})})]})},P=function(e){var n=e.mobile,t=e.setmobile,r=e.secondarymobile,a=e.setsecondarymobile,s=e.emailPrimary,i=e.secondaryemail,o=e.setsecondaryemail;return(0,f.jsxs)(d.ZP,{container:!0,rowSpacing:.01,spacing:2,sx:{p:1},children:[(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"tel",placeholder:"Primary Contact",required:!0,value:n,onChange:function(e){return t(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"number",placeholder:"Secondary Contact",required:!0,value:r,onChange:function(e){return a(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"email",placeholder:"Primary Email",required:!0,value:s,readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"email",placeholder:"Secondary Email",required:!0,value:i,onChange:function(e){return o(e.target.value)},readOnly:!1})})]})},S=function(e){e.setlastname;var n=e.address1,t=e.setaddress1,r=e.address2,a=e.setaddress2,s=e.city,i=e.setcity,o=e.state,l=e.setstate,c=e.country,u=e.setcountry,h=e.postalCode,p=e.setpostalCode;return(0,f.jsxs)(d.ZP,{container:!0,rowSpacing:.01,spacing:2,sx:{p:1},children:[(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{id:"address1",placeholder:"House No.",value:n,onChange:function(e){return t(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{id:"address1",placeholder:"Address Line 1",value:r,onChange:function(e){return a(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{id:"city",placeholder:"City",value:s,onChange:function(e){return i(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{id:"State",placeholder:"State",value:o,onChange:function(e){return l(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{id:"Country",placeholder:"Country",value:c,onChange:function(e){return u(e.target.value)},readOnly:!1})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"number",id:"postcode",placeholder:"Postcode",value:h,onChange:function(e){return p(e.target.value)},readOnly:!1})})]})},C=function(e){var n=e.theme,t=e.settheme,r=e.deadtime,s=e.deadtimeChange,i=e.pwdtime,o=e.pwdtimeChange;return(0,f.jsxs)(d.ZP,{container:!0,rowSpacing:.01,spacing:2,sx:{p:1},children:[(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(m.gc,{options:w,id:"theme",name:"theme",value:{value:n,label:null!==n&&void 0!==n?n:"Theme",isFixed:!1},onChange:function(e,n){var r;return t(null!==(r=null===n||void 0===n?void 0:n.value)&&void 0!==r?r:null)},isDisabled:!1,renderInput:function(e){return(0,f.jsx)(x.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Default theme"}))}})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(m.gc,{options:y,id:"deathTime",name:"deathTime",value:{value:r,label:null!==r&&void 0!==r?r:"Death Interval",isFixed:!1},onChange:function(e,n){var t;return s(null!==(t=null===n||void 0===n?void 0:n.value)&&void 0!==t?t:null)},isDisabled:!1,renderInput:function(e){return(0,f.jsx)(x.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Assume me dead after"}))}})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,children:(0,f.jsx)(m.gc,{value:{value:i,label:i?j.filter((function(e){return e.value===i})):"Death Interval",isFixed:!1},id:"pwdVisibility",name:"pwdVisibility",options:j,isDisabled:!1,onChange:function(e,n){var t;return o(null!==(t=null===n||void 0===n?void 0:n.value)&&void 0!==t?t:null)},renderInput:function(e){return(0,f.jsx)(x.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Password Visibility"}))}})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(c.Z,{justifyContent:"center",children:"Receive Updates Via"})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsxs)(h.Z,{"aria-label":"position",row:!0,children:[(0,f.jsx)(p.Z,{value:"email",control:(0,f.jsx)(v.Z,{}),label:"Email",labelPlacement:"start"}),(0,f.jsx)(p.Z,{value:"sms",control:(0,f.jsx)(v.Z,{}),label:"SMS",labelPlacement:"start"}),(0,f.jsx)(p.Z,{value:"Phone",control:(0,f.jsx)(v.Z,{}),label:"Phone",labelPlacement:"start"})]})})]})},A=t(31881),D=t.n(A),k=t(34725),_=t(62463),I=["children","value","index"];function E(e){var n=e.children,t=e.value,r=e.index,i=(0,s.Z)(e,I);return(0,f.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:t!==r,id:"vertical-tabpanel-".concat(r),"aria-labelledby":"vertical-tab-".concat(r)},i),{},{children:t===r&&(0,f.jsx)(u.Z,{sx:{p:3},children:(0,f.jsx)(c.Z,{children:n})})}))}function L(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var O=JSON.parse(sessionStorage.getItem("logInUserData"));function F(){var e=i.useState(0),n=(0,r.Z)(e,2),t=n[0],s=n[1],c="Mr"===(null===O||void 0===O?void 0:O.salutation)?"male":"Ms"===(null===O||void 0===O?void 0:O.salutation)?"female":"Mx"===(null===O||void 0===O?void 0:O.salutation)?"others":"",d=(0,i.useState)(c),h=(0,r.Z)(d,2),p=h[0],v=h[1],x=(0,i.useState)("light"),g=(0,r.Z)(x,2),Z=g[0],j=g[1],y=(null!==O&&void 0!==O?O:"").address,w=void 0===y?"":y,A=(0,i.useState)("Save Changes"),I=(0,r.Z)(A,2),F=I[0],R=I[1],T=(0,i.useState)(""),N=(0,r.Z)(T,2),G=N[0],M=N[1],U=(0,i.useState)(""),z=(0,r.Z)(U,2),Q=z[0],B=z[1],V=(0,i.useState)(""),W=(0,r.Z)(V,2),Y=W[0],q=W[1],H=(0,i.useState)(""),J=(0,r.Z)(H,2),$=J[0],K=J[1],X=(0,i.useState)(""),ee=(0,r.Z)(X,2),ne=ee[0],te=ee[1],re=(0,i.useState)(""),ae=(0,r.Z)(re,2),se=ae[0],ie=ae[1],oe=(0,i.useState)(""),le=(0,r.Z)(oe,2),ce=le[0],ue=le[1],de=(0,i.useState)(""),he=(0,r.Z)(de,2),pe=he[0],ve=he[1],xe=(0,i.useState)(""),me=(0,r.Z)(xe,2),fe=me[0],ge=me[1],Ze=(0,i.useState)("1"),je=(0,r.Z)(Ze,2),ye=je[0],we=je[1],be=(0,i.useState)(null===w||void 0===w?void 0:w.postalCode),Pe=(0,r.Z)(be,2),Se=Pe[0],Ce=Pe[1],Ae=(0,i.useState)(null===w||void 0===w?void 0:w.address1),De=(0,r.Z)(Ae,2),ke=De[0],_e=De[1],Ie=(0,i.useState)(null===w||void 0===w?void 0:w.address2),Ee=(0,r.Z)(Ie,2),Le=Ee[0],Oe=Ee[1],Fe=(0,i.useState)(null===w||void 0===w?void 0:w.city),Re=(0,r.Z)(Fe,2),Te=Re[0],Ne=Re[1],Ge=(0,i.useState)(null===w||void 0===w?void 0:w.state),Me=(0,r.Z)(Ge,2),Ue=Me[0],ze=Me[1],Qe=(0,i.useState)(null===w||void 0===w?void 0:w.country),Be=(0,r.Z)(Qe,2),Ve=Be[0],We=Be[1],Ye=(0,i.useState)(""),qe=(0,r.Z)(Ye,2),He=qe[0],Je=qe[1];(0,i.useEffect)((function(){var e=null!==O&&void 0!==O&&O.name?null===O||void 0===O?void 0:O.name.split(" "):null===O||void 0===O?void 0:O.username.split(" "),n="",t="",r="";if(1===(null===e||void 0===e?void 0:e.length)?n=e[0]:2===(null===e||void 0===e?void 0:e.length)&&(n=e[0],r=e[1]),3===(null===e||void 0===e?void 0:e.length)&&(n=e[0],r=e[2],t=e[1]),(null===e||void 0===e?void 0:e.length)>3){n=e[0];for(var a=1;a<(null===e||void 0===e?void 0:e.length)-1;a+=1)t="".concat(t," ").concat(e[a]);r=e[2],t=e[(null===e||void 0===e?void 0:e.length)-1]}ie(n),ue(t),ve(r),K(null===O||void 0===O?void 0:O.email),B(null===O||void 0===O?void 0:O.mobile)}),[]);return(0,f.jsxs)(k.Z,{children:[(0,f.jsxs)(u.Z,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex"},children:[(0,f.jsxs)(o.Z,{orientation:"vertical",value:t,onChange:function(e,n){s(n)},variant:"fullWidth",sx:{borderRight:1,borderColor:"divider",minWidth:150},size:"small",children:[(0,f.jsx)(l.Z,(0,a.Z)({label:"Basic Info"},L(0))),(0,f.jsx)(l.Z,(0,a.Z)({label:"Contacts"},L(1))),(0,f.jsx)(l.Z,(0,a.Z)({label:"Address"},L(2))),(0,f.jsx)(l.Z,(0,a.Z)({label:"Settings"},L(3)))]}),(0,f.jsx)(E,{sx:{minHeight:150},value:t,index:0,children:(0,f.jsx)(b,{salutation:He,setsalutation:Je,gender:p,setGender:v,dob:G,handledob:function(e){M(e)},firstname:se,setfirstname:ie,middlename:ce,setmiddlename:ue,lastname:pe,setlastname:ve})}),(0,f.jsx)(E,{sx:{minHeight:150},value:t,index:1,children:(0,f.jsx)(P,{mobile:Q,setmobile:B,secondarymobile:Y,setsecondarymobile:q,emailPrimary:$,secondaryemail:ne,setsecondaryemail:te})}),(0,f.jsx)(E,{sx:{minHeight:150},value:t,index:2,children:(0,f.jsx)(S,{setlastname:ve,address1:ke,setaddress1:_e,address2:Le,setaddress2:Oe,city:Te,setcity:Ne,state:Ue,setstate:ze,country:Ve,setcountry:We,postalCode:Se,setpostalCode:Ce})}),(0,f.jsx)(E,{sx:{minHeight:150},value:t,index:3,children:(0,f.jsx)(C,{theme:Z,settheme:j,deadtime:ye,deadtimeChange:we,pwdtime:fe,pwdtimeChange:ge})})]}),(0,f.jsx)(_.Z,{direction:"row",children:(0,f.jsx)(m.k4,{handleClick:function(e){!function(e){e.preventDefault(),R("Saving "),O.dob=G,O.pwdtime=fe,O.theme=null===Z||void 0===Z?void 0:Z.value,O.secondarymobile=Y,O.secondaryemail=ne,O.salutation=He,O.name="".concat(se," ").concat(ce," ").concat(pe),O.mobile=Q;var n={address1:ke,address2:Le,postalCode:Se,city:Te,state:Ue,country:Ve};O.address=n,sessionStorage.setItem("logInUserData",JSON.stringify(O)),D().post("/backendapi/adddetails",{_id:null===O||void 0===O?void 0:O._id,user:O},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){R("Save Changes"),window.location.reload()})).catch()}(e)},label:F})})]})}var R=t(49301),T=t(4942),N=t(7081),G=t(5448),M=t(88356),U=t(96900),z=t(89870),Q=t(89709),B=t(97729),V=t(86282),W=t(66135),Y=t(51427),q=(0,t(14156).Z)();var H=(0,W.$j)((function(e){var n;return{userData:null===(n=e.reducer.dataList.userData)||void 0===n?void 0:n.secrets}}),(function(e){return{getUserData:function(){return e((0,Y.is)())},updateSecrets:function(n){return e((0,Y.EL)(n))}}}))((function(e){var n=JSON.parse(sessionStorage.getItem("logInUserData")),t=(0,i.useState)(!1),s=(0,r.Z)(t,2),o=s[0],l=s[1],u=(0,i.useState)(),h=(0,r.Z)(u,2),p=h[0],v=h[1],g=(0,i.useState)(),Z=(0,r.Z)(g,2),j=Z[0],y=Z[1],w=(0,i.useState)(!1),b=(0,r.Z)(w,2),P=b[0],S=b[1];(0,i.useEffect)((function(){e.getUserData()}),[P]),(0,i.useEffect)((function(){y(e.userData)}),[e.userData]);var C=(0,i.useState)(""),A=(0,r.Z)(C,2),k=A[0],I=A[1],E=function(e,n){console.log((0,B.Y)(j[n]),"cewbfiew"),v({key:e,answer:n}),I("secretQuestion"),y((0,a.Z)((0,a.Z)({},j),{},(0,T.Z)({},n,(0,B.Y)(j[n]))))},L=function(){I(!1),"secretQuestion"===k&&y((0,a.Z)((0,a.Z)({},j),{},(0,T.Z)({},p.answer,(0,B.Gf)(j[p.answer])))),v({})};return(0,f.jsxs)(q,{children:[(0,f.jsxs)(N.Z,{open:""!==k,children:[(0,f.jsx)(G.Z,{toggle:L,children:"changePassword"===k?"Change Password":"secretQuestion"===k?"Edit Secret Question ":""}),(0,f.jsxs)(M.Z,{children:["changePassword"===k&&(0,f.jsx)(Q.Z,{backtoLogin:function(){return I("")},fromChangePassword:!0,changePassword:function(e){(0,B.tc)(e.currentPass).then((function(t){t===sessionStorage.getItem("secretkey")?(0,B.tc)(e.newPass).then((function(t){var r=(0,B.Gf)(t,!1,e.newPass),a=(0,B.Y)(n.userKey,!1,e.currentPass);console.log(a,n.password);var s={_id:n._id,password:r,currentPassword:e.currentPass};console.log(s,"userData",n._id),D().post("/backendapi/user/changepassword",s,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){e&&x.A9,I("")})).catch((function(e){e&&x.A9}))})):l("Current Password did not match")}))},error:o}),"secretQuestion"===k&&(0,f.jsxs)(q,{children:[(0,f.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(m.gc,{options:null===V.DD||void 0===V.DD?void 0:V.DD.filter((function(n){return n.value!==e.userData.secretQustion1&&n.value!==e.userData.secretQustion2&&n.value!==e.userData.secretQustion3})),onChange:function(e,n){return y((0,a.Z)((0,a.Z)({},j),{},(0,T.Z)({},p.key,null===n||void 0===n?void 0:n.value)))},value:(0,V.NA)(V.DD,j[p.key]),id:"secret3",name:"secret3",renderInput:function(e){return(0,f.jsx)(x.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Select Third Secret Question"}))},placeholder:" Secret Question"})}),(0,f.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(x.nv,{type:"password",name:"Answer",value:j[p.answer],placeholder:"Answer",onChange:function(e){return y((0,a.Z)((0,a.Z)({},j),{},(0,T.Z)({},p.answer,e.target.value)))}})}),(0,f.jsxs)(_.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[(0,f.jsx)(m.AG,{label:"Cancel",handleClick:function(e){L()}}),(0,f.jsx)(m.k4,{label:"Submit",handleClick:function(){var n=(0,a.Z)({},j);n[p.answer]=(0,B.Gf)(n[p.answer]),console.log(n),e.updateSecrets(n),I(""),S(!P),y(n)}})]})]})]})]}),(0,f.jsxs)(U.Z,{sx:{px:1},children:[(0,f.jsx)(x.ll,{title:"Account Activity"}),(0,f.jsxs)(d.ZP,{container:!0,spacing:1,sx:{px:2.5,py:1},children:[(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:4,children:(0,f.jsxs)(c.Z,{children:["Active Sessions : ",(0,f.jsx)("b",{children:"2"})]})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:4,children:(0,f.jsxs)(c.Z,{children:["Application Version : ",(0,f.jsx)("b",{children:"1.1.1"})]})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:4,children:(0,f.jsxs)(c.Z,{children:["Last Login : ",(0,f.jsx)("b",{children:"California USA"})]})})]})]}),(0,f.jsx)(U.Z,{sx:{p:1,mt:1},children:(0,f.jsxs)(d.ZP,{container:!0,spacing:1,sx:{px:2.5,py:1},children:[(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:4,children:(0,f.jsx)(z.Z,{children:"End other Sessions"})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:4,children:(0,f.jsx)(z.Z,{onClick:function(){I("changePassword")},children:"Change Password"})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:4,children:(0,f.jsx)(z.Z,{onClick:function(){},children:"Delete Account"})})]})}),(0,f.jsxs)(U.Z,{sx:{p:1,mt:1},children:[(0,f.jsx)(x.ll,{title:"Manage Secrets"}),(0,f.jsxs)(d.ZP,{container:!0,spacing:1,sx:{px:2.5,py:1},children:[(0,f.jsxs)(d.ZP,{item:!0,xs:10,sm:4,children:[(0,f.jsx)(c.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){E("secretQustion1","secretAnswer1")},children:"Edit Question 1 :"}),(0,f.jsx)(c.Z,{children:e.userData&&e.userData.secretQustion1})]}),(0,f.jsxs)(d.ZP,{item:!0,xs:10,sm:4,children:[(0,f.jsx)(c.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){E("secretQustion2","secretAnswer2")},children:"Edit Question 2"}),(0,f.jsx)(c.Z,{children:e.userData&&e.userData.secretQustion2})]}),(0,f.jsxs)(d.ZP,{item:!0,xs:10,sm:4,children:[(0,f.jsx)(c.Z,{sx:{color:"blue",cursor:"pointer"},onClick:function(){E("secretQustion3","secretAnswer3")},children:"Edit Question 3"}),(0,f.jsx)(c.Z,{children:e.userData&&e.userData.secretQustion3})]})]})]})]})})),J=t(25160),$=[{value:"Query",label:"Query",color:"#00B8D9",isFixed:!0},{value:"Complain",label:"Complain",color:"#00B8D9",isFixed:!0},{value:"Feedback",label:"Feedback",color:"#00B8D9",isFixed:!0}],K=JSON.parse(sessionStorage.getItem("logInUserData")),X=function(e){var n=(0,i.useState)("Submit"),t=(0,r.Z)(n,2),s=t[0],o=t[1],l=(0,i.useState)(""),c=(0,r.Z)(l,2),u=c[0],h=c[1],p=(0,i.useState)(""),v=(0,r.Z)(p,2),g=v[0],Z=v[1];return(0,f.jsxs)(J.Z,{children:[(0,f.jsxs)(d.ZP,{container:!0,rowSpacing:.01,spacing:2,children:[(0,f.jsxs)(d.ZP,{item:!0,xs:10,sm:5,children:[" ",(0,f.jsx)(m.gc,{id:"optionSelect",name:"Select",options:$,value:(0,V.NA)($,u),onChange:function(e,n){return h(n?n.value:"")},renderInput:function(e){return(0,f.jsx)(x.nv,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Choose a Topic"}))}})]}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{type:"File",placeholder:"Attachments",id:"attachment"})}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:5,children:(0,f.jsx)(x.nv,{id:"firstName",name:"firstName",placeholder:"Your name",fullWidth:!0,autoComplete:"given-name",variant:"outlined"})}),(0,f.jsxs)(d.ZP,{item:!0,xs:10,sm:5,children:[" ",(0,f.jsx)(x.nv,{id:"email",name:"email",placeholder:"Your email",fullWidth:!0,variant:"outlined"})]}),(0,f.jsx)(d.ZP,{item:!0,xs:10,sm:10,children:(0,f.jsx)(x.nv,{type:"textarea",placeholder:"Description",id:"description",value:g,onChange:function(e){return Z(e.target.value)}})})]})," ",(0,f.jsx)(_.Z,{direction:"row",children:(0,f.jsx)(m.k4,{disabled:!(g.length&&u.length),handleClick:function(e){return function(e){e.preventDefault(),o("Submiting ... "),D().post("/backendapi/contactus",{name:K.name,email:K.email,topic:u,msg:g},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(){o("Submit"),h(""),Z("")})).catch()}(e)},label:s})})]})},ee=["children","value","index"];function ne(e){var n=e.children,t=e.value,r=e.index,i=(0,s.Z)(e,ee);return(0,f.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:t===r&&(0,f.jsx)(u.Z,{sx:{p:1===r?1:3},children:(0,f.jsx)(c.Z,{children:n})})}))}var te=(0,W.$j)((function(e){var n=e.reducer.customizer,t=void 0===n?{}:n;return{messages:null===t||void 0===t?void 0:t.language}}))((function(e){var n=e.messages,t=(void 0===n?{}:n).HomePage,s=void 0===t?{}:t,c=i.useState(0),d=(0,r.Z)(c,2),h=d[0],p=d[1],v=i.useState(V._m[0]),x=(0,r.Z)(v,2),m=x[0],g=x[1],Z=[{label:"Profile",id:0,component:(0,f.jsx)(F,{})},{label:"Subscriptions",id:1,component:(0,f.jsx)(R.o,{plan:m,setPlan:g,defaultTiers:V._m,toggleLoginModal:function(e){console.log("plans",e)},HomePage:s})},{label:"Contact Us",id:2,component:(0,f.jsx)(X,{})},{label:"Security",id:3,component:(0,f.jsx)(H,{})}];return(0,f.jsxs)(u.Z,{children:[(0,f.jsx)(u.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,f.jsx)(o.Z,{value:h,onChange:function(e,n){p(n)},children:Z.map((function(e,n){return(0,f.jsx)(l.Z,(0,a.Z)({label:e.label},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(n)),e.id)}))})}),Z.map((function(e,n){return(0,f.jsx)(ne,{value:h,index:n,children:e.component},e.id)}))]})}))},2127:function(e,n,t){var r=t(46095),a=t(46417);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle")},8586:function(e,n,t){var r=t(46095),a=t(46417);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},34725:function(e,n,t){var r=t(53249),a=t(28170),s=t(64164),i=t(11236),o=(0,r.Z)({createStyledComponent:(0,s.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,a.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,i.Z)({props:e,name:"MuiContainer"})}});n.Z=o},25160:function(e,n,t){var r=(0,t(53249).Z)();n.Z=r}}]);