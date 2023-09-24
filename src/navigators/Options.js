import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TicketOptionsScreen from '../screens/TicketOptions';
import CinemaOptionsScreen from '../screens/CinemaOptions';

const Option = createBottomTabNavigator();
export default Options = () => {
  return (
    <Option.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarStyle: {backgroundColor: '#23232e', borderTopWidth: 0},
      }}
      initialRouteName={'TicketOptions'}>
      <Option.Screen
        name={'TicketOptions'}
        component={TicketOptionsScreen}
        options={{
          tabBarLabel: 'Recommend',
          tabBarIcon: ({focused, color}) => (
            <FontAwesome
              name={'calendar'}
              size={24}
              color={focused ? color : '#686D76'}
            />
          ),
        }}
      />
      <Option.Screen
        name={'CinemaOptions'}
        component={CinemaOptionsScreen}
        options={{
          tabBarLabel: 'Cinemas',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={'theater'}
              size={24}
              color={focused ? color : '#686D76'}
            />
          ),
        }}
      />
    </Option.Navigator>
  );
};
