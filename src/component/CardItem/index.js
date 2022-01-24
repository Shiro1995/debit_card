import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CONTENT} from '../../common/constant/string';
import {assets} from '../../common/theme';
import styles from './styles';

const CardItem = ({isShow, cardInfo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.hideTopRow}>
        <TouchableOpacity style={styles.hideBtn}>
          <View style={styles.btnContent}>
            <Image
              source={isShow ? assets.eyeHide : assets.eyeShow}
              style={styles.showHideIcon}
            />
            <Text style={styles.hideBtnTitle}>
              {isShow ? CONTENT.Show : CONTENT.Hide} {CONTENT.CardNumber}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image style={styles.aspireLogo} source={assets.aspireLogoWithText} />
          <Text style={styles.cardOwner}>{cardInfo.owner}</Text>
          <Text style={styles.cardNumber}>
            5647{'\t\t'}3411{'\t\t'}2020{'\t\t'}2413{' '}
          </Text>
          <View style={styles.endRow}>
            <Text style={styles.expiredText}>{CONTENT.Thru} {cardInfo.expireDate}</Text>
            <Text style={styles.CVVText}>{CONTENT.CVV} {cardInfo.cvvNumber}</Text>
          </View>
          <Image  style={styles.visaLogo} source={assets.visaLogo} />
        </View>
      </View>
    </View>
  );
};

export default CardItem;
