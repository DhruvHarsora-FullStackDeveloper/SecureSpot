import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
const { verticalScale, horizontalScale, moderateScale } = Metrics;
const styles = StyleSheet.create({
  hederView: {
    height: verticalScale(50),
    backgroundColor: Colors.themeColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'space-between',
  },
  avatarView: {
    overflow: 'hidden',
    borderRadius: moderateScale(10),
    height: verticalScale(150),
    width: horizontalScale(200),
    alignSelf: 'center',
  },
  avatarStyle: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: moderateScale(18),
  },
  cameraIconView: {
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(25),
    position: 'absolute',
    bottom: verticalScale(10),
    right: horizontalScale(140),
  },
  cameraIcon: {
    height: moderateScale(22),
    width: moderateScale(22),
    tintColor: Colors.white,
  },
  backIcon: {
    height: verticalScale(26),
    width: horizontalScale(26),
    tintColor: Colors.white,
  },
  detailView: {
    marginHorizontal: horizontalScale(20),
    paddingLeft: horizontalScale(10),
    marginTop: verticalScale(30),
  },
  textInputStyle: {
    width: horizontalScale(300),
    height: verticalScale(30),
    backgroundColor: 'transparent',
    marginStart: 3,
    borderBottomColor: Colors.grey,
  },
  textStyle: {
    marginTop: verticalScale(10),
    color: Colors.placeHolderColor,
  },
});

export default styles;
