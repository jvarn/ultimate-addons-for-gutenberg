/**
 * WordPress dependencies
 */
import Range from '@Components/range/Range.js';
// Extend component
import { useSelect } from '@wordpress/data';
/**
 * Build the Measure controls
 *
 * @param {Object[]} props
 * @return {Object} Measure settings.
 */
export default function RangeTypographyControl( props ) {
	const deviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );

	const output = {};

	output.Desktop = (
		<>
			<Range
				{ ...props }
				label={ props.sizeText }
				value={ props.size.value || '' }
				onChange={ ( value ) =>
					props.setAttributes( { [ props.sizeLabel ]: value } )
				}
				min={ 0 }
				max={ 100 }
				unit={ props.type }
				responsive={ true }
			/>
		</>
	);
	output.Tablet = (
		<>
			<Range
				{ ...props }
				label={ props.sizeTabletText }
				value={ props.sizeTablet.value }
				onChange={ ( value ) =>
					props.setAttributes( { [ props.sizeTabletLabel ]: value } )
				}
				min={ 0 }
				max={ 100 }
				unit={ props.type }
				responsive={ true }
			/>
		</>
	);
	output.Mobile = (
		<>
			<Range
				{ ...props }
				label={ props.sizeMobileText }
				value={ props.sizeMobile.value }
				onChange={ ( value ) =>
					props.setAttributes( { [ props.sizeMobileLabel ]: value } )
				}
				min={ 0 }
				max={ 100 }
				unit={ props.type }
				responsive={ true }
			/>
		</>
	);

	return (
		<div className={ 'uag-typography-range-options' }>
			<div className="uagb-size-type-field-tabs">
				<div className="uagb-responsive-control-inner">
					{ output[ deviceType ]
						? output[ deviceType ]
						: output.Desktop }
				</div>
			</div>
		</div>
	);
}
