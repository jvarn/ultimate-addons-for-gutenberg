/**
 * BLOCK: WP Search
 */

import styling from './styling';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/wp-search/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/wp-search/render" */ './render' )
);

import { withSelect } from '@wordpress/data';

const UAGBWpSearchEdit = ( props ) => {
	const initState = {
		isFocused: 'false',
	};

	const [ state, setState ] = useState( initState );

	// componentDidMount.
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} ); // Pushing Style tag for this block css.

		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-wp-search-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	// componentDidUpdate.
	useEffect( () => {
		if ( ! props.isSelected && state.isFocused ) {
			setState( {
				isFocused: 'false',
			} );
		}
		if ( props.isSelected ) {
			setState( {
				isFocused: true,
			} );
		}

		const {
			vinputPaddingMobile,
			vinputPaddingTablet,
			vinputPaddingDesktop,
			hinputPaddingMobile,
			hinputPaddingTablet,
			hinputPaddingDesktop,
			paddingInputTop,
			paddingInputRight,
			paddingInputBottom,
			paddingInputLeft,
			paddingInputTopTablet,
			paddingInputBottomTablet,
			paddingInputRightTablet,
			paddingInputLeftTablet,
			paddingInputTopMobile,
			paddingInputRightMobile,
			paddingInputBottomMobile,
			paddingInputLeftMobile,
		} = props.attributes;

		if ( vinputPaddingDesktop ) {
			if ( ! paddingInputTop ) {
				props.setAttributes( {
					paddingInputTop: vinputPaddingDesktop,
				} );
			}
			if ( ! paddingInputBottom ) {
				props.setAttributes( {
					paddingInputBottom: vinputPaddingDesktop,
				} );
			}
		}
		if ( hinputPaddingDesktop ) {
			if ( ! paddingInputRight ) {
				props.setAttributes( {
					paddingInputRight: hinputPaddingDesktop,
				} );
			}
			if ( ! paddingInputLeft ) {
				props.setAttributes( {
					paddingInputLeft: hinputPaddingDesktop,
				} );
			}
		}
		if ( vinputPaddingTablet ) {
			if ( ! paddingInputTopTablet ) {
				props.setAttributes( {
					paddingInputTopTablet: vinputPaddingTablet,
				} );
			}
			if ( ! paddingInputBottomTablet ) {
				props.setAttributes( {
					paddingInputBottomTablet: vinputPaddingTablet,
				} );
			}
		}
		if ( hinputPaddingTablet ) {
			if ( ! paddingInputRightTablet ) {
				props.setAttributes( {
					paddingInputRightTablet: hinputPaddingTablet,
				} );
			}
			if ( ! paddingInputLeftTablet ) {
				props.setAttributes( {
					paddingInputLeftTablet: hinputPaddingTablet,
				} );
			}
		}
		if ( vinputPaddingMobile ) {
			if ( ! paddingInputTopMobile ) {
				props.setAttributes( {
					paddingInputTopMobile: vinputPaddingMobile,
				} );
			}
			if ( ! paddingInputBottomMobile ) {
				props.setAttributes( {
					paddingInputBottomMobile: vinputPaddingMobile,
				} );
			}
		}
		if ( hinputPaddingMobile ) {
			if ( ! paddingInputRightMobile ) {
				props.setAttributes( {
					paddingInputRightMobile: hinputPaddingMobile,
				} );
			}
			if ( ! paddingInputLeftMobile ) {
				props.setAttributes( {
					paddingInputLeftMobile: hinputPaddingMobile,
				} );
			}
		}
		const element = document.getElementById(
			'uagb-style-wp-search-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && 'undefined' !== typeof element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default withSelect( ( select ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);

	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( UAGBWpSearchEdit );
