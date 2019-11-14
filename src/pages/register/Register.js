import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements'
import { Button } from 'react-native-elements';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    registerPerson() {
        const { navigation } = this.props
        navigation.navigate("RegisterPerson")
    }

    registerONG() {
        const { navigation } = this.props
        navigation.navigate("RegisterONG")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Card
                        image={require('../../images/user.png')}>
                        <Text style={styles.text}>
                            Cadastre-se como um voluntário para efetuar doações.
                        </Text>
                        <Button
                            buttonStyle={styles.button}
                            title='Cadastrar Voluntário' 
                            onPress={() => this.registerPerson()} />
                    </Card>
                </View>
                <View style={styles.image}>
                    <Card 
                        image={require('../../images/ong.png')}>
                        <Text style={styles.text}>
                            Cadastre-se como uma ONG para receber doações.
                        </Text>
                        <Button
                            buttonStyle={styles.button}
                            title='Cadastrar ONG' 
                            onPress={() => this.registerONG()} />
                    </Card>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        textAlign: "center",
        padding: 10
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    }
});

export default Register;