import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CONTENT} from '../../common/constant';
import styles from './styles';

const DebitCardScreen = ({onNavigate}) => {
  return (
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title} >{CONTENT.DebitCard}</Text>
        </View>
        <Button onPress={onNavigate} title="Hello" />
      </View>
    </SafeAreaView>
  );
};

export default DebitCardScreen;
