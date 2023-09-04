

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from '../slices/feedslicer'
import downloaderReducer from '../slices/downloaderslicer'
import authReducer from '../slices/authslicer';
 


const rootReducer = combineReducers({
  downloaders: downloaderReducer, // Add each reducer slice here
  feeds: gameReducer,
  auths:authReducer,
  // Add more reducer slices as needed
});
export const store = configureStore({
  reducer: rootReducer,
  
  
})