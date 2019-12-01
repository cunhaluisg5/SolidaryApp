import React from 'react';
import { View, Text, Alert } from 'react-native';
import { isCnpj } from "validator-brazil";
import { TextInputMask } from 'react-native-masked-text'
import firebase from '../../database/firebase'
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { But, TextRegister, TextInputRegister, ContainerText, ContainerScroll } from '../../styles/style'

class RegisterONG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: '',
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
        const { cnpj, nome, telefone, email, usuario, senha } = this.state;
        const { navigation } = this.props;
        firebase.auth().createUserWithEmailAndPassword(email.trim(), senha)
            .then((user) => {
                const userID = user.user.uid;
                const userRef = firebase.firestore().collection('ONG')
                    .doc(userID);
                userRef.set({
                    cnpj,
                    nome,
                    telefone,
                    email,
                    usuario
                });
                firebase.auth().currentUser.updateProfile({ displayName: "ong" })
                navigation.navigate("Index");
            }).catch((error) => {
                console.log("Erro ao adicionar o doc ", error);
            })
    }

    renderScreen() {
        return this.renderRegisterONG()
    }

    validatorCNPJ(text) {
        //https://www.npmjs.com/package/validator-brazil

        const cpfSemFormato = text.replace(".", "").replace(".", "").replace("/", "").replace("-", "")

        console.log("tamnaho do texto : ", text.length)
        this.setState({ cnpj: text })

        if (text.length === 18 && !isCnpj(cpfSemFormato)) {
            Alert.alert("CNPJ Inválido!!!")
            this.setState({ cnpj: '' })
        }
    }

    renderRegisterONG() {
        return (
            <Card title="Cadastro de ONG">
                <Text>CNPJ: </Text>
                <TextInputMask style={{
                    borderColor: 'black', borderBottomWidth: 1, fontSize: 20,
                    paddingRight: 5, paddingLeft: 5, textAlign: 'center',
                    marginLeft: 10, marginRight: 10, marginBottom: 10
                }}
                    type={'cnpj'}
                    value={this.state.cnpj}
                    onChangeText={(text) => this.validatorCNPJ(text)}
                    placeholder="99.999.999/9999-99" />
                <Text>Nome: </Text>
                <TextInputRegister
                    placeholder="nome ...."
                    onChangeText={(value) => { this.setState({ nome: value }) }} />
                <Text>Telefone: </Text>
                <TextInputRegister
                    placeholder="telefone"
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
                <ContainerText>
                    <TextRegister>Preencha os dados abaixo para efetuar o cadastro</TextRegister>
                </ContainerText>

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

export default RegisterONG;
