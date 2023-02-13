import React from 'react';
import { View, Text } from 'react-native';
import EntriesList from '../components/EntriesList'

const OverLimitEntries = () => {
  return (
    <View style={styles.container}>
      <EntriesList type="over-limit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default OverLimitEntriesScreen;
