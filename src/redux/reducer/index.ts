import {combineReducers} from 'redux';
import favReducer from './fav/reducer';

const rootReducer = combineReducers({
  fav: favReducer,
});

export default rootReducer;
