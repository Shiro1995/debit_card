import { all, put, takeLatest } from 'redux-saga/effects';
import { getCardInforRequest, getCardInforSuccess } from '../actions';

export const onGetCardInfoSaga = function* ({ payload: { data } }) {
    console.log(data);
    yield put(getCardInforSuccess());
  }

export const cardSaga = function*() {
    yield all([takeLatest(getCardInforRequest, onGetCardInfoSaga)]);
}