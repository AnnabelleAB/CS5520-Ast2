import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import EntryItem from './EntryItem';
import colors from '../colors';
import { firestore } from '../Firebase/firebase-setup';
import {
  collection,
  getFirestore,
  onSnapshot
} from 'firebase/firestore';

const EntriesList = ({ type, navigation }) => {
  const PAGE_SIZE = 10;


  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // this is a listener
    const unsubscribe = onSnapshot(collection(firestore, "entries"), (querySnapshot) => {
      if (querySnapshot.empty) {
        setEntries([]);
      } else {
        let entriesPushToDB = [];
        querySnapshot.forEach((doc) => {
          entriesPushToDB.push({ ...doc.data(), id: doc.id });
        });
        setEntries(entriesPushToDB);
      }
    });
    // this is a cleanup function that will be called automatically when the component unmounted
    return () => unsubscribe();
  }, []);

  const overLimit = 500;
  const filteredEntries = entries.filter((entry) => entry.calories > overLimit);
  let filteredData = [];

  if (type === 'over-limit') {
    filteredData = filteredEntries.filter((entry) => !entry.isReviewed);
  } else {
    filteredData = entries;
  }

  const handlePress = (entry) => {
    navigation.navigate('Edit Entry', { entry });
  };

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={filteredData}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EntryItem entry={item} navigation={navigation} itemPressed={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16,
    alignSelf: 'stretch',
    width: '100%',
  },
  flatListContainer: {
    flex: 4,
    backgroundColor: '#dcd',
    alignSelf: 'stretch',
  },
});

export default EntriesList;
