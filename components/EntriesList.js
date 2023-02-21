import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import EntryItem from './EntryItem';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';
import {
  collection,
  getFirestore,
  getDocs,
  limit,
  query, orderBy

} from 'firebase/firestore';

const EntriesList = ({ type, navigation }) => {
  const PAGE_SIZE = 10;
  const db = getFirestore();
  const colRef = collection(db, 'Entries');

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const q = query(colRef, limit(PAGE_SIZE));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setEntries(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchEntries();
  }, [colRef]);

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
