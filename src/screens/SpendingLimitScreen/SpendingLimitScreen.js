import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {formatNumber} from '../../common/constant';
import {CONTENT} from '../../common/constant/string';
import {assets, colors} from '../../common/theme';
import TopBar from '../../component/TopBar';
import styles from './styles';

const SpendingLimitScreen = ({
  goBack,
  listSelect,
  moneySelected,
  changeLimitMoney,
  setMoneySelected,
}) => {
  const backgroundEnable = moneySelected && {
    backgroundColor: colors.greenAccent,
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TopBar onPress={goBack} />
          <Text style={styles.title}>{CONTENT.SpendingLimit}</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.content}>
            <View style={styles.weeklyRow}>
              <Image source={assets.gauge} />
              <Text style={styles.titleWeekly}>{CONTENT.SetAWeekly}</Text>
            </View>
            <View style={styles.rowCurrency}>
              <Text style={styles.unit}>{CONTENT.S$}</Text>
              <Text style={styles.currency}>
                {!!moneySelected && formatNumber(moneySelected)}
              </Text>
            </View>
            <Text style={styles.description}>{CONTENT.HereWeeklyMeans} </Text>
            <View style={styles.chosenRow}>
              {listSelect.map(item => (
                <TouchableOpacity
                  key={item}
                  style={styles.btnOption}
                  onPress={() => setMoneySelected(item)}>
                  <Text style={styles.value}>
                    {CONTENT.S$} {formatNumber(item)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={[styles.btnSave, backgroundEnable]}
            disabled={!moneySelected}
            onPress={() => {
              changeLimitMoney(moneySelected);
            }}>
            <Text style={styles.textSave}>{CONTENT.Save} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpendingLimitScreen;
