import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import email from 'react-native-email';
import HeaderMenu from '../../components/HeaderMenu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Firebase from '../../database/firebase';
import ContentItem from '../../components/ContentItem';

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
            const { idONG, nome, texto } = doc.data();
            contents.push({
                id: doc.id,
                contents,
                idONG,
                nome,
                texto,
            });
        });
        this.setState({
            contents,
            isLoading: false,
        });
    }


    renderActivityIndicator() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
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
        const { contents } = this.state;
        const { titulo, cor } = this.props.navigation.state.params;

        { this.renderActivityIndicator() }
        if (contents.length === 0) {
            return (
                <View>
                    <Text>{this.state.notFound}</Text>
                    {console.log("Erro ao listar")}
                </View>
            )
        }
        const items = contents.map((content, index) =>
            <ContentItem key={index} nome={content.nome} texto={content.texto} onPress={() => {
                this.props.navigation.navigate('ONGDetail', /*{
                    id: `${JSON.stringify(content.id)}`
                }*/ content);
            }}
            />
        )        

        return (

            <View style={styles.container}>
                <HeaderMenu text={titulo} color={cor} />
                {items}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: wp('28%'),
        marginTop: 20,
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
    },
    text: {
        flex: 1,
        fontSize: 15,
    }
});

export default ContentPageDonation;