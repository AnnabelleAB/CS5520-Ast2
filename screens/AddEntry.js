import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

const AddEntry = ({ navigation }) => {
  const [calories, setCalories] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Add the new entry to the database
    // ...

    navigation.goBack();
  };

  const handleReset = () => {
    setCalories('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Calories"
        keyboardType="number-pad"
        value={calories}
        onChangeText={setCalories}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={handleReset} title="Reset" />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 8,
    padding: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default AddEntry;
