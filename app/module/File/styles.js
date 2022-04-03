import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, verticalScale, horizontalScale } = Metrics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  addIcon: {
    tintColor: Colors.white,
    height: moderateScale(25),
    width: moderateScale(25),
  },
  welcome: {
    color: Colors.themeColor,
    fontSize: moderateScale(30),
    padding: moderateScale(10),
  },
  addButton: {
    backgroundColor: Colors.themeColor,
    borderRadius: moderateScale(25),
    width: moderateScale(50),
    height: moderateScale(50),
    position: 'absolute',
    bottom: verticalScale(100),
    right: horizontalScale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileViewContainer: {
    width: horizontalScale(330),
    height: verticalScale(70),

    borderColor: Colors.themeColor,
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    margin: moderateScale(10),
  },
  text: {
    marginLeft: verticalScale(12),
    padding: moderateScale(12),
    color: Colors.black,
    width: horizontalScale(250),
  },
  imageContainer: {
    position: 'absolute',
    right: horizontalScale(30),
  },
  image: {
    tintColor: Colors.themeColor,
    height: moderateScale(30),
    width: moderateScale(30),
  },
});

export default styles;
