/**
 * External dependencies
 */
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { ButtonGroup, Button, Tooltip, Dashicon } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

const SpacingControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const deviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );

	const defaultCache = {
		...props,
		resetDisabled: true,
	};

	const [ cachedValue, setCacheValue ] = useState( defaultCache );

	const {
		label,
		unit,
		mUnit,
		tUnit,
		valueBottom,
		valueLeft,
		valueRight,
		valueTop,
		valueBottomTablet,
		valueLeftTablet,
		valueRightTablet,
		valueTopTablet,
		valueBottomMobile,
		valueLeftMobile,
		valueRightMobile,
		valueTopMobile,
		link,
		setAttributes,
	} = props;

	useEffect( () => {
		let cachedValueUpdate = { ...cachedValue };

		if ( undefined !== props ) {
			cachedValueUpdate = { ...props, ...cachedValue };
			setCacheValue( cachedValueUpdate );
		}
	}, [] );

	useEffect( () => {
		const cachedValueUpdate = { ...cachedValue };
		const propsValue = { ...props, resetDisabled: true };
		if (
			JSON.stringify( cachedValueUpdate ) !== JSON.stringify( propsValue )
		) {
			cachedValueUpdate.resetDisabled = false;
			setCacheValue( cachedValueUpdate );
		}
	}, [ props ] );

	const [ displayResponsive, toggleResponsive ] = useState( false );

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );

	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
		toggleResponsive( ! displayResponsive );
	};

	const onChangeUnits = ( value ) => {
		if ( 'Mobile' === deviceType ) {
			setAttributes( { [ mUnit.label ]: value.unitValue } );
		} else if ( 'Tablet' === deviceType ) {
			setAttributes( { [ tUnit.label ]: value.unitValue } );
		} else {
			setAttributes( { [ unit.label ]: value.unitValue } );
		}
	};
	const changeLinkedValues = ( newValue, device ) => {
		switch ( device ) {
			case 'desktop':
				// code block
				setAttributes( { [ valueTop.label ]: newValue } );
				setAttributes( { [ valueRight.label ]: newValue } );
				setAttributes( { [ valueBottom.label ]: newValue } );
				setAttributes( { [ valueLeft.label ]: newValue } );
				break;
			case 'tablet':
				// code block
				setAttributes( { [ valueTopTablet.label ]: newValue } );
				setAttributes( { [ valueRightTablet.label ]: newValue } );
				setAttributes( { [ valueBottomTablet.label ]: newValue } );
				setAttributes( { [ valueLeftTablet.label ]: newValue } );
				break;
			case 'mobile':
				// code block
				setAttributes( { [ valueTopMobile.label ]: newValue } );
				setAttributes( { [ valueRightMobile.label ]: newValue } );
				setAttributes( { [ valueBottomMobile.label ]: newValue } );
				setAttributes( { [ valueLeftMobile.label ]: newValue } );
				break;
		}
	};
	const onChangeTopValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}

		if ( link.value ) {
			changeLinkedValues( newValue, device );
		}
		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueTop.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueTopTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueTopMobile.label ]: newValue } );
				break;
		}
	};

	const onChangeRightValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}
		if ( link.value ) {
			changeLinkedValues( newValue, device );
		}

		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueRight.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueRightTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueRightMobile.label ]: newValue } );
				break;
		}
	};

	const onChangeBottomValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}
		if ( link.value ) {
			changeLinkedValues( newValue, device );
		}

		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueBottom.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueBottomTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueBottomMobile.label ]: newValue } );
				break;
		}
	};

	const onChangeLeftValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}
		if ( link.value ) {
			changeLinkedValues( newValue, device );
		}
		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueLeft.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueLeftTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueLeftMobile.label ]: newValue } );
				break;
		}
	};

	let unitSizes = [
		{
			name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
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
	];
	if ( props.units ) {
		unitSizes = props.units;
	}
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

	const onUnitSizeClick = ( uSizes ) => {
		const items = [];
		uSizes.map( ( key ) =>
			items.push(
				<Tooltip
					text={ sprintf(
						/* translators: abbreviation for units */
						__( '%s units', 'ultimate-addons-for-gutenberg' ),
						key.name
					) }
				>
					<Button
						key={ key.unitValue }
						className={ 'uagb-range-control__units--' + key.name }
						isSmall
						isPrimary={
							( 'Desktop' === deviceType &&
								unit.value === key.unitValue ) ||
							( 'Mobile' === deviceType &&
								mUnit.value === key.unitValue ) ||
							( 'Tablet' === deviceType &&
								tUnit.value === key.unitValue )
						}
						isSecondary={
							unit.value !== key.unitValue ||
							mUnit.value !== key.unitValue ||
							tUnit.value !== key.unitValue
						}
						aria-pressed={
							( 'Desktop' === deviceType &&
								unit.value === key.unitValue ) ||
							( 'Mobile' === deviceType &&
								mUnit.value === key.unitValue ) ||
							( 'Tablet' === deviceType &&
								tUnit.value === key.unitValue )
						}
						data-device-type={ deviceType }
						aria-label={ sprintf(
							/* translators: abbreviation for units */
							__( '%s units', 'ultimate-addons-for-gutenberg' ),
							key.name
						) }
						onClick={ () => onChangeUnits( key ) }
					>
						{ key.unitValue }
					</Button>
				</Tooltip>
			)
		);

		return items;
	};

	let linkHtml = '';

	if ( link ) {
		linkHtml = (
			<span // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				className="uagb-spacing-control__link uagb-spacing-control-connected dashicons dashicons-admin-links "
				onClick={ () => {
					setAttributes( { [ link.label ]: false } );
				} }
			></span>
		);

		if ( ! link.value ) {
			linkHtml = (
				<span // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
					className="uagb-spacing-control__link uagb-spacing-control-disconnected dashicons dashicons-editor-unlink"
					onClick={ () => {
						onLinkClickHandler();
						setAttributes( { [ link.label ]: true } );
					} }
				></span>
			);
		}
	}
	const onLinkClickHandler = () => {
		let linkValue;
		const device = deviceType.toLowerCase();

		switch ( device ) {
			case 'desktop':
				linkValue = valueTop.value;
				break;
			case 'tablet':
				linkValue = valueTopTablet.value;
				break;
			case 'mobile':
				linkValue = valueTopMobile.value;
				break;
		}
		changeLinkedValues( linkValue, device );
	};
	const output = {};
	output.Desktop = (
		<>
			<div className="uagb-spacing-control__inputs">
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeTopValue( e, 'desktop' ) }
					value={ valueTop.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'desktop' ) }
					value={ valueRight.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'desktop' ) }
					value={ valueBottom.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'desktop' ) }
					value={ valueLeft.value }
					min={ 0 }
				/>
				{ linkHtml }
			</div>
		</>
	);
	output.Tablet = (
		<>
			<div className="uagb-spacing-control__inputs">
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeTopValue( e, 'tablet' ) }
					value={ valueTopTablet.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'tablet' ) }
					value={ valueRightTablet.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'tablet' ) }
					value={ valueBottomTablet.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'tablet' ) }
					value={ valueLeftTablet.value }
					min={ 0 }
				/>
				{ linkHtml }
			</div>
		</>
	);
	output.Mobile = (
		<>
			<div className="uagb-spacing-control__inputs">
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeTopValue( e, 'mobile' ) }
					value={ valueTopMobile.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'mobile' ) }
					value={ valueRightMobile.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'mobile' ) }
					value={ valueBottomMobile.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'mobile' ) }
					value={ valueLeftMobile.value }
					min={ 0 }
				/>
				{ linkHtml }
			</div>
		</>
	);

	const commonResponsiveHandler = () => {
		toggleResponsive( ! displayResponsive );
	};
	const resetValues = () => {
		const device = deviceType.toLowerCase();

		const cachedValueUpdate = { ...cachedValue };
		cachedValueUpdate.resetDisabled = true;
		setCacheValue( cachedValueUpdate );

		switch ( device ) {
			case 'desktop':
				onChangeTopValue( '', 'desktop', cachedValue.valueTop.value );
				onChangeRightValue(
					'',
					'desktop',
					cachedValue.valueRight.value
				);
				onChangeBottomValue(
					'',
					'desktop',
					cachedValue.valueBottom.value
				);
				onChangeLeftValue( '', 'desktop', cachedValue.valueLeft.value );
				setAttributes( { [ unit.label ]: cachedValue.unit.value } );
				break;
			case 'tablet':
				onChangeTopValue(
					'',
					'tablet',
					cachedValue.valueTopTablet.value
				);
				onChangeRightValue(
					'',
					'tablet',
					cachedValue.valueRightTablet.value
				);
				onChangeBottomValue(
					'',
					'tablet',
					cachedValue.valueBottomTablet.value
				);
				onChangeLeftValue(
					'',
					'tablet',
					cachedValue.valueLeftTablet.value
				);
				setAttributes( { [ tUnit.label ]: cachedValue.tUnit.value } );
				break;
			case 'mobile':
				onChangeTopValue(
					'',
					'mobile',
					cachedValue.valueTopMobile.value
				);
				onChangeRightValue(
					'',
					'mobile',
					cachedValue.valueRightMobile.value
				);
				onChangeBottomValue(
					'',
					'mobile',
					cachedValue.valueBottomMobile.value
				);
				onChangeLeftValue(
					'',
					'mobile',
					cachedValue.valueLeftMobile.value
				);
				setAttributes( { [ mUnit.label ]: cachedValue.mUnit.value } );
				break;
		}
	};
	return (
		<div className="components-base-control uagb-spacing-control">
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
											className={ `components-button components-tab-panel__tabs-item ${ itemClass }${
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
					<div className="uagb-control__actions">
						<Button
							className="uagb-reset"
							disabled={ cachedValue.resetDisabled }
							isSecondary
							isSmall
							onClick={ ( e ) => {
								e.preventDefault();
								resetValues();
							} }
						>
							<Dashicon icon="image-rotate" />
						</Button>
						<ButtonGroup
							className="uagb-spacing-control__units"
							aria-label={ __(
								'Select Units',
								'ultimate-addons-for-gutenberg'
							) }
						>
							{ onUnitSizeClick( unitSizes ) }
						</ButtonGroup>
					</div>
				</div>
				{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
				<div className="uagb-spacing-control__input-labels">
					<span className="uagb-spacing-control__number-label">
						{ __( 'Top', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label">
						{ __( 'Right', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label">
						{ __( 'Bottom', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label">
						{ __( 'Left', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label uagb-spacing-control__link-label"></span>
				</div>
			</div>
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</div>
	);
};

export default SpacingControl;
