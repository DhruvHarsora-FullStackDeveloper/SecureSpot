import React from 'react';
import { TextInput } from 'react-native';
import { Colors } from '../theme';
import TextInputStyles from './styles/TextInputStyles';

const TextInputComp = props => {
  const { placeholder } = props;
  return (
    <TextInput
      placeholder={placeholder}
      style={TextInputStyles.textInputField}
      placeholderTextColor={Colors.placeHolderColor}
    />
  );
};

export default TextInputComp;
