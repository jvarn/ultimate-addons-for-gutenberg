/**
 * BLOCK: Columns
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import deprecated from './deprecated';
import variations from './variations';
import './style.scss';
import save from './save';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/columns', {
	title: __( 'Advanced Columns', 'ultimate-addons-for-gutenberg' ),
	description:  __( 'This block gives you advanced options to insert a number of columns within a single row.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.columns,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'columns', 'ultimate-addons-for-gutenberg' ),
		__( 'rows', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	variations,
	edit,
	getEditWrapperProps( attribute ) {
		return {
			'data-align': attribute.align,
			'data-valign': attribute.vAlign,
		};
	},
	supports: {
		// Add EditorsKit block navigator toolbar
		editorsKitBlockNavigator: true,
		anchor: true,
	},
	example: {},
	save,
	deprecated,
} );
