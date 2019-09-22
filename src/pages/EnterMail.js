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
    if(this.state.isLoading)
      return <ActivityIndicator/>

    return  <Button
            title="Entrar"
            onPress={() => this.tryLogin()} />
  }

  tryLogin() {
    //console.log(this.state);
    this.setState( { isLoading: true } )
    const { mail, pass } = this.state
    const { navigation } = this.props
    //Promisse
    firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then(user => {
        //console.log('Usuário autenticado com sucesso', user)
        this.setState({ message: 'Sucesso' })
        navigation.navigate("Content")
      })
      .catch(error => {
        console.log('Deu ruim', error)
        this.setState({ message: error.code })
        if(error.code === 'auth/user-not-found') {
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
            onPress: () => {console.log('Usuário não quer criar conta')}
          }])
        }
      })
      .finally(() => this.setState({ isLoading: false })) 
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="user@email.com"
          onChangeText={(value) => this.onChangeMail(value)} />
        <TextInput
          style={styles.textInput}
          placeholder="********"
          secureTextEntry
          onChangeText={(value) => this.onChangePass(value)} />
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
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    fontSize: 20,
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
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default EnterMail;