import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditEntry from './screens/EditEntry';
import AddEntry from './screens/AddEntry';
import EntryTabs from './components/EntryTabs';
import colors from './colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: colors.buttonBackground,
  },
  headerTintColor: colors.white,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EntryTabs" screenOptions={headerOptions}>
        <Stack.Screen
          name="EntryTabs"
          component={EntryTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Edit Entry" component={EditEntry} />
        <Stack.Screen name="Add Entry" component={AddEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
