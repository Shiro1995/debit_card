import {getCardInforRequest, onChangeLimitMoney} from '../../actions';
import cardReducer, {initialState} from './index';

describe('card reducer', () => {
  it('returns the initialState', () => {
    expect(cardReducer(initialState, {})).toStrictEqual(initialState);
  });

  it('returns the state with limit Money', () => {
    const expectedState = {
      ...initialState,
      limitMoney: 3000,
    };
    const limitMoney = 3000;
    expect(cardReducer(initialState, onChangeLimitMoney({limitMoney}))).toStrictEqual(
      expectedState,
    );
  });

  it('returns the state with card information', () => {
    let cardInfo = {};
    const expectedState = {
      ...initialState,
      cardInfo: cardInfo,
      isProcessing: true,
    };
    expect(cardReducer(initialState, getCardInforRequest())).toStrictEqual(
      expectedState,
    );
  });
});
