import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Card } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

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
        const { navigation } = this.props
        navigation.navigate("Main")
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
        width: wp('50%'),
        height: hp('50%')
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