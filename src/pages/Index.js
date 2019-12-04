import React from 'react';
import { Text, ActivityIndicator, Alert, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Firebase from '../database/firebase';
import { Loading, Image, ContainerImage, TextInput, But, ContainerButton, Container, 
                                                TextRecover } from '../styles/style'

class Index extends React.Component {
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
        this.setState({
            mail: value
        })
    }

    onChangePass(value) {
        this.setState({
            pass: value
        })
    }

    redirectUser() {
        const { navigation } = this.props
        const user = Firebase.auth().currentUser;
        if (user) {
            if (user.displayName === 'ong') {
                navigation.navigate("MainONG");
            } else {
                navigation.navigate("MainPerson");
            }
        } else {
            console.log("Usuário não está logado")
        }
    }

    renderButtonEnter() {
        return <Button
            icon={
                <Icon
                    name="check"
                    size={15}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#228B22' }}
            title="Entrar"
            onPress={() => this.tryEnter()} />
    }

    renderButtonRegister() {
        return <Button
            icon={
                <Icon
                    name="user"
                    size={15}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#00BFFF' }}
            title="Cadastrar-me"
            onPress={() => this.tryRegister()}
        />
    }

    tryEnter() {
        this.setState({ isLoading: true })
        const { mail, pass } = this.state

        Firebase.auth().signInWithEmailAndPassword(mail, pass)
            .then(user => {
                this.setState({ message: 'Sucesso' })
                this.redirectUser();
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('Não cadastrado',
                        'Deseja cadastrar um novo usuário?',
                        [
                            {
                                text: 'Sim',
                                onPress: () => {
                                    this.props.navigation.navigate("Register")
                                }
                            },
                            {
                                text: 'Não',
                                onPress: () => { console.log('Usuário não quer criar conta') }
                            }])
                }
            })
            .finally(() => this.setState({ isLoading: false }))
    }

    tryRegister() {
        const { navigation } = this.props
        navigation.navigate("Register")
    }

    redirect = () =>{
        this.props.navigation.navigate("UpdatePassword")
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loading>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>Aguarde, carregando...</Text>
                </Loading>
            )
        }
        return (
            <Container>
                <ContainerImage>
                    <Image resizeMode="contain" source={require('../images/logo.png')} />
                </ContainerImage>
                <Card title="Logar ou Cadastrar-se">
                    <TextInput
                        placeholder="user@email.com"
                        onChangeText={(value) => this.onChangeMail(value)}
                    />
                    <TextInput
                        placeholder="********"
                        secureTextEntry
                        onChangeText={(value) => this.onChangePass(value)}
                    />
                </Card>
                <TouchableHighlight onPress={this.redirect}>
                    <TextRecover> Esqueci minha senha </TextRecover>
                </TouchableHighlight>
                <ContainerButton>
                    <But paddingTop={10} marginBottom={10}>
                        {this.renderButtonEnter()}
                    </But>
                    <But paddingTop={10} marginBottom={10}>
                        {this.renderButtonRegister()}
                    </But>
                </ContainerButton>
            </Container >
        );
    }
}

export default Index;