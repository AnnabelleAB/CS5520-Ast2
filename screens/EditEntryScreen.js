import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import firebase from 'firebase';

const EditEntryScreen = ({ route, navigation }) => {
  const [description, setDescription] = useState(route.params.entry.description);
  const [calories, setCalories] = useState(route.params.entry.calories.toString());

  const handleDelete = () => {
    Alert.alert(
      'Delete Entry',
      'Are you sure you want to delete this entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const entryRef = firebase
              .firestore()
              .collection('entries')
              .doc(route.params.entry.id);
            entryRef.delete().then(() => navigation.goBack());
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleMarkAsReviewed = () => {
    Alert.alert(
      'Mark as Reviewed',
      'Are you sure you want to mark this entry as reviewed?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Mark as Reviewed',
          style: 'default',
          onPress: () => {
            const entryRef = firebase
              .firestore()
              .collection('entries')
              .doc(route.params.entry.id);
            entryRef.update({ reviewed: true }).then(() => navigation.goBack());
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Text style={styles.label}>Calories</Text>
      <TextInput
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.buttonsContainer}>
        <Button label="Delete" onPress={handleDelete} />
        {!route.params.entry.reviewed && (
          <Button label="Mark as Reviewed" onPress={handleMarkAsReviewed} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontWeight: 'bold',
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginTop: 10,
        fontSize: 18,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20
      },
})

export default EditEntryScreen;