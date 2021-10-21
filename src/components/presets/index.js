import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';

const UAGPresets = ( props ) => {

    const {
        setAttributes,
        presetValues,
        presetOptions
    } = props;

	const [ preset, setPreset ] = useState('default');

    const presetChangeHandler = (preset) => {
        setPreset(preset);
    }

    const presetSelector = (
        <SelectControl
            value={preset}
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
