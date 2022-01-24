import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import { assets } from '../../common/theme';
import styles from './styles';

const TopBar = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={onPress}>
        <Image source={assets.backArrow} style={styles.backArrow} />
      </TouchableOpacity>
      <Image source={assets.aspireLogoGreen} />
    </View>
  );
};
export default TopBar;
