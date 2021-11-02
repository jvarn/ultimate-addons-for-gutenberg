import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
    {
        value: 'default',
        label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingColor', value: '' },
            { label: 'separatorColor', value: '' },
            { label: 'subHeadingColor', value: '' },
        ],
        icon: '<svg x="0px" y="0px" viewBox="0 0 84.2 81"><path classname="st0" d="M0.3,77.4V4c0-2,1.6-3.5,3.5-3.5h76.9c2,0,3.5,1.6,3.5,3.5v73.5c0,2-1.6,3.5-3.5,3.5H3.9 C1.9,81,0.4,79.4,0.3,77.4z M3.9,2.2C2.9,2.2,2.1,3,2.1,4v73.5c0,1,0.8,1.8,1.8,1.8h76.9c1,0,1.8-0.8,1.8-1.8V4 c0-1-0.8-1.8-1.8-1.8H3.9z"></path><g><path classname="st0" d="M14.8,28.4c0-1.2,0.8-2.1,1.8-2.1h50.9c1,0,1.8,0.9,1.8,2.1v-0.6c0,1.2-0.8,2.1-1.8,2.1H16.6c-1,0-1.8-0.9-1.8-2.1V28.4L14.8,28.4z"></path></g><g><path classname="st0" d="M14.8,40.8c0-1.2,0.8-2.1,1.8-2.1h50.9c1,0,1.8,0.9,1.8,2.1v-0.6c0,1.2-0.8,2.1-1.8,2.1H16.6c-1,0-1.8-0.9-1.8-2.1V40.8L14.8,40.8z"></path></g><g><path classname="st0" d="M14.8,53.2c0-1.2,0.8-2.1,1.8-2.1h50.9c1,0,1.8,0.9,1.8,2.1v-0.6c0,1.2-0.8,2.1-1.8,2.1H16.6c-1,0-1.8-0.9-1.8-2.1V53.2L14.8,53.2z"></path></g></svg>',
    },
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingColor', value: '#FF0000' },
            { label: 'separatorColor', value: '#16f23e' },
            { label: 'subHeadingColor', value: '#e0dd09' },
        ],
        icon: '<svg x="0px" y="0px" viewBox="0 0 84.2 81"> <path classname="st0" d="M0.1,77.2V3.8c0-2,1.6-3.5,3.5-3.5h76.9c2,0,3.5,1.6,3.5,3.5v73.5c0,2-1.6,3.5-3.5,3.5H3.7 C1.7,80.8,0.2,79.2,0.1,77.2z M3.7,2c-1,0-1.8,0.8-1.8,1.8v73.5c0,1,0.8,1.8,1.8,1.8h76.9c1,0,1.8-0.8,1.8-1.8V3.8 c0-1-0.8-1.8-1.8-1.8H3.7z"></path> <g> <g> <path classname="st0" d="M14.7,56c0-1.2,0.8-2.1,1.8-2.1h50.8c1,0,1.8,0.9,1.8,2.1v3.5c0,1.2-0.8,2.1-1.8,2.1H16.5 c-1,0-1.8-0.9-1.8-2.1L14.7,56L14.7,56z"></path> </g> <g> <path classname="st0" d="M14.7,38.5c0-1.2,0.8-2.1,1.8-2.1h50.8c1,0,1.8,0.9,1.8,2.1V42c0,1.2-0.8,2.1-1.8,2.1H16.5 c-1,0-1.8-0.9-1.8-2.1L14.7,38.5L14.7,38.5z"></path> </g> <g> <path classname="st0" d="M14.7,21.1c0-1.2,0.8-2.1,1.8-2.1h50.8c1,0,1.8,0.9,1.8,2.1v3.5c0,1.2-0.8,2.1-1.8,2.1H16.5 c-1,0-1.8-0.9-1.8-2.1L14.7,21.1L14.7,21.1z"></path> </g> </g> </svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingColor', value: '#eb10ce' },
            { label: 'separatorColor', value: '#0e0ee6' },
            { label: 'subHeadingColor', value: '#1ef0f7' },
        ],
        icon: '<svg x="0px" y="0px" viewBox="0 0 84.2 81"> <g> <path classname="st0" d="M0.3,77.4V4c0-2,1.6-3.5,3.5-3.5h76.9c2,0,3.5,1.6,3.5,3.5v73.5c0,2-1.6,3.5-3.5,3.5H3.9 C1.9,81,0.4,79.4,0.3,77.4z M3.9,2.2C2.9,2.2,2.1,3,2.1,4v73.5c0,1,0.8,1.8,1.8,1.8h76.9c1,0,1.8-0.8,1.8-1.8V4 c0-1-0.8-1.8-1.8-1.8H3.9z"></path> </g> <circle classname="st0" cx="42.1" cy="21.5" r="6.4"></circle> <circle classname="st0" cx="42.1" cy="40.5" r="6.4"></circle> <circle classname="st0" cx="42.1" cy="59.5" r="6.4"></circle> </svg>',
    },
];

export default applyFilters(
    `uag_advanced_heading_presets`,
    presets
);