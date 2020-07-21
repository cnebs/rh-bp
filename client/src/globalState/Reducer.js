const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LIST':
      return {
        ...state,
        toggle: action.payload
      };
    
    case 'ADD_LIST_ITEM':
      var list = state.list;
      list.push(action.payload);
      return {
        ...state,
        list
      };

    case 'DELETE_LIST_ITEM':
      var list = state.list,
          index = action.payload;
      list.splice(index, 1);
      return {
        ...state,
        list
      };

    default:
      return state;
  };
};

export default Reducer;