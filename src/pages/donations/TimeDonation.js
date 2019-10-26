import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import email from 'react-native-email';
import HeaderMenu from '../../components/HeaderMenu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class TimeDonation extends React.Component {

    constructor(props) {
        super(props);
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
        return (
            <View style={styles.container}>
                <HeaderMenu text = 'Tempo' color = '#1E90FF'/>
                <Card title="Exemplo JF"
                    titleStyle={{ backgroundColor: '#ADD8E6' }}
                    containerStyle={{ backgroundColor: '#F0F8FF' }}>
                    <Text>
                        Rua Exemplo,
                        S/N - Exemplo,
                        Exemplo - MG,
                        00000-000
                    </Text>
                    <View style={styles.button}>
                        {this.renderButtonPhone()}
                        {this.renderButtonMail()}
                        {this.renderButtonWhatsApp()}
                    </View>
                </Card>
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

export default TimeDonation;