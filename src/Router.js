import Index from './pages/Index';
import Main from './pages/Main';
import Enter from './pages/Enter';
import EnterMail from './pages/EnterMail';
import Register from './pages/Register';
import RegisterMail from './pages/RegisterMail';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    'Index': {
        screen: Index,
        navigationOptions: {
        }
      },
    'Enter': {
        screen: Enter,
        navigationOptions: {
        }
      },
    'EnterMail': {
      screen: EnterMail,
      navigationOptions: {
      }
    },
    'Main': {
        screen: Main,
        navigationOptions: {
        }
      },
      'Register': {
        screen: Register,
        navigationOptions: {
        }
      },
      'RegisterMail': {
        screen: RegisterMail,
        navigationOptions: {
        }
      },
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#0000FF"
      },
    }
  }
);

const Router = createAppContainer(AppNavigator);
export default Router;