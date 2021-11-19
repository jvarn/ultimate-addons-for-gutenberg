/**
 * BLOCK: Columns - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import attributes from './attributes';
import renderSVG from '@Controls/renderIcon';

import { RichText } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				align,
				textAlign,
				iconPosition,
				icon,
				heading,
				prefix,
				link,
				linkTarget,
			} = props.attributes;

			const target = linkTarget ? '_blank' : '';

			return (
				<div
					className={ classnames(
						className,
						'uagb-marketing-btn__outer-wrap',
						`uagb-marketing-btn__align-${ align }`,
						`uagb-marketing-btn__align-text-${ textAlign }`,
						`uagb-marketing-btn__icon-${ iconPosition }`
					) }
					id={ `uagb-marketing-btn-${ block_id }` }
				>
					<div className="uagb-marketing-btn__wrap">
						<a
							href={ link }
							className="uagb-marketing-btn__link"
							target={ target }
							rel="noopener noreferrer"
						>
							<div className="uagb-marketing-btn__title-wrap">
								{ '' != icon && (
									<div className="uagb-marketing-btn__icon-wrap">
										{ renderSVG( icon ) }
									</div>
								) }
								<RichText.Content
									value={ heading }
									tagName="h6"
									className="uagb-marketing-btn__title"
								/>
							</div>
							<div className="uagb-marketing-btn__prefix-wrap">
								<RichText.Content
									value={ prefix }
									tagName="p"
									className="uagb-marketing-btn__prefix"
								/>
							</div>
						</a>
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {

			const { attributes, className } = props

			const {
				block_id,
				align,
				textAlign,
				iconPosition,
				icon,
				heading,
				prefix,
				link,
				linkTarget,
				titleTag
			} = props.attributes

			let target = ( linkTarget ) ? "_blank" : ""

			return (
				<div className={ classnames(
					className,
					"uagb-marketing-btn__outer-wrap",
					`uagb-marketing-btn__align-${ align }`,
					`uagb-marketing-btn__align-text-${ textAlign }`,
					`uagb-marketing-btn__icon-${ iconPosition }`,
					`uagb-block-${ block_id }`
				) }>
					<div className="uagb-marketing-btn__wrap">
						<a href={ link } className="uagb-marketing-btn__link" target={ target } rel ="noopener noreferrer">
							<div className="uagb-marketing-btn__title-wrap">
								{ "" != icon &&
									<div className="uagb-marketing-btn__icon-wrap">
										{ renderSVG( icon ) }
									</div>
								}
								<RichText.Content
									value={ heading }
									tagName={ titleTag }
									className='uagb-marketing-btn__title'
								/>
							</div>
							<div className="uagb-marketing-btn__prefix-wrap">
								<RichText.Content
									value={ prefix }
									tagName='p'
									className='uagb-marketing-btn__prefix'
								/>
							</div>
						</a>
					</div>
				</div>
			)
		}
	},
];

export default deprecated;
