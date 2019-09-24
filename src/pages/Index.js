import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButtonEnter() {
        return <Button
            icon={
                <Icon
                    name="check"
                    size={15}
                    color="black"
                />
            }
            titleStyle={{ color: 'black', marginLeft: 10 }}
            buttonStyle={{backgroundColor: '#4169E1'}}
            title="Entrar"
            onPress={() => this.tryEnter()} />
    }

    renderButtonRegister() {
        return <Button
            icon={
                <Icon
                    name="user"
                    size={15}
                    color="black"
                />
            }
            titleStyle={{ color: 'black', marginLeft: 10 }}
            buttonStyle={{backgroundColor: '#FF8C00'}}
            title="Cadastrar-me"
            onPress={() => this.tryRegister()}
        />
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
                <View style={styles.containerText}>
                    <Text style={styles.text}>Entre ou cadastre-se</Text>
                </View>
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
        width: wp('35%'),
        height: hp('21%')
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    icon: {
        height: hp('10%')
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