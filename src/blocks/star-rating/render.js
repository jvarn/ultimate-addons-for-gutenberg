// Import block dependencies and components.
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	// Setup the attributes
	const {
		className,
		setAttributes,
		deviceType,
		attributes: { rating, range, layout, title },
	} = props;

	const rangeValue = parseInt( range );
	const stars = [];
	for ( let i = 1; i <= rangeValue; i++ ) {
		stars.push(
			<span key={ i } className="uag-star">
				★
			</span>
		);
	}

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uag-star-rating__layout-${ layout }`,
				'uag-star-rating__wrapper',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<RichText
				tagName="p"
				placeholder={ __(
					'Write a title',
					'ultimate-addons-for-gutenberg'
				) }
				value={ title }
				className="uag-star-rating__title"
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>
			<div className="uag-star-rating" title={ `${ rating }/${ range }` }>
				{ stars }
			</div>
		</div>
	);
};
export default React.memo( Render );
