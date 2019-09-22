import React from 'react';
import { StyleSheet, TextInput, Button, View, Text, ActivityIndicator, Alert } from 'react-native';
import firebase from 'firebase';

class EnterMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      pass: '',
      message: '',
      isLoading: false
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
      title="Entrar"
      color="#FF8C00"
      onPress={() => this.tryLogin()} />
  }

  tryLogin() {
    //console.log(this.state);
    this.setState({ isLoading: true })
    const { mail, pass } = this.state
    const { navigation } = this.props
    //Promisse
    firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then(user => {
        //console.log('Usuário autenticado com sucesso', user)
        this.setState({ message: 'Sucesso' })
        navigation.navigate("Main")
      })
      .catch(error => {
        console.log('Erro', error)
        this.setState({ message: error.code })
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Não cadastrado',
            'Deseja cadastrar um novo usuário ?',
            [{
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Digite o e-mail e a senha</Text>
          <Text style={styles.text}>para continuar</Text>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            placeholder="user@email.com"
            onChangeText={(value) => this.onChangeMail(value)} />
          <TextInput
            style={styles.textInput}
            placeholder="********"
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
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 30,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 20
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

export default EnterMail;