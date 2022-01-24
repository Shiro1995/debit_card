import {testSaga} from 'redux-saga-test-plan';
import {takeLatest} from 'redux-saga/effects';

import {getCardInforRequest, getCardInforSuccess} from '../actions';
import {cardSaga, onGetCardInfoSaga} from './card';

describe('card saga', () => {
  it('should invoke a correct saga', () => {
    testSaga(cardSaga)
      .next()
      .all([takeLatest(getCardInforRequest, onGetCardInfoSaga)])
      .finish()
      .isDone();
  });
});

describe('onGetCardSaga', () => {
    let cardInfo = {
    owner: 'Mark Henry',
    cardNumber: '5647341124132020',
    cvvNumber: '456',
    expireDate: '12/20',
    balance_amount: 3000,
    amountSpent: 4567,
  };

  async function fetchData() {
    const res = await fetch('api/card');
    const json = await res.json();
   return json.card;
  }

  it('should on get card info', () => {
    testSaga(onGetCardInfoSaga, getCardInforRequest)
      .next()
      .next(cardInfo = fetchData)
      .put(getCardInforSuccess({cardInfo}))
      .next()
      .isDone();
  });
});
