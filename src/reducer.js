// Importing Axios instance
import instance from "./axios";
import { useNavigate } from 'react-router-dom';

// Define initial state
export const initialState = {
  currentUser: {
    username: "Login",
    userId: null,
    basket: [],
  },
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      // Save user data to sessionStorage
      sessionStorage.setItem('currentUser', JSON.stringify(action.user));
      
      return {
        ...state,
        currentUser: {
          username: action.user.username,
          userId: action.user.userId,
          basket: action.user.basket,
        },
      };
    
      case "UPDATE_BASKET":
  const updatedBasket = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem('currentUser'));
      const response = await instance.get(`/getbasket/${user.userId}`);
      console.log("Basket data fetched:", response.data);
      
      // Update user data in sessionStorage with the provided action user
      const updatedUser = {
        ...user,
        basket: response.data,
      };
      sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
      
      // Return updated state with the new basket data
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          basket: response.data,
        },
      };
    } catch (error) {
      console.error("Error updating basket:", error);
      // Return current state if an error occurs
      return state;
    }
  };
  return updatedBasket();

      
    case "LOGOUT":
      // Clear currentUser data from sessionStorage
      sessionStorage.removeItem('currentUser');
      return {
        ...state,
        currentUser: {
          username: "Login",
          userId: null,
          basket: [],
        },
      };
      case "ADD_TO_BASKET":
        console.log("Adding item to basket:", action.payload.item);
        // Asynchronous action, returning a promise
        return instance
          .post(`/addtobasket/${action.payload.user.userId}`, action.payload.item)
                    .then((response) => {
                      console.log("Item added to basket:", response.data.basket);
                      // Updating sessionStorage with new basket data
                      const updatedUser = {
                        ...JSON.parse(sessionStorage.getItem('currentUser')),
                        basket: response.data.basket
                      };
                      sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
                      window.location.reload();
                      return {
                        ...state,
                        currentUser: updatedUser
                      };
                      
                    })
          .catch((error) => {
            console.error("Error adding item to basket:", error);
            // Returning current state if an error occurs
            return state;
          });
      

    case "REMOVE_FROM_BASKET":
      // Asynchronous action, using async/await
      const removeItemFromBasket = async () => {
        try {
          const response = await instance.post(
            `/removefrombasket/${action.payload.user.userId}`,
            action.payload.item
          );
          console.log("Item removed from basket:", response.data);
        } catch (error) {
          console.error("Error removing item from basket:", error);
        }
      };
      // Executing the async function
      removeItemFromBasket();
      // Returning the state immediately, as the actual state update is handled asynchronously
      return state;

    default:
      return state;
  }
};
export default reducer;