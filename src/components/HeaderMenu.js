import React from 'react';
import { Header } from 'react-native-elements';

const HeaderMenu = (props) => {
    const { text, color } = props;
    return (
        <Header
            leftComponent={{ icon: 'settings', color: '#fff',  onPress: () => console.log('click')}}
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'power-settings-new', color: '#fff', onPress: () => console.log('click') }}
            containerStyle={{ backgroundColor: color }}
        />
    )
}

export default HeaderMenu;
