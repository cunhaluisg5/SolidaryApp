import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';

class Donate extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButton1() {
        return <Button
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#A52A2A' }}
            title="Sangue" />
    }

    renderButton2() {
        return <Button
            titleStyle={{ color: 'ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#00008B' }}
            title="Agasalho" />
    }

    renderButton3() {
        return <Button
            titleStyle={{ color: 'ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#2E8B57' }}
            title="Dinheiro" />
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Doação', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={styles.containerText}>
                    <Text style={styles.text}>Escolha uma das opções abaixo:</Text>
                </View>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        {this.renderButton1()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButton2()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButton3()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        marginBottom: 10,
    },
    text: {
        flex: 1,
        marginLeft: 10,
        marginTop: 50,
        fontSize: 20,

    },
    containerButton: {
        flex: 1,
        marginBottom: 40
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
});

export default Donate;