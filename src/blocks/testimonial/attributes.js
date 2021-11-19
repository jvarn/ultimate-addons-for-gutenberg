/**
 * BLOCK: Testimonial - Attributes
 */

const itemCount = 3;

const testimonialBlock = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const descText =
		'I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!';
	const authorText = 'John Doe ';
	const companyText = 'Company' + i;
	testimonialBlock.push( {
		description: descText,
		name: authorText,
		company: companyText,
		image: '',
	} );
}

const attributes = {
	test_item_count: {
		type: 'number',
		default: itemCount,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	test_block: {
		type: 'array',
		default: testimonialBlock,
	},
	headingAlign: {
		type: 'string',
		default: 'center',
	},
	descColor: {
		type: 'string',
		default: '#333',
	},
	companyColor: {
		type: 'string',
		default: '#888888',
	},
	authorColor: {
		type: 'string',
		default: '#333',
	},
	iconimgStyle: {
		type: 'string',
		default: 'circle',
	},
	imagePosition: {
		type: 'string',
		default: 'bottom',
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
	},

	nameFontSizeType: {
		type: 'string',
		default: 'px',
	},
	nameFontSize: {
		type: 'number',
	},
	nameFontSizeTablet: {
		type: 'number',
	},
	nameFontSizeMobile: {
		type: 'number',
	},
	nameFontFamily: {
		type: 'string',
		default: 'Default',
	},
	nameFontWeight: {
		type: 'string',
	},
	nameFontStyle: {
		type: 'string',
	},
	nameLineHeightType: {
		type: 'string',
		default: 'em',
	},
	nameLineHeight: {
		type: 'number',
	},
	nameLineHeightTablet: {
		type: 'number',
	},
	nameLineHeightMobile: {
		type: 'number',
	},
	nameLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	companyFontSizeType: {
		type: 'string',
		default: 'px',
	},
	companyFontSize: {
		type: 'number',
	},
	companyFontSizeTablet: {
		type: 'number',
	},
	companyFontSizeMobile: {
		type: 'number',
	},
	companyFontFamily: {
		type: 'string',
		default: 'Default',
	},
	companyFontWeight: {
		type: 'string',
	},
	companyFontStyle: {
		type: 'string',
	},
	companyLineHeightType: {
		type: 'string',
		default: 'em',
	},
	companyLineHeight: {
		type: 'number',
	},
	companyLineHeightTablet: {
		type: 'number',
	},
	companyLineHeightMobile: {
		type: 'number',
	},
	companyLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	descFontSizeType: {
		type: 'string',
		default: 'px',
	},
	descFontSize: {
		type: 'number',
	},
	descFontSizeTablet: {
		type: 'number',
	},
	descFontSizeMobile: {
		type: 'number',
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
	},
	descFontStyle: {
		type: 'string',
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
	},
	descLineHeight: {
		type: 'number',
	},
	descLineHeightTablet: {
		type: 'number',
	},
	descLineHeightMobile: {
		type: 'number',
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	nameSpace: {
		type: 'number',
		default: 5,
	},
	descSpace: {
		type: 'number',
		default: 15,
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	authorSpace: {
		type: 'number',
		default: 5,
	},
	imgVrPadding: {
		type: 'number',
		default: 10,
	},
	imgHrPadding: {
		type: 'number',
		default: 10,
	},
	imgTopPadding: {
		type: 'number',
		default: 10,
	},
	imgBottomPadding: {
		type: 'number',
		default: 10,
	},
	iconImage: {
		type: 'object',
		default: {
			url: '',
			alt: 'InfoBox placeholder img',
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
	},
	imageWidth: {
		type: 'number',
		default: 60,
	},
	columns: {
		type: 'number',
		default: 1,
	},
	tcolumns: {
		type: 'number',
		default: 1,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	pauseOnHover: {
		type: 'boolean',
		default: true,
	},
	infiniteLoop: {
		type: 'boolean',
		default: true,
	},
	transitionSpeed: {
		type: 'number',
		default: 500,
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	autoplaySpeed: {
		type: 'number',
		default: 2000,
	},
	arrowDots: {
		type: 'string',
		default: 'arrows_dots',
	},
	arrowSize: {
		type: 'number',
		default: 20,
	},
	arrowBorderSize: {
		type: 'number',
		default: 1,
	},
	arrowBorderRadius: {
		type: 'number',
		default: 0,
	},
	arrowColor: {
		type: 'string',
		default: '#333',
	},
	rowGap: {
		type: 'number',
		default: 10,
	},
	columnGap: {
		type: 'number',
		default: 10,
	},
	contentPadding: {
		type: 'number',
		default: 5,
	},
	backgroundType: {
		type: 'string',
	},
	backgroundImage: {
		type: 'object',
	},
	backgroundPosition: {
		type: 'string',
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	backgroundColor: {
		type: 'string',
	},
	backgroundImageColor: {
		type: 'string',
	},
	borderStyle: {
		type: 'string',
		default: 'none',
	},
	borderWidth: {
		type: 'number',
		default: '1',
	},
	borderRadius: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	imageWidthType: {
		type: 'string',
		default: 'px',
	},
	arrowSizeType: {
		type: 'string',
		default: 'px',
	},
	rowGapType: {
		type: 'string',
		default: 'px',
	},
	columnGapType: {
		type: 'string',
		default: 'px',
	},
	descSpaceType: {
		type: 'string',
		default: 'px',
	},
	nameSpaceType: {
		type: 'string',
		default: 'px',
	},
	borderHoverColor: {
		type: 'string',
	},
	overlayType: {
		type: 'string',
		default: 'color',
	},
	backgroundAttachment: {
		type: 'string',
	},
	gradientValue: {
		type: 'string',
	},
	descTransform: {
		type: 'string',
	},
	descDecoration: {
		type: 'string',
	},
	nameTransform: {
		type: 'string',
	},
	nameDecoration: {
		type: 'string',
	},
	companyTransform: {
		type: 'string',
	},
	companyDecoration: {
		type: 'string',
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	paddingTop: {
		type: 'number',
	},
	paddingBottom: {
		type: 'number',
	},
	paddingLeft: {
		type: 'number',
	},
	paddingRight: {
		type: 'number',
	},
	paddingTopTablet: {
		type: 'number',
	},
	paddingRightTablet: {
		type: 'number',
	},
	paddingBottomTablet: {
		type: 'number',
	},
	paddingLeftTablet: {
		type: 'number',
	},
	paddingTopMobile: {
		type: 'number',
	},
	paddingRightMobile: {
		type: 'number',
	},
	paddingBottomMobile: {
		type: 'number',
	},
	paddingLeftMobile: {
		type: 'number',
	},
	imgspacingLink: {
		type: 'boolean',
	},
	spacingLink: {
		type: 'boolean',
	},
	imgpaddingTop: {
		type: 'number',
	},
	imgpaddingRight: {
		type: 'number',
	},
	imgpaddingBottom: {
		type: 'number',
	},
	imgpaddingLeft: {
		type: 'number',
	},
	imgpaddingTopTablet: {
		type: 'number',
	},
	imgpaddingRightTablet: {
		type: 'number',
	},
	imgpaddingBottomTablet: {
		type: 'number',
	},
	imgpaddingLeftTablet: {
		type: 'number',
	},
	imgpaddingTopMobile: {
		type: 'number',
	},
	imgpaddingRightMobile: {
		type: 'number',
	},
	imgpaddingBottomMobile: {
		type: 'number',
	},
	imgpaddingLeftMobile: {
		type: 'number',
	},
	imgpaddingUnit: {
		type: 'string',
		default: 'px',
	},
	imgmobilePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	imgtabletPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	gradientColor1: {
		type: 'string',
	},
	gradientColor2: {
		type: 'string',
	},
	gradientType: {
		type: 'string',
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		default: 0,
	},
	gradientPosition: {
		type: 'string',
		default: 'center center',
	},
};

export default attributes;
