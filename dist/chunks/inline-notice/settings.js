(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{539:function(e,t,l){"use strict";l.r(t);var a=l(97),n=l.n(a),i=l(1),o=l.n(i),b=l(12),d=l(18),g=l(50),u=l(2),r=l(98),c=l(62),s=l(17),m=l(99),v=l(16),h=l(53),f=l(5),T=l(9),P=l(4);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var p=function(e){var t,l,a=e=e.parentProps,i=a.attributes,p=a.setAttributes,y=i.icon,C=i.noticeDismiss,F=i.cookies,L=i.close_cookie_days,M=i.textColor,S=i.titleColor,O=i.noticeColor,j=i.contentBgColor,E=i.noticeDismissColor,H=i.noticeAlignment,B=i.titleFontFamily,z=i.titleFontWeight,k=i.titleFontSubset,U=i.titleFontSizeType,R=i.titleLineHeightType,w=i.titleFontSize,A=i.titleFontSizeTablet,D=i.titleFontSizeMobile,W=i.titleLineHeight,G=i.titleLineHeightTablet,I=i.titleLineHeightMobile,V=i.descFontFamily,x=i.descFontWeight,N=i.descFontSubset,J=i.descFontSize,q=i.descFontSizeType,K=i.descFontSizeTablet,Q=i.descFontSizeMobile,X=i.descLineHeight,Y=i.descLineHeightType,Z=i.descLineHeightTablet,$=i.descLineHeightMobile,ee=i.titleLoadGoogleFonts,te=i.descLoadGoogleFonts,le=i.titleTopPadding,ae=i.titleRightPadding,ne=i.titleBottomPadding,ie=i.titleLeftPadding,oe=i.titleTopPaddingTablet,be=i.titleRightPaddingTablet,de=i.titleBottomPaddingTablet,ge=i.titleLeftPaddingTablet,ue=i.titleTopPaddingMobile,re=i.titleRightPaddingMobile,ce=i.titleBottomPaddingMobile,se=i.titleLeftPaddingMobile,me=i.titlePaddingUnit,ve=i.mobileTitlePaddingUnit,he=i.tabletTitlePaddingUnit,fe=i.titlePaddingLink,Te=i.headingTag,Pe=i.layout,_e=i.highlightWidth,pe=i.contentTopPadding,ye=i.contentRightPadding,Ce=i.contentBottomPadding,Fe=i.contentLeftPadding,Le=i.contentTopPaddingTablet,Me=i.contentRightPaddingTablet,Se=i.contentBottomPaddingTablet,Oe=i.contentLeftPaddingTablet,je=i.contentTopPaddingMobile,Ee=i.contentRightPaddingMobile,He=i.contentBottomPaddingMobile,Be=i.contentLeftPaddingMobile,ze=i.contentPaddingUnit,ke=i.mobileContentPaddingUnit,Ue=i.tabletContentPaddingUnit,Re=i.contentPaddingLink;if(!0===ee){var we={google:{families:[B+(z?":"+z:"")]}};t=o.a.createElement(g.a,{config:we})}if(!0===te){var Ae={google:{families:[V+(x?":"+x:"")]}};l=o.a.createElement(g.a,{config:Ae})}var De=[{value:"",label:Object(u.__)("Display Always","ultimate-addons-for-gutenberg")},{value:"uagb-dismissable",label:Object(u.__)("Allow to Dismiss","ultimate-addons-for-gutenberg")}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.BlockControls,{key:"controls"},o.a.createElement(f.AlignmentToolbar,{value:H,onChange:function(e){return p({noticeAlignment:e})}})),o.a.createElement(f.InspectorControls,null,o.a.createElement(r.a,{tabs:["general","style","advance"]},o.a.createElement(c.a,{key:"general"},o.a.createElement(P.PanelBody,{initialOpen:!0},o.a.createElement(h.a,{setAttributes:p,label:Object(u.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:Pe,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"simmple",label:"Default"},{value:"modern",label:"Modern"}],showIcons:!1}),"simple"===Pe&&o.a.createElement(v.a,{label:Object(u.__)("Highlight width","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return p({highlightWidth:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(P.SelectControl,{label:Object(u.__)("Title Tag"),value:Te,onChange:function(e){return p({headingTag:e})},options:[{value:"h1",label:Object(u.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(u.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(u.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(u.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(u.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(u.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(u.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(u.__)("p","ultimate-addons-for-gutenberg")}]}),o.a.createElement(P.SelectControl,{label:Object(u.__)("Notice Display","ultimate-addons-for-gutenberg"),options:De,value:C,onChange:function(e){return p({noticeDismiss:e})}}),C&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"components-base-control__label"},Object(u.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(n.a,{icons:wp.UAGBSvgIcons,renderFunc:b.a,theme:"default",value:y,onChange:function(e){return p({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(u.__)("Select Icon","ultimate-addons-for-gutenberg")})),C&&o.a.createElement(P.ToggleControl,{label:Object(u.__)("Enable Cookies","ultimate-addons-for-gutenberg"),checked:F,onChange:function(e){var t=(0,Object(T.select)("core/editor").getCurrentPostId)().toString(),l=(new Date).getTime();p({c_id:t+"-"+l}),p({cookies:e})}}),F&&o.a.createElement(v.a,{label:Object(u.__)("Show Closed Notice After (Days)","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return p({close_cookie_days:e})},min:0,max:50,displayUnit:!1}))),o.a.createElement(c.a,{key:"style"},o.a.createElement(P.PanelBody,{title:Object(u.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return p({titleColor:e})}}),o.a.createElement(s.a,{label:Object(u.__)("Highlight Color","ultimate-addons-for-gutenberg"),colorValue:O||"",onColorChange:function(e){return p({noticeColor:e})}}),C&&o.a.createElement(s.a,{label:Object(u.__)("Dismiss Icon Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return p({noticeDismissColor:e})}}),o.a.createElement(d.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:i,setAttributes:p,loadGoogleFonts:{value:ee,label:"titleLoadGoogleFonts"},fontFamily:{value:B,label:"titleFontFamily"},fontWeight:{value:z,label:"titleFontWeight"},fontSubset:{value:k,label:"titleFontSubset"},fontSizeType:{value:U,label:"titleFontSizeType"},fontSize:{value:w,label:"titleFontSize"},fontSizeMobile:{value:D,label:"titleFontSizeMobile"},fontSizeTablet:{value:A,label:"titleFontSizeTablet"},lineHeightType:{value:R,label:"titleLineHeightType"},lineHeight:{value:W,label:"titleLineHeight"},lineHeightMobile:{value:I,label:"titleLineHeightMobile"},lineHeightTablet:{value:G,label:"titleLineHeightTablet"}}),o.a.createElement(m.a,_({},e,{label:Object(u.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:le,label:"titleTopPadding"},valueRight:{value:ae,label:"titleRightPadding"},valueBottom:{value:ne,label:"titleBottomPadding"},valueLeft:{value:ie,label:"titleLeftPadding"},valueTopTablet:{value:oe,label:"titleTopPaddingTablet"},valueRightTablet:{value:be,label:"titleRightPaddingTablet"},valueBottomTablet:{value:de,label:"titleBottomPaddingTablet"},valueLeftTablet:{value:ge,label:"titleLeftPaddingTablet"},valueTopMobile:{value:ue,label:"titleTopPaddingMobile"},valueRightMobile:{value:re,label:"titleRightPaddingMobile"},valueBottomMobile:{value:ce,label:"titleBottomPaddingMobile"},valueLeftMobile:{value:se,label:"titleLeftPaddingMobile"},unit:{value:me,label:"titlePaddingUnit"},mUnit:{value:ve,label:"mobiletitlePaddingUnit"},tUnit:{value:he,label:"tablettitlePaddingUnit"},attributes:i,setAttributes:p,link:{value:fe,label:"titlePaddingLink"}}))),o.a.createElement(P.PanelBody,{title:Object(u.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return p({textColor:e})}}),o.a.createElement(s.a,{label:Object(u.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:function(e){return p({contentBgColor:e})}}),o.a.createElement(d.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:i,setAttributes:p,loadGoogleFonts:{value:te,label:"descLoadGoogleFonts"},fontFamily:{value:V,label:"descFontFamily"},fontWeight:{value:x,label:"descFontWeight"},fontSubset:{value:N,label:"descFontSubset"},fontSizeType:{value:q,label:"descFontSizeType"},fontSize:{value:J,label:"descFontSize"},fontSizeMobile:{value:Q,label:"descFontSizeMobile"},fontSizeTablet:{value:K,label:"descFontSizeTablet"},lineHeightType:{value:Y,label:"descLineHeightType"},lineHeight:{value:X,label:"descLineHeight"},lineHeightMobile:{value:$,label:"descLineHeightMobile"},lineHeightTablet:{value:Z,label:"descLineHeightTablet"}}),o.a.createElement(m.a,_({},e,{label:Object(u.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:pe,label:"contentTopPadding"},valueRight:{value:ye,label:"contentRightPadding"},valueBottom:{value:Ce,label:"contentBottomPadding"},valueLeft:{value:Fe,label:"contentLeftPadding"},valueTopTablet:{value:Le,label:"contentTopPaddingTablet"},valueRightTablet:{value:Me,label:"contentRightPaddingTablet"},valueBottomTablet:{value:Se,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:Oe,label:"contentLeftPaddingTablet"},valueTopMobile:{value:je,label:"contentTopPaddingMobile"},valueRightMobile:{value:Ee,label:"contentRightPaddingMobile"},valueBottomMobile:{value:He,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:Be,label:"contentLeftPaddingMobile"},unit:{value:ze,label:"contentPaddingUnit"},mUnit:{value:ke,label:"mobileContentPaddingUnit"},tUnit:{value:Ue,label:"tabletContentPaddingUnit"},attributes:i,setAttributes:p,link:{value:Re,label:"contentPaddingLink"}})))),o.a.createElement(c.a,{key:"advance"}))),t,l)};t.default=o.a.memo(p)}}]);