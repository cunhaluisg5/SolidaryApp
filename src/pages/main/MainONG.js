import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ad from '../sub/Ad';
import MyAd from '../sub/MyAd';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppTabNavigatorONG = createBottomTabNavigator(
  {
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
    'Publicar': {
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
  },
  {
    initialRouteName: 'Publicar'
  },
);

export default AppTabNavigatorONG 