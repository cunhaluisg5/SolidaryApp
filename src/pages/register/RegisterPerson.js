import React from 'react';
import { View, Text, Alert } from 'react-native';
import { isCpf } from "validator-brazil";
import { TextInputMask } from 'react-native-masked-text'
import firebase from '../../database/firebase'
import { Button, Card } from 'react-native-elements';
import HeaderMenuInit from '../../components/HeaderMenuInit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { But, TextInputRegister, ContainerScroll } from '../../styles/style'

class RegisterPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            nome: '',
            telefone: '',
            email: '',
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
            onPress={this.tryRegister} />
    }

    tryRegister = () => {
        const { cpf, nome, telefone, email, usuario, senha } = this.state;
        const { navigation } = this.props;
        firebase.auth().createUserWithEmailAndPassword(email.trim(), senha)
            .then((user) => {
                const userID = user.user.uid;
                const userRef = firebase.firestore().collection('Voluntario')
                    .doc(userID);
                userRef.set({
                    cpf, nome, telefone, email, usuario
                });
                firebase.auth().currentUser.updateProfile({ displayName: "user" })
                console.log("O voluntário foi cadastrado")
                Alert.alert("Concluído", "Voluntário cadastrado com sucesso!");
                navigation.navigate("Index");
            }).catch((error) => {
                console.log("Erro ao cadastrar", error);
                Alert.alert("Atenção", "Não foi possível efetuar o cadastro!");
            })
    }

    renderScreen() {
        return this.renderRegisterPerson()
    }

    validatorCPF(text) {
        //https://www.npmjs.com/package/validator-brazil

        const cpfSemFormato = text.replace(".", "").replace(".", "").replace("-", "")
        this.setState({ cpf: text })

        if (text.length === 14) {

            if (!isCpf(cpfSemFormato)) {
                Alert.alert("CPF Inválido", "Tente novamente!")
                this.setState({ cpf: '' })
            } else {

                let volutario = firebase.firestore().collection('Voluntario')
                volutario.where('cpf', '==', text).get()
                    .then(snapshot => {

                        if (!snapshot.empty) {
                            Alert.alert("CPF já cadastrado ", "Tente novamente!")
                            this.setState({ cpf: '' })
                        }
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });
            }
        }
    }

    renderRegisterPerson() {
        return (
            <Card title="Preencha os dados abaixo para efetuar o cadastro">
                <Text>CPF: </Text>
                <TextInputMask style={{
                    borderColor: 'black', borderBottomWidth: 1, fontSize: 20,
                    paddingRight: 5, paddingLeft: 5, textAlign: 'center',
                    marginLeft: 10, marginRight: 10, marginBottom: 10
                }}
                    type={'cpf'}
                    value={this.state.cpf}
                    onChangeText={(text) => this.validatorCPF(text)}
                    placeholder="999.999.999-99" />
                <Text>Nome Completo: </Text>
                <TextInputRegister
                    placeholder="nome ...."
                    onChangeText={(value) => { this.setState({ nome: value }) }} />
                <Text>Telefone: </Text>
                <TextInputMask style={{
                    borderColor: 'black', borderBottomWidth: 1, fontSize: 20,
                    paddingRight: 5, paddingLeft: 5, textAlign: 'center',
                    marginLeft: 10, marginRight: 10, marginBottom: 10
                }}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={this.state.telefone}
                    placeholder="(99) 99999-9999"
                    onChangeText={(value) => this.setState({ telefone: value })} />
                <Text>E-mail: </Text>
                <TextInputRegister
                    placeholder="user@email.com"
                    onChangeText={(value) => this.setState({ email: value })} />
                <Text>Usuário: </Text>
                <TextInputRegister
                    placeholder="user"
                    onChangeText={(value) => this.setState({ usuario: value })} />
                <Text>Senha: </Text>
                <TextInputRegister secureTextEntry
                    placeholder="pass"
                    onChangeText={(value) => this.setState({ senha: value })} />
            </Card>
        )
    }

    render() {
        return (
            <ContainerScroll>
                <HeaderMenuInit text="Cadastro de Voluntário" navigation={this.props} />

                <View>
                    {this.renderScreen()}
                </View>

                <But paddingTop={20} marginBottom={20}>
                    {this.renderButton()}
                </But>
            </ContainerScroll>
        );
    }
}

export default RegisterPerson;
