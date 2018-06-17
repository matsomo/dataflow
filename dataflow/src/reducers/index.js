import { combineReducers } from 'redux';
import leftDataReducer from './leftDataReducer';


export default combineReducers({
  lefts: leftDataReducer
});
