"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[934],{48934:function(e,t,n){n.r(t);var i=n(1413),a=n(93433),o=n(74165),s=n(15861),r=n(29439),u=n(47313),l=n(95162),d=n(64162),c=n.n(d),v=n(40229),f=n(71535),p=n(96900),h=n(56972),m=n(62463),g=n(89870),x=n(39653),Z=n(31616),y=n(39995),S=n(31881),k=n.n(S),D=n(66135),j=n(61474),b=n(35192),A=n(12613),w=n(6039),I=n(13798),C=n(86282),L=n(50850),P=n(97729),F=n(54727),E=n(36936),O=n(30879),N=n(72845),B=n(46417);t.default=(0,D.$j)((function(e){var t,n,i=e.reducer,a=i.dataList,o=i.customizer,s=void 0===o?{}:o;return{dataList:a,messages:null===s||void 0===s||null===(t=s.language)||void 0===t?void 0:t.Asset,assetListFromAPI:null!==(n=null===a||void 0===a?void 0:a.assetListFromAPI)&&void 0!==n?n:[],listLoading:null===a||void 0===a?void 0:a.totalRecordsLoading,removedDocSuccess:null===a||void 0===a?void 0:a.removedDocSuccess,removingDocfailed:null===a||void 0===a?void 0:a.removingDocfailed,mediaData:null===a||void 0===a?void 0:a.mediaData}}),(function(e){return{getData:function(t){return e(E.SD.endpoints.getData.initiate(t))},resetPreview:function(t){return e(N.Xg.endpoints.resetPreview.initiate(t))},addData:function(t){return e(E.SD.endpoints.addData.initiate(t))},callAssetAPI:function(t){return e(O.aN.endpoints.getAssetData.initiate(t))},deleteWholeDoc:function(t){return e(N.Xg.endpoints.deleteDoc.initiate(t))},previewDoc:function(t){return e(N.Xg.endpoints.previewDoc.initiate(t,{subscribe:!1,forceRefetch:!0}))}}}))((function(e){var t,n,d=(0,u.createRef)(),S=e.messages,D=e.getData,E=e.listLoading,O=e.parsedFilter,N=e.assetListFromAPI,_=e.callAssetAPI,z=e.dataList,M=e.removedDocSuccess,T=e.removingDocfailed,R=e.deleteWholeDoc,G=e.previewDoc,J=e.resetPreview,U=JSON.parse(sessionStorage.getItem("dropdowns")).assetOption,V=Object.keys(U).map((function(e){var t,n;return{value:e,label:null!==(t=null===S||void 0===S||null===(n=S.colorOption)||void 0===n?void 0:n[e])&&void 0!==t?t:e,color:"#00B8D9",isFixed:!0}})),W=(0,u.useState)(""),X=(0,r.Z)(W,2),Q=X[0],Y=X[1],K=(0,u.useState)(null),$=(0,r.Z)(K,2),q=$[0],H=$[1],ee=(0,u.useState)(!1),te=(0,r.Z)(ee,2),ne=te[0],ie=te[1],ae=(0,u.useState)(!1),oe=(0,r.Z)(ae,2),se=oe[0],re=oe[1],ue=(0,u.useState)(!1),le=(0,r.Z)(ue,2),de=le[0],ce=le[1],ve=(0,u.useState)(null),fe=(0,r.Z)(ve,2),pe=fe[0],he=fe[1],me=(0,u.useState)(""),ge=(0,r.Z)(me,2),xe=ge[0],Ze=ge[1],ye=(0,u.useState)(""),Se=(0,r.Z)(ye,2),ke=Se[0],De=Se[1],je=(0,u.useState)([]),be=(0,r.Z)(je,2),Ae=be[0],we=be[1],Ie=(0,u.useState)(!1),Ce=(0,r.Z)(Ie,2),Le=Ce[0],Pe=Ce[1],Fe=(0,u.useState)(""),Ee=(0,r.Z)(Fe,2),Oe=Ee[0],Ne=Ee[1],Be=(0,u.useState)(""),_e=(0,r.Z)(Be,2),ze=_e[0],Me=_e[1],Te=(0,u.useState)(!1),Re=(0,r.Z)(Te,2),Ge=Re[0],Je=Re[1],Ue=(0,u.useState)(null),Ve=(0,r.Z)(Ue,2),We=Ve[0],Xe=Ve[1],Qe=(0,u.useState)(!1),Ye=(0,r.Z)(Qe,2),Ke=Ye[0],$e=Ye[1],qe=(0,u.useState)(!1),He=(0,r.Z)(qe,2),et=He[0],tt=He[1],nt=(0,u.useState)(!1),it=(0,r.Z)(nt,2),at=it[0],ot=it[1],st=(0,u.useState)([]),rt=(0,r.Z)(st,2),ut=rt[0],lt=rt[1],dt=(0,u.useState)(!1),ct=(0,r.Z)(dt,2),vt=ct[0],ft=ct[1],pt=(0,u.useState)(),ht=(0,r.Z)(pt,2),mt=ht[0],gt=ht[1],xt=(0,u.useState)([]),Zt=(0,r.Z)(xt,2),yt=Zt[0],St=Zt[1],kt=(0,u.useState)(!0),Dt=(0,r.Z)(kt,2),jt=Dt[0],bt=Dt[1],At=(0,u.useState)(!1),wt=(0,r.Z)(At,2),It=wt[0],Ct=wt[1],Lt=(0,u.useState)(),Pt=(0,r.Z)(Lt,2),Ft=Pt[0],Et=Pt[1],Ot=(0,u.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Nt=(0,r.Z)(Ot,2),Bt=Nt[0],_t=Nt[1],zt=JSON.parse(sessionStorage.getItem("logInUserData"));(0,u.useEffect)((function(){!E&&D(),_()}),[]),(0,u.useEffect)((function(){N&&(0,L.Vh)(z,Tt,en,he,ce,we,N)}),[N]),(0,u.useEffect)((function(){var t,n;if(null!==(t=e.dataList)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.length){var i=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var t={value:e._id,label:"".concat(e.name," - ").concat(e.relation),color:"#00B8D9",isFixed:!1};i.push(t)})),_t(i)}}),[e.dataList]),(0,u.useEffect)((function(){M&&(Rt(),A.A9),T&&(A.A9,null===T||void 0===T||T.length)}),[M,T]);var Mt=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{R(t)}catch(n){console.log("error",n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){e.mediaData&&(Et(e.mediaData),tt(!1))}),[e.mediaData]);var Tt=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ot(!0),tt(!0),e.next=5,G(t);case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),Rt(),e.abrupt("return",(0,B.jsx)(A.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Something went wrong",severity:"warning"}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Rt=function(){ft(!vt)},Gt=function(e,t){var n,i;"File"===e.type&&gt(null===(i=t.target)||void 0===i?void 0:i.files[0]);var a=null!==(n=t.target.value)&&void 0!==n?n:"",o=yt,s=yt.findIndex((function(t){return t.key===e.key}));a.length<250&&(o[s].val=a,St(o),ie(!ne),Jt())},Jt=function(){var e=!1;yt.forEach((function(t){t.mandatory&&!t.val.trim()&&(e=!0)})),bt(e)},Ut=function(t){Oe&&!mt&&yt.forEach((function(e){"Attachments"===e.key&&(e.val="")}));var n={assetType:ze,assetDetails:(0,C.OQ)(yt),nominees:ut,id:Q},i=N.findIndex((function(e){return e.id===Q}));if(i>=0){N.splice(i,1),N.push(n);var a=[];ut.forEach((function(e){e.objectid=Q})),q.nominees.forEach((function(e){-1===ut.findIndex((function(t){return t.id===e.id}))&&(e.objectid=Q,a.push(e))})),k().post("/backendapi/adddetails",{_id:null===zt||void 0===zt?void 0:zt._id,assets:(0,P.Gf)(JSON.stringify(N)),nominees:ut,deletednominee:a},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){Oe&&Mt(Oe),A.A9,e.getData(e.parsedFilter),_(),Ct(!1)})).catch((function(){Ct(!1)})),qt(),Ht(),bt(!0)}},Vt=function(e){Ct(!0),e.preventDefault(),Pe(!1);var t=yt.findIndex((function(e){return"File"===e.type}));t>=0&&mt?""!==yt[t].val?Xt(mt).then((function(e){yt[t].val="".concat((0,P.Y)(e.data.alias),"#~#").concat(e.data._id,"#~#").concat(e.data.attachment[0]),St(yt),Ut()})).catch((function(e){var t,n;Ct(!1),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&(A.A9,null===e||void 0===e||null===(n=e.response)||void 0===n||n.data)})):Ut():Ut()},Wt=function(e){return new Promise((function(t,n){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(e){return n(e)}}))},Xt=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n,i,a,s,r,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],(i={}).user=null===zt||void 0===zt?void 0:zt._id,i.type="Asset",i.alias=(0,P.Gf)(t.name),e.next=7,Wt(t);case 7:return a=e.sent,s=(0,P.Gf)(a),r=c().compressToUTF16(s),n.push({media:r,name:t.name,type:t.type,user:null===zt||void 0===zt?void 0:zt._id}),i.attachment=n,e.next=14,k().post("/backendapi/documents/add",i,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}});case 14:return u=e.sent,e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qt=function(e){Ct(!0),e.preventDefault();var t=yt.findIndex((function(e){return"File"===e.type}));t>=0?""!==yt[t].val?Xt(mt).then((function(e){yt[t].val="".concat((0,P.Y)(e.data.alias),"#~#").concat(e.data._id,"#~#").concat(e.data.attachment[0]),St(yt),Yt()})).catch((function(e){var t,n;Ct(!1),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&(A.A9,null===e||void 0===e||null===(n=e.response)||void 0===n||n.data)})):Yt():Yt()},Yt=function(){var t={assetType:ze,assetDetails:(0,C.OQ)(yt),nominees:ut,id:(0,l.Z)()};ut.forEach((function(e){e.objectid=t.id})),N.push(t),k().post("/backendapi/adddetails",{_id:null===zt||void 0===zt?void 0:zt._id,assets:(0,P.Gf)(JSON.stringify(N)),nominees:ut},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){return qt(),e.getData(e.parsedFilter),_(),Ht(),bt(!0),Ct(!1),(0,B.jsx)(A.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Asset added successfully!"})})).catch((function(){Ct(!1)}))},Kt=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Je(e),!0===t&&(Xe(null),re(!0))},$t=function(){var t=(0,s.Z)((0,o.Z)().mark((function t(n){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.addData(n);case 3:$e(!1),Kt(!1,!0),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),$e(!1),A.A9;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),qt=function(){N&&(0,L.Vh)(e.dataList,Tt,en,he,ce,we,N),Me(""),Ne(""),St([]),gt(""),lt([]),Le&&bt(!0)},Ht=function(){Ze(""),De(""),d.current&&d.current.select.clearValue()},en=function(e){bt(!0);var t=e.assetDetails,n=e.assetType,i=e.nominees;Me(n),Pe(!0),Y(e.id),H(e),St(t),lt((0,a.Z)(i))},tn=function(){var e="";return V.forEach((function(t){t.value===ze&&(e=t)})),e};return(0,B.jsxs)(v.Z,{children:[(0,B.jsx)(L.zV,{prviewmodal:at,setprviewmodal:ot,loading:et,blobUrl:Ft,reset:function(){return J()}}),(0,B.jsx)(Z.Z,{handleConfirm:function(){!function(t){var n=N.findIndex((function(e){return e.id===t})),i=[];n>=0&&(N[n].assetDetails.filter((function(e){return"File"===e.type})).forEach((function(e){var t=e.val.split("#~#");null!==t&&void 0!==t&&t[1]&&k().delete("/backendapi/document/deletebyid/".concat(t[1]),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}})})),N[n].nominees.forEach((function(e){e.objectid=N[n].id,i.push(e)})),N.splice(n,1),k().post("/backendapi/adddetails",{_id:null===zt||void 0===zt?void 0:zt._id,assets:(0,P.Gf)(JSON.stringify(N)),deletednominee:i},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){return e.getData(e.parsedFilter),_(),(0,B.jsx)(A.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Deleted successfully!",severity:"warning"})})).catch(),qt(),Ht(),bt(!0))}(pe),ce(!1)},isOpen:de,closeModal:function(){return ce(!1)}}),Ge&&(0,B.jsx)(w.Z,{show:Ge,data:We,updateData:e.updateData,addData:$t,isLoading:Ke,handleSidebar:Kt,getData:D,dataParams:O,addNew:se}),(0,B.jsxs)(f.ZP,{container:!0,spacing:2,sx:{p:2},children:[(0,B.jsx)(f.ZP,{item:!0,xs:12,sm:9,children:(0,B.jsx)(p.Z,{children:(0,B.jsxs)(h.Z,{children:[(0,B.jsx)(A.ll,{title:Le?"Edit Asset":"Add New Asset"}),(0,B.jsxs)(f.ZP,{rowSpacing:.01,container:!0,spacing:1,children:[(0,B.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,B.jsx)(j.gc,{id:"assetID",name:"assetID",isDisabled:Le,options:V,onChange:function(e,t){return function(e){bt(!0),(0,C.L9)(),Ze(""),De(""),lt([]),gt(""),Me(null===e||void 0===e?void 0:e.value),St(e?U[e.value]:{})}(t)},value:tn().value,renderInput:function(e){var t;return(0,B.jsx)(x.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:Le?tn().value:null!==(t=null===S||void 0===S?void 0:S.assetOptionText)&&void 0!==t?t:"Asset Type"}))}})}),(0,B.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,B.jsx)(j.gc,{isMulti:!0,name:"nominee",id:"nomineeId",onChange:function(e,t){return function(e){Le&&bt(!1);var t=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?Je(!0):t.push({id:e.value,name:e.label,objectid:Q})})),lt([].concat(t))}(t)},options:null===Bt||void 0===Bt?void 0:Bt.filter((function(e){return!ut.some((function(t){return t.id===e.value}))})),value:ut.map((function(e){var t=Bt.filter((function(t){return t.value===e.id}));return{value:t[0].value,label:t[0].label}})),renderInput:function(e){var t;return(0,B.jsx)(x.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:null!==(t=null===S||void 0===S?void 0:S.nomineeOption)&&void 0!==t?t:"Nominee(s)"}))}})}),Object.keys(U).includes(ze)&&yt.map((function(e,t){return(0,B.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:"Attachments"!==e.key?(0,B.jsxs)(B.Fragment,{children:[e.deletable&&(0,B.jsx)(b.Z,{size:15,onClick:function(){return function(e){Le&&bt(!1);var t=yt.filter((function(t){return e.key!==t.key}));St(t)}(e)}}),(0,B.jsx)(x.Z,{type:e.type,onKeyPress:function(t){"number"===e.type.toLowerCase()&&((0,F.ZP)(t),function(e){var t=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which),n=document.getElementById("assetSubmit");13===t&&(!n||n.disabled||It||(Le?Vt(e):Qt(e)))}(t))},name:"city",id:"cityMulti",max:"9999-12-31",min:"1900-01-01",rows:"1",placeholder:e.key,value:e.val,onChange:function(t){Gt(e,t)}})]}):Le&&!Oe&&e.val.split("#~#")[1]?(0,B.jsxs)("div",{children:[(0,B.jsx)(b.Z,{style:{position:"absolute",right:"-5px",top:"-7px"},size:15,onClick:function(){Ne(e.val.split("#~#")[1])}}),(0,B.jsx)("span",{style:{color:"blue",cursor:"pointer"},onClick:function(){Tt(e.val.split("#~#")[2])},children:e.val.split("#~#")[0]})]}):(0,B.jsx)(x.Z,{type:e.type,size:"small",fullWidth:!0,id:"fileAtt",value:null,onChange:function(t){Gt(e,t)}})},t)}))]}),(0,B.jsxs)(m.Z,{direction:"row",spacing:3,sx:{mt:3},justifyContent:"end",children:[ze&&(0,B.jsx)(g.Z,{onClick:Rt,children:"Add Custom Field"}),(0,B.jsx)(j.ZP,{varient:"outlined",label:Le?"Cancel":null!==(t=null===S||void 0===S?void 0:S.resetButton)&&void 0!==t?t:"Reset",onClick:function(e){Pe(!1),qt()}}),(0,B.jsx)(j.ZP,{varient:"contained",isLoading:It,label:Le?"Update":null!==(n=null===S||void 0===S?void 0:S.submitButton)&&void 0!==n?n:"Add",disabled:!Oe&&(0===ut.length||!ze||jt||It),onClick:function(e){Le?Vt(e):Qt(e)}})]})]})})}),(0,B.jsx)(y.Z,{}),(0,B.jsx)(f.ZP,{item:!0,xs:9,children:(0,B.jsx)(I.ZP,{heading:null!==S&&void 0!==S&&S.textList?null===S||void 0===S?void 0:S.textList:"Assets List",isLoading:e.listLoading,collapseItems:Ae,colorOption:null===S||void 0===S?void 0:S.colorOption1})})]}),(0,B.jsx)(L.Id,{modal:vt,fname:xe,ftype:ke,loading:et,addfield:function(e){e.preventDefault();var t=yt,n=t.length,i="";if(t.findIndex((function(e){return e.key===xe}))>=0)return(0,B.jsx)(A.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Field Already Exist! Please add new field",severity:"error"});"Attachments"===t[n-1].key?(i=t[n-1],t[n-1]={key:xe,val:"",type:ke,deletable:!0},t.push(i),St(t),Ze(""),De("")):(t.push({key:xe+ke,val:"",type:ke,deletable:!0}),St(t),Ze(""),De("")),Rt()},messages:S,setfname:Ze,setftype:De,assetType:ze,toggleModal:Rt,selectCustomRef:d,clearCustomField:Ht})]})}))}}]);