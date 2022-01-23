import {handleActions} from 'redux-actions';
import { getCardInforRequest, getCardInforSuccess } from '../../actions';

export const initialState = {
  isProcessing: false,
  isShowPopup: false,
  error: undefined,
};

export default handleActions(
  {
    [getCardInforRequest]: state => ({
      ...state,
      isProcessing: true,
    }),
    [getCardInforSuccess]: state => ({
        ...state,
        isProcessing: false,
      }),
  },
  initialState,
);
