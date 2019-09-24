import React from 'react';
import { StyleSheet, TextInput, View, Text, ActivityIndicator, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      icon={
        <Icon
          name="check"
          size={15}
          color="black"
        />
      }
      title="Entrar"
      titleStyle={{ color: 'black', marginLeft: 10, fontSize: 20 }}
      buttonStyle={{ backgroundColor: '#4169E1' }}
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
    alignItems: "center",
    marginTop: 20
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