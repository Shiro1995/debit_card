import React, {useState} from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {formatCardNumber} from '../../common/constant';
import {CONTENT} from '../../common/constant/string';
import {assets} from '../../common/theme';
import styles from './styles';

const CardItem = ({cardInfo}) => {
  const [isShow, setIsShow] = useState(true);

  const cardNumber = isShow
    ? formatCardNumber(cardInfo.cardNumber)
    :  '• • • •\t\t• • • •\t\t• • • •\t\t' + cardInfo.cardNumber.slice(-4);

  const cvvNumber = isShow ? cardInfo.cvvNumber : '* * *';

  return (
    <View style={styles.container}>
      <View style={styles.hideTopRow}>
        <TouchableOpacity
          style={styles.hideBtn}
          onPress={() => {
            setIsShow(!isShow);
          }}>
          <View style={styles.btnContent}>
            <Image
              source={isShow ? assets.eyeHide : assets.eyeShow}
              style={styles.showHideIcon}
            />
            <Text style={styles.hideBtnTitle}>
              {isShow ? CONTENT.Hide : CONTENT.Show} {CONTENT.CardNumber}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image style={styles.aspireLogo} source={assets.aspireLogoWithText} />
          <Text style={styles.cardOwner}>{cardInfo.owner}</Text>
          <Text style={styles.cardNumber}> {cardNumber}</Text>
          <View style={styles.endRow}>
            <Text style={styles.expiredText}>
              {CONTENT.Thru} {cardInfo.expireDate}
            </Text>
            <Text style={styles.CVVText}>
              {CONTENT.CVV} {cvvNumber}
            </Text>
          </View>
          <Image style={styles.visaLogo} source={assets.visaLogo} />
        </View>
      </View>
    </View>
  );
};

export default CardItem;
