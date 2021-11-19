import styling from './styling';

import React, { lazy, useEffect, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';

import { withSelect } from '@wordpress/data';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/blockquote/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/blockquote/render" */ './render' )
);

const UAGBBlockQuote = ( props ) => {
	useEffect( () => {
		
		const element = document.getElementById(
			'uagb-blockquote-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		props.setAttributes( { classMigrate: true } );
		const {
			tweetBtnVrPadding,
			tweetBtnHrPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
		} = props.attributes;

		if ( tweetBtnVrPadding ) {
			if ( ! paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: tweetBtnVrPadding } );
			}
			if ( ! paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: tweetBtnVrPadding } );
			}
		}
		if ( tweetBtnHrPadding ) {
			if ( ! paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: tweetBtnHrPadding } );
			}
			if ( ! paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: tweetBtnHrPadding } );
			}
		}
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-blockquote-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

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
} )( UAGBBlockQuote );
