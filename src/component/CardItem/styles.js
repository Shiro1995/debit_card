import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../common/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hideTopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  hideBtn: {
    backgroundColor: colors.white,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    height: 44,
  },
  btnContent: {
    flexDirection: 'row',
    marginHorizontal: 12,
    alignSelf: 'center',
    marginTop: 4,
  },
  showHideIcon: {
    alignSelf: 'center',
    marginRight: 6,
  },
  hideBtnTitle: {
    color: colors.greenAccent,
    fontFamily: fonts.avenirNextDemiBold,
  },
  cardContainer: {
    backgroundColor: colors.greenAccent,
    marginTop: -12,
    borderRadius: 12,
  },
  cardContent: {
    margin: 24,
  },
  aspireLogo: {
    alignSelf: 'flex-end',
  },
  cardOwner: {
    fontSize: 22,
    color: colors.white,
    fontFamily: fonts.avenirNextBold,
    marginTop: 24,
  },
  cardNumber: {
    marginTop: 24,
    color: colors.white,
    fontFamily: fonts.avenirNextDemiBold,
  },
  endRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  expiredText: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.avenirNextDemiBold,
  },
  CVVText: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.avenirNextDemiBold,
    marginLeft: 32,
  },
  visaLogo: {
    alignSelf: 'flex-end',
  },
});

export default styles;
