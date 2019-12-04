import React from 'react';
import { TextInput, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-elements';
import Firebase from '../../database/firebase';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { ContainerUpdate, ContainerButton, But } from '../../styles/style';

class UpdatePassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: ''
        }
    }

    tryRecover() {
        const auth = Firebase.auth();
        const { mail } = this.state;

        auth.sendPasswordResetEmail(mail).then(function () {
            const msg = "Instruções enviadas para " + mail + " !";
            console.log("Email enviado");
            Alert.alert("Atenção", msg);
        }).catch(function (error) {
            console.log("Email não enviado ", error);
            Alert.alert("Atenção", "Erro ao enviar email!")
        });
    }

    renderButton() {
        return <Button
            icon={
                <Icon
                    name="key"
                    size={15}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20, fontSize: 16 }}
            buttonStyle={{ backgroundColor: '#00BFFF' }}
            title="Enviar"
            onPress={() => this.tryRecover()}
        />
    }

    render() {

        return (
            <ContainerUpdate>
                <Card containerStyle={{width: wp('80%')}}
                    title="Recuperação de Senha"
                    titleStyle={{backgroundColor: "#ADD8E6", fontSize: 16}}>
                    <Text>Informe o email cadastrado.</Text>
                    <TextInput
                        placeholder="user@email.com"
                        onChangeText={(value) => this.setState({ mail: value })}
                    />
                </Card>
                <ContainerButton>
                    <But paddingTop={10} marginBottom={10}>
                        {this.renderButton()}
                    </But>
                </ContainerButton>
            </ContainerUpdate>
        );
    }
}


export default UpdatePassword;