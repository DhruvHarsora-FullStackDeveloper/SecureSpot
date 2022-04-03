import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';
const { moderateScale, verticalScale, horizontalScale } = Metrics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(40),
    backgroundColor: Colors.white,
  },
  headerContainer: { marginTop: 70 },
  headerText: {
    fontSize: moderateScale(30),
    fontWeight: '800',
    marginBottom: verticalScale(10),
    color: Colors.themeColor,
    alignSelf: 'flex-start',
  },
  subTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(40),
  },
  text: {
    color: Colors.themeColor,
    fontSize: moderateScale(16),
    fontWeight: '800',
  },
  normalText: {
    fontWeight: '500',
    fontSize: moderateScale(13),
    color: Colors.black,
  },
  boldText: {
    fontWeight: 'bold',
    paddingVertical: verticalScale(10),
    fontSize: moderateScale(16),
    color: Colors.themeColor,
  },
  textInput: {
    width: horizontalScale(290),
    maxWidth: horizontalScale(400),
  },

  btn: {
    backgroundColor: Colors.themeColor,
    alignSelf: 'center',
    width: horizontalScale(290),
    padding: moderateScale(12),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30),
  },
  iconStyle: { width: horizontalScale(20), height: moderateScale(20) },
  imageContainer: {
    position: 'absolute',
    top: verticalScale(32),
    right: horizontalScale(20),
  },
});
export default styles;
