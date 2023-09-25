import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './Tabs';
import Options from './Options';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import SearchScreen from '../screens/Search';
import DetailScreen from '../screens/Detail';
import MovieListScreen from '../screens/MovieList';
import CategoryScreen from '../screens/Category';
import SeatsScreen from '../screens/Seats';

const Stack = createStackNavigator();
export default Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Tabs'}>
        <Stack.Screen name={'Tabs'} component={Tabs} />
        <Stack.Screen name={'Options'} component={Options} />
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Register'} component={RegisterScreen} />
        <Stack.Screen name={'Search'} component={SearchScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
        <Stack.Screen name={'MovieList'} component={MovieListScreen} />
        <Stack.Screen name={'Category'} component={CategoryScreen} />
        <Stack.Screen name={'Seat'} component={SeatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
