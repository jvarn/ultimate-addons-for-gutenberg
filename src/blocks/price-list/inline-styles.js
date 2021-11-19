/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function RestMenuStyle( props ) {
	const {
		headingAlign,
		priceColor,
		descColor,
		titleColor,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleFontFamily,
		titleFontWeight,
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
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descSpace,
		titleSpace,
		imageWidth,
		rowGap,
		columnGap,
		columns,
		tcolumns,
		mcolumns,
		seperatorStyle,
		seperatorWidth,
		seperatorThickness,
		seperatorColor,

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
		titleFontStyle,
		titleTransform,
		titleDecoration,
		descFontStyle,
		descTransform,
		descDecoration,
		priceFontStyle,
		priceTransform,
		priceDecoration,
	} = props.attributes;

	let tabletSelectors = {};
	let mobileSelectors = {};

	let align = headingAlign;
	if ( 'left' === align ) {
		align = 'flex-start';
	} else if ( 'right' === align ) {
		align = 'flex-end';
	}

	const selectors = {
		" [data-type='uagb/restaurant-menu-child'] .wp-block-uagb-restaurant-menu-child": {
			'padding-left': generateCSSUnit( columnGap / 2, columnGapType ),
			'padding-right': generateCSSUnit( columnGap / 2, columnGapType ),
			'margin-bottom': generateCSSUnit( rowGap, rowGapType ),
		},
		" [data-type='uagb/restaurant-menu-child'] .uagb-rm__image-content": {
			'padding-left': generateCSSUnit( imgPaddingLeft, imgPaddingUnit ),
			'padding-right': generateCSSUnit( imgPaddingRight, imgPaddingUnit ),
			'padding-top': generateCSSUnit( imgPaddingTop, imgPaddingUnit ),
			'padding-bottom': generateCSSUnit(
				imgPaddingBottom,
				imgPaddingUnit
			),
		},
		// Image
		' .uagb-rm__image img': {
			'width': generateCSSUnit( imageWidth, imageWidthType ),
			'max-width': generateCSSUnit( imageWidth, imageWidthType ),
		},
		' .uagb-rm__separator-parent': {
			'justify-content': align,
		},
		' .uagb-rm__content': {
			'text-align': headingAlign,
			'padding-left': generateCSSUnit(
				contentPaddingLeft,
				contentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentPaddingRight,
				contentPaddingUnit
			),
			'padding-top': generateCSSUnit(
				contentPaddingTop,
				contentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentPaddingBottom,
				contentPaddingUnit
			),
		},
		// Prefix Style
		' .uagb-rm__title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'color': titleColor,
			'margin-bottom': generateCSSUnit( titleSpace, titleSpaceType ),
			'font-family': titleFontFamily,
			'font-style': titleFontStyle,
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
		},
		// Title Style
		' .uagb-rm__price': {
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'font-family': priceFontFamily,
			'text-transform': priceTransform,
			'text-decoration': priceDecoration,
			'font-style': priceFontStyle,
			'font-weight': priceFontWeight,
			'line-height': generateCSSUnit(
				priceLineHeight,
				priceLineHeightType
			),
			'color': priceColor,
		},
		// Description Style
		' .uagb-rm__desc': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'text-transform': descTransform,
			'text-decoration': descDecoration,
			'font-style': descFontStyle,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpace, 'px' ),
		},
	};

	if ( seperatorStyle !== 'none' ) {
		selectors[ ' .uagb-rm__separator' ] = {
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
			'border-top-width': generateCSSUnit( seperatorThickness, 'px' ),
			'width': generateCSSUnit( seperatorWidth, seperatorWidthType ),
		};
	}

	selectors[
		' .uagb-rest_menu__wrap.uagb-rm__desk-column-' +
			columns +
			':nth-child(' +
			columns +
			'n+1)'
	] = {
		'margin-left': 0,
		'clear': 'left',
	};

	tabletSelectors = {
		' .uagb-rm__title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
		},
		' .uagb-rm__desc': {
			'font-size': generateCSSUnit(
				descFontSizeTablet,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightTablet,
				descLineHeightType
			),
		},
		' .uagb-rm__price': {
			'font-size': generateCSSUnit(
				priceFontSizeTablet,
				priceFontSizeType
			),
			'line-height': generateCSSUnit(
				priceLineHeightTablet,
				priceLineHeightType
			),
		},
		" [data-type='uagb/restaurant-menu-child'] .uagb-rm__image-content": {
			'padding-left': generateCSSUnit(
				imgPaddingLeftTablet,
				imgTabletPaddingUnit
			),
			'padding-right': generateCSSUnit(
				imgPaddingRightTablet,
				imgTabletPaddingUnit
			),
			'padding-top': generateCSSUnit(
				imgPaddingTopTablet,
				imgTabletPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				imgPaddingBottomTablet,
				imgTabletPaddingUnit
			),
		},
		' .uagb-rm__content': {
			'padding-left': generateCSSUnit(
				contentPaddingLeftTablet,
				contentTabletPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentPaddingRightTablet,
				contentTabletPaddingUnit
			),
			'padding-top': generateCSSUnit(
				contentPaddingTopTablet,
				contentTabletPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentPaddingBottomTablet,
				contentTabletPaddingUnit
			),
		},
	};

	tabletSelectors[
		' .uagb-rest_menu__wrap.uagb-rm__desk-column-' +
			columns +
			':nth-child(' +
			columns +
			'n+1)'
	] = {
		'margin-left': 'unset',
		'clear': 'unset',
	};

	tabletSelectors[
		' .uagb-rest_menu__wrap.uagb-rm__tablet-column-' +
			tcolumns +
			':nth-child(' +
			tcolumns +
			'n+1)'
	] = {
		'margin-left': 0,
		'clear': 'left',
	};

	mobileSelectors = {
		' .uagb-rm__title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
		},
		' .uagb-rm__desc': {
			'font-size': generateCSSUnit(
				descFontSizeMobile,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightMobile,
				descLineHeightType
			),
		},
		' .uagb-rm__price': {
			'font-size': generateCSSUnit(
				priceFontSizeMobile,
				priceFontSizeType
			),
			'line-height': generateCSSUnit(
				priceLineHeightMobile,
				priceLineHeightType
			),
		},
		" [data-type='uagb/restaurant-menu-child'] .uagb-rm__image-content": {
			'padding-left': generateCSSUnit(
				imgPaddingLeftMobile,
				imgMobilePaddingUnit
			),
			'padding-right': generateCSSUnit(
				imgPaddingRightMobile,
				imgMobilePaddingUnit
			),
			'padding-top': generateCSSUnit(
				imgPaddingTopMobile,
				imgMobilePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				imgPaddingBottomMobile,
				imgMobilePaddingUnit
			),
		},
		' .uagb-rm__content': {
			'padding-left': generateCSSUnit(
				contentPaddingLeftMobile,
				contentMobilePaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentPaddingRightMobile,
				contentMobilePaddingUnit
			),
			'padding-top': generateCSSUnit(
				contentPaddingTopMobile,
				contentMobilePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentPaddingBottomMobile,
				contentMobilePaddingUnit
			),
		},
	};

	mobileSelectors[
		' .uagb-rest_menu__wrap.uagb-rm__desk-column-' +
			columns +
			':nth-child(' +
			columns +
			'n+1)'
	] = {
		'margin-left': 'unset',
		'clear': 'unset',
	};

	mobileSelectors[
		' .uagb-rest_menu__wrap.uagb-rm__mobile-column-' +
			mcolumns +
			':nth-child(' +
			mcolumns +
			'n+1)'
	] = {
		'margin-left': 0,
		'clear': 'left',
	};

	let stylingCss = '';
	const id = `#wpwrap .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default RestMenuStyle;
