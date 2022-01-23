import React, {useState} from 'react';
import {SPENDING_LIMIT_SCREEN} from '../../navigation/screenName';

import DebitCardScreen from './DebitCardScreen';

const DebitCard = ({navigation}) => {
  const [isLimit, setIsLimit] = useState(false);

  const onNavigate = () => {
    navigation.navigate(SPENDING_LIMIT_SCREEN);
  };

  return (
    <DebitCardScreen
      onNavigate={onNavigate}
      isLimit={isLimit}
      setIsLimit={setIsLimit}
    />
  );
};

export default DebitCard;
