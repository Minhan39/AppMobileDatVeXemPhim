import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home';
import TicketsScreen from '../screens/Tickets';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();
export default Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarStyle: {backgroundColor: '#23232e', borderTopWidth: 0},
      }}
      initialRouteName={'Home'}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FontAwesome
              name={'home'}
              size={24}
              color={focused ? color : '#686D76'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Tickets'}
        component={TicketsScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={'ticket-sharp'}
              size={24}
              color={focused ? color : '#686D76'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Account'}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FontAwesome
              name={'user'}
              size={24}
              color={focused ? color : '#686D76'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
