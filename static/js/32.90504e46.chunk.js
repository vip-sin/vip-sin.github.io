(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[32],{745:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(36),i=a(18),o=a.n(i),c=a(26),r=a(7),s=a(0),u=a.n(s),d=a(568),m=a(544),v=a.n(m),b=a(518),f=a(468),p=a(512),h=a(525),g=a(526),E=a(505),O=a(304),y=a(110),j=a(148),x=a(68),N=a(108),k=a(469),w=a(514),A=a(516),S=a(25),C=a.n(S),F=a(8),D=a.n(F),B=a(16),I=a(56),T=a(730),z=a(78),L=a(79),R=a(531),P=a(535),_=a(12),U=a(510),J=a(471),M=a(463),V=a(464),H=a(626),q=a(533),K=a(532),W=a(546),G=a.n(W),Q=a(149),X=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0}],Y=function(e){var t=e.modal,a=e.fname,n=e.ftype,l=(e.loading,e.addfield),i=e.messages,o=e.setfname,c=e.setftype,r=e.assetType,s=e.toggleModal,d=e.colourOptions2,m=e.selectCustomRef,v=e.clearCustomField;return u.a.createElement(J.a,{isOpen:t,toggle:s,centered:!0},u.a.createElement(M.a,{toggle:s},"Add Custom Field"),u.a.createElement(V.a,null,u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(x.a,{name:"Email",disabled:""===r,id:"EmailMulti",value:a,placeholder:"Enter Field Name",onChange:function(e){o(e.target.value)},className:"input-label placeholder"}),u.a.createElement(j.a,{className:_.c?"dark-label":"light-label"},"Enter Field Name")),u.a.createElement(y.a,{className:"form-label-group",disabled:void 0===r},u.a.createElement(I.a,{className:"React",ref:m,disabled:void 0===r,classNamePrefix:"select",isClearable:!0,options:d,placeholder:"Field Type...",onChange:function(e){return c(e?e.value:"")}}),u.a.createElement(j.a,null,"Field Type")),u.a.createElement(y.a,{className:"form-label-group mb-0",style:{textAlign:"right"}},u.a.createElement(N.a.Ripple,{type:"button",className:"button-label btn btn-secondary",disabled:void 0===r,onClick:function(e){v()}},(null===i||void 0===i?void 0:i.resetButton)?null===i||void 0===i?void 0:i.resetButton:"Reset"),u.a.createElement(N.a.Ripple,{disabled:""===a||""===n,type:"button",className:"button-label",color:"warning",onClick:function(e){return l(e)}},(null===i||void 0===i?void 0:i.submitButton)?null===i||void 0===i?void 0:i.submitButton:"Add"))))},Z=function(e,t,a,n,l,i,o){var c=[];(null===o||void 0===o?void 0:o.length)&&o.forEach((function(i,o){if(i.id){var r,s,d="";(null===i||void 0===i||null===(r=i.nominees)||void 0===r?void 0:r.length)&&i.nominees.forEach((function(t,a){var n=e.data.filter((function(e){return e._id===t.id}));n.length&&(a===i.nominees.length-1?d+=n[0].name:d="".concat(d+n[0].name,", "))}));var m=u.a.createElement("div",null,u.a.createElement(b.a,null,null===i||void 0===i||null===(s=i.assetDetails)||void 0===s?void 0:s.map((function(e,a){if(""!==e.val){var n,l=e.val;if("File"===e.type){var i=e.val.split("#~#");l=u.a.createElement("u",null,u.a.createElement("span",{style:{color:"blue"},onClick:function(){t(i[2])}},i[0]))}return u.a.createElement(f.a,{md:"5",sm:"12",key:a+e.key},u.a.createElement(H.a,null,u.a.createElement("span",{className:"font-weight-bold upper-text ".concat(_.c?"upper-text-dark":"upper-text")},e.key&&(null===(n=e.key.split("*"))||void 0===n?void 0:n[0])," :")," ",u.a.createElement("span",{className:"".concat(_.c?"lower-text-dark":"lower-text")},"Date"===e.type?Object(Q.b)(l):l)))}return""})),u.a.createElement(f.a,{md:"5",sm:"12"},u.a.createElement(H.a,null,u.a.createElement("span",{className:"font-weight-bold upper-text ".concat(_.c?"upper-text-dark":"upper-text")},"Nominees :")," ",u.a.createElement("span",{className:"".concat(_.c?"lower-text-dark":"lower-text")},d))),u.a.createElement(f.a,{md:"2",sm:"12"},u.a.createElement(H.a,null,u.a.createElement("b",null,u.a.createElement(q.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){a(i)}})),u.a.createElement("b",null,u.a.createElement(K.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){n(i.id),l(!0)}})))))),v={id:o+1,title:i.assetType,content:m};c.push(v)}})),i(null===c||void 0===c?void 0:c.reverse())},$=function(e){var t=e.prviewmodal,a=e.setprviewmodal,n=e.loading,l=e.blobUrl;return u.a.createElement(G.a,null,u.a.createElement(J.a,{isOpen:t,toggle:function(){a(!t)},centered:!0,size:"lg"},u.a.createElement(M.a,{toggle:function(){a(!t)},cssModule:{"modal-title":"w-100 text-center"}},u.a.createElement(b.a,null,u.a.createElement(f.a,{style:{color:"var(--warning)",fontSize:"1.45rem",fontWeight:"bold",letterSpacing:"1px"}},"Preview Asset Attachment"))),u.a.createElement(V.a,{className:"justify-content-center"},n&&u.a.createElement(k.a,{style:{marginLeft:"48%"},color:"warning",size:"lg"}),!n&&u.a.createElement("div",null,u.a.createElement("iframe",{style:{height:"400px",width:"100%"},className:"myiframe",title:"Aaq",src:"".concat(l,"#zoom=200")})))))},ee=a(17);a(511),a(305),a(515),a(306),t.default=Object(B.b)((function(e){var t,a,n=null===e||void 0===e?void 0:e.customizer,l=n.customizer,i=n.dataList;return{dataList:i,messages:null===l||void 0===l||null===(t=l.language)||void 0===t?void 0:t.Dashboard,assetListFromAPI:null!==(a=null===i||void 0===i?void 0:i.assetListFromAPI)&&void 0!==a?a:[],listLoading:null===i||void 0===i?void 0:i.totalRecordsLoading}}),(function(e){return{getData:function(t){return e(Object(U.g)(t))},addData:function(t){return e(Object(U.a)(t))},callAssetAPI:function(t){return e(Object(U.b)(t))}}}))((function(e){var t=u.a.createRef(),a=u.a.createRef(),i=u.a.createRef(),m=e.messages,S=e.thumbView,F=e.getData,B=e.listLoading,U=e.parsedFilter,J=e.assetListFromAPI,M=e.callAssetAPI,V=e.dataList,H=JSON.parse(sessionStorage.getItem("dropdowns")).assetOption,q=(null===m||void 0===m?void 0:m.assetOption)?null===m||void 0===m?void 0:m.assetOption:H,K=Object.keys(H).map((function(e){var t,a;return{value:e,label:(null===m||void 0===m||null===(t=m.colorOption)||void 0===t?void 0:t[e])?null===m||void 0===m||null===(a=m.colorOption)||void 0===a?void 0:a[e]:e,color:"#00B8D9",isFixed:!0}})),W=Object(s.useState)(""),G=Object(r.a)(W,2),te=G[0],ae=G[1],ne=Object(s.useState)(null),le=Object(r.a)(ne,2),ie=le[0],oe=le[1],ce=Object(s.useState)(!1),re=Object(r.a)(ce,2),se=re[0],ue=re[1],de=Object(s.useState)(!1),me=Object(r.a)(de,2),ve=me[0],be=me[1],fe=Object(s.useState)(!1),pe=Object(r.a)(fe,2),he=pe[0],ge=pe[1],Ee=Object(s.useState)(null),Oe=Object(r.a)(Ee,2),ye=Oe[0],je=Oe[1],xe=Object(s.useState)(""),Ne=Object(r.a)(xe,2),ke=Ne[0],we=Ne[1],Ae=Object(s.useState)(""),Se=Object(r.a)(Ae,2),Ce=Se[0],Fe=Se[1],De=Object(s.useState)([]),Be=Object(r.a)(De,2),Ie=Be[0],Te=Be[1],ze=Object(s.useState)(""),Le=Object(r.a)(ze,2),Re=Le[0],Pe=Le[1],_e=Object(s.useState)(""),Ue=Object(r.a)(_e,2),Je=Ue[0],Me=Ue[1],Ve=Object(s.useState)(""),He=Object(r.a)(Ve,2),qe=He[0],Ke=He[1],We=Object(s.useState)(!1),Ge=Object(r.a)(We,2),Qe=Ge[0],Xe=Ge[1],Ye=Object(s.useState)(null),Ze=Object(r.a)(Ye,2),$e=Ze[0],et=Ze[1],tt=Object(s.useState)(!1),at=Object(r.a)(tt,2),nt=at[0],lt=at[1],it=Object(s.useState)(!1),ot=Object(r.a)(it,2),ct=ot[0],rt=ot[1],st=Object(s.useState)(!1),ut=Object(r.a)(st,2),dt=ut[0],mt=ut[1],vt=Object(s.useState)([]),bt=Object(r.a)(vt,2),ft=bt[0],pt=bt[1],ht=Object(s.useState)(!1),gt=Object(r.a)(ht,2),Et=gt[0],Ot=gt[1],yt=Object(s.useState)(),jt=Object(r.a)(yt,2),xt=jt[0],Nt=jt[1],kt=Object(s.useState)([]),wt=Object(r.a)(kt,2),At=wt[0],St=wt[1],Ct=Object(s.useState)(!0),Ft=Object(r.a)(Ct,2),Dt=Ft[0],Bt=Ft[1],It=Object(s.useState)(!1),Tt=Object(r.a)(It,2),zt=Tt[0],Lt=Tt[1],Rt=Object(s.useState)(),Pt=Object(r.a)(Rt,2),_t=Pt[0],Ut=Pt[1],Jt=Object(s.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Mt=Object(r.a)(Jt,2),Vt=Mt[0],Ht=Mt[1],qt=JSON.parse(sessionStorage.getItem("logInUserData"));Object(s.useEffect)((function(){!B&&F(),M()}),[]),Object(s.useEffect)((function(){J&&Z(V,Wt,ca,je,ge,Te,J)}),[J]),Object(s.useEffect)((function(){var e;if(null===V||void 0===V||null===(e=V.data)||void 0===e?void 0:e.length){var t=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];V.data.forEach((function(e){var a={value:e._id,label:"".concat(e.name," - ").concat(e.relation),color:"#00B8D9",isFixed:!1};t.push(a)})),Ht(t)}}),[V]);var Kt=sessionStorage.getItem("authtoken"),Wt=function(e){mt(!0),rt(!0),C.a.get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(Kt)}}).then((function(e){var t,a=null===(t=e.data[0])||void 0===t?void 0:t.media,n=v.a.decompressFromUTF16(a),l=Object(ee.a)(n);if(l){for(var i,o=atob(null===l||void 0===l?void 0:l.split("base64,")[1]),c=new Array(o.length),r=0;r<o.length;r++)c[r]=o.charCodeAt(r);var s=new Uint8Array(c),u=new Blob([s],{type:null===(i=e.data[0])||void 0===i?void 0:i.type}),d=URL.createObjectURL(u);Ut(d),rt(!1)}else mt(!dt),z.b.warning("Something went wrong")}))},Gt=function(){Et&&oa(),Ot(!Et)},Qt=function(e,t){var a,n;"File"===e.type&&Nt(null===(n=t.target)||void 0===n?void 0:n.files[0]);var l=null!==(a=t.target.value)&&void 0!==a?a:"",i=At,o=At.findIndex((function(t){return t.key===e.key}));l.length<250&&(i[o].val=l,St(i),ue(!se),Xt())},Xt=function(){var e=!1;At.forEach((function(t){t.mandatory&&!t.val.trim()&&(e=!0)})),Bt(e)},Yt=function(t){Je&&!xt&&At.forEach((function(e){"Attachments"===e.key&&(e.val="")}));var a={assetType:qe,assetDetails:Object(_.F)(At),nominees:ft,id:te},n=J.findIndex((function(e){return e.id===te}));if(n>=0){J.splice(n,1),J.push(a);var l=[];ft.forEach((function(e){e.objectid=te})),ie.nominees.forEach((function(e){-1===ft.findIndex((function(t){return t.id===e.id}))&&(e.objectid=te,l.push(e))})),C.a.post("/backendapi/adddetails",{_id:null===qt||void 0===qt?void 0:qt._id,assets:Object(ee.b)(JSON.stringify(J)),nominees:ft,deletednominee:l},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){var a;Je&&(a=Je,C.a.delete("/backendapi/document/deletebyid/".concat(a),{headers:{Authorization:"Bearer ".concat(Kt)}}).then((function(e){Je&&xt?z.b.success("Attachment Replaced Successfully"):z.b.success("Attachment removed Successfully")}))),z.b.success("Updated successfully!"),e.getData(e.parsedFilter),M(),Lt(!1)})).catch((function(){Lt(!1)})),ia(),oa(),Bt(!0)}},Zt=function(e){Lt(!0),e.preventDefault(),Pe(!1);var t=At.findIndex((function(e){return"File"===e.type}));t>=0&&xt?""!==At[t].val?ea(xt).then((function(e){At[t].val="".concat(Object(ee.a)(e.data.alias),"#~#").concat(e.data._id,"#~#").concat(e.data.attachment[0]),St(At),Yt()})).catch((function(e){var t,a;Lt(!1),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&z.b.error(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.data)})):Yt():Yt()},$t=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))},ea=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,n,l,i,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],(n={}).user=null===qt||void 0===qt?void 0:qt._id,n.type="Asset",n.alias=Object(ee.b)(t.name),e.next=7,$t(t);case 7:return l=e.sent,i=Object(ee.b)(l),c=v.a.compressToUTF16(i),a.push({media:c,name:t.name,type:t.type,user:null===qt||void 0===qt?void 0:qt._id}),n.attachment=a,e.next=14,C.a.post("/backendapi/documents/add",n,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}});case 14:return r=e.sent,e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ta=function(e){Lt(!0),e.preventDefault();var t=At.findIndex((function(e){return"File"===e.type}));t>=0?""!==At[t].val?ea(xt).then((function(e){At[t].val="".concat(Object(ee.a)(e.data.alias),"#~#").concat(e.data._id,"#~#").concat(e.data.attachment[0]),St(At),aa()})).catch((function(e){var t,a;Lt(!1),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&z.b.error(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.data)})):aa():aa()},aa=function(){var t={assetType:qe,assetDetails:Object(_.F)(At),nominees:ft,id:Object(d.v4)()};ft.forEach((function(e){e.objectid=t.id})),J.push(t),C.a.post("/backendapi/adddetails",{_id:null===qt||void 0===qt?void 0:qt._id,assets:Object(ee.b)(JSON.stringify(J)),nominees:ft},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){z.b.success("Asset added successfully!"),ia(),e.getData(e.parsedFilter),M(),oa(),Bt(!0),Lt(!1)})).catch((function(){Lt(!1)}))},na=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Xe(e),!0===t&&(et(null),be(!0))},la=function(){var t=Object(c.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.addData(a);case 3:lt(!1),na(!1,!0),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),lt(!1),z.b.error("Failed to add Nominee! Please retry");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),ia=function(){J&&Z(V,Wt,ca,je,ge,Te,J),Ke(""),Me(""),St([]),Nt(""),pt([]),Re&&Bt(!0)},oa=function(){we(""),Fe(""),i.current&&i.current.select.clearValue()},ca=function(e){Bt(!0);var t=e.assetDetails,a=e.assetType,n=e.nominees;Ke(a),Pe(!0),ae(e.id),oe(e),St(t),pt(Object(l.a)(n))};return u.a.createElement(u.a.Fragment,null,u.a.createElement($,{prviewmodal:dt,setprviewmodal:mt,loading:ct,blobUrl:_t}),u.a.createElement("div",{className:"data-list ".concat(S?"thumb-view":"list-view")},u.a.createElement(w.a,{handleConfirm:function(){!function(t){var a=J.findIndex((function(e){return e.id===t})),n=[];a>=0&&(J[a].assetDetails.filter((function(e){return"File"===e.type})).forEach((function(e){var t=e.val.split("#~#");(null===t||void 0===t?void 0:t[1])&&C.a.delete("/backendapi/document/deletebyid/".concat(t[1]),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}})})),J[a].nominees.forEach((function(e){e.objectid=J[a].id,n.push(e)})),J.splice(a,1),C.a.post("/backendapi/adddetails",{_id:null===qt||void 0===qt?void 0:qt._id,assets:Object(ee.b)(JSON.stringify(J)),deletednominee:n},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){z.b.warning("Deleted successfully!"),e.getData(e.parsedFilter),M()})).catch(),ia(),oa(),Bt(!0))}(ye),ge(!1)},isOpen:he,closeModal:function(){return ge(!1)}}),u.a.createElement(R.a,{show:Qe,data:$e,updateData:e.updateData,addData:la,isLoading:nt,handleSidebar:na,thumbView:S,getData:F,dataParams:U,addNew:ve}),u.a.createElement("div",{className:D()("data-list-overlay",{show:Qe}),onClick:function(){return na(!1,!0)}}),u.a.createElement(b.a,null,u.a.createElement(f.a,{lg:"8",md:"6",sm:"12"},u.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},u.a.createElement(b.a,null,u.a.createElement(f.a,{lg:"8",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement(g.a,null,(null===m||void 0===m?void 0:m.subHeading)?m.subHeading:Re?"Edit Asset Details":"Add New Asset")),u.a.createElement(E.a,null,u.a.createElement(O.a,null,u.a.createElement(b.a,null,u.a.createElement(f.a,{md:"6",sm:"12"},u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(I.a,{className:"React",classNamePrefix:"select",name:"color",ref:t,isDisabled:Re,options:K,value:K.filter((function(e){return e.value===qe})),theme:function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:Object(n.a)(Object(n.a)({},e.colors),{},{text:"orangered",primary25:"coral",primary:"#757488"})})},isClearable:!0,placeholder:(null===m||void 0===m?void 0:m.assetOptionText)?m.assetOptionText:"Asset Type",onChange:function(e){Bt(!0),Object(_.C)(),we(""),Fe(""),pt([]),Nt(""),Ke(e?e.value:void 0),St(e?q[e.value]:{})}}),u.a.createElement(j.a,null,(null===m||void 0===m?void 0:m.assetOptionText)?m.assetOptionText:"Asset Type"))),u.a.createElement(f.a,{md:"6",sm:"12"},u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(I.a,{styles:{control:function(e){return Object(n.a)(Object(n.a)({},e),{},{borderColor:qe&&!(null===ft||void 0===ft?void 0:ft.length)?"red":"hsl(0,0%,80%)"})}},theme:function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:Object(n.a)(Object(n.a)({},e.colors),{},{text:"orangered",primary25:"coral",primary:"#757488"})})},isMulti:!0,name:"nominee",options:Vt,value:ft.map((function(e){var t=Vt.filter((function(t){return t.value===e.id}));return{value:t[0].value,label:t[0].label}})),ref:a,className:"React",classNamePrefix:"select",placeholder:(null===m||void 0===m?void 0:m.nomineeOption)?m.nomineeOption:"Nominee(s)",id:"nominee",onChange:function(e){!function(e){Re&&Bt(!1);var t=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?Xe(!0):t.push({id:e.value,name:e.label,objectid:te})})),pt([].concat(t))}(e)}}),u.a.createElement(j.a,null,(null===m||void 0===m?void 0:m.nomineeOption)?m.nomineeOption:"Nominee(s)")))),u.a.createElement(b.a,null,Object.keys(q).includes(qe)&&At.map((function(e,t){return u.a.createElement(f.a,{md:"6",sm:"12",key:t},"Attachments"!==e.key?u.a.createElement(y.a,{className:"form-label-group"},e.deletable&&u.a.createElement(T.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){Re&&Bt(!1);var t=At.filter((function(t){return e.key!==t.key}));St(t)}(e)}}),u.a.createElement(x.a,{type:e.type,onKeyPress:function(t){"number"===e.type.toLowerCase()&&(Object(Q.a)(t),function(e){var t=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which),a=document.getElementById("assetSubmit");13===t&&(!a||a.disabled||zt||(Re?Zt(e):ta(e)))}(t))},name:"city",id:"cityMulti",className:"input-label placeholder",max:"9999-12-31",min:"1900-01-01",rows:"1",placeholder:e.key,value:e.val,onChange:function(t){Qt(e,t)}}),u.a.createElement(j.a,{className:_.c?"dark-label":"light-label"},e.key)):Re&&!Je&&e.val.split("#~#")[1]?u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement("div",{className:"form-control"},u.a.createElement(T.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){Me(e.val.split("#~#")[1])}}),u.a.createElement("span",{style:{color:"blue"},onClick:function(){Wt(e.val.split("#~#")[2])}},e.val.split("#~#")[0]))):u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(x.a,{type:e.type,id:"fileAtt",className:"input-label placeholder",value:null,onChange:function(t){Qt(e,t)}})))}))),u.a.createElement(b.a,{style:{marginTop:"15px"}},u.a.createElement(f.a,{md:"6",sm:"12",className:"d-flex align-items-center"},qe&&u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{outline:!0,onClick:Gt,className:"add-button btn btn-secondary"},"+"),u.a.createElement("span",{className:"ml-2"},"Add Custom Field"))),u.a.createElement(f.a,{sm:"6"},u.a.createElement(y.a,{style:{textAlign:"right",marginBottom:"0px"}},u.a.createElement(L.b,{label:Re?"Cancel":(null===m||void 0===m?void 0:m.resetButton)?null===m||void 0===m?void 0:m.resetButton:"Reset",handleClick:function(e){Pe(!1),ia()}}),u.a.createElement(L.c,{id:"assetSubmit",label:zt?u.a.createElement(k.a,{size:"sm",color:"white"}):Re?"Update":(null===m||void 0===m?void 0:m.submitButton)?null===m||void 0===m?void 0:m.submitButton:"Add",disabled:!Je&&(0===ft.length||!qe||Dt||zt),handleClick:function(e){Re?Zt(e):ta(e)}}))))))))),u.a.createElement(b.a,null,u.a.createElement(f.a,{md:"8"},u.a.createElement(P.c,{heading:(null===m||void 0===m?void 0:m.textList)?null===m||void 0===m?void 0:m.textList:"Assets List",isLoading:e.listLoading,collapseItems:Ie,colorOption:null===m||void 0===m?void 0:m.colorOption,handleFilter:function(){console.log("Call filter function")}}))))),u.a.createElement(A.a,null)),u.a.createElement(Y,{modal:Et,fname:ke,ftype:Ce,loading:ct,addfield:function(e){e.preventDefault();var t=At,a=t.length,n="";t.findIndex((function(e){return e.key===ke}))>=0?z.b.error("Field Already Exist! Please add new field"):("Attachments"===t[a-1].key?(n=t[a-1],t[a-1]={key:ke,val:"",type:Ce,deletable:!0},t.push(n),St(t),we(""),Fe("")):(t.push({key:ke+Ce,val:"",type:Ce,deletable:!0}),St(t),we(""),Fe("")),Gt())},messages:m,setfname:we,setftype:Fe,assetType:qe,toggleModal:Gt,colourOptions2:X,selectCustomRef:i,clearCustomField:oa})))}))}}]);