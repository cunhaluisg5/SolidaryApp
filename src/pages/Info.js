import React from 'react';
import { Text } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { View } from '../styles/style';

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Notificações', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Card title="Instituições vistas no último mês"
                      titleStyle={{backgroundColor: '#ADD8E6'}}
                      containerStyle={{backgroundColor: '#F0F8FF'}}>
                    <Text>
                        HemoCentro JF
                    </Text>
                    <Text>
                        HemoCentro BH
                    </Text>
                </Card>
            </View>
        );
    }
}

export default Info;