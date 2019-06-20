import ProductAction from './ProductAction';
import IAction from '../IAction';
import IProductReducerState from './models/IProductReducerState';
import IProduct from './models/IProduct';

export default class QuoteReducer {
  private static readonly _initialState: IProductReducerState = {
    products: []
  };

  public static reducer(
    state: IProductReducerState = QuoteReducer._initialState,
    action: IAction<any>
  ): IProductReducerState {
    switch (action.type) {
      case ProductAction.ADD:
        return QuoteReducer._addProducts(state, action);
      default:
        return state;
    }
  }

  private static _addProducts(state: IProductReducerState, action: IAction<IProduct[]>): IProductReducerState {
    if (!action.payload) {
      return {
        ...state
      };
    }

    return {
      ...state,
      products: [...action.payload]
    };
  }
}
