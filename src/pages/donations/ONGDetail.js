import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { Text } from "../../styles/style";
import HeaderMenu from '../../components/HeaderMenu';
import Firebase from '../../database/firebase';

class ONGDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: {},
            id: this.props.navigation.state.params.content.id
        }
    }

    componentDidMount() {
        Firebase.firestore().collection('ONG').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id === this.state.id) {
                        this.setState({
                            content: doc.data(),
                            isLoading: false
                        });
                    }
                });
            })
            .catch(function (error) {
                console.log("Erro ao buscar documento: ", error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>Aguarde, carregando...</Text>
                </View>
            )
        }
        const { nome, cnpj, email, telefone } = this.state.content;
        const { texto } = this.props.navigation.state.params.content
        const titulo = this.props.navigation.state.params.titulo
        const cor = this.props.navigation.state.params.cor

        return (
            <View>
                <HeaderMenu text={titulo} color={cor} />
                <Card title={nome}
                    titleStyle={{ backgroundColor: cor, color: '#FFFFFF' }}
                    containerStyle={{ backgroundColor: cor }}>
                    <Text style={styles.text}>CNPJ: {cnpj}</Text>
                    <Text style={styles.text}>Email: {email}</Text>
                    <Text style={styles.text}>Telefone: {telefone}</Text>
                    <Text style={styles.text}>Campanha: {texto}</Text>
                </Card>
            </View>
        );
    }
}


export default ONGDetail;


const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#FFFFFF'
    },
})
