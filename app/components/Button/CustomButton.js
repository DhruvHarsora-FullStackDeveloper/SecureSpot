import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CustomButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity style={{ ...styles.btn, ...style }} onPress={onPress}>
      <Text style={styles.btntext}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
