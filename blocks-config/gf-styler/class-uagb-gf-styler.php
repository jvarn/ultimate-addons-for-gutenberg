<?php
/**
 * UAGB - Gravity Form Styler.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_GF_Styler' ) ) {

	/**
	 * Class UAGB_GF_Styler.
	 */
	class UAGB_GF_Styler {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {

			// Activation hook.
			add_action( 'init', array( $this, 'register_blocks' ) );
		}

		/**
		 * Registers the `core/latest-posts` block on server.
		 *
		 * @since 0.0.1
		 */
		public function register_blocks() {

			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			register_block_type(
				'uagb/gf-styler',
				array(
					'attributes'      => array(
						'block_id'                      => array(
							'type' => 'string',
						),
						'align'                         => array(
							'type'    => 'string',
							'default' => 'left',
						),
						'className'                     => array(
							'type' => 'string',
						),
						'formId'                        => array(
							'type'    => 'string',
							'default' => '0',
						),
						'isHtml'                        => array(
							'type' => 'boolean',
						),
						'formJson'                      => array(
							'type'    => 'object',
							'default' => null,
						),
						'enableAjax'                    => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'enableTabSupport'              => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'formTabIndex'                  => array(
							'type'    => 'number',
							'default' => 0,
						),
						'titleDescStyle'                => array(
							'type'    => 'string',
							'default' => 'yes',
						),
						'titleDescAlignment'            => array(
							'type'    => 'string',
							'default' => 'left',
						),
						'fieldStyle'                    => array(
							'type'    => 'string',
							'default' => 'box',
						),
						'fieldVrPadding'                => array(
							'type'    => 'number',
							'default' => 10,
						),
						'fieldHrPadding'                => array(
							'type'    => 'number',
							'default' => 10,
						),
						'fieldBgColor'                  => array(
							'type'    => 'string',
							'default' => '#fafafa',
						),
						'fieldLabelColor'               => array(
							'type'    => 'string',
							'default' => '#333',
						),
						'fieldInputColor'               => array(
							'type'    => 'string',
							'default' => '#333',
						),
						'fieldBorderStyle'              => array(
							'type'    => 'string',
							'default' => 'solid',
						),
						'fieldBorderWidth'              => array(
							'type'    => 'number',
							'default' => 1,
						),
						'fieldBorderRadius'             => array(
							'type'    => 'number',
							'default' => 0,
						),
						'fieldBorderColor'              => array(
							'type'    => 'string',
							'default' => '#eeeeee',
						),
						'fieldBorderFocusColor'         => array(
							'type'    => 'string',
							'default' => '',
						),
						'buttonAlignment'               => array(
							'type'    => 'string',
							'default' => 'left',
						),
						'buttonVrPadding'               => array(
							'type'    => 'number',
							'default' => 10,
						),
						'buttonHrPadding'               => array(
							'type'    => 'number',
							'default' => 25,
						),
						'buttonBorderStyle'             => array(
							'type'    => 'string',
							'default' => 'solid',
						),
						'buttonBorderWidth'             => array(
							'type'    => 'number',
							'default' => 1,
						),
						'buttonBorderRadius'            => array(
							'type'    => 'number',
							'default' => 0,
						),
						'buttonBorderColor'             => array(
							'type'    => 'string',
							'default' => '#333',
						),
						'buttonTextColor'               => array(
							'type'    => 'string',
							'default' => '#333',
						),
						'buttonBgColor'                 => array(
							'type'    => 'string',
							'default' => 'transparent',
						),
						'buttonBorderHoverColor'        => array(
							'type'    => 'string',
							'default' => '#333',
						),
						'buttonTextHoverColor'          => array(
							'type'    => 'string',
							'default' => '#333',
						),
						'buttonBgHoverColor'            => array(
							'type'    => 'string',
							'default' => 'transparent',
						),
						'fieldSpacing'                  => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldLabelSpacing'             => array(
							'type'    => 'number',
							'default' => '',
						),
						'enableLabel'                   => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'labelFontSize'                 => array(
							'type'    => 'number',
							'default' => '',
						),
						'labelFontSizeType'             => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'labelFontSizeTablet'           => array(
							'type' => 'number',
						),
						'labelFontSizeMobile'           => array(
							'type' => 'number',
						),
						'labelFontFamily'               => array(
							'type'    => 'string',
							'default' => 'Default',
						),
						'labelFontWeight'               => array(
							'type' => 'string',
						),
						'labelLineHeightType'           => array(
							'type'    => 'string',
							'default' => 'em',
						),
						'labelLineHeight'               => array(
							'type' => 'number',
						),
						'labelLineHeightTablet'         => array(
							'type' => 'number',
						),
						'labelLineHeightMobile'         => array(
							'type' => 'number',
						),
						'labelLoadGoogleFonts'          => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'inputFontSize'                 => array(
							'type'    => 'number',
							'default' => '',
						),
						'inputFontSizeType'             => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'inputFontSizeTablet'           => array(
							'type' => 'number',
						),
						'inputFontSizeMobile'           => array(
							'type' => 'number',
						),
						'inputFontFamily'               => array(
							'type'    => 'string',
							'default' => 'Default',
						),
						'inputFontWeight'               => array(
							'type' => 'string',
						),
						'inputLineHeightType'           => array(
							'type'    => 'string',
							'default' => 'em',
						),
						'inputLineHeight'               => array(
							'type' => 'number',
						),
						'inputLineHeightTablet'         => array(
							'type' => 'number',
						),
						'inputLineHeightMobile'         => array(
							'type' => 'number',
						),
						'inputLoadGoogleFonts'          => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'textAreaHeight'                => array(
							'type' => 'number',
						),
						'buttonFontSize'                => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonFontSizeType'            => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'buttonFontSizeTablet'          => array(
							'type' => 'number',
						),
						'buttonFontSizeMobile'          => array(
							'type' => 'number',
						),
						'buttonFontFamily'              => array(
							'type'    => 'string',
							'default' => 'Default',
						),
						'buttonFontWeight'              => array(
							'type' => 'string',
						),
						'buttonLineHeightType'          => array(
							'type'    => 'string',
							'default' => 'em',
						),
						'buttonLineHeight'              => array(
							'type' => 'number',
						),
						'buttonLineHeightTablet'        => array(
							'type' => 'number',
						),
						'buttonLineHeightMobile'        => array(
							'type' => 'number',
						),
						'buttonLoadGoogleFonts'         => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'enableOveride'                 => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'radioCheckSize'                => array(
							'type'    => 'number',
							'default' => '20',
						),
						'radioCheckBgColor'             => array(
							'type'    => 'string',
							'default' => '#fafafa',
						),
						'radioCheckSelectColor'         => array(
							'type'    => 'string',
							'default' => '',
						),
						'radioCheckLableColor'          => array(
							'type'    => 'string',
							'default' => '',
						),
						'radioCheckBorderColor'         => array(
							'type'    => 'string',
							'default' => '#cbcbcb',
						),
						'radioCheckBorderWidth'         => array(
							'type'    => 'number',
							'default' => '1',
						),
						'radioCheckBorderRadius'        => array(
							'type'    => 'number',
							'default' => '',
						),
						'radioCheckFontSize'            => array(
							'type'    => 'number',
							'default' => '',
						),
						'radioCheckFontSizeType'        => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'radioCheckFontSizeTablet'      => array(
							'type' => 'number',
						),
						'radioCheckFontSizeMobile'      => array(
							'type' => 'number',
						),
						'radioCheckFontFamily'          => array(
							'type'    => 'string',
							'default' => 'Default',
						),
						'radioCheckFontWeight'          => array(
							'type' => 'string',
						),
						'radioCheckLineHeightType'      => array(
							'type'    => 'string',
							'default' => 'em',
						),
						'radioCheckLineHeight'          => array(
							'type' => 'number',
						),
						'radioCheckLineHeightTablet'    => array(
							'type' => 'number',
						),
						'radioCheckLineHeightMobile'    => array(
							'type' => 'number',
						),
						'radioCheckLoadGoogleFonts'     => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'validationMsgColor'            => array(
							'type'    => 'string',
							'default' => '#ff0000',
						),
						'validationMsgBgColor'          => array(
							'type'    => 'string',
							'default' => '',
						),
						'advancedValidationSettings'    => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'highlightBorderColor'          => array(
							'type'    => 'string',
							'default' => '#ff0000',
						),
						'validationMsgFontSize'         => array(
							'type'    => 'number',
							'default' => '',
						),
						'validationMsgFontSizeType'     => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'validationMsgFontSizeTablet'   => array(
							'type' => 'number',
						),
						'validationMsgFontSizeMobile'   => array(
							'type' => 'number',
						),
						'validationMsgFontFamily'       => array(
							'type'    => 'string',
							'default' => 'Default',
						),
						'validationMsgFontWeight'       => array(
							'type' => 'string',
						),
						'validationMsgLineHeightType'   => array(
							'type'    => 'string',
							'default' => 'em',
						),
						'validationMsgLineHeight'       => array(
							'type' => 'number',
						),
						'validationMsgLineHeightTablet' => array(
							'type' => 'number',
						),
						'validationMsgLineHeightMobile' => array(
							'type' => 'number',
						),
						'validationMsgLoadGoogleFonts'  => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'successMsgColor'               => array(
							'type'    => 'string',
							'default' => '',
						),
						'errorMsgColor'                 => array(
							'type'    => 'string',
							'default' => '',
						),
						'errorMsgBgColor'               => array(
							'type'    => 'string',
							'default' => '',
						),
						'errorMsgBorderColor'           => array(
							'type'    => 'string',
							'default' => '',
						),
						'msgBorderSize'                 => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgBorderRadius'               => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgVrPadding'                  => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgHrPadding'                  => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgFontSize'                   => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgFontSizeType'               => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'msgFontSizeTablet'             => array(
							'type' => 'number',
						),
						'msgFontSizeMobile'             => array(
							'type' => 'number',
						),
						'msgFontFamily'                 => array(
							'type'    => 'string',
							'default' => 'Default',
						),
						'msgFontWeight'                 => array(
							'type' => 'string',
						),
						'msgLineHeightType'             => array(
							'type'    => 'string',
							'default' => 'em',
						),
						'msgLineHeight'                 => array(
							'type' => 'number',
						),
						'msgLineHeightTablet'           => array(
							'type' => 'number',
						),
						'msgLineHeightMobile'           => array(
							'type' => 'number',
						),
						'msgLoadGoogleFonts'            => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'radioCheckBorderRadiusType'    => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'msgBorderRadiusType'           => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'fieldBorderRadiusType'         => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'buttonBorderRadiusType'        => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'successMsgFontSize'            => array(
							'type'    => 'number',
							'default' => '',
						),
						'successMsgFontSizeType'        => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'successMsgFontSizeTablet'      => array(
							'type' => 'number',
						),
						'successMsgFontSizeMobile'      => array(
							'type' => 'number',
						),
						'successMsgFontFamily'          => array(
							'type'    => 'string',
							'default' => 'Default',
						),
						'successMsgFontWeight'          => array(
							'type' => 'string',
						),
						'successMsgLineHeightType'      => array(
							'type'    => 'string',
							'default' => 'em',
						),
						'successMsgLineHeight'          => array(
							'type' => 'number',
						),
						'successMsgLineHeightTablet'    => array(
							'type' => 'number',
						),
						'successMsgLineHeightMobile'    => array(
							'type' => 'number',
						),
						'successMsgLoadGoogleFonts'     => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'msgleftPadding'                => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgrightPadding'               => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgtopPadding'                 => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgbottomPadding'              => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgleftMobilePadding'          => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgrightMobilePadding'         => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgtopMobilePadding'           => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgbottomMobilePadding'        => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgleftTabletPadding'          => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgrightTabletPadding'         => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgtopTabletPadding'           => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgbottomTabletPadding'        => array(
							'type'    => 'number',
							'default' => '',
						),
						'msgtabletPaddingUnit'          => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'msgmobilePaddingUnit'          => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'msgpaddingUnit'                => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'msgpaddingLink'                => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'buttonleftPadding'             => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonrightPadding'            => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttontopPadding'              => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonbottomPadding'           => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonleftMobilePadding'       => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonrightMobilePadding'      => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttontopMobilePadding'        => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonbottomMobilePadding'     => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonleftTabletPadding'       => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonrightTabletPadding'      => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttontopTabletPadding'        => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonbottomTabletPadding'     => array(
							'type'    => 'number',
							'default' => '',
						),
						'buttonpaddingLink'             => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'buttontabletPaddingUnit'       => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'buttonmobilePaddingUnit'       => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'buttonpaddingUnit'             => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'fieldleftPadding'              => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldrightPadding'             => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldtopPadding'               => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldbottomPadding'            => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldleftMobilePadding'        => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldrightMobilePadding'       => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldtopMobilePadding'         => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldbottomMobilePadding'      => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldleftTabletPadding'        => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldrightTabletPadding'       => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldtopTabletPadding'         => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldbottomTabletPadding'      => array(
							'type'    => 'number',
							'default' => '',
						),
						'fieldtabletPaddingUnit'        => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'fieldmobilePaddingUnit'        => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'fieldpaddingUnit'              => array(
							'type'    => 'string',
							'default' => 'px',
						),
						'fieldpaddingLink'              => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'labelTransform'                => array(
							'type' => 'string',
						),
						'labelDecoration'               => array(
							'type' => 'string',
						),
						'labelFontStyle'                => array(
							'type' => 'string',
						),
						'inputTransform'                => array(
							'type' => 'string',
						),
						'inputDecoration'               => array(
							'type' => 'string',
						),
						'inputFontStyle'                => array(
							'type' => 'string',
						),
						'buttonTransform'               => array(
							'type' => 'string',
						),
						'buttonDecoration'              => array(
							'type' => 'string',
						),
						'buttonFontStyle'               => array(
							'type' => 'string',
						),
						'radioCheckTransform'           => array(
							'type' => 'string',
						),
						'radioCheckDecoration'          => array(
							'type' => 'string',
						),
						'radioCheckFontStyle'           => array(
							'type' => 'string',
						),
						'validationMsgTransform'        => array(
							'type' => 'string',
						),
						'validationMsgDecoration'       => array(
							'type' => 'string',
						),
						'validationMsgFontStyle'        => array(
							'type' => 'string',
						),
						'msgTransform'                  => array(
							'type' => 'string',
						),
						'msgDecoration'                 => array(
							'type' => 'string',
						),
						'msgFontStyle'                  => array(
							'type' => 'string',
						),
						'successMsgTransform'           => array(
							'type' => 'string',
						),
						'successMsgDecoration'          => array(
							'type' => 'string',
						),
						'successMsgFontStyle'           => array(
							'type' => 'string',
						),
					),
					'render_callback' => array( $this, 'render_html' ),
				)
			);
		}

		/**
		 * Render Gravity Form HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.10.0
		 */
		public function render_html( $attributes ) {

			$form = $attributes['formId'];

			$classes = array(
				'uagb-gf-styler__align-' . $attributes['align'],
				'uagb-gf-styler__field-style-' . $attributes['fieldStyle'],
				'uagb-gf-styler__gform-heading-' . $attributes['titleDescStyle'],
				'uagb-gf-styler__btn-align-' . $attributes['buttonAlignment'],
			);

			if ( $attributes['enableOveride'] ) {
				$classes[] = 'uagb-gf-styler__check-style-enabled';
			}

			if ( $attributes['enableLabel'] ) {
				$classes[] = 'uagb-gf-styler__hide-label';
			}

			if ( $attributes['advancedValidationSettings'] ) {
				$classes[] = 'uagb-gf-styler__error-yes';
			}

			$desktop_class = '';
			$tab_class     = '';
			$mob_class     = '';

			if ( array_key_exists( 'UAGDisplayConditions', $attributes ) && 'responsiveVisibility' === $attributes['UAGDisplayConditions'] ) {

				$desktop_class = ( isset( $attributes['UAGHideDesktop'] ) ) ? 'uag-hide-desktop' : '';

				$tab_class = ( isset( $attributes['UAGHideTab'] ) ) ? 'uag-hide-tab' : '';

				$mob_class = ( isset( $attributes['UAGHideMob'] ) ) ? 'uag-hide-mob' : '';
			}

			$main_classes = array(
				'wp-block-uagb-gf-styler',
				'uagb-gf-styler__outer-wrap',
				'uagb-block-' . $attributes['block_id'],
				$desktop_class,
				$tab_class,
				$mob_class,
			);

			if ( isset( $attributes['className'] ) ) {
				$main_classes[] = $attributes['className'];
			}

			ob_start();

			if ( $form && 0 !== $form && -1 !== $form ) {

				$shortcode_attrs = array(
					'id'       => $form,
					'ajax'     => ( $attributes['enableAjax'] ) ? 'true' : 'false',
					'tabindex' => ( $attributes['enableTabSupport'] ) ? $attributes['formTabIndex'] : '',
				);

				if ( isset( $attributes['titleDescStyle'] ) && 'none' === $attributes['titleDescStyle'] ) {
					$shortcode_attrs['title']       = false;
					$shortcode_attrs['description'] = false;
				}

				$attrs = array();

				foreach ( $shortcode_attrs as $key => $attr ) {
					$attrs[] = $key . '=' . $attr;
				}
				?>
				<div class = "<?php echo esc_attr( implode( ' ', $main_classes ) ); ?>">
					<div class = "<?php echo esc_attr( implode( ' ', $classes ) ); ?>">
					<?php echo do_shortcode( '[gravityforms ' . esc_attr( implode( ' ', $attrs ) ) . '"]' ); ?>
					</div>
				</div>
				<?php
			}
			return ob_get_clean();
		}
	}

	/**
	 *  Prepare if class 'UAGB_GF_Styler' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_GF_Styler::get_instance();
}
