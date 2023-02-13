import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ label, onChangeText, value, secureTextEntry }) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholder={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#7f8c8d',
    padding: 10,
    borderRadius: 5
  }
});

export default TextInput;
