(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[22],{513:function(e,t,n){"use strict";var a=n(0),l=n.n(a),o=n(507),r=n(494),c=n(695),i=n(107),u=n(16),m=n(557);t.a=Object(u.b)(null,(function(e){return{logout:function(){return e((function(e){e({type:"LOGOUT_WITH_JWT",payload:{}}),m.a.push("/pages/login")}))}}}))((function(e){var t=e.modalMessage,n=e.handleConfirm,a=e.isOpen,u=e.closeModal,m=e.confirmText,s=void 0===m?"Delete":m,d=e.cancelText,p=void 0===d?"Cancel":d,f=e.warning,E=void 0===f?"":f,b=t||"Are you sure you want to delete this record?";return l.a.createElement("div",null,l.a.createElement(o.a,{isOpen:!!a,className:"modal-dialog-centered",backdrop:"static"},l.a.createElement(r.a,null," ",b),l.a.createElement(c.a,null,!E&&l.a.createElement(i.a,{color:"primary",onClick:u,className:"button-label"},p),l.a.createElement(i.a,{color:"danger",onClick:n,className:"button-label"},E?"Ok":s))))}))},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(34),l=Object(a.a)({forceRefresh:!0})},591:function(e,t,n){},734:function(e,t,n){"use strict";n.r(t);var a=n(7),l=n(0),o=n.n(l),r=n(30),c=n(49),i=n(81),u=function(){return o.a.createElement(i.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,theme:"dark"===sessionStorage.getItem("theme")?"dark":"light",draggable:!0,pauseOnHover:!0})},m=n(155),s=n(16),d=n(150),p=n(238),f=["component","fullLayout"],E=Object(s.b)((function(e){return{user:e.auth.login.userRole}}))((function(e){var t=e.component,n=e.fullLayout,a=Object(m.a)(e,f);return o.a.createElement(c.b,Object.assign({},a,{render:function(e){var a=sessionStorage.getItem("logInUserData"),r=e.location,i=(r=void 0===r?{}:r).pathname,u=void 0===i?"":i,m=(null===u||void 0===u?void 0:u.includes("home"))||(null===u||void 0===u?void 0:u.includes("will"))||(null===u||void 0===u?void 0:u.includes("caller"))||(null===u||void 0===u?void 0:u.includes("privacy"))||(null===u||void 0===u?void 0:u.includes("license"))||(null===u||void 0===u?void 0:u.includes("emailconfirmation"))||(null===u||void 0===u?void 0:u.includes("terms_conditions"))||(null===u||void 0===u?void 0:u.includes("docview"))||(null===u||void 0===u?void 0:u.includes("postmanview"));return null!==a||m?o.a.createElement(p.a.Consumer,null,(function(a){var r=!0===n?a.fullLayout:a.VerticalLayout;return o.a.createElement(r,Object.assign({},e,{permission:e.user}),o.a.createElement(l.Suspense,{fallback:o.a.createElement("div",{style:{height:"100vh",width:"100%",alignItems:"center",position:"absolute",top:0,left:0,display:"flex",justifyContent:"center"}},o.a.createElement(d.a,null))},o.a.createElement(t,e)))})):o.a.createElement(c.a,{to:"/home"})}}))})),b=Object(l.lazy)((function(){return n.e(36).then(n.bind(null,697))})),h=Object(l.lazy)((function(){return n.e(35).then(n.bind(null,698))})),y=Object(l.lazy)((function(){return Promise.all([n.e(14),n.e(31)]).then(n.bind(null,733))})),v=Object(l.lazy)((function(){return n.e(37).then(n.bind(null,709))})),g=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(33)]).then(n.bind(null,739))})),O=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(3),n.e(25)]).then(n.bind(null,710))})),w=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(11)]).then(n.bind(null,740))})),j=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(6),n.e(19)]).then(n.bind(null,737))})),k=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(17)]).then(n.bind(null,741))})),z=Object(l.lazy)((function(){return Promise.all([n.e(13),n.e(23)]).then(n.bind(null,735))})),C=Object(l.lazy)((function(){return n.e(27).then(n.bind(null,722))})),I=Object(l.lazy)((function(){return n.e(26).then(n.bind(null,723))})),x=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,724))})),L=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(6),n.e(16),n.e(18)]).then(n.bind(null,736))})),P=Object(l.lazy)((function(){return n.e(28).then(n.bind(null,727))})),N=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(34)]).then(n.bind(null,742))})),S=Object(l.lazy)((function(){return n.e(12).then(n.bind(null,732))})),T=Object(l.lazy)((function(){return n.e(29).then(n.bind(null,590))})),U=Object(l.lazy)((function(){return n.e(24).then(n.bind(null,731))})),A=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(32)]).then(n.bind(null,743))})),B=Object(l.lazy)((function(){return n.e(30).then(n.bind(null,729))})),M=Object(l.lazy)((function(){return Promise.all([n.e(10),n.e(15)]).then(n.bind(null,730))})),R=n(154),_=function(e){return o.a.useEffect((function(){R.a.pageview(window.location.pathname+window.location.search)}),[e]),o.a.createElement(r.a,null,o.a.createElement(u,null),o.a.createElement(c.d,null,o.a.createElement(E,{path:"/terms_conditions",component:function(e){return o.a.createElement(v,e)}}),o.a.createElement(E,{path:"/license",component:function(e){return o.a.createElement(h,e)}}),o.a.createElement(E,{path:"/privacy",component:function(e){return o.a.createElement(b,e)}}),o.a.createElement(E,{exact:!0,path:"/dashboard",component:function(e){return o.a.createElement(g,e)}}),o.a.createElement(E,{path:"/nominee/list",component:function(e){return o.a.createElement(O,e)}}),o.a.createElement(E,{path:"/spends",component:function(e){return o.a.createElement(w,e)}}),o.a.createElement(E,{path:"/assets/add",component:function(e){return o.a.createElement(A,e)}}),o.a.createElement(E,{path:"/will",component:function(e){return o.a.createElement(B,e)}}),o.a.createElement(E,{path:"/vault/document",component:function(e){return o.a.createElement(j,e)}}),o.a.createElement(E,{path:"/caller",fullLayout:!0,component:function(e){return o.a.createElement(M,e)}}),o.a.createElement(E,{path:"/vault/password",component:function(e){return o.a.createElement(k,e)}}),o.a.createElement(E,{path:"/docview/:userkey",fullLayout:!0,component:function(e){return o.a.createElement(I,e)}}),o.a.createElement(E,{path:"/postmanview/:userkey",component:function(e){return o.a.createElement(P,e)},fullLayout:!0}),o.a.createElement(E,{path:"/emailconfirmation/:userkey",component:function(e){return o.a.createElement(C,e)},fullLayout:!0}),o.a.createElement(E,{path:"/diary",component:function(e){return o.a.createElement(z,e)}}),o.a.createElement(E,{path:"/diary/:filter",component:z}),o.a.createElement(E,{path:"/diary",exact:!0,component:function(){return o.a.createElement(c.a,{to:"/diary"})}}),o.a.createElement(E,{path:"/portfolio",component:function(e){return o.a.createElement(x,e)}}),o.a.createElement(E,{path:"/admin",component:function(e){return o.a.createElement(y,e)}}),o.a.createElement(E,{path:"/postman",component:function(e){return o.a.createElement(L,e)}}),o.a.createElement(E,{path:"/liability/add",component:function(e){return o.a.createElement(N,e)}}),o.a.createElement(E,{exact:!0,path:"/user/profile",component:function(e){return o.a.createElement(S,e)}}),o.a.createElement(E,{exact:!0,path:"/user/feed",component:function(e){return o.a.createElement(S,e)}}),o.a.createElement(E,{exact:!0,path:"/user/notify",component:function(e){return o.a.createElement(S,e)}}),o.a.createElement(E,{exact:!0,path:"/user/security",component:function(e){return o.a.createElement(S,e)}}),o.a.createElement(E,{exact:!0,path:"/user/upgrade",component:function(e){return o.a.createElement(S,e)}}),o.a.createElement(E,{path:"/pages/subscription",component:function(e){return o.a.createElement(T,e)},fullLayout:!0}),o.a.createElement(E,{path:"/home",component:function(e){return o.a.createElement(U,e)}}),o.a.createElement(E,{path:"/home/session",component:function(e){return o.a.createElement(U,e)}}),o.a.createElement(E,{path:"/",component:function(e){return o.a.createElement(U,e)}})))},D=n(107),W=n(692),J=["rippleColor","during","block"];D.a.Ripple=function(e){var t=e.rippleColor,n=e.during,a=e.block,l=Object(m.a)(e,J);return o.a.createElement(W.a,{color:t||"rgba(255, 255, 255, .5)",during:n,className:"".concat(a?"d-block":"")},o.a.createElement(D.a,l))};n(591),n(592);var F=n(25),G=n.n(F),H=n(237),Y=n(513),K=n(593),V=n.n(K),q=(n(594),n(12)),Q=function(){return Object(l.useEffect)((function(){var e=function(){window.pageYOffset>220?(document.getElementById("back-to-top").style.bottom="15px",document.getElementById("back-to-top").style.transition="0.25s linear"):document.getElementById("back-to-top").style.bottom="-60px"};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}})),o.a.createElement("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"back-to-top",id:"back-to-top"},o.a.createElement("img",{src:q.h,alt:"img"}))};t.default=function(){var e=Object(l.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)({}),i=Object(a.a)(c,2),u=i[0],m=i[1],s=Object(l.useState)(!1),d=Object(a.a)(s,2),p=d[0],f=d[1];G.a.defaults.baseURL="",G.a.interceptors.response.use((function(e){return e}),(function(e){})),o.a.useEffect((function(){V.a.init()}),[]),o.a.useEffect((function(){R.a.pageview(window.location.pathname+window.location.search)}));var E=function(){return o.a.createElement("div",{className:"bodyMe",style:{display:"block"}},o.a.createElement("div",{className:"updateAvailableContainer"},o.a.createElement("div",{className:"updateAvailable "},o.a.createElement("div",null,o.a.createElement("h5",{style:{color:"red"}},"New Update Avaialable!")),o.a.createElement("div",{className:"incomingCallButtons flex"},o.a.createElement(D.a.Ripple,{block:!0,color:"warning",className:"btn-block",onClick:function(){h()}},"Update Now")))))},b=function(e){console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyy"),m(e&&e.waiting),f(!0)},h=function(){u&&u.postMessage({type:"SKIP_WAITING"}),f(!1),window.location.reload()};o.a.useEffect((function(){H.a({onUpdate:b}),p&&h()}),[]);return o.a.createElement(o.a.Fragment,null,p&&o.a.createElement(E,null),n&&sessionStorage.getItem("logInUserData")&&o.a.createElement(Y.a,{modalMessage:"Your Session has expired, kindly login!!",handleConfirm:function(){sessionStorage.removeItem("logInUserData"),r(!1),window.location.href="/home/session",window.location.reload()},warning:!0,isOpen:n}),o.a.createElement(_,null),window.innerWidth>=500&&o.a.createElement(Q,null))}}}]);