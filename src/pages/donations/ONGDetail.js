import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { Text, Loading } from "../../styles/style";
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
                <Loading>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>Aguarde, carregando...</Text>
                </Loading>
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
                    <Text>CNPJ: {cnpj}</Text>
                    <Text>Email: {email}</Text>
                    <Text>Telefone: {telefone}</Text>
                    <Text>Campanha: {texto}</Text>
                </Card>
            </View>
        );
    }
}


export default ONGDetail;
