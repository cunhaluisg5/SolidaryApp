import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends React.Component {
    constructor(props) {
        super(props);
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

    renderDrop() {
        const data = [
            {
                value: 'Doador',
            },
            {
                value: 'Instituição',
            }
        ];
        return data
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Preencha os dados abaixo</Text>
                    <Text style={styles.text}>para efetuar o cadastro</Text>
                </View>

                <View style={styles.type}>
                    <Text style={styles.text}>Tipo de Cadastro</Text>
                    <Dropdown data={this.renderDrop()} />
                </View>

                <View style={styles.containerTextInput}>
                    <Text style={styles.text}>Nome: </Text>
                    <TextInput
                        style={styles.textInput} />
                    <Text style={styles.text}>Telefone: </Text>
                    <TextInput
                        style={styles.textInput} />
                    <Text style={styles.text}>E-mail: </Text>
                    <TextInput
                        style={styles.textInput} />
                    <Text style={styles.text}>Senha: </Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry />
                </View>

                <View style={styles.button}>
                    {this.renderButton()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    type: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        fontSize: 20,
        marginBottom: 20
    },
    text: {
        fontSize: 20,
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
        marginRight: 10
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerTextInput: {
        flex: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

export default Register;