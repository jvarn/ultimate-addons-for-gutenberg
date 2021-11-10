import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { select } from '@wordpress/data';

const UAGCopyPasteStyles = (props) => {

    const copyStylesHandler = () => {
       
        let selectedBlock = select( 'core/block-editor' ).getSelectedBlock();

        if ( ! selectedBlock ) {
            return;
        }

        let styles = {};

        let selectedBlockName = selectedBlock.name.replace( 'uagb/', '' );

        const {
            attributes
        } = selectedBlock;

        const {
            blockStyles
        } = attributes;

        if ( ! blockStyles ) {
            return;
        }

        blockStyles.map( ( attribute ) => {
            styles[attribute] = attributes[attribute];
        } );

        console.log(styles);

        localStorage.setItem(`uag-${selectedBlockName}-styles`, JSON.stringify(styles));
    };

    const pasteStylesHandler = () => {
        
        let selectedBlock = select( 'core/block-editor' ).getSelectedBlock();

        if ( ! selectedBlock ) {
            return;
        }

        let selectedBlockName = selectedBlock.name.replace( 'uagb/', '' );

        let styles = JSON.parse(localStorage.getItem(`uag-${selectedBlockName}-styles`));

        if ( ! styles ) {
            return;
        }

        const uagPasteEvent = new CustomEvent(`uag-paste-custom-event-${selectedBlockName}`, {
			detail: styles,
		});
		document.dispatchEvent(uagPasteEvent);

    };

    return (
        <>
            <PluginBlockSettingsMenuItem
                label={ __( 'UAG Copy Styles', 'ultimate-addons-for-gutenberg' ) }
                onClick={copyStylesHandler}
            >
            </PluginBlockSettingsMenuItem>
            <PluginBlockSettingsMenuItem
                label={ __( 'UAG Paste Styles', 'ultimate-addons-for-gutenberg' ) }
                onClick={pasteStylesHandler}
            >
            </PluginBlockSettingsMenuItem>
        </>
    );
};

export default UAGCopyPasteStyles;

registerPlugin( 'uag-copy-paste', {
	render: UAGCopyPasteStyles,
} );