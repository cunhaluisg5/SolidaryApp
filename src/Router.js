import Index from './pages/Index';

import MainONG from './pages/main/MainONG';
import MainPerson from './pages/main/MainPerson';
import Register from './pages/register/Register';
import RegisterPerson from './pages/register/RegisterPerson';
import RegisterONG from './pages/register/RegisterONG';
import ContentPageDonation from './pages/donations/ContentPageDonation';
import AdEdit from './pages/AdEdit';
import ONGDetail from './pages/donations/ONGDetail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
      screen: MainPerson
    },
    'MainONG': {
      screen: MainONG
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