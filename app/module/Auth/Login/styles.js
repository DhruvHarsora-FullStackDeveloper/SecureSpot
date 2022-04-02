import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';
const { moderateScale, verticalScale, horizontalScale } = Metrics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(40),
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
    marginTop: moderateScale(10),
    marginBottom: moderateScale(40),
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
    fontSize: moderateScale(15),
    color: Colors.themeColor,
  },
  textInput: {
    width: moderateScale(290),
    maxWidth: moderateScale(400),
  },

  btn: {
    backgroundColor: Colors.themeColor,
    alignSelf: 'center',
    width: moderateScale(290),
    padding: moderateScale(12),
    marginTop: moderateScale(10),
    marginBottom: verticalScale(30),
  },
  iconStyle: { width: moderateScale(20), height: moderateScale(20) },
  imageContainer: {
    position: 'absolute',
    top: moderateScale(32),
    right: moderateScale(20),
  },
});
export default styles;
