import React from 'react';
import { ActivityIndicator, Text, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import email from 'react-native-email';
import HeaderMenu from '../../components/HeaderMenu';
import Firebase from '../../database/firebase';
import ContentItem from '../../components/ContentItem';
import { Loading, ContainerScroll } from '../../styles/style'

class ContentPageDonation extends React.Component {

    constructor(props) {
        super(props);
        this.ref = Firebase.firestore().collection(this.props.navigation.state.params.nomeColecao);
        this.unsubscribe = null;
        this.state = {
            isLoading: true,
            contents: [],
        };
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onContentUpdate);
    }

    onContentUpdate = (querySnapshot) => {
        const contents = [];
        querySnapshot.forEach((doc) => {
            const { idONG, texto } = doc.data();
            contents.push({
                id: doc.id,
                contents,
                id: idONG,
                texto,
            });
        });
        this.setState({
            contents,
            isLoading: false,
        });
    }

    sendPhone = (phone) => {
        Linking.openURL(`tel:${phone}`)
    }

    sendWhatsApp = (text, phone) => {
        Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
    }

    sendMail = (mail) => {
        const to = mail
        email(to)
    }

    renderButtonWhatsApp() {
        return <Button
            icon={
                <Icon
                    name="whatsapp"
                    size={10}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 10 }}
            buttonStyle={{ backgroundColor: '#34AF23', borderRadius: 15 }}
            title="32900000000"
            onPress={() => this.sendWhatsApp('Mensagem', '32900000000')}
        />
    }

    renderButtonPhone() {
        return <Button
            icon={
                <Icon
                    name="phone"
                    size={10}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 10 }}
            buttonStyle={{ backgroundColor: '#1E90FF', borderRadius: 15 }}
            title="32900000000"
            onPress={() => this.sendPhone('32900000000')}
        />
    }

    renderButtonMail() {
        return <Button
            icon={
                <Icon
                    name="envelope"
                    size={10}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 10 }}
            buttonStyle={{ backgroundColor: '#708090', borderRadius: 15 }}
            title="Enviar e-mail"
            onPress={() => this.sendMail('mail@mail.com')}
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
        const { contents } = this.state;
        const { titulo, cor } = this.props.navigation.state.params;

        if (contents.length === 0) {
        }
        const items = contents.map((content, index) =>
            <ContentItem key={index} cor={cor} texto={content.texto} onPress={() => {
                this.props.navigation.navigate('ONGDetail', { content, titulo, cor });
            }}
            />
        )

        return (
            <ContainerScroll>
                <HeaderMenu text={titulo} color={cor} />
                {items}
            </ContainerScroll>
        );
    }
}

export default ContentPageDonation;