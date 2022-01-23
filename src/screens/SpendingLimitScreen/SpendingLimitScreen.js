import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {CONTENT} from '../../common/constant/string';
import {assets} from '../../common/theme';
import TopBar from '../../component/TopBar';
import styles from './styles';

const SpendingLimitScreen = ({goBack}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TopBar onPress={goBack} />
          <Text style={styles.title}>{CONTENT.SpendingLimit}</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.content} >
            <View style={styles.weeklyRow}>
              <Image source={assets.gauge} />
              <Text style={styles.titleWeekly}>{CONTENT.SetAWeekly}</Text>
            </View>
            <View style={styles.rowCurrency}>
              <Text style={styles.unit}>{CONTENT.S$}</Text>
              <Text style={styles.currency}>5,000</Text>
            </View>
            <Text style={styles.description}>{CONTENT.HereWeeklyMeans} </Text>
            <View style={styles.chosenRow}>
              <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.value}>{CONTENT.S$} 5,000 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.value}>{CONTENT.S$} 10,000 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.value}>{CONTENT.S$} 20,000 </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.btnSave} >
            <Text style={styles.textSave} >{CONTENT.Save} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpendingLimitScreen;
