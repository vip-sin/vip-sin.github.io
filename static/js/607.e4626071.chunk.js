"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[607],{55328:function(e,n,t){t.d(n,{OA:function(){return l},Y0:function(){return c},gl:function(){return d},li:function(){return p},sW:function(){return u}});var r=t(74165),a=t(15861),o=t(31881),s=t.n(o),i=t(97729),c=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"VALIDATING_MOBILE_NUMBER"}),n.next=3,s().post("/backendapi/otp/newuser/send",e).then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",n),e.next=3,(0,i.yD)(n.data.key,"asdsadsasa");case 3:a=e.sent,console.log("data",a),t({type:"VALIDATED_MOBILE_NUMBER",data:n.data});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){t({type:"INVALID_MOBILE_NUMBER",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},u=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"REQUEST_CHANGE_PASSWORD"}),n.next=3,s().post("/backendapi/user/forget",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){"ok"===e.data&&t({type:"RECEIVE_CHANGE_PASSWORD"})})).catch((function(e){t({type:"FAILURE_CHANGE_PASSWORD"})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},d=function(e){var n=e.otp,t=e.key;return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"VALIDATING_OTP"}),e.next=3,s().post("/backendapi/otp/verify",{otp:n,key:t}).then((function(e){a({type:"VALIDATED_OTP",data:e.data})})).catch((function(e){a({type:"INVALID_OTP",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},l=function(e,n){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"VALIDATING_OTP"}),t.next=3,s().post("/backendapi/otp/send",e).then((function(e){n&&a({type:"RECEIVE_RECOVERY_ID",data:{recoveryId:n,recoveryOtp:e.data}}),a({type:"VALIDATED_OTP",data:e.data})})).catch((function(e){a({type:"INVALID_OTP",data:null===e||void 0===e?void 0:e.response}),n&&a({type:"FAILURE_RECOVERY_ID",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"REQUEST_RECOVERY_ID"}),n.next=3,s().post("/backendapi/user/recovercheck",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(n){var r=null===n||void 0===n?void 0:n.data;t(r?l(e,r):{type:"FAILURE_RECOVERY_ID",data:"User Not Found"})})).catch((function(e){t({type:"FAILURE_RECOVERY_ID",data:null===e||void 0===e?void 0:e.response})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},49301:function(e,n,t){var r=t(1413),a=t(93433),o=t(74165),s=t(15861),i=t(29439),c=t(47313),u=t(71003),d=t(57775),l=t(51057),p=t(19641),h=t(47605),f=t(19536),v=t(35898),m=t(29917),w=t(86808),x=t(12613),g=t(86282),y=t(89717),Z=t(66135),j=t(46417),P=function(e){return new Promise((function(n){var t=document.createElement("script");t.src=e,document.body.appendChild(t),t.onload=function(){n(!0)},t.onerror=function(){n(!1)}}))};n.Z=(0,Z.$j)((function(e){var n=e.reducer.dataList,t=void 0===n?{}:n;return{orderDetails:null===t||void 0===t?void 0:t.orderDetails}}),(function(e){return{createOrder:function(n){return e(y.ST.endpoints.createOrder.initiate(n))}}}))((function(e){var n=e.toggleLoginModal,t=e.plan,y=e.setPlan,Z=e.defaultTiers,C=e.createOrder,k=e.orderDetails,E=sessionStorage.getItem("authtoken"),_=c.useState(Z),A=(0,i.Z)(_,2),I=A[0],S=A[1],b=c.useState(!1),L=(0,i.Z)(b,2),D=(L[0],L[1],"www.dev.lastarzi.com"===document.domain||"localhost"===document.domain),R=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t,r,a,s,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P("https://checkout.razorpay.com/v1/checkout.js");case 2:if(t=e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:if(r=n.amount,a=n.id,s=n.currency,t){e.next=9;break}return e.abrupt("return",alert("Loading Failed"));case 9:i={key:D?"rzp_test_cgSPFXNnKZx14s":"unavailable",amount:null===r||void 0===r?void 0:r.toString(),currency:s,name:"LastArzi",description:"Pay Dev",image:g.TR,order_id:a,callback_url:"https://eneqd3r9zrjok.x.pipedream.net/",handler:function(e){alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature)},prefill:{name:"Vipin Kumar",email:"vksforum@gmail.com",contact:"9458706129"},theme:{backGroundColor:"#20756D"},notes:{address:"LastArzi Corporate Office"}},new window.Razorpay(i).open();case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{C()}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.useEffect((function(){k&&R(k)}),[k]),(0,j.jsxs)(j.Fragment,{children:[!t&&(0,j.jsx)(h.Z,{component:"h2",variant:"h4",textAlign:"center",sx:{mt:10},children:"My Plans"}),(0,j.jsxs)(p.ZP,{container:!0,spacing:4,sx:{mt:6},justifyContent:"center",children:[I.map((function(e){return(0,j.jsx)(p.ZP,{item:!0,xs:12,sm:4,sx:(0,r.Z)({},E&&"Basic"===e.title&&{display:"none"}),children:(0,j.jsxs)(d.Z,{raised:!0,style:{boxShadow:" 0px 4px 25px 0px rgb(0 0 0 / 10%)"},children:[(0,j.jsx)(x.ll,{align:"center",title:e.title}),(0,j.jsx)(f.Z,{}),(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(v.Z,{direction:"column",spacing:1,sx:{mb:3},alignItems:"center",children:"0"!==e.annualPrice?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(h.Z,{variant:"h3",color:e.SelectedPrice===e.annualPrice?"text.secondary":"text.primary",children:["\u20b9",e.SelectedPrice===e.price?e.price:e.annualPrice]}),(0,j.jsx)(w.Z,{tier:e,handleChange:function(){return function(e){var n=(0,a.Z)(I);n.forEach((function(n){n.title===e.title&&(n.SelectedPrice===n.price?n.SelectedPrice=n.annualPrice:n.SelectedPrice=n.price)})),S(n)}(e)}})]}):(0,j.jsxs)(h.Z,{variant:"h3",children:["\u20b9",e.price]})}),(0,j.jsx)("ul",{children:e.description.map((function(e){return(0,j.jsx)(h.Z,{component:"li",align:"left",children:e},e)}))})]}),(0,j.jsx)(m.Z,{sx:{justifyContent:"center"},children:(0,j.jsx)(u.Z,{onClick:function(){return function(e){n("SignUp"),y(e)}(e)},variant:e.buttonVariant,children:e.buttonText})})]})},e.title)})),(0,j.jsx)(u.Z,{onClick:function(){O()},children:"RazorPay"})]})]})}))},35271:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(74165),a=t(15861),o=t(1413),s=t(29439),i=t(47313),c=t(66135),u=t(55328),d=t(19641),l=t(9506),p=t(71003),h=t(97729),f=t(39653),v=t(54750),m=t(46417),w=(0,v.Z)((0,m.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle"),x=t(8586);var g=(0,c.$j)((function(e){var n,t,r=e.reducer.auth,a=void 0===r?{}:r,o=null===a||void 0===a?void 0:a.phoneotp;return{validatedotp:null===o||void 0===o||null===(n=o.validatedotp)||void 0===n||null===(t=n.status)||void 0===t?void 0:t.toLowerCase(),validatingotp:null===o||void 0===o?void 0:o.validatingotp}}),{forgotpwd:u.sW})((function(e){var n={specialChars:/(?=.*?[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,digit:/[0-9]/,lowercase:/[a-z]/,uppercase:/[A-Z]/,noWhitespace:/^\S*$/},t="Invalid input",c="Password and confirm password did not match.",u="Password should be less than 64 characters",v="Are Madatory fields blank?",g=(0,i.useState)(!1),y=(0,s.Z)(g,2),Z=y[0],j=y[1],P=(0,i.useState)(""),C=(0,s.Z)(P,2),k=C[0],E=C[1],_=(0,i.useState)(""),A=(0,s.Z)(_,2),I=A[0],S=A[1],b=(0,i.useState)(!1),L=(0,s.Z)(b,2),D=L[0],R=L[1],O=(0,i.useState)({}),z=(0,s.Z)(O,2),N=z[0],T=z[1],V=(0,i.useState)(""),W=(0,s.Z)(V,2),B=W[0],F=W[1],M=function(e){var n=e.show;return(0,m.jsx)("span",{style:{marginRight:"5px"},children:n?(0,m.jsx)(w,{size:"15",color:"green"}):(0,m.jsx)(x.Z,{size:"15",color:"red"})})},U=function(){return(0,m.jsx)(d.ZP,{item:!0,children:(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(M,{show:N.minimumLength}),(0,m.jsx)("span",{style:{color:N.minimumLength?"grey":"red"},children:"Minimum 8 characters"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(M,{show:N.uppercase}),(0,m.jsx)("span",{style:{color:N.uppercase?"grey":"red"},children:"Upper case alphabet"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(M,{show:N.lowercase}),(0,m.jsx)("span",{style:{color:N.lowercase?"grey":"red"},children:"Lower case alphabet"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(M,{show:N.digit}),(0,m.jsx)("span",{style:{color:N.digit?"grey":"red"},children:"Numeric"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(M,{show:N.noWhitespace}),(0,m.jsx)("span",{style:{color:N.noWhitespace?"grey":"red"},children:"No spaces"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(M,{show:N.specialChars}),(0,m.jsx)("span",{style:{color:N.specialChars?"grey":"red"},children:"Special character"})]})]})})},G=function(e,n){e&&(n.minimumLength&&n.specialChars&&n.digit&&n.lowercase&&n.uppercase&&n.noWhitespace?n.newPassword===t&&delete n.newPassword:n.newPassword=t)},Y=function(){var n=(0,o.Z)({},N);e.fromChangePassword&&function(e,n){0===e.length?(n.currentPassword=v,j(v)):(j(""),delete n.currentPassword)}(B,n),function(e,n){e.length>64?(n.newPassword=u,j(u)):0===e.length?(n.newPassword=v,j(v)):(delete n.newPassword,j(""))}(k,n),G(k,n),function(e,n){0===e.length?(n.confirmNewPassword=v,j(v)):k!==e?(n.confirmNewPassword=c,j(c)):(j(""),delete n.confirmNewPassword)}(I,n),T(n);var t=Object.values(n);return 6===t.length&&t.every((function(e){return!0===e}))},q=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),!Y()){n.next=15;break}if(!e.fromChangePassword){n.next=7;break}e.changePassword({currentPass:B,newPass:k}),n.next=13;break;case 7:return n.next=9,(0,h.c_)(k);case 9:a=n.sent,o={id:e.userId,password:a,secrets:e.changePass},console.log("body",o),e.forgotpwd(o);case 13:n.next=16;break;case 15:console.log("formErrors",N);case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),$=function(t){var r,a;t.preventDefault();var s=null===(r=t.target)||void 0===r?void 0:r.name,i=null===(a=t.target)||void 0===a?void 0:a.value,c=(0,o.Z)({},N);"newPassword"===s?(R(!0),function(e,t){e.length>=8?t.minimumLength=!0:delete t.minimumLength,n.specialChars.test(e)?t.specialChars=!0:delete t.specialChars,n.digit.test(e)?t.digit=!0:delete t.digit,n.lowercase.test(e)?t.lowercase=!0:delete t.lowercase,n.uppercase.test(e)?t.uppercase=!0:delete t.uppercase,n.noWhitespace.test(e)?t.noWhitespace=!0:delete t.noWhitespace}(i,c),G(i,c)):R(!1),"newPassword"===s?e.signup?e.setpassword(i):E(i):e.signup?e.setconfirmPass(i):S(i),T(c)};return(0,m.jsxs)(l.Z,{type:"form",children:[e.fromChangePassword&&(0,m.jsx)(f.Z,{margin:"normal",required:!0,type:"password",value:B,placeholder:"Current Password",name:"currentPassword",onChange:function(e){return F(e.target.value)},onBlur:function(e){return F(e.target.value)},onFocus:function(e){F(e.target.value)},id:"password"}),(0,m.jsx)(f.Z,{margin:"normal",required:!0,fullWidth:!0,type:"password",inputProps:{autoComplete:"new-password",form:{autoComplete:"off"}},value:e.signup?e.password:k,placeholder:"New Password",name:"newPassword",onChange:$,onBlur:$,onFocus:$}),(0,m.jsx)(f.Z,{margin:"normal",required:!0,fullWidth:!0,type:"password",inputProps:{autoComplete:"new-password",form:{autoComplete:"off"}},value:e.signup?e.confirmPass:I,placeholder:"Confirm Password",name:"confirmPassword",onChange:$,onBlur:$,onFocus:$}),D&&(0,m.jsx)(l.Z,{children:(0,m.jsx)(U,{})}),Z&&(0,m.jsx)("div",{style:{color:"red",textAlign:"center"},children:Z}),e.error&&(0,m.jsx)("div",{style:{color:"red",textAlign:"center"},children:e.error}),!e.signup&&(0,m.jsx)(p.Z,{variant:"contained",sx:{mt:3,mb:2},type:"submit",fullWidth:!0,onClick:q,children:"Change"})]})}))},8586:function(e,n,t){var r=t(54750),a=t(46417);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},25160:function(e,n,t){var r=(0,t(53249).Z)();n.Z=r}}]);