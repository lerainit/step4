import { combineReducers } from "redux";
import cardIndexReducer from "./cardId/reducer";
import modalReducer from './modal/reducer'
import productsReducer from "./products/reducer";
import likesReducer from "./likes/reducer";
import BackgroundReducer from "./cardBackground/reducer";
import postsReducer from "./posts/reducer";
import UsersReducer from "./users/reducer";


const appReducer = combineReducers({
   modal:modalReducer,
   cardIndex:cardIndexReducer,
  products:productsReducer,
  counter:likesReducer,
 background:BackgroundReducer,
 posts:postsReducer,
 users:UsersReducer

})
export default appReducer