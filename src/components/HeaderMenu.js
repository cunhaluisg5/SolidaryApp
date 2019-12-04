import React from 'react';
import { Header } from 'react-native-elements';
import Firebase from '../database/firebase';

logout = (props) => {
  Firebase.auth().signOut().then(() => {
    console.log("Saiu");
    props.navigation.navigate("Index")
  }).catch(function (error) {
    console.log("Não saiu ", error)
  });
}

const HeaderMenu = (props) => {
  const { text, color } = props;

  return (
    <Header
      centerComponent={{ text: text, style: { color: '#FFF', fontSize: 20 } }}
      rightComponent={{ icon: 'power-settings-new', color: '#FFF', onPress: () => this.logout(props) }}
      containerStyle={{ backgroundColor: color }}
    />
  )
}

export default HeaderMenu;
