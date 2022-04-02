import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, verticalScale } = Metrics;
const styles = StyleSheet.create({
  textInput: {
    height: moderateScale(50),
    marginVertical: verticalScale(10),
    color: Colors.black,
    fontWeight: '500',
    fontSize: moderateScale(20),
  },
});
export default styles;
