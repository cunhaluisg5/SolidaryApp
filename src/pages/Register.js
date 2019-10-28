import React from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView } from 'react-native';
import { Button, CheckBox, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedPerson: true,
            checkedOrganization: false
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
        const { navigation } = this.props
        navigation.navigate("Index")
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
                <TextInput style={styles.textInput}/>
                <Text>Nome Completo: </Text>
                <TextInput style={styles.textInput}/>
                <Text>Data de Nascimento: </Text>
                <TextInput style={styles.textInput}/>
                <Text>Sexo: </Text>
                <TextInput style={styles.textInput}/>
                <Text>CEP: </Text>
                <TextInput style={styles.textInput}/>
                <Text>Endereço: </Text>
                <TextInput style={styles.textInput}/>
                <Text>UF: </Text>
                <TextInput style={styles.textInput}/>
                <Text>Cidade: </Text>
                <TextInput style={styles.textInput}/>
                <Text>Telefone: </Text>
                <TextInput style={styles.textInput}/>
                <Text>E-mail: </Text>
                <TextInput style={styles.textInput}/>
                <Text>Usuário: </Text>
                <TextInput style={styles.textInput}/>
                <Text>Senha: </Text>
                <TextInput secureTextEntry style={styles.textInput}/>
            </Card>
        )
    }

    renderRegisterOrganization() {
        return <Card title="Cadastro de Instituição">
            <Text>.........</Text>
            <Text>...</Text>
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