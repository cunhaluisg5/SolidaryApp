import React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Página principal do sistema</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        textAlignVertical: "top",
    },
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
});

export default Main;