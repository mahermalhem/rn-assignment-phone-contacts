import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setFavList } from "../redux/reducer/fav/actions";
import { NavigationContainer } from "@react-navigation/native";
import Contacts from "../screens/Contacts";
import ContactDetails from "../screens/ContactDetails";
import { createStackNavigator } from "@react-navigation/stack";
import ContactsScreen from "../screens/Contacts";

const stack = createStackNavigator();

const NavStart = () => {

 
const Stack = createStackNavigator();

function ContactStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts Screen" component={ContactsScreen} />
      <Stack.Screen name="Contact Details" component={ContactDetails} />
    </Stack.Navigator>
  );
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <ContactStack/>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default NavStart;