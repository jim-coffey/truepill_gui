import ProductAction from './ProductAction';
import { call, put } from 'redux-saga/effects';
import IAction from '../IAction';
import ProductService from './ProductService';

export default class ProductSaga {
  public static *getQuote(action: IAction<void>) {
    try {
      const { data: products } = yield call(ProductService.getProducts);

      if (products) {
        yield put(ProductAction.addProducts(products));
      }
    } catch (error) {
      yield put(ProductAction.addProducts([]));
    }
  }
}
