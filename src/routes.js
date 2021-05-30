import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import Report from './pages/Report';
import NewEntry from './pages/NewEntry';
import Welcome from './pages/Welcome';
import Loading from './pages/Loading';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
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
