(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[265],{50398:function(e,t,n){"use strict";n.r(t);var a=n(74165),r=n(15861),o=n(29439),i=n(47313),c=n(44610),l=n(9506),u=n(51771),s=n(19641),d=n(71003),f=n(56605),h=n(49709),p=n(80836),m=n(19536),v=n(48737),Z=n(96327),x=n(63861),w=n(35192),j=n(71207),D=n(11610),b=n(66135),k=n(10226),g=n(51427),C=n(46417),S=function(e){return(0,C.jsx)(w.Z,{onClick:function(){var t;(null===(t=e.row.usage)||void 0===t||!t.length)&&e.setRow()}})},y=function(e){return(0,C.jsx)(j.Z,{onClick:function(){return e.currentData(e.row)}})};t.default=(0,b.$j)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading,filteredData:e.dataList.filteredData}}),(function(e){return{deleteData:function(t){return e((0,g.SR)(t))},updateData:function(t){return e((0,g.VA)(t))},addData:function(t){return e((0,g.Id)(t))},getData:function(t){return e((0,g.Yu)(t))},filterData:function(t){return e((0,g.cm)(t))},dataTest:function(){return e({type:"GET_ALL_DATA_LOADING",data:!0})}}}))((function(e){var t=[{label:"Name",numeric:!1,id:"name",cell:function(e){return(0,C.jsx)("p",{title:e.name,children:e.name})}},{label:"Relation",numeric:!1,id:"relation",cell:function(e){return(0,C.jsx)("p",{title:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation),children:(null===e||void 0===e?void 0:e.relation1)||(null===e||void 0===e?void 0:e.relation)})}},{label:"Contact",numeric:!1,id:"primaryContact",cell:function(e){return(0,C.jsx)("p",{title:e.primaryContact,children:e.primaryContact})}},{label:"Email",numeric:!1,id:"email",cell:function(e){return(0,C.jsx)("p",{title:e.email,children:e.email})}},{label:"Status",numeric:!1,id:"unused",cell:function(e){var t;return null!==(t=e.usage)&&void 0!==t&&t.length?(0,C.jsx)(c.Z,{label:"Used",color:"primary",sx:{width:"80px"}}):(0,C.jsx)(c.Z,{label:"Unused",sx:{width:"80px"}})}},{label:"Edit",numeric:!1,cell:function(e){return(0,C.jsx)(y,{row:e,currentData:he})}},{label:"Trash",cell:function(e){return(0,C.jsx)(S,{row:e,setRow:function(){F(!0),M(e)},deleteRow:se})}}],n=(0,i.useState)({}),w=(0,o.Z)(n,2),j=w[0],b=w[1],g=(0,i.useState)([]),L=(0,o.Z)(g,2),P=L[0],R=L[1],A=(0,i.useState)(null),z=(0,o.Z)(A,2),E=z[0],M=z[1],_=(0,i.useState)(!1),I=(0,o.Z)(_,2),N=I[0],F=I[1],T=(0,i.useState)([]),O=(0,o.Z)(T,2),V=O[0],H=O[1],B=(0,i.useState)(""),G=(0,o.Z)(B,2),U=G[0],$=G[1],q=(0,i.useState)(!1),W=(0,o.Z)(q,2),Y=W[0],J=W[1],K=(0,i.useState)(null),Q=(0,o.Z)(K,2),X=Q[0],ee=Q[1],te=(0,i.useState)(""),ne=(0,o.Z)(te,2),ae=ne[0],re=ne[1],oe=(0,i.useState)(!1),ie=(0,o.Z)(oe,2),ce=ie[0],le=ie[1];(0,i.useEffect)((function(){var t,n;if(null!==(t=e.dataList)&&void 0!==t&&t.allData){var a=e.dataList.allData;a&&a.forEach((function(e,t){if(e.date){var n=new Date(e.date),r=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),o=new Intl.DateTimeFormat("en",{month:"long"}).format(n);a[t].seperator="".concat(o,", ").concat(r)}}));var r=(n="seperator",a.reduce((function(e,t){return e[t[n]]||(e[t[n]]=[]),e[t[n]].push(t),e}),{}));b(r)}R(e.dataList.data),H(e.dataList.filteredData)}),[e.dataList]),(0,i.useEffect)((function(){var t;e.filteredData&&(null===(t=e.filteredData)||void 0===t?void 0:t.length)>0&&(R(e.filteredData),H(e.filteredData))}),[e.filteredData]),(0,i.useEffect)((function(){e.getData(),e.dataTest()}),[]);var ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];J(e),!0===t&&(ee(null),re(t))},se=function(t){e.deleteData(t),e.getData()},de=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return le(!0),t.prev=1,t.next=4,e.addData(n);case 4:le(!1),ue(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),le(!1),x.A9;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),fe=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n.name&&""!==n.relation&&""!==n.email&&""!==n.contact1){t.next=4;break}return t.abrupt("return",(0,C.jsx)(x.A9,{handleClick:function(){},openSnack:!0,openSnackMsg:"Please Fill All Mandatory Details",severity:"error"}));case 4:return le(!0),t.prev=5,t.next=8,e.updateData(n);case 8:e.getData(),le(!1),ue(!1,!0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),le(!1);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),he=function(e){ee(e),ue(!0)};return(0,C.jsxs)(l.Z,{children:[(0,C.jsx)(Z.Z,{handleConfirm:function(){se(E),F(!1)},isOpen:N,closeModal:function(){return F(!1)}}),(0,C.jsx)(u.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,C.jsxs)(s.ZP,{container:!0,justifyContent:"space-between",spacing:2,children:[(0,C.jsx)(s.ZP,{item:!0,children:(0,C.jsx)(d.Z,{variant:"outlined",onClick:function(){return ue(!0,!0)},children:"Add Nominee"})}),(0,C.jsx)(s.ZP,{item:!0,children:(0,C.jsx)(f.Z,{onChange:function(t){return function(t){$(t.target.value),e.filterData(t.target.value)}(t)},placeholder:"Search"})}),(0,C.jsx)(s.ZP,{item:!0,children:(0,C.jsx)(h.Z,{title:"Download",onClick:function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.preventDefault();var a=v.P6.book_new(),r="NomineeList.xlsx";if(n){var o=[];t[n].forEach((function(e){o.push({Month:e.seperator,Date:e.date,Label:e.label,Item:e.item,Amount:"\u20b9".concat(e.amount),Description:e.desc})}));var i=v.P6.json_to_sheet(o),c=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}];i["!cols"]=c,i.A1.s={font:{sz:24,bold:!0,color:{rgb:"FFAA00"}}},console.log(i),v.P6.book_append_sheet(a,i,n),r="Spediture_Report-".concat(n,".xlsx")}else Object.keys(t).forEach((function(e){var n=[];t[e].forEach((function(e){n.push({Name:e.name,Relation:e.relation1||e.relation,Email:e.email,"Contact No.":e.primaryContact,"Whatsapp No.":e.secondaryContact,Address:e.address})}));var r=v.P6.json_to_sheet(n);r["!cols"]=[{wch:14},{wch:10},{wch:25},{wch:20},{wch:7},{wch:25},{wch:10}],v.P6.book_append_sheet(a,r,e)}));(0,v.NC)(a,r)}(e,j)},children:(0,C.jsx)(p.Z,{children:(0,C.jsx)(D.Z,{})})})})]})}),(0,C.jsx)(m.Z,{}),e.listLoading?(0,C.jsx)(x.$j,{}):(0,C.jsx)(x.Gn,{columns:t,rows:U.length?V:P}),(0,C.jsx)(k.Z,{show:Y,data:X,updateData:fe,addData:de,isLoading:ce,handleSidebar:ue,thumbView:e.thumbView,getData:e.getData,dataParams:e.parsedFilter,addNew:ae})]})}))},49969:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(4942),r=n(63366),o=n(87462),i=n(47313),c=n(21921),l=n(17551),u=n(97423),s=n(54750),d=n(46417),f=(0,s.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(91615),v=n(77342),Z=n(17592),x=n(52569),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],j=(0,Z.ZP)(u.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,m.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,o.Z)({color:(n.vars||n).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===r.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,a.Z)(t,"&.".concat(x.Z.checked,", &.").concat(x.Z.indeterminate),{color:(n.vars||n).palette[r.color].main}),(0,a.Z)(t,"&.".concat(x.Z.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),D=(0,d.jsx)(h,{}),b=(0,d.jsx)(f,{}),k=(0,d.jsx)(p,{}),g=i.forwardRef((function(e,t){var n,a,l=(0,v.Z)({props:e,name:"MuiCheckbox"}),u=l.checkedIcon,s=void 0===u?D:u,f=l.color,h=void 0===f?"primary":f,p=l.icon,Z=void 0===p?b:p,g=l.indeterminate,C=void 0!==g&&g,S=l.indeterminateIcon,y=void 0===S?k:S,L=l.inputProps,P=l.size,R=void 0===P?"medium":P,A=(0,r.Z)(l,w),z=C?y:Z,E=C?y:s,M=(0,o.Z)({},l,{color:h,indeterminate:C,size:R}),_=function(e){var t=e.classes,n=e.indeterminate,a=e.color,r={root:["root",n&&"indeterminate","color".concat((0,m.Z)(a))]},i=(0,c.Z)(r,x.y,t);return(0,o.Z)({},t,i)}(M);return(0,d.jsx)(j,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":C},L),icon:i.cloneElement(z,{fontSize:null!=(n=z.props.fontSize)?n:R}),checkedIcon:i.cloneElement(E,{fontSize:null!=(a=E.props.fontSize)?a:R}),ownerState:M,ref:t},A,{classes:_}))}))},52569:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var a=n(32298);function r(e){return(0,a.Z)("MuiCheckbox",e)}var o=(0,n(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);t.Z=o},33604:function(e,t,n){"use strict";var a=n(87462),r=n(63366),o=n(47313),i=n(83061),c=n(21921),l=n(47605),u=n(17592),s=n(77342),d=n(93174),f=n(63909),h=n(46417),p=["className","id"],m=(0,u.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),v=o.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiDialogTitle"}),l=n.className,u=n.id,v=(0,r.Z)(n,p),Z=n,x=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},d.a,t)}(Z),w=o.useContext(f.Z).titleId,j=void 0===w?u:w;return(0,h.jsx)(m,(0,a.Z)({component:"h2",className:(0,i.default)(x.root,l),ownerState:Z,ref:t,variant:"h6",id:j},v))}));t.Z=v},20067:function(){}}]);