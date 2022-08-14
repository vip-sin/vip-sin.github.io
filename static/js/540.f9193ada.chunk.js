"use strict";(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[540],{57227:function(e,t,r){var n=r(53249),o=r(91615),a=r(17592),i=r(77342),l=(0,n.Z)({createStyledComponent:(0,a.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,o.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,i.Z)({props:e,name:"MuiContainer"})}});t.Z=l},1280:function(e,t,r){var n=r(63366),o=r(87462),a=r(47313),i=r(83061),l=r(21921),c=r(23054),s=r(70984),d=r(77342),v=r(17592),u=r(25543),p=r(46417),f=["active","children","className","completed","disabled","expanded","index","last"],m=(0,v.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})})),Z=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStep"}),v=r.active,Z=r.children,b=r.className,x=r.completed,h=r.disabled,S=r.expanded,L=void 0!==S&&S,C=r.index,M=r.last,w=(0,n.Z)(r,f),y=a.useContext(c.Z),g=y.activeStep,R=y.connector,N=y.alternativeLabel,j=y.orientation,P=y.nonLinear,z=void 0!==v&&v,I=void 0!==x&&x,k=void 0!==h&&h;g===C?z=void 0===v||v:!P&&g>C?I=void 0===x||x:!P&&g<C&&(k=void 0===h||h);var W=a.useMemo((function(){return{index:C,last:M,expanded:L,icon:C+1,active:z,completed:I,disabled:k}}),[C,M,L,z,I,k]),T=(0,o.Z)({},r,{active:z,orientation:j,alternativeLabel:N,completed:I,disabled:k,expanded:L}),A=function(e){var t=e.classes,r={root:["root",e.orientation,e.alternativeLabel&&"alternativeLabel",e.completed&&"completed"]};return(0,l.Z)(r,u.$,t)}(T),H=(0,p.jsxs)(m,(0,o.Z)({className:(0,i.default)(A.root,b),ref:t,ownerState:T},w,{children:[R&&N&&0!==C?R:null,Z]}));return(0,p.jsx)(s.Z.Provider,{value:W,children:R&&!N&&0!==C?(0,p.jsxs)(a.Fragment,{children:[R,H]}):H})}));t.Z=Z},70984:function(e,t,r){r.d(t,{s:function(){return a}});var n=r(47313),o=n.createContext({});function a(){return n.useContext(o)}t.Z=o},25543:function(e,t,r){r.d(t,{$:function(){return o}});var n=r(32298);function o(e){return(0,n.Z)("MuiStep",e)}var a=(0,r(77430).Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);t.Z=a},80123:function(e,t,r){var n=r(63366),o=r(87462),a=r(47313),i=r(83061),l=r(21921),c=r(91615),s=r(17592),d=r(77342),v=r(23054),u=r(70984),p=r(29701),f=r(46417),m=["className"],Z=(0,s.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})})),b=(0,s.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:function(e,t){var r=e.ownerState;return[t.line,t["line".concat((0,c.Z)(r.orientation))]]}})((function(e){var t=e.ownerState,r=e.theme,n="light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600];return(0,o.Z)({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:n},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),x=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepConnector"}),s=r.className,x=(0,n.Z)(r,m),h=a.useContext(v.Z),S=h.alternativeLabel,L=h.orientation,C=void 0===L?"horizontal":L,M=a.useContext(u.Z),w=M.active,y=M.disabled,g=M.completed,R=(0,o.Z)({},r,{alternativeLabel:S,orientation:C,active:w,completed:g,disabled:y}),N=function(e){var t=e.classes,r=e.orientation,n={root:["root",r,e.alternativeLabel&&"alternativeLabel",e.active&&"active",e.completed&&"completed",e.disabled&&"disabled"],line:["line","line".concat((0,c.Z)(r))]};return(0,l.Z)(n,p.M,t)}(R);return(0,f.jsx)(Z,(0,o.Z)({className:(0,i.default)(N.root,s),ref:t,ownerState:R},x,{children:(0,f.jsx)(b,{className:N.line,ownerState:R})}))}));t.Z=x},29701:function(e,t,r){r.d(t,{M:function(){return o}});var n=r(32298);function o(e){return(0,n.Z)("MuiStepConnector",e)}var a=(0,r(77430).Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);t.Z=a},21456:function(e,t,r){r.d(t,{Z:function(){return L}});var n,o=r(4942),a=r(87462),i=r(63366),l=r(47313),c=r(83061),s=r(21921),d=r(17592),v=r(77342),u=r(54750),p=r(46417),f=(0,u.Z)((0,p.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=(0,u.Z)((0,p.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),Z=r(70144),b=r(11918),x=["active","className","completed","error","icon"],h=(0,d.ZP)(Z.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,r=e.theme;return t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest}),color:(r.vars||r).palette.text.disabled},(0,o.Z)(t,"&.".concat(b.Z.completed),{color:(r.vars||r).palette.primary.main}),(0,o.Z)(t,"&.".concat(b.Z.active),{color:(r.vars||r).palette.primary.main}),(0,o.Z)(t,"&.".concat(b.Z.error),{color:(r.vars||r).palette.error.main}),t})),S=(0,d.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:function(e,t){return t.text}})((function(e){var t=e.theme;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}})),L=l.forwardRef((function(e,t){var r=(0,v.Z)({props:e,name:"MuiStepIcon"}),o=r.active,l=void 0!==o&&o,d=r.className,u=r.completed,Z=void 0!==u&&u,L=r.error,C=void 0!==L&&L,M=r.icon,w=(0,i.Z)(r,x),y=(0,a.Z)({},r,{active:l,completed:Z,error:C}),g=function(e){var t=e.classes,r={root:["root",e.active&&"active",e.completed&&"completed",e.error&&"error"],text:["text"]};return(0,s.Z)(r,b.M,t)}(y);if("number"===typeof M||"string"===typeof M){var R=(0,c.default)(d,g.root);return C?(0,p.jsx)(h,(0,a.Z)({as:m,className:R,ref:t,ownerState:y},w)):Z?(0,p.jsx)(h,(0,a.Z)({as:f,className:R,ref:t,ownerState:y},w)):(0,p.jsxs)(h,(0,a.Z)({className:R,ref:t,ownerState:y},w,{children:[n||(n=(0,p.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,p.jsx)(S,{className:g.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:y,children:M})]}))}return M}))},11918:function(e,t,r){r.d(t,{M:function(){return o}});var n=r(32298);function o(e){return(0,n.Z)("MuiStepIcon",e)}var a=(0,r(77430).Z)("MuiStepIcon",["root","active","completed","error","text"]);t.Z=a},43469:function(e,t,r){var n=r(4942),o=r(63366),a=r(87462),i=r(47313),l=r(83061),c=r(21921),s=r(17592),d=r(77342),v=r(21456),u=r(23054),p=r(70984),f=r(48337),m=r(46417),Z=["children","className","componentsProps","error","icon","optional","StepIconComponent","StepIconProps"],b=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation]]}})((function(e){var t,r=e.ownerState;return(0,a.Z)((t={display:"flex",alignItems:"center"},(0,n.Z)(t,"&.".concat(f.Z.alternativeLabel),{flexDirection:"column"}),(0,n.Z)(t,"&.".concat(f.Z.disabled),{cursor:"default"}),t),"vertical"===r.orientation&&{textAlign:"left",padding:"8px 0"})})),x=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t,r=e.theme;return(0,a.Z)({},r.typography.body2,(t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest})},(0,n.Z)(t,"&.".concat(f.Z.active),{color:(r.vars||r).palette.text.primary,fontWeight:500}),(0,n.Z)(t,"&.".concat(f.Z.completed),{color:(r.vars||r).palette.text.primary,fontWeight:500}),(0,n.Z)(t,"&.".concat(f.Z.alternativeLabel),{textAlign:"center",marginTop:16}),(0,n.Z)(t,"&.".concat(f.Z.error),{color:(r.vars||r).palette.error.main}),t))})),h=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:function(e,t){return t.iconContainer}})((function(){return(0,n.Z)({flexShrink:0,display:"flex",paddingRight:8},"&.".concat(f.Z.alternativeLabel),{paddingRight:0})})),S=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:function(e,t){return t.labelContainer}})((function(e){var t=e.theme;return{width:"100%",color:(t.vars||t).palette.text.secondary}})),L=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepLabel"}),n=r.children,s=r.className,L=r.componentsProps,C=void 0===L?{}:L,M=r.error,w=void 0!==M&&M,y=r.icon,g=r.optional,R=r.StepIconComponent,N=r.StepIconProps,j=(0,o.Z)(r,Z),P=i.useContext(u.Z),z=P.alternativeLabel,I=P.orientation,k=i.useContext(p.Z),W=k.active,T=k.disabled,A=k.completed,H=k.icon,D=y||H,F=R;D&&!F&&(F=v.Z);var B=(0,a.Z)({},r,{active:W,alternativeLabel:z,completed:A,disabled:T,error:w,orientation:I}),G=function(e){var t=e.classes,r=e.orientation,n=e.active,o=e.completed,a=e.error,i=e.disabled,l=e.alternativeLabel,s={root:["root",r,a&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",n&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",n&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer"]};return(0,c.Z)(s,f.H,t)}(B);return(0,m.jsxs)(b,(0,a.Z)({className:(0,l.default)(G.root,s),ref:t,ownerState:B},j,{children:[D||F?(0,m.jsx)(h,{className:G.iconContainer,ownerState:B,children:(0,m.jsx)(F,(0,a.Z)({completed:A,active:W,error:w,icon:D},N))}):null,(0,m.jsxs)(S,{className:G.labelContainer,ownerState:B,children:[n?(0,m.jsx)(x,(0,a.Z)({className:G.label,ownerState:B},C.label,{children:n})):null,g]})]}))}));L.muiName="StepLabel",t.Z=L},48337:function(e,t,r){r.d(t,{H:function(){return o}});var n=r(32298);function o(e){return(0,n.Z)("MuiStepLabel",e)}var a=(0,r(77430).Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);t.Z=a},28428:function(e,t,r){var n=r(63366),o=r(87462),a=r(47313),i=r(83061),l=r(21921),c=r(77342),s=r(17592),d=r(58146),v=r(80123),u=r(23054),p=r(46417),f=["activeStep","alternativeLabel","children","className","connector","nonLinear","orientation"],m=(0,s.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})})),Z=(0,p.jsx)(v.Z,{}),b=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiStepper"}),s=r.activeStep,v=void 0===s?0:s,b=r.alternativeLabel,x=void 0!==b&&b,h=r.children,S=r.className,L=r.connector,C=void 0===L?Z:L,M=r.nonLinear,w=void 0!==M&&M,y=r.orientation,g=void 0===y?"horizontal":y,R=(0,n.Z)(r,f),N=(0,o.Z)({},r,{alternativeLabel:x,orientation:g}),j=function(e){var t=e.orientation,r=e.alternativeLabel,n=e.classes,o={root:["root",t,r&&"alternativeLabel"]};return(0,l.Z)(o,d.c,n)}(N),P=a.Children.toArray(h).filter(Boolean),z=P.map((function(e,t){return a.cloneElement(e,(0,o.Z)({index:t,last:t+1===P.length},e.props))})),I=a.useMemo((function(){return{activeStep:v,alternativeLabel:x,connector:C,nonLinear:w,orientation:g}}),[v,x,C,w,g]);return(0,p.jsx)(u.Z.Provider,{value:I,children:(0,p.jsx)(m,(0,o.Z)({ownerState:N,className:(0,i.default)(j.root,S),ref:t},R,{children:z}))})}));t.Z=b},23054:function(e,t,r){r.d(t,{s:function(){return a}});var n=r(47313),o=n.createContext({});function a(){return n.useContext(o)}t.Z=o},58146:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(32298);function o(e){return(0,n.Z)("MuiStepper",e)}var a=(0,r(77430).Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);t.Z=a}}]);