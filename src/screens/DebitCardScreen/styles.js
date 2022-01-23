import {Platform, StatusBar, StyleSheet} from 'react-native';

import {colors, fonts} from '../../common/theme';

const marginTop = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    addingTop: marginTop,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    marginTop: 32,
    fontFamily: 'AvenirNextLTPro-Bold',
    color: colors.white,
  }
});

export default styles;
