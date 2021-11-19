export const settingsInitialState = {
	settingsProcess: false,
	unsavedChanges: false,
};

const settingsEvents = ( state, data ) => {
	switch ( data.status ) {
		case 'SAVED':
			return {
				...state,
				settingsProcess: 'saved',
			};
		case 'PROCESSING':
			return {
				...state,
				settingsProcess: 'processing',
			};
		case 'RESET':
			return {
				...state,
				settingsProcess: false,
			};
		case 'UNSAVED_CHANGES':
			if ( 'change' === data.trigger ) {
				return {
					...state,
					unsavedChanges: true,
				};
			}
			return {
				...state,
				unsavedChanges: false,
			};

		default:
			return state;
	}
};

export default settingsEvents;
