import React, {useCallback, useEffect, useState} from 'react';

import {SPENDING_LIMIT_SCREEN} from '../../navigation/screenName';
import DebitCardScreen from './DebitCardScreen';
import {useDispatch, useSelector} from 'react-redux';
import {getCardInforRequest} from '../../actions';
import { createServer } from '../../store/mockApi';
import { Dimensions } from 'react-native';

const DebitCard = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLimit, setIsLimit] = useState(false);
  const limitMoney = useSelector(state => state.cardState.limitMoney);
  const cardInfo = useSelector(state =>  state.cardState.cardInfo);

  const onNavigate = useCallback(onSwitch => {
    if (!onSwitch) {
      navigation.navigate(SPENDING_LIMIT_SCREEN);
    }
    setIsLimit(!onSwitch);
  }, []);

  useEffect(() => {
    dispatch(getCardInforRequest());
  }, []);

  return (
    <DebitCardScreen
      onNavigate={onNavigate}
      isLimit={isLimit}
      setIsLimit={setIsLimit}
      limitMoney={limitMoney}
      cardInfo={cardInfo}
    />
  );
};

export default DebitCard;
