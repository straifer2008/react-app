import {combineReducers} from 'redux';
import {mainMenuReducer} from "./mainMenu";
import {routerAnimationTimeReducer} from "./routerAnimationTime";
import {searchProductsReducer} from "./searchList";

export default combineReducers({
  mainMenuReducer,
  routerAnimationTimeReducer,
  searchProductsReducer
});

