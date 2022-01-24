import {all, put, takeLatest} from 'redux-saga/effects';
import {getCardInforRequest, getCardInforSuccess} from '../actions';

export const onGetCardInfoSaga = function* () {
  const cardInfo = yield fetchData();
  yield put(getCardInforSuccess({cardInfo}));
};

async function fetchData() {
  const res = await fetch('api/card');
  const json = await res.json();
 return json.card;
}

export const cardSaga = function* () {
  yield all([takeLatest(getCardInforRequest, onGetCardInfoSaga)]);
};
