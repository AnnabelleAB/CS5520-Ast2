import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { collection, getFirestore } from 'firebase/firestore';
import { deleteFromDB, updateInDB } from '../Firebase/firebaseHelper';

import PressableButton from '../components/PressableButton';

export default function EditEntry({ navigation, route }) {
  const limit = 500;
  const { calories, description } = route.params.entry;
  const isOverLimit = (calories > limit) && !route.params.entry.isReviewed;


  const handleDelete = () => {
    Alert.alert(
      "Delete Entry",
      "Are you sure you want to delete this entry?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Delete canceled"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => {
          deleteFromDB(route.params.entry.id);
          navigation.goBack();
        } }
      ]
    );
 
  };
  
  const handleReview = () => {
    Alert.alert(
      "Review Entry",
      "Are you sure you want to mark this entry as reviewed?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Review canceled"),
          style: "cancel"
        },
        {
          text: "OK", onPress: async () => {
            updateInDB(route.params.entry.id, { isReviewed: true });
            navigation.goBack();
        } }
      ]
    );
  };


  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: colors.secondary }]}>
        <Text style={styles.cardTitle}>Calories:</Text>
        <Text style={styles.cardText}>{calories}</Text>
        <Text style={styles.cardTitle}>Description:</Text>
        <Text style={styles.cardText}>{description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton customizedStyle={styles.button} buttonPressed={handleDelete}>
          <MaterialCommunityIcons name="trash-can" size={32} color={colors.black} />
        </PressableButton>
        {isOverLimit && (
          <PressableButton customizedStyle={styles.button} buttonPressed={handleReview}>
            <AntDesign name="check" size={32} color={colors.black} />
          </PressableButton>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',

  },
  card: {
    borderRadius: 8,
    padding: 20,
    margin: 20,
    width: '80%',
    marginTop: 50,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
    color: colors.darkBlue,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    width: 50,
    height: 50,
  },
});
