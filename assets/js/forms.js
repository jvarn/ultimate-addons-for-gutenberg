
UAGBForms = { // eslint-disable-line no-undef
	init( attr, id ) {
		const scope = document.querySelector( id );

		const form = scope.querySelector( '.uagb-forms-main-form' );

		const phoneinput = form.querySelectorAll( '.uagb-forms-phone-input' );

		if( phoneinput.length !== 0 ){
			for ( let i = 0; i < phoneinput.length; i++ ) {
				phoneinput[i].addEventListener( 'keypress', function ( e ) {
					const charCode = e.which ? e.which : e.keyCode;
					if ( charCode === 45 ) {
						return true;
					}
					if ( charCode > 31 && ( charCode < 48 || charCode > 57 ) ) {
						return false;
					}
					return true;
				} );
			}
		}
		const toggleinput = form.querySelectorAll( '.uagb-forms-toggle-input' );

		if( toggleinput.length !== 0 ){
			for ( let j = 0; j < toggleinput.length; j++ ) {
				toggleinput[j].addEventListener( 'change', function () {
					if ( toggleinput[j].checked ) {
						const truestate = toggleinput[j].getAttribute( 'data-truestate' );
						toggleinput[j].setAttribute( 'value', truestate );
					} else {
						const falsestate = toggleinput[j].getAttribute( 'data-falsestate' );
						toggleinput[j].setAttribute( 'value', falsestate );
					}
				} );
			}
		}

		// validation for checkbox if required.
		const requiredCheckboxes = scope.querySelectorAll( '.uagb-forms-checkbox-wrap' );
		if( requiredCheckboxes.length !== 0 ){
			for ( let k = 0; k < requiredCheckboxes; k++ ) {
				const checkboxes = requiredCheckboxes[k].querySelectorAll( 'input[type=checkbox]' );

				if ( checkboxes.length > 0 ) {
					for ( let l = 0; l < checkboxes.length; l++ ) {
						checkboxes[l].addEventListener( 'change', window.UAGBForms._checkValidity );
					}

					window.UAGBForms._checkValidity();
				}
			}
		}

		//append recaptcha js when enabled.
		if ( attr.reCaptchaEnable === true && attr.reCaptchaType === 'v2' && attr.reCaptchaSiteKeyV2 ) {

			const recaptchaLink = document.createElement( 'script' );
			recaptchaLink.type = 'text/javascript';
			recaptchaLink.src = 'https://www.google.com/recaptcha/api.js';
			document.head.appendChild( recaptchaLink );

		} else if ( attr.reCaptchaEnable === true && attr.reCaptchaType === 'v3' &&	attr.reCaptchaSiteKeyV3 ) {
			if ( attr.hidereCaptchaBatch ) {
				if ( document.getElementsByClassName( 'grecaptcha-badge' )[ 0 ] === undefined ) {
					return;
				}
				const badge = document.getElementsByClassName( 'grecaptcha-badge' )[ 0 ];
				badge.style.visibility = 'hidden';
			}
			const api = document.createElement( 'script' );
			api.type = 'text/javascript';
			api.src = 'https://www.google.com/recaptcha/api.js?render=' + attr.reCaptchaSiteKeyV3;
			document.head.appendChild( api );
		}

		//Ready Classes.
		const formscope = document.getElementsByClassName( 'uagb-block-' + attr.block_id );
		const formWrapper = formscope[ 0 ].children;
		const sibling = formWrapper[ 0 ].children;

		for ( let index = 0; index < sibling.length; index++ ) {
			if ( sibling[ index ].classList.contains( 'uag-col-2' ) && sibling[ index + 1 ].classList.contains( 'uag-col-2' ) ) {

				const div = document.createElement( 'div' );
				div.className = 'uag-col-2-wrap uag-col-wrap-' + index;
				sibling[ index + 1 ].after( div );
				const wrapper_div = formscope[ 0 ].getElementsByClassName( 'uag-col-wrap-' + index );
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
				wrapper_div[ 0 ].appendChild( sibling[ index ] );

			}

			if (
				sibling[ index ].classList.contains( 'uag-col-3' ) &&
				sibling[ index + 1 ].classList.contains( 'uag-col-3' ) &&
				sibling[ index + 2 ].classList.contains( 'uag-col-3' )
			) {
				const div = document.createElement( 'div' );
				div.className = 'uag-col-3-wrap uag-col-wrap-' + index;
				sibling[ index + 2 ].after( div );
				const wrapper_div = formscope[ 0 ].getElementsByClassName(
					'uag-col-wrap-' + index
				);
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
			}

			if (
				sibling[ index ].classList.contains( 'uag-col-4' ) &&
				sibling[ index + 1 ].classList.contains( 'uag-col-4' ) &&
				sibling[ index + 2 ].classList.contains( 'uag-col-4' ) &&
				sibling[ index + 3 ].classList.contains( 'uag-col-4' )
			) {
				const div = document.createElement( 'div' );
				div.className = 'uag-col-4-wrap uag-col-wrap-' + index;
				sibling[ index + 3 ].after( div );
				const wrapper_div = formscope[ 0 ].getElementsByClassName(
					'uag-col-wrap-' + index
				);
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
				wrapper_div[ 0 ].appendChild( sibling[ index ] );
			}
		}

		form.addEventListener( 'submit', function ( e ) {
			e.preventDefault();
			if ( attr.reCaptchaEnable === true && attr.reCaptchaType === 'v3' && attr.reCaptchaSiteKeyV3 ) {
				grecaptcha.addEventListener( 'DOMContentLoaded', function () { // eslint-disable-line no-undef
					grecaptcha // eslint-disable-line no-undef
						.execute( attr.reCaptchaSiteKeyV3, {
							action: 'submit',
						} )
						.then( function ( token ) {
							if ( token ) {
								document.getElementById( 'g-recaptcha-response' ).value = token;
								window.UAGBForms._formSubmit( e, this, attr );
							}
						} );
				} );
			} else {
				window.UAGBForms._formSubmit( e, this, attr );
			}
		} );
	},
	_isChecked() {
        for ( let i = 0; i < checkboxes.length; i++ ) { // eslint-disable-line no-undef
            if ( checkboxes[i].checked ) return true; // eslint-disable-line no-undef
        }

        return false;
    },

    _checkValidity() {
        const errorMessage = !window.UAGBForms._isChecked ? 'At least one checkbox must be selected.' : '';
        checkboxes[i].setCustomValidity( errorMessage ); // eslint-disable-line no-undef
    },

	_formSubmit( e, form, attr ) {
		e.preventDefault();

		let uagab_captcha_keys, captcha_response;
		if ( attr.reCaptchaEnable === true && attr.reCaptchaType === 'v2' && attr.reCaptchaSiteKeyV2 ) {

			captcha_response = form[ 0 ].getElementsByClassName( 'uagb-forms-recaptcha' )[ 0 ].value;
			if ( ! captcha_response ) {
				document.querySelector( '.uagb-form-reacaptcha-error-' + attr.block_id ).innerHTML = '<p style="color:red !important" class="error-captcha">' + attr.captchaMessage +'</p>';
				return false;
			}
			document.querySelector( '.uagb-form-reacaptcha-error-' + attr.block_id ).innerHTML = '';
			uagab_captcha_keys = { secret: attr.reCaptchaSecretKeyV2, sitekey: attr.reCaptchaSiteKeyV2 };
		}
		if (
			attr.reCaptchaEnable === true &&
			attr.reCaptchaType === 'v3' &&
			attr.reCaptchaSiteKeyV3
		) {
			uagab_captcha_keys = {
				secret: attr.reCaptchaSecretKeyV3,
				sitekey: attr.reCaptchaSiteKeyV3,
			};
			captcha_response = document.getElementById( 'g-recaptcha-response' ).value;
		}

		const originalSerialized = window.UAGBForms._serializeIt( form );

		const postData = {};

		for ( let i = 0; i < originalSerialized.length; i++ ) {
			const inputname = document.getElementById( originalSerialized[ i ].name );
			if ( originalSerialized[ i ].name.endsWith( '[]' ) ) {
				//For checkbox element
				const name = document.getElementById( originalSerialized[ i ].name );
				if ( ! ( name in postData ) ) {
					postData[ name ] = [];
				}
				postData[ name ].push( originalSerialized[ i ].value );
			} else if ( originalSerialized[ i ].value.startsWith( '+' ) ) {
				//For phone element.
				let name = originalSerialized[ i ].name;
				name = name.substring( 0, name.length - 2 );
				if ( ! ( name in postData ) ) {
					postData[ name ] = [];
				}
				postData[ name ].push( originalSerialized[ i ].value );
			} else if( inputname !== null ){
					postData[ inputname.innerHTML] = originalSerialized[ i ].value;
				}
		}

		const after_submit_data = {
			to: attr.afterSubmitToEmail,
			cc: attr.afterSubmitCcEmail,
			bcc: attr.afterSubmitBccEmail,
			subject: attr.afterSubmitEmailSubject,
		};
		const spinner = document.createElement( 'span' );
			spinner.class = 'components-spinner';
		//add spiner to form button to show processing.
		form.querySelector( '.uagb-forms-main-submit-button-wrap' ).appendChild( spinner );
		const captchaKey = uagab_captcha_keys ? uagab_captcha_keys : '';

		fetch( uagb_forms_data.ajax_url, { // eslint-disable-line no-undef
			method: 'POST',
			headers: new Headers( {'Content-Type': 'application/x-www-form-urlencoded'} ), // eslint-disable-line no-undef
			body: new URLSearchParams( {
				action: 'uagb_process_forms',
				nonce: uagb_forms_data.uagb_forms_ajax_nonce,
				form_data: JSON.stringify( postData ),
				sendAfterSubmitEmail: attr.sendAfterSubmitEmail,
				after_submit_data : JSON.stringify( after_submit_data ),
				uagab_captcha_keys :captchaKey,
				captcha_response,
			  } ),
		  } )
		  .then( ( resp ) => resp.json() )
		  .then( function( data ){
			const hideForm = document.querySelector( '[name="uagb-form-' + attr.block_id + '"]' );
			hideForm.style.display = 'none';
			if ( 200 === data.data ) {
				if ( 'message' === attr.confirmationType ) {
					const errorMsg = document.querySelector( '.uagb-forms-success-message-' + attr.block_id );
					errorMsg.classList.remove( 'uagb-forms-submit-message-hide' );
					errorMsg.classList.add( 'uagb-forms-success-message' );
				}

				if ( 'url' === attr.confirmationType ) {
					window.location.replace( attr.confirmationUrl );
				}
			} else if ( 400 === data.data ) {
				if ( 'message' === attr.confirmationType ) {
					const successMsg = document.querySelector( '.uagb-forms-failed-message-' + attr.block_id );
					successMsg.classList.remove( 'uagb-forms-submit-message-hide' );
					successMsg.classList.add( 'uagb-forms-failed-message' );
				}
			}
		  } )
		  .catch( function( error ) {
			console.log( JSON.stringify( error ) ); // eslint-disable-line no-console
		  } );
	},

	_serializeIt( form ) {
		return (
		  Array.apply( 0, form.elements ).map( x =>
			(
			  ( obj =>
				( // eslint-disable-line no-nested-ternary
				  x.type === 'radio' ||
				  x.type === 'checkbox'
				) ?
				  x.checked ?
					obj
				  :
					null
				:
				  obj
			  )(
				{
				  name: x.name, value: x.value
				}
			  )
			)
		  ).filter( x => x )
		);
	  }
};
