import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, verticalScale, horizontalScale } = Metrics;

const styles = StyleSheet.create({
  avatar: {
    width: horizontalScale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(63),
    borderWidth: moderateScale(4),
    borderColor: 'white',
    marginBottom: verticalScale(10),
    margin: moderateScale(10),
  },
  userDetails: {
    backgroundColor: 'red',
    height: verticalScale(230),
    width: '100%',
    padding: moderateScale(10),
  },
  buttons: {
    height: verticalScale(25),
    margin: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  arrow: {
    height: verticalScale(30),
    width: horizontalScale(30),
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  profileText1: {
    fontSize: moderateScale(30),
  },
  profileText2: {
    fontSize: moderateScale(15),
  },
  userProfileView: {
    flexDirection: 'row',
  },
  editButton: {
    height: verticalScale(25),
    width: horizontalScale(25),
    borderRadius: moderateScale(20),
    tintColor: Colors.white,
  },
  editButtonView: {
    height: verticalScale(35),
    width: horizontalScale(35),
    position: 'absolute',
    right: horizontalScale(20),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: Colors.themeColor,
  },
});
export default styles;
