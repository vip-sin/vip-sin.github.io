"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[412],{32936:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var l=t(29439),i=t(47313),r=t(9506),a=t(51771),s=t(19641),c=t(71003),o=t(56605),u=t(19536),d=t(29748),h=t(93433),x=t(57798),f=t(35192),Z=t(71207),v=t(36936),m=t(39500),j=t(54285),p=t(93935),w=t(6759),g=t(7449),C=t(42988),b=t(70941),S=t(52741),y=t(94469),D=t(85028),V=t(67176),k=t(46417),z=function(e){e.row;return(0,k.jsx)(p.Z,{children:(0,k.jsxs)(w.Z,{children:[(0,k.jsx)(g.Z,{children:(0,k.jsxs)(C.Z,{children:[(0,k.jsx)(b.Z,{children:"Type"}),(0,k.jsx)(b.Z,{children:"Value"})]})}),(0,k.jsx)(S.Z,{children:[{name:"Row 1",value1:"Value 1"},{name:"Row 2",value1:"Value 3"},{name:"Row 3",value1:"Value 5"}].map((function(e){return(0,k.jsxs)(C.Z,{children:[(0,k.jsx)(b.Z,{component:"th",scope:"row",children:e.name}),(0,k.jsx)(b.Z,{children:e.value1})]},e.name)}))})]})})},E=function(e){var n=(0,i.useState)(0),t=(0,l.Z)(n,2),r=t[0],a=t[1];return(0,k.jsx)(y.Z,{open:e.open,onClose:e.onClose,children:(0,k.jsxs)(s.ZP,{container:!0,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(D.Z,{value:r,onChange:function(e,n){a(n)},children:[(0,k.jsx)(V.Z,{label:"Assets"}),(0,k.jsx)(V.Z,{label:"Liabilities"})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,hidden:0!==r,children:(0,k.jsx)(z,{tabValue:r,row:e.crow})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,hidden:1!==r,children:(0,k.jsx)(z,{tabValue:r,row:e.crow})})]})})};function M(e){var n=e.value,t=e.filteredData,r=e.setcurrentData,a=(0,i.useState)([]),s=(0,l.Z)(a,2),c=s[0],o=s[1],u=(0,i.useState)(!1),d=(0,l.Z)(u,2),p=d[0],w=d[1],g=(0,i.useState)([]),C=(0,l.Z)(g,2),b=C[0],S=C[1],y=(0,i.useState)(null),D=(0,l.Z)(y,2),V=D[0],z=D[1],M=(0,j.Z)().setSnack,P=i.useState(!1),F=(0,l.Z)(P,2),L=F[0],R=F[1],A=(0,v.mB)(),H=A.data,N=A.isFetching,T=(0,i.useState)(null),B=(0,l.Z)(T,2),I=B[0],O=B[1],G=(0,v.Yl)(),Y=(0,l.Z)(G,2),q=Y[0],J=Y[1];(0,i.useEffect)((function(){null!==J&&void 0!==J&&J.isSuccess&&M({msg:"Nominee deleted successfully",severity:"success"}),null!==J&&void 0!==J&&J.isError&&M({msg:J.error,severity:"error"})}),[J]);var K=function(e){var n,t=e.row;return(0,k.jsx)(f.Z,{color:null!==t&&void 0!==t&&null!==(n=t.usage)&&void 0!==n&&n.length?"text.disabled":"primary.light",size:15,onClick:function(){var e;null!==(e=t.usage)&&void 0!==e&&e.length||(w(!0),O(t))}})},Q=[{label:"Name",width:"25%",numeric:!1,id:"name",cell:function(e){return(0,k.jsx)("p",{onClick:function(){return function(e){R(!0),z(e),console.log("selected dialog for",e)}(e)},title:e.name,children:e.name})}},{label:"Relation",width:"25%",numeric:!1,id:"relation",cell:function(e){var n,t,l;return(0,k.jsx)("p",{children:null!==e&&void 0!==e&&null!==(n=e.relation1)&&void 0!==n&&null!==(t=n[0])&&void 0!==t&&t.length?null===e||void 0===e||null===(l=e.relation1)||void 0===l?void 0:l[0]:null===e||void 0===e?void 0:e.relation})}},{label:"Contact",width:"20%",numeric:!1,id:"primaryContact",cell:function(e){return(0,k.jsx)("p",{title:e.primaryContact,children:e.primaryContact})}},{label:"Email",width:"20%",numeric:!1,id:"email",cell:function(e){return(0,k.jsx)("p",{title:e.email,children:e.email})}},{label:"Edit",width:"5%",numeric:!1,cell:function(e){return(0,k.jsx)(Z.Z,{onClick:function(){return r(e)}})}},{label:"Bin",width:"5%",id:"unused",cell:function(e){return(0,k.jsx)(K,{row:e})}}];return(0,i.useEffect)((function(){if(H){var e=(0,h.Z)(H);e&&e.forEach((function(n,t){if(n.date){var l=new Date(n.date),i=new Intl.DateTimeFormat("en",{year:"numeric"}).format(l),r=new Intl.DateTimeFormat("en",{month:"long"}).format(l);e[t].seperator="".concat(r,", ").concat(i)}}))}o(H),S(H)}),[H]),(0,i.useEffect)((function(){t&&(null===t||void 0===t?void 0:t.length)>0&&(o(t),S(t))}),[t]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z,{handleConfirm:function(){q(I),w(!1)},isOpen:p,closeModal:function(){return w(!1)}}),(0,k.jsx)(E,{open:L,onClose:function(){R(!1),z(null)},crow:V}),(0,k.jsx)(x.Gn,{columns:Q,ad:!0,isLoading:N,rows:null!==n&&void 0!==n&&n.length?b:c})]})}var P=function(e){var n=(0,i.useState)(""),t=(0,l.Z)(n,2),h=t[0],x=t[1],f=(0,i.useState)(!1),Z=(0,l.Z)(f,2),v=Z[0],m=Z[1],j=(0,i.useState)(null),p=(0,l.Z)(j,2),w=p[0],g=p[1];return(0,k.jsxs)(r.Z,{children:[(0,k.jsx)(a.Z,{sx:{pl:{sm:2},pr:{xs:0}},children:(0,k.jsxs)(s.ZP,{container:!0,justifyContent:"space-between",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,children:(0,k.jsx)(c.Z,{variant:"contained",onClick:function(){return m(!0)},children:"Add Nominee"})}),(0,k.jsx)(s.ZP,{item:!0,children:(0,k.jsx)(o.Z,{onChange:function(n){return function(n){x(n.target.value),e.filterData(n.target.value)}(n)},placeholder:"Search"})})]})}),(0,k.jsx)(s.ZP,{container:!0,item:!0,xs:12,sm:9,sx:{pr:1},children:(0,k.jsx)(u.Z,{sx:{width:"100%"}})}),(0,k.jsx)(M,{value:h,setcurrentData:g}),(v||w)&&(0,k.jsx)(d.Z,{currentData:w,setcurrentData:g,handleSidebar:function(){return m(!1)}})]})}},28790:function(e,n,t){var l=t(54750),i=t(46417);n.Z=(0,l.Z)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle")},8586:function(e,n,t){var l=t(54750),i=t(46417);n.Z=(0,l.Z)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},85585:function(e,n,t){var l=t(54750),i=t(46417);n.Z=(0,l.Z)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined")},35192:function(e,n,t){var l=t(54750),i=t(46417);n.Z=(0,l.Z)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},71207:function(e,n,t){var l=t(54750),i=t(46417);n.Z=(0,l.Z)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")}}]);