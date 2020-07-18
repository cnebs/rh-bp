const Reducer = (state, action) => {
	switch (action.type) {

		case 'TOGGLE_LIST':
			return {
				...state,
				toggle: action.payload
      };

    case 'ADD_LIST_ITEM':
      const list = state.list;
      oldState.push(action.payload);
      return {
        ...state,
        list: list
      };

		default:
			return state;
	};
};

export default Reducer;