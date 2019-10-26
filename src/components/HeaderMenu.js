import React from 'react';
import { Header, Button } from 'react-native-elements';

const HeaderMenu = (props) => {
    const { text } = props;
    return (
        <Header
            leftComponent={{ icon: 'settings', color: '#fff',  onPress: () => console.log('click')}}
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'power-settings-new', color: '#fff', onPress: () => console.log('click') }}
        />
    )
}

export default HeaderMenu;
