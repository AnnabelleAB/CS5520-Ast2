import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllEntriesScreen from './screens/AllEntriesScreen';
import OverLimitEntriesScreen from './screens/OverLimitEntriesScreen';
import AddEntryScreen from './screens/AddEntryScreen';
import EditEntryScreen from './screens/EditEntryScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EntryTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="AllEntries" component={AllEntriesScreen} />
    <Tab.Screen name="OverLimitEntries" component={OverLimitEntriesScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EntriesTabs">
        <Stack.Screen
          name="EntriesTabs"
          component={EntryTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddEntry"
          component={AddEntryScreen}
          options={{ title: 'Add Entry' }}
        />
        <Stack.Screen
          name="EditEntry"
          component={EditEntryScreen}
          options={{ title: 'Edit Entry' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;