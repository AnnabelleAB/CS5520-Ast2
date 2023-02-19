import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';
import PressableButton from '../components/PressableButton';

export default function EditEntry({ navigation, route }) {
  const { calories, description } = route.params.entry;
  const isOverLimit = calories > 500;

  const handleDelete = () => {
    // Code to delete entry from Firestore database
    // Then navigate back to the All Entries screen
    navigation.goBack();
  };

  const handleReview = () => {
    // Code to mark entry as reviewed in Firestore database
    // Then navigate back to the All Entries screen
    navigation.goBack();
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
