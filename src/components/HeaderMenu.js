import React from 'react';
import { Header } from 'react-native-elements';
import firebase from '../database/firebase';

tryLogout = (props) => {
    const { navigation } = props;
    firebase.auth().signOut().then(function () {
        console.log("Logout efetuado com sucesso!");
        navigation.navigate("Index");
    }).catch(function (error) {
        console.log("Erro ao fazer logout!")
    });
}

const HeaderMenu = (props) => {
    const { text, color } = props;
    return (
        <Header
            leftComponent={{ icon: 'settings', color: '#fff', onPress: () => console.log('click') }}
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'power-settings-new', color: '#fff', onPress: this.tryLogout }}
            containerStyle={{ backgroundColor: color }}
        />
    )
}

export default HeaderMenu;
