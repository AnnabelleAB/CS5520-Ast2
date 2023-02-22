import PressableButton from './PressableButton';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import AllEntries from '../screens/AllEntries';
import OverLimitEntries from '../screens/OverLimitEntries';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../colors';
const Tab = createBottomTabNavigator();

function iconPressed(navigation) {
  navigation.navigate("Add Entry");
}

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
      "tabBarActiveTintColor": colors.white,
      "tabBarInactiveTintColor": colors.background,
      tabBarStyle: {
        display: 'flex',
        backgroundColor: colors.buttonBackground,
      },
      activeTintColor: colors.white,
      inactiveTintColor: colors.grey,


      headerStyle: {
        backgroundColor: colors.buttonBackground,
      },

      headerTintColor: colors.white,
      headerRight: () => {
        return (
          <PressableButton
            buttonPressed={() => {
              return (iconPressed(navigation));
            }}
          >
            <Ionicons name="add" size={24} color="black" />
          </PressableButton>
        );
      }
    })}


  >
    <Tab.Screen name="All Entries" component={AllEntries} />
    <Tab.Screen name="OverLimit Entries" component={OverLimitEntries} />
  </Tab.Navigator>
);


export default EntryTabs;