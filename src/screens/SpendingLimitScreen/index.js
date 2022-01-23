import React, {useLayoutEffect} from 'react';
import {backButtonOptions} from '../../navigation/navigationOptions';
import SpendingLimitScreen from './SpendingLimitScreen';
import styles from './styles';

const SpendingLimit = ({navigation}) => {
  const style = styles.navigationBar;

  const goBack = () => {
    navigation.goBack();
  };

  return <SpendingLimitScreen goBack={goBack} />;
};

export default SpendingLimit;
