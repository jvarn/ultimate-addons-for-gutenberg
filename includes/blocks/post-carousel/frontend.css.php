<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_post_gfont( $attr );

$selectors = UAGB_Block_Helper::get_post_selectors( $attr );

$m_selectors = UAGB_Block_Helper::get_post_mobile_selectors( $attr );

$t_selectors = UAGB_Block_Helper::get_post_tablet_selectors( $attr );

$arrow_size                 = UAGB_Helper::get_css_value( $attr['arrowSize'], 'px' );
$selectors[' .slick-arrow'] = array(
	'border-color' => $attr['arrowColor'],
);

$selectors[' .slick-arrow span'] = array(
	'color'     => $attr['arrowColor'],
	'font-size' => $arrow_size,
	'width'     => $arrow_size,
	'height'    => $arrow_size,
);

$selectors[' .slick-arrow svg'] = array(
	'fill'   => $attr['arrowColor'],
	'width'  => $arrow_size,
	'height' => $arrow_size,
);

$selectors[' .slick-arrow'] = array(
	'border-color'  => $attr['arrowColor'],
	'border-width'  => UAGB_Helper::get_css_value( $attr['arrowBorderSize'], 'px' ),
	'border-radius' => UAGB_Helper::get_css_value( $attr['arrowBorderRadius'], 'px' ),
);

$selectors['.uagb-post-grid ul.slick-dots li.slick-active button:before'] = array(
	'color' => $attr['arrowColor'],
);

$selectors['.uagb-slick-carousel ul.slick-dots li button:before'] = array(
	'color' => $attr['arrowColor'],
);

if ( isset( $attr['arrowDots'] ) && 'dots' === $attr['arrowDots'] ) {

	$selectors['.uagb-slick-carousel'] = array(
		'padding' => '0 0 35px 0',
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

if ( ! $attr['inheritFromTheme'] ) {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-post__text .uagb-post__title', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-post__text .uagb-post__title a', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text .uagb-post-grid-byline', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text .uagb-post-grid-byline .uagb-post__author', $combined_selectors );

	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text .uagb-post-grid-byline .uagb-post__author a', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'excerpt', ' .uagb-post__text .uagb-post__excerpt', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-post__text .uagb-post__cta', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-post__text .uagb-post__cta a', $combined_selectors );
}

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
