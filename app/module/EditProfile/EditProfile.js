import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomInput } from '../../components';
import { ConstStrings, NavigationStrings } from '../../constants';
import { onUserSelectors } from '../../redux/UserRedux';
import styles from './styles';
onUserSelectors;
const EditProfile = ({ navigation }) => {
  const getdata = useSelector(onUserSelectors.getLoginData);
  const { user } = getdata;

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
            source={icons.profilePic}
            style={styles.avatarStyle}
            resizeMode="stretch"
          />
        </View>
        <TouchableOpacity style={styles.cameraIconView}>
          <Image source={icons.camera} style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.detailView}>
        <CustomInput
          label={ConstStrings.username}
          customStyle={styles.textInput}
          autoCapitalize={'none'}
          value={user.username}
        />
        <CustomInput
          label={ConstStrings.email}
          keyboardType="email-address"
          customStyle={styles.textInput}
          autoCapitalize={'none'}
        />
        <CustomInput
          label="Password"
          style={styles.textInput}
          autoCapitalize={'none'}
        />
        <CustomInput
          label={ConstStrings.masterKey}
          customStyle={styles.textInput}
          autoCapitalize={'none'}
        />
      </View>
    </View>
  );
};

export default EditProfile;
