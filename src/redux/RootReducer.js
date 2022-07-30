import {combineReducers} from 'redux';
import authReducer from './reducer/authReducer';
import registerReducer from './reducer/registerReducer';
import hidereducer from './reducer/HideMsgaReducer';
export default combineReducers({
  authReducer,
  registerReducer,
  hidereducer
});
