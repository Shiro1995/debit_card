import {StyleSheet} from 'react-native';

import {marginTop} from '../../common/constant';
import {colors, fonts} from '../../common/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    addingTop: marginTop,
    backgroundColor: colors.background,
  },
  topBar: {
    marginHorizontal: 24,
  }
});

export default styles;
