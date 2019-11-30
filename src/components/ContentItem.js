import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Text } from "../styles/style";


const ContentItem = (props) => {
    const { cor, texto, onPress } = props;

    return (
        <TouchableOpacity onPress={() => {
            onPress();
        }}>
            <Card
                titleStyle={{ backgroundColor: '#ADD8E6' }}
                containerStyle={{ backgroundColor: cor }}>
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