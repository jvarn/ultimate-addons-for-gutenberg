/**
 * BLOCK: Post Title
 */

// Import block dependencies and components
import { PostTitle } from './edit';
import save from './save';
import UAGB_Block_Icons from '@Controls/block-icons';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls

import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'uagb/post-title', {
	title: __( 'Post Title', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block fetches the blog title.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/post-grid', 'uagb/post-masonry', 'uagb/post-carousel' ],
	keywords: [ __( 'post' ), __( 'title' ), __( 'uag' ) ],
	PostTitle,
	example: {},
	save,
} );
