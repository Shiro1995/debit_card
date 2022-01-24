import { colors } from '../../common/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  backBtn: {
    padding: 5,
    // backgroundColor: colors.white,
  },
  backArrow: {
    height: 18,
    width: 14,
  },
});

export default styles;
