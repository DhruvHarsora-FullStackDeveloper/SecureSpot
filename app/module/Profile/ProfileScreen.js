import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { default as Icons, default as icons } from '../../assets/icons';
import { ConstStrings, NavigationStrings } from '../../constants';
import UserActions, { onUserSelectors } from '../../redux/UserRedux';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const getLogoutValue = useSelector(onUserSelectors.getLogOutData);
  const onLogoutPress = () => {
    dispatch(UserActions.logOutRequest());
    if (getLogoutValue.userValue == null) {
      navigation.replace(NavigationStrings.LOGIN);
    }
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.userProfile}>
          <Image style={styles.avatar} source={icons.profilePic} />
          <View style={styles.userProfileView}>
            <View>
              <Text style={styles.profileText1}>{ConstStrings.fullName}</Text>
              <Text style={styles.profileText2}>{ConstStrings.username}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.editButtonView}
            onPress={() => {
              navigation.navigate(NavigationStrings.EDIT_PROFILE_SCREEN);
            }}>
            <Image source={Icons.edit} style={styles.editButton} />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>{ConstStrings.masterkey}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>{ConstStrings.import}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>{ConstStrings.export}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={onLogoutPress}>
          <Text style={styles.buttonText}>{ConstStrings.logOut}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
