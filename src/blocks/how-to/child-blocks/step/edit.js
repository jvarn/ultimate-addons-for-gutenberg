/**
 * BLOCK: How-to Step - Edit
 */

import React, { lazy, useEffect, Suspense } from 'react';

import lazyLoader from '@Controls/lazy-loader';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/how-to/step-settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/how-to/step-render" */ './render' )
);

const UAGBFormsNameEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-how-to-name-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default UAGBFormsNameEdit;