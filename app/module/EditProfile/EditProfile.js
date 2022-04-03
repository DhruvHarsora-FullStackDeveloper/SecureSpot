import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '../../assets/icons';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { ConstStrings, NavigationStrings } from '../../constants';
import { Colors } from '../../theme';

const EditProfile = ({ navigation }) => {
  return (
    <View>
      <View style={styles.hederView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NavigationStrings.PROFILE_SCREEN);
          }}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{ConstStrings.editProfile}</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>{ConstStrings.save}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.upperView}>
        <View style={styles.avatarView}>
          <Image
            source={{
              uri: 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png',
            }}
            style={styles.avatarStyle}
          />
        </View>
        <TouchableOpacity style={styles.cameraIconView}>
          <Image source={icons.camera} style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.detailView}>
        <Text style={styles.textStyle}>{ConstStrings.username}</Text>
        <TextInput
          style={styles.textInputStyle}
          activeUnderlineColor={Colors.themeColor}
        />
        <Text style={styles.textStyle}>{ConstStrings.email}</Text>
        <TextInput
          style={styles.textInputStyle}
          activeUnderlineColor={Colors.themeColor}
        />
        <Text style={styles.textStyle}>{ConstStrings.password}</Text>
        <TextInput
          style={styles.textInputStyle}
          activeUnderlineColor={Colors.themeColor}
        />
        <Text style={styles.textStyle}>{ConstStrings.masterKey}</Text>
        <TextInput
          style={styles.textInputStyle}
          activeUnderlineColor={Colors.themeColor}
        />
      </View>
    </View>
  );
};

export default EditProfile;
