/**
 * BLOCK: Call To Action
 */

import { withSelect } from '@wordpress/data';
import CtaStyle from './inline-styles';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/call-to-action/render" */ './render' )
);
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/settings" */ './settings'
	)
);

const UAGBCallToAction = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-cta-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		const {
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			ctaTopPadding,
			ctaRightPadding,
			ctaBottomPadding,
			ctaLeftPadding,
		} = props.attributes;

		if ( ctaBtnVertPadding ) {
			if ( ! ctaTopPadding ) {
				props.setAttributes( { ctaTopPadding: ctaBtnVertPadding } );
			}
			if ( ! ctaBottomPadding ) {
				props.setAttributes( { ctaBottomPadding: ctaBtnVertPadding } );
			}
		}
		if ( ctaBtnHrPadding ) {
			if ( ! ctaRightPadding ) {
				props.setAttributes( { ctaRightPadding: ctaBtnHrPadding } );
			}
			if ( ! ctaLeftPadding ) {
				props.setAttributes( { ctaLeftPadding: ctaBtnHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-cta-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = CtaStyle( props );
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
} )( UAGBCallToAction );
