import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'transparent',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonStyle: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: 16,
    color: Colors.lightThemeColor,
  },
  doneButtonStyle: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: 16,
    color: Colors.themeColor,
  },
  nextButtonStyle: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: 16,
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
    marginTop: 600,
  },
  textStyle: {
    width: '70%',
    color: Colors.themeColor,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  dotStyle: {
    backgroundColor: Colors.lightThemeColor,
  },
});

export default styles;
