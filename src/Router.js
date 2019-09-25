import Index from './pages/Index';
import Main from './pages/Main';
import Enter from './pages/Enter';
import Register from './pages/Register';
import Info from './pages/Info'
import Donate from './pages/Donate'
import BloodDonation from './pages/BloodDonation'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AppTabNavigator = createBottomTabNavigator(
  {
    'Notificações': {
      screen: Info,
    },
    'Doação': {
      screen: Donate,
    },
  },
  {
    defaultNavigationOptions: {
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
      screen: BloodDonation,
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