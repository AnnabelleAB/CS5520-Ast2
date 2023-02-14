import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AllEntries from './screens/AllEntries';
import OverLimitEntries from './screens/OverLimitEntries';
import EditEntry from './screens/EditEntry';
import AddEntry from './screens/AddEntry';
import { Button } from 'react-native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EntryTabs = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'All Entries') {
          iconName = 'emoji-food-beverage';
        } else if (route.name === 'OverLimit Entries') {
          iconName = 'priority-high';
        }

        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    })}

  >
    <Tab.Screen name="All Entries" component={AllEntries} />
    <Tab.Screen name="OverLimit Entries" component={OverLimitEntries} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EntriesTabs">
        <Stack.Screen name="EntriesTabs" component={EntryTabs} options={{ headerShown: false,  headerRight: () => (
      <Button
        onPress={() => navigation.navigate("AddEntry")}
        title="+"
      />
    ), }} />
        <Stack.Screen name="Edit Entry" component={EditEntry} />
        <Stack.Screen name="Add Entry" component={AddEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
