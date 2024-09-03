const intitalState = {
  items: [],
};

export const CartReducer = (state = intitalState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        item: state.items((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
