import Index from './pages/Index';
import MainPerson from './pages/main/MainPerson';
import MainONG from './pages/main/MainONG';
import Register from './pages/register/Register';
import RegisterPerson from './pages/register/RegisterPerson';
import RegisterONG from './pages/register/RegisterONG';
import Info from './pages/sub/Info';
import Donate from './pages/sub/Donate';
import MyAd from './pages/sub/MyAd';
import Ad from './pages/sub/Ad';
import ContentPageDonation from './pages/donations/ContentPageDonation';
import AdEdit from './pages/AdEdit';

import ONGDetail from './pages/donations/ONGDetail';

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';


const AppTabNavigatorPerson = createBottomTabNavigator(
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

const AppTabNavigatorONG = createBottomTabNavigator(
  {
    'Minhas Campanhas': {
      screen: MyAd,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="info" color={tintColor} size={15} />
      },
    },
    'Fazer Anúncio': {
      screen: Ad,
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
    'Register': {
      screen: Register,
    },
    'RegisterPerson': {
      screen: RegisterPerson,
    },
    'RegisterONG': {
      screen: RegisterONG,
    },
    'MainPerson': {
      screen: AppTabNavigatorPerson
    },
    'MainONG': {
      screen: AppTabNavigatorONG
    },
    'ContentPageDonation': {
      screen: ContentPageDonation
    },
    'ONGDetail' : {
      screen: ONGDetail,
      navigationOptions: {
        title: "Detalhes"
      }
    },
    'AdEdit': {
      screen: AdEdit,
      navigationOptions: {
        title: "Edição"
      }
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