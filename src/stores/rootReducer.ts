import IStore from './IStore';
import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import ProductReducer from './products/ProductReducer';

const reducerMap: ReducersMapObject = {
  productReducer: ProductReducer.reducer
};

export default combineReducers(reducerMap) as Reducer<IStore>;
