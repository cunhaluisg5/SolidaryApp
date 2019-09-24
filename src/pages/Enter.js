import React from 'react';
import { StyleSheet, TextInput, Button, View, Text, ActivityIndicator, Alert } from 'react-native';

class Enter extends React.Component {
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

  renderMessage() {
    return (
      <Text> {this.state.message} </Text>
    )
  }

  renderButton() {
    return <Button
      title="Entrar"
      color="#FF8C00"
      onPress={() => this.tryLogin()} />
  }

  tryLogin() {
    this.setState({ isLoading: true })
    const { mail, pass } = this.state
    const { navigation } = this.props
    navigation.navigate("Main")
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

export default Enter;