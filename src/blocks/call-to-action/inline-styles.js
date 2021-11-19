/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function CtaStyle( props ) {
	const {
		textAlign,
		titleColor,
		descColor,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		descFontSize,
		descFontSizeType,
		descFontSizeMobile,
		descFontSizeTablet,
		descFontFamily,
		descFontWeight,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		titleSpace,
		descSpace,
		ctaPosition,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaFontFamily,
		ctaFontWeight,
		ctaBtnLinkColor,
		ctaBgColor,
		ctaTopPadding,
		ctaRightPadding,
		ctaBottomPadding,
		ctaLeftPadding,
		ctaTopPaddingTablet,
		ctaRightPaddingTablet,
		ctaBottomPaddingTablet,
		ctaLeftPaddingTablet,
		ctaTopPaddingMobile,
		ctaRightPaddingMobile,
		ctaBottomPaddingMobile,
		ctaLeftPaddingMobile,
		ctaPaddingUnit,
		mobileCTAPaddingUnit,
		tabletCTAPaddingUnit,
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderWidth,
		ctaBorderRadius,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBorderhoverColor,
		ctaIconSpace,
		ctaLeftSpace,
		ctaRightSpace,
		contentWidth,
		ctaType,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		ctaTransform,
		ctaDecoration,
		titleFontStyle,
		descFontStyle,
		ctaFontStyle,
	} = props.attributes;

	const selectors = {
		' .uagb-cta__content-wrap': {
			'text-align': textAlign,
		},
		// CTA style

		' .uagb-cta__button-wrapper a.uagb-cta-typeof-text': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'font-family': ctaFontFamily,
			'font-style' : ctaFontStyle,
			'text-decoration': ctaDecoration,
			'text-transform': ctaTransform,
			'font-weight': ctaFontWeight,
			'color': ctaBtnLinkColor,
		},
		' .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-text': {
			'color': ctaLinkHoverColor,
		},

		' .uagb-cta__button-wrapper a.uagb-cta-typeof-button': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'font-family': ctaFontFamily,
			'font-style' : ctaFontStyle,
			'text-decoration': ctaDecoration,
			'text-transform': ctaTransform,
			'font-weight': ctaFontWeight,
			'color': ctaBtnLinkColor,
			'background-color': ctaBgColor,
			'border-style': ctaBorderStyle,
			'border-color': ctaBorderColor,
			'border-radius': generateCSSUnit( ctaBorderRadius, 'px' ),
			'border-width': generateCSSUnit( ctaBorderWidth, 'px' ),
			'padding-top': generateCSSUnit( ctaTopPadding, ctaPaddingUnit ),
			'padding-bottom': generateCSSUnit(
				ctaBottomPadding,
				ctaPaddingUnit
			),
			'padding-left': generateCSSUnit( ctaLeftPadding, ctaPaddingUnit ),
			'padding-right': generateCSSUnit( ctaRightPadding, ctaPaddingUnit ),
		},

		' .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-button': {
			'color': ctaLinkHoverColor,
			'background-color': ctaBgHoverColor,
			'border-color': ctaBorderhoverColor,
		},

		' .uagb-cta__button-wrapper .uagb-cta-with-svg': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		},

		' .uagb-cta__button-wrapper .uagb-cta__block-link svg': {
			'fill': ctaBtnLinkColor,
		},

		' .uagb-cta__button-wrapper:hover .uagb-cta__block-link svg': {
			'fill': ctaLinkHoverColor,
		},

		// Title Style
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-family': titleFontFamily,
			'font-style' : titleFontStyle,
			'text-decoration': titleDecoration,
			'text-transform': titleTransform,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
			'color': titleColor,
			'margin-bottom': generateCSSUnit( titleSpace, 'px' ),
		},

		// Description Style
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'font-style' : descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpace, 'px' ),
		},

		' .uagb-cta__align-button-after': {
			'margin-left': generateCSSUnit( ctaIconSpace, 'px' ),
		},

		' .uagb-cta__align-button-before': {
			'margin-right': generateCSSUnit( ctaIconSpace, 'px' ),
		},
	};

	if ( textAlign === 'left' && ctaPosition === 'right' ) {
		selectors[ ' .uagb-cta__left-right-wrap .uagb-cta__content' ] = {
			'margin-left': generateCSSUnit( ctaLeftSpace, 'px' ),
			'margin-right': '0',
		};
	}

	if ( textAlign === 'right' && ctaPosition === 'right' ) {
		selectors[ ' .uagb-cta__left-right-wrap .uagb-cta__content' ] = {
			'margin-right': generateCSSUnit( ctaRightSpace, 'px' ),
			'margin-left': '0',
		};
	}

	if (
		ctaPosition === 'right' &&
		( ctaType === 'text' || ctaType === 'button' )
	) {
		selectors[
			' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content'
		] = {
			'width': generateCSSUnit( contentWidth, '%' ),
		};
		selectors[
			' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'
		] = {
			'width': generateCSSUnit( 100 - contentWidth, '%' ),
		};
	}

	const tabletSelectors = {
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit(
				descFontSizeTablet,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightTablet,
				descLineHeightType
			),
		},
		' .uagb-cta__button-wrapper a.uagb-cta-typeof-text': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
		},
		' .uagb-cta__button-wrapper a.uagb-cta-typeof-button': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'padding-top': generateCSSUnit(
				ctaTopPaddingTablet,
				tabletCTAPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				ctaBottomPaddingTablet,
				tabletCTAPaddingUnit
			),
			'padding-left': generateCSSUnit(
				ctaLeftPaddingTablet,
				tabletCTAPaddingUnit
			),
			'padding-right': generateCSSUnit(
				ctaRightPaddingTablet,
				tabletCTAPaddingUnit
			),
		},
		' .uagb-cta__button-wrapper .uagb-cta-with-svg': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeTablet,
				ctaFontSizeType
			),
		},
	};

	const mobileSelectors = {
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit(
				descFontSizeMobile,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightMobile,
				descLineHeightType
			),
		},
		' .uagb-cta__button-wrapper a.uagb-cta-typeof-text': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
		},
		' .uagb-cta__button-wrapper a.uagb-cta-typeof-button': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'padding-top': generateCSSUnit(
				ctaTopPaddingMobile,
				mobileCTAPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				ctaBottomPaddingMobile,
				mobileCTAPaddingUnit
			),
			'padding-left': generateCSSUnit(
				ctaLeftPaddingMobile,
				mobileCTAPaddingUnit
			),
			'padding-right': generateCSSUnit(
				ctaRightPaddingMobile,
				mobileCTAPaddingUnit
			),
		},
		' .uagb-cta__button-wrapper .uagb-cta-with-svg': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeMobile,
				ctaFontSizeType
			),
		},
	};

	const id = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let stylingCss = generateCSS( selectors, id );

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

export default CtaStyle;
