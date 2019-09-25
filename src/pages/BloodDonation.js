import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Header } from 'react-native-elements';

class BloodDonation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Endereço', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={styles.containerText}>
                    <Text style={styles.text}>Rua Barão de Cataguases,
                    S/N - Santa Helena,
                    Juiz de Fora - MG,
                    36015-370</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Rua Alameda Ezequiel Dias, 321 -
                    Santa Efigênia, Belo Horizonte - MG, 30130-110</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
    },
    text: {
        flex: 1,
        fontSize: 25,
    }
});



export default BloodDonation;