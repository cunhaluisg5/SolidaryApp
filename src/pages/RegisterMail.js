import React from 'react';
import { StyleSheet, TextInput, Button, View, Text, ActivityIndicator } from 'react-native';

class RegisterMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pass: '',
            message: '',
            isLoading: false
        }
    }

    onChangeMail(value) {
        //console.log(value);
        this.setState({
            mail: value
        })
    }

    onChangePass(value) {
        //console.log(value);
        this.setState({
            pass: value
        })
    }

    renderMessage() {
        return (
            <Text> {this.state.message} </Text>
        )
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />

        return <Button
            title="Cadastrar"
            color="#FF8C00"
            onPress={() => this.tryLogin()} />
    }

    tryLogin() {
        this.setState({ isLoading: true })
        const { mail, pass } = this.state
        const { navigation } = this.props
        navigation.navigate("Index")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Preencha os dados abaixo</Text>
                    <Text style={styles.text}>para efetuar o cadastro</Text>
                </View>
                <View style={styles.containerTextInput}>
                    <Text style={styles.text}>E-mail: </Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => this.onChangeMail(value)} />
                    <Text style={styles.text}>Senha: </Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                        onChangeText={(value) => this.onChangePass(value)} />
                </View>
                <View style={styles.button}>
                    {this.renderButton()}
                </View>
                {this.renderMessage()}
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
        backgroundColor: '#DCDCDC',
    },
});

export default RegisterMail;