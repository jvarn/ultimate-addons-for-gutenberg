/**
 * BLOCK: Content Timeline Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import '.././style.scss';
import './style.scss';
import save from './save';
import attributes from './attributes';
import edit from './edit';
import deprecated from './deprecated';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/content-timeline-child', {
	title: __( 'Content Timeline Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'The Timeline block lets you create beautiful timelines on your website.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.content_timeline,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/content-timeline' ],
	keywords: [
		__( 'Content Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	edit,
	save,
	deprecated,
} );
