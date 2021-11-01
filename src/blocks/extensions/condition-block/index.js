import { ToggleControl, SelectControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';

const { enableConditions } = uagb_blocks_info;

const UserConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		UAGLoggedIn,
		UAGLoggedOut,
		UAGDisplayConditions,
		UAGHideDesktop,
		UAGHideMob,
		UAGHideTab,
		UAGSystem,
		UAGBrowser,
		UAGUserRole,
	} = attributes;

	return (
		<>
			<SelectControl
				label={ __( 'Display Conditions' ) }
				value={ UAGDisplayConditions }
				onChange={ ( value ) =>
					setAttributes( { UAGDisplayConditions: value } )
				}
				options={ [
					{ value: 'none', label: __( 'None' ) },
					{ value: 'userstate', label: __( 'User State' ) },
					{
						value: 'responsiveVisibility',
						label: __( 'Responsive Visibility' ),
					},
					{ value: 'userRole', label: __( 'User Role' ) },
					{ value: 'browser', label: __( 'Browser' ) },
					{ value: 'os', label: __( 'Operating System' ) },
				] }
			/>
			{ UAGDisplayConditions === 'userstate' && (
				<>
					<ToggleControl
						label={ __( 'Hide From Logged In Users' ) }
						checked={ UAGLoggedIn }
						onChange={ () =>
							setAttributes( {
								UAGLoggedIn: ! attributes.UAGLoggedIn,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide From Logged Out Users' ) }
						checked={ UAGLoggedOut }
						onChange={ () =>
							setAttributes( {
								UAGLoggedOut: ! attributes.UAGLoggedOut,
							} )
						}
					/>
				</>
			) }
			{ UAGDisplayConditions === 'responsiveVisibility' && (
				<>
					<ToggleControl
						label={ __( 'Hide on Desktop' ) }
						checked={ UAGHideDesktop }
						onChange={ () =>
							setAttributes( {
								UAGHideDesktop: ! attributes.UAGHideDesktop,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide on Tablet' ) }
						checked={ UAGHideTab }
						onChange={ () =>
							setAttributes( {
								UAGHideTab: ! attributes.UAGHideTab,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide on Mobile' ) }
						checked={ UAGHideMob }
						onChange={ () =>
							setAttributes( {
								UAGHideMob: ! attributes.UAGHideMob,
							} )
						}
					/>
				</>
			) }
			{ UAGDisplayConditions === 'os' && (
				<>
					<SelectControl
						label={ __( 'Hide on Operating System' ) }
						value={ UAGSystem }
						onChange={ ( value ) =>
							setAttributes( { UAGSystem: value } )
						}
						options={ [
							{ value: '', label: __( 'None' ) },
							{ value: 'iphone', label: __( 'IOS' ) },
							{ value: 'android', label: __( 'Android' ) },
							{ value: 'windows', label: __( 'Windows' ) },
							{ value: 'open_bsd', label: __( 'OpenBSD' ) },
							{ value: 'sun_os', label: __( 'SunOS' ) },
							{ value: 'linux', label: __( 'Linux' ) },
							{ value: 'mac_os', label: __( 'Mac OS' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'browser' && (
				<>
					<SelectControl
						label={ __( 'Hide on Browser' ) }
						value={ UAGBrowser }
						onChange={ ( value ) =>
							setAttributes( { UAGBrowser: value } )
						}
						options={ [
							{ value: '', label: __( 'None' ) },
							{ value: 'ie', label: __( 'Internet Explorer' ) },
							{
								value: 'firefox',
								label: __( 'Mozilla Firefox' ),
							},
							{ value: 'chrome', label: __( 'Google Chrome' ) },
							{ value: 'opera_mini', label: __( 'Opera Mini' ) },
							{ value: 'opera', label: __( 'Opera' ) },
							{ value: 'safari', label: __( 'Safari' ) },
							{ value: 'edge', label: __( 'Microsoft Edge' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'userRole' && (
				<>
					<SelectControl
						label={ __( 'Hide for User Role' ) }
						value={ UAGUserRole }
						onChange={ ( value ) =>
							setAttributes( { UAGUserRole: value } )
						}
						options={ uagb_blocks_info.user_role }
					/>
				</>
			) }
		</>
	);
};

const AdvancedControlsBlock = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { isSelected } = props;

		const blockName = props.name;

		const excludeBlocks = ['core/archives','core/calendar','core/latest-comments','core/tag-cloud','core/rss'];

		const customBlocks = uagb_blocks_info.uagb_enable_extensions_for_blocks;
		const blockPrefix = blockName.substring( 0, blockName.indexOf( '/' ) + 1 );

		return (
			<>
				<BlockEdit {...props} />
				{isSelected && ! blockName.includes( 'uagb/' ) && ( blockName.includes( 'core/' ) || ( Array.isArray( customBlocks ) && 0 !== customBlocks.length && ( customBlocks.includes( blockName ) || customBlocks.includes( blockPrefix ) ) ) ) && ! excludeBlocks.includes( blockName ) &&
				<InspectorControls>
					<PanelBody
						title={ __( 'Display Conditions', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ false }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						<p className="components-base-control__help">{ __( "Below UAG settings will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }</p>
						{ UserConditionOptions( props ) }
					</PanelBody>
				</InspectorControls>
				}
			</>
		);
	};
}, 'AdvancedControlsBlock' );

function ApplyExtraClass( extraProps, blockType, attributes ) {
	const {
		UAGHideDesktop,
		UAGHideTab,
		UAGHideMob,
		UAGDisplayConditions,
	} = attributes;

	if ( 'responsiveVisibility' === UAGDisplayConditions ) {
		if ( UAGHideDesktop ) {
			extraProps.className = extraProps.className + ' uag-hide-desktop';
		}

		if ( UAGHideTab ) {
			extraProps.className = extraProps.className + ' uag-hide-tab';
		}

		if ( UAGHideMob ) {
			extraProps.className = extraProps.className + ' uag-hide-mob';
		}
	}

	return extraProps;
}

if ( 'enabled' === enableConditions ) {
	//For UAG Blocks.
	addFilter(
		'uag_advance_tab_content',
		'uagb/advanced-control-block',
		function ( content, props ) {
			if ( ! props ) {
				return content;
			}

			const { isSelected, name } = props;

			const excludeBlocks = ['uagb/buttons-child','uagb/faq-child', 'uagb/icon-list-child', 'uagb/social-share-child', 'uagb/restaurant-menu-child'];

			if( isSelected && ! excludeBlocks.includes( name ) ) {
				return (
					<PanelBody
						title={ __(
							'Display Conditions',
							'ultimate-addons-for-gutenberg'
						) }
						initialOpen={ false }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						<p className="components-base-control__help">
							{ __(
								"Below setting will only take effect once you are on the live page, and not while you're editing.",
								'ultimate-addons-for-gutenberg'
							) }
						</p>
						{ UserConditionOptions( props ) }
					</PanelBody>
				);
			}
		}
	);
	//For Non-UAG Blocks.
	addFilter(
		'editor.BlockEdit',
		'uagb/advanced-control-block',
		AdvancedControlsBlock
	);

	addFilter(
		'blocks.getSaveContent.extraProps',
		'uagb/apply-extra-class',
		ApplyExtraClass
	);
}

// Testing Presets Filter
addFilter(
	'uag_advanced_heading_presets',
	'uagb/advanced-heading-presets',
	function ( content ) {
		console.log(content);
		let presets = [
			{
				value: 'preset-3',
				label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
				attributes: [
					{ label: 'headingColor', value: '#FFA500' },
					{ label: 'separatorColor', value: '#FFA500' },
					{ label: 'subHeadingColor', value: '#FFA500' },
				],
				icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z\"/></svg>',
			},
		];
		return content.concat(presets);
	}
);