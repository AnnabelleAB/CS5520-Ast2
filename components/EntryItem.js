import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
const EntryItem = ({ entry, navigation, itemPressed }) => {
  const limit = 500;
  const isOverLimit = (entry.calories > limit) && !entry.isReviewed;
  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          // general style first, customized style after
          return ([styles.itemContainer, pressed && styles.pressedStyle]);
        }}
        onPress={() => itemPressed(entry)}
        android_ripple={{ color: "white", borderless: true }}>


      <View style={styles.description}>
        <Text style={[styles.descriptionText, isOverLimit && { color: 'orange' }]}>
          {entry.description}
        </Text>
        {isOverLimit && (
          <AntDesign name="warning" size={15} color="black" />
        )}
      </View>

      <Text style={[styles.calories]}>{entry.calories}</Text>
    </Pressable>
    </View >
  );
};

const styles = StyleSheet.create({
  calories: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: colors.white,
  },
  description: {
    flex: 3,
    padding: 10,
    alignSelf: 'flex-end',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  itemContainer: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  pressedStyle: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    opacity: 0.5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deleteButton: {
    paddingHorizontal: 5,
    backgroundColor: 'lightblue',
  },
});

export default EntryItem;
