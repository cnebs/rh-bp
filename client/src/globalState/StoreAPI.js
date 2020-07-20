import { useStore } from "./Store.js";

export const useList = () => {
  const [ { list }, dispatch ] = useStore();
  return {
    list,
    addListItem: (item_string) => dispatch({ type: "ADD_LIST_ITEM", payload: item_string }),
    deleteListItem: (item_index) => dispatch({ type: "DELETE_LIST_ITEM", payload: item_index })
  };
}