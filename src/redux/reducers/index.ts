import { combineReducers } from 'redux';
import CatsReducer, { initState as CatsState } from './CatsReducer';

export const defaultState : ReduxModels.IDefaultState =  {
  cats: CatsState,
}

export default combineReducers({
  cats: CatsReducer,
});