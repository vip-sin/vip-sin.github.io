(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[32],{743:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(36),i=a(18),o=a.n(i),c=a(26),r=a(7),s=a(0),u=a.n(s),d=a(567),m=a(543),v=a.n(m),b=a(517),f=a(465),p=a(511),h=a(524),g=a(525),E=a(503),O=a(303),y=a(109),j=a(147),x=a(71),N=a(107),k=a(466),w=a(513),A=a(515),S=a(25),C=a.n(S),F=a(8),D=a.n(F),L=a(16),B=a(45),I=a(728),T=a(81),z=a(82),R=a(530),P=a(534),_=a(12),U=a(509),J=a(507),M=a(493),V=a(494),H=a(625),q=a(532),K=a(531),W=a(545),G=a.n(W),Q=a(148),X=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0}],Y=function(e){var t=e.modal,a=e.fname,n=e.ftype,l=(e.loading,e.addfield),i=e.messages,o=e.setfname,c=e.setftype,r=e.assetType,s=e.toggleModal,d=e.colourOptions2,m=e.selectCustomRef,v=e.clearCustomField;return u.a.createElement(J.a,{isOpen:t,toggle:s,centered:!0},u.a.createElement(M.a,{toggle:s},"Add Custom Field"),u.a.createElement(V.a,null,u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(x.a,{name:"Email",disabled:""===r,id:"EmailMulti",value:a,placeholder:"Enter Field Name",onChange:function(e){o(e.target.value)},className:"input-label placeholder"}),u.a.createElement(j.a,{className:_.c?"dark-label":"light-label"},"Enter Field Name")),u.a.createElement(y.a,{className:"form-label-group",disabled:void 0===r},u.a.createElement(B.a,{className:"React",ref:m,disabled:void 0===r,classNamePrefix:"select",isClearable:!0,options:d,placeholder:"Field Type...",onChange:function(e){return c(e?e.value:"")}}),u.a.createElement(j.a,null,"Field Type")),u.a.createElement(y.a,{className:"form-label-group mb-0",style:{textAlign:"right"}},u.a.createElement(N.a.Ripple,{type:"button",className:"button-label btn btn-secondary",disabled:void 0===r,onClick:function(e){v()}},(null===i||void 0===i?void 0:i.resetButton)?null===i||void 0===i?void 0:i.resetButton:"Reset"),u.a.createElement(N.a.Ripple,{disabled:""===a||""===n,type:"button",className:"button-label",color:"warning",onClick:function(e){return l(e)}},(null===i||void 0===i?void 0:i.submitButton)?null===i||void 0===i?void 0:i.submitButton:"Add"))))},Z=function(e,t,a,n,l,i,o){var c=[];(null===o||void 0===o?void 0:o.length)&&o.forEach((function(i,o){if(i.id){var r,s,d="";(null===i||void 0===i||null===(r=i.nominees)||void 0===r?void 0:r.length)&&i.nominees.forEach((function(t,a){var n=e.data.filter((function(e){return e._id===t.id}));n.length&&(a===i.nominees.length-1?d+=n[0].name:d="".concat(d+n[0].name,", "))}));var m=u.a.createElement("div",null,u.a.createElement(b.a,null,null===i||void 0===i||null===(s=i.assetDetails)||void 0===s?void 0:s.map((function(e,a){if(""!==e.val){var n,l=e.val;if("File"===e.type){var i=e.val.split("#~#");l=u.a.createElement("u",null,u.a.createElement("span",{style:{color:"blue"},onClick:function(){t(i[2])}},i[0]))}return u.a.createElement(f.a,{md:"5",sm:"12",key:a+e.key},u.a.createElement(H.a,null,u.a.createElement("span",{className:"font-weight-bold upper-text ".concat(_.c?"upper-text-dark":"upper-text")},e.key&&(null===(n=e.key.split("*"))||void 0===n?void 0:n[0])," :")," ",u.a.createElement("span",{className:"".concat(_.c?"lower-text-dark":"lower-text")},"Date"===e.type?Object(Q.b)(l):l)))}return""})),u.a.createElement(f.a,{md:"5",sm:"12"},u.a.createElement(H.a,null,u.a.createElement("span",{className:"font-weight-bold upper-text ".concat(_.c?"upper-text-dark":"upper-text")},"Nominees :")," ",u.a.createElement("span",{className:"".concat(_.c?"lower-text-dark":"lower-text")},d))),u.a.createElement(f.a,{md:"2",sm:"12"},u.a.createElement(H.a,null,u.a.createElement("b",null,u.a.createElement(q.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){a(i)}})),u.a.createElement("b",null,u.a.createElement(K.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){n(i.id),l(!0)}})))))),v={id:o+1,title:i.assetType,content:m};c.push(v)}})),i(null===c||void 0===c?void 0:c.reverse())},$=function(e){var t=e.prviewmodal,a=e.setprviewmodal,n=e.loading,l=e.blobUrl;return u.a.createElement(G.a,null,u.a.createElement(J.a,{isOpen:t,toggle:function(){a(!t)},centered:!0,size:"lg"},u.a.createElement(M.a,{toggle:function(){a(!t)},cssModule:{"modal-title":"w-100 text-center"}},u.a.createElement(b.a,null,u.a.createElement(f.a,{style:{color:"var(--warning)",fontSize:"1.45rem",fontWeight:"bold",letterSpacing:"1px"}},"Preview Asset Attachment"))),u.a.createElement(V.a,{className:"justify-content-center"},n&&u.a.createElement(k.a,{style:{marginLeft:"48%"},color:"warning",size:"lg"}),!n&&u.a.createElement("div",null,u.a.createElement("iframe",{style:{height:"400px",width:"100%"},className:"myiframe",title:"Aaq",src:"".concat(l,"#zoom=200")})))))},ee=a(17);a(510),a(304),a(514),a(305),t.default=Object(L.b)((function(e){var t,a;return{dataList:e.dataList,assetListFromAPI:null!==(t=null===(a=e.dataList)||void 0===a?void 0:a.assetListFromAPI)&&void 0!==t?t:[],listLoading:e.dataList.totalRecordsLoading}}),(function(e){return{getData:function(t){return e(Object(U.g)(t))},addData:function(t){return e(Object(U.a)(t))},callAssetAPI:function(t){return e(Object(U.b)(t))}}}))((function(e){var t=u.a.createRef(),a=u.a.createRef(),i=u.a.createRef(),m=e.messages,S=e.thumbView,F=e.getData,L=e.listLoading,U=e.parsedFilter,J=e.assetListFromAPI,M=e.callAssetAPI,V=JSON.parse(sessionStorage.getItem("dropdowns")).assetOption,H=(null===m||void 0===m?void 0:m.assetOption)?null===m||void 0===m?void 0:m.assetOption:V,q=Object.keys(V).map((function(e){var t,a;return{value:e,label:(null===m||void 0===m||null===(t=m.colorOption)||void 0===t?void 0:t[e])?null===m||void 0===m||null===(a=m.colorOption)||void 0===a?void 0:a[e]:e,color:"#00B8D9",isFixed:!0}})),K=Object(s.useState)(""),W=Object(r.a)(K,2),G=W[0],te=W[1],ae=Object(s.useState)(null),ne=Object(r.a)(ae,2),le=ne[0],ie=ne[1],oe=Object(s.useState)(!1),ce=Object(r.a)(oe,2),re=ce[0],se=ce[1],ue=Object(s.useState)(!1),de=Object(r.a)(ue,2),me=de[0],ve=de[1],be=Object(s.useState)(!1),fe=Object(r.a)(be,2),pe=fe[0],he=fe[1],ge=Object(s.useState)(null),Ee=Object(r.a)(ge,2),Oe=Ee[0],ye=Ee[1],je=Object(s.useState)(""),xe=Object(r.a)(je,2),Ne=xe[0],ke=xe[1],we=Object(s.useState)(""),Ae=Object(r.a)(we,2),Se=Ae[0],Ce=Ae[1],Fe=Object(s.useState)([]),De=Object(r.a)(Fe,2),Le=De[0],Be=De[1],Ie=Object(s.useState)(""),Te=Object(r.a)(Ie,2),ze=Te[0],Re=Te[1],Pe=Object(s.useState)(""),_e=Object(r.a)(Pe,2),Ue=_e[0],Je=_e[1],Me=Object(s.useState)(""),Ve=Object(r.a)(Me,2),He=Ve[0],qe=Ve[1],Ke=Object(s.useState)(!1),We=Object(r.a)(Ke,2),Ge=We[0],Qe=We[1],Xe=Object(s.useState)(null),Ye=Object(r.a)(Xe,2),Ze=Ye[0],$e=Ye[1],et=Object(s.useState)(!1),tt=Object(r.a)(et,2),at=tt[0],nt=tt[1],lt=Object(s.useState)(!1),it=Object(r.a)(lt,2),ot=it[0],ct=it[1],rt=Object(s.useState)(!1),st=Object(r.a)(rt,2),ut=st[0],dt=st[1],mt=Object(s.useState)([]),vt=Object(r.a)(mt,2),bt=vt[0],ft=vt[1],pt=Object(s.useState)(!1),ht=Object(r.a)(pt,2),gt=ht[0],Et=ht[1],Ot=Object(s.useState)(),yt=Object(r.a)(Ot,2),jt=yt[0],xt=yt[1],Nt=Object(s.useState)([]),kt=Object(r.a)(Nt,2),wt=kt[0],At=kt[1],St=Object(s.useState)(!0),Ct=Object(r.a)(St,2),Ft=Ct[0],Dt=Ct[1],Lt=Object(s.useState)(!1),Bt=Object(r.a)(Lt,2),It=Bt[0],Tt=Bt[1],zt=Object(s.useState)(),Rt=Object(r.a)(zt,2),Pt=Rt[0],_t=Rt[1],Ut=Object(s.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Jt=Object(r.a)(Ut,2),Mt=Jt[0],Vt=Jt[1],Ht=JSON.parse(sessionStorage.getItem("logInUserData"));Object(s.useEffect)((function(){!L&&F(),M()}),[]),Object(s.useEffect)((function(){J&&Z(e.dataList,Kt,oa,ye,he,Be,J)}),[J]),Object(s.useEffect)((function(){if(e.dataList.data.length){var t=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var a={value:e._id,label:"".concat(e.name," - ").concat(e.relation),color:"#00B8D9",isFixed:!1};t.push(a)})),Vt(t)}}),[e.dataList]);var qt=sessionStorage.getItem("authtoken"),Kt=function(e){dt(!0),ct(!0),C.a.get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(qt)}}).then((function(e){var t,a=null===(t=e.data[0])||void 0===t?void 0:t.media,n=v.a.decompressFromUTF16(a),l=Object(ee.a)(n);if(l){for(var i,o=atob(null===l||void 0===l?void 0:l.split("base64,")[1]),c=new Array(o.length),r=0;r<o.length;r++)c[r]=o.charCodeAt(r);var s=new Uint8Array(c),u=new Blob([s],{type:null===(i=e.data[0])||void 0===i?void 0:i.type}),d=URL.createObjectURL(u);_t(d),ct(!1)}else dt(!ut),T.b.warning("Something went wrong")}))},Wt=function(){gt&&ia(),Et(!gt)},Gt=function(e,t){var a,n;"File"===e.type&&xt(null===(n=t.target)||void 0===n?void 0:n.files[0]);var l=null!==(a=t.target.value)&&void 0!==a?a:"",i=wt,o=wt.findIndex((function(t){return t.key===e.key}));l.length<250&&(i[o].val=l,At(i),se(!re),Qt())},Qt=function(){var e=!1;wt.forEach((function(t){t.mandatory&&!t.val.trim()&&(e=!0)})),Dt(e)},Xt=function(t){Ue&&!jt&&wt.forEach((function(e){"Attachments"===e.key&&(e.val="")}));var a={assetType:He,assetDetails:Object(_.F)(wt),nominees:bt,id:G},n=J.findIndex((function(e){return e.id===G}));if(n>=0){J.splice(n,1),J.push(a);var l=[];bt.forEach((function(e){e.objectid=G})),le.nominees.forEach((function(e){-1===bt.findIndex((function(t){return t.id===e.id}))&&(e.objectid=G,l.push(e))})),C.a.post("/backendapi/adddetails",{_id:null===Ht||void 0===Ht?void 0:Ht._id,assets:Object(ee.b)(JSON.stringify(J)),nominees:bt,deletednominee:l},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){var a;Ue&&(a=Ue,C.a.delete("/backendapi/document/deletebyid/".concat(a),{headers:{Authorization:"Bearer ".concat(qt)}}).then((function(e){Ue&&jt?T.b.success("Attachment Replaced Successfully"):T.b.success("Attachment removed Successfully")}))),T.b.success("Updated successfully!"),e.getData(e.parsedFilter),M(),Tt(!1)})).catch((function(){Tt(!1)})),la(),ia(),Dt(!0)}},Yt=function(e){Tt(!0),e.preventDefault(),Re(!1);var t=wt.findIndex((function(e){return"File"===e.type}));t>=0&&jt?""!==wt[t].val?$t(jt).then((function(e){wt[t].val="".concat(Object(ee.a)(e.data.alias),"#~#").concat(e.data._id,"#~#").concat(e.data.attachment[0]),At(wt),Xt()})).catch((function(e){var t,a;Tt(!1),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&T.b.error(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.data)})):Xt():Xt()},Zt=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))},$t=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,n,l,i,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],(n={}).user=null===Ht||void 0===Ht?void 0:Ht._id,n.type="Asset",n.alias=Object(ee.b)(t.name),e.next=7,Zt(t);case 7:return l=e.sent,i=Object(ee.b)(l),c=v.a.compressToUTF16(i),a.push({media:c,name:t.name,type:t.type,user:null===Ht||void 0===Ht?void 0:Ht._id}),n.attachment=a,e.next=14,C.a.post("/backendapi/documents/add",n,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}});case 14:return r=e.sent,e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ea=function(e){Tt(!0),e.preventDefault();var t=wt.findIndex((function(e){return"File"===e.type}));t>=0?""!==wt[t].val?$t(jt).then((function(e){wt[t].val="".concat(Object(ee.a)(e.data.alias),"#~#").concat(e.data._id,"#~#").concat(e.data.attachment[0]),At(wt),ta()})).catch((function(e){var t,a;Tt(!1),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&T.b.error(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.data)})):ta():ta()},ta=function(){var t={assetType:He,assetDetails:Object(_.F)(wt),nominees:bt,id:Object(d.v4)()};bt.forEach((function(e){e.objectid=t.id})),J.push(t),C.a.post("/backendapi/adddetails",{_id:null===Ht||void 0===Ht?void 0:Ht._id,assets:Object(ee.b)(JSON.stringify(J)),nominees:bt},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){T.b.success("Asset added successfully!"),la(),e.getData(e.parsedFilter),M(),ia(),Dt(!0),Tt(!1)})).catch((function(){Tt(!1)}))},aa=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Qe(e),!0===t&&($e(null),ve(!0))},na=function(){var t=Object(c.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.addData(a);case 3:nt(!1),aa(!1,!0),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),nt(!1),T.b.error("Failed to add Nominee! Please retry");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),la=function(){J&&Z(e.dataList,Kt,oa,ye,he,Be,J),qe(""),Je(""),At([]),xt(""),ft([]),ze&&Dt(!0)},ia=function(){ke(""),Ce(""),i.current&&i.current.select.clearValue()},oa=function(e){Dt(!0);var t=e.assetDetails,a=e.assetType,n=e.nominees;qe(a),Re(!0),te(e.id),ie(e),At(t),ft(Object(l.a)(n))};return u.a.createElement(u.a.Fragment,null,u.a.createElement($,{prviewmodal:ut,setprviewmodal:dt,loading:ot,blobUrl:Pt}),u.a.createElement("div",{className:"data-list ".concat(S?"thumb-view":"list-view")},u.a.createElement(w.a,{handleConfirm:function(){!function(t){var a=J.findIndex((function(e){return e.id===t})),n=[];a>=0&&(J[a].assetDetails.filter((function(e){return"File"===e.type})).forEach((function(e){var t=e.val.split("#~#");(null===t||void 0===t?void 0:t[1])&&C.a.delete("/backendapi/document/deletebyid/".concat(t[1]),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}})})),J[a].nominees.forEach((function(e){e.objectid=J[a].id,n.push(e)})),J.splice(a,1),C.a.post("/backendapi/adddetails",{_id:null===Ht||void 0===Ht?void 0:Ht._id,assets:Object(ee.b)(JSON.stringify(J)),deletednominee:n},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){T.b.warning("Deleted successfully!"),e.getData(e.parsedFilter),M()})).catch(),la(),ia(),Dt(!0))}(Oe),he(!1)},isOpen:pe,closeModal:function(){return he(!1)}}),u.a.createElement(R.a,{show:Ge,data:Ze,updateData:e.updateData,addData:na,isLoading:at,handleSidebar:aa,thumbView:S,getData:F,dataParams:U,addNew:me}),u.a.createElement("div",{className:D()("data-list-overlay",{show:Ge}),onClick:function(){return aa(!1,!0)}}),u.a.createElement(b.a,null,u.a.createElement(f.a,{lg:"8",md:"6",sm:"12"},u.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},u.a.createElement(b.a,null,u.a.createElement(f.a,{lg:"8",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement(g.a,null,(null===m||void 0===m?void 0:m.subHeading)?m.subHeading:ze?"Edit Asset Details":"Add New Asset")),u.a.createElement(E.a,null,u.a.createElement(O.a,null,u.a.createElement(b.a,null,u.a.createElement(f.a,{md:"6",sm:"12"},u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(B.a,{className:"React",classNamePrefix:"select",name:"color",ref:t,isDisabled:ze,options:q,value:q.filter((function(e){return e.value===He})),theme:function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:Object(n.a)(Object(n.a)({},e.colors),{},{text:"orangered",primary25:"coral",primary:"#757488"})})},isClearable:!0,placeholder:(null===m||void 0===m?void 0:m.assetOptionText)?m.assetOptionText:"Asset Type",onChange:function(e){Dt(!0),Object(_.C)(),ke(""),Ce(""),ft([]),xt(""),qe(e?e.value:void 0),At(e?H[e.value]:{})}}),u.a.createElement(j.a,null,(null===m||void 0===m?void 0:m.assetOptionText)?m.assetOptionText:"Asset Type"))),u.a.createElement(f.a,{md:"6",sm:"12"},u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(B.a,{styles:{control:function(e){return Object(n.a)(Object(n.a)({},e),{},{borderColor:He&&!(null===bt||void 0===bt?void 0:bt.length)?"red":"hsl(0,0%,80%)"})}},theme:function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:Object(n.a)(Object(n.a)({},e.colors),{},{text:"orangered",primary25:"coral",primary:"#757488"})})},isMulti:!0,name:"nominee",options:Mt,value:bt.map((function(e){var t=Mt.filter((function(t){return t.value===e.id}));return{value:t[0].value,label:t[0].label}})),ref:a,className:"React",classNamePrefix:"select",placeholder:(null===m||void 0===m?void 0:m.nomineeOption)?m.nomineeOption:"Nominee(s)",id:"nominee",onChange:function(e){!function(e){ze&&Dt(!1);var t=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?Qe(!0):t.push({id:e.value,name:e.label,objectid:G})})),ft([].concat(t))}(e)}}),u.a.createElement(j.a,null,(null===m||void 0===m?void 0:m.nomineeOption)?m.nomineeOption:"Nominee(s)")))),u.a.createElement(b.a,null,Object.keys(H).includes(He)&&wt.map((function(e,t){return u.a.createElement(f.a,{md:"6",sm:"12",key:t},"Attachments"!==e.key?u.a.createElement(y.a,{className:"form-label-group"},e.deletable&&u.a.createElement(I.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){ze&&Dt(!1);var t=wt.filter((function(t){return e.key!==t.key}));At(t)}(e)}}),u.a.createElement(x.a,{type:e.type,onKeyPress:function(t){"number"===e.type.toLowerCase()&&(Object(Q.a)(t),function(e){var t=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which),a=document.getElementById("assetSubmit");13===t&&(!a||a.disabled||It||(ze?Yt(e):ea(e)))}(t))},name:"city",id:"cityMulti",className:"input-label placeholder",max:"9999-12-31",min:"1900-01-01",rows:"1",placeholder:e.key,value:e.val,onChange:function(t){Gt(e,t)}}),u.a.createElement(j.a,{className:_.c?"dark-label":"light-label"},e.key)):ze&&!Ue&&e.val.split("#~#")[1]?u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement("div",{className:"form-control"},u.a.createElement(I.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){Je(e.val.split("#~#")[1])}}),u.a.createElement("span",{style:{color:"blue"},onClick:function(){Kt(e.val.split("#~#")[2])}},e.val.split("#~#")[0]))):u.a.createElement(y.a,{className:"form-label-group"},u.a.createElement(x.a,{type:e.type,id:"fileAtt",className:"input-label placeholder",value:null,onChange:function(t){Gt(e,t)}})))}))),u.a.createElement(b.a,{style:{marginTop:"15px"}},u.a.createElement(f.a,{md:"6",sm:"12",className:"d-flex align-items-center"},He&&u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{outline:!0,onClick:Wt,className:"add-button btn btn-secondary"},"+"),u.a.createElement("span",{className:"ml-2"},"Add Custom Field"))),u.a.createElement(f.a,{sm:"6"},u.a.createElement(y.a,{style:{textAlign:"right",marginBottom:"0px"}},u.a.createElement(z.b,{label:ze?"Cancel":(null===m||void 0===m?void 0:m.resetButton)?null===m||void 0===m?void 0:m.resetButton:"Reset",handleClick:function(e){Re(!1),la()}}),u.a.createElement(z.c,{id:"assetSubmit",label:It?u.a.createElement(k.a,{size:"sm",color:"white"}):ze?"Update":(null===m||void 0===m?void 0:m.submitButton)?null===m||void 0===m?void 0:m.submitButton:"Add",disabled:!Ue&&(0===bt.length||!He||Ft||It),handleClick:function(e){ze?Yt(e):ea(e)}}))))))))),u.a.createElement(b.a,null,u.a.createElement(f.a,{md:"8"},u.a.createElement(P.c,{heading:(null===m||void 0===m?void 0:m.textList)?null===m||void 0===m?void 0:m.textList:"Assets List",isLoading:e.listLoading,collapseItems:Le,colorOption:null===m||void 0===m?void 0:m.colorOption,handleFilter:function(){console.log("Call filter function")}}))))),u.a.createElement(A.a,null)),u.a.createElement(Y,{modal:gt,fname:Ne,ftype:Se,loading:ot,addfield:function(e){e.preventDefault();var t=wt,a=t.length,n="";t.findIndex((function(e){return e.key===Ne}))>=0?T.b.error("Field Already Exist! Please add new field"):("Attachments"===t[a-1].key?(n=t[a-1],t[a-1]={key:Ne,val:"",type:Se,deletable:!0},t.push(n),At(t),ke(""),Ce("")):(t.push({key:Ne+Se,val:"",type:Se,deletable:!0}),At(t),ke(""),Ce("")),Wt())},messages:m,setfname:ke,setftype:Ce,assetType:He,toggleModal:Wt,colourOptions2:X,selectCustomRef:i,clearCustomField:ia})))}))}}]);