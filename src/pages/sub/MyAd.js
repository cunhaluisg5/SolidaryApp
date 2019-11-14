import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import HeaderMenu from '../../components/HeaderMenu';
import { View } from '../../styles/style';

class MyAd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <HeaderMenu text = 'Notificações' color = '#3D6DCC'/>
                <Card title="Instituições vistas no último mês"
                      titleStyle={{backgroundColor: '#ADD8E6'}}
                      containerStyle={{backgroundColor: '#F0F8FF'}}>
                    <Text>
                        Teste
                    </Text>
                </Card>
            </View>
        );
    }
}

export default MyAd;