/**
 * External dependencies
 */
import React from 'react';
import { __ } from '@wordpress/i18n';
import { ButtonGroup, Button, SelectControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';

const ResponsiveSelectControl = ( props ) => {
	const [ displayResponsive, toggleResponsive ] = useState( false );
	const { label, data, setAttributes, options } = props;

	const deviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );

	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
		toggleResponsive( ! displayResponsive );
	};

	const devicesSvgs = {
		desktop: (
			<svg
				width="8"
				height="7"
				viewBox="0 0 8 7"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z" />
			</svg>
		),
		tablet: (
			<svg
				width="6"
				height="7"
				viewBox="0 0 6 7"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z" />
			</svg>
		),
		mobile: (
			<svg
				width="4"
				height="7"
				viewBox="0 0 4 7"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z" />
			</svg>
		),
	};
	const devices = [
		{
			name: 'Desktop',
			title: devicesSvgs.desktop,
			itemClass: 'uagb-desktop-tab uagb-responsive-tabs',
		},
		{
			name: 'Tablet',
			title: devicesSvgs.tablet,
			itemClass: 'uagb-tablet-tab uagb-responsive-tabs',
		},
		{
			name: 'Mobile',
			key: 'mobile',
			title: devicesSvgs.mobile,
			itemClass: 'uagb-mobile-tab uagb-responsive-tabs',
		},
	];

	const output = {};
	output.Desktop = (
		<SelectControl
			value={ data.desktop.value }
			onChange={ ( value ) =>
				setAttributes( { [ data.desktop.label ]: value } )
			}
			options={ options.desktop }
		/>
	);
	output.Tablet = (
		<SelectControl
			value={ data.tablet.value }
			onChange={ ( value ) =>
				setAttributes( { [ data.tablet.label ]: value } )
			}
			options={ options.tablet || options.desktop }
		/>
	);
	output.Mobile = (
		<SelectControl
			value={ data.mobile.value }
			onChange={ ( value ) =>
				setAttributes( { [ data.mobile.label ]: value } )
			}
			options={ options.mobile || options.desktop }
		/>
	);
	const commonResponsiveHandler = () => {
		toggleResponsive( ! displayResponsive );
	};
	return (
		<div className="components-base-control uagb-responsive-select-control">
			<div className="uagb-size-type-field-tabs">
				<div className="uagb-control__header">
					<div className="uag-responsive-label-wrap">
						{ label && (
							<span className="uag-control-label">{ label }</span>
						) }
						{ ! displayResponsive && (
							<Button
								key="uag-responsive-common-button"
								className="uag-responsive-common-button"
								onClick={ commonResponsiveHandler }
							>
								{ devicesSvgs[ deviceType.toLowerCase() ] }
							</Button>
						) }
						{ displayResponsive && (
							<ButtonGroup
								className="uagb-range-control-responsive components-tab-panel__tabs"
								aria-label={ __(
									'Device',
									'ultimate-addons-for-gutenberg'
								) }
							>
								{ devices.map(
									( { name, key, title, itemClass } ) => (
										<Button
											key={ key }
											className={ `components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ${ itemClass }${
												name === deviceType
													? ' active-tab'
													: ''
											}` }
											aria-pressed={ deviceType === name }
											onClick={ () =>
												customSetPreviewDeviceType(
													name
												)
											}
										>
											{ title }
										</Button>
									)
								) }
							</ButtonGroup>
						) }
					</div>
				</div>
				{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
			</div>
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</div>
	);
};

export default ResponsiveSelectControl;
