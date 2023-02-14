import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import EntryItem from './EntryItem';
import colors from '../colors';

const EntriesList = ({ type, navigation }) => {
  const [entries, setEntries] = useState([
    { id: "1", calories: "600", description: "banana" },
    { id: "2", calories: "400", description: "banana" }
  ]);

  const overLimit = 500;
  const filteredEntries = entries.filter(entry => entry.calories > overLimit);
  let filteredData = [];
  if (type === "over-limit") {
    filteredData = filteredEntries;
  } else {
    filteredData = entries;
  }

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={filteredData}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EntryItem
            entry={item}
            navigation={navigation}
          />
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
    alignSelf: "stretch",
    width: "100%",
  },
  flatListContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    alignSelf: "stretch",
  },
});

export default EntriesList;
