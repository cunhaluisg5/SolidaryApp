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
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 20 } }}
            containerStyle={{ backgroundColor: color }}
        />
    )
}

export default HeaderMenu;
