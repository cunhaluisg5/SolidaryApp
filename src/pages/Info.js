import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Card } from 'react-native-elements';

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
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

const styles = StyleSheet.create({
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        fontSize: 20,
        marginBottom: 20
    },
    text: {
        marginLeft: 10,
        fontSize: 20,

    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 30,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'center',
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerTextInput: {
        flex: 3,
        marginTop: 100
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

export default Info;