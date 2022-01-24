import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onChangeLimitMoney} from '../../actions';

import SpendingLimitScreen from './SpendingLimitScreen';

const SpendingLimit = ({navigation}) => {
  const dispatch = useDispatch();
  const listSelect = [5000, 10000, 20000];
  const [moneySelected, setMoneySelected] = useState();
  const limitMoney = useSelector(state => state.cardState.limitMoney);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setMoneySelected(limitMoney);
  }, []);

  const changeLimitMoney = limitMoney => {
    dispatch(onChangeLimitMoney({limitMoney}));
    navigation.pop();
  };

  return (
    <SpendingLimitScreen
      goBack={goBack}
      listSelect={listSelect}
      moneySelected={moneySelected}
      changeLimitMoney={changeLimitMoney}
      setMoneySelected={setMoneySelected}
    />
  );
};

export default SpendingLimit;
