(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[28],{511:function(e,a,t){"use strict";var n=t(6),r=t(9),l=t(0),s=t.n(l),c=t(1),o=t.n(c),i=t(8),u=t.n(i),m=t(4),d=["className","cssModule","color","body","inverse","outline","tag","innerRef"],b={tag:m.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g=function(e){var a=e.className,t=e.cssModule,l=e.color,c=e.body,o=e.inverse,i=e.outline,b=e.tag,g=e.innerRef,f=Object(r.a)(e,d),v=Object(m.m)(u()(a,"card",!!o&&"text-white",!!c&&"card-body",!!l&&(i?"border":"bg")+"-"+l),t);return s.a.createElement(b,Object(n.a)({},f,{className:v,ref:g}))};g.propTypes=b,g.defaultProps={tag:"div"},a.a=g},517:function(e,a,t){"use strict";var n=t(6),r=t(9),l=t(0),s=t.n(l),c=t(1),o=t.n(c),i=t(8),u=t.n(i),m=t(4),d=["className","cssModule","noGutters","tag","form","widths"],b=o.a.oneOfType([o.a.number,o.a.string]),g={tag:m.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},f={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,c=e.tag,o=e.form,i=e.widths,b=Object(r.a)(e,d),g=[];i.forEach((function(a,t){var n=e[a];if(delete b[a],n){var r=!t;g.push(r?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var f=Object(m.m)(u()(a,l?"no-gutters":null,o?"form-row":"row",g),t);return s.a.createElement(c,Object(n.a)({},b,{className:f}))};v.propTypes=g,v.defaultProps=f,a.a=v},727:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t(0),l=t.n(r),s=t(25),c=t.n(s),o=t(517),i=t(465),u=t(109),m=t(511),d=t(503),b=t(466);a.default=function(e){var a=Object(r.useState)(!1),t=Object(n.a)(a,2),s=t[0],g=t[1],f=Object(r.useState)(),v=Object(n.a)(f,2),p=v[0],h=v[1],E=Object(r.useState)([]),j=Object(n.a)(E,2),w=j[0],O=j[1];return Object(r.useEffect)((function(){var a=e.match.params.userkey;""!==a&&c.a.get("/backendapi/sender/msg/getbyid/".concat(a)).then((function(e){e.data.length>0?(O(e.data[0]),c.a.get("/backendapi/sender/msg/".concat(e.data[0].msg)).then((function(e){for(var a,t,n=null===(a=e.data[0])||void 0===a||null===(t=a.media)||void 0===t?void 0:t.split("base64,"),r=n[0].substring(5,n[0].length-1),l=atob(n[1]),s=new Array(l.length),c=0;c<l.length;c++)s[c]=l.charCodeAt(c);var o=new Uint8Array(s),i=new Blob([o],{type:r}),u=URL.createObjectURL(i);h(u),g(!0)})).catch((function(e){g(!1)}))):alert("Invalid Or Expired link")}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.a,null,l.a.createElement(i.a,{sm:"12",className:"text-center"},l.a.createElement(u.a,{className:"form-label-group"},l.a.createElement("h1",{style:{marginTop:"-80px"}},null===w||void 0===w?void 0:w.title),l.a.createElement("h3",null,null===w||void 0===w?void 0:w.desc),l.a.createElement("h3",null,(null===w||void 0===w?void 0:w.signature)?"From : ".concat(w.signature):""))),l.a.createElement(i.a,{sm:"12"},l.a.createElement(m.a,{className:"auth-card bg-transparent shadow-none rounded-0 mb-0 w-100"},l.a.createElement(d.a,{className:"text-center"},!s&&l.a.createElement(b.a,{color:"warning",size:"lg"}),s&&l.a.createElement("div",null,l.a.createElement("iframe",{style:{height:"400px",width:"100%"},className:"myiframe",title:"Aaq",src:"".concat(p,"#zoom=200")})))))))}}}]);