import {all, put, takeLatest} from 'redux-saga/effects';
import {getCardInforRequest, getCardInforSuccess} from '../actions';



export const onGetCardInfoSaga = function* () {
  let cardInfo;
   yield fetch('api/card')
    .then(res => res.json())
    .then(json => {
      cardInfo = json.card;
    });
  yield put(getCardInforSuccess({cardInfo}));
};



export const cardSaga = function* () {
  yield all([takeLatest(getCardInforRequest, onGetCardInfoSaga)]);
};
