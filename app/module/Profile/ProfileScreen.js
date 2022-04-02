import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icons from '../../assets/icons';
import styles from './styles';
import { ConstStrings, NavigationStrings } from '../../constants';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.userProfile}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
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
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>{ConstStrings.masterkey}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>{ConstStrings.import}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>{ConstStrings.export}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>{ConstStrings.logOut}</Text>
          <Image style={styles.arrow} source={Icons.arrow} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
