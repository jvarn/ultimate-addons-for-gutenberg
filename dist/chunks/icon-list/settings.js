(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/icon-list/settings"],{

/***/ "./src/blocks/icon-list/settings.js":
/*!******************************************!*\
  !*** ./src/blocks/icon-list/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    align,
    gap,
    inner_gap,
    stack,
    icon_layout,
    iconPosition,
    size,
    sizeType,
    sizeMobile,
    sizeTablet,
    hideLabel,
    borderRadius,
    bgSize,
    border,
    fontSize,
    fontSizeType,
    fontSizeMobile,
    fontSizeTablet,
    fontFamily,
    fontWeight,
    lineHeight,
    lineHeightType,
    lineHeightMobile,
    lineHeightTablet,
    loadGoogleFonts,
    fontStyle,
    fontTransform,
    fontDecoration
  } = attributes;
  let googleFonts;

  if (loadGoogleFonts === true) {
    const hconfig = {
      google: {
        families: [fontFamily + (fontWeight ? ':' + fontWeight : '')]
      }
    };
    googleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: hconfig
    });
  }

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockAlignmentToolbar"], {
      value: align,
      onChange: value => {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }));
  };

  const changeChildAttr = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/block-editor').getBlocks(clientId);
    getChildBlocks.forEach(iconChild => {
      iconChild.attributes.hideLabel = value;
    });
    setAttributes({
      hideLabel: value
    });
  };

  const generalSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: icon_layout,
        label: 'icon_layout'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'horizontal',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Horizontal', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vertical',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), 'horizontal' === icon_layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Stack On', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Tablet + Mobile', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Mobile', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Choose on what breakpoint the Icons will stack.', 'ultimate-addons-for-gutenberg')
    })), !hideLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: iconPosition,
        label: 'iconPosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: 'Top',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: 'Middle',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: This manages the Icon Position with respect to the Label.', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hide Labels', 'ultimate-addons-for-gutenberg'),
      checked: hideLabel,
      onChange: value => changeChildAttr(value)
    }));
  };

  const commonSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Gap between Items (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: gap,
      onChange: value => setAttributes({
        gap: value
      }),
      min: 0,
      max: 100,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.', 'ultimate-addons-for-gutenberg')
    }));
  };

  const labelSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Label', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Gap between Icon and Label (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: inner_gap,
      onChange: value => setAttributes({
        inner_gap: value
      }),
      min: 0,
      max: 100,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: loadGoogleFonts,
        label: 'loadGoogleFonts'
      },
      fontFamily: {
        value: fontFamily,
        label: 'fontFamily'
      },
      fontWeight: {
        value: fontWeight,
        label: 'fontWeight'
      },
      fontStyle: {
        value: fontStyle,
        label: 'fontStyle'
      },
      transform: {
        value: fontTransform,
        label: 'fontTransform'
      },
      decoration: {
        value: fontDecoration,
        label: 'fontDecoration'
      },
      fontSizeType: {
        value: fontSizeType,
        label: 'fontSizeType'
      },
      fontSize: {
        value: fontSize,
        label: 'fontSize'
      },
      fontSizeMobile: {
        value: fontSizeMobile,
        label: 'fontSizeMobile'
      },
      fontSizeTablet: {
        value: fontSizeTablet,
        label: 'fontSizeTablet'
      },
      lineHeightType: {
        value: lineHeightType,
        label: 'lineHeightType'
      },
      lineHeight: {
        value: lineHeight,
        label: 'lineHeight'
      },
      lineHeightMobile: {
        value: lineHeightMobile,
        label: 'lineHeightMobile'
      },
      lineHeightTablet: {
        value: lineHeightTablet,
        label: 'lineHeightTablet'
      }
    }));
  };

  const iconSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: size,
          label: 'size'
        },
        tablet: {
          value: sizeTablet,
          label: 'sizeTablet'
        },
        mobile: {
          value: sizeMobile,
          label: 'sizeMobile'
        }
      },
      min: 0,
      max: 500,
      unit: {
        value: sizeType,
        label: 'sizeType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Size (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: bgSize,
      onChange: value => setAttributes({
        bgSize: value
      }),
      min: 0,
      max: 500,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Background Size option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: border,
      onChange: value => setAttributes({
        border: value
      }),
      min: 0,
      max: 10,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Border option is useful when one adds border color to the icons.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Radius (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: borderRadius,
      onChange: value => setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 500,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Border Radius option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg')
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, generalSetting()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, iconSetting(), !hideLabel && labelSetting(), commonSetting()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
    parentProps: props
  })))), googleFonts);
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