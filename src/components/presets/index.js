import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const UAGPresets = ( props ) => {

    const {
        setAttributes,
        presets
    } = props;

    const updatePresets = (selectedPreset) => {
        if ( presets ) {
            presets.map( ( preset ) => {
                if ( preset.value && preset.value === selectedPreset && preset.attributes ) {
                    preset.attributes.map( ( presetItem ) => {
                        setAttributes( { [presetItem.label]: presetItem.value } )
                    });
                }
            });
        }
    }

    const presetSelector = (
        <SelectControl
            onChange={ updatePresets }
            options={ presets }
            label={ __( 'Select Preset', 'ultimate-addons-for-gutenberg' ) }
        />
    );

    return (
        <div className="uagb-presets-main-wrap">
            { presetSelector }
        </div>
    );
}

export default React.memo( UAGPresets );
