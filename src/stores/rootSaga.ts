import { all, ForkEffect, takeLatest } from 'redux-saga/effects';
import ProductAction from './products/ProductAction';
import ProductSaga from './products/ProductSaga';

export default function* rootSaga() {
  const filteredSagas: ForkEffect[] = [
    takeLatest(ProductAction.GET_PRODUCTS, ProductSaga.getProducts),
    takeLatest(ProductAction.SET_MANUAL_COUNT, ProductSaga.setManualCount)
  ];

  yield all(filteredSagas);
}
