import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../assets/icons';
import CustomInput from '../../../components/Input/CustomInput';
import { NavigationStrings } from '../../../constants';
import UserActions, { onUserSelectors } from '../../../redux/UserRedux';
import Colors from '../../../theme/Colors';
import styles from './style';

const RegisterScreen = ({ navigation }) => {
  const getUserData = useSelector(onUserSelectors.getUserData);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stepError, setStepError] = useState(false);
  const [masterKey, setMasterKey] = useState('');

  const validateEmail = value => {
    const a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const flag = a.test(email);
    return flag;
  };

  const onNext = () => {
    if (
      fullName === '' ||
      email === '' ||
      phoneNum === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      Alert.alert('Warning!!', 'Any field Cannot be Empty');
      setStepError(true);
    } else {
      if (password.length < 8) {
        Alert.alert('Password is Too Short', 'Password must be 8 Character');
        setStepError(true);
      } else if (!validateEmail(email)) {
        Alert.alert('Warning!!', 'Your Email is not Correct');
        setStepError(true);
      } else if (password !== confirmPassword) {
        Alert.alert(
          'Password Mismatch',
          'Password and Confirm Password must be same ',
        );
        setStepError(true);
      } else {
        setStepError(false);
      }
    }
  };
  const onBack = () => {
    setFullName('');
    setEmail('');
    setPhoneNum('');
    setPassword('');
    setConfirmPassword('');
  };
  const onFinish = () => {
    if (masterKey === '') {
      Alert.alert('Warning!!', 'MasterKey Cannot be Empty');
      setStepError(false);
    } else if (masterKey.length < 8 || masterKey.length > 18) {
      setStepError(false);
      Alert.alert('Warning!!', 'MasterKey Key must between 8 to 18');
    } else {
      ///api
      const obj = {
        username: fullName,
        email: email,
        password: password,
        contact: Number(phoneNum),
        masterkey: masterKey,
      };
      dispatch(UserActions.signUpRequest('/signup', obj));
      if (getUserData !== null && getUserData.result === 1) {
        navigation.replace(NavigationStrings.TABS);
      }
    }
  };
  const [visibility, setVisibility] = useState(true);
  const [confirmVisibility, setConfirmVisibility] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ProgressSteps
        activeLabelColor={Colors.themeColor}
        activeStepIconBorderColor={Colors.themeColor}
        labelFontSize={15}>
        <ProgressStep
          label="Register"
          nextBtnStyle={styles.nextBtnStyle}
          nextBtnTextStyle={styles.nextBtnTextStyle}
          onNext={onNext}
          errors={stepError}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.textContainer}>
            <CustomInput
              label="Full Name"
              customStyle={styles.textInputField}
              value={fullName}
              autoCapitalize="words"
              keyboardType="default"
              onChangeText={e => setFullName(e)}
            />
            <CustomInput
              label="Email ID"
              value={email}
              customStyle={styles.textInputField}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={e => setEmail(e)}
            />
            <CustomInput
              label="Phone no."
              value={phoneNum}
              customStyle={styles.textInputField}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={e => setPhoneNum(e)}
              maxLength={10}
            />
            <View>
              <CustomInput
                label="Password"
                value={password}
                customStyle={styles.textInputField}
                autoCapitalize="none"
                secureTextEntry={visibility}
                onChangeText={e => setPassword(e)}
              />
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => {
                  setVisibility(!visibility);
                }}
                activeOpacity={0.7}>
                <Image
                  style={styles.iconStyle}
                  source={visibility ? Icons.show : Icons.hide}
                />
              </TouchableOpacity>
            </View>
            <View>
              <CustomInput
                value={confirmPassword}
                label="Confirm Password"
                customStyle={styles.textInputField}
                autoCapitalize="none"
                secureTextEntry={confirmVisibility}
                onChangeText={e => setConfirmPassword(e)}
              />
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => {
                  setConfirmVisibility(!confirmVisibility);
                }}
                activeOpacity={0.7}>
                <Image
                  style={styles.iconStyle}
                  source={confirmVisibility ? Icons.show : Icons.hide}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ProgressStep>
        <ProgressStep
          previousBtnStyle={styles.nextBtnStyle}
          previousBtnTextStyle={styles.nextBtnTextStyle}
          finishBtnText="Finish"
          label="Master Key"
          previousBtnText="Back"
          onPrevious={onBack}
          onSubmit={onFinish}>
          <KeyboardAvoidingView behavior="padding">
            <View style={styles.masterKeyContainer}>
              <CustomInput
                label="Master Key"
                customStyle={styles.textInputField}
                value={masterKey}
                onChangeText={e => setMasterKey(e)}
                maxLength={18}
              />
            </View>
          </KeyboardAvoidingView>
        </ProgressStep>
      </ProgressSteps>
    </SafeAreaView>
  );
};

export default RegisterScreen;
