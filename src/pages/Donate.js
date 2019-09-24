import React from 'react';
import { StyleSheet, TextInput, Button, View, Text, ActivityIndicator } from 'react-native';

class Donate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Doe!</Text>
                </View>
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
    text: {
        marginLeft: 10,
        fontSize: 20,

    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 30,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'center',
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

export default Donate;