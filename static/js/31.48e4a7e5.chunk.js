(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[31],{733:function(e,a,t){"use strict";t.r(a);var s=t(7),r=t(0),l=t.n(r),n=t(517),c=t(465),o=t(83),i=t(84),m=t(86),d=t(85),p=t(511),h=t(503),E=t(518),u=t.n(E),b=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{className:"".concat(this.props.className?this.props.className:"stats-card-body"," d-flex ").concat(this.props.iconRight||this.props.hideChart?this.props.iconRight?"justify-content-between flex-row-reverse align-items-center":this.props.hideChart&&!this.props.iconRight?"justify-content-center flex-column text-center":null:"flex-column align-items-start"," ").concat(this.props.hideChart?"pb-2":"pb-0"," pt-2")},l.a.createElement("div",{className:"icon-section"},l.a.createElement("div",{className:"avatar avatar-stats p-50 m-0 ".concat(this.props.iconBg?"bg-rgba-".concat(this.props.iconBg):"bg-rgba-primary")},l.a.createElement("div",{className:"avatar-content"},this.props.icon))),l.a.createElement("div",{className:"title-section"},l.a.createElement("h2",{className:"text-bold-600 mt-1 mb-25"},this.props.stat),l.a.createElement("p",{className:"mb-0"},this.props.statTitle))),!this.props.hideChart&&l.a.createElement(u.a,{options:this.props.options,series:this.props.series,type:this.props.type,height:this.props.height?this.props.height:100}))}}]),t}(l.a.Component),g=t(476),N=t(706),v=t(707),y=t(708),f={chart:{id:"subscribers",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},x=[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],w={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#28C76F"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},k=[{name:"Revenue",data:[350,275,400,300,350,300,450]}],C={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#EA5455"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},j=[{name:"Sales",data:[10,15,7,12,3,16]}],L={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#FF9F43"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},O=[{name:"Orders",data:[10,15,8,15,7,12,8]}],F=t(524),z=t(525),A=t(498),B=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={options:{chart:{toolbar:{show:!1},animations:{enabled:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:e.props.labelColor},legend:{show:!1},colors:[e.props.dangerLight,e.props.strokeColor],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.props.primary,e.props.strokeColor],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:e.props.strokeColor}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{color:e.props.strokeColor},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}},series:[{name:"Visted",data:[120,340,170,450,450,42,490,300]},{name:"Account Created",data:[90,300,150,350,330,180,250,240]}]},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(F.a,null,l.a.createElement(z.a,null,"User Conversation Statics"),l.a.createElement(A.a,{size:20,className:"cursor-pointer text-muted"})),l.a.createElement(h.a,null,l.a.createElement("div",{className:"d-flex justify-content-start mb-1"},l.a.createElement("div",{className:"mr-2"},l.a.createElement("p",{className:"mb-50 text-bold-600"},"Visited"),l.a.createElement("h2",{className:"text-bold-400"},l.a.createElement("span",{className:"text-success"},"12,300"))),l.a.createElement("div",null,l.a.createElement("p",{className:"mb-50 text-bold-600"},"Account Created"),l.a.createElement("h2",{className:"text-bold-400"},l.a.createElement("span",null,"8,700")))),l.a.createElement(u.a,{options:this.state.options,series:this.state.series,type:"line",height:260})))}}]),t}(l.a.Component),T=t(699),M=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={options:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[e.props.success],plotOptions:{radialBar:{size:110,startAngle:-140,endAngle:150,hollow:{size:"77%"},track:{background:e.props.strokeColor,strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:e.props.strokeColor,fontSize:"4rem"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"}},series:[Math.round(Number(13561)/Number(86617)*100)]},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(F.a,null,l.a.createElement(z.a,null,"Revenue Generated by Users"),l.a.createElement(T.a,{size:20,className:"cursor-pointer text-muted"})),l.a.createElement(h.a,null,l.a.createElement(u.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:260})),l.a.createElement("div",{className:"d-flex mt-2"},l.a.createElement("div",{className:"completed border-top border-right text-center w-50 py-1"},l.a.createElement("p",{className:"mb-50"},"Free User"),l.a.createElement("p",{className:"font-large-1 text-bold-600 mb-50"},"86,617"),l.a.createElement("h4",{className:" text-bold-600 mb-50 mt-1 text-primary"},"$0")),l.a.createElement("div",{className:"in-progress border-top border-right text-center w-50 py-1"},l.a.createElement("p",{className:"mb-50"},"Premium User"),l.a.createElement("p",{className:"font-large-1 text-bold-600 mb-50"},"13,561"),l.a.createElement("h4",{className:" text-bold-600 mb-50 mt-1 text-warning"},"$45000.00")),l.a.createElement("div",{className:"in-progress border-top border-right text-center w-50 py-1"},l.a.createElement("p",{className:"mb-50"},"Elite User"),l.a.createElement("p",{className:"font-large-1 text-bold-600 mb-50"},"7,561"),l.a.createElement("h4",{className:" text-bold-600 mb-50 mt-1 text-success"},"$45000.00"))))}}]),t}(l.a.Component),U=t(701),R=t(700),S=t(702),I=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(F.a,null,l.a.createElement(z.a,null,"Browser Statistics")),l.a.createElement(h.a,null,l.a.createElement("div",{className:"d-flex justify-content-between mb-25"},l.a.createElement("div",{className:"browser-info"},l.a.createElement("p",{className:"mb-25"},"Google Chrome"),l.a.createElement("h4",null,"73%")),l.a.createElement("div",{className:"stastics-info text-right"},l.a.createElement("span",null,"800 ",l.a.createElement(R.a,{size:15,className:"text-success"})),l.a.createElement("span",{className:"text-muted d-block"},"13:16"))),l.a.createElement(U.a,{className:"mb-2",value:"73"}),l.a.createElement("div",{className:"d-flex justify-content-between mb-25"},l.a.createElement("div",{className:"browser-info"},l.a.createElement("p",{className:"mb-25"},"Opera"),l.a.createElement("h4",null,"8%")),l.a.createElement("div",{className:"stastics-info text-right"},l.a.createElement("span",null,"-200 ",l.a.createElement(S.a,{size:15,className:"text-danger"})),l.a.createElement("span",{className:"text-muted d-block"},"13:16"))),l.a.createElement(U.a,{className:"mb-2",value:"8"}),l.a.createElement("div",{className:"d-flex justify-content-between mb-25"},l.a.createElement("div",{className:"browser-info"},l.a.createElement("p",{className:"mb-25"},"Firefox"),l.a.createElement("h4",null,"19%")),l.a.createElement("div",{className:"stastics-info text-right"},l.a.createElement("span",null,"100 ",l.a.createElement(R.a,{size:15,className:"text-success"})),l.a.createElement("span",{className:"text-muted d-block"},"13:16"))),l.a.createElement(U.a,{className:"mb-2",value:"19"}),l.a.createElement("div",{className:"d-flex justify-content-between mb-25"},l.a.createElement("div",{className:"browser-info"},l.a.createElement("p",{className:"mb-25"},"Internet Explorer"),l.a.createElement("h4",null,"27%")),l.a.createElement("div",{className:"stastics-info text-right"},l.a.createElement("span",null,"-450 ",l.a.createElement(S.a,{size:15,className:"text-danger"})),l.a.createElement("span",{className:"text-muted d-block"},"13:16"))),l.a.createElement(U.a,{className:"mb-2",value:"27"})))}}]),t}(l.a.Component),W=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={options:{chart:{stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"10%"}},colors:[e.props.primary,e.props.danger],dataLabels:{enabled:!1},grid:{borderColor:e.props.labelColor,padding:{left:0,right:0}},legend:{show:!0,position:"top",horizontalAlign:"left",offsetX:0,fontSize:"14px",markers:{radius:50,width:10,height:10}},xaxis:{labels:{style:{colors:e.props.strokeColor}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{color:e.props.strokeColor}}},tooltip:{x:{show:!1}}},series:[{name:"New Users",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Users",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}]},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(F.a,null,l.a.createElement(z.a,null,"User Retention")),l.a.createElement(h.a,null,l.a.createElement(u.a,{options:this.state.options,series:this.state.series,type:"bar",height:290,id:"client-retention-chart"})))}}]),t}(l.a.Component),J=t(502),D=t(508),H=t(486),P=t(487),Y=t(506),$=t(703),G=t(704),V=t(705),X=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={options:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["Desktop","Mobile","Tablet"],stroke:{width:0},colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight]}}},series:[58.6,34.9,6.5]},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(F.a,null,l.a.createElement(z.a,null,"Session By Device"),l.a.createElement(J.a,null,l.a.createElement(D.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",l.a.createElement(Y.a,{size:10})),l.a.createElement(H.a,{right:!0},l.a.createElement(P.a,null,"Last 28 days"),l.a.createElement(P.a,null,"Last Month"),l.a.createElement(P.a,null,"Last Year")))),l.a.createElement(h.a,{className:"pt-0"},l.a.createElement(u.a,{options:this.state.options,series:this.state.series,type:"donut",height:290}),l.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1 mt-2"},l.a.createElement("div",{className:"series-info d-flex align-items-center"},l.a.createElement($.a,{size:"18",className:"primary"}),l.a.createElement("span",{className:"text-bold-600 mx-50"},"Desktop"),l.a.createElement("span",{className:"align-middle"}," - 58.6%")),l.a.createElement("div",{className:"series-result"},l.a.createElement("span",{className:"align-middle"},"2%"),l.a.createElement(R.a,{size:"15",className:"success"}))),l.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1 mt-1"},l.a.createElement("div",{className:"series-info d-flex align-items-center"},l.a.createElement(G.a,{size:"18",className:"warning"}),l.a.createElement("span",{className:"text-bold-600 mx-50"},"Mobile"),l.a.createElement("span",{className:"align-middle"}," - 34.9%")),l.a.createElement("div",{className:"series-result"},l.a.createElement("span",{className:"align-middle"},"8%"),l.a.createElement(R.a,{size:"15",className:"success"}))),l.a.createElement("div",{className:"chart-info d-flex justify-content-between mt-1"},l.a.createElement("div",{className:"series-info d-flex align-items-center"},l.a.createElement(V.a,{size:"18",className:"danger"}),l.a.createElement("span",{className:"text-bold-600 mx-50"},"Tablet"),l.a.createElement("span",{className:"align-middle"}," - 6.5%")),l.a.createElement("div",{className:"series-result"},l.a.createElement("span",{className:"align-middle"},"-5%"),l.a.createElement(S.a,{size:"15",className:"danger"})))))}}]),t}(l.a.Component),q=t(596),K=t(597),Q=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={options:{chart:{dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight]}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:5},labels:["New","Returning","Referrals"]},series:[690,258,149]},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(F.a,null,l.a.createElement(z.a,null,"Users"),l.a.createElement(J.a,null,l.a.createElement(D.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",l.a.createElement(Y.a,{size:10})),l.a.createElement(H.a,{right:!0},l.a.createElement(P.a,null,"Last 28 days"),l.a.createElement(P.a,null,"Last Month"),l.a.createElement(P.a,null,"Last Year")))),l.a.createElement(h.a,{className:"pt-0"},l.a.createElement(u.a,{options:this.state.options,series:this.state.series,type:"pie",height:290})),l.a.createElement(q.a,{flush:!0},l.a.createElement(K.a,{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"item-info"},l.a.createElement("div",{className:"bg-primary",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),l.a.createElement("span",{className:"text-bold-600"},"New")),l.a.createElement("div",{className:"product-result"},l.a.createElement("span",null,"690"))),l.a.createElement(K.a,{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"item-info"},l.a.createElement("div",{className:"bg-warning",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),l.a.createElement("span",{className:"text-bold-600"},"Returning")),l.a.createElement("div",{className:"product-result"},l.a.createElement("span",null,"258"))),l.a.createElement(K.a,{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"item-info"},l.a.createElement("div",{className:"bg-danger",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),l.a.createElement("span",{className:"text-bold-600"},"Referrals")),l.a.createElement("div",{className:"product-result"},l.a.createElement("span",null,"149")))))}}]),t}(l.a.Component),Z=t(25),_=t.n(Z);a.default=function(){var e=l.a.useState(0),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.useEffect((function(){_.a.get("/backendapi/admin/usercount",{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("authtoken"))}}).then((function(e){r(e.data)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement("div",{className:"card-statistics card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,"User Statics")),l.a.createElement("div",{className:"statistics-body card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-md-6"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("div",{className:"avatar me-2 bg-rgba-primary"},l.a.createElement("span",{className:"avatar-content avt-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"primary"},l.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),l.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})))),l.a.createElement("div",{className:"my-auto ml-2"},l.a.createElement("h4",{className:"fw-bolder mb-0"},"230k"),l.a.createElement("p",{className:"font-small-3 mb-0 card-text"},"Total User")))),l.a.createElement("div",{className:"col-lg-3 col-md-6"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("div",{className:"avatar me-2 bg-rgba-info"},l.a.createElement("span",{className:"avatar-content avt-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"primary"},l.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),l.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})))),l.a.createElement("div",{className:"my-auto ml-2"},l.a.createElement("h4",{className:"fw-bolder mb-0"},"10,000"),l.a.createElement("p",{className:"font-small-3 mb-0 card-text"},"Free User")))),l.a.createElement("div",{className:"col-lg-3 col-md-6"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("div",{className:"avatar me-2 bg-rgba-warning"},l.a.createElement("span",{className:"avatar-content avt-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"primary"},l.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),l.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})))),l.a.createElement("div",{className:"my-auto ml-2"},l.a.createElement("h4",{className:"fw-bolder mb-0"},"75,000"),l.a.createElement("p",{className:"font-small-3 mb-0 card-text"},"Premium User")))),l.a.createElement("div",{className:"col-lg-3 col-md-6"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("div",{className:"avatar me-2 bg-rgba-success"},l.a.createElement("span",{className:"avatar-content avt-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"primary"},l.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),l.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})))),l.a.createElement("div",{className:"my-auto ml-2"},l.a.createElement("h4",{className:"fw-bolder mb-0"},"40,000"),l.a.createElement("p",{className:"font-small-3 mb-0 card-text"},"Elite User")))))))),l.a.createElement(n.a,{className:"match-height",style:{display:"none"}},l.a.createElement(c.a,{lg:"3",md:"6",sm:"6"},l.a.createElement(b,{icon:l.a.createElement(g.a,{className:"primary",size:22}),stat:t,statTitle:"Total Users",options:f,series:x,type:"area"})),l.a.createElement(c.a,{lg:"3",md:"6",sm:"6"},l.a.createElement(b,{icon:l.a.createElement(N.a,{className:"success",size:22}),iconBg:"success",stat:t,statTitle:"Basic Users",options:w,series:k,type:"area"})),l.a.createElement(c.a,{lg:"3",md:"6",sm:"6"},l.a.createElement(b,{icon:l.a.createElement(v.a,{className:"danger",size:22}),iconBg:"danger",stat:0,statTitle:"Premium Users",options:C,series:j,type:"area"})),l.a.createElement(c.a,{lg:"3",md:"6",sm:"6"},l.a.createElement(b,{icon:l.a.createElement(y.a,{className:"warning",size:22}),iconBg:"warning",stat:0,statTitle:"Elite Users",options:L,series:O,type:"area"}))),l.a.createElement(n.a,{className:"match-height"},l.a.createElement(c.a,{lg:"7",md:"6",sm:"12"},l.a.createElement(B,{primary:"#7367F0",dangerLight:"#f29292",strokeColor:"#b9c3cd",labelColor:"#e7eef7"})),l.a.createElement(c.a,{lg:"5",md:"6",sm:"12"},l.a.createElement(M,{strokeColor:"#b9c3cd",success:"#28C76F"}))),l.a.createElement(n.a,{className:"match-height",style:{display:"none"}},l.a.createElement(c.a,{lg:"4",md:"6",sm:"12"},l.a.createElement(I,null)),l.a.createElement(c.a,{lg:"8",md:"6",sm:"12"},l.a.createElement(W,{strokeColor:"#b9c3cd",primary:"#7367F0",danger:"#EA5455",labelColor:"#e7eef7"}))),l.a.createElement(n.a,{style:{display:"none"}},l.a.createElement(c.a,{lg:"4",md:"12"},l.a.createElement(X,{primary:"#7367F0",warning:"#FF9F43",danger:"#EA5455",primaryLight:"#9c8cfc",warningLight:"#FFC085",dangerLight:"#f29292"})),l.a.createElement(c.a,{lg:"4",md:"12",className:"text-center align-middle"},l.a.createElement(Q,{primary:"#7367F0",warning:"#FF9F43",danger:"#EA5455",primaryLight:"#9c8cfc",warningLight:"#FFC085",dangerLight:"#f29292"}))))}}}]);