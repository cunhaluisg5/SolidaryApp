import React from 'react';
import { Header } from 'react-native-elements';
import firebase from '../database/firebase';

logout = () => {
  firebase.auth().signOut().then(() => {
    console.log("Saiu")
  }).catch(function (error) {
    console.log("Não saiu ", error)
  });
}

const HeaderMenu = (props) => {
  const { text, color } = props;

  return (
    <Header
      centerComponent={{ text: text, style: { color: '#fff', fontSize: 20 } }}
      rightComponent={{ icon: 'power-settings-new', color: '#fff', onPress: () => this.logout() }}
      containerStyle={{ backgroundColor: color }}
    />
  )
}

export default HeaderMenu;
