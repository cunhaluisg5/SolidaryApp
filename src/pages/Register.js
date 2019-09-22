import React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButtonGoogle() {
        return <Button
            title="Google"
            color="#008000"
            onPress={() => this.tryGoogle()} />
    }

    renderButtonFacebook() {
        return <Button
            title="Facebook"
            color="#4169E1"
            onPress={() => this.tryFacebook()} />
    }

    renderButtonMail() {
        return <Button
            title="E-mail"
            color="#FF8C00"
            onPress={() => this.tryMail()} />
    }

    tryGoogle() {
    }

    tryFacebook() {
    }

    tryMail() {
        const { navigation } = this.props
        navigation.navigate("RegisterMail")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={require('../images/logo.png')} />
                </View>
                <Text style={styles.text}>Registre-se com</Text>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        {this.renderButtonGoogle()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButtonFacebook()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButtonMail()}
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        textAlignVertical: "top",
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        fontSize: 50,
        marginBottom: 10,
    },
    containerButton: {
        marginBottom: 200
    },
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
});

export default Register;