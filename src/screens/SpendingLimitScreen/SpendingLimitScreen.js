import React from 'react';
import {Text, View} from 'react-native';
import TopBar from '../../component/TopBar';
import styles from './styles';

const SpendingLimitScreen = ({goBack}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar onPress={goBack} />
      </View>
    </View>
  );
};

export default SpendingLimitScreen;
