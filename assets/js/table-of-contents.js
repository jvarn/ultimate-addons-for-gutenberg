let scrollData = true;
let scrollOffset = 30;
let scrollDelay;
let scrolltoTop = false;
let scrollElement = null;


UAGBTableOfContents = { // eslint-disable-line no-undef
	init() {
		if( document.querySelector( '.uagb-toc__list a' ) !== null ){
			document.querySelector( '.uagb-toc__list a' ).addEventListener( 'click',
				UAGBTableOfContents._scroll// eslint-disable-line no-undef
			);
		}
		if( document.querySelector( '.uagb-toc__scroll-top' ) !== null ){
			document.querySelector( '.uagb-toc__scroll-top' ).addEventListener( 'click',
				UAGBTableOfContents._scrollTop// eslint-disable-line no-undef
			);
		}
		if( document.querySelector( '.uagb-toc__title-wrap' ) !== null ){
			document.querySelector( '.uagb-toc__title-wrap' ).addEventListener( 'click', function(){

				const collapsible = this.querySelector( '.uag-toc__collapsible-wrap' );

				if ( collapsible !== null ) {

					const $root = this.closest( '.wp-block-uagb-table-of-contents' );

					if ( $root.classList.contains( 'uagb-toc__collapse' ) ) {
						$root.classList.remove( 'uagb-toc__collapse' );
					} else {
						$root.classList.add( 'uagb-toc__collapse' );
					}
				}
			} );
		}
		document.addEventListener( 'scroll',
			UAGBTableOfContents._showHideScroll// eslint-disable-line no-undef
		);
	},

	hyperLinks() {
		const hash = window.location.hash.substring( 0 );
		if ( '' === hash || /[^a-z0-9_-]$/.test( hash ) ) {
			return;
		}
		const hashId = encodeURI( hash.substring( 0 ) );
		const selectedAnchor = document.querySelector( hashId );
		if ( null === selectedAnchor ) {
			return;
		}
		const node =  document.querySelector( '.wp-block-uagb-table-of-contents' );

		scrollOffset = node.getAttribute( 'data-offset' );

		const offset = decodeURIComponent( hash ).offset;

		scrollDelay = node.getAttribute( 'data-delay' );
		if ( 'undefined' !== typeof offset ) {
			document.getElementsByTagName( 'html' ).animate( [
				{ scrollTop: offset.top - scrollOffset}],
				scrollDelay
			);
		}
	},

	_showHideScroll() {
		scrollElement = document.querySelector( '.uagb-toc__scroll-top' );
		if ( null !== scrollElement ) {

			if ( window.scrollY > 300 ) {
				if ( scrolltoTop  ) {
					scrollElement.classList.add( 'uagb-toc__show-scroll' );
				} else {
					scrollElement.classList.remove( 'uagb-toc__show-scroll' );
				}
			} else {
				scrollElement.classList.remove( 'uagb-toc__show-scroll' );
			}
		}
	},

	_scrollTop() {
		document.body.animate( [
			{ scrollTop: 0}],
			800
		);
	},

	_scroll() {

		if ( window.location.hash !== '' ) {
			const hash = window.location.hash;
			const node = list.closest( '.wp-block-uagb-table-of-contents' ); // eslint-disable-line no-undef

			scrollData = node.getAttribute( 'data-scroll' );
			scrollOffset = node.getAttribute( 'data-offset' );
			scrollDelay = node.getAttribute( 'data-delay' );
			if ( scrollData ) {
				const offset =  decodeURIComponent( hash ).offset;
				if ( 'undefined' !== typeof offset ) {
					document.body.animate( [
						{ scrollTop: offset.top - scrollOffset}],
						scrollDelay
					);
				}
			}
		}
	},

	/**
	 * Alter the_content.
	 *
	 * @param {Object} attr
	 * @param {string} id
	 */
	_run( attr, id ) {
		const parseTocSlug = function ( slug ) {
			// If not have the element then return false!
			if ( ! slug ) {
				return slug;
			}

			const parsedSlug = slug
				.toString()
				.toLowerCase()
				.replace( /\…+/g, '' ) // Remove multiple …
				.replace( /\u2013|\u2014/g, '' ) // Remove long dash
				.replace( /&(amp;)/g, '' ) // Remove &
				.replace( /[&]nbsp[;]/gi, '-' ) // Replace inseccable spaces
				.replace( /[^a-z0-9 -_]/gi, '' ) // Keep only alphnumeric, space, -, _
				.replace( /&(mdash;)/g, '' ) // Remove long dash
				.replace( /\s+/g, '-' ) // Replace spaces with -
				.replace( /[&\/\\#,^!+()$~%.\[\]'":*?;-_<>{}@‘’”“|]/g, '' ) // Remove special chars
				.replace( /\-\-+/g, '-' ) // Replace multiple - with single -
				.replace( /^-+/, '' ) // Trim - from start of text
				.replace( /-+$/, '' ); // Trim - from end of text

			return decodeURI( encodeURIComponent( parsedSlug ) );
		};
		const $thisScope = document.querySelector( id );
		if ( $thisScope.querySelector( '.uag-toc__collapsible-wrap' ) !== null ){
			if ( $thisScope.querySelector( '.uag-toc__collapsible-wrap' ).length > 0 ) {
				$thisScope.querySelector( '.uagb-toc__title-wrap' ).classList.add( 'uagb-toc__is-collapsible' );
			}
		}

		const allowedHTags = [];
		let allowedHTagStr;

		if ( undefined !== attr.mappingHeaders ) {
			attr.mappingHeaders.forEach( function ( h_tag, index ) {
				// eslint-disable-next-line no-unused-expressions
				h_tag === true ? allowedHTags.push( 'h' + ( index + 1 ) ) : null;
			} );
			allowedHTagStr = null !== allowedHTags ? allowedHTags.join( ',' ) : '';
		}

		const allHeader = undefined !== allowedHTagStr && '' !== allowedHTagStr ? document.body.querySelectorAll( allowedHTagStr ) : document.body.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );

		if ( 0 !== allHeader.length ) {
			const tocListWrap = $thisScope.querySelector( '.uagb-toc__list-wrap' );

			const divsArr = Array.from( allHeader );

				for ( let i = 0; i < divsArr.length; i++ ) {

				let headerText = parseTocSlug( divsArr[i].innerText );

				if ( headerText.length < 1 ) {
					const listHeading = tocListWrap.querySelector( 'a:contains("' + divsArr[i].innerText + '")' );

					if ( listHeading.length > 0 ) {
						headerText = listHeading
							.attr( 'href' )
							.replace( /#/g, '' );
					}
				}
				const span = document.createElement( 'span' );
				span.id = headerText;
				span.className =  'uag-toc__heading-anchor';
				divsArr[i].prepend( span );
			}
		}

		scrolltoTop = attr.scrollToTop;

		const scrollToTopSvg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve"><path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"/></svg>';

		scrollElement = document.querySelector( '.uagb-toc__scroll-top' );

		if ( scrollElement === null ) {

			document.body.innerHTML = document.body.innerHTML + '<div class="uagb-toc__scroll-top"> ' + scrollToTopSvg + '</div>';
		}

		if ( scrollElement !== null ) {
			scrollElement.classList.add( 'uagb-toc__show-scroll' );
		}

		UAGBTableOfContents._showHideScroll(); // eslint-disable-line no-undef
		UAGBTableOfContents.hyperLinks(); // eslint-disable-line no-undef
	},
};

document.addEventListener( 'DOMContentLoaded', function(){
	UAGBTableOfContents.init(); // eslint-disable-line no-undef
} );
