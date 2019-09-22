import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ContentItem from './ContentItem';

class ContentPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = [
            'Análise de Riscos',
            'Dispositivos Móveis',
            'Engenharia de Software Experimental',
            'Gerência de Projetos',
            'Seminários III'
        ]

        const itens = content.map((name, index) =>
            <ContentItem key={index} name={name}></ContentItem>
        )

        return (
            <ScrollView>
                {itens}
            </ScrollView>
        );
    }
}

export default ContentPage