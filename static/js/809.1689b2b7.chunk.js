"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[809],{1087:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var i=t(92336),o=t(2884),l=t(24694),a=t(6306),r=t(46417);function s(e){var n=e.collapseID,t=(e.setcollapseID,e.collapseItem),s=e.formatme,u=e.toggleCollapse;return(0,r.jsxs)(i.Z,{sx:{my:.5},expanded:n===t.id,onChange:function(){return u(t.id)},children:[(0,r.jsx)(l.Z,{expandIcon:(0,r.jsx)(a.Z,{}),children:s(t.title)}),(0,r.jsx)(o.Z,{children:t.content})]})}},18825:function(e,n,t){t.d(n,{z:function(){return s}});var i=t(71535),o=t(40229),l=t(22449),a=(t(47313),t(94843)),r=t(46417),s=function(e){return(0,r.jsxs)(i.ZP,{container:!0,sx:{px:2.5,py:1},children:[(0,r.jsx)(i.ZP,{item:!0,xs:6,children:(0,r.jsx)(a.ll,{title:e.heading})}),(0,r.jsx)(i.ZP,{item:!0,xs:6,children:(0,r.jsx)(o.Z,{display:"flex",justifyContent:"flex-end",children:(0,r.jsx)(l.Z,{onChange:function(n){return e.search(n.target.value)},placeholder:"Search"})})})]})}},13798:function(e,n,t){t.d(n,{GR:function(){return f},UB:function(){return v}});var i=t(29439),o=t(47313),l=t(96900),a=t(34940),r=t(56972),s=t(12613),u=t(1087),d=t(18825),c=t(46417);n.ZP=function(e){var n,t,v=(0,o.useState)(""),f=(0,i.Z)(v,2),m=f[0],h=f[1],p=null===(n=JSON.parse(sessionStorage.getItem("logInUserData")))||void 0===n?void 0:n.assets,C=null===(t=JSON.parse(sessionStorage.getItem("logInUserData")))||void 0===t?void 0:t.liabilities,L=(0,o.useState)([]),g=(0,i.Z)(L,2),x=g[0],y=g[1],w=(0,o.useState)(),Z=(0,i.Z)(w,2),b=Z[0],j=Z[1],D=e.collapseItems,A=e.colorOption,I=function(e){return null!==A&&void 0!==A&&A[e]?A[e]:e},N=function(e){h(m!==e?e:"")},P=(null===b||void 0===b?void 0:b.length)>0?x:D,S=P.length>0?P.map((function(e){return(0,c.jsx)(o.Fragment,{children:(0,c.jsx)(u.Z,{collapseID:m,setcollapseID:h,collapseItem:e,formatme:I,toggleCollapse:N})},e.id)})):e.isLoading?(0,c.jsx)(s.$j,{}):(0,c.jsx)("span",{style:{fontSize:"14px",marginTop:"-10px"},children:"No Data Found"});return(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(d.z,{heading:e.heading,search:function(n){j(n);var t=D.filter((function(t){var i,o,l=(e.assetShow?null===(i=C[t.id-1])||void 0===i?void 0:i.liabilityDetails:null===(o=p[t.id-1])||void 0===o?void 0:o.assetDetails).filter((function(e){var t=e.val.toLowerCase().startsWith(n.toLowerCase()),i=e.val.toLowerCase().includes(n.toLowerCase());return!(!t&&!i)})),a=t.title.toLowerCase().startsWith(n.toLowerCase()),r=t.title.toLowerCase().includes(n.toLowerCase());return!!(a||r||l.length>0)}));y(t)}}),(0,c.jsx)(a.Z,{}),(0,c.jsx)(r.Z,{children:S})]})};var v=["Lendor Details","Card Details *","Account Details","EMI Details *","Loan Details*","Scheme Details","Payments Details *","Amount","Amount *","Liability Name","Scheme Details *","Remarks"],f=["Bank Name","Debtor Name","Details","Currency Details","Depositor","Depositor *","Account Details","Account Details *","Bank Name *","Debtor Name *","Investment Firm *","Policy Number *","Amount *","Amount / Quantity","Policy Number","Property Type","Property Area","Retirals Details *","Amount","Remarks"]},60809:function(e,n,t){t.r(n);var i=t(1413),o=t(29439),l=t(47313),a=t(71535),r=t(22449),s=t(34940),u=t(13798),d=t(40229),c=t(38424),v=t(3204),f=t(12613),m=t(66135),h=t(30879),p=t(23317),C=t(36936),L=t(46417);n.default=(0,m.$j)((function(e){var n,t,i,o,l=e.reducer,a=l.dataList,r=l.customizer,s=void 0===r?{}:r;return{nomineesListData:null!==(n=null===a||void 0===a?void 0:a.allData)&&void 0!==n?n:[],messages:null===s||void 0===s||null===(t=s.language)||void 0===t?void 0:t.Liability,listLoading:a.totalRecordsLoading,assetListFromAPI:null!==(i=null===a||void 0===a?void 0:a.assetListFromAPI)&&void 0!==i?i:[],liabilityListFromAPI:null!==(o=null===a||void 0===a?void 0:a.liabilityListFromAPI)&&void 0!==o?o:[]}}),(function(e){return{getData:function(n){return e(C.SD.endpoints.getData.initiate())},callAssetAPI:function(n){return e(h.aN.endpoints.getAssetData.initiate(n))},callLiabilityAPI:function(n){return e(p.sk.endpoints.getLiabilityData.initiate())}}}))((function(e){var n=[{label:(0,L.jsx)("b",{children:"Type"}),id:"assetType",cell:function(e){return e.assetType}},{label:(0,L.jsx)("b",{children:"Nominated"}),id:"nominees",cell:function(e){return e.nominees}},{label:(0,L.jsx)("b",{children:"Details"}),id:"details",cell:function(e){return e.details}},{label:(0,L.jsx)("b",{children:"Value"}),id:"value",cell:function(e){return e.value}},{label:(0,L.jsx)("b",{children:"Remarks"}),id:"remarks",cell:function(e){return e.remarks}}],t=[{label:(0,L.jsx)("b",{children:"Nominee"}),id:"nomineeName",cell:function(e){return e.nomineeName}},{label:(0,L.jsx)("b",{children:"Relation"}),id:"relation",cell:function(e){return e.relation}},{label:(0,L.jsx)("b",{children:"Asset"}),id:"assetTypeValue",cell:function(e){return e.assetTypeValue}},{label:(0,L.jsx)("b",{children:"Liability"}),id:"liabilityTypeValue",cell:function(e){return e.liabilityTypeValue}}],m=l.useState(0),h=(0,o.Z)(m,2),p=h[0],C=h[1],g=(0,l.useState)([]),x=(0,o.Z)(g,2),y=x[0],w=x[1],Z=(0,l.useState)([]),b=(0,o.Z)(Z,2),j=b[0],D=b[1],A=(0,l.useState)([]),I=(0,o.Z)(A,2),N=I[0],P=I[1],S=(0,l.useState)([]),k=(0,o.Z)(S,2),T=k[0],R=k[1],W=(0,l.useState)([]),E=(0,o.Z)(W,2),M=E[0],F=E[1],V=(0,l.useState)([]),z=(0,o.Z)(V,2),B=z[0],G=z[1],U=e.listLoading,_=e.nomineesListData,O=e.getData,J=e.assetListFromAPI,$=e.callAssetAPI,Q=e.callLiabilityAPI,q=e.liabilityListFromAPI;(0,l.useEffect)((function(){U||((null===_||void 0===_||!_.length)&&O(),(null===J||void 0===J||!J.length)&&$(),(null===q||void 0===q||!q.length)&&Q())}),[]),(0,l.useEffect)((function(){null!==_&&void 0!==_&&_.length&&null!==J&&void 0!==J&&J.length&&null!==q&&void 0!==q&&q.length&&(H(),(null===_||void 0===_?void 0:_.length)&&K(_))}),[J,q,_]);var H=function(){var e=[];(null===J||void 0===J?void 0:J.length)&&J.forEach((function(n,t){var i={};if(n.id){var o,l="";(null===n||void 0===n||null===(o=n.nominees)||void 0===o?void 0:o.length)&&n.nominees.forEach((function(e,t){var i=_.filter((function(n){return n._id===e.id}));i.length&&(t===n.nominees.length-1?l+=i[0].name:l="".concat(l+i[0].name,", "))})),i.assetType=n.assetType,i.nominees=l;var a=n.assetDetails.length;n.assetDetails.forEach((function(e,n){u.GR.includes(e.key)&&(0===n&&(i.details=e.val),e.key.includes("Amount")&&(i.value=e.val),n===a-2&&(i.remarks=e.val))})),i.id=t+1,e.push(i)}})),R(null===e||void 0===e?void 0:e.reverse()),G(null===e||void 0===e?void 0:e.reverse());var n=[];(null===q||void 0===q?void 0:q.length)&&q.forEach((function(e,t){var i={};if(e.id){var o,l="";(null===e||void 0===e||null===(o=e.nominees)||void 0===o?void 0:o.length)&&e.nominees.forEach((function(n,t){var i=_.filter((function(e){return e._id===n.id}));i.length&&(t===e.nominees.length-1?l+=i[0].name:l="".concat(l+i[0].name,", "))})),i.assetType=e.liabilityType,i.nominees=l;var a=e.liabilityDetails.length;e.liabilityDetails.forEach((function(e,n){u.UB.includes(e.key)&&(0===n&&(i.details=e.val),e.key.includes("Amount")&&(i.value=e.val),n===a-2&&(i.remarks=e.val))})),i.id=t+1,n.push(i)}})),P(null===n||void 0===n?void 0:n.reverse()),F(null===n||void 0===n?void 0:n.reverse())},K=function(e){var n=[];e.forEach((function(e){var t=null!==T&&void 0!==T&&T.length?T.filter((function(n){return Array.isArray(null===n||void 0===n?void 0:n.nominees)&&n.nominees.findIndex((function(n){return n.id===e._id}))>-1})):[],i=null!==M&&void 0!==M&&M.length?M.filter((function(n){return Array.isArray(null===n||void 0===n?void 0:n.nominees)&&n.nominees.findIndex((function(n){return n.id===e._id}))>-1})):[],o="",l="";t.forEach((function(e,n){o+=" ".concat(n+1,"-").concat(e.assetType)})),i.forEach((function(e,n){l+=" ".concat(n+1,"-").concat(e.liabilityType)})),o=o.length>2?o:"-",l=l.length>2?l:"-",n.push({nomineeName:e.name,relation:e.relation,assetTypeValue:o,liabilityTypeValue:l})})),w(n),D(n)},X=[{label:"Assets",id:0,component:(0,L.jsx)(f.Gn,{columns:n,rows:null!==B&&void 0!==B&&B.length?B:[]})},{label:"Liabilities",id:1,component:(0,L.jsx)(f.Gn,{columns:n,rows:null!==N&&void 0!==N&&N.length?N:[]})},{label:"Nominees",id:2,component:(0,L.jsx)(f.Gn,{columns:t,rows:null!==y&&void 0!==y&&y.length?y:[]})}];return(0,L.jsxs)(d.Z,{children:[(0,L.jsxs)(a.ZP,{container:!0,sx:{px:2.5,py:1},children:[(0,L.jsx)(a.ZP,{item:!0,xs:6,children:(0,L.jsx)(c.Z,{value:p,onChange:function(e,n){C(n)},children:X.map((function(e,n){return(0,L.jsx)(v.Z,(0,i.Z)({label:e.label},(0,f.Pf)(n)),e.id)}))})}),(0,L.jsx)(a.ZP,{item:!0,xs:6,children:(0,L.jsx)(d.Z,{display:"flex",justifyContent:"flex-end",children:(0,L.jsx)(r.Z,{onChange:function(e){return function(e){if(e.length)if(p){if(p){console.log(T,M);var n=(null!==T&&void 0!==T&&T.length?T:[]).filter((function(n){var t,i,o=n.assetType,l=n.details,a=n.value,r=n.remarks;return t=(null===o||void 0===o?void 0:o.toLowerCase().startsWith(e.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().startsWith(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().startsWith(e.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().startsWith(e.toLowerCase())),i=(null===o||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().includes(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().startsWith(e.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().includes(e.toLowerCase())),t||(!t&&i?i:null)})),t=(null!==M&&void 0!==M&&M.length?M:[]).filter((function(n){var t,i,o=n.assetType,l=n.details,a=n.value,r=n.remarks;return t=(null===o||void 0===o?void 0:o.toLowerCase().startsWith(e.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().startsWith(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().startsWith(e.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().startsWith(e.toLowerCase())),i=(null===o||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase()))||(null===r||void 0===r?void 0:r.toLowerCase().includes(e.toLowerCase()))||(null===a||void 0===a?void 0:a.toLowerCase().startsWith(e.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().includes(e.toLowerCase())),t||(!t&&i?i:null)}));P(t),G(n)}}else{var i=(null!==j&&void 0!==j&&j.length?j:[]).filter((function(n){var t,i,o=n.nomineeName,l=n.relation;return t=(null===o||void 0===o?void 0:o.toLowerCase().startsWith(e.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().startsWith(e.toLowerCase())),i=(null===o||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase()))||(null===l||void 0===l?void 0:l.toLowerCase().includes(e.toLowerCase())),t||(!t&&i?i:null)}));w(i)}else P(M),G(T),w(j)}(e.target.value)},placeholder:"Search"})})})]}),(0,L.jsx)(s.Z,{}),X.map((function(e,n){return(0,L.jsx)(f.x4,{value:p,index:n,children:e.component},e.id)}))]})}))},6306:function(e,n,t){var i=t(64836);n.Z=void 0;var o=i(t(45045)),l=t(46417),a=(0,o.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=a},56972:function(e,n,t){var i=t(87462),o=t(63366),l=t(47313),a=t(83061),r=t(21921),s=t(64164),u=t(11236),d=t(65269),c=t(46417),v=["className","component"],f=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=l.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCardContent"}),l=t.className,s=t.component,m=void 0===s?"div":s,h=(0,o.Z)(t,v),p=(0,i.Z)({},t,{component:m}),C=function(e){var n=e.classes;return(0,r.Z)({root:["root"]},d.N,n)}(p);return(0,c.jsx)(f,(0,i.Z)({as:m,className:(0,a.default)(C.root,l),ownerState:p,ref:n},h))}));n.Z=m},65269:function(e,n,t){t.d(n,{N:function(){return o}});var i=t(32298);function o(e){return(0,i.Z)("MuiCardContent",e)}var l=(0,t(77430).Z)("MuiCardContent",["root"]);n.Z=l},96900:function(e,n,t){var i=t(87462),o=t(63366),l=t(47313),a=t(83061),r=t(21921),s=t(64164),u=t(11236),d=t(54295),c=t(74604),v=t(46417),f=["className","raised"],m=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),h=l.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCard"}),l=t.className,s=t.raised,d=void 0!==s&&s,h=(0,o.Z)(t,f),p=(0,i.Z)({},t,{raised:d}),C=function(e){var n=e.classes;return(0,r.Z)({root:["root"]},c.y,n)}(p);return(0,v.jsx)(m,(0,i.Z)({className:(0,a.default)(C.root,l),elevation:d?8:void 0,ref:n,ownerState:p},h))}));n.Z=h},74604:function(e,n,t){t.d(n,{y:function(){return o}});var i=t(32298);function o(e){return(0,i.Z)("MuiCard",e)}var l=(0,t(77430).Z)("MuiCard",["root"]);n.Z=l}}]);