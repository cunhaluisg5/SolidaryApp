import React from 'react';
import { StyleSheet, TextInput, Button, View, Text, ActivityIndicator, Alert } from 'react-native';
import firebase from 'firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pass: '',
            message: '',
            isLoading: false,
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyASYCAcpMSBEUt_5CKg0qRj2llH5LRaiuk",
            authDomain: "cadastro-6cf90.firebaseapp.com",
            databaseURL: "https://cadastro-6cf90.firebaseio.com",
            projectId: "cadastro-6cf90",
            storageBucket: "",
            messagingSenderId: "542064520936",
            appId: "1:542064520936:web:5513be07877e31bd51a35d"
        };
        firebase.initializeApp(firebaseConfig);
    }

    onChangeMail(value) {
        console.log(value);
        /*this.setState({
          mail: value
        })*/
    }

    onChangePass(value) {
        console.log(value);
        /*this.setState({
          pass: value
        })*/
    }

    renderMessage() {
        return (
            <Text> {this.state.message} </Text>
        )
    }

    renderButtonEnter() {
        if (this.state.isLoading)
            return <ActivityIndicator />

        return <Button
            title="Entrar"
            onPress={() => this.tryLogin()} />
    }

    renderButtonRegister() {
        if (this.state.isLoading)
            return <ActivityIndicator />

        return <Button
            title="Cadastrar-me"
            color="#FF8C00"
            onPress={() => this.tryRegister()} />
    }

    tryLogin() {
        console.log(this.state);
        this.props.navigation.navigate("Enter", { user: this.state});
    }

    tryRegister() {
        this.props.navigation.navigate("Register", { user: this.state});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Acesse ou cadastre-se no Solidary App</Text>
                <View style={styles.button}>
                    {this.renderButtonEnter()}
                </View>
                <View style={styles.button}>
                    {this.renderButtonRegister()}
                </View>
                {this.renderMessage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        textAlignVertical: "center"
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        fontSize: 50,
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
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
});

export default Login;