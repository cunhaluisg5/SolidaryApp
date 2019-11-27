import Index from './pages/Index';
import MainPerson from './pages/main/MainPerson';
import MainONG from './pages/main/MainONG';
import Register from './pages/register/Register';
import RegisterPerson from './pages/register/RegisterPerson';
import RegisterONG from './pages/register/RegisterONG';
import Perfil from './pages/sub/Perfil';
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
    'Perfil': {
      screen: Perfil,
      navigationOptions: {
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
        tabBarIcon: ({ tintColor }) =>
          <Icon name="user" color={tintColor} size={15} />
      },
    },
    'Doar': {
      screen: Donate,
      navigationOptions: {
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
        tabBarIcon: ({ tintColor }) =>
          <Icon name="handshake" color={tintColor} size={15} />
      }
    },
  },
  {
    initialRouteName: 'Doar'
  },
);

const AppTabNavigatorONG = createBottomTabNavigator(
  {
    'Perfil': {
      screen: Perfil,
      navigationOptions: {
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
        tabBarIcon: ({ tintColor }) =>
          <Icon name="user" color={tintColor} size={15} />
      },
    },
    'Anúncio': {
      screen: Ad,
      navigationOptions: {
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
        tabBarIcon: ({ tintColor }) =>
          <Icon name="info" color={tintColor} size={15} />
      }
    },
    'Campanhas': {
      screen: MyAd,
      navigationOptions: {
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
        tabBarIcon: ({ tintColor }) =>
          <Icon name="hands-helping" color={tintColor} size={15} />
      },
    },
  },
  {
    initialRouteName: 'Anúncio'
  },
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
    'ONGDetail': {
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