(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-grid/blog"],{

/***/ "./src/blocks/post/post-grid/blog.js":
/*!*******************************************!*\
  !*** ./src/blocks/post/post-grid/blog.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././function */ "./src/blocks/post/function.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Blog = props => {
  const {
    attributes,
    className,
    latestPosts,
    block_id,
    deviceType
  } = props;
  const {
    columns,
    tcolumns,
    mcolumns,
    imgPosition,
    postsToShow,
    equalHeight,
    paginationMarkup,
    postPagination,
    layoutConfig
  } = attributes;
  const equalHeightClass = equalHeight ? 'uagb-post__equal-height' : ''; // Removing posts from display should be instant.

  const displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-post-grid', `uagb-post__image-position-${imgPosition}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${block_id}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('is-grid', `uagb-post__columns-${columns}`, `uagb-post__columns-tablet-${tcolumns}`, `uagb-post__columns-mobile-${mcolumns}`, 'uagb-post__items', `${equalHeightClass}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_function__WEBPACK_IMPORTED_MODULE_1__["InnerBlockLayoutContextProvider"], {
    parentName: "uagb/post-grid",
    parentClassName: "uagb-block-grid"
  }, displayPosts.map((post = {}, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-post__inner-wrap"
  }, Object(_function__WEBPACK_IMPORTED_MODULE_1__["renderPostLayout"])('uagb/post-grid', post, layoutConfig, props.attributes, props.categoriesList)))))), postPagination === true && 'empty' !== paginationMarkup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: paginationMarkup
    },
    className: "uagb-post-pagination-wrap"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Blog));

/***/ })

}]);
//# sourceMappingURL=blog.js.map