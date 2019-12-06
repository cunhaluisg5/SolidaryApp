import React from 'react';
import { Header } from 'react-native-elements';
import Firebase from '../database/firebase';

logout = (navigation) => {
  Firebase.auth().signOut().then(() => {
    console.log("Fez logout");
    navigation.navigation.navigate("Index")
  }).catch(function (error) {
    console.log("Não conseguiu fazer logout ", error)
  });
}

showHeader = (back, text, color, navigation) => {
  if (back) {
    return <Header
      leftComponent={{ icon: 'arrow-back', color: '#FFF', onPress: () => navigation.navigation.goBack() }}
      centerComponent={{ text: text, style: { color: '#FFF', fontSize: 20 } }}
      rightComponent={{ icon: 'power-settings-new', color: '#FFF', onPress: () => this.logout(navigation) }}
      containerStyle={{ backgroundColor: color }}
    />
  }
  return <Header
    centerComponent={{ text: text, style: { color: '#FFF', fontSize: 20 } }}
    rightComponent={{ icon: 'power-settings-new', color: '#FFF', onPress: () => this.logout(navigation) }}
    containerStyle={{ backgroundColor: color }}
  />
}

const HeaderMenu = (props) => {
  const { text, color, navigation, back } = props;

  return (
    this.showHeader(back, text, color, navigation)
  )
}

export default HeaderMenu;
