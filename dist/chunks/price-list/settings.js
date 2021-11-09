(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/price-list/settings"],{

/***/ "./src/blocks/price-list/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/price-list/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const maxColumns = 3;



const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props; // Setup the attributes.

  const {
    menu_item_count,
    titleSpace,
    columns,
    tcolumns,
    mcolumns,
    rowGap,
    columnGap,
    priceColor,
    descColor,
    titleColor,
    seperatorStyle,
    seperatorWidth,
    seperatorThickness,
    seperatorColor,
    priceLoadGoogleFonts,
    titleLoadGoogleFonts,
    descLoadGoogleFonts,
    titleFontSizeType,
    titleFontSize,
    titleFontSizeTablet,
    titleFontSizeMobile,
    titleFontFamily,
    titleFontWeight,
    titleFontStyle,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightTablet,
    titleLineHeightMobile,
    priceFontSizeType,
    priceFontSize,
    priceFontSizeTablet,
    priceFontSizeMobile,
    priceFontFamily,
    priceFontWeight,
    priceFontStyle,
    priceLineHeightType,
    priceLineHeight,
    priceLineHeightTablet,
    priceLineHeightMobile,
    descFontSizeType,
    descFontSize,
    descFontSizeTablet,
    descFontSizeMobile,
    descFontFamily,
    descFontWeight,
    descFontStyle,
    descLineHeightType,
    descLineHeight,
    descLineHeightTablet,
    descLineHeightMobile,
    headingTag,
    imagePosition,
    imageAlignment,
    imageSize,
    imageWidth,
    stack,
    imageWidthType,
    seperatorWidthType,
    rowGapType,
    columnGapType,
    titleSpaceType,
    contentPaddingTop,
    contentPaddingRight,
    contentPaddingBottom,
    contentPaddingLeft,
    contentPaddingTopTablet,
    contentPaddingRightTablet,
    contentPaddingBottomTablet,
    contentPaddingLeftTablet,
    contentPaddingTopMobile,
    contentPaddingRightMobile,
    contentPaddingBottomMobile,
    contentPaddingLeftMobile,
    contentPaddingUnit,
    contentMobilePaddingUnit,
    contentTabletPaddingUnit,
    contentSpacingLink,
    imgPaddingTop,
    imgPaddingRight,
    imgPaddingBottom,
    imgPaddingLeft,
    imgPaddingTopTablet,
    imgPaddingRightTablet,
    imgPaddingBottomTablet,
    imgPaddingLeftTablet,
    imgPaddingTopMobile,
    imgPaddingRightMobile,
    imgPaddingBottomMobile,
    imgPaddingLeftMobile,
    imgPaddingUnit,
    imgMobilePaddingUnit,
    imgTabletPaddingUnit,
    imgSpacingLink,
    titleTransform,
    titleDecoration,
    descTransform,
    descDecoration,
    priceTransform,
    priceDecoration
  } = attributes;

  const setimageSize = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(pricelistChild => {
      pricelistChild.attributes.imageSize = value;
    });
    setAttributes({
      imageSize: value
    });
  };

  let loadTitleGoogleFonts;
  let loadDescGoogleFonts;
  let loadPriceGoogleFonts;

  if (titleLoadGoogleFonts === true) {
    const titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: titleconfig
    });
  }

  if (descLoadGoogleFonts === true) {
    const descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: descconfig
    });
  }

  if (priceLoadGoogleFonts === true) {
    const priceconfig = {
      google: {
        families: [priceFontFamily + (priceFontWeight ? ':' + priceFontWeight : '')]
      }
    };
    loadPriceGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: priceconfig
    });
  } // Margin Settings.


  const marginSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Row Gap'),
      setAttributes: setAttributes,
      value: rowGap,
      onChange: value => setAttributes({
        rowGap: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: rowGapType,
        label: 'rowGapType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Column Gap'),
      setAttributes: setAttributes,
      value: columnGap,
      onChange: value => setAttributes({
        columnGap: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: columnGapType,
        label: 'columnGapType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Item Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: contentPaddingTop,
        label: 'contentPaddingTop'
      },
      valueRight: {
        value: contentPaddingRight,
        label: 'contentPaddingRight'
      },
      valueBottom: {
        value: contentPaddingBottom,
        label: 'contentPaddingBottom'
      },
      valueLeft: {
        value: contentPaddingLeft,
        label: 'contentPaddingLeft'
      },
      valueTopTablet: {
        value: contentPaddingTopTablet,
        label: 'contentPaddingTopTablet'
      },
      valueRightTablet: {
        value: contentPaddingRightTablet,
        label: 'contentPaddingRightTablet'
      },
      valueBottomTablet: {
        value: contentPaddingBottomTablet,
        label: 'contentPaddingBottomTablet'
      },
      valueLeftTablet: {
        value: contentPaddingLeftTablet,
        label: 'contentPaddingLeftTablet'
      },
      valueTopMobile: {
        value: contentPaddingTopMobile,
        label: 'contentPaddingTopMobile'
      },
      valueRightMobile: {
        value: contentPaddingRightMobile,
        label: 'contentPaddingRightMobile'
      },
      valueBottomMobile: {
        value: contentPaddingBottomMobile,
        label: 'contentPaddingBottomMobile'
      },
      valueLeftMobile: {
        value: contentPaddingLeftMobile,
        label: 'contentPaddingLeftMobile'
      },
      unit: {
        value: contentPaddingUnit,
        label: 'contentPaddingUnit'
      },
      mUnit: {
        value: contentMobilePaddingUnit,
        label: 'contentMobilePaddingUnit'
      },
      tUnit: {
        value: contentTabletPaddingUnit,
        label: 'contentTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: contentSpacingLink,
        label: 'contentSpacingLink'
      }
    })));
  }; // Image sizes.


  const imageSizeOptions = [{
    value: 'thumbnail',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Thumbnail')
  }, {
    value: 'medium',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Medium')
  }, {
    value: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Large')
  }]; //Image Setting

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imagePosition,
        label: 'imagePosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), (imagePosition === 'left' || imagePosition === 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'tablet',
        label: 'Tablet'
      }, {
        value: 'mobile',
        label: 'Mobile'
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Choose on what breakpoint the Images will stack.'),
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imageAlignment,
        label: 'imageAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: 'Top'
      }, {
        value: 'middle',
        label: 'Middle'
      }],
      showIcons: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Size'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: setimageSize
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width'),
      value: imageWidth,
      setAttributes: setAttributes,
      onChange: value => setAttributes({
        imageWidth: value
      }),
      min: 0,
      max: 500,
      unit: {
        value: imageWidthType,
        label: 'imageWidthType'
      }
    }));
  }; //Image Setting


  const imageStyles = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: imgPaddingTop,
        label: 'imgPaddingTop'
      },
      valueRight: {
        value: imgPaddingRight,
        label: 'imgPaddingRight'
      },
      valueBottom: {
        value: imgPaddingBottom,
        label: 'imgPaddingBottom'
      },
      valueLeft: {
        value: imgPaddingLeft,
        label: 'imgPaddingLeft'
      },
      valueTopTablet: {
        value: imgPaddingTopTablet,
        label: 'imgPaddingTopTablet'
      },
      valueRightTablet: {
        value: imgPaddingRightTablet,
        label: 'imgPaddingRightTablet'
      },
      valueBottomTablet: {
        value: imgPaddingBottomTablet,
        label: 'imgPaddingBottomTablet'
      },
      valueLeftTablet: {
        value: imgPaddingLeftTablet,
        label: 'imgPaddingLeftTablet'
      },
      valueTopMobile: {
        value: imgPaddingTopMobile,
        label: 'imgPaddingTopMobile'
      },
      valueRightMobile: {
        value: imgPaddingRightMobile,
        label: 'imgPaddingRightMobile'
      },
      valueBottomMobile: {
        value: imgPaddingBottomMobile,
        label: 'imgPaddingBottomMobile'
      },
      valueLeftMobile: {
        value: imgPaddingLeftMobile,
        label: 'imgPaddingLeftMobile'
      },
      unit: {
        value: imgPaddingUnit,
        label: 'imgPaddingUnit'
      },
      mUnit: {
        value: imgMobilePaddingUnit,
        label: 'imgMobilePaddingUnit'
      },
      tUnit: {
        value: imgTabletPaddingUnit,
        label: 'imgTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: imgSpacingLink,
        label: 'imgSpacingLink'
      }
    })));
  }; //Color settings


  const contentSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: descColor ? descColor : '',
      onColorChange: value => setAttributes({
        descColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: descLoadGoogleFonts,
        label: 'descLoadGoogleFonts'
      },
      fontFamily: {
        value: descFontFamily,
        label: 'descFontFamily'
      },
      fontWeight: {
        value: descFontWeight,
        label: 'descFontWeight'
      },
      fontStyle: {
        value: descFontStyle,
        label: 'descFontStyle'
      },
      fontSizeType: {
        value: descFontSizeType,
        label: 'descFontSizeType'
      },
      fontSize: {
        value: descFontSize,
        label: 'descFontSize'
      },
      fontSizeMobile: {
        value: descFontSizeMobile,
        label: 'descFontSizeMobile'
      },
      fontSizeTablet: {
        value: descFontSizeTablet,
        label: 'descFontSizeTablet'
      },
      lineHeightType: {
        value: descLineHeightType,
        label: 'descLineHeightType'
      },
      lineHeight: {
        value: descLineHeight,
        label: 'descLineHeight'
      },
      lineHeightMobile: {
        value: descLineHeightMobile,
        label: 'descLineHeightMobile'
      },
      lineHeightTablet: {
        value: descLineHeightTablet,
        label: 'descLineHeightTablet'
      },
      transform: {
        value: descTransform,
        label: 'descTransform'
      },
      decoration: {
        value: descDecoration,
        label: 'descDecoration'
      }
    }));
  }; //seperator setting


  const separatorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Separator'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style'),
      value: seperatorStyle,
      onChange: value => setAttributes({
        seperatorStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Solid')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dotted')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dashed')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Double')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Groove')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Inset')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Outset')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ridge')
      }]
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width'),
      setAttributes: setAttributes,
      value: seperatorWidth,
      onChange: value => setAttributes({
        seperatorWidth: value
      }),
      min: 0,
      max: 100,
      unit: {
        value: seperatorWidthType,
        label: 'seperatorWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Thickness'),
      setAttributes: setAttributes,
      value: seperatorThickness,
      onChange: value => setAttributes({
        seperatorThickness: value
      }),
      min: 0,
      max: 20,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: seperatorColor ? seperatorColor : '',
      onColorChange: value => setAttributes({
        seperatorColor: value
      })
    })));
  }; // Typography settings.


  const priceSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Price'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: priceColor ? priceColor : '',
      onColorChange: value => setAttributes({
        priceColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: priceLoadGoogleFonts,
        label: 'priceLoadGoogleFonts'
      },
      fontFamily: {
        value: priceFontFamily,
        label: 'priceFontFamily'
      },
      fontWeight: {
        value: priceFontWeight,
        label: 'priceFontWeight'
      },
      fontStyle: {
        value: priceFontStyle,
        label: 'priceFontStyle'
      },
      fontSizeType: {
        value: priceFontSizeType,
        label: 'priceFontSizeType'
      },
      fontSize: {
        value: priceFontSize,
        label: 'priceFontSize'
      },
      fontSizeMobile: {
        value: priceFontSizeMobile,
        label: 'priceFontSizeMobile'
      },
      fontSizeTablet: {
        value: priceFontSizeTablet,
        label: 'priceFontSizeTablet'
      },
      lineHeightType: {
        value: priceLineHeightType,
        label: 'priceLineHeightType'
      },
      lineHeight: {
        value: priceLineHeight,
        label: 'priceLineHeight'
      },
      lineHeightMobile: {
        value: priceLineHeightMobile,
        label: 'priceLineHeightMobile'
      },
      lineHeightTablet: {
        value: priceLineHeightTablet,
        label: 'priceLineHeightTablet'
      },
      transform: {
        value: priceTransform,
        label: 'priceTransform'
      },
      decoration: {
        value: priceDecoration,
        label: 'priceDecoration'
      }
    }));
  };

  const titleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor ? titleColor : '',
      onColorChange: value => setAttributes({
        titleColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: 'titleLoadGoogleFonts'
      },
      fontFamily: {
        value: titleFontFamily,
        label: 'titleFontFamily'
      },
      fontWeight: {
        value: titleFontWeight,
        label: 'titleFontWeight'
      },
      fontStyle: {
        value: titleFontStyle,
        label: 'titleFontStyle'
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: 'titleFontSizeType'
      },
      fontSize: {
        value: titleFontSize,
        label: 'titleFontSize'
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: 'titleFontSizeMobile'
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: 'titleFontSizeTablet'
      },
      lineHeightType: {
        value: titleLineHeightType,
        label: 'titleLineHeightType'
      },
      lineHeight: {
        value: titleLineHeight,
        label: 'titleLineHeight'
      },
      lineHeightMobile: {
        value: titleLineHeightMobile,
        label: 'titleLineHeightMobile'
      },
      lineHeightTablet: {
        value: titleLineHeightTablet,
        label: 'titleLineHeightTablet'
      },
      transform: {
        value: titleTransform,
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Margin'),
      value: titleSpace,
      setAttributes: setAttributes,
      onChange: value => setAttributes({
        titleSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: titleSpaceType,
        label: 'titleSpaceType'
      }
    }));
  };

  const inspectControl = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].general, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columns,
          label: 'columns'
        },
        tablet: {
          value: tcolumns,
          label: 'tcolumns'
        },
        mobile: {
          value: mcolumns,
          label: 'mcolumns'
        }
      },
      min: 1,
      max: Math.min(maxColumns, menu_item_count),
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('P', 'ultimate-addons-for-gutenberg')
      }]
    })), imageSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].style, titleSettings(), separatorSettings(), imageStyles(), contentSettings(), priceSettings(), marginSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].advance, {
      parentProps: props
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, inspectControl(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadTitleGoogleFonts, loadDescGoogleFonts, loadPriceGoogleFonts));
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