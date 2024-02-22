// Importing Axios instance
import instance from "./axios";
import { useNavigate } from 'react-router-dom';

// Define initial state
export const initialState = {
  currentUser: {
    username: "Login",
    userId: null,
    basket: [],
    orders: [],
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
          orders: action.user.orders,
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
                // Send a POST request to remove the item from the basket
                const response = await instance.post(
                  `/removefrombasket/${action.payload.user.userId}`,
                  action.payload.item
                );
                // console.log("Item removed from basket:", response.data.basket);
                // Update the current user's basket in sessionStorage with the updated basket received from the server
                const updatedUser = {
                  ...JSON.parse(sessionStorage.getItem('currentUser')),
                  basket: response.data.basket
                };
                sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
          
                // Reload the window after updating the basket
                window.location.reload();
          
                // Log success message
                console.log("Item removed from basket:ss", response.data.basket);
              } catch (error) {
                // Log error message if removal fails
                console.error("Error removing item from basket:", error);
              }
            };
          
            // Execute the async function to remove the item from the basket
            removeItemFromBasket();
          
            // Return the state immediately, as the actual state update is handled asynchronously
            return state;
          

    default:
      return state;
  }
};
export default reducer;