import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const AddEntry = ({ navigation }) => {
  const [calories, setCalories] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (calories <= 0 || isNaN(calories) || !description) {
      Alert.alert('Invalid Data', 'Please enter valid values for calories and description');
      return;
    }

    try {
      const entryRef = firebase.firestore().collection('entries');
      const newEntry = {
        calories: parseInt(calories, 10),
        description,
        reviewed: calories <= 500,
      };
      const docRef = await entryRef.add(newEntry);
      Alert.alert('Success', 'Your entry was added successfully');
      navigation.navigate('AllEntries');
    } catch (error) {
      Alert.alert('Error', 'An error occurred while adding the entry');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Calories:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={calories}
        onChangeText={(text) => setCalories(text)}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    marginTop: 10,
  },
});

export default AddEntryScreen;
