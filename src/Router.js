import Login from './pages/Login';
import Enter from './pages/Enter';
import Register from './pages/Register'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    'Login' : {
      screen: Login,
    },
    'Enter' : {
      screen: Enter,
      navigationOptions: {
        title: "Efetuar Login"
      }
    },
    'Register' : {
        screen: Register,
        navigationOptions: {
          title: "Cadastro"
        }
      }
  }, {
    defaultNavigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor:"#06f"
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
      }
    }
  }
);

const Router = createAppContainer(AppNavigator); 
export default Router;
