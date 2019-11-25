import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { Card } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import firebase from '../database/firebase'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('ONG');
        this.state = {
            mail: 'teste@teste.com',
            pass: '123456',
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
        var user = firebase.auth().currentUser;

        if (user) {
            const id = user.uid;
            
            this.ref.get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if(doc.id === id) {
                        //console.log("É ONG")
                        navigation.navigate("MainPerson");
                    }else {
                        //console.log("É voluntário")
                        navigation.navigate("MainPerson");
                    }
                })
            })

        } else {
            console.log("Usuário não está logado")
        }
    }

    renderButtonEnter() {
        if (this.state.isLoading)
            return <ActivityIndicator />

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

        //promisse
        firebase.auth().signInWithEmailAndPassword(mail, pass)
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
                                    firebase.auth().createUserWithEmailAndPassword(mail, pass)
                                        .then(user => {
                                            this.setState({ message: 'Sucesso' })
                                        })
                                        .catch(error => {
                                            this.setState({ message: error.code })
                                        })
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image resizeMode="contain" style={styles.image} source={require('../images/logo.png')} />
                </View>
                <Card title="Logar ou Cadastrar-se">
                    <TextInput
                        style={styles.textInput}
                        placeholder="user@email.com"
                        onChangeText={(value) => this.onChangeMail(value)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="********"
                        secureTextEntry
                        onChangeText={(value) => this.onChangePass(value)}
                    />
                </Card>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        {this.renderButtonEnter()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButtonRegister()}
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: wp('70%'),
        height: hp('70%')
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        flex: 1,
        fontSize: 25,
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
    },
    textInput: {
        borderColor: 'lightblue',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        fontSize: 15,
        fontFamily: 'sans-serif-light',
        paddingBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'left',
    },
    icon: {
        height: hp('10%')
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        marginBottom: 10,
    },
    containerButton: {
        marginBottom: 40
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
});

export default Index;