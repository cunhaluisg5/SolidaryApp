import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Enter extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButtonGoogle() {
        return <Button
            title="Google"
            color="#FFFFFF"/>
    }

    renderButtonFacebook() {
        return <Button
            title="Facebook"
            color="#0000FF"/>
    }

    renderButtonEmail() {
        return <Button
            title="Email"
            color="#FF8C00"/>
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Acesse com</Text>
                <View style={styles.button}>
                    {this.renderButtonGoogle()}
                </View>
                <View style={styles.button}>
                    {this.renderButtonFacebook()}
                </View>
                <View style={styles.button}>
                    {this.renderButtonEmail()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        textAlignVertical: "center",
        marginTop: 40,
        marginBottom: 20
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        fontSize: 50,
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
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
});
export default Enter;