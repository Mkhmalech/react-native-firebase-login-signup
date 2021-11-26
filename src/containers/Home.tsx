import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed} from './Feed';
import {Inbox} from './Inbox';
import {Account} from './Account';
import * as Icon from '../components/Icons';
import {Login} from './Login';

const Tab = createBottomTabNavigator();

export const Home: FC<any> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon.home tintColor="red" size={26} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Feed}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Icon.search tintColor="red" size={26} />,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: () => <Icon.mail tintColor="red" size={26} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Icon.user tintColor="red" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};
