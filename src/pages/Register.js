import React from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import firebase from '../database/firebase'
import { Button, CheckBox, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedPerson: true,
            checkedOrganization: false,
            persona: {
                cpf: '',
                nome: '',
                dataNascimento: '',
                cep: '',
                endereco: '',
                uf: '',
                cidade: '',
                telefone: '',
                email: '',
                usuario: '',
                senha: ''
            },
            Ong: []
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
        if (this.state.checkedPerson) {
            const ref = firebase.firestore().collection('Voluntario');
            ref.add({
                CPF: this.state.persona.cpf,
                //nome: this.state.nome,
                //dataNasc: this.state.dataNascimento, 
                //cep: this.state.cep,
                //endereco: this.state.endereco,
                //uf: this.state.uf,
                //cidade: this.state.cidade,
                //telefone: this.state.telefone,
                //email: this.state.email,
                //usuario: this.state.usuario,
                //senha: this.state.senha

            }).then(() => {
                this.props.navigation.navigate("Main");
            }).catch((error) => {
                console.log("Erro ao adicionar o doc");
            });

            console.log("Valor CPF: ", this.state.persona.nome, "valor Nome: ", this.state.persona.cpf)
        } else {
            const ref = firebase.firestore().collection('Ong');
            ref.add({
                name: this.state.name,
                desc: this.state.desc,
                img: this.state.img
            }).then(() => {
                this.props.navigation.navigate("Main");
            }).catch((error) => {
                console.log("Erro ao adicionar o doc");
            });
        }
    }

    checkPerson() {
        this.setState({ checkedPerson: true, checkedOrganization: false })
    }

    checkOrganization() {
        this.setState({ checkedOrganization: true, checkedPerson: false })
    }

    renderScreen() {
        if (this.state.checkedPerson) {
            return this.renderRegisterPerson()
        }
        return this.renderRegisterOrganization()
    }

    renderRegisterPerson() {
        return (
            <Card title="Cadastro de Pessoa">
                <Text>CPF: </Text>
                <TextInputMask style={styles.textInput}
                    type={'cpf'}
                    value={this.state.persona.cpf}
                    onChangeText={(text) => { this.setState({ persona: { cpf: text } }) }}
                    placeholder="999.999.999-99" />
                <Text>Nome Completo: </Text>
                <TextInput style={styles.textInput}
                    placeholder="nome ...."
                    onChangeText={(value) => { this.setState({ persona: { nome: value } }) }} />
                <Text>Data de Nascimento: </Text>
                <TextInputMask style={styles.textInput}
                    value={this.state.persona.dataNascimento}
                    type={"datetime"}
                    options={{ format: 'DD/MM/YYYY' }}
                    value={this.state.persona.dataNascimento}
                    placeholder="99/99/9999"
                    onChangeText={(text) => this.setState({ persona: { dataNascimento: text } })} />
                <Text>CEP: </Text>
                <TextInput style={styles.textInput}
                    //type={'zip-code'}
                    placeholder="99.999-99"
                    onChangeText={(value) => this.setState({ persona: { cep: value } })} />
                <Text>Endereço: </Text>
                <TextInput style={styles.textInput}
                    placeholder="Rua ... AV.."
                    onChangeText={(value) => this.setState({ persona: { endereco: value } })} />
                <Text>UF: </Text>
                <TextInput style={styles.textInput}
                    placeholder="uf"
                    onChangeText={(value) => this.setState({ persona: { uf: value } })} />
                <Text>Cidade: </Text>
                <TextInput style={styles.textInput}
                    placeholder="cidade"
                    onChangeText={(value) => this.setState({ persona: { cidade: value } })} />
                <Text>Telefone: </Text>
                <TextInput style={styles.textInput}
                    placeholder="telefone"
                    onChangeText={(value) => this.setState({ persona: { telefone: value } })} />
                <Text>E-mail: </Text>
                <TextInput style={styles.textInput}
                    placeholder="user@email.com"
                    onChangeText={(value) => this.setState({ persona: { email: value } })} />
                <Text>Usuário: </Text>
                <TextInput style={styles.textInput}
                    placeholder="user"
                    onChangeText={(value) => this.setState({ persona: { usuario: value } })} />
                <Text>Senha: </Text>
                <TextInput secureTextEntry style={styles.textInput}
                    placeholder="pass"
                    onChangeText={(value) => this.setState({ persona: { senha: value } })} />
            </Card>
        )
    }

    renderRegisterOrganization() {
        return <Card title="Cadastro de Instituição">
            <Text>CNPJ: </Text>
            <TextInput />
            <Text>Nome: </Text>
            <TextInput />
            <Text>Responsável: </Text>
            <TextInput />
            <Text>Site: </Text>
            <TextInput />
            <Text>Login: </Text>
            <TextInput />
            <Text>Senha: </Text>
            <TextInput />
            <input type="submit" value="Cadastrar" />
        </Card>
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Preencha os dados abaixo</Text>
                    <Text style={styles.text}>para efetuar o cadastro</Text>
                </View>

                <View style={styles.checkbox}>
                    <CheckBox
                        title='Pessoa'
                        checked={this.state.checkedPerson}
                        onPress={() => this.checkPerson()}
                    />
                    <CheckBox
                        title='Instituição'
                        checked={this.state.checkedOrganization}
                        onPress={() => this.checkOrganization()}
                    />
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

export default Register;