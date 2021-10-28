import { __ } from '@wordpress/i18n';

let presets = [
    {
        value: 'default',
        label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingColor', value: '' },
            { label: 'separatorColor', value: '' },
            { label: 'subHeadingColor', value: '' },
        ],
    },
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingColor', value: '#FF0000' },
            { label: 'separatorColor', value: '#16f23e' },
            { label: 'subHeadingColor', value: '#e0dd09' },
        ],
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingColor', value: '#eb10ce' },
            { label: 'separatorColor', value: '#0e0ee6' },
            { label: 'subHeadingColor', value: '#1ef0f7' },
        ],
    },
];

export default presets;