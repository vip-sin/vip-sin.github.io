(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[101],{10498:function(e,t,r){"use strict";r.d(t,{C:function(){return s}});var n=r(47605),a=r(46417),s=function(e){var t=e.msg;return null!==t&&void 0!==t&&t.length?(0,a.jsx)(n.Z,{variant:"subtitle2",sx:{color:"red"},children:t}):(0,a.jsx)(a.Fragment,{})}},16176:function(e,t,r){"use strict";r.d(t,{IZ:function(){return v},YA:function(){return w},dU:function(){return g},dX:function(){return f},f:function(){return l},gJ:function(){return d},gS:function(){return h},n3:function(){return p},v_:function(){return m}});var n=r(74165),a=r(15861),s=r(80571),u=r(8908),o=r(97729),i=JSON.parse(sessionStorage.getItem("logInUserData")),c=s.g.injectEndpoints({endpoints:function(e){return{validatePhoneNumber:e.mutation({query:function(e){return{url:"/backendapi/otp/newuser/send",method:"POST",body:e}}}),forgotPWD:e.mutation({query:function(e){return{url:"/backendapi/user/forget",method:"POST",body:e}}}),validateOTP:e.mutation({query:function(e){return{url:"/backendapi/otp/verify",method:"POST",body:{otp:e.otp,key:e.key}}}}),sendOTP:e.mutation({query:function(e,t){return{url:"/backendapi/otp/send",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,a.Z)((0,n.Z)().mark((function r(){var a,s,o,i;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.dispatch,s=t.queryFulfilled,o=e.recoveryId,r.prev=2,r.next=5,s;case 5:i=r.sent,o&&a((0,u.IE)({recoveryId:o,recoveryOtp:i.data})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),a({type:"ERROR_ALL_ASSET_DATA",data:r.t0});case 12:return r.prev=12,a({type:"GET_ALL_ASSET_DATA_LOADING",data:!1}),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[2,9,12,15]])})))()}}),validateREcoveryID:e.mutation({query:function(e){return{url:"/backendapi/user/recovercheck",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,a.Z)((0,n.Z)().mark((function r(){var a,s,u,o;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.dispatch,s=t.queryFulfilled,u=e.recoveryId,r.prev=2,r.next=5,s;case 5:o=r.sent,console.log("response",o),a(c.endpoints.sendOTP(u)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),a({type:"ERROR_ALL_ASSET_DATA",data:r.t0});case 13:return r.prev=13,a({type:"GET_ALL_ASSET_DATA_LOADING",data:!1}),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[2,10,13,16]])})))()},invalidatesTags:function(e,t,r){return[{type:"Post",id:r.id}]}}),subscribe:e.mutation({query:function(e){return{url:"/backendapi/newsletter/subscribe",method:"POST",body:{token:localStorage.getItem("fcmtoken"),topic:e}}},invalidatesTags:function(e,t,r){return[{type:"Post",id:r.id}]}}),saveUser:e.mutation({query:function(e){return{url:"/backendapi/user/saveuser",method:"POST",body:e}}}),login:e.mutation({query:function(e){return{url:"/backendapi/user/login",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,a.Z)((0,n.Z)().mark((function e(){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,a=t.queryFulfilled,e.prev=1,e.next=4,a;case 4:null!==(s=e.sent)&&void 0!==s&&s.data&&r((0,u.Dj)(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:"ERROR_ALL_ASSET_DATA",data:e.t0});case 11:return e.prev=11,r({type:"GET_ALL_ASSET_DATA_LOADING",data:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}}),dropdown:e.mutation({query:function(e){return{url:"/backendapi/dropdowns"}},onQueryStarted:function(e,t){return(0,a.Z)((0,n.Z)().mark((function e(){var r,a,s,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,a=t.queryFulfilled,e.prev=1,e.next=4,a;case 4:null!==(s=e.sent)&&void 0!==s&&s.data&&sessionStorage.setItem("dropdowns",JSON.stringify(null===(u=s.data)||void 0===u?void 0:u[0])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:"ERROR_ALL_ASSET_DATA",data:e.t0});case 11:return e.prev=11,r({type:"GET_ALL_ASSET_DATA_LOADING",data:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}}),getUserData:e.mutation({query:function(e){return{url:"/backendapi/user/get",method:"POST"}},onQueryStarted:function(e,t){return(0,a.Z)((0,n.Z)().mark((function e(){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,a=t.queryFulfilled,e.prev=1,e.next=4,a;case 4:null!==(s=e.sent)&&void 0!==s&&s.data&&console.log("first dop",s.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:"ERROR_ALL_ASSET_DATA",data:e.t0});case 11:return e.prev=11,r({type:"GET_ALL_ASSET_DATA_LOADING",data:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}}),updateSecrets:e.mutation({query:function(e){return{url:"/backendapi/user/update/secrets",method:"POST",body:{secrets:e,_id:i._id}}},onQueryStarted:function(e,t){return(0,a.Z)((0,n.Z)().mark((function e(){var r,a,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,a=t.queryFulfilled,e.prev=1,e.next=4,a;case 4:null!==(s=e.sent)&&void 0!==s&&s.data&&r((0,u.Dj)(null===(o=s.data)||void 0===o?void 0:o[0])),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[1,8,10,12]])})))()}}),getDocuments:e.mutation({query:function(e){var t=e.user;e.token;return{url:"/backendapi/document/".concat(null===t||void 0===t?void 0:t._id)}},onQueryStarted:function(e,t){return(0,a.Z)((0,n.Z)().mark((function e(){var r,a,s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,a=t.queryFulfilled,e.prev=1,e.next=4,a;case 4:s=e.sent,i=0;case 6:if(!(i<s.length)){e.next=20;break}return e.next=9,(0,o.Y)(s[i].desc);case 9:return s[i].desc=e.sent,s[i].id=i+1,e.next=13,(0,o.Y)(s[i].expiry);case 13:return s[i].expiry=e.sent,e.next=16,(0,o.Y)(s[i].alias);case 16:s[i].alias=e.sent;case 17:i+=1,e.next=6;break;case 20:r((0,u.wF)(s)),e.next=25;break;case 23:e.prev=23,e.t0=e.catch(1);case 25:return e.prev=25,e.finish(25);case 27:case"end":return e.stop()}}),e,null,[[1,23,25,27]])})))()}})}}}),d=(c.useValidatePhoneNumberMutation,c.useForgotPWDMutation),l=c.useValidateOTPMutation,p=c.useSendOTPMutation,f=c.useValidateREcoveryIDMutation,h=c.useGetUserDataMutation,v=c.useUpdateSecretsMutation,g=(c.useSubscribeMutation,c.useSaveUserMutation),w=c.useLoginMutation,m=c.useDropdownMutation;c.useGetDocumentsMutation},97729:function(e,t,r){"use strict";r.d(t,{Gf:function(){return c},Y:function(){return d},c_:function(){return o},zY:function(){return i}});var n=r(74165),a=r(15861),s=r(42612),u=r.n(s),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",u().md.sha512.create().update(t).digest().toHex());case 4:e.prev=4,e.t0=e.catch(0),console.log("Error while hashing: ",e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t||sessionStorage.getItem("secretkey"),e.next=4,o(r);case 4:return s=e.sent,e.next=7,c(a,s);case 7:return u=e.sent,e.abrupt("return",u);case 11:e.prev=11,e.t0=e.catch(0),console.log("Error while hashing: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,o,i,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===t||void 0===t?void 0:t.length)>0)){e.next=19;break}return a=sessionStorage.getItem("secretkey"),s=null!==r&&void 0!==r?r:a,o=u().random.getBytesSync(32),i=u().cipher.createCipher("AES-GCM",s),e.prev=5,i.start({iv:o,additionalData:"binary-encoded string"}),i.update(u().util.createBuffer(t)),i.finish(),c={iv:o,tag:i.mode.tag.toHex(),output:i.output.toHex()},e.abrupt("return",JSON.stringify(c));case 13:return e.prev=13,e.t0=e.catch(5),console.log("Error while encrypting data: ",e.t0),e.abrupt("return","");case 17:e.next=20;break;case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,o,i,c,d,l,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:a=sessionStorage.getItem("secretkey"),s=null!==r&&void 0!==r?r:a;try{o=JSON.parse(t)}catch(n){console.log(n)}if(i=o.iv,c=u().util.hexToBytes(o.tag),!(d=o.output)){e.next=28;break}if(e.prev=9,(l=u().cipher.createDecipher("AES-GCM",s)).start({iv:i,additionalData:"binary-encoded string",tag:c}),p=u().util.hexToBytes(d),l.update(u().util.createBuffer(p)),!l.finish()){e.next=19;break}return e.abrupt("return",l.output.toString());case 19:console.log("Error authentication tag didn't match ");case 20:e.next=26;break;case 22:return e.prev=22,e.t0=e.catch(9),console.log("Error while decrypting data: ",e.t0),e.abrupt("return","");case 26:e.next=29;break;case 28:return e.abrupt("return",t);case 29:case"end":return e.stop()}}),e,null,[[9,22]])})));return function(t,r){return e.apply(this,arguments)}}()},35271:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(74165),a=r(15861),s=r(1413),u=r(29439),o=r(47313),i=r(19641),c=r(9506),d=r(71003),l=r(97729),p=r(54750),f=r(46417),h=(0,p.Z)((0,f.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle"),v=r(8586),g=r(16176),w=r(10498),m=r(20938),y=function(e){var t=(0,g.gJ)(),r=(0,u.Z)(t,1)[0],p={specialChars:/(?=.*?[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,digit:/[0-9]/,lowercase:/[a-z]/,uppercase:/[A-Z]/,noWhitespace:/^\S*$/},y="Invalid input",x="Password and confirm password did not match.",b="Password should be less than 64 characters",S="Are Madatory fields blank?",k=(0,o.useState)(!1),Z=(0,u.Z)(k,2),P=Z[0],A=Z[1],T=(0,o.useState)(""),_=(0,u.Z)(T,2),j=_[0],L=_[1],C=(0,o.useState)(""),D=(0,u.Z)(C,2),E=D[0],O=D[1],q=(0,o.useState)(!1),I=(0,u.Z)(q,2),M=I[0],R=I[1],N=(0,o.useState)({}),G=(0,u.Z)(N,2),F=G[0],W=G[1],B=(0,o.useState)(""),U=(0,u.Z)(B,2),z=U[0],Q=U[1],J=function(e){var t=e.show;return(0,f.jsx)("span",{style:{marginRight:"5px"},children:t?(0,f.jsx)(h,{size:"15",color:"green"}):(0,f.jsx)(v.Z,{size:"15",color:"red"})})},Y=function(){return(0,f.jsx)(i.ZP,{item:!0,children:(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(J,{show:F.minimumLength}),(0,f.jsx)("span",{style:{color:F.minimumLength?"grey":"red"},children:"Minimum 8 characters"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(J,{show:F.uppercase}),(0,f.jsx)("span",{style:{color:F.uppercase?"grey":"red"},children:"Upper case alphabet"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(J,{show:F.lowercase}),(0,f.jsx)("span",{style:{color:F.lowercase?"grey":"red"},children:"Lower case alphabet"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(J,{show:F.digit}),(0,f.jsx)("span",{style:{color:F.digit?"grey":"red"},children:"Numeric"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(J,{show:F.noWhitespace}),(0,f.jsx)("span",{style:{color:F.noWhitespace?"grey":"red"},children:"No spaces"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(J,{show:F.specialChars}),(0,f.jsx)("span",{style:{color:F.specialChars?"grey":"red"},children:"Special character"})]})]})})},H=function(e,t){e&&(t.minimumLength&&t.specialChars&&t.digit&&t.lowercase&&t.uppercase&&t.noWhitespace?t.newPassword===y&&delete t.newPassword:t.newPassword=y)},V=function(){var t=(0,s.Z)({},F);e.fromChangePassword&&function(e,t){0===e.length?(t.currentPassword=S,A(S)):(A(""),delete t.currentPassword)}(z,t),function(e,t){e.length>64?(t.newPassword=b,A(b)):0===e.length?(t.newPassword=S,A(S)):(delete t.newPassword,A(""))}(j,t),H(j,t),function(e,t){0===e.length?(t.confirmNewPassword=S,A(S)):j!==e?(t.confirmNewPassword=x,A(x)):(A(""),delete t.confirmNewPassword)}(E,t),W(t);var r=Object.values(t);return 6===r.length&&r.every((function(e){return!0===e}))},$=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a){var s,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!V()){t.next=15;break}if(!e.fromChangePassword){t.next=7;break}e.changePassword({currentPass:z,newPass:j}),t.next=13;break;case 7:return t.next=9,(0,l.c_)(j);case 9:s=t.sent,u={id:e.userId,password:s,secrets:e.changePass},console.log("body",u),r(u);case 13:t.next=16;break;case 15:console.log("formErrors",F);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=function(t){var r,n;t.preventDefault();var a=null===(r=t.target)||void 0===r?void 0:r.name,u=null===(n=t.target)||void 0===n?void 0:n.value,o=(0,s.Z)({},F);"newPassword"===a?(R(!0),function(e,t){e.length>=8?t.minimumLength=!0:delete t.minimumLength,p.specialChars.test(e)?t.specialChars=!0:delete t.specialChars,p.digit.test(e)?t.digit=!0:delete t.digit,p.lowercase.test(e)?t.lowercase=!0:delete t.lowercase,p.uppercase.test(e)?t.uppercase=!0:delete t.uppercase,p.noWhitespace.test(e)?t.noWhitespace=!0:delete t.noWhitespace}(u,o),H(u,o)):R(!1),"newPassword"===a?e.signup?e.setpassword(u):L(u):e.signup?e.setconfirmPass(u):O(u),W(o)};return(0,f.jsxs)(c.Z,{type:"form",children:[e.fromChangePassword&&(0,f.jsx)(m.nv,{required:!0,type:"password",label:"Current Password",value:z,name:"currentPassword",onChange:function(e){return Q(e.target.value)},onBlur:function(e){return Q(e.target.value)},onFocus:function(e){Q(e.target.value)},id:"password"}),(0,f.jsx)(m.nv,{required:!0,type:"password",id:"password",inputProps:{autoComplete:"new-password",form:{autoComplete:"off"}},value:e.signup?e.password:j,name:"newPassword",label:"New Password",onChange:X,onBlur:X,onFocus:X}),(0,f.jsx)(m.nv,{required:!0,type:"password",id:"confirm-password",inputProps:{autoComplete:"new-password",form:{autoComplete:"off"}},value:e.signup?e.confirmPass:E,name:"confirmPassword",label:"Confirm Password",onChange:X,onBlur:X,onFocus:X}),M&&(0,f.jsx)(c.Z,{children:(0,f.jsx)(Y,{})}),P&&(0,f.jsx)(w.C,{msg:P}),e.error&&(0,f.jsx)(w.C,{msg:e.error}),!e.signup&&(0,f.jsx)(d.Z,{variant:"contained",sx:{mt:3,mb:2},type:"submit",fullWidth:!0,onClick:$,children:"Change"})]})}},8586:function(e,t,r){"use strict";var n=r(54750),a=r(46417);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},25819:function(){}}]);