import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const UAGPresets = ( props ) => {

    const {
        setAttributes,
        presets,
        presetInputType
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

    const presetRadioImageOptions = presets.map( (preset) => {
        let key = preset.value;
		return (
            <>
                <input key={key} className="uag-presets-radio-input" type="radio" value={key} onChange={() => updatePresets(key)}/>

                <label htmlFor={key} className="uag-presets-radio-input-label">
                    <span dangerouslySetInnerHTML={{
                        __html: preset.icon
                    }}/>
                    <span className="uag-presets-radio-image-clickable" title={preset.label}></span>
                </label> 
            </>
        );
	});
    
    const presetDropdown = (
        <SelectControl
            className='uagb-presets-dropdown'
            onChange={ updatePresets }
            options={ presets }
            label={ __( 'Select Preset', 'ultimate-addons-for-gutenberg' ) }
        />
    );
    
    const presetRadioImage = (
        <div className='uagb-presets-radio-image-wrap'>
            {presetRadioImageOptions}
        </div>
    );

    return (
        <div className="uagb-presets-main-wrap">
            { 'dropdown' === presetInputType && presetDropdown }
            { 'radioImage' === presetInputType && presetRadioImage }
        </div>
    );
}

UAGPresets.defaultProps = {
	presetInputType: 'dropdown',
};

export default React.memo( UAGPresets );
