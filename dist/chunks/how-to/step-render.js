(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[58],{355:function(e,t,n){"use strict";var a=n(17),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'.uagb-columns__wrap::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border: 1px dashed #03ddff;\n  content: ""; }\n',""]),t.a=o},594:function(e,t,n){"use strict";n.r(t);var a,o=n(4),r=n.n(o),i=n(1),u=n.n(i),c=n(2),s=n(16),l=n.n(s),d=n(355),p=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return p++||(a=l()(d.a,g)),m},m.unuse=function(){p>0&&!--p&&(a(),a=null)};var f=m,b=n(5),h=function(e){Object(i.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,a=t.setAttributes,o=t.mergeBlocks,s=t.insertBlocksAfter,l=n.block_id,d=n.name,p=n.description,g=(n.url,n.image),m="";null!=g&&""!==g&&(m=g.url);var h="";if(""!==m){var v=g.sizes,_=n.imageSize;h=void 0!==v&&void 0!==v[_]?v[_].url:m}return u.a.createElement("div",{className:r()("uagb-how-to-step-wrap","uagb-block-".concat(l))},h&&u.a.createElement("img",{className:"uagb-how-to-step-image",src:h,alt:g.alt}),u.a.createElement(b.RichText,{tagName:"div",className:"uagb-how-to-step-name",placeholder:Object(c.__)("Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return a({name:e})},multiline:!1}),u.a.createElement(b.RichText,{tagName:"p",value:p,placeholder:Object(c.__)("Write a Description"),className:"uagb-how-to-step-description",onChange:function(e){return a({description:e})},onMerge:o,onSplit:s?function(e,t){a({description:e});for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];s([].concat(o,[createBlock("core/paragraph",{description:t})]))}:void 0,onRemove:function(){return onReplace([])}}))};t.default=u.a.memo(h)}}]);