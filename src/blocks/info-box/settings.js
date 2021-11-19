import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import Border from '@Components/border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGImage from '@Components/image';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { getImageSize } from '@Utils/Helpers';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

	// Setup the attributes.
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		prefixColor,
		prefixFontSize,
		prefixFontSizeType,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontStyle,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
		prefixTransform,
		prefixDecoration,
		prefixLoadGoogleFonts,
		headingTag,
		headFontSize,
		headFontSizeType,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headFontStyle,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		headLoadGoogleFonts,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontStyle,
		subHeadLineHeightType,
		subHeadLineHeight,
		subHeadLineHeightTablet,
		subHeadLineHeightMobile,
		subHeadTransform,
		subHeadDecoration,
		subHeadLoadGoogleFonts,
		separatorWidthType,
		seperatorSpace,
		seperatorTabletSpace,
		seperatorMobileSpace,
		headSpace,
		headTabletSpace,
		headMobileSpace,
		subHeadSpace,
		icon,
		iconColor,
		iconSize,
		iconSizeType,
		iconimgPosition,
		iconHover,
		iconimgBorderRadius,
		iconimgBorderRadiusUnit,
		source_type,
		sourceAlign,
		seperatorPosition,
		seperatorStyle,
		seperatorWidth,
		seperatorColor,
		seperatorThickness,
		thicknessUnit,
		ctaType,
		ctaText,
		ctaLink,
		ctaTarget,
		ctaIcon,
		ctaIconPosition,
		ctaIconSpace,
		ctaIconSpaceType,
		ctaLinkColor,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaTransform,
		ctaDecoration,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontStyle,
		ctaLoadGoogleFonts,
		ctaBtnLinkColor,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBgColor,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
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
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderhoverColor,
		ctaBorderWidth,
		ctaBorderRadius,
		prefixSpace,
		prefixTabletSpace,
		prefixMobileSpace,
		iconLeftMargin,
		iconRightMargin,
		iconTopMargin,
		iconBottomMargin,
		iconMarginTopTablet,
		iconMarginRightTablet,
		iconMarginBottomTablet,
		iconMarginLeftTablet,
		iconMarginTopMobile,
		iconMarginRightMobile,
		iconMarginBottomMobile,
		iconMarginLeftMobile,
		iconMarginUnit,
		iconMobilePaddingUnit,
		iconTabletPaddingUnit,
		iconImage,
		imageSize,
		imageWidth,
		imageWidthMobile,
		imageWidthTablet,
		imageWidthType,
		imageWidthUnit,
		stack,
		showPrefix,
		showTitle,
		showDesc,
		inheritFromTheme,
		spacingLink,
		paddingspacingLink,
		headTransform,
		headDecoration,
		prefixSpaceUnit,
		headSpaceUnit,
		seperatorSpaceUnit,
		subHeadSpaceUnit,
		subHeadTabletSpace,
		subHeadMobileSpace,
	} = attributes;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { iconImage: null } );
			return;
		}
		if ( media.sizes ) {
			const new_img = getImageSize( media.sizes );
			imageSizeOptions = new_img;
		}
		setAttributes( { iconImage: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { iconImage: '' } );
	};

	if ( iconImage && iconImage.sizes ) {
		imageSizeOptions = getImageSize( iconImage.sizes );
	}

	let loadPrefixGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadCtaGoogleFonts;
	let loadHeadGoogleFonts;

	if ( prefixLoadGoogleFonts === true ) {
		const prefixconfig = {
			google: {
				families: [
					prefixFontFamily +
						( prefixFontWeight ? ':' + prefixFontWeight : '' ),
				],
			},
		};

		loadPrefixGoogleFonts = (
			<WebfontLoader config={ prefixconfig }></WebfontLoader>
		);
	}

	if ( headLoadGoogleFonts === true ) {
		const headconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadGoogleFonts = (
			<WebfontLoader config={ headconfig }></WebfontLoader>
		);
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const subHeadconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadGoogleFonts = (
			<WebfontLoader config={ subHeadconfig }></WebfontLoader>
		);
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [
					ctaFontFamily +
						( ctaFontWeight ? ':' + ctaFontWeight : '' ),
				],
			},
		};

		loadCtaGoogleFonts = (
			<WebfontLoader config={ ctaconfig }></WebfontLoader>
		);
	}

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ headingAlign }
					onChange={ ( value ) =>
						setAttributes( { headingAlign: value } )
					}
				/>
			</BlockControls>
		);
	};

	// Global Controls.
	const imageIconPanel = () => {
		return (
			<PanelBody
				title={ __( 'Image/Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __(
						'Select Position',
						'ultimate-addons-for-gutenberg'
					) }
					value={ iconimgPosition }
					onChange={ ( value ) =>
						setAttributes( { iconimgPosition: value } )
					}
					options={ [
						{
							value: 'above-title',
							label: __(
								'Above Title',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'below-title',
							label: __(
								'Below Title',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'left-title',
							label: __(
								'Left of Title',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right-title',
							label: __(
								'Right of Title',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'left',
							label: __(
								'Left of Text and Title',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							label: __(
								'Right of Text and Title',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>

				{ ( iconimgPosition === 'left' ||
					iconimgPosition === 'right' ) && (
					<SelectControl
						label={ __(
							'Stack on',
							'ultimate-addons-for-gutenberg'
						) }
						value={ stack }
						options={ [
							{
								value: 'none',
								label: __(
									'None',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'tablet',
								label: __(
									'Tablet',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'mobile',
								label: __(
									'Mobile',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						help={ __(
							'Note: Choose on what breakpoint the Info Box will stack.',
							'ultimate-addons-for-gutenberg'
						) }
						onChange={ ( value ) =>
							setAttributes( { stack: value } )
						}
					/>
				) }
				{ iconimgPosition &&
					iconimgPosition !== 'above-title' &&
					iconimgPosition !== 'below-title' && (
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Vertical Alignment',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: sourceAlign,
								label: 'sourceAlign',
							} }
							options={ [
								{
									value: 'top',
									label: __(
										'Top',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'middle',
									label: __(
										'Middle',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
					) }
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Select Source',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: source_type,
						label: 'source_type',
					} }
					options={ [
						{
							value: 'icon',
							label: __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'image',
							label: __(
								'Image',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>

				{ source_type === 'icon' && (
					<>
						<UAGIconPicker
							label={ __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ icon }
							onChange={ ( value ) =>
								setAttributes( { icon: value } )
							}
						/>
					</>
				) }
				{ source_type === 'image' && (
					<>
						<UAGImage
							onSelectImage={ onSelectImage }
							backgroundImage={ iconImage }
							onRemoveImage={ onRemoveImage }
						/>
						{ iconImage &&
							iconImage.url !== 'null' &&
							iconImage.url !== '' && (
								<SelectControl
									label={ __(
										'Image Size',
										'ultimate-addons-for-gutenberg'
									) }
									options={ imageSizeOptions }
									value={ imageSize }
									onChange={ ( value ) =>
										setAttributes( {
											imageSize: value,
										} )
									}
								/>
							) }
					</>
				) }
			</PanelBody>
		);
	};

	// Typography settings.
	const typographySettings = () => {
		return (
			<PanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					checked={ showPrefix }
					onChange={ () =>
						setAttributes( { showPrefix: ! showPrefix } )
					}
					label={ __(
						'Enable Prefix',
						'ultimate-addons-for-gutenberg'
					) }
				/>

				<ToggleControl
					checked={ showTitle }
					onChange={ () =>
						setAttributes( { showTitle: ! showTitle } )
					}
					label={ __(
						'Enable Title',
						'ultimate-addons-for-gutenberg'
					) }
				/>

				{ showTitle && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Title Tag',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: headingTag,
								label: 'headingTag',
							} }
							options={ [
								{ value: 'h1', label: __( 'H1' ) },
								{ value: 'h2', label: __( 'H2' ) },
								{ value: 'h3', label: __( 'H3' ) },
								{ value: 'h4', label: __( 'H4' ) },
								{ value: 'h5', label: __( 'H5' ) },
								{ value: 'h6', label: __( 'H6' ) },
								{ value: 'p', label: __( 'P' ) },
							] }
						/>
					</>
				) }

				<ToggleControl
					checked={ showDesc }
					onChange={ () => setAttributes( { showDesc: ! showDesc } ) }
					label={ __(
						'Enable Description',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</PanelBody>
		);
	};

	// Separator settings.
	const seperatorSettings = () => {
		return (
			<PanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __( 'Style' ) }
					value={ seperatorStyle }
					onChange={ ( value ) =>
						setAttributes( { seperatorStyle: value } )
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
							value: 'double',
							label: __(
								'Double',
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
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'none' !== seperatorStyle && (
					<SelectControl
						label={ __(
							'Position',
							'ultimate-addons-for-gutenberg'
						) }
						value={ seperatorPosition }
						onChange={ ( value ) =>
							setAttributes( { seperatorPosition: value } )
						}
						options={ [
							{
								value: 'after_icon',
								label: __(
									'After Icon/Image',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'after_prefix',
								label: __(
									'After Prefix',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'after_title',
								label: __(
									'After Title',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'after_desc',
								label: __(
									'After Description',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
			</PanelBody>
		);
	};

	const ctaSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Call To Action',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					value={ ctaType }
					onChange={ ( value ) =>
						setAttributes( { ctaType: value } )
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
							value: 'text',
							label: __(
								'Text',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'button',
							label: __(
								'Button',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'all',
							label: __(
								'Complete Box',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ ( ctaType === 'text' || ctaType === 'button' ) && (
					<>
						<TextControl
							label={ __(
								'Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaText }
							onChange={ ( value ) =>
								setAttributes( { ctaText: value } )
							}
						/>
					</>
				) }
				{ ctaType !== 'none' && (
					<>
						<TextControl
							label={ __(
								'Link',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaLink }
							onChange={ ( value ) =>
								setAttributes( { ctaLink: value } )
							}
						/>
					</>
				) }
				{ ctaType !== 'all' && ctaType !== 'none' && (
					<>
						<UAGIconPicker
							label={ __(
								'Button Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaIcon }
							onChange={ ( value ) =>
								setAttributes( { ctaIcon: value } )
							}
						/>
					</>
				) }
				{ ctaIcon !== '' && ctaType !== 'all' && ctaType !== 'none' && (
					<>
						<SelectControl
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaIconPosition }
							onChange={ ( value ) =>
								setAttributes( {
									ctaIconPosition: value,
								} )
							}
							options={ [
								{
									value: 'before',
									label: __(
										'Before Text',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'after',
									label: __(
										'After Text',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
						<Range
							label={ __(
								'Icon Spacing',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ ctaIconSpace }
							onChange={ ( value ) =>
								setAttributes( { ctaIconSpace: value } )
							}
							min={ 0 }
							max={ 50 }
							unit={ {
								value: ctaIconSpaceType,
								label: 'ctaIconSpaceType',
							} }
						/>
					</>
				) }
				{ ctaType === 'button' && (
					<ToggleControl
						checked={ inheritFromTheme }
						onChange={ () =>
							setAttributes( {
								inheritFromTheme: ! inheritFromTheme,
							} )
						}
						label={ __(
							'Inherit from Theme',
							'ultimate-addons-for-gutenberg'
						) }
					/>
				) }
				{ ctaType !== 'none' && (
					<ToggleControl
						checked={ ctaTarget }
						onChange={ () =>
							setAttributes( { ctaTarget: ! ctaTarget } )
						}
						label={ __(
							'Open in new Window',
							'ultimate-addons-for-gutenberg'
						) }
					/>
				) }
			</PanelBody>
		);
	};
	const styleSettings = () => {
		return (
			<>
				{ '' !== icon && (
					<PanelBody title="Icon/Image" initialOpen={ false }>
						<>
							{ ' ' }
							{ source_type === 'icon' && (
								<>
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
													iconColor ? iconColor : ''
												}
												onColorChange={ ( value ) =>
													setAttributes( {
														iconColor: value,
													} )
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
													iconHover ? iconHover : ''
												}
												onColorChange={ ( value ) =>
													setAttributes( {
														iconHover: value,
													} )
												}
											/>
										 }
										disableBottomSeparator={ false }
									/>
									<Range
										label={ __(
											'Size',
											'ultimate-addons-for-gutenberg'
										) }
										setAttributes={ setAttributes }
										value={ iconSize }
										onChange={ ( value ) =>
											setAttributes( { iconSize: value } )
										}
										min={ 0 }
										max={ 300 }
										unit={ {
											value: iconSizeType,
											label: 'iconSizeType',
										} }
									/>
								</>
							) }
							{ source_type === 'image' &&
								iconImage &&
								iconImage.url !== 'null' &&
								iconImage.url !== '' && (
									<>
										<ToggleControl
											checked={ imageWidthType }
											onChange={ () =>
												setAttributes( {
													imageWidthType: ! imageWidthType,
												} )
											}
											label={ __(
												'Custom Width',
												'ultimate-addons-for-gutenberg'
											) }
											help={ __(
												'Turn this off to inherit the natural width of Image.',
												'ultimate-addons-for-gutenberg'
											) }
										/>

										{ imageWidthType && (
											<ResponsiveSlider
												label={ __(
													'Width',
													'ultimate-addons-for-gutenberg'
												) }
												data={ {
													desktop: {
														value: imageWidth,
														label: 'imageWidth',
													},
													tablet: {
														value: imageWidthTablet,
														label:
															'imageWidthTablet',
													},
													mobile: {
														value: imageWidthMobile,
														label:
															'imageWidthMobile',
													},
												} }
												min={ 0 }
												max={ 500 }
												unit={ {
													value: imageWidthUnit,
													label: 'imageWidthUnit',
												} }
												setAttributes={ setAttributes }
											/>
										) }
										<Range
											label={ __(
												'Rounded Corners (px)',
												'ultimate-addons-for-gutenberg'
											) }
											setAttributes={ setAttributes }
											value={ iconimgBorderRadius }
											onChange={ ( value ) =>
												setAttributes( {
													iconimgBorderRadius: value,
												} )
											}
											min={ 0 }
											max={ 500 }
											unit={ {
												value: iconimgBorderRadiusUnit,
												label:
													'iconimgBorderRadiusUnit',
											} }
										/>
									</>
								) }
							<SpacingControl
								{ ...props }
								label={ __(
									'Margin',
									'ultimate-addons-for-gutenberg'
								) }
								valueTop={ {
									value: iconTopMargin,
									label: 'iconTopMargin',
								} }
								valueRight={ {
									value: iconRightMargin,
									label: 'iconRightMargin',
								} }
								valueBottom={ {
									value: iconBottomMargin,
									label: 'iconBottomMargin',
								} }
								valueLeft={ {
									value: iconLeftMargin,
									label: 'iconLeftMargin',
								} }
								valueTopTablet={ {
									value: iconMarginTopTablet,
									label: 'iconMarginTopTablet',
								} }
								valueRightTablet={ {
									value: iconMarginRightTablet,
									label: 'iconMarginRightTablet',
								} }
								valueBottomTablet={ {
									value: iconMarginBottomTablet,
									label: 'iconMarginBottomTablet',
								} }
								valueLeftTablet={ {
									value: iconMarginLeftTablet,
									label: 'iconMarginLeftTablet',
								} }
								valueTopMobile={ {
									value: iconMarginTopMobile,
									label: 'iconMarginTopMobile',
								} }
								valueRightMobile={ {
									value: iconMarginRightMobile,
									label: 'iconMarginRightMobile',
								} }
								valueBottomMobile={ {
									value: iconMarginBottomMobile,
									label: 'iconMarginBottomMobile',
								} }
								valueLeftMobile={ {
									value: iconMarginLeftMobile,
									label: 'iconMarginLeftMobile',
								} }
								unit={ {
									value: iconMarginUnit,
									label: 'iconMarginUnit',
								} }
								mUnit={ {
									value: iconMobilePaddingUnit,
									label: 'iconMobilePaddingUnit',
								} }
								tUnit={ {
									value: iconTabletPaddingUnit,
									label: 'iconTabletPaddingUnit',
								} }
								deviceType={ deviceType }
								attributes={ attributes }
								setAttributes={ setAttributes }
								link={ {
									value: spacingLink,
									label: 'spacingLink',
								} }
							/>
						</>
					</PanelBody>
				) }
				{ showPrefix && (
					<PanelBody title="Prefix" initialOpen={ false }>
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ prefixColor ? prefixColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { prefixColor: value } )
								}
							/>
							<TypographyControl
								label={ __(
									'Typography',
									'ultimate-addons-for-gutenberg'
								) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								loadGoogleFonts={ {
									value: prefixLoadGoogleFonts,
									label: 'prefixLoadGoogleFonts',
								} }
								fontFamily={ {
									value: prefixFontFamily,
									label: 'prefixFontFamily',
								} }
								fontWeight={ {
									value: prefixFontWeight,
									label: 'prefixFontWeight',
								} }
								fontStyle={ {
									value: prefixFontStyle,
									label: 'prefixFontStyle',
								} }
								fontSizeType={ {
									value: prefixFontSizeType,
									label: 'prefixFontSizeType',
								} }
								fontSize={ {
									value: prefixFontSize,
									label: 'prefixFontSize',
								} }
								fontSizeMobile={ {
									value: prefixFontSizeMobile,
									label: 'prefixFontSizeMobile',
								} }
								fontSizeTablet={ {
									value: prefixFontSizeTablet,
									label: 'prefixFontSizeTablet',
								} }
								lineHeightType={ {
									value: prefixLineHeightType,
									label: 'prefixLineHeightType',
								} }
								lineHeight={ {
									value: prefixLineHeight,
									label: 'prefixLineHeight',
								} }
								lineHeightMobile={ {
									value: prefixLineHeightMobile,
									label: 'prefixLineHeightMobile',
								} }
								lineHeightTablet={ {
									value: prefixLineHeightTablet,
									label: 'prefixLineHeightTablet',
								} }
								transform={ {
									value: prefixTransform,
									label: 'prefixTransform',
								} }
								decoration={ {
									value: prefixDecoration,
									label: 'prefixDecoration',
								} }
							/>
							<ResponsiveSlider
								label={ __(
									'Bottom Margin',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									desktop: {
										value: prefixSpace,
										label: 'prefixSpace',
									},
									tablet: {
										value: prefixTabletSpace,
										label: 'prefixTabletSpace',
									},
									mobile: {
										value: prefixMobileSpace,
										label: 'prefixMobileSpace',
									},
								} }
								min={ 0 }
								max={ 50 }
								unit={ {
									value: prefixSpaceUnit,
									label: 'prefixSpaceUnit',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					</PanelBody>
				) }
				{ showTitle && (
					<PanelBody title="Title" initialOpen={ false }>
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ headingColor ? headingColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { headingColor: value } )
								}
							/>
							<TypographyControl
								label={ __(
									'Typography',
									'ultimate-addons-for-gutenberg'
								) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								loadGoogleFonts={ {
									value: headLoadGoogleFonts,
									label: 'headLoadGoogleFonts',
								} }
								fontFamily={ {
									value: headFontFamily,
									label: 'headFontFamily',
								} }
								fontWeight={ {
									value: headFontWeight,
									label: 'headFontWeight',
								} }
								fontStyle={ {
									value: headFontStyle,
									label: 'headFontStyle',
								} }
								fontSizeType={ {
									value: headFontSizeType,
									label: 'headFontSizeType',
								} }
								fontSize={ {
									value: headFontSize,
									label: 'headFontSize',
								} }
								fontSizeMobile={ {
									value: headFontSizeMobile,
									label: 'headFontSizeMobile',
								} }
								fontSizeTablet={ {
									value: headFontSizeTablet,
									label: 'headFontSizeTablet',
								} }
								lineHeightType={ {
									value: headLineHeightType,
									label: 'headLineHeightType',
								} }
								lineHeight={ {
									value: headLineHeight,
									label: 'headLineHeight',
								} }
								lineHeightMobile={ {
									value: headLineHeightMobile,
									label: 'headLineHeightMobile',
								} }
								lineHeightTablet={ {
									value: headLineHeightTablet,
									label: 'headLineHeightTablet',
								} }
								transform={ {
									value: headTransform,
									label: 'headTransform',
								} }
								decoration={ {
									value: headDecoration,
									label: 'headDecoration',
								} }
							/>
							<ResponsiveSlider
								label={ __(
									'Bottom Margin',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									desktop: {
										value: headSpace,
										label: 'headSpace',
									},
									tablet: {
										value: headTabletSpace,
										label: 'headTabletSpace',
									},
									mobile: {
										value: headMobileSpace,
										label: 'headMobileSpace',
									},
								} }
								min={ 0 }
								max={ 50 }
								unit={ {
									value: headSpaceUnit,
									label: 'headSpaceUnit',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					</PanelBody>
				) }
				{ 'null' !== seperatorStyle && (
					<PanelBody title="Separator" initialOpen={ false }>
						<>
							{ 'none' !== seperatorStyle && (
								<>
									<Range
										label={ __(
											'Width',
											'ultimate-addons-for-gutenberg'
										) }
										setAttributes={ setAttributes }
										value={ seperatorWidth }
										onChange={ ( value ) =>
											setAttributes( {
												seperatorWidth: value,
											} )
										}
										min={ 0 }
										max={
											'%' === separatorWidthType
												? 100
												: 500
										}
										unit={ {
											value: separatorWidthType,
											label: 'separatorWidthType',
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
													'Em',
													'ultimate-addons-for-gutenberg'
												),
												unitValue: 'em',
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
									<Range
										label={ __(
											'Thickness',
											'ultimate-addons-for-gutenberg'
										) }
										setAttributes={ setAttributes }
										value={ seperatorThickness }
										onChange={ ( value ) =>
											setAttributes( {
												seperatorThickness: value,
											} )
										}
										min={ 0 }
										max={ 10 }
										unit={ {
											value: thicknessUnit,
											label: 'thicknessUnit',
										} }
									/>
								</>
							) }
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									seperatorColor ? seperatorColor : ''
								}
								onColorChange={ ( value ) =>
									setAttributes( { seperatorColor: value } )
								}
							/>
							<ResponsiveSlider
								label={ __(
									'Bottom Margin',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									desktop: {
										value: seperatorSpace,
										label: 'seperatorSpace',
									},
									tablet: {
										value: seperatorTabletSpace,
										label: 'seperatorTabletSpace',
									},
									mobile: {
										value: seperatorMobileSpace,
										label: 'seperatorMobileSpace',
									},
								} }
								min={ 0 }
								max={ 50 }
								unit={ {
									value: seperatorSpaceUnit,
									label: 'seperatorSpaceUnit',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					</PanelBody>
				) }
				{ showDesc && (
					<PanelBody title="Description" initialOpen={ false }>
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									subHeadingColor ? subHeadingColor : ''
								}
								onColorChange={ ( value ) =>
									setAttributes( { subHeadingColor: value } )
								}
							/>
							<TypographyControl
								label={ __(
									'Typography',
									'ultimate-addons-for-gutenberg'
								) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								loadGoogleFonts={ {
									value: subHeadLoadGoogleFonts,
									label: 'subHeadLoadGoogleFonts',
								} }
								fontFamily={ {
									value: subHeadFontFamily,
									label: 'subHeadFontFamily',
								} }
								fontWeight={ {
									value: subHeadFontWeight,
									label: 'subHeadFontWeight',
								} }
								fontStyle={ {
									value: subHeadFontStyle,
									label: 'subHeadFontStyle',
								} }
								fontSizeType={ {
									value: subHeadFontSizeType,
									label: 'subHeadFontSizeType',
								} }
								fontSize={ {
									value: subHeadFontSize,
									label: 'subHeadFontSize',
								} }
								fontSizeMobile={ {
									value: subHeadFontSizeMobile,
									label: 'subHeadFontSizeMobile',
								} }
								fontSizeTablet={ {
									value: subHeadFontSizeTablet,
									label: 'subHeadFontSizeTablet',
								} }
								lineHeightType={ {
									value: subHeadLineHeightType,
									label: 'subHeadLineHeightType',
								} }
								lineHeight={ {
									value: subHeadLineHeight,
									label: 'subHeadLineHeight',
								} }
								lineHeightMobile={ {
									value: subHeadLineHeightMobile,
									label: 'subHeadLineHeightMobile',
								} }
								lineHeightTablet={ {
									value: subHeadLineHeightTablet,
									label: 'subHeadLineHeightTablet',
								} }
								transform={ {
									value: subHeadTransform,
									label: 'subHeadTransform',
								} }
								decoration={ {
									value: subHeadDecoration,
									label: 'subHeadDecoration',
								} }
							/>
							<ResponsiveSlider
								label={ __(
									'Bottom Margin',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									desktop: {
										value: subHeadSpace,
										label: 'subHeadSpace',
									},
									tablet: {
										value: subHeadTabletSpace,
										label: 'subHeadTabletSpace',
									},
									mobile: {
										value: subHeadMobileSpace,
										label: 'subHeadMobileSpace',
									},
								} }
								min={ 0 }
								max={ 50 }
								unit={ {
									value: subHeadSpaceUnit,
									label: 'subHeadSpaceUnit',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					</PanelBody>
				) }
				{ inheritFromTheme && ctaType === 'text' && (
					<PanelBody title="CTA" initialOpen={ false }>
						<>
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
											'Text Color',
											'ultimate-addons-for-gutenberg'
										) }
										colorValue={ ctaLinkColor ? ctaLinkColor : '' }
										onColorChange={ ( value ) =>
											setAttributes( {
												ctaLinkColor: value,
											} )
										}
									/>
								}
								hover={
									<AdvancedPopColorControl
										label={ __(
											'Text Color',
											'ultimate-addons-for-gutenberg'
										) }
										colorValue={
											ctaLinkHoverColor ? ctaLinkHoverColor : ''
										}
										onColorChange={ ( value ) =>
											setAttributes( {
												ctaLinkHoverColor: value,
											} )
										}
									/>
									}
								// disableBottomSeparator={ true }
							/>
							<TypographyControl
								label={ __(
									'Typography',
									'ultimate-addons-for-gutenberg'
								) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								loadGoogleFonts={ {
									value: ctaLoadGoogleFonts,
									label: 'ctaLoadGoogleFonts',
								} }
								fontFamily={ {
									value: ctaFontFamily,
									label: 'ctaFontFamily',
								} }
								fontWeight={ {
									value: ctaFontWeight,
									label: 'ctaFontWeight',
								} }
								fontStyle={ {
									value: ctaFontStyle,
									label: 'ctaFontStyle',
								} }
								fontSizeType={ {
									value: ctaFontSizeType,
									label: 'ctaFontSizeType',
								} }
								fontSize={ {
									value: ctaFontSize,
									label: 'ctaFontSize',
								} }
								fontSizeMobile={ {
									value: ctaFontSizeMobile,
									label: 'ctaFontSizeMobile',
								} }
								fontSizeTablet={ {
									value: ctaFontSizeTablet,
									label: 'ctaFontSizeTablet',
								} }
								transform={ {
									value: ctaTransform,
									label: 'ctaTransform',
								} }
								decoration={ {
									value: ctaDecoration,
									label: 'ctaDecoration',
								} }
								disableLineHeight={ true }
							/>
						</>
					</PanelBody>
				) }
				{ ! inheritFromTheme &&
					'none' !== ctaType &&
					'all' !== ctaType && (
						<PanelBody title="CTA" initialOpen={ false }>
							<>
								{ ! inheritFromTheme && ctaType === 'button' && (
									<>


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
												'Button Text Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												ctaBtnLinkColor
													? ctaBtnLinkColor
													: ''
											}
											onColorChange={ ( value ) =>
												setAttributes( {
													ctaBtnLinkColor: value,
												} )
											}
										/>,
										<AdvancedPopColorControl
											label={ __(
												'Background Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												ctaBgColor ? ctaBgColor : ''
											}
											onColorChange={ ( value ) =>
												setAttributes( {
													ctaBgColor: value,
												} )
											}
										/>
								}
								hover={
									<AdvancedPopColorControl
											label={ __(
												'Button Text Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												ctaLinkHoverColor
													? ctaLinkHoverColor
													: ''
											}
											onColorChange={ ( value ) =>
												setAttributes( {
													ctaLinkHoverColor: value,
												} )
											}
										/>,
										<AdvancedPopColorControl
											label={ __(
												'Background Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												ctaBgHoverColor
													? ctaBgHoverColor
													: ''
											}
											onColorChange={ ( value ) =>
												setAttributes( {
													ctaBgHoverColor: value,
												} )
											}
										/>
									}
								// disableBottomSeparator={ true }
							/>
									</>
								) }
								{ ctaType === 'text' && (
									<>
									<TypographyControl
										label={ __(
											'Typography',
											'ultimate-addons-for-gutenberg'
										) }
										attributes={ attributes }
										setAttributes={ setAttributes }
										loadGoogleFonts={ {
											value: ctaLoadGoogleFonts,
											label: 'ctaLoadGoogleFonts',
										} }
										fontFamily={ {
											value: ctaFontFamily,
											label: 'ctaFontFamily',
										} }
										fontWeight={ {
											value: ctaFontWeight,
											label: 'ctaFontWeight',
										} }
										fontStyle={ {
											value: ctaFontStyle,
											label: 'ctaFontStyle',
										} }
										fontSizeType={ {
											value: ctaFontSizeType,
											label: 'ctaFontSizeType',
										} }
										fontSize={ {
											value: ctaFontSize,
											label: 'ctaFontSize',
										} }
										fontSizeMobile={ {
											value: ctaFontSizeMobile,
											label: 'ctaFontSizeMobile',
										} }
										fontSizeTablet={ {
											value: ctaFontSizeTablet,
											label: 'ctaFontSizeTablet',
										} }
										transform={ {
											value: ctaTransform,
											label: 'ctaTransform',
										} }
										decoration={ {
											value: ctaDecoration,
											label: 'ctaDecoration',
										} }
										disableLineHeight={ true }
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
										normal={
											<AdvancedPopColorControl
													label={ __(
														'Text Color',
														'ultimate-addons-for-gutenberg'
													) }
													colorValue={
														ctaLinkColor ? ctaLinkColor : ''
													}
													onColorChange={ ( value ) =>
														setAttributes( {
															ctaLinkColor: value,
														} )
													}
												/>
										}
										hover={
											<AdvancedPopColorControl
													label={ __(
														'Text Color',
														'ultimate-addons-for-gutenberg'
													) }
													colorValue={
														ctaLinkHoverColor
															? ctaLinkHoverColor
															: ''
													}
													onColorChange={ ( value ) =>
														setAttributes( {
															ctaLinkHoverColor: value,
														} )
													}
												/>
											}
										// disableBottomSeparator={ true }
									/>
									</>
								) }
								{ ! inheritFromTheme && ctaType === 'button' && (
									<TypographyControl
										label={ __(
											'Typography',
											'ultimate-addons-for-gutenberg'
										) }
										attributes={ attributes }
										setAttributes={ setAttributes }
										loadGoogleFonts={ {
											value: ctaLoadGoogleFonts,
											label: 'ctaLoadGoogleFonts',
										} }
										fontFamily={ {
											value: ctaFontFamily,
											label: 'ctaFontFamily',
										} }
										fontWeight={ {
											value: ctaFontWeight,
											label: 'ctaFontWeight',
										} }
										fontStyle={ {
											value: ctaFontStyle,
											label: 'ctaFontStyle',
										} }
										fontSizeType={ {
											value: ctaFontSizeType,
											label: 'ctaFontSizeType',
										} }
										fontSize={ {
											value: ctaFontSize,
											label: 'ctaFontSize',
										} }
										fontSizeMobile={ {
											value: ctaFontSizeMobile,
											label: 'ctaFontSizeMobile',
										} }
										fontSizeTablet={ {
											value: ctaFontSizeTablet,
											label: 'ctaFontSizeTablet',
										} }
										transform={ {
											value: ctaTransform,
											label: 'ctaTransform',
										} }
										decoration={ {
											value: ctaDecoration,
											label: 'ctaDecoration',
										} }
										disableLineHeight={ true }
									/>
								) }
								{ ! inheritFromTheme && ctaType === 'button' && (
									<SpacingControl
										{ ...props }
										label={ __(
											'Button Padding',
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
											value: paddingspacingLink,
											label: 'paddingspacingLink',
										} }
									/>
								) }
								{ ! inheritFromTheme && ctaType === 'button' && (
									<Border
										setAttributes={ setAttributes }
										borderStyle={ {
											value: ctaBorderStyle,
											label: 'ctaBorderStyle',
											title: __(
												'Style',
												'ultimate-addons-for-gutenberg'
											),
										} }
										borderWidth={ {
											value: ctaBorderWidth,
											label: 'ctaBorderWidth',
											title: __(
												'Width',
												'ultimate-addons-for-gutenberg'
											),
										} }
										borderRadius={ {
											value: ctaBorderRadius,
											label: 'ctaBorderRadius',
											title: __(
												'Radius',
												'ultimate-addons-for-gutenberg'
											),
										} }
										borderColor={ {
											value: ctaBorderColor,
											label: 'ctaBorderColor',
											title: __(
												'Color',
												'ultimate-addons-for-gutenberg'
											),
										} }
										borderHoverColor={ {
											value: ctaBorderhoverColor,
											label: 'ctaBorderhoverColor',
											title: __(
												'Hover Color',
												'ultimate-addons-for-gutenberg'
											),
										} }
										disableBottomSeparator={ true }
									/>
								) }
							</>
						</PanelBody>
					) }
			</>
		);
	};
	return (
		<>
			{ ( iconimgPosition === 'above-title' ||
				iconimgPosition === 'below-title' ) &&
				blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ imageIconPanel() }
						{ typographySettings() }
						{ seperatorSettings() }
						{ ctaSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ styleSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			<Suspense fallback={ lazyLoader() }>
				{ loadPrefixGoogleFonts }
				{ loadSubHeadGoogleFonts }
				{ loadCtaGoogleFonts }
				{ loadHeadGoogleFonts }
			</Suspense>
		</>
	);
};
export default React.memo( Settings );
