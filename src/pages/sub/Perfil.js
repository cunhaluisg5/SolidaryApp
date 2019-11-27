import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import HeaderMenu from '../../components/HeaderMenu';
import { View } from '../../styles/style';

class Perfil extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <HeaderMenu text = 'Perfil' color = '#3D6DCC'/>
            </View>
        );
    }
}

export default Perfil;