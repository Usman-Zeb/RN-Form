import {View, Text, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import React from 'react';

import {Colors} from '../constants/globals';

interface PropTypes {
    label?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    secure?: boolean;
    onUpdateValue?: ((text: string) => void) | undefined;
    value?: string;
    isInvalid?: any;
}

const Input: React.FC<PropTypes> = ({label, keyboardType, secure, onUpdateValue, value, isInvalid}) =>{
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label} <Text style={styles.requiredFieldAsterisk}>*</Text>
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  requiredFieldAsterisk: {
    color: 'red',
  }
  ,
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 8,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
