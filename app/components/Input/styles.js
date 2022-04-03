import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, verticalScale } = Metrics;
const styles = StyleSheet.create({
  textInput: {
    marginVertical: verticalScale(10),
    color: Colors.black,
    fontWeight: '500',
    fontSize: moderateScale(15),
    padding: 0,
  },
});
export default styles;
