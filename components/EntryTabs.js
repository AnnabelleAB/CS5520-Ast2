import React from "react";
import { View, Text, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AddEntry from "../screens/AddEntry";
import AllEntries from "../screens/AllEntries";
import OverLimitEntries from "../screens/OverLimitEntries"
const Tab = createMaterialTopTabNavigator();

const EntryTabs = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "All Entries") {
          iconName = "emoji-food-beverage";
        } else if (route.name === "OverLimit Entries") {
          iconName = "priority-high";
        }

        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
    navigationOptions={{
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("AddEntry")}
          title="+"
        />
      ),
    }}
  >
    <Tab.Screen name="All Entries" component={AllEntries} />
    <Tab.Screen name="OverLimit Entries" component={OverLimitEntries} />
  </Tab.Navigator>
);

export default EntryTabs;
