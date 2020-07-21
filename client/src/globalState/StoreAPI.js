import { useStore } from "./Store.js";

export const useList = () => {
  const [ { list }, dispatch ] = useStore();
  return (
    {
      list,
      addListItem: (item_str) => dispatch({ type: "ADD_LIST_ITEM", payload: item_str }),
      delListItem: (item_idx) => dispatch({ type: "DELETE_LIST_ITEM", payload: item_idx })
    }
  );
}