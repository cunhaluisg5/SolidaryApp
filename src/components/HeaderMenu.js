import React from 'react';
import { Header } from 'react-native-elements';
import firebase from '../database/firebase';
import Router from '../Router';

logout = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigator.immediatelyResetStack([Router.getRoute('Index')], 0);
      console.log("Saiu")
    }).catch(function(error) {
      console.log("Não saiu")
    });
  }

const HeaderMenu = (props) => {
    const { text, color } = props;
    return (
        <Header
            leftComponent={{ icon: 'settings', color: '#fff', onPress: () => console.log('click') }}
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'power-settings-new', color: '#fff', onPress: this.logout }}
            containerStyle={{ backgroundColor: color }}
        />
    )
}

export default HeaderMenu;
