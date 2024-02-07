export const initialState = {
    currentUser: {
      username: 'Guest',
      userId: null,
    }, // Initially no user is logged in
    basket: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: {
            username: action.user.username,
            userId: action.user.userId
          }
        };
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case 'REMOVE_FROM_BASKET':
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Can't remove product (id: ${action.id}) as it's not in the basket!`
          );
        }
        return {
          ...state,
          basket: newBasket,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  