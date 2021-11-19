import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';
import React from 'react';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import SpacingControl from '@Components/spacing-control';
import UAGTabsControl from '@Components/tabs';
import UAGImage from '@Components/image';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import {
	PanelBody,
	SelectControl,
	Button,
	TextControl,
	ToggleControl,
	Toolbar,
	Tooltip,
	Icon,
} from '@wordpress/components';

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { className, setAttributes, attributes, deviceType } = props;

	const {
		skinStyle,
		align,
		authorColor,
		descColor,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descFontStyle,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descLoadGoogleFonts,
		authorFontSize,
		authorFontSizeType,
		authorFontSizeTablet,
		authorFontSizeMobile,
		authorFontFamily,
		authorFontWeight,
		authorFontStyle,
		authorLineHeightType,
		authorLineHeight,
		authorLineHeightTablet,
		authorLineHeightMobile,
		authorLoadGoogleFonts,
		descSpace,
		authorSpace,
		stack,
		borderColor,
		borderStyle,
		borderWidth,
		borderGap,
		verticalPadding,
		quoteColor,
		quoteBgColor,
		quoteSize,
		quoteSizeType,
		quoteSizeTablet,
		quoteSizeMobile,
		quotePadding,
		quotePaddingType,
		quotePaddingTablet,
		quotePaddingMobile,
		quoteBorderRadius,
		quoteStyle,
		enableTweet,
		tweetLinkColor,
		tweetBtnColor,
		tweetBtnHoverColor,
		tweetBtnBgColor,
		tweetBtnBgHoverColor,
		tweetBtnFontSize,
		tweetBtnFontSizeType,
		tweetBtnFontSizeTablet,
		tweetBtnFontSizeMobile,
		tweetBtnFontFamily,
		tweetBtnFontWeight,
		tweetBtnFontStyle,
		tweetBtnLineHeightType,
		tweetBtnLineHeight,
		tweetBtnLineHeightTablet,
		tweetBtnLineHeightMobile,
		tweetBtnLoadGoogleFonts,
		tweetIconSpacing,
		tweetIconSpacingUnit,
		iconView,
		iconSkin,
		iconLabel,
		iconShareVia,
		iconTargetUrl,
		customUrl,
		authorImage,
		authorImageWidth,
		authorImageWidthUnit,
		authorImageSize,
		authorImgBorderRadius,
		authorImgPosition,
		quoteTopMargin,
		quoteBottomMargin,
		quoteLeftMargin,
		quoteRightMargin,
		quoteHoverColor,
		quoteBgHoverColor,
		borderHoverColor,
		authorImgBorderRadiusUnit,
		borderWidthUnit,
		quoteBorderRadiusUnit,
		quoteUnit,
		quotemobileUnit,
		quotetabletUnit,
		borderGapUnit,
		descSpaceUnit,
		authorSpaceUnit,
		verticalPaddingUnit,
		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		btnspacingLink,
		spacingLink,
		descTransform,
		authorTransform,
		tweetBtnTransform,
		descDecoration,
		authorDecoration,
		tweetBtnDecoration,
		quoteTopMarginTablet,
		quoteBottomMarginTablet,
		quoteLeftMarginTablet,
		quoteRightMarginTablet,
		quoteTopMarginMobile,
		quoteBottomMarginMobile,
		quoteLeftMarginMobile,
		quoteRightMarginMobile,
	} = attributes;
	let loadDescGoogleFonts;
	let loadAuthorGoogleFonts;
	let loadTweetGoogleFonts;

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescGoogleFonts = (
			<WebfontLoader config={ descconfig }></WebfontLoader>
		);
	}

	if ( authorLoadGoogleFonts === true ) {
		const authorconfig = {
			google: {
				families: [
					authorFontFamily +
						( authorFontWeight ? ':' + authorFontWeight : '' ),
				],
			},
		};

		loadAuthorGoogleFonts = (
			<WebfontLoader config={ authorconfig }></WebfontLoader>
		);
	}

	if ( tweetBtnLoadGoogleFonts === true ) {
		const tweetBtnconfig = {
			google: {
				families: [
					tweetBtnFontFamily +
						( tweetBtnFontWeight ? ':' + tweetBtnFontWeight : '' ),
				],
			},
		};

		loadTweetGoogleFonts = (
			<WebfontLoader config={ tweetBtnconfig }></WebfontLoader>
		);
	}

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { authorImage: null } );
	};

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { authorImage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			return;
		}

		setAttributes( { authorImage: media } );
	};

	const imageSizeOptions = [
		{
			value: 'thumbnail',
			label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'medium',
			label: __( 'Medium', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'full',
			label: __( 'Large', 'ultimate-addons-for-gutenberg' ),
		},
	];

	// Image controls.
	const imageControls = (
		<>
			<UAGImage
				label={ __( 'Author Image', 'ultimate-addons-for-gutenberg' ) }
				onSelectImage={ onSelectImage }
				backgroundImage={ authorImage }
				onRemoveImage={ onRemoveImage }
			/>
			{ authorImage &&
				authorImage.url !== 'null' &&
				authorImage.url !== '' && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Author Image Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: authorImgPosition,
								label: 'authorImgPosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'left',
									icon: (
										<Icon
											icon={ renderSVG(
												'fa fa-align-left'
											) }
										/>
									),
									tooltip: __(
										'Left',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'top',
									icon: (
										<Icon
											icon={ renderSVG(
												'fa fa-align-center'
											) }
										/>
									),
									tooltip: __(
										'Top',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'right',
									icon: (
										<Icon
											icon={ renderSVG(
												'fa fa-align-right'
											) }
										/>
									),
									tooltip: __(
										'Right',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ true }
						/>
						<SelectControl
							label={ __(
								'Author Image Size',
								'ultimate-addons-for-gutenberg'
							) }
							options={ imageSizeOptions }
							value={ authorImageSize }
							onChange={ ( value ) =>
								setAttributes( { authorImageSize: value } )
							}
						/>
						<Range
							label={ __(
								'Author Image Width',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ authorImageWidth }
							onChange={ ( value ) =>
								setAttributes( { authorImageWidth: value } )
							}
							min={ 0 }
							max={ 500 }
							unit={ {
								value: authorImageWidthUnit,
								label: 'authorImageWidthUnit',
							} }
						/>
						<Range
							label={ __(
								'Author Image Rounded Corners',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ authorImgBorderRadius }
							onChange={ ( value ) =>
								setAttributes( {
									authorImgBorderRadius: value,
								} )
							}
							min={ 0 }
							max={ 100 }
							unit={ {
								value: authorImgBorderRadiusUnit,
								label: 'authorImgBorderRadiusUnit',
							} }
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
								{
									name: __(
										'%',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: '%',
								},
							] }
						/>
					</>
				) }
		</>
	);

	const quoteSettings = (
		<>
			<ResponsiveSlider
				label={ __(
					'Quote Icon Size',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: quoteSize,
						label: 'quoteSize',
					},
					tablet: {
						value: quoteSizeTablet,
						label: 'quoteSizeTablet',
					},
					mobile: {
						value: quoteSizeMobile,
						label: 'quoteSizeMobile',
					},
				} }
				min={ 0 }
				max={ 50 }
				unit={ {
					value: quoteSizeType,
					label: 'quoteSizeType',
				} }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Background Size',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: quotePadding,
						label: 'quotePadding',
					},
					tablet: {
						value: quotePaddingTablet,
						label: 'quotePaddingTablet',
					},
					mobile: {
						value: quotePaddingMobile,
						label: 'quotePaddingMobile',
					},
				} }
				min={ 0 }
				max={ 500 }
				unit={ {
					value: quotePaddingType,
					label: 'quotePaddingType',
				} }
				setAttributes={ setAttributes }
			/>
			{ quoteBgColor && (
				<Range
					label={ __(
						'Quote Icon Border Radius',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ quoteBorderRadius }
					onChange={ ( value ) =>
						setAttributes( { quoteBorderRadius: value } )
					}
					min={ 0 }
					max={ 100 }
					unit={ {
						value: quoteBorderRadiusUnit,
						label: 'quoteBorderRadiusUnit',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			) }
		</>
	);

	const skinSettings = (
		<PanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: skinStyle,
					label: 'skinStyle',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'border',
						label: __( 'Modern', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'quotation',
						label: __(
							'Quotation',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
			{ imageControls }
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Stack On', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: stack,
					label: 'stack',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'none',
						label: __( 'None', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'tablet',
						label: __( 'Tablet', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'mobile',
						label: __( 'Mobile', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				showIcons={ false }
			/>
			<p>Note: Choose on what breakpoint the elements will stack.</p>
		</PanelBody>
	);

	const contentStyling = (
		<PanelBody
			title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<TypographyControl
				label={ __(
					'Quote Typography',
					'ultimate-addons-for-gutenberg'
				) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: descLoadGoogleFonts,
					label: 'descLoadGoogleFonts',
				} }
				fontFamily={ {
					value: descFontFamily,
					label: 'descFontFamily',
				} }
				fontWeight={ {
					value: descFontWeight,
					label: 'descFontWeight',
				} }
				fontStyle={ {
					value: descFontStyle,
					label: 'descFontStyle',
				} }
				fontSizeType={ {
					value: descFontSizeType,
					label: 'descFontSizeType',
				} }
				fontSize={ { value: descFontSize, label: 'descFontSize' } }
				fontSizeMobile={ {
					value: descFontSizeMobile,
					label: 'descFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: descFontSizeTablet,
					label: 'descFontSizeTablet',
				} }
				lineHeightType={ {
					value: descLineHeightType,
					label: 'descLineHeightType',
				} }
				lineHeight={ {
					value: descLineHeight,
					label: 'descLineHeight',
				} }
				lineHeightMobile={ {
					value: descLineHeightMobile,
					label: 'descLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: descLineHeightTablet,
					label: 'descLineHeightTablet',
				} }
				transform={ {
					value: descTransform,
					label: 'descTransform',
				} }
				decoration={ {
					value: descDecoration,
					label: 'descDecoration',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Quote Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ descColor ? descColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { descColor: value } )
				}
			/>
			<TypographyControl
				label={ __(
					'Author Typography',
					'ultimate-addons-for-gutenberg'
				) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: authorLoadGoogleFonts,
					label: 'authorLoadGoogleFonts',
				} }
				fontFamily={ {
					value: authorFontFamily,
					label: 'authorFontFamily',
				} }
				fontWeight={ {
					value: authorFontWeight,
					label: 'authorFontWeight',
				} }
				fontStyle={ {
					value: authorFontStyle,
					label: 'authorFontStyle',
				} }
				fontSizeType={ {
					value: authorFontSizeType,
					label: 'authorFontSizeType',
				} }
				fontSize={ {
					value: authorFontSize,
					label: 'authorFontSize',
				} }
				fontSizeMobile={ {
					value: authorFontSizeMobile,
					label: 'authorFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: authorFontSizeTablet,
					label: 'authorFontSizeTablet',
				} }
				lineHeightType={ {
					value: authorLineHeightType,
					label: 'authorLineHeightType',
				} }
				lineHeight={ {
					value: authorLineHeight,
					label: 'authorLineHeight',
				} }
				lineHeightMobile={ {
					value: authorLineHeightMobile,
					label: 'authorLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: authorLineHeightTablet,
					label: 'authorLineHeightTablet',
				} }
				transform={ {
					value: authorTransform,
					label: 'authorTransform',
				} }
				decoration={ {
					value: authorDecoration,
					label: 'authorDecoration',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Author Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ authorColor ? authorColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { authorColor: value } )
				}
			/>
		</PanelBody>
	);

	const twitterSettings = (
		<PanelBody
			title={ __( 'Twitter Icon', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ToggleControl
				label={ __( 'Enable Icon', 'ultimate-addons-for-gutenberg' ) }
				checked={ enableTweet }
				onChange={ () =>
					setAttributes( { enableTweet: ! enableTweet } )
				}
			/>
			{ enableTweet && (
				<>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Icon View',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: iconView,
							label: 'iconView',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'icon_text',
								label: __(
									'Both',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'icon',
								label: __(
									'Icon',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'text',
								label: __(
									'Text',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						showIcons={ false }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Icon Style',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: iconSkin,
							label: 'iconSkin',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'classic',
								label: __(
									'Classic',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'bubble',
								label: __(
									'Bubble',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'link',
								label: __(
									'Link',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						showIcons={ false }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Target URL',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: iconTargetUrl,
							label: 'iconTargetUrl',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'current',
								label: __(
									'Current Page',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'custom',
								label: __(
									'Custom URL',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						showIcons={ false }
					/>
					{ iconTargetUrl === 'custom' && (
						<TextControl
							label={ __(
								'URL',
								'ultimate-addons-for-gutenberg'
							) }
							value={ customUrl }
							onChange={ ( value ) =>
								setAttributes( { customUrl: value } )
							}
						/>
					) }
				</>
			) }
			{ enableTweet && iconView !== 'icon' && (
				<>
					<TextControl
						label={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
						value={ iconLabel }
						onChange={ ( value ) =>
							setAttributes( { iconLabel: value } )
						}
					/>
				</>
			) }
		</PanelBody>
	);

	const spacingSettings = (
		<PanelBody
			title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			{ skinStyle === 'quotation' && (
				<SpacingControl
					{ ...props }
					label={ __(
						'Quote Icon Margin',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: quoteTopMargin,
						label: 'quoteTopMargin',
					} }
					valueRight={ {
						value: quoteRightMargin,
						label: 'quoteRightMargin',
					} }
					valueBottom={ {
						value: quoteBottomMargin,
						label: 'quoteBottomMargin',
					} }
					valueLeft={ {
						value: quoteLeftMargin,
						label: 'quoteLeftMargin',
					} }
					valueTopTablet={ {
						value: quoteTopMarginTablet,
						label: 'quoteTopMarginTablet',
					} }
					valueRightTablet={ {
						value: quoteRightMarginTablet,
						label: 'quoteRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: quoteBottomMarginTablet,
						label: 'quoteBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: quoteLeftMarginTablet,
						label: 'quoteLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: quoteTopMarginMobile,
						label: 'quoteTopMarginMobile',
					} }
					valueRightMobile={ {
						value: quoteRightMarginMobile,
						label: 'quoteRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: quoteBottomMarginMobile,
						label: 'quoteBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: quoteLeftMarginMobile,
						label: 'quoteLeftMarginMobile',
					} }
					unit={ {
						value: quoteUnit,
						label: 'quoteUnit',
					} }
					mUnit={ {
						value: quotemobileUnit,
						label: 'quotemobileUnit',
					} }
					tUnit={ {
						value: quotetabletUnit,
						label: 'quotetabletUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLink,
						label: 'spacingLink',
					} }
				/>
			) }
			{ skinStyle === 'border' && (
				<Range
					label={ __(
						'Gap Between Border and Quote',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ borderGap }
					onChange={ ( value ) =>
						setAttributes( { borderGap: value } )
					}
					min={ 0 }
					max={ 500 }
					unit={ {
						value: borderGapUnit,
						label: 'borderGapUnit',
					} }
				/>
			) }
			<Range
				label={ __(
					'Quote Bottom Spacing',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ descSpace }
				onChange={ ( value ) => setAttributes( { descSpace: value } ) }
				min={ 0 }
				max={ 200 }
				initialPosition={ 0 }
				unit={ {
					value: descSpaceUnit,
					label: 'descSpaceUnit',
				} }
			/>
			{ align === 'center' && skinStyle !== 'border' && (
				<Range
					label={ __(
						'Author Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ authorSpace }
					onChange={ ( value ) =>
						setAttributes( { authorSpace: value } )
					}
					min={ 0 }
					max={ 200 }
					unit={ {
						value: authorSpaceUnit,
						label: 'authorSpaceUnit',
					} }
				/>
			) }

			{ skinStyle === 'border' && (
				<>
					<Range
						label={ 'Vertical Padding' }
						className={ 'uagb-margin-control' }
						value={ verticalPadding }
						setAttributes={ setAttributes }
						onChange={ ( value ) =>
							setAttributes( { verticalPadding: value } )
						}
						min={ 0 }
						max={ 500 }
						unit={ {
							value: verticalPaddingUnit,
							label: 'verticalPaddingUnit',
						} }
					/>
				</>
			) }
		</PanelBody>
	);

	const getTooltipElement = () => {
		return (
			<>
				<Toolbar label="Options">
					<label
						aria-label={ __(
							'Twitter Username',
							'ultimate-addons-for-gutenberg'
						) }
						className={ `${ className }__via-label` }
						htmlFor={ `${ className }__via` }
					>
						{ ' ' }
						{ UAGB_Block_Icons.at_the_rate }
					</label>
					<input
						aria-label={ __(
							'Twitter Username',
							'ultimate-addons-for-gutenberg'
						) }
						className={ `${ className }__via` }
						id={ `${ className }__via` }
						onChange={ ( event ) =>
							setAttributes( {
								iconShareVia: event.target.value,
							} )
						}
						placeholder={ __(
							'Username',
							'ultimate-addons-for-gutenberg'
						) }
						type="text"
						value={ iconShareVia }
					/>
				</Toolbar>
			</>
		);
	};

	const getAlignmentToolbar = () => {
		return (
			<AlignmentToolbar
				value={ align }
				onChange={ ( value ) => setAttributes( { align: value } ) }
			/>
		);
	};

	const getToolbarElement = () => {
		return (
			<>
				<Toolbar label="Options">
					<Tooltip
						text={ __(
							'Normal Quote',
							'ultimate-addons-for-gutenberg'
						) }
					>
						<Button
							className={ classnames(
								'components-icon-button',
								'components-toolbar__control',
								{
									'is-active': quoteStyle === 'style_1',
								}
							) }
							onClick={ () =>
								setAttributes( {
									quoteStyle: 'style_1',
								} )
							}
						>
							{ UAGB_Block_Icons.quote_1 }
						</Button>
					</Tooltip>
				</Toolbar>

				<Toolbar label="Options">
					<Tooltip
						text={ __(
							'Inline Quote',
							'ultimate-addons-for-gutenberg'
						) }
					>
						<Button
							className={ classnames(
								'components-icon-button',
								'components-toolbar__control',
								{
									'is-active': quoteStyle === 'style_2',
								}
							) }
							onClick={ () =>
								setAttributes( {
									quoteStyle: 'style_2',
								} )
							}
						>
							{ UAGB_Block_Icons.quote_2 }
						</Button>
					</Tooltip>
				</Toolbar>
			</>
		);
	};
	const generalStyle = () => {
		const tabOutputNormal = (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ quoteColor ? quoteColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { quoteColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ quoteBgColor ? quoteBgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { quoteBgColor: value } )
					}
				/>
			</>
		);
		const tabOutputHover = (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ quoteHoverColor ? quoteHoverColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { quoteHoverColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ quoteBgHoverColor ? quoteBgHoverColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { quoteBgHoverColor: value } )
					}
				/>
			</>
		);
		return (
			<PanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ skinStyle === 'border' && borderStyleSetting() }
				{ skinStyle === 'quotation' && quoteSettings }
				{ skinStyle === 'quotation' && (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __(
									'Normal',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								name: 'hover',
								title: __(
									'Hover',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						normal={ tabOutputNormal }
						hover={ tabOutputHover }
						disableBottomSeparator={ true }
					/>
				) }
			</PanelBody>
		);
	};
	const borderStyleSetting = () => {
		const tabOutputNormal = (
			<AdvancedPopColorControl
				label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ borderColor ? borderColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { borderColor: value } )
				}
			/>
		);
		const tabOutputHover = (
			<AdvancedPopColorControl
				label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ borderHoverColor ? borderHoverColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { borderHoverColor: value } )
				}
			/>
		);
		return (
			<>
				<SelectControl
					label={ __(
						'Quote Border Style',
						'ultimate-addons-for-gutenberg'
					) }
					value={ borderStyle }
					onChange={ ( value ) =>
						setAttributes( { borderStyle: value } )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'groove',
							label: __(
								'Groove',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'inset',
							label: __(
								'Inset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'outset',
							label: __(
								'Outset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'ridge',
							label: __(
								'Ridge',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'none' !== borderStyle && (
					<>
						<Range
							label={ __(
								'Thickness',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ borderWidth }
							onChange={ ( value ) =>
								setAttributes( { borderWidth: value } )
							}
							min={ 0 }
							max={ 50 }
							unit={ {
								value: borderWidthUnit,
								label: 'borderWidthUnit',
							} }
						/>
						<UAGTabsControl
							tabs={ [
								{
									name: 'normal',
									title: __(
										'Normal',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									name: 'hover',
									title: __(
										'Hover',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							normal={ tabOutputNormal }
							hover={ tabOutputHover }
							disableBottomSeparator={ true }
						/>
					</>
				) }
			</>
		);
	};
	const iconStyleSetting = () => {
		return (
			<PanelBody
				title={ __( 'Twitter Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ iconView !== 'icon' && (
					<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: tweetBtnLoadGoogleFonts,
							label: 'tweetBtnLoadGoogleFonts',
						} }
						fontFamily={ {
							value: tweetBtnFontFamily,
							label: 'tweetBtnFontFamily',
						} }
						fontWeight={ {
							value: tweetBtnFontWeight,
							label: 'tweetBtnFontWeight',
						} }
						fontStyle={ {
							value: tweetBtnFontStyle,
							label: 'tweetBtnFontStyle',
						} }
						fontSizeType={ {
							value: tweetBtnFontSizeType,
							label: 'tweetBtnFontSizeType',
						} }
						fontSize={ {
							value: tweetBtnFontSize,
							label: 'tweetBtnFontSize',
						} }
						fontSizeMobile={ {
							value: tweetBtnFontSizeMobile,
							label: 'tweetBtnFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: tweetBtnFontSizeTablet,
							label: 'tweetBtnFontSizeTablet',
						} }
						lineHeightType={ {
							value: tweetBtnLineHeightType,
							label: 'tweetBtnLineHeightType',
						} }
						lineHeight={ {
							value: tweetBtnLineHeight,
							label: 'tweetBtnLineHeight',
						} }
						lineHeightMobile={ {
							value: tweetBtnLineHeightMobile,
							label: 'tweetBtnLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: tweetBtnLineHeightTablet,
							label: 'tweetBtnLineHeightTablet',
						} }
						transform={ {
							value: tweetBtnTransform,
							label: 'tweetBtnTransform',
						} }
						decoration={ {
							value: tweetBtnDecoration,
							label: 'tweetBtnDecoration',
						} }
					/>
				) }
				{ iconSkin !== 'link' && (
					<SpacingControl
						{ ...props }
						label={ __(
							'Padding',
							'ultimate-addons-for-gutenberg'
						) }
						valueTop={ {
							value: paddingBtnTop,
							label: 'paddingBtnTop',
						} }
						valueRight={ {
							value: paddingBtnRight,
							label: 'paddingBtnRight',
						} }
						valueBottom={ {
							value: paddingBtnBottom,
							label: 'paddingBtnBottom',
						} }
						valueLeft={ {
							value: paddingBtnLeft,
							label: 'paddingBtnLeft',
						} }
						valueTopTablet={ {
							value: paddingBtnTopTablet,
							label: 'paddingBtnTopTablet',
						} }
						valueRightTablet={ {
							value: paddingBtnRightTablet,
							label: 'paddingBtnRightTablet',
						} }
						valueBottomTablet={ {
							value: paddingBtnBottomTablet,
							label: 'paddingBtnBottomTablet',
						} }
						valueLeftTablet={ {
							value: paddingBtnLeftTablet,
							label: 'paddingBtnLeftTablet',
						} }
						valueTopMobile={ {
							value: paddingBtnTopMobile,
							label: 'paddingBtnTopMobile',
						} }
						valueRightMobile={ {
							value: paddingBtnRightMobile,
							label: 'paddingBtnRightMobile',
						} }
						valueBottomMobile={ {
							value: paddingBtnBottomMobile,
							label: 'paddingBtnBottomMobile',
						} }
						valueLeftMobile={ {
							value: paddingBtnLeftMobile,
							label: 'paddingBtnLeftMobile',
						} }
						unit={ {
							value: paddingBtnUnit,
							label: 'paddingBtnUnit',
						} }
						mUnit={ {
							value: mobilePaddingBtnUnit,
							label: 'mobilePaddingBtnUnit',
						} }
						tUnit={ {
							value: tabletPaddingBtnUnit,
							label: 'tabletPaddingBtnUnit',
						} }
						deviceType={ deviceType }
						attributes={ attributes }
						setAttributes={ setAttributes }
						link={ {
							value: btnspacingLink,
							label: 'btnspacingLink',
						} }
					/>
				) }
				{ iconView === 'icon_text' && (
					<Range
						label={ __(
							'Icon & Text Spacing',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ tweetIconSpacing }
						onChange={ ( value ) =>
							setAttributes( { tweetIconSpacing: value } )
						}
						min={ 0 }
						max={ 20 }
						unit={ {
							value: tweetIconSpacingUnit,
							label: 'tweetIconSpacingUnit',
						} }
						initialPosition={ 5 }
					/>
				) }
				{ iconSkin === 'link' && (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __(
									'Normal',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								name: 'hover',
								title: __(
									'Hover',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						normal={
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									tweetLinkColor ? tweetLinkColor : ''
								}
								onColorChange={ ( value ) =>
									setAttributes( { tweetLinkColor: value } )
								}
							/>
						}
						hover={
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									tweetBtnHoverColor ? tweetBtnHoverColor : ''
								}
								onColorChange={ ( value ) =>
									setAttributes( {
										tweetBtnHoverColor: value,
									} )
								}
							/>
						}
						disableBottomSeparator={ true }
					/>
				) }
				{ iconSkin !== 'link' && (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __(
									'Normal',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								name: 'hover',
								title: __(
									'Hover',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						normal={
							<>
								<AdvancedPopColorControl
									label={ __(
										'Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={
										tweetBtnColor ? tweetBtnColor : ''
									}
									onColorChange={ ( value ) =>
										setAttributes( {
											tweetBtnColor: value,
										} )
									}
								/>
								<AdvancedPopColorControl
									label={ __(
										'Background Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={
										tweetBtnBgColor ? tweetBtnBgColor : ''
									}
									onColorChange={ ( value ) =>
										setAttributes( {
											tweetBtnBgColor: value,
										} )
									}
								/>
							</>
						}
						hover={
							<>
								<AdvancedPopColorControl
									label={ __(
										'Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={
										tweetBtnHoverColor
											? tweetBtnHoverColor
											: ''
									}
									onColorChange={ ( value ) =>
										setAttributes( {
											tweetBtnHoverColor: value,
										} )
									}
								/>
								<AdvancedPopColorControl
									label={ __(
										'Background Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={
										tweetBtnBgHoverColor
											? tweetBtnBgHoverColor
											: ''
									}
									onColorChange={ ( value ) =>
										setAttributes( {
											tweetBtnBgHoverColor: value,
										} )
									}
								/>
							</>
						}
						disableBottomSeparator={ true }
					/>
				) }
			</PanelBody>
		);
	};
	return (
		<>
			<BlockControls key="controls">
				{ skinStyle !== 'border' && getAlignmentToolbar() }
				{ skinStyle === 'quotation' && getToolbarElement() }
				{ enableTweet && getTooltipElement() }
			</BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ skinSettings }
						{ twitterSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ generalStyle() }
						{ enableTweet && iconStyleSetting() }
						{ contentStyling }
						{ spacingSettings }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadDescGoogleFonts }
			{ loadAuthorGoogleFonts }
			{ loadTweetGoogleFonts }
		</>
	);
};

export default React.memo( Settings );
