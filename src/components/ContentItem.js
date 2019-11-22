import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Text } from "../styles/style";


const ContentItem = (props) => {
    const { nome, texto, onPress } = props;

    return (
        <TouchableOpacity onPress={() => {
            console.log('Clicou em mim', nome);
            onPress();
        }}>
            <Card title={nome}
                titleStyle={{ backgroundColor: '#ADD8E6' }}
                containerStyle={{ backgroundColor: '#F0F8FF' }}>
                {
                    <View>
                        <Text>{texto}</Text>
                    </View>
                }
            </Card>
        </TouchableOpacity>
    );
}


export default ContentItem;


const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
})
