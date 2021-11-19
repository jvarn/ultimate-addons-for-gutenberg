import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import {
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import UAGImage from '@Components/image';
import SpacingControl from '@Components/spacing-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { getImageSize } from '@Utils/Helpers';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	DateTimePicker,
} from '@wordpress/components';

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];
export const removeFromArray = ( arr, removedElems ) =>
	arr.filter( ( a ) =>
		Array.isArray( removedElems )
			? ! removedElems.includes( a )
			: a !== removedElems
	);
const Settings = ( props ) => {
	props = props.parentProps;
	// Setup the attributes
	const { attributes, setAttributes } = props;

	const {
		enableSchema,
		itemType,
		itemSubtype,
		sku,
		identifier,
		identifierType,
		offerType,
		offerCurrency,
		offerStatus,
		offerPrice,
		offerExpiry,
		datepublish,
		ctaLink,
		ctaTarget,
		brand,
		headingTag,
		mainimage,
		imgSize,
		showFeature,
		showAuthor,
		starColor,
		descColor,
		titleColor,
		contentColor,
		headFontFamily,
		headFontWeight,
		headFontSizeType,
		headFontSize,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeightType,
		headLineHeight,
		headLineHeightMobile,
		headLineHeightTablet,
		headLoadGoogleFonts,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadLineHeight,
		subHeadLineHeightType,
		subHeadLineHeightMobile,
		subHeadLineHeightTablet,
		subHeadLoadGoogleFonts,
		contentLoadGoogleFonts,
		contentFontFamily,
		contentFontWeight,
		contentFontSizeType,
		contentLineHeightType,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentLineHeight,
		contentLineHeightTablet,
		contentLineHeightMobile,
		topPadding,
		bottomPadding,
		rightPadding,
		leftPadding,
		//Mobile
		paddingTopMobile,
		paddingBottomMobile,
		paddingRightMobile,
		paddingLeftMobile,
		//Tablet
		paddingTopTablet,
		paddingBottomTablet,
		paddingRightTablet,
		paddingLeftTablet,
		spacingLink,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		authorColor,
		summaryColor,
		starActiveColor,
		starOutlineColor,
		enableDescription,
		enableImage,
		overallAlignment,
		isbn,
		bookAuthorName,
		reviewPublisher,
		provider,
		appCategory,
		operatingSystem,
		datecreated,
		directorname,
		headTransform,
		headDecoration,
		subHeadTransform,
		subHeadDecoration,
		contentTransform,
		contentDecoration,
		headFontStyle,
		subHeadFontStyle,
		contentFontStyle,
	} = attributes;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { mainimage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { mainimage: null } );
			return;
		}

		setAttributes( { mainimage: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { mainimage: '' } );
	};

	let loadContentGoogleFonts;
	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadingGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const sconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadingGoogleFonts = (
			<WebfontLoader config={ sconfig }></WebfontLoader>
		);
	}

	if ( contentLoadGoogleFonts === true ) {
		const cconfig = {
			google: {
				families: [
					contentFontFamily +
						( contentFontWeight ? ':' + contentFontWeight : '' ),
				],
			},
		};

		loadContentGoogleFonts = (
			<WebfontLoader config={ cconfig }></WebfontLoader>
		);
	}

	const toggleTarget = () => {
		setAttributes( { ctaTarget: ! ctaTarget } );
	};

	const authorSettings = () => {
		return (
			<PanelBody
				title={ __( 'Author', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<>
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ authorColor }
						onColorChange={ ( value ) =>
							setAttributes( { authorColor: value } )
						}
					/>
				</>
			</PanelBody>
		);
	};

	const contentSettings = () => {
		return (
			<PanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<>
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ contentColor }
						onColorChange={ ( value ) =>
							setAttributes( { contentColor: value } )
						}
					/>
				</>
			</PanelBody>
		);
	};

	const summarySettings = () => {
		return (
			<PanelBody
				title={ __( 'Summary', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ summaryColor }
					onColorChange={ ( value ) =>
						setAttributes( { summaryColor: value } )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ props.attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: contentLoadGoogleFonts,
						label: 'contentLoadGoogleFonts',
					} }
					fontFamily={ {
						value: contentFontFamily,
						label: 'contentFontFamily',
					} }
					fontWeight={ {
						value: contentFontWeight,
						label: 'contentFontWeight',
					} }
					fontStyle={ {
						value: contentFontStyle,
						label: 'contentFontStyle',
					} }
					transform={ {
						value: contentTransform,
						label: 'contentTransform',
					} }
					decoration={ {
						value: contentDecoration,
						label: 'contentDecoration',
					} }
					fontSizeType={ {
						value: contentFontSizeType,
						label: 'contentFontSizeType',
					} }
					fontSize={ {
						value: contentFontSize,
						label: 'contentFontSize',
					} }
					fontSizeMobile={ {
						value: contentFontSizeMobile,
						label: 'contentFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: contentFontSizeTablet,
						label: 'contentFontSizeTablet',
					} }
					lineHeightType={ {
						value: contentLineHeightType,
						label: 'contentLineHeightType',
					} }
					lineHeight={ {
						value: contentLineHeight,
						label: 'contentLineHeight',
					} }
					lineHeightMobile={ {
						value: contentLineHeightMobile,
						label: 'contentLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: contentLineHeightTablet,
						label: 'contentLineHeightTablet',
					} }
				/>
			</PanelBody>
		);
	};

	const starSettings = () => {
		return (
			<PanelBody
				title={ __( 'Star', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Active Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ starColor }
					onColorChange={ ( value ) =>
						setAttributes( { starColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Inactive Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ starActiveColor }
					onColorChange={ ( value ) =>
						setAttributes( { starActiveColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Outline Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ starOutlineColor }
					onColorChange={ ( value ) =>
						setAttributes( { starOutlineColor: value } )
					}
				/>
			</PanelBody>
		);
	};

	const titleSettings = () => {
		return (
			<PanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor }
					onColorChange={ ( value ) =>
						setAttributes( { titleColor: value } )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ props.attributes }
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
					transform={ {
						value: headTransform,
						label: 'headTransform',
					} }
					decoration={ {
						value: headDecoration,
						label: 'headDecoration',
					} }
					fontSizeType={ {
						value: headFontSizeType,
						label: 'headFontSizeType',
					} }
					fontSize={ { value: headFontSize, label: 'headFontSize' } }
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
				/>
			</PanelBody>
		);
	};

	const descriptionSettings = () => {
		return (
			<PanelBody
				title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ enableDescription === true && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ descColor }
							onColorChange={ ( value ) =>
								setAttributes( { descColor: value } )
							}
						/>
						<TypographyControl
							label={ __(
								'Typography',
								'ultimate-addons-for-gutenberg'
							) }
							attributes={ props.attributes }
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
							transform={ {
								value: subHeadTransform,
								label: 'subHeadTransform',
							} }
							decoration={ {
								value: subHeadDecoration,
								label: 'subHeadDecoration',
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
						/>
					</>
				) }
			</PanelBody>
		);
	};

	const schemaSettings = () => {
		if ( true === enableSchema ) {
			return (
				<PanelBody
					title={ __( 'Schema', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __(
							'Item Type',
							'ultimate-addons-for-gutenberg'
						) }
						value={ itemType }
						onChange={ ( value ) => {
							setAttributes( { itemType: value } );
							if ( itemType === 'Movie' ) {
								setAttributes( { enableImage: true } );
							}
							if ( itemType === 'Course' ) {
								setAttributes( { enableDescription: true } );
							}
							if (
								! subtypeCategories.hasOwnProperty(
									itemType
								) ||
								! subtypeCategories[ itemType ].includes(
									itemSubtype
								)
							) {
								setAttributes( { itemSubtype: 'None' } );
							}
						} }
						options={ [
							{
								value: 'Book',
								label: __(
									'Book',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'Course',
								label: __(
									'Course',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'Movie',
								label: __(
									'Movie',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'Product',
								label: __(
									'Product',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'SoftwareApplication',
								label: __(
									'Software Application',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
					{ subtypeCategories.hasOwnProperty( itemType ) && (
						<SelectControl
							label={ __(
								'Item Subtype',
								'ultimate-addons-for-gutenberg'
							) }
							options={ [
								{
									value: 'none',
									label: __(
										'None',
										'ultimate-addons-for-gutenberg'
									),
								},
								...subtypeCategories[ itemType ],
							] }
							value={ itemSubtype }
							onChange={ ( value ) =>
								setAttributes( {
									itemSubtype: value,
								} )
							}
						/>
					) }

					{ itemTypeExtras }
					<TextControl
						label={ __(
							'Review Publisher',
							'ultimate-addons-for-gutenberg'
						) }
						value={ reviewPublisher }
						onChange={ ( value ) =>
							setAttributes( { reviewPublisher: value } )
						}
						help={ __(
							'Note: This is a mandatory field for the Review schema',
							'ultimate-addons-for-gutenberg'
						) }
					/>
					<h2>
						{ __(
							'Date Of Publish',
							'ultimate-addons-for-gutenberg'
						) }
					</h2>
					<DateTimePicker
						className="uagb-date-picker"
						currentDate={ datepublish }
						onChange={ ( value ) =>
							setAttributes( { datepublish: value } )
						}
						is12Hour={ true }
					/>
					{ [ 'Product', 'SoftwareApplication' ].includes(
						itemType
					) && (
						<>
							{ [ 'Product' ].includes( itemType ) && (
								<>
									<TextControl
										label={ __(
											'Brand',
											'ultimate-addons-for-gutenberg'
										) }
										value={ brand }
										onChange={ ( value ) =>
											setAttributes( { brand: value } )
										}
									/>
									<TextControl
										label={ __(
											'SKU',
											'ultimate-addons-for-gutenberg'
										) }
										value={ sku }
										onChange={ ( value ) =>
											setAttributes( { sku: value } )
										}
									/>
									<TextControl
										label={ __(
											'Identifier',
											'ultimate-addons-for-gutenberg'
										) }
										value={ identifier }
										onChange={ ( value ) =>
											setAttributes( {
												identifier: value,
											} )
										}
									/>
									<SelectControl
										label={ __(
											'Identifier Type',
											'ultimate-addons-for-gutenberg'
										) }
										value={ identifierType }
										options={ [
											'nsn',
											'mpn',
											'gtin8',
											'gtin12',
											'gtin13',
											'gtin14',
											'gtin',
										].map( ( a ) => ( {
											label: a.toUpperCase(),
											value: a,
										} ) ) }
										onChange={ ( value ) =>
											setAttributes( {
												identifierType: value,
											} )
										}
									/>
								</>
							) }
							{ [ 'Product', 'SoftwareApplication' ].includes(
								itemType
							) && (
								<>
									<TextControl
										label={ __(
											'Offer Currency',
											'ultimate-addons-for-gutenberg'
										) }
										value={ offerCurrency }
										onChange={ ( value ) =>
											setAttributes( {
												offerCurrency: value,
											} )
										}
									/>
								</>
							) }
							{ offerType === 'Offer' && (
								<>
									<TextControl
										label={ __(
											'Offer Price',
											'ultimate-addons-for-gutenberg'
										) }
										value={ offerPrice }
										onChange={ ( value ) =>
											setAttributes( {
												offerPrice: value,
											} )
										}
										help={ __(
											'Note: This is a mandatory field for the Review schema',
											'ultimate-addons-for-gutenberg'
										) }
									/>
									<SelectControl
										label={ __( 'Offer Status' ) }
										value={ offerStatus }
										options={ [
											{
												value:
													'https://schema.org/Discontinued',
												label: __(
													'Discontinued',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/InStock',
												label: __(
													'In Stock',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/InStoreOnly',
												label: __(
													'In Store Only',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/LimitedAvailability',
												label: __(
													'Limited Availability',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/OnlineOnly',
												label: __(
													'Online Only',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/OutOfStock',
												label: __(
													'Out Of Stock',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/PreOrder',
												label: __(
													'Pre Order',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/PreSale',
												label: __(
													'Pre Sale',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value:
													'https://schema.org/SoldOut',
												label: __(
													'Sold Out',
													'ultimate-addons-for-gutenberg'
												),
											},
										] }
										onChange={ ( value ) =>
											props.setAttributes( {
												offerStatus: value,
											} )
										}
									/>
									<h2>
										{ __(
											'Price Valid Until',
											'ultimate-addons-for-gutenberg'
										) }
									</h2>
									<DateTimePicker
										className="uagb-date-picker"
										currentDate={ offerExpiry }
										onChange={ ( value ) =>
											setAttributes( {
												offerExpiry: value,
											} )
										}
										is12Hour={ true }
									/>
								</>
							) }
						</>
					) }
				</PanelBody>
			);
		}
	};

	const overallPadding = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPadding,
						label: 'topPadding',
					} }
					valueRight={ {
						value: rightPadding,
						label: 'rightPadding',
					} }
					valueBottom={ {
						value: bottomPadding,
						label: 'bottomPadding',
					} }
					valueLeft={ {
						value: leftPadding,
						label: 'leftPadding',
					} }
					valueTopTablet={ {
						value: paddingTopTablet,
						label: 'paddingTopTablet',
					} }
					valueRightTablet={ {
						value: paddingRightTablet,
						label: 'paddingRightTablet',
					} }
					valueBottomTablet={ {
						value: paddingBottomTablet,
						label: 'paddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: paddingLeftTablet,
						label: 'paddingLeftTablet',
					} }
					valueTopMobile={ {
						value: paddingTopMobile,
						label: 'paddingTopMobile',
					} }
					valueRightMobile={ {
						value: paddingRightMobile,
						label: 'paddingRightMobile',
					} }
					valueBottomMobile={ {
						value: paddingBottomMobile,
						label: 'paddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: paddingLeftMobile,
						label: 'paddingLeftMobile',
					} }
					unit={ {
						value: paddingUnit,
						label: 'paddingUnit',
					} }
					mUnit={ {
						value: mobilePaddingUnit,
						label: 'mobilePaddingUnit',
					} }
					tUnit={ {
						value: tabletPaddingUnit,
						label: 'tabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLink,
						label: 'spacingLink',
					} }
				/>
			</PanelBody>
		);
	};

	const generalSettings = () => {
		if ( mainimage && mainimage.sizes ) {
			imageSizeOptions = getImageSize( mainimage.sizes );
		}

		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Review Title Tag',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: headingTag,
						label: 'headingTag',
					} }
					options={ [
						{
							value: 'h1',
							label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h2',
							label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h3',
							label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h4',
							label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h5',
							label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h6',
							label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<ToggleControl
					label={ __(
						'Enable Schema Support',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableSchema }
					onChange={ () =>
						setAttributes( { enableSchema: ! enableSchema } )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Review Description',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableDescription }
					onChange={ () =>
						setAttributes( {
							enableDescription: ! enableDescription,
						} )
					}
					help={ __(
						'Note: This is a mandatory field for the Review schema.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ToggleControl
					label={ __(
						'Show Review Author',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showAuthor }
					onChange={ () =>
						setAttributes( { showAuthor: ! showAuthor } )
					}
					help={ __(
						'Note: This is a mandatory field for the Review schema.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ToggleControl
					label={ __(
						'Show Ratings',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showFeature }
					onChange={ () =>
						setAttributes( { showFeature: ! showFeature } )
					}
					help={ __(
						'Note: Add feature/section ratings separately.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ToggleControl
					label={ __(
						'Show Review Image',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableImage }
					onChange={ () =>
						setAttributes( { enableImage: ! enableImage } )
					}
					help={ __(
						'Note: This is a mandatory field for the Review schema.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<h2>{ __( 'Link' ) }</h2>
				<TextControl
					value={ ctaLink }
					onChange={ ( value ) =>
						setAttributes( { ctaLink: value } )
					}
				/>
				<ToggleControl
					label={ __(
						'Open in new window',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ ctaTarget }
					onChange={ toggleTarget }
				/>
			</PanelBody>
		);
	};
	const imageSettings = () => {
		return (
			<PanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<>
					<UAGImage
						onSelectImage={ onSelectImage }
						backgroundImage={ mainimage }
						onRemoveImage={ onRemoveImage }
					/>
					{ mainimage &&
						mainimage !== 'null' &&
						mainimage.url !== 'null' &&
						mainimage.url !== '' && (
							<SelectControl
								label={ __(
									'Size',
									'ultimate-addons-for-gutenberg'
								) }
								options={ imageSizeOptions }
								value={ imgSize }
								onChange={ ( value ) =>
									setAttributes( { imgSize: value } )
								}
							/>
						) }
				</>
			</PanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls key="index">
				<AlignmentToolbar
					value={ overallAlignment }
					onChange={ ( value ) =>
						setAttributes( { overallAlignment: value } )
					}
				/>
			</BlockControls>
		);
	};

	let itemTypeExtras;

	const subtypeCategories = {
		Book: [
			{
				value: 'Audiobook',
				label: __( 'Audio book', 'ultimate-addons-for-gutenberg' ),
			},
		],
		Product: [
			{
				value: 'IndividualProduct',
				label: __(
					'Individual Product',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'ProductCollection',
				label: __(
					'Product Collection',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'ProductGroup',
				label: __( 'Product Group', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'ProductModel',
				label: __( 'Product Model', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'SomeProducts',
				label: __( 'Some Products', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'Vehicle',
				label: __( 'Vehicle', 'ultimate-addons-for-gutenberg' ),
			},
		],
		SoftwareApplication: [
			{
				value: 'MobileApplication',
				label: __(
					'Mobile Application',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'VideoGame',
				label: __( 'Video Game', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'WebApplication',
				label: __( 'Web Application', 'ultimate-addons-for-gutenberg' ),
			},
		],
	};

	switch ( itemType ) {
		default:
			//empty
			break;
		case 'Book':
			itemTypeExtras = (
				<>
					<TextControl
						label={ __( 'ISBN', 'ultimate-addons-for-gutenberg' ) }
						value={ isbn }
						onChange={ ( value ) =>
							setAttributes( { isbn: value } )
						}
						help={ __(
							'Note: This is a mandatory field for the Review schema',
							'ultimate-addons-for-gutenberg'
						) }
					/>
					<TextControl
						label={ __(
							'Book author name',
							'ultimate-addons-for-gutenberg'
						) }
						value={ bookAuthorName }
						onChange={ ( value ) =>
							setAttributes( { bookAuthorName: value } )
						}
						help={ __(
							'Note: This is a mandatory field for the Review schema',
							'ultimate-addons-for-gutenberg'
						) }
					/>
				</>
			);
			break;

		case 'Course':
			itemTypeExtras = (
				<>
					<TextControl
						label={ __(
							'Provider',
							'ultimate-addons-for-gutenberg'
						) }
						value={ provider }
						onChange={ ( value ) =>
							setAttributes( { provider: value } )
						}
					/>
				</>
			);

			break;

		case 'SoftwareApplication':
			itemTypeExtras = (
				<>
					<TextControl
						label={ __(
							'Application Category',
							'ultimate-addons-for-gutenberg'
						) }
						value={ appCategory }
						onChange={ ( value ) =>
							setAttributes( { appCategory: value } )
						}
					/>
					<TextControl
						label={ __(
							'Operating System',
							'ultimate-addons-for-gutenberg'
						) }
						value={ operatingSystem }
						onChange={ ( value ) =>
							setAttributes( { operatingSystem: value } )
						}
					/>
				</>
			);
			break;

		case 'Movie':
			itemTypeExtras = (
				<>
					<TextControl
						label={ __(
							'Director Name',
							'ultimate-addons-for-gutenberg'
						) }
						value={ directorname }
						onChange={ ( value ) =>
							setAttributes( { directorname: value } )
						}
					/>
					<h2>{ __( 'Date of create' ) }</h2>
					<DateTimePicker
						currentDate={ datecreated }
						onChange={ ( value ) =>
							setAttributes( { datecreated: value } )
						}
						is12Hour={ true }
					/>
				</>
			);
			break;
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
						{ enableImage === true && imageSettings() }
						{ schemaSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ titleSettings() }
						{ enableDescription && descriptionSettings() }
						{ showAuthor === true && authorSettings() }
						{ showFeature === true && contentSettings() }
						{ summarySettings() }
						{ starSettings() }
						{ overallPadding() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadHeadingGoogleFonts }
			{ loadSubHeadingGoogleFonts }
			{ loadContentGoogleFonts }
		</Suspense>
	);
};
export default React.memo( Settings );
