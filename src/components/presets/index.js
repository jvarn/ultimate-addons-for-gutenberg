import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const UAGPresets = ( props ) => {

    const {
        setAttributes,
        presetValues,
        presetOptions,
        selectedPreset
    } = props;

    const updatePresets = (preset) => {
        const selectedPresetValue =  presetValues[preset];

        if ( selectedPresetValue ) {
            selectedPresetValue.map( ( preset ) => {
                console.log(preset);
                setAttributes( { [preset.label]: preset.value } )
            });
        }
    }

    const presetChangeHandler = (preset) => {
        setAttributes( { [selectedPreset.label]: preset } )
        updatePresets(preset);
    }

    const presetSelector = (
        <SelectControl
            value={selectedPreset.value}
            onChange={ presetChangeHandler }
            options={ presetOptions }
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
