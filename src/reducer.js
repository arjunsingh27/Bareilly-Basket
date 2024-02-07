import axios from 'axios';

// Define action types
export const FETCH_USER_BASKET = 'FETCH_USER_BASKET';
export const SET_USER_BASKET = 'SET_USER_BASKET';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// Define action creators
export const fetchUserBasket = (userId) => {
  return async (dispatch) => {
    try {
      console.log('Fetching user basket')
      const response = await axios.get(`http://localhost:5002/getbasket/${userId}`);
      dispatch({ type: SET_USER_BASKET, basket: response.data });
    } catch (error) {
      // Propagate the error to the component or handle it appropriately
      throw new Error(`Error fetching user basket: ${error.message}`);
    }
  };
};

export const addToBasket = (item) => {
  return async (dispatch) => {
    try {
      // Send the item to the backend to be added to the basket
      await axios.post('http://localhost:5002/addtobasket', item);
      
      // Dispatch the action to update the local state
      dispatch({ type: ADD_TO_BASKET, item });
    } catch (error) {
      // Handle the error appropriately
      console.error('Error adding item to basket:', error);
    }
  };
};

export const removeFromBasket = (id) => {
  return { type: REMOVE_FROM_BASKET, id };
};

export const setCurrentUser = (user) => {
    return (dispatch) => { // Removed async
      dispatch({ type: SET_CURRENT_USER, user });
      if (user && user.id) {
        console.log('User basket fetched after setting current user');
        dispatch(fetchUserBasket(user.id)); // Removed await
       
      }
    };
  };
  

// Define the initial state
export const initialState = {
  currentUser: {
    id: null, // Initially no user is logged in
    username: null,
  },
  basket: [],
};

 

// Define the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FROM_BASKET:
      const newBasket = state.basket.filter((basketItem) => basketItem.id !== action.id);
      if (newBasket.length === state.basket.length) {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case SET_USER_BASKET:
      return {
        ...state,
        basket: action.basket,
      };
    default:
      return state;
  }
};

export default reducer;
