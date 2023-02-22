import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import PressableButton from '../components/PressableButton';
import colors from '../colors';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

import { writeToDB } from '../Firebase/firebaseHelper';
const AddEntry = ({ navigation }) => {
  const [calories, setCalories] = useState('');
  const [description, setDescription] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = async () => {
    if (!calories || !description || isNaN(calories)) {
      Alert.alert('Invalid Input', 'Please enter a valid number and a description.', [{ text: 'OK' }]);
      return;
    }

    try {
      writeToDB({ calories: calories, description: description });
      
    } catch (error) {
      console.log(error.message);
    }
    navigation.goBack();

  };
  

  const handleReset = () => {
    setCalories('');
    setDescription('');
    setIsValid(true);
  };

  const handleCaloriesChange = (text) => {
    setCalories(text);
    if (!isValid) {
      setIsValid(true);
    }
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
    if (!isValid) {
      setIsValid(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Calories</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={calories}
          onChangeText={handleCaloriesChange}
        />
      </View>
      {!isValid && (!calories || isNaN(calories)) && (
        <Text style={styles.errorMessage}>Please enter a valid number</Text>
      )}
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={handleDescriptionChange}
        />
      </View>
      {!isValid && !description && (
        <Text style={styles.errorMessage}>Please enter a description</Text>
      )}
      <View style={styles.buttonsContainer}>
        <PressableButton
          buttonPressed={handleReset}
          customizedStyle={[styles.button]}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </PressableButton>
        <PressableButton
          buttonPressed={handleSubmit}
          customizedStyle={[styles.button]}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </PressableButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    width: '60%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    width: '80%',
  },
  button: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 5,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    padding: 10,
      button: {
  },
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
});

export default AddEntry;
