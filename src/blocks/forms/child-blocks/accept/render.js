import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes } = props;

	const {
		block_id,
		acceptRequired,
		acceptText,
		showLink,
		linkLabel,
		link,
		linkInNewTab,
	} = attributes;

	const isRequired = acceptRequired
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';
	const target = linkInNewTab
		? __( '_blank', 'ultimate-addons-for-gutenberg' )
		: __( '_self', 'ultimate-addons-for-gutenberg' );

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-accept-wrap',
					'uagb-forms-field-set',
					`uagb-block-${ block_id }`
				) }
			>
				{ showLink && (
					<div className="uagb-forms-accept-privacy-link">
						<a
							href={ link }
							target={ target }
							rel="noopener noreferrer"
						>
							{ ' ' }
							{ linkLabel }{ ' ' }
						</a>
					</div>
				) }
				<input
					type="checkbox"
					id={ `uagb-forms-accept-${ block_id }` }
					className="uagb-forms-checkbox"
					name={ block_id }
					required={ acceptRequired }
					value="Agree"
				/>
				<label
					name={ block_id }
					htmlFor={ `uagb-forms-accept-${ block_id }` }
					className={ `uagb-forms-accept-label ${ isRequired }` }
				>
					{ acceptText }
				</label>
				<br></br>
			</div>
		</>
	);
};

export default React.memo( Render );