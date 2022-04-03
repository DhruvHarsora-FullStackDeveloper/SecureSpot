import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
const { moderateScale, verticalScale, horizontalScale } = Metrics;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: moderateScale(30),
    color: Colors.themeColor,
    fontWeight: 'bold',
  },
  titleContainer: {
    marginVertical: verticalScale(25),
  },
  addButton: {
    backgroundColor: Colors.themeColor,
    borderRadius: moderateScale(100),
    width: moderateScale(60),
    height: moderateScale(60),
    position: 'absolute',
    bottom: verticalScale(20),
    right: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    tintColor: Colors.white,
    height: moderateScale(25),
    width: moderateScale(25),
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.modalColor,
  },
  keyboardAvoidingStyle: {
    backgroundColor: Colors.white,
    width: '100%',
    borderTopStartRadius: verticalScale(20),
    borderTopEndRadius: verticalScale(20),
  },
  bodyContainer: {
    padding: moderateScale(10),
    paddingBottom: verticalScale(40),
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    textAlign: 'left',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: Colors.themeColor,
    borderRadius: 10,
  },
  cancelStyle: {
    textAlign: 'left',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: Colors.red,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: moderateScale(18),
    color: Colors.white,
  },
  addDetailsStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  textInputField: {
    width: moderateScale(280),
    height: moderateScale(50),
    fontSize: moderateScale(18),
  },
  card: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  emailStyle: {
    padding: moderateScale(10),
    backgroundColor: Colors.themeColor,
  },
  noteStyle: {
    padding: moderateScale(10),
  },
  pswdStyle: {
    padding: moderateScale(10),
  },
  noDataFoundStyle: {
    color: Colors.themeColor,
    fontSize: moderateScale(15),
    fontWeight: '700',
    letterSpacing: 2,
  },
});

export default styles;
