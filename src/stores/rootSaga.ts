import { all, ForkEffect, takeLatest } from 'redux-saga/effects';
import QuoteAction from './products/ProductAction';
import QuoteSaga from './products/ProductSaga';

export default function* rootSaga() {
  const filteredSagas: ForkEffect[] = [takeLatest(QuoteAction.GET_PRODUCTS, QuoteSaga.getQuote)];

  yield all(filteredSagas);
}
