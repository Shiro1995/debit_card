import { createAction } from 'redux-actions';

export const getCardInforRequest = createAction('GET_CARD_INFO_REQUEST');
export const getCardInforSuccess = createAction('GET_CARD_INFO_SUCCESS');
export const onChangeLimitMoney = createAction('ON_CHANGE_LIMIT_MONEY');