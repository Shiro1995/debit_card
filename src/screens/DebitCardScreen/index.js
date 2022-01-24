import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SPENDING_LIMIT_SCREEN} from '../../navigation/screenName';
import {getCardInforRequest} from '../../actions';
import DebitCardScreen from './DebitCardScreen';

const DebitCard = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLimit, setIsLimit] = useState(false);
  const limitMoney = useSelector(state => state.cardState.limitMoney);
  const cardInfo = useSelector(state => state.cardState.cardInfo);
  const isProcessing = useSelector(state => state.cardState.isProcessing);

  const onNavigate = useCallback(onSwitch => {
    if (!onSwitch) {
      navigation.navigate(SPENDING_LIMIT_SCREEN, {onBack: onBack});
    }
    setIsLimit(!onSwitch);
  }, []);

  const onBack = () => {
    if (!limitMoney) {
      setIsLimit(false);
    }
  };

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
      isProcessing={isProcessing}
    />
  );
};

export default DebitCard;
