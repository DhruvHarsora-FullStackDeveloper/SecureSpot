import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
const { moderateScale, verticalScale, horizontalScale } = Metrics;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: moderateScale(20),
    marginLeft: horizontalScale(10),
    color: '#8a8a8a',
  },
  dataViewStyle: {
    justifyContent: 'center',
    marginHorizontal: horizontalScale(20),
  },
});
export default styles;
