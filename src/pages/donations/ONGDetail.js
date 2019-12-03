import React from 'react';
import { View, ActivityIndicator, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import email from 'react-native-email';
import { Card, Button } from 'react-native-elements';
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

    sendPhone = (phone) => {
        const tel = phone + ""
        Linking.openURL(`tel:${tel}`)
    }

    sendMail = (mail) => {
        const to = mail + ""
        email(to)
    }

    renderButtonMail(email, cor) {
        const em = email + ""
        return <Button
            icon={
                <Icon
                    name="envelope"
                    size={20}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: cor, borderRadius: 5 }}
            title="Enviar e-mail"
            onPress={() => this.sendMail(em)}
        />
    }

    renderButtonPhone(telefone, cor) {
        const tel = telefone + "";
        return <Button
            icon={
                <Icon
                    name="phone"
                    size={20}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: cor, borderRadius: 5 }}
            title={tel}
            onPress={(tel) => this.sendPhone(tel)}
        />
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
                    titleStyle={{ backgroundColor: '#4876FF', color: '#FFF', fontSize: 30 }}
                    containerStyle={{ backgroundColor: '#00008B' }}>
                    <Text color={'white'}  >CNPJ: {cnpj}</Text>
                    <View>
                        {this.renderButtonMail(email, cor)}
                        {this.renderButtonPhone(telefone, cor)}
                    </View>
                    <Text color={'white'}>Campanha: {texto}</Text>
                </Card>
            </View>
        );
    }
}


export default ONGDetail;