(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[19],{509:function(e,t,a){"use strict";a.d(t,"h",(function(){return m})),a.d(t,"g",(function(){return p})),a.d(t,"j",(function(){return f})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return v})),a.d(t,"i",(function(){return g})),a.d(t,"f",(function(){return E})),a.d(t,"d",(function(){return O})),a.d(t,"e",(function(){return y})),a.d(t,"a",(function(){return j})),a.d(t,"k",(function(){return A})),a.d(t,"l",(function(){return w}));var n=a(512),r=a(18),o=a.n(r),l=a(26),c=a(25),i=a.n(c),s=a(81),u=a(17),d=JSON.parse(sessionStorage.getItem("logInUserData")),m=function(e){var t=e.user,a=e.token;return function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"GET_ALL_DOCS_LOADING",data:!0}),i.a.get("/backendapi/documents/".concat(null===t||void 0===t?void 0:t._id),{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){n({type:"GET_ALL_DOCS_LOADING",data:!1});for(var t=e.data,a=0;a<t.length;a+=1)t[a].desc=Object(u.a)(t[a].desc),t[a].id=a+1,t[a].expiry=Object(u.a)(t[a].expiry),t[a].alias=Object(u.a)(t[a].alias);n({type:"GET_ALL_DOCS",resp:t})})).catch((function(e){console.log("err get docs",e),n({type:"GET_ALL_DOCS_ERROR",err:"Error getting docs"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ALL_DATA_LOADING",data:!0}),t.next=3,i.a.get("/backendapi/nominee/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){if(a({type:"GET_ALL_DATA_LOADING",data:!1}),null===t||void 0===t?void 0:t.data){var r,o=Object(n.a)(null===t||void 0===t?void 0:t.data);try{for(o.s();!(r=o.n()).done;){var l=r.value;l.nomineeId=(null===l||void 0===l?void 0:l.nomineeId)&&Object(u.a)(l.nomineeId,!0),l.name=(null===l||void 0===l?void 0:l.name)&&Object(u.a)(l.name,!0),l.relation=(null===l||void 0===l?void 0:l.relation)&&Object(u.a)(l.relation,!0),l.relation1=(null===l||void 0===l?void 0:l.relation1)&&Object(u.a)(l.relation1,!0),l.email=(null===l||void 0===l?void 0:l.email)&&Object(u.a)(l.email,!0),l.primaryContact=(null===l||void 0===l?void 0:l.primaryContact)&&Object(u.a)(l.primaryContact,!0),l.secondaryContact=(null===l||void 0===l?void 0:l.secondaryContact)&&Object(u.a)(l.secondaryContact,!0),l.address=(null===l||void 0===l?void 0:l.address)&&Object(u.a)(l.address,!0)}}catch(c){o.e(c)}finally{o.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}})).catch((function(e){console.log(e),a({type:"GET_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USER_ALL_DATA_LOADING",data:!0}),e.next=3,i.a.post("/backendapi/users/get",{id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){if(t({type:"GET_USER_ALL_DATA_LOADING",data:!1}),null===e||void 0===e?void 0:e.data){var a=e.data[0];t({type:"GET_USER_ALL_DATA",data:a})}})).catch((function(e){console.log(e,"err"),t({type:"GET_USER_ALL_DATA_LOADING",data:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_ALL_ASSET_DATA_LOADING",data:!0}),i.a.get("/backendapi/user/assets/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){t({type:"GET_ALL_ASSET_DATA_LOADING",data:!1});var a=JSON.parse(Object(u.a)(e.data[0]));t({type:"GET_ALL_ASSET_DATA",data:a})})).catch((function(e){t({type:"ERROR_ALL_ASSET_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!0}),i.a.get("/backendapi/user/liabilities/".concat(null===d||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){t({type:"GET_ALL_LIABILITY_DATA_LOADING",data:!1});var a=JSON.parse(Object(u.a)(e.data[0]));t({type:"GET_ALL_LIABILITY_DATA",data:a})})).catch((function(e){t({type:"ERROR_ALL_LIABILITY_DATA",data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t){return function(){var a=Object(l.a)(o.a.mark((function a(n){var r,l,c,s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_SPEND_DATA_LOADING",data:!0}),(null===t||void 0===t?void 0:t.year)&&(r=new Date,l=h(r),c=Number(t.year?t.year:3),r.setMonth(r.getMonth()-c),r.setDate(1),s=h(r),e.dateRangeStart=s,e.dateRangeEnd=l),(null===t||void 0===t?void 0:t.labels)&&(e.labels=t.labels),a.next=5,i.a.get("/backendapi/spend/list/".concat(d._id),{params:e,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(t){n({type:"GET_SPEND_DATA_LOADING",data:!1}),n({type:"GET_DATA",data:null===t||void 0===t?void 0:t.data,totalPages:t.length,params:e})})).catch((function(e){n({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},h=function(e){var t="".concat(e.getMonth()+1);1===t.length&&(t="0".concat(t));var a="".concat(e.getDate());return 1===a.length&&(a="0".concat(a)),[e.getFullYear(),t,a].join("-")},E=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},O=function(e){return function(t){i.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},y=function(e){return function(t){i.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},j=function(e){var t={userId:d._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation,!0),relation1:Object(u.b)(e.relation1,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0),secrets:e.secrets};return function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){"Success"===e.data?s.b.success("Nominee Added Successfully"):s.b.error(e.data),a(p())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e){var t={_id:e._id,usage:e.usage?e.usage:"Unused",userId:d._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation,!0),relation1:Object(u.b)(e.relation1,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0),secrets:e.secrets};return function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/backendapi/nominee/update",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){s.b.success("Nominee Updated Successfully")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/backendapi/update/secrets",{secrets:e,_id:d._id},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){s.b.success("Secret Updated Successfully")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},510:function(e,t,a){},515:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(465),l=(a(110),a(12)),c=(a(111),a(526)),i=a.n(c),s={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}};t.a=function(){return r.a.createElement(o.a,{lg:"4",md:"6",sm:"12"},r.a.createElement("div",{className:"swipermobile"},r.a.createElement(i.a,s,r.a.createElement("div",{style:{backgroundImage:"url(".concat(l.s,")"),backgroundSize:"contain"}}),r.a.createElement("div",{style:{backgroundImage:"url(".concat(l.t,")"),backgroundSize:"contain"}}),r.a.createElement("div",{style:{backgroundImage:"url(".concat(l.u,")"),backgroundSize:"contain"}}),r.a.createElement("div",{style:{backgroundImage:"url(".concat(l.v,")"),backgroundSize:"contain"}}),r.a.createElement("div",{style:{backgroundImage:"url(".concat(l.w,")"),backgroundSize:"contain"}}))))}},544:function(e,t,a){"use strict";a.d(t,"c",(function(){return L})),a.d(t,"a",(function(){return S})),a.d(t,"b",(function(){return D}));var n=a(36),r=a(7),o=a(0),l=a.n(o),c=a(712),i=a(713),s=a(506),u=a(589),d=a(517),m=a(465),p=a(511),f=a(524),b=a(525),v=a(503),g=a(109),h=a(71),E=a(147),O=a(515),y=a(12),j=a(519),A=a.n(j),w=a(82),L=function(e){var t=Object(o.useState)(e.file?e.file:[]),a=Object(r.a)(t,2),s=a[0],d=a[1],m=Object(u.a)({maxFiles:e.notMulti?1:5,multiple:!e.notMulti,onDrop:function(t){1===e.notMulti?(e.setfilesOndrop(t),d(t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))):(e.setfilesOndrop([].concat(Object(n.a)(s),Object(n.a)(t))),d([].concat(Object(n.a)(s),Object(n.a)(t))))}}),p=m.getInputProps,f=m.open,b=s.map((function(t){return l.a.createElement(l.a.Fragment,{key:t.name},l.a.createElement("span",{className:"text-truncate"},"".concat(t.name.length>40?t.name.slice(0,40)+"...":t.name)),l.a.createElement("span",{style:{marginLeft:"2px",marginRight:"8px",color:"red"}},l.a.createElement(c.a,{size:15,onClick:function(a){a.stopPropagation(),function(t){e.isMulti?d(s.filter((function(e){return e!==t}))):d([])}(t)}})))}));return Object(o.useEffect)((function(){return function(){s.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[s]),Object(o.useEffect)((function(){e.resetDropzone&&d([])}),[e.resetDropzone]),l.a.createElement("section",null,l.a.createElement("div",{onClick:f},l.a.createElement("input",p()),l.a.createElement("div",{className:"input-label placeholder  form-control d-flex justify-content-between",style:{height:"auto"}},b.length>0?l.a.createElement("aside",{className:"input-label placeholder"},b):l.a.createElement("span",null," ","Drag `n` drop some files here, or ",l.a.createElement("b",null,"Click to Browse files")),l.a.createElement("span",null,l.a.createElement(i.a,null)))))},k=[{value:"Asset",label:"Asset"},{value:"Daily Spends",label:"Daily Spends"},{value:"Vault",label:"Document Vault"},{value:"Liability",label:"Liability"},{value:"Postman",label:"Postman"}],S=function(e){var t=e.alias,a=e.setalias,n=e.expiry,r=e.setexpiry,o=e.desc,c=e.setdesc,i=e.handleReset,s=e.isDisabled,u=e.submitDropzone,j=e.setfilesOndrop,A=e.resetDropzone;return l.a.createElement(d.a,null,l.a.createElement(m.a,{lg:"8",md:"6",sm:"12"}," ",l.a.createElement(p.a,null,l.a.createElement(f.a,null,l.a.createElement(b.a,null,"Upload any file, scans, documents")),l.a.createElement(v.a,null,l.a.createElement(d.a,null,l.a.createElement(m.a,{md:"6",sm:"12"},l.a.createElement(g.a,{className:"form-label-group"},l.a.createElement(h.a,{className:"input-label placeholder",type:"text",name:"AttachmentName",id:"AttachmentName",placeholder:"Attachment Name / Alias",value:t,onChange:function(e){var t;return a(null===(t=e.target.value)||void 0===t?void 0:t.trim())}}),l.a.createElement(E.a,{className:y.c?"dark-label":"light-label"},"Attachment Name / Alias"))),l.a.createElement(m.a,{md:"6",sm:"12"},l.a.createElement(g.a,{className:"form-label-group"},l.a.createElement(h.a,{className:new Date(n)>new Date||""===n?"input-label placeholder":"input-label placeholder is-invalid",type:"Date",name:"Date",id:"nameMultiExpiry",placeholder:"Expiry Date",min:Object(y.r)(),max:"9999-12-31",value:n,onChange:function(e){return r(e.target.value)}}),l.a.createElement(E.a,{className:y.c?"dark-label":"light-label"},"Expiry Date")))),l.a.createElement(d.a,null,l.a.createElement(m.a,{md:"12",sm:"12"},l.a.createElement(g.a,{className:"form-label-group"},l.a.createElement(h.a,{className:"input-label placeholder ",type:"textarea",name:"name1",id:"nameMultiDescription1",placeholder:"Description",value:o,onChange:function(e){var t;return c(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),l.a.createElement(E.a,{className:y.c?"dark-label":"light-label"},"Description")))),l.a.createElement(d.a,null,l.a.createElement(m.a,{md:"12",sm:"12"},l.a.createElement(g.a,{className:"form-label-group"},l.a.createElement(L,{setfilesOndrop:j,resetDropzone:A,isMulti:!0,notMulti:!1})))),l.a.createElement(d.a,null,l.a.createElement(m.a,{md:"6",sm:"12"}),l.a.createElement(m.a,{md:"6",sm:"12"},l.a.createElement(g.a,{style:{textAlign:"right",marginBottom:"0px",paddingTop:"5px"}},l.a.createElement(w.b,{label:"Reset",handleClick:function(){return i()}}),l.a.createElement(w.c,{label:"Add",disabled:s,handleClick:function(e){u(e)}}))))))," "),l.a.createElement(O.a,null))},D=function(e){var t,a=e.filter,n=e.handleFilter,r=e.search,o=e.columns,c=e.searchresult,i=e.selectedStyle;return l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(d.a,null,l.a.createElement(m.a,{sm:"12"},l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement("h3",{style:{paddingLeft:"1.5rem"}},"Documents List")),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(m.a,{className:"form-label-group",lg:"4",md:"6",sm:"12"},l.a.createElement(w.a,{isMulti:!0,id:"optionSelect",value:a.map((function(e){var t=k.filter((function(t){return t.value===e.id}));return{value:t[0].value,label:t[0].label}})),options:k,placeholder:"Field Type...",onChange:function(e){n(e)}}),l.a.createElement(E.a,null,"Field Type")),l.a.createElement(m.a,{className:"form-label-group",lg:"4",md:"6",sm:"12"},l.a.createElement(h.a,{type:"text",className:"searchPlaceholder",onChange:function(e){return r(e.target.value)},placeholder:"Search"})))),l.a.createElement("div",{id:"scroll-y",className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},l.a.createElement(A.a,{columns:o,data:(null===c||void 0===c?void 0:c.length)?c:(null===(t=e.documentList)||void 0===t?void 0:t.length)?e.documentList:[],noHeader:!0,responsive:!0,pointerOnHover:!1,selectableRowsHighlight:!0,customStyles:i,sortIcon:l.a.createElement(s.a,null)})))))))}},619:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),l=a.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,l=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),r.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),r.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Trash2",t.a=s},620:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),l=a.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,l=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),r.a.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Eye",t.a=s},737:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),o=a(26),l=a(7),c=a(0),i=a.n(c),s=a(543),u=a.n(s),d=a(517),m=a(465),p=a(81),f=a(513),b=a(16),v=(a(304),a(17)),g=a(620),h=a(490),E=a(499),O=a(619),y=a(12),j=a(509),A=a(71),w=a(147),L=a(45),k=(a(510),a(25)),S=a.n(k),D=a(507),_=a(493),x=a(494),N=a(466),T=a(303),I=a(109),C=a(107),z=sessionStorage.getItem("authtoken"),G=JSON.parse(sessionStorage.getItem("logInUserData")),R=[{value:"1h",label:"1 Hour"},{value:"1d",label:"1 Day"},{value:"1w",label:"1 Week"},{value:"1m",label:"1 Month"}],M=[{value:!0,label:"Allow Download"},{value:!1,label:"Allow View Only"}],B=Object(b.b)((function(e){var t;return{docsList:null===(t=e.dataList)||void 0===t?void 0:t.docsList}}),(function(e){return{getDocuments:function(t){return e(Object(j.h)(t))}}}))((function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),u=s[0],f=s[1],b=Object(c.useState)(""),v=Object(l.a)(b,2),g=v[0],h=v[1],E=Object(c.useState)(!1),O=Object(l.a)(E,2),j=O[0],k=O[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(D.a,{isOpen:e.modal,toggle:function(){e.toggleModal()},centered:!0,size:"lg"},i.a.createElement(_.a,{toggle:function(){e.toggleModal()},cssModule:{"modal-title":"w-100 text-center"}},"Send as mail"),i.a.createElement(x.a,{className:"justify-content-center"},e.loading&&i.a.createElement(N.a,{style:{marginLeft:"48%"},color:"warning",size:"lg"}),!e.loading&&i.a.createElement("div",null,i.a.createElement(T.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,{sm:"6"},i.a.createElement(I.a,{className:"form-label-group"},i.a.createElement(A.a,{type:"text",name:"name",id:"nameMultiname",value:n,placeholder:"Email *",onChange:function(e){return r(e.target.value)}}),i.a.createElement(w.a,{className:y.c?"dark-label":"light-label"},"Email"))),i.a.createElement(m.a,{sm:"6"},i.a.createElement(I.a,{className:"form-label-group"},i.a.createElement(A.a,{type:"text",name:"name",id:"nameMultiname",value:u,placeholder:"Name *",onChange:function(e){return f(e.target.value)}}),i.a.createElement(w.a,{className:y.c?"dark-label":"light-label"},"Name"))),i.a.createElement(m.a,{sm:"6"},i.a.createElement(I.a,{className:"form-label-group"},i.a.createElement(L.a,{id:"data-category",name:"label",options:R,value:null===R||void 0===R?void 0:R.filter((function(e){return e.value===g})),isClearable:!0,placeholder:"Expiry for Documents *",onChange:function(e){return h(null===e||void 0===e?void 0:e.value)}}))),i.a.createElement(m.a,{sm:"6"},i.a.createElement(I.a,{className:"form-label-group"},i.a.createElement(L.a,{id:"data-category",name:"label",options:M,value:null===M||void 0===M?void 0:M.filter((function(e){return e.value===j})),isClearable:!0,placeholder:"Allow Download",onChange:function(e){return k(null===e||void 0===e?void 0:e.value)}})))),i.a.createElement(d.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement(I.a,{className:"form-label-group"},i.a.createElement(C.a.Ripple,{color:"warning",type:"submit",className:"button-label",onClick:function(t){if(t.preventDefault(),""===n)p.b.warning("Enter reciver Mail Id");else if(""===u)p.b.warning("Enter reciver Name");else if(""===g)p.b.warning("Select Document Expiry");else{var a=new Date;console.log(a),console.log(g),"1m"===g?a.setMonth(a.getMonth()+1):"1d"===g?a.setDate(a.getDate()+1):"1w"===g?a.setDate(a.getDate()+7):"1h"===g&&a.setHours(a.getHours()+1);var o={email:n,name:u,expiry:a,allowdownload:j,docs:e.mailAtt,status:0,user:null===G||void 0===G?void 0:G._id};S.a.post("/backendapi/documentmail",o,{headers:{Authorization:"Bearer ".concat(z)}}).then((function(t){"Success"===(null===t||void 0===t?void 0:t.data)?(r(""),f(""),h(""),k(!1),e.toggleModal(),p.b.success("Mail sent successfully")):p.b.error("Mail sent failed. Please check email address")})),console.log(o)}}},"Send")))))))))})),U=a(544),P=a(1),F=a.n(P);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=Object(c.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,l=W(e,["color","size"]);return i.a.createElement("svg",V({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));H.propTypes={color:F.a.string,size:F.a.oneOfType([F.a.string,F.a.number])},H.displayName="ChevronLeft";var J=H,Y=a(473),q=a(545),K=a.n(q),Q=function(e){var t=e.modal,a=e.setprevidx,n=e.loading,r=e.bloburl,o=e.selectedforpreview,l=e.selectedatt,c=e.previdx,s=e.setDeleteId,u=e.setopen,p=e.toggleModal,b=e.open,v=e.deletedoc,g=e.preview;return i.a.createElement(K.a,null,i.a.createElement(D.a,{isOpen:t,toggle:function(){p(),a(0)},centered:!0,size:"lg"},i.a.createElement(_.a,{toggle:function(){p(),a(0)},cssModule:{"modal-title":"w-100 text-center"}},i.a.createElement(d.a,null,i.a.createElement(m.a,null,!n&&i.a.createElement("a",{href:r,download:null===o||void 0===o?void 0:o.name,tabIndex:"_balnk",style:{margin:"10px",cursor:"pointer"}},i.a.createElement(E.a,{size:25,className:"collapse-icon"})),!n&&l.length>1&&i.a.createElement(O.a,{style:{margin:"5px",cursor:"pointer"},size:25,className:"collapse-icon",onClick:function(){s(o._id),u(!0)}})),i.a.createElement(m.a,{style:{color:"var(--warning)",fontSize:"1.45rem",fontWeight:"bold",letterSpacing:"1px"}},"Preview ",c+1," of ",null===l||void 0===l?void 0:l.length),i.a.createElement(m.a,{style:{justifyContent:"center"}},c>0&&!n&&i.a.createElement(J,{style:{cursor:"pointer"},size:25,onClick:function(){g(l[c-1]),a(c-1)}}),l.length>c+1&&!n&&i.a.createElement(Y.a,{size:25,style:{cursor:"pointer"},onClick:function(){g(l[c+1]),a(c+1)}})))),i.a.createElement(x.a,{className:"justify-content-center"},i.a.createElement(f.a,{handleConfirm:function(){v(),u(!1)},isOpen:b,closeModal:function(){return u(!1)}}),n&&i.a.createElement(N.a,{style:{marginLeft:"48%"},color:"warning",size:"lg"}),!n&&i.a.createElement("div",null,i.a.createElement("iframe",{style:{height:"400px",width:"100%"},className:"myiframe",title:"Aaq",src:"".concat(r,"#zoom=200")})))))},X=a(148),Z=sessionStorage.getItem("authtoken"),$=JSON.parse(sessionStorage.getItem("logInUserData"));t.default=Object(b.b)((function(e){var t;return{docsList:null===(t=e.dataList)||void 0===t?void 0:t.docsList}}),(function(e){return{getDocuments:function(t){return e(Object(j.h)(t))}}}))((function(e){var t=[{name:"View / Send",sortable:!1,minWidth:"110px",cell:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{style:{cursor:"pointer"},size:20,onClick:function(){x(e._id),C(e.attachment),Ve(),We(e.attachment[0])}}),i.a.createElement(h.a,{size:20,style:{cursor:"pointer"},className:"collapse-icon ml-1",onClick:function(){return Je(e.attachment)}}))}},{name:"Name / Alias",selector:"alias",sortable:!0},{name:"Expiry",selector:"expiry",sortable:!0,cell:function(e){return(null===e||void 0===e?void 0:e.expiry)&&Object(X.b)(e.expiry.split("T")[0])}},{name:"Created At",sortable:!0,cell:function(e){return(null===e||void 0===e?void 0:e.createdAt)&&Object(X.b)(e.createdAt.split("T")[0])}},{name:"Type",selector:"type",sortable:!0},{name:"Action",sortable:!1,cell:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{size:20,className:"collapse-icon mr-1",onClick:function(){return He(e.attachment)},style:{cursor:"pointer"}}),"Document Vault"===e.type&&i.a.createElement(O.a,{size:20,className:"collapse-icon csp",onClick:function(){Fe(e._id),Me(!0)},style:{cursor:"pointer"}}))}}],a=Object(c.useState)(!1),n=Object(l.a)(a,2),s=n[0],b=n[1],j=Object(c.useState)(),A=Object(l.a)(j,2),w=A[0],L=A[1],k=Object(c.useState)(),D=Object(l.a)(k,2),_=D[0],x=D[1],N=Object(c.useState)([]),T=Object(l.a)(N,2),I=T[0],C=T[1],z=Object(c.useState)(0),G=Object(l.a)(z,2),R=G[0],M=G[1],P=Object(c.useState)([]),F=Object(l.a)(P,2),V=F[0],W=F[1],H=Object(c.useState)([]),J=Object(l.a)(H,2),Y=J[0],q=J[1],K=Object(c.useState)(!1),ee=Object(l.a)(K,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(!1),re=Object(l.a)(ne,2),oe=re[0],le=re[1],ce=Object(c.useState)(""),ie=Object(l.a)(ce,2),se=ie[0],ue=ie[1],de=Object(c.useState)(""),me=Object(l.a)(de,2),pe=me[0],fe=me[1],be=Object(c.useState)(""),ve=Object(l.a)(be,2),ge=ve[0],he=ve[1],Ee=Object(c.useState)([]),Oe=Object(l.a)(Ee,2),ye=Oe[0],je=Oe[1],Ae=Object(c.useState)([]),we=Object(l.a)(Ae,2),Le=we[0],ke=we[1],Se=Object(c.useState)(),De=Object(l.a)(Se,2),_e=De[0],xe=De[1],Ne=Object(c.useState)(!1),Te=Object(l.a)(Ne,2),Ie=Te[0],Ce=Te[1],ze=Object(c.useState)(!1),Ge=Object(l.a)(ze,2),Re=Ge[0],Me=Ge[1],Be=Object(c.useState)(!1),Ue=Object(l.a)(Be,2),Pe=Ue[0],Fe=Ue[1],Ve=function(){b(!s)};Object(c.useEffect)((function(){if(null===Y||void 0===Y?void 0:Y.length){var t,a=[];null===e||void 0===e||null===(t=e.docsList)||void 0===t||t.filter((function(t){var n=t.type,r=!1;return Y.forEach((function(o){var l,c;return"all"===(null===o||void 0===o||null===(l=o.name)||void 0===l?void 0:l.toLowerCase())?je(e.docsList):(r=(null===o||void 0===o||null===(c=o.name)||void 0===c?void 0:c.toLowerCase())===(null===n||void 0===n?void 0:n.toLowerCase()))?(a.push(t),r):void 0})),r}));je(a)}else je(e.docsList)}),[Y]);var We=function(e){ae(!0);var t=sessionStorage.getItem("authtoken");S.a.get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){var t;L(e.data[0]);var a=null===(t=e.data[0])||void 0===t?void 0:t.media,n=u.a.decompressFromUTF16(a),r=Object(v.a)(n);if(r){for(var o,l=atob(null===r||void 0===r?void 0:r.split("base64,")[1]),c=new Array(l.length),i=0;i<l.length;i++)c[i]=l.charCodeAt(i);var s=new Uint8Array(c),d=new Blob([s],{type:null===(o=e.data[0])||void 0===o?void 0:o.type}),m=URL.createObjectURL(d);xe(m),ae(!1)}else Ve(),p.b.warning("Something went wrong")}))},He=function(e){e.forEach((function(e){var t=sessionStorage.getItem("authtoken");S.a.get("/backendapi/sender/msg/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){for(var t,a,n,r=Object(v.a)(null===(t=e.data[0])||void 0===t?void 0:t.media),o=u.a.decompress(r),l=atob(o.split("base64,")[1]),c=new Array(l.length),i=0;i<l.length;i++)c[i]=l.charCodeAt(i);var s=new Uint8Array(c),d=new Blob([s],{type:null===(a=e.data[0])||void 0===a?void 0:a.type}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.setAttribute("download","".concat(null===(n=e.data[0])||void 0===n?void 0:n.name)),document.body.appendChild(p),p.click(),p.parentNode.removeChild(p)}))}))},Je=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:nt(!0),$e(!0),a=[],n=0;case 4:if(!(n<t.length)){e.next=10;break}return e.next=7,S.a.get("/backendapi/sender/msg/".concat(t[n]),{headers:{Authorization:"Bearer ".concat(Z)}}).then((function(e){var t,n,r=Object(v.a)(null===(t=e.data[0])||void 0===t?void 0:t.media),o=u.a.decompress(r),l=null===(n=e.data[0])||void 0===n?void 0:n.name;a.push({data:o,filename:l})}));case 7:n+=1,e.next=4;break;case 10:ct(a),nt(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){e.getDocuments({user:$,token:Z})}),[]),Object(c.useEffect)((function(){je(e.docsList)}),[e.docsList]);var Ye=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))},qe=function(){ue(""),he(""),fe(""),W([]),le(!0)},Ke=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o,l,c,i,s,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),Ce(!0),null===V||void 0===V?void 0:V.length){t.next=5;break}return p.b.error("No File Selected"),t.abrupt("return");case 5:n=[],(o={}).user=null===$||void 0===$?void 0:$._id,o.type="Document Vault",o.alias=Object(v.b)(se),o.desc=Object(v.b)(ge),o.expiry=Object(v.b)(pe),l=0;case 13:if(!(l<V.length)){t.next=23;break}return t.next=16,Ye(V[l]);case 16:c=t.sent,i=Object(v.b)(c),s=u.a.compressToUTF16(i),n.push({media:s,name:V[l].name,type:V[l].type,user:null===$||void 0===$?void 0:$._id});case 20:l++,t.next=13;break;case 23:o.attachment=n,(d=S.a.post("/backendapi/documents/add",o,{headers:{Authorization:"Bearer ".concat(Z)}})).then((function(t){qe(),"Success"!==t.data&&p.b.error(t.data),e.getDocuments({user:$,token:Z})})).catch((function(e){var t,a;ue(),he(),fe(),le(!0),console.log("err docs",e),(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&p.b.error(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.data)})).finally((function(){return Ce(!1)})),p.b.promise(d,{pending:"Uploading ...",success:"File uploaded successfully",error:"Something went wrong"});case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Qe=Object(c.useState)(!1),Xe=Object(l.a)(Qe,2),Ze=Xe[0],$e=Xe[1],et=Object(c.useState)(!0),tt=Object(l.a)(et,2),at=tt[0],nt=tt[1],rt=Object(c.useState)([]),ot=Object(l.a)(rt,2),lt=ot[0],ct=ot[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement(U.a,{alias:se,setalias:ue,expiry:pe,setexpiry:fe,desc:ge,setdesc:he,handleReset:qe,isDisabled:Ie||!pe||!V.length||new Date(pe).getTime()<(new Date).getTime(),uploading:Ie,submitDropzone:Ke,setfilesOndrop:function(e){le(!1),W(e)},resetDropzone:oe}),i.a.createElement(U.b,{filter:Y,handleFilter:function(e){var t=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){t.push({id:e.value,name:e.label})})),q(t)},search:function(e){if(null===ye||void 0===ye?void 0:ye.length){var t=ye.filter((function(t){var a=t.desc,n=t.alias,r=(null===a||void 0===a?void 0:a.toLowerCase().startsWith(e.toLowerCase()))||(null===n||void 0===n?void 0:n.toLowerCase().startsWith(e.toLowerCase())),o=(null===a||void 0===a?void 0:a.toLowerCase().includes(e.toLowerCase()))||(null===n||void 0===n?void 0:n.toLowerCase().includes(e.toLowerCase()));return!(!r&&!o)}));ke(t)}},columns:t,searchresult:Le,selectedStyle:y.E,documentList:ye}))),i.a.createElement(d.a,null,i.a.createElement(B,{modal:Ze,toggleModal:function(){return $e(!Ze)},loading:at,mailAtt:lt}),i.a.createElement(f.a,{handleConfirm:function(){S.a.delete("/backendapi/document/deletebyid/".concat(Pe),{headers:{Authorization:"Bearer ".concat(Z)}}).then((function(t){e.getDocuments({user:$,token:Z}),p.b.success("Document Deleted Successfully")})),Me(!1)},isOpen:Re,closeModal:function(){return Me(!1)}}),s&&i.a.createElement(Q,{modal:s,setprevidx:M,loading:te,bloburl:_e,selectedforpreview:w,selectedatt:I,previdx:R,setDeleteId:Fe,setopen:Me,open:Re,toggleModal:Ve,deletedoc:function(t){S.a.delete("/backendapi/document/media/deletebyid/".concat(Pe,"/").concat(_),{headers:{Authorization:"Bearer ".concat(Z)}}).then((function(t){e.getDocuments({user:$,token:Z}),C([]),M(0),Ve(),p.b.success("Attachment deleted successfully!")})).catch()},preview:We})))}))}}]);