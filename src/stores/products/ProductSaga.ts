import ProductAction from './ProductAction';
import { call, put } from 'redux-saga/effects';
import IAction from '../IAction';
import IProductUpdate from '../../stores/products/models/IProductUpdate';
import ProductService from './ProductService';

export default class ProductSaga {
  public static *getProducts(action: IAction<void>) {
    try {
      const { data: products } = yield call(ProductService.getProducts);

      if (products) {
        yield put(ProductAction.addProducts(products));
      }
    } catch (error) {
      yield put(ProductAction.addProducts([]));
    }
  }

  public static *setManualCount(action: IAction<IProductUpdate>) {
    try {
      const { affectedRows } = yield call(ProductService.bulkUpdate, action.payload);
      console.log(affectedRows);
      yield put(ProductAction.getProducts());
    } catch (error) {
      yield put(ProductAction.addProducts([]));
    }
  }
}
