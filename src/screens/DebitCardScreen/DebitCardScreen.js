import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {formatNumber, MENU_LIST} from '../../common/constant';

import {CONTENT} from '../../common/constant/string';
import {assets, colors} from '../../common/theme';
import CardItem from '../../component/CardItem';
import styles from './styles';

const DebitCardScreen = ({onNavigate, isLimit, setIsLimit, limitMoney, cardInfo}) => {
  const marginTopList = {marginTop: isLimit ? 0 : -30};

  const MenuItem = ({onSwitch, item}) => {
    const DescriptionText =
      item.id === 2 ? (
        <Text style={styles.itemDescription}>
          {onSwitch ? item.description : CONTENT.YouHavent}
          {onSwitch && formatNumber(limitMoney)}
        </Text>
      ) : (
        <Text style={styles.itemDescription}>{item.description}</Text>
      );
    return (
      <TouchableOpacity style={styles.rowItem} disabled={item.isSwitch}>
        <View style={styles.leftRow}>
          <Image source={item.icon} style={styles.rowIcon} />
          <View style={styles.rowContent}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            {DescriptionText}
          </View>
        </View>
        {item.isSwitch && (
          <Switch
            style={styles.switch}
            trackColor={{false: colors.grey, true: colors.greenAccent}}
            thumbColor={colors.white}
            value={item.id === 2 && onSwitch}
            onChange={() => {
              item.id === 2 && onNavigate(onSwitch);
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{CONTENT.DebitCard}</Text>
            <Image source={assets.aspireLogoGreen} style={styles.topLogo} />
          </View>
          <Text style={styles.availableBalance}>
            {CONTENT.AvailableBalance}
          </Text>
          <View style={styles.rowCurrency}>
            <Text style={styles.unit}>{CONTENT.S$}</Text>
            <Text style={styles.currency}>{cardInfo.balance_amount && formatNumber(cardInfo.balance_amount)}</Text>
          </View>
        </View>
        <SafeAreaView style={styles.mainContent}>
          <View style={styles.scrollContent}>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}>
              <View style={styles.cardStyle}>
                <CardItem isShow={true} cardInfo={cardInfo} />
              </View>
              <View style={styles.contentView}>
                <View style={styles.listView}>
                  {isLimit && (
                    <View style={styles.cardLimitContainer}>
                      <View style={styles.limitTopRow}>
                        <Text style={styles.limitTitle}>
                          {CONTENT.DebitSpendLimit}
                        </Text>
                        <View style={styles.rightRow}>
                          <Text style={styles.currentMoney}>
                            {CONTENT.$}{cardInfo.amountSpent}
                          </Text>
                          <Text style={styles.limitMoney}>
                            {'\t'}|{'\t'}
                            {!!limitMoney && limitMoney}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.progressBar}>
                        <View style={styles.progress}></View>
                      </View>
                    </View>
                  )}
                </View>
                <View style={[styles.menuContent, marginTopList]}>
                  {MENU_LIST.map(item => {
                    return (
                      <MenuItem
                        key={item.id}
                        item={item}
                        onSwitch={isLimit}
                        setOnSwitch={setIsLimit}
                      />
                    );
                  })}
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default DebitCardScreen;
