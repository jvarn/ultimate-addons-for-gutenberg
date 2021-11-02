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
		
		const presets = [
			{
				value: 'preset-3',
				label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
				attributes: [
					{ label: 'headingColor', value: '#FFA500' },
					{ label: 'separatorColor', value: '#FFA500' },
					{ label: 'subHeadingColor', value: '#FFA500' },
				],
				icon: '<svg x="0px" y="0px" viewBox="0 0 84.2 81"><path classname="st0" d="M0.3,77.4V4c0-2,1.6-3.5,3.5-3.5h76.9c2,0,3.5,1.6,3.5,3.5v73.5c0,2-1.6,3.5-3.5,3.5H3.9 C1.9,81,0.4,79.4,0.3,77.4z M3.9,2.2C2.9,2.2,2.1,3,2.1,4v73.5c0,1,0.8,1.8,1.8,1.8h76.9c1,0,1.8-0.8,1.8-1.8V4 c0-1-0.8-1.8-1.8-1.8H3.9z"></path><g><path classname="st0" d="M14.8,28.4c0-1.2,0.8-2.1,1.8-2.1h50.9c1,0,1.8,0.9,1.8,2.1v-0.6c0,1.2-0.8,2.1-1.8,2.1H16.6c-1,0-1.8-0.9-1.8-2.1V28.4L14.8,28.4z"></path></g><g><path classname="st0" d="M14.8,40.8c0-1.2,0.8-2.1,1.8-2.1h50.9c1,0,1.8,0.9,1.8,2.1v-0.6c0,1.2-0.8,2.1-1.8,2.1H16.6c-1,0-1.8-0.9-1.8-2.1V40.8L14.8,40.8z"></path></g><g><path classname="st0" d="M14.8,53.2c0-1.2,0.8-2.1,1.8-2.1h50.9c1,0,1.8,0.9,1.8,2.1v-0.6c0,1.2-0.8,2.1-1.8,2.1H16.6c-1,0-1.8-0.9-1.8-2.1V53.2L14.8,53.2z"></path></g></svg>',
			},
		];
		return content.concat( presets );
	}
);