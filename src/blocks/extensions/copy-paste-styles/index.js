import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { select } from '@wordpress/data';
import React, { useEffect } from 'react';

// Import Blocks Attributes.
import advancedHeadingAttributes from './../../advanced-heading/attributes';
import infoBoxAttributes from './../../info-box/attributes';

const blocksAttributes = {
    'advanced-heading': advancedHeadingAttributes,
    'info-box': infoBoxAttributes,
};

const UAGCopyPasteStyles = (props) => {

    useEffect( () => {
        let uagLocalStorageObject = JSON.parse(localStorage.getItem('uag-copy-paste-styles'));

        if ( ! uagLocalStorageObject ) {
            localStorage.setItem('uag-copy-paste-styles', JSON.stringify({}));
        }

        if ( uagLocalStorageObject ) {
            for (let block in uagLocalStorageObject) {

                let hoursSinceStylesSaved = Math.abs(Date.now() - uagLocalStorageObject[block]['stylesSavedTimeStamp']) / 36e5;
            
                if ( hoursSinceStylesSaved >= 8 ) {
                    delete uagLocalStorageObject[block];
                }
            }

            localStorage.setItem('uag-copy-paste-styles', JSON.stringify(uagLocalStorageObject));
        }
        
	}, [] );

    const copyStylesHandler = () => {
        
        const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select( 'core/block-editor' );
       
        if ( hasMultiSelection() ) {
            let multiSelectedBlocksData = getMultiSelectedBlocks();
            multiSelectedBlocksData.map((block) => {

                if(block) {
                    storeBlockStyles(block);
                }
            });

            return;
        }

        let selectedBlockData = select( 'core/block-editor' ).getSelectedBlock();
        
        if ( selectedBlockData ) {   
            storeBlockStyles(selectedBlockData);
        }
    };

    const pasteStylesHandler = () => {
        const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select( 'core/block-editor' );

        if ( hasMultiSelection() ) {
            let multiSelectedBlocksData = getMultiSelectedBlocks();
            multiSelectedBlocksData.map((block) => {

                if(block) {
                    pasteBlockStyles(block);
                }
            });

            return;
        }

        let selectedBlockData = select( 'core/block-editor' ).getSelectedBlock();

        if (selectedBlockData) {
            pasteBlockStyles(selectedBlockData);
        }
    };

    const storeBlockStyles = ( blockData ) => {

        const {
            attributes,
            name
        } = blockData;

        let blockName = name.replace( 'uagb/', '' );
        let styles = {};
        let blockAttributes = blocksAttributes[blockName];
        let uagLocalStorageObject = JSON.parse(localStorage.getItem('uag-copy-paste-styles'));

        if ( blockAttributes && uagLocalStorageObject ) {
            
            Object.keys(blockAttributes).map( ( attribute ) => {
                if ( blockAttributes[attribute]['isUAGStyle'] ) {
                    styles[attribute] = attributes[attribute];
                }
            } );

            styles['stylesSavedTimeStamp'] = Date.now();

            uagLocalStorageObject[`uag-${blockName}-styles`] = styles;

            localStorage.setItem('uag-copy-paste-styles', JSON.stringify(uagLocalStorageObject));
        }
    };

    const pasteBlockStyles = (blockData) => {

        const {
            name
        } = blockData

        let uagLocalStorageObject = JSON.parse(localStorage.getItem('uag-copy-paste-styles'));

        let selectedBlockName = name.replace( 'uagb/', '' );

        let styles = uagLocalStorageObject[`uag-${selectedBlockName}-styles`];

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