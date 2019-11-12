import React from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import firebase from '../database/firebase'
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class RegisterONG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: '',
            nome: '',
            telefone: '',
            email: '',
            conta: '',
            usuario: '',
            senha: ''
        }
    }

    renderButton() {
        return <Button
            icon={
                <Icon
                    name="user"
                    size={15}
                    color="white"
                />
            }
            title="Cadastrar"
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#00BFFF' }}
            onPress={() => this.tryRegister()} />
    }

    tryRegister() {
        const ref = firebase.firestore().collection('ONG');
        ref.add({
            cnpj: this.state.cnpj,
            nome: this.state.nome,
            telefone: this.state.telefone,
            email: this.state.email,
            conta: this.state.conta,
            usuario: this.state.usuario,
            senha: this.state.senha

        }).then((docRef) => {
            this.props.navigation.navigate("Main");
        }).catch((error) => {
            console.log("Erro ao adicionar o doc");
        });

        console.log("Valor CPF: ", this.state.nome, "valor Nome: ", this.state.cpf)
    }

    renderScreen() {
        return this.renderRegisterONG()
    }

    renderRegisterONG() {
        return (
            <Card title="Cadastro de ONG">
                <Text>CNPJ: </Text>
                <TextInputMask style={styles.textInput}
                    type={'cnpj'}
                    value={this.state.cnpj}
                    onChangeText={(text) => { this.setState({ cnpj: text }) }}
                    placeholder="99.999.999/9999-99" />
                <Text>Nome: </Text>
                <TextInput style={styles.textInput}
                    placeholder="nome ...."
                    onChangeText={(value) => { this.setState({ nome: value }) }} />
                <Text>Telefone: </Text>
                <TextInput style={styles.textInput}
                    placeholder="telefone"
                    onChangeText={(value) => this.setState({ telefone: value })} />
                <Text>E-mail: </Text>
                <TextInput style={styles.textInput}
                    placeholder="user@email.com"
                    onChangeText={(value) => this.setState({ email: value })} />
                <Text>Conta: </Text>
                <TextInput style={styles.textInput}
                    placeholder="alguma coisa"
                    onChangeText={(value) => this.setState({ conta: value })} />
                <Text>Usuário: </Text>
                <TextInput style={styles.textInput}
                    placeholder="user"
                    onChangeText={(value) => this.setState({ usuario: value })} />
                <Text>Senha: </Text>
                <TextInput secureTextEntry style={styles.textInput}
                    placeholder="pass"
                    onChangeText={(value) => this.setState({ senha: value })} />
            </Card>
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Preencha os dados abaixo para efetuar o cadastro</Text>
                </View>

                <View>
                    {this.renderScreen()}
                </View>

                <View style={styles.button}>
                    {this.renderButton()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        fontSize: 20,
        marginBottom: 20
    },
    text: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10

    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

export default RegisterONG;