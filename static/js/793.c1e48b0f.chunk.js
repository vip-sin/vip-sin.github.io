"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[793],{67552:function(e,t,o){var r,n,l=o(4942),i=o(63366),a=o(87462),c=o(47313),s=o(83061),d=o(21921),u=o(56248),f=o(82222),v=o(6109),b=o(62111),h=o(11236),p=o(64164),m=o(42010),Z=o(46417),w=["className","direction","orientation","disabled"],x=(0,p.ZP)(v.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.orientation&&t[o.orientation]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,l.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(m.Z.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),g=c.forwardRef((function(e,t){var o=(0,h.Z)({props:e,name:"MuiTabScrollButton"}),l=o.className,c=o.direction,v=(0,i.Z)(o,w),p="rtl"===(0,b.Z)().direction,g=(0,a.Z)({isRtl:p},o),S=function(e){var t=e.classes,o={root:["root",e.orientation,e.disabled&&"disabled"]};return(0,d.Z)(o,m.C,t)}(g);return(0,Z.jsx)(x,(0,a.Z)({component:"div",className:(0,s.default)(S.root,l),ref:t,role:null,ownerState:g,tabIndex:null},v,{children:"left"===c?r||(r=(0,Z.jsx)(u.Z,{fontSize:"small"})):n||(n=(0,Z.jsx)(f.Z,{fontSize:"small"}))}))}));t.Z=g},42010:function(e,t,o){o.d(t,{C:function(){return n}});var r=o(32298);function n(e){return(0,r.Z)("MuiTabScrollButton",e)}var l=(0,o(77430).Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);t.Z=l},3204:function(e,t,o){var r=o(4942),n=o(63366),l=o(87462),i=o(47313),a=o(83061),c=o(21921),s=o(6109),d=o(28170),u=o(11236),f=o(64164),v=o(74831),b=o(46417),h=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],p=(0,f.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,d.Z)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((function(e){var t,o,n,i=e.theme,a=e.ownerState;return(0,l.Z)({},i.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},a.label&&{flexDirection:"top"===a.iconPosition||"bottom"===a.iconPosition?"column":"row"},{lineHeight:1.25},a.icon&&a.label&&(0,r.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(v.Z.iconWrapper),(0,l.Z)({},"top"===a.iconPosition&&{marginBottom:6},"bottom"===a.iconPosition&&{marginTop:6},"start"===a.iconPosition&&{marginRight:i.spacing(1)},"end"===a.iconPosition&&{marginLeft:i.spacing(1)})),"inherit"===a.textColor&&(t={color:"inherit",opacity:.6},(0,r.Z)(t,"&.".concat(v.Z.selected),{opacity:1}),(0,r.Z)(t,"&.".concat(v.Z.disabled),{opacity:(i.vars||i).palette.action.disabledOpacity}),t),"primary"===a.textColor&&(o={color:(i.vars||i).palette.text.secondary},(0,r.Z)(o,"&.".concat(v.Z.selected),{color:(i.vars||i).palette.primary.main}),(0,r.Z)(o,"&.".concat(v.Z.disabled),{color:(i.vars||i).palette.text.disabled}),o),"secondary"===a.textColor&&(n={color:(i.vars||i).palette.text.secondary},(0,r.Z)(n,"&.".concat(v.Z.selected),{color:(i.vars||i).palette.secondary.main}),(0,r.Z)(n,"&.".concat(v.Z.disabled),{color:(i.vars||i).palette.text.disabled}),n),a.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},a.wrapped&&{fontSize:i.typography.pxToRem(12)})})),m=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiTab"}),r=o.className,s=o.disabled,f=void 0!==s&&s,m=o.disableFocusRipple,Z=void 0!==m&&m,w=o.fullWidth,x=o.icon,g=o.iconPosition,S=void 0===g?"top":g,C=o.indicator,y=o.label,B=o.onChange,M=o.onClick,W=o.onFocus,R=o.selected,E=o.selectionFollowsFocus,T=o.textColor,N=void 0===T?"inherit":T,k=o.value,P=o.wrapped,F=void 0!==P&&P,z=(0,n.Z)(o,h),L=(0,l.Z)({},o,{disabled:f,disableFocusRipple:Z,selected:R,icon:!!x,iconPosition:S,label:!!y,fullWidth:w,textColor:N,wrapped:F}),H=function(e){var t=e.classes,o=e.textColor,r=e.fullWidth,n=e.wrapped,l=e.icon,i=e.label,a=e.selected,s=e.disabled,u={root:["root",l&&i&&"labelIcon","textColor".concat((0,d.Z)(o)),r&&"fullWidth",n&&"wrapped",a&&"selected",s&&"disabled"],iconWrapper:["iconWrapper"]};return(0,c.Z)(u,v.V,t)}(L),A=x&&y&&i.isValidElement(x)?i.cloneElement(x,{className:(0,a.default)(H.iconWrapper,x.props.className)}):x;return(0,b.jsxs)(p,(0,l.Z)({focusRipple:!Z,className:(0,a.default)(H.root,r),ref:t,role:"tab","aria-selected":R,disabled:f,onClick:function(e){!R&&B&&B(e,k),M&&M(e)},onFocus:function(e){E&&!R&&B&&B(e,k),W&&W(e)},ownerState:L,tabIndex:R?0:-1},z,{children:["top"===S||"start"===S?(0,b.jsxs)(i.Fragment,{children:[A,y]}):(0,b.jsxs)(i.Fragment,{children:[y,A]}),C]}))}));t.Z=m},74831:function(e,t,o){o.d(t,{V:function(){return n}});var r=o(32298);function n(e){return(0,r.Z)("MuiTab",e)}var l=(0,o(77430).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);t.Z=l},38424:function(e,t,o){o.d(t,{Z:function(){return A}});var r,n=o(29439),l=o(4942),i=o(63366),a=o(87462),c=o(47313),s=(o(96214),o(83061)),d=o(21921),u=o(64164),f=o(11236),v=o(62111),b=o(39492);function h(){if(r)return r;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function p(e,t){var o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Z(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=r.ease,i=void 0===l?m:l,a=r.duration,c=void 0===a?300:a,s=null,d=t[e],u=!1,f=function(){u=!0},v=function r(l){if(u)n(new Error("Animation cancelled"));else{null===s&&(s=l);var a=Math.min(1,(l-s)/c);t[e]=i(a)*(o-d)+d,a>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(r)}};return d===o?(n(new Error("Element already at target position")),f):(requestAnimationFrame(v),f)}var w=o(20897),x=o(46417),g=["onChange"],S={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var C=o(67552),y=o(56127),B=o(74120),M=o(66182),W=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],R=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},E=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},T=function(e,t,o){for(var r=!1,n=o(e,t);n;){if(n===e.firstChild){if(r)return;r=!0}var l=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!l)return void n.focus();n=o(e,n)}},N=(0,u.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,l.Z)({},"& .".concat(B.Z.scrollButtons),t.scrollButtons),(0,l.Z)({},"& .".concat(B.Z.scrollButtons),o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,o.vertical&&t.vertical]}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&(0,l.Z)({},"& .".concat(B.Z.scrollButtons),(0,l.Z)({},o.breakpoints.down("sm"),{display:"none"})))})),k=(0,u.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var o=e.ownerState;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((function(e){var t=e.ownerState;return(0,a.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),P=(0,u.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var o=e.ownerState;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),F=(0,u.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),z=(0,u.ZP)((function(e){var t=e.onChange,o=(0,i.Z)(e,g),r=c.useRef(),n=c.useRef(null),l=function(){r.current=n.current.offsetHeight-n.current.clientHeight};return c.useEffect((function(){var e=(0,b.Z)((function(){var e=r.current;l(),e!==r.current&&t(r.current)})),o=(0,w.Z)(n.current);return o.addEventListener("resize",e),function(){e.clear(),o.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){l(),t(r.current)}),[t]),(0,x.jsx)("div",(0,a.Z)({style:S,ref:n},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),L={},H=c.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiTabs"}),r=(0,v.Z)(),u="rtl"===r.direction,m=o["aria-label"],g=o["aria-labelledby"],S=o.action,H=o.centered,A=void 0!==H&&H,j=o.children,I=o.className,X=o.component,Y=void 0===X?"div":X,D=o.allowScrollButtonsMobile,V=void 0!==D&&D,O=o.indicatorColor,q=void 0===O?"primary":O,G=o.onChange,K=o.orientation,U=void 0===K?"horizontal":K,J=o.ScrollButtonComponent,Q=void 0===J?C.Z:J,$=o.scrollButtons,_=void 0===$?"auto":$,ee=o.selectionFollowsFocus,te=o.TabIndicatorProps,oe=void 0===te?{}:te,re=o.TabScrollButtonProps,ne=void 0===re?{}:re,le=o.textColor,ie=void 0===le?"primary":le,ae=o.value,ce=o.variant,se=void 0===ce?"standard":ce,de=o.visibleScrollbar,ue=void 0!==de&&de,fe=(0,i.Z)(o,W),ve="scrollable"===se,be="vertical"===U,he=be?"scrollTop":"scrollLeft",pe=be?"top":"left",me=be?"bottom":"right",Ze=be?"clientHeight":"clientWidth",we=be?"height":"width",xe=(0,a.Z)({},o,{component:Y,allowScrollButtonsMobile:V,indicatorColor:q,orientation:U,vertical:be,scrollButtons:_,textColor:ie,variant:se,visibleScrollbar:ue,fixed:!ve,hideScrollbar:ve&&!ue,scrollableX:ve&&!be,scrollableY:ve&&be,centered:A&&!ve,scrollButtonsHideMobile:!V}),ge=function(e){var t=e.vertical,o=e.fixed,r=e.hideScrollbar,n=e.scrollableX,l=e.scrollableY,i=e.centered,a=e.scrollButtonsHideMobile,c=e.classes,s={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",n&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,d.Z)(s,B.m,c)}(xe);var Se=c.useState(!1),Ce=(0,n.Z)(Se,2),ye=Ce[0],Be=Ce[1],Me=c.useState(L),We=(0,n.Z)(Me,2),Re=We[0],Ee=We[1],Te=c.useState({start:!1,end:!1}),Ne=(0,n.Z)(Te,2),ke=Ne[0],Pe=Ne[1],Fe=c.useState({overflow:"hidden",scrollbarWidth:0}),ze=(0,n.Z)(Fe,2),Le=ze[0],He=ze[1],Ae=new Map,je=c.useRef(null),Ie=c.useRef(null),Xe=function(){var e,t,o=je.current;if(o){var n=o.getBoundingClientRect();e={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:p(o,r.direction),scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(o&&!1!==ae){var l=Ie.current.children;if(l.length>0){var i=l[Ae.get(ae)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},Ye=(0,y.Z)((function(){var e,t,o=Xe(),r=o.tabsMeta,n=o.tabMeta,i=0;if(be)t="top",n&&r&&(i=n.top-r.top+r.scrollTop);else if(t=u?"right":"left",n&&r){var a=u?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;i=(u?-1:1)*(n[t]-r[t]+a)}var c=(e={},(0,l.Z)(e,t,i),(0,l.Z)(e,we,n?n[we]:0),e);if(isNaN(Re[t])||isNaN(Re[we]))Ee(c);else{var s=Math.abs(Re[t]-c[t]),d=Math.abs(Re[we]-c[we]);(s>=1||d>=1)&&Ee(c)}})),De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.animation,n=void 0===o||o;n?Z(he,je.current,e,{duration:r.transitions.duration.standard}):je.current[he]=e},Ve=function(e){var t=je.current[he];be?t+=e:(t+=e*(u?-1:1),t*=u&&"reverse"===h()?-1:1),De(t)},Oe=function(){for(var e=je.current[Ze],t=0,o=Array.from(Ie.current.children),r=0;r<o.length;r+=1){var n=o[r];if(t+n[Ze]>e){0===r&&(t=e);break}t+=n[Ze]}return t},qe=function(){Ve(-1*Oe())},Ge=function(){Ve(Oe())},Ke=c.useCallback((function(e){He({overflow:null,scrollbarWidth:e})}),[]),Ue=(0,y.Z)((function(e){var t=Xe(),o=t.tabsMeta,r=t.tabMeta;if(r&&o)if(r[pe]<o[pe]){var n=o[he]+(r[pe]-o[pe]);De(n,{animation:e})}else if(r[me]>o[me]){var l=o[he]+(r[me]-o[me]);De(l,{animation:e})}})),Je=(0,y.Z)((function(){if(ve&&!1!==_){var e,t,o=je.current,n=o.scrollTop,l=o.scrollHeight,i=o.clientHeight,a=o.scrollWidth,c=o.clientWidth;if(be)e=n>1,t=n<l-i-1;else{var s=p(je.current,r.direction);e=u?s<a-c-1:s>1,t=u?s>1:s<a-c-1}e===ke.start&&t===ke.end||Pe({start:e,end:t})}}));c.useEffect((function(){var e,t=(0,b.Z)((function(){je.current&&(Ye(),Je())})),o=(0,w.Z)(je.current);return o.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t),Array.from(Ie.current.children).forEach((function(t){e.observe(t)}))),function(){t.clear(),o.removeEventListener("resize",t),e&&e.disconnect()}}),[Ye,Je]);var Qe=c.useMemo((function(){return(0,b.Z)((function(){Je()}))}),[Je]);c.useEffect((function(){return function(){Qe.clear()}}),[Qe]),c.useEffect((function(){Be(!0)}),[]),c.useEffect((function(){Ye(),Je()})),c.useEffect((function(){Ue(L!==Re)}),[Ue,Re]),c.useImperativeHandle(S,(function(){return{updateIndicator:Ye,updateScrollButtons:Je}}),[Ye,Je]);var $e=(0,x.jsx)(F,(0,a.Z)({},oe,{className:(0,s.default)(ge.indicator,oe.className),ownerState:xe,style:(0,a.Z)({},Re,oe.style)})),_e=0,et=c.Children.map(j,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?_e:e.props.value;Ae.set(t,_e);var o=t===ae;return _e+=1,c.cloneElement(e,(0,a.Z)({fullWidth:"fullWidth"===se,indicator:o&&!ye&&$e,selected:o,selectionFollowsFocus:ee,onChange:G,textColor:ie,value:t},1!==_e||!1!==ae||e.props.tabIndex?{}:{tabIndex:0}))})),tt=function(){var e={};e.scrollbarSizeListener=ve?(0,x.jsx)(z,{onChange:Ke,className:(0,s.default)(ge.scrollableX,ge.hideScrollbar)}):null;var t=ke.start||ke.end,o=ve&&("auto"===_&&t||!0===_);return e.scrollButtonStart=o?(0,x.jsx)(Q,(0,a.Z)({orientation:U,direction:u?"right":"left",onClick:qe,disabled:!ke.start},ne,{className:(0,s.default)(ge.scrollButtons,ne.className)})):null,e.scrollButtonEnd=o?(0,x.jsx)(Q,(0,a.Z)({orientation:U,direction:u?"left":"right",onClick:Ge,disabled:!ke.end},ne,{className:(0,s.default)(ge.scrollButtons,ne.className)})):null,e}();return(0,x.jsxs)(N,(0,a.Z)({className:(0,s.default)(ge.root,I),ownerState:xe,ref:t,as:Y},fe,{children:[tt.scrollButtonStart,tt.scrollbarSizeListener,(0,x.jsxs)(k,{className:ge.scroller,ownerState:xe,style:(0,l.Z)({overflow:Le.overflow},be?"margin".concat(u?"Left":"Right"):"marginBottom",ue?void 0:-Le.scrollbarWidth),ref:je,onScroll:Qe,children:[(0,x.jsx)(P,{"aria-label":m,"aria-labelledby":g,"aria-orientation":"vertical"===U?"vertical":null,className:ge.flexContainer,ownerState:xe,onKeyDown:function(e){var t=Ie.current,o=(0,M.Z)(t).activeElement;if("tab"===o.getAttribute("role")){var r="horizontal"===U?"ArrowLeft":"ArrowUp",n="horizontal"===U?"ArrowRight":"ArrowDown";switch("horizontal"===U&&u&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:e.preventDefault(),T(t,o,E);break;case n:e.preventDefault(),T(t,o,R);break;case"Home":e.preventDefault(),T(t,null,R);break;case"End":e.preventDefault(),T(t,null,E)}}},ref:Ie,role:"tablist",children:et}),ye&&$e]}),tt.scrollButtonEnd]}))})),A=H},74120:function(e,t,o){o.d(t,{m:function(){return n}});var r=o(32298);function n(e){return(0,r.Z)("MuiTabs",e)}var l=(0,o(77430).Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);t.Z=l}}]);