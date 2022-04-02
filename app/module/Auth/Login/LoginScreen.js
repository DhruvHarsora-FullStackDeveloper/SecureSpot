import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../../../assest/Icon';
import { CustomButton, CustomInput } from '../../../components';
import { ConstStrings } from '../../../constants';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(true);
  const emailInputHandler = enteredText => {
    setEmail(enteredText);
  };
  const passwordInputHandler = enteredText => {
    setPassword(enteredText);
  };
  const validateEmail = value => {
    const a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const flag = a.test(email);
    return flag;
  };
  const loginHandler = async () => {
    if (email === '' || password === '') {
      Alert.alert('Warning!!', 'Email or Password can not be Empty');
    } else {
      if (password.length < 8) {
        Alert.alert('Password is Too Short', 'Password is must be 8 Character');
      } else if (!validateEmail(email)) {
        Alert.alert('Warning!!', 'Your Email is not Correct');
      } else {
        Alert.alert('done');
      }
    }
  };

  useEffect(() => {
    //getData();
  }, []);

  //
  const gotoRegesterScreen = () => {
    Alert.alert('go to register Screen');
  };
  const resetPasswordScreen = () => {
    Alert.alert('forgot password');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false} bounces="false">
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{ConstStrings.hey}</Text>
          <Text style={styles.headerText}>{ConstStrings.login}</Text>
        </View>

        <View style={styles.subTextContainer}>
          <Text style={styles.normalText}>{ConstStrings.newString}</Text>
          <Text onPress={gotoRegesterScreen} style={styles.boldText}>
            {ConstStrings.creteNow}
          </Text>
        </View>

        <CustomInput
          label="Email"
          onChangeText={emailInputHandler}
          value={email}
          keyboardType="email-address"
          customStyle={styles.textInput}
          autoCapitalize={'none'}
        />
        <View>
          <CustomInput
            label="Password"
            style={styles.textInput}
            onChangeText={passwordInputHandler}
            value={password}
            secureTextEntry={visibility}
            autoCapitalize={'none'}
          />
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              setVisibility(!visibility);
            }}
            activeOpacity={0.7}>
            <Image
              style={styles.iconStyle}
              source={visibility ? Icon.eye : Icon.eyeOff}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.subTextContainer}>
          <Text style={styles.normalText}>{ConstStrings.forgetPassword}</Text>
          <Text onPress={resetPasswordScreen} style={styles.boldText}>
            {ConstStrings.reset}
          </Text>
        </TouchableOpacity>
        <CustomButton title="Login" style={styles.btn} onPress={loginHandler} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
