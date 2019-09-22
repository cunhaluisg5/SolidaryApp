import React from 'react';
import { StyleSheet, TextInput, Button, View, Text, ActivityIndicator, Alert } from 'react-native';

class Enter extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButton() {
        return <Button
            title="Entrar"
            onPress={() => this.tryLogin()} />
    }

    tryLogin() {
        const { navigation } = this.props
        navigation.navigate("EnterMail")
    }

    render() {
        return (
            <View>
                <Text>Enter</Text>
                <View style={styles.button}>
                    {this.renderButton()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        fontSize: 20,
    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 30,
        paddingBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'center'
    },
    container: {
        marginTop: 40,
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Enter;