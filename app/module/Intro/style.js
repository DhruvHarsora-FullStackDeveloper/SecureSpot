import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { verticalScale, horizontalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  buttonCircle: {
    width: horizontalScale(44),
    height: verticalScale(44),
    backgroundColor: 'transparent',
    borderRadius: moderateScale(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonStyle: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: moderateScale(16),
    color: Colors.lightThemeColor,
  },
  doneButtonStyle: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: moderateScale(16),
    color: Colors.themeColor,
  },
  nextButtonStyle: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: moderateScale(16),
    color: Colors.themeColor,
  },
  viewStyle: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  textViewStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: verticalScale(600),
  },
  textStyle: {
    width: '70%',
    color: Colors.themeColor,
    fontWeight: '700',
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  dotStyle: {
    backgroundColor: Colors.lightThemeColor,
  },
});

export default styles;
