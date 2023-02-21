import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditEntry from './screens/EditEntry';
import AddEntry from './screens/AddEntry';
import EntryTabs from './components/EntryTabs';
import colors from './colors';
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgjXAfTf7N9JUpDdAmKbpS7PYo0IbYx9U",
  authDomain: "calories-tracker-4055c.firebaseapp.com",
  projectId: "calories-tracker-4055c",
  storageBucket: "calories-tracker-4055c.appspot.com",
  messagingSenderId: "220728298116",
  appId: "1:220728298116:web:c3cff955abaa8b361810d1",
  measurementId: "G-VFB6D1V3TZ"
};
const app = initializeApp(firebaseConfig);
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
