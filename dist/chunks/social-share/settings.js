(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/social-share/settings"],{

/***/ "./src/blocks/social-share/settings.js":
/*!*********************************************!*\
  !*** ./src/blocks/social-share/settings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: Social Share - Settings.
 */











const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    align,
    gap,
    stack,
    social_layout,
    borderRadius,
    size,
    sizeType,
    sizeMobile,
    sizeTablet,
    bgSize
  } = attributes;

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["BlockAlignmentToolbar"], {
      value: align,
      onChange: value => {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }));
  };

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: social_layout,
        label: 'social_layout'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'horizontal',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Horizontal', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vertical',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Vertical', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), 'horizontal' === social_layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Stack On', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('None', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'desktop',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Desktop', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Desktop', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Tablet', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Mobile', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: Choose on what breakpoint the Icons will stack.', 'ultimate-addons-for-gutenberg')
    })));
  };

  const spacingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Common', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Size', 'ultimate-addons-for-gutenberg'),
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
      max: 100,
      unit: {
        value: sizeType,
        label: 'sizeType'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: bgSize,
      onChange: value => setAttributes({
        bgSize: value
      }),
      min: 0,
      max: 100,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: Background Size option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: borderRadius,
      onChange: value => setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 100,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: Border Radius option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Gap between Items', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: gap,
      onChange: value => setAttributes({
        gap: value
      }),
      min: 0,
      max: 100,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: The gap between the items will seen larger in the editor, for better user edit experience. But at frontend the gap will be exactly what is set from here.', 'ultimate-addons-for-gutenberg')
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].general, generalSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].style, spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].advance, {
    parentProps: props
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map