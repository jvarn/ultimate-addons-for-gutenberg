import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

const UAGPresets = ( props ) => {

    // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const {
        setAttributes,
        presets,
        presetInputType,
        label
    } = props;

	const [ selectedPresetState, setPreset ] = useState( '' );

    const updatePresets = ( selectedPreset ) => {
        setPreset( selectedPreset );
        if ( presets ) {
            presets.map( ( preset ) => {
                if ( 'default' !== selectedPreset && 'default' === preset.value && preset.attributes ) {
                    preset.attributes.map( ( presetItem ) => {
                        setAttributes( { [presetItem.label]: presetItem.value } )
                        return presetItem;
                    } );
                }
                if ( preset.value && preset.value === selectedPreset && preset.attributes ) {
                    preset.attributes.map( ( presetItem ) => {
                        setAttributes( { [presetItem.label]: presetItem.value } )
                        return presetItem;
                    } );
                }  
                return preset; 
            } );
        }
    }

    const presetRadioImageOptions = presets.map( ( preset ) => {
        const key = preset.value;
		const checked = selectedPresetState === key ? true : false;
		return (
            <>
                <input key={key} className="uag-presets-radio-input" type="radio" value={key} checked={checked} onChange={() => updatePresets( key )} onClick={() => updatePresets( key )}/>

                <label htmlFor={key} className="uag-presets-radio-input-label">
                    <span dangerouslySetInnerHTML={{
                        __html: preset.icon
                    }}/>
                    <span className="uag-presets-radio-image-clickable" onClick={() => updatePresets( key )} title={preset.label}></span> { /* eslint-disable-line */ }
                </label> 
            </>
        );
	} );
    
    const presetDropdown = (
        <SelectControl
            className='uagb-presets-dropdown'
            onChange={ updatePresets }
            options={ presets }
            label={ label }
        />
    );
    
    const presetRadioImage = (
        <>
            <label htmlFor="uag-presets-label" className="uag-presets-label">{label}</label>
            <div className='uagb-presets-radio-image-wrap'>
                {presetRadioImageOptions}
            </div>
        </>
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
    label: __( 'Select Preset', 'ultimate-addons-for-gutenberg' )
};

export default React.memo( UAGPresets );
