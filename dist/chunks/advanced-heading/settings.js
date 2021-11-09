(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/advanced-heading/settings"],{

/***/ "./src/blocks/advanced-heading/settings.js":
/*!*************************************************!*\
  !*** ./src/blocks/advanced-heading/settings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












 // Extend component

const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    headingAlign,
    headingColor,
    subHeadingColor,
    separatorColor,
    headingTag,
    headFontFamily,
    headFontWeight,
    headFontStyle,
    headFontSizeType,
    headFontSize,
    headFontSizeMobile,
    headFontSizeTablet,
    headLineHeightType,
    headLineHeight,
    headLineHeightMobile,
    headLineHeightTablet,
    subHeadFontFamily,
    subHeadFontWeight,
    subHeadFontStyle,
    subHeadFontSize,
    subHeadFontSizeType,
    subHeadFontSizeMobile,
    subHeadFontSizeTablet,
    subHeadLineHeight,
    subHeadLineHeightType,
    subHeadLineHeightMobile,
    subHeadLineHeightTablet,
    headTransform,
    headDecoration,
    subHeadTransform,
    subHeadDecoration,
    separatorWidth,
    separatorWidthType,
    seperatorStyle,
    separatorHeight,
    headSpace,
    separatorSpace,
    headLoadGoogleFonts,
    subHeadLoadGoogleFonts
  } = attributes;
  let loadHeadingGoogleFonts;
  let loadSubHeadingGoogleFonts;

  if (headLoadGoogleFonts === true) {
    const hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: hconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: sconfig
    });
  }

  const blockControlSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: value => setAttributes({
        headingAlign: value
      })
    }));
  };

  const generalPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }));
  };

  const headingPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: headLoadGoogleFonts,
        label: 'headLoadGoogleFonts'
      },
      fontFamily: {
        value: headFontFamily,
        label: 'headFontFamily'
      },
      fontWeight: {
        value: headFontWeight,
        label: 'headFontWeight'
      },
      fontStyle: {
        value: headFontStyle,
        label: 'headFontStyle'
      },
      transform: {
        value: headTransform,
        label: 'headTransform'
      },
      decoration: {
        value: headDecoration,
        label: 'headDecoration'
      },
      fontSizeType: {
        value: headFontSizeType,
        label: 'headFontSizeType'
      },
      fontSize: {
        value: headFontSize,
        label: 'headFontSize'
      },
      fontSizeMobile: {
        value: headFontSizeMobile,
        label: 'headFontSizeMobile'
      },
      fontSizeTablet: {
        value: headFontSizeTablet,
        label: 'headFontSizeTablet'
      },
      lineHeightType: {
        value: headLineHeightType,
        label: 'headLineHeightType'
      },
      lineHeight: {
        value: headLineHeight,
        label: 'headLineHeight'
      },
      lineHeightMobile: {
        value: headLineHeightMobile,
        label: 'headLineHeightMobile'
      },
      lineHeightTablet: {
        value: headLineHeightTablet,
        label: 'headLineHeightTablet'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : '',
      onColorChange: value => setAttributes({
        headingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Bottom Spacing (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: headSpace,
      onChange: value => setAttributes({
        headSpace: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }));
  };

  const subheadingPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: subHeadLoadGoogleFonts,
        label: 'subHeadLoadGoogleFonts'
      },
      fontFamily: {
        value: subHeadFontFamily,
        label: 'subHeadFontFamily'
      },
      fontWeight: {
        value: subHeadFontWeight,
        label: 'subHeadFontWeight'
      },
      fontStyle: {
        value: subHeadFontStyle,
        label: 'subHeadFontStyle'
      },
      transform: {
        value: subHeadTransform,
        label: 'subHeadTransform'
      },
      decoration: {
        value: subHeadDecoration,
        label: 'subHeadDecoration'
      },
      fontSizeType: {
        value: subHeadFontSizeType,
        label: 'subHeadFontSizeType'
      },
      fontSize: {
        value: subHeadFontSize,
        label: 'subHeadFontSize'
      },
      fontSizeMobile: {
        value: subHeadFontSizeMobile,
        label: 'subHeadFontSizeMobile'
      },
      fontSizeTablet: {
        value: subHeadFontSizeTablet,
        label: 'subHeadFontSizeTablet'
      },
      lineHeightType: {
        value: subHeadLineHeightType,
        label: 'subHeadLineHeightType'
      },
      lineHeight: {
        value: subHeadLineHeight,
        label: 'subHeadLineHeight'
      },
      lineHeightMobile: {
        value: subHeadLineHeightMobile,
        label: 'subHeadLineHeightMobile'
      },
      lineHeightTablet: {
        value: subHeadLineHeightTablet,
        label: 'subHeadLineHeightTablet'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: subHeadingColor ? subHeadingColor : '',
      onColorChange: value => setAttributes({
        subHeadingColor: value
      })
    }));
  };

  const seperatorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Separator', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: seperatorStyle,
      onChange: value => setAttributes({
        seperatorStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: separatorWidth,
      onChange: value => setAttributes({
        separatorWidth: value
      }),
      min: 0,
      max: '%' === separatorWidthType ? 100 : 500,
      unit: {
        value: separatorWidthType,
        label: 'separatorWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Thickness(px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: separatorHeight,
      onChange: value => setAttributes({
        separatorHeight: value
      }),
      min: 0,
      max: 20,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: separatorColor ? separatorColor : '',
      onColorChange: value => setAttributes({
        separatorColor: value
      })
    })), seperatorStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Bottom Spacing (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: separatorSpace,
      onChange: value => setAttributes({
        separatorSpace: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }));
  };

  const styles = [{
    label: 'headingColor',
    value: headingColor
  }, {
    label: 'separatorColor',
    value: separatorColor
  }, {
    label: 'subHeadingColor',
    value: subHeadingColor
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, blockControlSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].general, generalPanel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].style, headingPanel(), seperatorSettings(), subheadingPanel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadHeadingGoogleFonts, loadSubHeadingGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
if (googlefonts === undefined) {
  var googlefonts = []; // eslint-disable-line no-var
}




const statuses = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading'
};

const noop = () => {};

const WebfontLoader = props => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const status = undefined;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadFonts();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      onStatus,
      config
    } = props;

    if (status !== value.status) {
      onStatus(value.status);
    }

    if (config !== value.config) {
      loadFonts();
    }
  }, [props]);

  const handleLoading = () => {
    setValue({
      status: statuses.loading
    });
  };

  const addFont = font => {
    if (!googlefonts.includes(font)) {
      googlefonts.push(font);
    }
  };

  const handleActive = () => {
    setValue({
      status: statuses.active
    });
  };

  const handleInactive = () => {
    setValue({
      status: statuses.inactive
    });
  };

  const loadFonts = () => {
    if (!googlefonts.includes(props.config.google.families[0])) {
      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive
      });
      addFont(props.config.google.families[0]);
    }
  };

  const {
    children
  } = props;
  return children || null;
};

WebfontLoader.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  onStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map