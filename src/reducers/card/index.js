import {handleActions} from 'redux-actions';

import {getCardInforRequest, getCardInforSuccess, onChangeLimitMoney} from '../../actions';

export const initialState = {
  isProcessing: false,
  limitMoney: undefined,
  cardInfo: {},
};

export default handleActions(
  {
    [getCardInforRequest]: state => ({
      ...state,
      isProcessing: true,
    }),
    [getCardInforSuccess]: (state, {payload: {cardInfo}}) => ({
      ...state,
      isProcessing: false,
      cardInfo: cardInfo,
    }),
    [onChangeLimitMoney]: (state, {payload: {limitMoney}}) => ({
      ...state,
      limitMoney: limitMoney,
    }),
  },
  initialState,
);
