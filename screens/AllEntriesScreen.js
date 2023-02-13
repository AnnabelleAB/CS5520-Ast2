import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EntriesList from '../components/EntriesList';

const AllEntriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <EntriesList type="all" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AllEntriesScreen;
