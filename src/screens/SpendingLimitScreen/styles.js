import {Platform, StatusBar, StyleSheet} from 'react-native';

import {colors, fonts} from '../../common/theme';

const marginTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    addingTop: marginTop,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    addingTop: marginTop,
    backgroundColor: colors.background,
  },
  topBar: {
    marginHorizontal: 24,
  },
  title: {
    fontSize: 24,
    marginTop: 4,
    fontFamily: fonts.avenirNextBold,
    color: colors.white,
  },
  contentView: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: 40,
  },
  content: {
    flex: 1,
  },
  weeklyRow: {
    flexDirection: 'row',
    marginTop: 32,
  },
  titleWeekly: {
    fontFamily: fonts.avenirNextMedium,
    marginLeft: 12,
    color: colors.black,
  },
  rowCurrency: {
    flexDirection: 'row',
    marginTop: 15,
  },
  unit: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.avenirNextBold,
    paddingHorizontal: 12,
    paddingVertical: 3,
    backgroundColor: colors.greenAccent,
    borderRadius: 4,
    alignSelf: 'center',
  },
  currency: {
    fontSize: 24,
    fontFamily: fonts.avenirNextBold,
    marginLeft: 10,
    color: colors.black,
  },
  description: {
    marginTop: 18,
    color: colors.grey,
  },
  chosenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  btnOption: {
    backgroundColor: colors.greenAccent7,
  },
  value: {
    textAlignVertical: 'center',
    color: colors.greenAccent,
    height: 40,
    marginHorizontal: 16,
  },
  btnSave: {
    marginBottom: 24,
    borderRadius: 30,
    marginHorizontal: 27,
    backgroundColor: colors.lightGrey,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
  },
  textSave: {
    paddingVertical: 17,
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.avenirNextDemiBold,
  }
});

export default styles;
