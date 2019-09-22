import React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButtonEnter() {
        return <Button
            title="Entrar"
            color="#4169E1"
            onPress={() => this.tryEnter()} />
    }

    renderButtonRegister() {
        return <Button
            title="Cadastrar-me"
            color="#FF8C00"
            onPress={() => this.tryRegister()} />
    }

    tryEnter() {
        const { navigation } = this.props
        navigation.navigate("Enter")
    }

    tryRegister() {
        const { navigation } = this.props
        navigation.navigate("Register")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={require('../images/logo.png')} />
                </View>
                <Text style={styles.text}>Acesse ou cadastre-se</Text>

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
        width: 180,
        height: 180
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        textAlign: "center",
        fontSize: 30,
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
        marginBottom: 40
    },
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
});

export default Index;