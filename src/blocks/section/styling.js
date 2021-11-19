/**
 * Returns Dynamic Generated CSS
 */

import inlineStyles from './inline-styles';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		backgroundType,
		backgroundVideoColor,
		backgroundImageColor,
		backgroundColor,
		innerWidth,
		innerWidthType,
		contentWidth,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		gradientPosition,
		borderRadius,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		align,
		overlayType,
		gradientOverlayColor1,
		gradientOverlayColor2,
		gradientOverlayType,
		gradientOverlayLocation1,
		gradientOverlayLocation2,
		gradientOverlayAngle,
		gradientOverlayPosition,
		mobileMarginType,
		tabletMarginType,
		mobilePaddingType,
		tabletPaddingType,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		gradientValue,
		borderStyle,
		borderWidth,
		borderColor,
		borderHoverColor,
		backgroundVideoOpacity
	} = props.attributes;

	let inner_width = '100%';

	if ( typeof contentWidth !== 'undefined' ) {
		if ( 'boxed' !== contentWidth ) {
			if ( typeof innerWidth !== 'undefined' ) {
				inner_width = generateCSSUnit( innerWidth, innerWidthType );
			}
		}
	}

	let tabletSelectors = {};
	let mobileSelectors = {};
	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}
	let videoOpacity = 0.5;
	if ( typeof backgroundVideoOpacity !== 'undefined' ) {
		videoOpacity = ( 1 < backgroundVideoOpacity ) ? ( ( 100 - backgroundVideoOpacity ) / 100 ) : ( ( 1 - backgroundVideoOpacity ) ); 
	}
	const selectors = {
		'.uagb-section__wrap': inlineStyles( props ),
		' .uagb-section__video-wrap': {
			'opacity' : videoOpacity
		},
		' .uagb-section__inner-wrap': {
			'max-width': inner_width,
		},
		'.wp-block-uagb-section': {
			'box-shadow':
				generateCSSUnit( boxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
		},
		' > .uagb-section__overlay:hover': {
			'border-color': borderHoverColor,
		},
	};

	selectors[ ' > .uagb-section__overlay' ] = {};

	if ( 'video' === backgroundType ) {
		selectors[ ' > .uagb-section__overlay' ] = {
			'opacity' : 1,
			'background-color': backgroundVideoColor,
		};
	} else if ( 'image' === backgroundType ) {
		if ( 'color' === overlayType ) {
			selectors[ ' > .uagb-section__overlay' ] = {
				'background-color': backgroundImageColor,
			};
		} else {
			selectors[ ' > .uagb-section__overlay' ][ 'background-color' ] =
				'transparent';
			
			if ( 'linear' === gradientOverlayType ) {
				selectors[ ' > .uagb-section__overlay' ][
					'background-image'
				] = `linear-gradient(${ gradientOverlayAngle }deg, ${ gradientOverlayColor1 } ${ gradientOverlayLocation1 }%, ${ gradientOverlayColor2 } ${ gradientOverlayLocation2 }%)`;
			} else {
				selectors[ ' > .uagb-section__overlay' ][
					'background-image'
				] = `radial-gradient( at ${ gradientOverlayPosition }, ${ gradientOverlayColor1 } ${ gradientOverlayLocation1 }%, ${ gradientOverlayColor2 } ${ gradientOverlayLocation2 }%)`;
			}
		}
	} else if ( 'color' === backgroundType ) {
		selectors[ ' > .uagb-section__overlay' ] = {
			'background-color': backgroundColor,
		};
	} else if ( 'gradient' === backgroundType ) {
		selectors[ ' > .uagb-section__overlay' ][ 'background-color' ] =
			'transparent';
			
		if ( gradientValue ) {
			selectors[ ' > .uagb-section__overlay' ][
				'background-image'
			] = gradientValue;
		} else if ( 'linear' === gradientType ) {
			selectors[ ' > .uagb-section__overlay' ][
				'background-image'
			] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
		} else {
			selectors[ ' > .uagb-section__overlay' ][
				'background-image'
			] = `radial-gradient( at ${ gradientPosition }, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
		}
	}

	selectors[ ' > .uagb-section__overlay' ][
		'border-radius'
	] = generateCSSUnit( borderRadius, 'px' );

	if ( borderStyle !== 'none' ) {
		selectors[ ' > .uagb-section__overlay' ][
			'border-style'
		] = borderStyle;
		selectors[ ' > .uagb-section__overlay' ][
			'border-width'
		] = generateCSSUnit( borderWidth, 'px' );
		selectors[ ' > .uagb-section__overlay' ][
			'border-color'
		] = borderColor;
	}
	tabletSelectors = {
		'.uagb-section__wrap': {
			'padding-top': generateCSSUnit(
				topPaddingTablet,
				tabletPaddingType
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingTablet,
				tabletPaddingType
			),
			'padding-left': generateCSSUnit(
				leftPaddingTablet,
				tabletPaddingType
			),
			'padding-right': generateCSSUnit(
				rightPaddingTablet,
				tabletPaddingType
			),
		},
	};

	mobileSelectors = {
		'.uagb-section__wrap': {
			'padding-top': generateCSSUnit(
				topPaddingMobile,
				mobilePaddingType
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingMobile,
				mobilePaddingType
			),
			'padding-left': generateCSSUnit(
				leftPaddingMobile,
				mobilePaddingType
			),
			'padding-right': generateCSSUnit(
				rightPaddingMobile,
				mobilePaddingType
			),
		},
	};
	tabletSelectors[ '.uagb-section__wrap' ][ 'margin-top' ] = generateCSSUnit(
		topMarginTablet,
		tabletMarginType
	);
	tabletSelectors[ '.uagb-section__wrap' ][
		'margin-bottom'
	] = generateCSSUnit( bottomMarginTablet, tabletMarginType );
	mobileSelectors[ '.uagb-section__wrap' ][ 'margin-top' ] = generateCSSUnit(
		topMarginMobile,
		mobileMarginType
	);
	mobileSelectors[ '.uagb-section__wrap' ][
		'margin-bottom'
	] = generateCSSUnit( bottomMarginMobile, mobileMarginType );

	if ( 'right' === align && 'boxed' === contentWidth ) {
		mobileSelectors[ '.uagb-section__wrap' ][
			'margin-right'
		] = generateCSSUnit( rightMarginMobile, mobileMarginType );
		tabletSelectors[ '.uagb-section__wrap' ][
			'margin-right'
		] = generateCSSUnit( rightMarginTablet, tabletMarginType );
	} else if ( 'left' === align && 'boxed' === contentWidth ) {
		mobileSelectors[ '.uagb-section__wrap' ][
			'margin-left'
		] = generateCSSUnit( leftMarginMobile, mobileMarginType );
		tabletSelectors[ '.uagb-section__wrap' ][
			'margin-left'
		] = generateCSSUnit( leftMarginTablet, tabletMarginType );
	}
	if ( 'full_width' === contentWidth ) {
		tabletSelectors[ '.uagb-section__wrap' ][
			'margin-left'
		] = generateCSSUnit( leftMarginTablet, tabletMarginType );
		tabletSelectors[ '.uagb-section__wrap' ][
			'margin-right'
		] = generateCSSUnit( rightMarginTablet, tabletMarginType );
		mobileSelectors[ '.uagb-section__wrap' ][
			'margin-left'
		] = generateCSSUnit( leftMarginMobile, mobileMarginType );
		mobileSelectors[ '.uagb-section__wrap' ][
			'margin-right'
		] = generateCSSUnit( rightMarginMobile, mobileMarginType );
	}
	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

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

export default styling;
