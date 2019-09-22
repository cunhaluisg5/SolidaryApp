import Index from './pages/Index';
import EnterMail from './pages/EnterMail';
import Enter from './pages/Enter';
import ContentPage from './pages/ContentPage';

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
        title: "Login"
      }
    },
    'Content': {
      screen: ContentPage,
      navigationOptions: {
        title: "Conteúdo"
      }
    }
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