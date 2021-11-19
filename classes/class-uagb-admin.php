<?php
/**
 * UAGB Admin.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Admin' ) ) {

	/**
	 * Class UAGB_Admin.
	 */
	final class UAGB_Admin {

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

			if ( ! is_admin() ) {
				return;
			}

			add_action( 'admin_notices', array( $this, 'register_notices' ) );

			add_filter( 'wp_kses_allowed_html', array( $this, 'add_data_attributes' ), 10, 2 );

			add_action( 'admin_enqueue_scripts', array( $this, 'notice_styles_scripts' ) );

			add_filter( 'rank_math/researches/toc_plugins', array( $this, 'toc_plugin' ) );

			// Activation hook.
			add_action( 'admin_init', array( $this, 'activation_redirect' ) );

			add_action( 'admin_post_uag_rollback', array( $this, 'post_uagb_rollback' ) );

		}
		/**
		 * UAG version rollback.
		 *
		 * Rollback to previous UAG version.
		 *
		 * Fired by `admin_post_uag_rollback` action.
		 *
		 * @since 1.23.0
		 * @access public
		 */
		public function post_uagb_rollback() {

			if ( ! current_user_can( 'install_plugins' ) ) {
				wp_die(
					esc_html__( 'You do not have permission to access this page.', 'ultimate-addons-for-gutenberg' ),
					esc_html__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
					array(
						'response' => 200,
					)
				);
			}

			check_admin_referer( 'uag_rollback' );

			$rollback_versions = UAGB_Admin_Helper::get_instance()->get_rollback_versions();
			$update_version    = sanitize_text_field( $_GET['version'] );

			if ( empty( $update_version ) || ! in_array( $update_version, $rollback_versions ) ) { //phpcs:ignore WordPress.PHP.StrictInArray.MissingTrueStrict
				wp_die( esc_html__( 'Error occurred, The version selected is invalid. Try selecting different version.', 'ultimate-addons-for-gutenberg' ) );
			}

			$plugin_slug = basename( UAGB_FILE, '.php' );

			$rollback = new UAGB_Rollback(
				array(
					'version'     => $update_version,
					'plugin_name' => UAGB_BASE,
					'plugin_slug' => $plugin_slug,
					'package_url' => sprintf( 'https://downloads.wordpress.org/plugin/%s.%s.zip', $plugin_slug, $update_version ),
				)
			);

			$rollback->run();

			wp_die(
				'',
				esc_html__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
				array(
					'response' => 200,
				)
			);
		}
		/**
		 * Activation Reset
		 */
		public function activation_redirect() {

			$do_redirect = apply_filters( 'uagb_enable_redirect_activation', get_option( '__uagb_do_redirect' ) );

			if ( $do_redirect ) {

				update_option( '__uagb_do_redirect', false );

				if ( ! is_multisite() ) {
					wp_safe_redirect( esc_url( admin_url( 'options-general.php?page=' . UAGB_SLUG ) ) );
					exit();
				}
			}
		}

		/**
		 * Filters and Returns a list of allowed tags and attributes for a given context.
		 *
		 * @param Array  $allowedposttags Array of allowed tags.
		 * @param String $context Context type (explicit).
		 * @since 1.8.0
		 * @return Array
		 */
		public function add_data_attributes( $allowedposttags, $context ) {
			$allowedposttags['a']['data-repeat-notice-after'] = true;

			return $allowedposttags;
		}

		/**
		 * Ask Plugin Rating
		 *
		 * @since 1.8.0
		 */
		public function register_notices() {

			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			$image_path = UAGB_URL . 'admin/assets/images/uagb_notice.svg';

			Astra_Notices::add_notice(
				array(
					'id'                         => 'uagb-admin-rating',
					'type'                       => '',
					'message'                    => sprintf(
						'<div class="notice-image">
							<img src="%1$s" class="custom-logo" alt="Ultimate Addons for Gutenberg" itemprop="logo"></div>
							<div class="notice-content">
								<div class="notice-heading">
									%2$s
								</div>
								%3$s<br />
								<div class="uagb-review-notice-container">
									<a href="%4$s" class="astra-notice-close uagb-review-notice button-primary" target="_blank">
									%5$s
									</a>
								<span class="dashicons dashicons-calendar"></span>
									<a href="#" data-repeat-notice-after="%6$s" class="astra-notice-close uagb-review-notice">
									%7$s
									</a>
								<span class="dashicons dashicons-smiley"></span>
									<a href="#" class="astra-notice-close uagb-review-notice">
									%8$s
									</a>
								</div>
							</div>',
						$image_path,
						__( 'Wow! The Ultimate Addons for Gutenberg has already powered over 5 pages on your website!', 'ultimate-addons-for-gutenberg' ),
						__( 'Would you please mind sharing your views and give it a 5 star rating on the WordPress repository?', 'ultimate-addons-for-gutenberg' ),
						'https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg/reviews/?filter=5#new-post',
						__( 'Ok, you deserve it', 'ultimate-addons-for-gutenberg' ),
						MONTH_IN_SECONDS,
						__( 'Nope, maybe later', 'ultimate-addons-for-gutenberg' ),
						__( 'I already did', 'ultimate-addons-for-gutenberg' )
					),
					'repeat-notice-after'        => MONTH_IN_SECONDS,
					'display-notice-after'       => WEEK_IN_SECONDS,
					'priority'                   => 20,
					'display-with-other-notices' => false,
					'show_if'                    => UAGB_Admin_Helper::show_rating_notice(),
				)
			);

			if ( class_exists( 'Classic_Editor' ) ) {
				$editor_option = get_option( 'classic-editor-replace' );
				if ( isset( $editor_option ) && 'block' !== $editor_option ) {
					Astra_Notices::add_notice(
						array(
							'id'                         => 'uagb-classic-editor',
							'type'                       => 'warning',
							'message'                    => sprintf(
								/* translators: %s: html tags */
								__( 'Ultimate Addons for Gutenberg requires&nbsp;%3$sBlock Editor%4$s. You can change your editor settings to Block Editor from&nbsp;%1$shere%2$s. Plugin is currently NOT RUNNING.', 'ultimate-addons-for-gutenberg' ),
								'<a href="' . admin_url( 'options-writing.php' ) . '">',
								'</a>',
								'<strong>',
								'</strong>'
							),
							'priority'                   => 20,
							'display-with-other-notices' => true,
						)
					);
				}
			}
		}

		/**
		 * Enqueue the needed CSS/JS for the builder's admin settings page.
		 *
		 * @since 1.8.0
		 */
		public function notice_styles_scripts() {
			// Styles.
			wp_enqueue_style( 'uagb-notice-settings', UAGB_URL . 'admin/assets/admin-notice.css', array(), UAGB_VER );
		}


		/**
		 * Rank Math SEO filter to add kb-elementor to the TOC list.
		 *
		 * @param array $plugins TOC plugins.
		 */
		public function toc_plugin( $plugins ) {
			$plugins['ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php'] = 'Ultimate Addons for Gutenberg';
			return $plugins;
		}


	}

	UAGB_Admin::get_instance();
}
