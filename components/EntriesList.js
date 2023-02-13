import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import EntryItem from './EntryItem';

const EntriesList = ({ type, navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('entries')
      .where(type === 'all' ? 'reviewed' : 'reviewed', '==', type === 'all')
      .onSnapshot((querySnapshot) => {
        const entriesData = [];
        querySnapshot.forEach((doc) => {
          entriesData.push({ ...doc.data(), id: doc.id });
        });
        setEntries(entriesData);
      });
    return () => unsubscribe();
  }, [type]);

  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <EntryItem
          entry={item}
          navigation={navigation}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default EntriesList;
