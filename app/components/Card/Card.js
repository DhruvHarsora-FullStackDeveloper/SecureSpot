import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icons from '../../assets/icons';
import { DeleteData } from '../../SQLite/sqlite';
import { Colors, Metrics } from '../../theme';
import styles from './styles';
const { moderateScale, verticalScale, horizontalScale } = Metrics;

const Card = props => {
  const { email, password, note, id, showData, setData } = props;

  return (
    <View style={myStyles.screen}>
      <View style={{ ...myStyles.card, ...props.style }}>
        <View>
          <View style={myStyles.fieldView}>
            <Image source={Icons.email} style={myStyles.iconStyle} />
            <Text style={styles.textStyle}>{email} </Text>
          </View>
          <View style={myStyles.fieldView}>
            <Image source={Icons.key} style={myStyles.iconStyle} />
            <Text style={styles.textStyle}>{password} </Text>
          </View>
          <View style={myStyles.fieldView}>
            <Image source={Icons.note} style={myStyles.iconStyle} />
            <Text style={styles.textStyle}>{note} </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={myStyles.deleteView}
        activeOpacity={0.5}
        onPress={() => {
          DeleteData(id);
          showData(setData);
        }}>
        <Image source={Icons.delete} style={myStyles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

const myStyles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.greyBlue,
    marginVertical: verticalScale(7),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    width: horizontalScale(300),
    flexDirection: 'row',
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
  },
  fieldView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
    tintColor: Colors.themeColor,
  },
  deleteView: {
    backgroundColor: 'red',

    right: horizontalScale(0),
    height: verticalScale(94),
    width: horizontalScale(40),
    borderBottomRightRadius: horizontalScale(10),
    borderTopRightRadius: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    height: moderateScale(30),
    width: moderateScale(30),
    tintColor: Colors.white,
  },
});
export default Card;
