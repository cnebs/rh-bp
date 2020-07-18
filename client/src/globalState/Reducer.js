const Reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_LIST':
			return {
				...state,
				toggledList: action.payload
			};
		default:
			return state;
	}
};