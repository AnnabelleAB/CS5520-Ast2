import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EntryItem = ({ entry, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.date}>{entry.date.toDate().toDateString()}</Text>
      <Text style={styles.content}>{entry.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    color: '#333',
    marginBottom: 8,
  },
  content: {
    color: '#666',
  },
});

export default EntryItem;
