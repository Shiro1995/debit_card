import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, fonts} from '../../common/theme';


const marginTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    addingTop: marginTop,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    marginHorizontal: 24,
    position: 'absolute',
    right: 0,
    left: 0,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    marginTop: 32,
    fontFamily: fonts.avenirNextBold,
    color: colors.white,
  },
  topLogo: {
    marginTop: 16,
  },
  availableBalance: {
    color: colors.white,
    marginTop: 24,
    fontFamily: fonts.avenirNexMedium,
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
    color: colors.white,
    fontFamily: fonts.avenirNextBold,
    marginLeft: 10,
  },
  scrollContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  cardStyle: {
    marginHorizontal: 24,
    paddingTop: 150,
    zIndex: 1,
  },
  mainContent: {
    flex: 1,
    addingTop: marginTop,
  },
  contentView: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    marginTop: -150,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  listView: {
    paddingTop: 176,
  },
  cardLimitContainer: {
    flex: 1,
  },
  limitTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightRow: {
    flexDirection: 'row',
  },
  limitTitle: {
    fontSize: 13,
    color: colors.black,
    fontFamily: fonts.avenirNexMedium,
  },
  currentMoney: {
    fontSize: 13,
    color: colors.greenAccent,
    fontFamily: fonts.avenirNextBold,
  },
  limitMoney: {
    fontSize: 13,
    color: colors.greyAccent,
    fontFamily: fonts.avenirNextMedium,
  },
  progressBar: {
    backgroundColor: colors.greenAccent10,
    height: 15,
    marginTop: 6,
    borderRadius: 30,
  },
  progress: {
    height: 15,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderRightWidth: 6,
    borderTopWidth: 15,
    borderRightColor: 'transparent',
    borderTopColor: colors.greenAccent,
  },
  menuContent: {
    flex: 1,
    marginBottom: 20,
  },
  rowItem: {
    flexDirection: 'row',
    marginTop: 34,
    justifyContent: 'space-between',
  },
  leftRow: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  rowContent: {
    marginLeft: 12,
  },
  rowIcon: {
    alignSelf: 'center',
  },
  itemTitle: {
    fontFamily: fonts.avenirNextMedium,
    color: colors.blue,
  },
  itemDescription: {
    fontFamily: fonts.avenirNextRegular,
    marginRight: 20,
  },
  switch: {
    flexShrink: 1,
  },
  loadingContainer: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  }
});

export default styles;
