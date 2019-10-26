import Index from './pages/Index';
import Main from './pages/Main';
import Enter from './pages/Enter';
import Register from './pages/Register';
import Info from './pages/Info';
import Donate from './pages/Donate';
import BloodDonation from './pages/donations/BloodDonation';
import TimeDonation from './pages/donations/TimeDonation';
import ClotheDonation from './pages/donations/ClotheDonation';
import MoneyDonation from './pages/donations/MoneyDonation';

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';


const AppTabNavigator = createBottomTabNavigator(
  {
    'Notificações': {
      screen: Info,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="info" color={tintColor} size={15} />
      },
    },
    'Doação': {
      screen: Donate,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="donate" color={tintColor} size={15} />
      }
    },
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: "#00008B",
        inactiveTintColor: "#000000",
        activeBackgroundColor: "#6495ED",
        inactiveBackgroundColor: "#A9A9A9",
        style: {
          height: 50,
        },
        labelStyle: {
          fontSize: 15,
        },
      },
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    'Index': {
      screen: Index,
    },
    'Enter': {
      screen: Enter,
    },
    'Register': {
      screen: Register,
    },
    'Main': {
      screen: AppTabNavigator
    },
    'BloodDonation': {
      screen: BloodDonation
    },
    'TimeDonation': {
      screen: TimeDonation
    },
    'ClotheDonation': {
      screen: ClotheDonation
    },
    'MoneyDonation': {
      screen: MoneyDonation
    }
  },
  {
    defaultNavigationOptions: {
      header: null,
    }
  }
);

const Router = createAppContainer(AppNavigator);
export default Router;