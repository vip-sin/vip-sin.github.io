(self.webpackChunkvpn=self.webpackChunkvpn||[]).push([[593],{13760:function(e,t,n){"use strict";var r=n(46095),o=n(46417);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}),"Attachment")},30712:function(e,t,n){"use strict";var r=n(46095),o=n(46417);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")},80781:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},61729:function(e,t,n){"use strict";var r=n(79165);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},75192:function(e,t,n){e.exports=n(61729)()},79165:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},80614:function(e,t,n){"use strict";n.d(t,{uI:function(){return ye}});var r=n(47313),o=n(75192),i=n.n(o),a=n(66797),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"===typeof e&&null!==e}function f(e){return m(e.target.files).map((function(e){return u(e)}))}function p(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return u(e)}))]}}))}))}function d(e,t){return(0,a.__awaiter)(this,void 0,void 0,(function(){var n;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return e.items?(n=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(g))]):[3,2];case 1:return[2,v(y(r.sent()))];case 2:return[2,v(m(e.files).map((function(e){return u(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function m(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function g(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?w(t):b(e)}function y(e){return e.reduce((function(e,t){return(0,a.__spreadArray)((0,a.__spreadArray)([],(0,a.__read)(e),!1),(0,a.__read)(Array.isArray(t)?y(t):[t]),!1)}),[])}function b(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=u(t);return Promise.resolve(n)}function h(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){return[2,e.isDirectory?w(e):D(e)]}))}))}function w(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return(0,a.__awaiter)(i,void 0,void 0,(function(){var i,c,u;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return c=a.sent(),n(c),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(h)),r.push(u),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function D(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=u(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var O=n(80781);function x(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S="file-invalid-type",C="file-too-large",_="file-too-small",z="too-many-files",R=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:S,message:"File type must be ".concat(t)}},T=function(e){return{code:C,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},I=function(e){return{code:_,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},M={code:z,message:"Too many files"};function L(e,t){var n="application/x-moz-file"===e.type||(0,O.Z)(e,t);return[n,n?null:R(t)]}function H(e,t,n){if(B(e.size))if(B(t)&&B(n)){if(e.size>n)return[!1,T(n)];if(e.size<t)return[!1,I(t)]}else{if(B(t)&&e.size<t)return[!1,I(t)];if(B(n)&&e.size>n)return[!1,T(n)]}return[!0,null]}function B(e){return void 0!==e&&null!==e}function K(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=F(L(e,n),1)[0],i=F(H(e,r,o),1)[0],a=c?c(e):null;return t&&i&&!a}))}function U(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function W(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Z(e){e.preventDefault()}function $(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function q(e){return-1!==e.indexOf("Edge/")}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return $(e)||q(e)}function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!U(e)&&t&&t.apply(void 0,[e].concat(r)),U(e)}))}}function Y(){return"showOpenFilePicker"in window}function V(e){return B(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=F(e,2),n=t[0],r=t[1],o=!0;return ee(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(te)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var n=F(t,2),r=n[0],o=n[1];return A(A({},e),{},E({},r,o))}),{})}]:e}function J(e){if(B(e))return Object.entries(e).reduce((function(e,t){var n=F(t,2),r=n[0],o=n[1];return[].concat(x(e),[r],x(o))}),[]).filter((function(e){return ee(e)||te(e)})).join(",")}function Q(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function X(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function ee(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function te(e){return/^.*\.[\w]+$/.test(e)}var ne=["children"],re=["open"],oe=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ie=["refKey","onChange","onClick"];function ae(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||ue(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){if(e){if("string"===typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ve=(0,r.forwardRef)((function(e,t){var n=e.children,o=ye(de(e,ne)),i=o.open,a=de(o,re);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(fe(fe({},a),{},{open:i})))}));ve.displayName="Dropzone";var me={disabled:!1,getFilesFromEvent:function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){return s(e)&&s(e.dataTransfer)?[2,d(e.dataTransfer,e.type)]:function(e){return s(e)&&s(e.target)}(e)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,p(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ve.defaultProps=me,ve.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var ge={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=fe(fe({},me),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,g=t.onFileDialogCancel,y=t.onFileDialogOpen,b=t.useFsAccessApi,h=t.autoFocus,w=t.preventDropOnDocument,D=t.noClick,O=t.noKeyboard,x=t.noDrag,j=t.noDragEventsBubbling,A=t.onError,E=t.validator,F=(0,r.useMemo)((function(){return J(n)}),[n]),k=(0,r.useMemo)((function(){return V(n)}),[n]),P=(0,r.useMemo)((function(){return"function"===typeof y?y:he}),[y]),S=(0,r.useMemo)((function(){return"function"===typeof g?g:he}),[g]),C=(0,r.useRef)(null),_=(0,r.useRef)(null),z=(0,r.useReducer)(be,ge),R=ce(z,2),T=R[0],I=R[1],B=T.isFocused,$=T.isFileDialogActive,q=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&Y()),ee=function(){!q.current&&$&&setTimeout((function(){_.current&&(_.current.files.length||(I({type:"closeDialog"}),S()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",ee,!1),function(){window.removeEventListener("focus",ee,!1)}}),[_,$,S,q]);var te=(0,r.useRef)([]),ne=function(e){C.current&&C.current.contains(e.target)||(e.preventDefault(),te.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",Z,!1),document.addEventListener("drop",ne,!1)),function(){w&&(document.removeEventListener("dragover",Z),document.removeEventListener("drop",ne))}}),[C,w]),(0,r.useEffect)((function(){return!o&&h&&C.current&&C.current.focus(),function(){}}),[C,h,o]);var re=(0,r.useCallback)((function(e){A?A(e):console.error(e)}),[A]),ue=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),te.current=[].concat(ae(te.current),[e.target]),W(e)&&Promise.resolve(i(e)).then((function(t){if(!U(e)||j){var n=t.length,r=n>0&&K({files:t,accept:F,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:E});I({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return re(e)}))}),[i,s,re,j,F,c,a,u,l,E]),le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var t=W(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,j]),se=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var t=te.current.filter((function(e){return C.current&&C.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),te.current=t,t.length>0||(I({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),W(e)&&f&&f(e))}),[C,f,j]),ve=(0,r.useCallback)((function(e,t){var n=[],r=[];e.forEach((function(e){var t=ce(L(e,F),2),o=t[0],i=t[1],u=ce(H(e,c,a),2),l=u[0],s=u[1],f=E?E(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach((function(e){r.push({file:e,errors:[M]})})),n.splice(0)),I({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&v&&v(n,t)}),[I,u,F,c,a,l,d,v,m,E]),ye=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),te.current=[],W(e)&&Promise.resolve(i(e)).then((function(t){U(e)&&!j||ve(t,e)})).catch((function(e){return re(e)})),I({type:"reset"})}),[i,ve,re,j]),we=(0,r.useCallback)((function(){if(q.current){I({type:"openDialog"}),P();var e={multiple:u,types:k};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ve(e,null),I({type:"closeDialog"})})).catch((function(e){Q(e)?(S(e),I({type:"closeDialog"})):X(e)?(q.current=!1,_.current?(_.current.value=null,_.current.click()):re(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):re(e)}))}else _.current&&(I({type:"openDialog"}),P(),_.current.value=null,_.current.click())}),[I,P,S,b,ve,re,k,u]),De=(0,r.useCallback)((function(e){C.current&&C.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),we()))}),[C,we]),Oe=(0,r.useCallback)((function(){I({type:"focus"})}),[]),xe=(0,r.useCallback)((function(){I({type:"blur"})}),[]),je=(0,r.useCallback)((function(){D||(N()?setTimeout(we,0):we())}),[D,we]),Ae=function(e){return o?null:e},Ee=function(e){return O?null:Ae(e)},Fe=function(e){return x?null:Ae(e)},ke=function(e){j&&e.stopPropagation()},Pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=de(e,oe);return fe(fe(pe({onKeyDown:Ee(G(i,De)),onFocus:Ee(G(a,Oe)),onBlur:Ee(G(c,xe)),onClick:Ae(G(u,je)),onDragEnter:Fe(G(l,ue)),onDragOver:Fe(G(s,le)),onDragLeave:Fe(G(f,se)),onDrop:Fe(G(p,ye)),role:"string"===typeof r&&""!==r?r:"presentation"},n,C),o||O?{}:{tabIndex:0}),d)}}),[C,De,Oe,xe,je,ue,le,se,ye,O,x,o]),Se=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Ce=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,o=e.onClick,i=de(e,ie),a=pe({accept:F,multiple:u,type:"file",style:{display:"none"},onChange:Ae(G(r,ye)),onClick:Ae(G(o,Se)),tabIndex:-1},n,_);return fe(fe({},a),i)}}),[_,n,u,ye,o]);return fe(fe({},T),{},{isFocused:B&&!o,getRootProps:Pe,getInputProps:Ce,rootRef:C,inputRef:_,open:Ae(we)})}function be(e,t){switch(t.type){case"focus":return fe(fe({},e),{},{isFocused:!0});case"blur":return fe(fe({},e),{},{isFocused:!1});case"openDialog":return fe(fe({},ge),{},{isFileDialogActive:!0});case"closeDialog":return fe(fe({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return fe(fe({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return fe(fe({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return fe({},ge);default:return e}}function he(){}}}]);