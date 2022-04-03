import React, { useState } from 'react';
import {
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { CustomInput } from '../../components';
import styles from './styles';

export const ModalView = ({ visible, onAdd, title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [note, setNote] = useState('');
  const detailsHandler = () => {
    if (note === '' || password === '' || note === '') {
      Alert.alert('Warning!!', 'Note, Email or Password can not be Empty');
      return false;
    } else {
      onAdd({ emailValue: email, passwordValue: password, noteValue: note });
      setEmail('');
      setPassword('');
      setNote('');
    }
  };
  return (
    <Modal visible={visible} animationType="side" transparent={true}>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingStyle}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View style={styles.bodyContainer}>
            <Text style={styles.addDetailsStyle}>Enter your details</Text>
            <CustomInput
              label="Note"
              customStyle={styles.textInputField}
              value={note}
              autoCapitalize="words"
              keyboardType="default"
              onChangeText={e => setNote(e)}
            />
            <CustomInput
              label="Email ID"
              customStyle={styles.textInputField}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={e => setEmail(e)}
            />
            <CustomInput
              label="Password"
              customStyle={styles.textInputField}
              value={password}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={e => setPassword(e)}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={detailsHandler}>
                <Text title={title} style={styles.buttonText}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};
