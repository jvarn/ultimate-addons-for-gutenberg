(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[70],{125:function(e,t,n){"use strict";var a=n(11),o=n(27),l=n.n(o),r=n(126),i=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===h)var h=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(r,e);var t,n,a,o,l=(a=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){h.includes(e)||h.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){h.includes(t.props.config.google.families[0])||(i.a.load(u(u({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=r,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&g(t.prototype,n),r}(a.Component);p.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},126:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function r(e,t,n){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var i=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,r=0;r<a.length;r+=1)if(t[o]===a[r]){l=!0;break}l||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(l=!1,r=0;r<n.length;r+=1)if(a[o]===n[r]){l=!0;break}l||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){i&&o&&l&&(i(r),i=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,r=null,i=n||null;s?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function h(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var l=u(e,"script",{src:t}),r=!1;return l.onload=l.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){r||(r=!0,n&&n(Error("Script load timeout")))}),a||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function C(e){this.a=e||"-"}function E(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function w(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function j(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new C("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function x(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,j(n)):e.h[t]())}function F(){this.c={}}function N(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){f(e.c,"body",e.a)}function R(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function H(e,t,n,a,o,l){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=l||void 0}function z(e,t,n,a,o,l,r){this.v=e,this.B=t,this.c=n,this.a=a,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.m=new N(this.c,this.s),e=R(e=new E(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=R(e=new E(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=R(e=new E("serif",j(this.a))),this.j.a.style.cssText=e,e=R(e=new E("sans-serif",j(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}C.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,n=i(),a=new Promise((function(a,o){!function l(){i()-n>=t.f?o():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+w(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([l,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var B={D:"serif",C:"sans-serif"},A=null;function L(){if(null===A){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return A}function I(e,t,n){for(var a in B)if(B.hasOwnProperty(a)&&t===e.f[B[a]]&&n===e.f[B[a]])return!0;return!1}function M(e,t){setTimeout(r((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function D(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=L()&&I(t,a,o)),n?i()-t.A>=t.w?L()&&I(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):function(t){setTimeout(r((function(){e(this)}),t),50)}(t):M(t,t.v)}(this)};var W=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):x(e.a))}function $(e){this.j=e,this.a=new F,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,i=a||{};if(0===n.length&&l)x(t.a);else{t.f+=n.length,l&&(t.j=l);var c,s=[];for(c=0;c<n.length;c++){var u=n[c],f=i[u.c],g=t.a,m=u;if(g.g&&b(g.f,[g.a.c("wf",m.c,j(m).toString(),"loading")]),k(g,"fontloading",m),g=null,null===W)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=m?42<parseInt(m[1],10):!d}else W=!1;g=W?new H(r(t.g,t),r(t.h,t),t.c,u,t.s,f):new z(r(t.g,t),r(t.h,t),t.c,u,t.s,e,f),s.push(g)}for(c=0;c<s.length;c++)s[c].start()}}),0)}function U(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function K(e,t){this.c=e||V,this.a=[],this.f=[],this.g=t||""}D.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,G(this)},D.prototype.h=function(e){var t=this.a;if(t.g){var n=m(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,j(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),b(t.f,a,o)}k(t,"fontinactive",e),G(this)},$.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var l=e.c[a];l&&o.push(l(t[a],n))}return o}(e.a,n,e.c);var l=new D(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,l,t,n,a)}))}(this,new T(this.c,e),e)},U.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,l=o["__mti_fntLst"+n](),r=[];if(l)for(var i=0;i<l.length;i++){var c=l[i].fontfamily;null!=l[i].fontStyle&&null!=l[i].fontWeight?(a=l[i].fontStyle+l[i].fontWeight,r.push(new E(c,a))):r.push(new E(c))}e(r)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},r=new p;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(r));var i=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var c=a[1].split(","),s=0;s<c.length;s+=1)i.push(new E(a[0],c[s]));else i.push(new E(a[0]));_(r,(function(){e(i,l)}))};var V="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new K(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(a,o);var l=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),l=["n4"];if(2<=a.length){var r;if(r=[],i=a[1])for(var i,c=(i=i.split(",")).length,s=0;s<c;s++){var u;if((u=i[s]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&r.push(u)}0<r.length&&(l=r),3==a.length&&(r=[],0<(a=(a=a[2])?a.split(","):r).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<l.length;a+=1)e.a.push(new E(o,l[a]))}}(l),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(l.a,l.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var l=t[o],r=t[o+1],i=0;i<r.length;i++)a.push(new E(l,r[i]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,l=n.fonts.length;o<l;++o){var r=n.fonts[o];a.a.push(new E(r.name,S("font-weight:"+r.weight+";font-style:"+r.style)))}e(a.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new $(window);le.a.c.custom=function(e,t){return new J(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new U(t,e)},le.a.c.typekit=function(e,t){return new ae(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var re={load:r(le.load,le)};void 0===(a=function(){return re}.call(t,n,t,e))||(e.exports=a)}()},486:function(e,t,n){"use strict";n.r(t);var a=n(127),o=n.n(a),l=n(6),r=n(2),i=n(12),c=n(1),s=n.n(c),u=n(9),f=n(19),g=n(125),b=n(53),m=n(4),d=n(5);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=function(e){e=e.parentProps;var t,n,a,p,v=(a=Object(c.useState)(!1),p=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,o,l=[],_n=!0,r=!1;try{for(n=n.call(e);!(_n=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);_n=!0);}catch(e){r=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(r)throw o}}return l}}(a,p)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(a,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),_=v[0],y=v[1],C=e,E=C.attributes,w=C.setAttributes,j=C.deviceType,O=E.align,S=E.textAlign,T=E.link,x=E.linkTarget,k=E.titleSpace,F=E.icon,N=E.iconPosition,P=E.iconSpace,R=E.iconFontSize,H=E.iconFontSizeMobile,z=E.iconFontSizeTablet,B=E.titleColor,A=E.titleHoverColor,L=E.prefixColor,I=E.prefixHoverColor,M=E.iconColor,D=E.iconHoverColor,W=E.borderStyle,G=E.borderWidth,$=E.borderRadius,q=E.borderColor,U=E.borderHoverColor,J=E.vPadding,K=E.hPadding,V=E.hPaddingMobile,X=E.vPaddingMobile,Q=E.hPaddingTablet,Y=E.vPaddingTablet,Z=E.paddingType,ee=E.backgroundType,te=E.backgroundColor,ne=E.backgroundHoverColor,ae=E.gradientColor1,oe=E.gradientColor2,le=E.gradientLocation1,re=E.gradientLocation2,ie=E.gradientType,ce=E.gradientAngle,se=E.backgroundOpacity,ue=E.backgroundHoverOpacity,fe=E.titleFontFamily,ge=E.titleFontWeight,be=E.titleFontSubset,me=E.titleFontSize,de=E.titleFontSizeType,he=E.titleFontSizeTablet,pe=E.titleFontSizeMobile,ve=E.titleLineHeightType,_e=E.titleLineHeight,ye=E.titleLineHeightTablet,Ce=E.titleLineHeightMobile,Ee=E.titleTag,we=E.prefixFontFamily,je=E.prefixFontWeight,Oe=E.prefixFontSubset,Se=E.prefixFontSize,Te=E.prefixFontSizeType,xe=E.prefixFontSizeTablet,ke=E.prefixFontSizeMobile,Fe=E.prefixLineHeightType,Ne=E.prefixLineHeight,Pe=E.prefixLineHeightTablet,Re=E.prefixLineHeightMobile;if(1==t){var He={google:{families:[fe+(ge?":"+ge:"")]}};t=s.a.createElement(g.a,{config:He})}if(1==n){var ze={google:{families:[we+(je?":"+je:"")]}};n=s.a.createElement(g.a,{config:ze})}var Be=_&&s.a.createElement(d.Popover,{position:"bottom center",onClose:function(){return y(!1)}},s.a.createElement(m.__experimentalLinkControl,{value:{url:T,opensInNewTab:x},onChange:function(e){var t=e.url,n=void 0===t?"":t,a=e.opensInNewTab;w({link:n}),w({linkTarget:a}),w({linkTarget:a})}}));return s.a.createElement(c.Suspense,{fallback:Object(u.a)()},s.a.createElement(m.BlockControls,null,s.a.createElement(m.BlockAlignmentToolbar,{value:O,onChange:function(e){w({align:e})},controls:["left","center","right","full"]}),s.a.createElement(d.ToolbarGroup,null,s.a.createElement(d.ToolbarButton,{icon:"admin-links",name:"link",title:Object(r.__)("Link","ultimate-addons-for-gutenberg"),onClick:function(){return y(!0)}}))),Be,s.a.createElement(m.InspectorControls,null,s.a.createElement(d.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},s.a.createElement(d.SelectControl,{label:Object(r.__)("Text Alignment","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return w({textAlign:e})},options:[{value:"center",label:Object(r.__)("Center","ultimate-addons-for-gutenberg")},{value:"left",label:Object(r.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(r.__)("Right","ultimate-addons-for-gutenberg")}]}),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(r.__)("Button Icon")),s.a.createElement(o.a,{icons:wp.UAGBSvgIcons,renderFunc:i.a,value:F,onChange:function(e){return w({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")}),""!==F&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.SelectControl,{label:Object(r.__)("Icon Position","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){return w({iconPosition:e})},options:[{value:"before",label:Object(r.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(r.__)("After Text","ultimate-addons-for-gutenberg")}]}),s.a.createElement(d.RangeControl,{label:Object(r.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return w({iconSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),s.a.createElement(b.a,null),"Desktop"===j&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return w({iconFontSize:e})},min:0,max:500,allowReset:!0})),"Tablet"===j&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return w({iconFontSizeTablet:e})},min:0,max:500,allowReset:!0})),"Mobile"===j&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){return w({iconFontSizeMobile:e})},min:0,max:500,allowReset:!0}))),s.a.createElement(d.RangeControl,{label:Object(r.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return w({titleSpace:e})},min:0,max:20,beforeIcon:"",allowReset:!0})),s.a.createElement(d.PanelBody,{title:Object(r.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},s.a.createElement(d.SelectControl,{label:Object(r.__)("Title Tag","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return w({titleTag:e})},options:[{value:"h1",label:Object(r.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(r.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(r.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(r.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(r.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(r.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(r.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(r.__)("p","ultimate-addons-for-gutenberg")}]}),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(r.__)("Title","ultimate-addons-for-gutenberg")),s.a.createElement(f.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:E,setAttributes:w,loadGoogleFonts:{value:t,label:"loadTitleGoogleFonts"},fontFamily:{value:fe,label:"titleFontFamily"},fontWeight:{value:ge,label:"titleFontWeight"},fontSubset:{value:be,label:"titleFontSubset"},fontSizeType:{value:de,label:"titleFontSizeType"},fontSize:{value:me,label:"titleFontSize"},fontSizeMobile:{value:pe,label:"titleFontSizeMobile"},fontSizeTablet:{value:he,label:"titleFontSizeTablet"},lineHeightType:{value:ve,label:"titleLineHeightType"},lineHeight:{value:_e,label:"titleLineHeight"},lineHeightMobile:{value:Ce,label:"titleLineHeightMobile"},lineHeightTablet:{value:ye,label:"titleLineHeightTablet"}}),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(r.__)("Description","ultimate-addons-for-gutenberg")),s.a.createElement(f.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:E,setAttributes:w,loadGoogleFonts:{value:n,label:"loadPrefixGoogleFonts"},fontFamily:{value:we,label:"prefixFontFamily"},fontWeight:{value:je,label:"prefixFontWeight"},fontSubset:{value:Oe,label:"prefixFontSubset"},fontSizeType:{value:Te,label:"prefixFontSizeType"},fontSize:{value:Se,label:"prefixFontSize"},fontSizeMobile:{value:ke,label:"prefixFontSizeMobile"},fontSizeTablet:{value:xe,label:"prefixFontSizeTablet"},lineHeightType:{value:Fe,label:"prefixLineHeightType"},lineHeight:{value:Ne,label:"prefixLineHeight"},lineHeightMobile:{value:Re,label:"prefixLineHeightMobile"},lineHeightTablet:{value:Pe,label:"prefixLineHeightTablet"}}),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(r.__)("Colors")),s.a.createElement(d.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:B}}))),s.a.createElement(m.ColorPalette,{value:B,onChange:function(e){return w({titleColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:M}}))),s.a.createElement(m.ColorPalette,{value:M,onChange:function(e){return w({iconColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:L}}))),s.a.createElement(m.ColorPalette,{value:L,onChange:function(e){return w({prefixColor:e})},allowReset:!0})):s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:A}}))),s.a.createElement(m.ColorPalette,{value:A,onChange:function(e){return w({titleHoverColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:D}}))),s.a.createElement(m.ColorPalette,{value:D,onChange:function(e){return w({iconHoverColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),s.a.createElement(m.ColorPalette,{value:I,onChange:function(e){return w({prefixHoverColor:e})},allowReset:!0})),s.a.createElement("div",null,t)}))),s.a.createElement(d.PanelBody,{title:Object(r.__)("Background"),initialOpen:!1},s.a.createElement(b.a,null),"Desktop"===j&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},s.a.createElement(d.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Z,"aria-pressed":"px"===Z,onClick:function(){return w({paddingType:"px"})}},"px"),s.a.createElement(d.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Z,"aria-pressed":"%"===Z,onClick:function(){return w({paddingType:"%"})}},"%")),s.a.createElement("h2",null,Object(r.__)("Button Padding")),s.a.createElement(d.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:J,onChange:function(e){return w({vPadding:e})},min:0,max:"%"==Z?100:2e3}),s.a.createElement(d.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:K,onChange:function(e){return w({hPadding:e})},min:0,max:"%"==Z?100:2e3})),"Tablet"===j&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},s.a.createElement(d.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Z,"aria-pressed":"px"===Z,onClick:function(){return w({paddingType:"px"})}},"px"),s.a.createElement(d.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Z,"aria-pressed":"%"===Z,onClick:function(){return w({paddingType:"%"})}},"%")),s.a.createElement("h2",null,Object(r.__)("Button Padding")),s.a.createElement(d.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:Y,onChange:function(e){return w({vPaddingTablet:e})},min:0,max:"%"==Z?100:2e3}),s.a.createElement(d.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:Q,onChange:function(e){return w({hPaddingTablet:e})},min:0,max:"%"==Z?100:2e3})),"Mobile"===j&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},s.a.createElement(d.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Z,"aria-pressed":"px"===Z,onClick:function(){return w({paddingType:"px"})}},"px"),s.a.createElement(d.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Z,"aria-pressed":"%"===Z,onClick:function(){return w({paddingType:"%"})}},"%")),s.a.createElement("h2",null,Object(r.__)("Button Padding")),s.a.createElement(d.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:X,onChange:function(e){return w({vPaddingMobile:e})},min:0,max:"%"==Z?100:2e3}),s.a.createElement(d.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:V,onChange:function(e){return w({hPaddingMobile:e})},min:0,max:"%"==Z?100:2e3})),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(r.__)("Button Background","ultimate-addons-for-gutenberg")),s.a.createElement(d.SelectControl,{label:Object(r.__)("Background Type","ultimate-addons-for-gutenberg"),value:ee,onChange:function(e){return w({backgroundType:e})},options:[{value:"transparent",label:Object(r.__)("Transparent","ultimate-addons-for-gutenberg")},{value:"color",label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(r.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==ee&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:te}}))),s.a.createElement(m.ColorPalette,{value:te,onChange:function(e){return w({backgroundColor:e})},allowReset:!0})),"gradient"==ee&&s.a.createElement(s.a.Fragment,null,s.a.createElement(m.PanelColorSettings,{title:Object(r.__)("Color Settings","ultimate-addons-for-gutenberg"),colorSettings:[{value:oe,onChange:function(e){return w({gradientColor2:e})},label:Object(r.__)("Color 1","ultimate-addons-for-gutenberg")},{value:ae,onChange:function(e){return w({gradientColor1:e})},label:Object(r.__)("Color 2","ultimate-addons-for-gutenberg")}]}),s.a.createElement(d.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return w({gradientType:e})},options:[{value:"linear",label:Object(r.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(r.__)("Radial","ultimate-addons-for-gutenberg")}]}),s.a.createElement(d.RangeControl,{label:Object(r.__)("Location 1","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return w({gradientLocation1:e})},min:0,max:100,allowReset:!0}),s.a.createElement(d.RangeControl,{label:Object(r.__)("Location 2","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return w({gradientLocation2:e})},min:0,max:100,allowReset:!0}),s.a.createElement(d.RangeControl,{label:Object(r.__)("Angle","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return w({gradientAngle:e})},min:0,max:360,allowReset:!0})),"transparent"!==ee&&s.a.createElement(d.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return w({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}),"color"==ee&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ne}}))),s.a.createElement(m.ColorPalette,{value:ne,onChange:function(e){return w({backgroundHoverColor:e})},allowReset:!0}),s.a.createElement(d.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return w({backgroundHoverOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}))),s.a.createElement(d.PanelBody,{title:Object(r.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},s.a.createElement(d.SelectControl,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:W,onChange:function(e){return w({borderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!==W&&s.a.createElement(d.RangeControl,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return w({borderWidth:e})},min:0,max:50,allowReset:!0}),s.a.createElement(d.RangeControl,{label:Object(r.__)("Border Radius","ultimate-addons-for-gutenberg"),value:$,onChange:function(e){return w({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!==W&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:q}}))),s.a.createElement(m.ColorPalette,{value:q,onChange:function(e){return w({borderColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:U}}))),s.a.createElement(m.ColorPalette,{value:U,onChange:function(e){return w({borderHoverColor:e})},allowReset:!0})))),t,n)};t.default=s.a.memo(p)}}]);