import Index from './pages/Index';
import EnterMail from './pages/EnterMail';
import Enter from './pages/Enter';
import Main from './pages/Main';

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