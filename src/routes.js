import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import Report from './pages/Report';
import NewEntry from './pages/NewEntry';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewEntry"
          component={NewEntry}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;