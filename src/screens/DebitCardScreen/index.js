import React, {useCallback, useState} from 'react';
import {SPENDING_LIMIT_SCREEN} from '../../navigation/screenName';

import DebitCardScreen from './DebitCardScreen';

const DebitCard = ({navigation}) => {
  const [isLimit, setIsLimit] = useState(false);

  const onNavigate = useCallback(onSwitch => {
    if (!onSwitch) {
      navigation.navigate(SPENDING_LIMIT_SCREEN);
    }
    setIsLimit(!onSwitch);
  },[]);

  return (
    <DebitCardScreen
      onNavigate={onNavigate}
      isLimit={isLimit}
      setIsLimit={setIsLimit}
    />
  );
};

export default DebitCard;
