import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../app/Welcome';
import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
      <>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerNav}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </>
    );
}

export default StackNav;
