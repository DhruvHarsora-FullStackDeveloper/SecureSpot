import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
const { moderateScale } = Metrics;

const styles = StyleSheet.create({
  btn: {
    padding: moderateScale(10),
    width: moderateScale(90),
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  btntext: { color: Colors.white, fontWeight: 'bold', fontSize: 15 },
});
export default styles;
