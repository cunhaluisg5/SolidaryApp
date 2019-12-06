import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-elements';
import HeaderMenuInit from '../../components/HeaderMenuInit';
import Firebase from '../../database/firebase';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ContainerButton, But } from '../../styles/style';

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
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#00BFFF' }}
            title="Enviar"
            onPress={() => this.tryRecover()}
        />
    }

    render() {

        return (
            <View>
                <HeaderMenuInit text="Recuperação de Senha" navigation={this.props} />
                    <Card containerStyle={{ width: wp('90%') }}
                        title="Informe o email cadastrado"
                        titleStyle={{ fontSize: 18 }}>
                        <TextInput
                            style={{fontSize: 18}}
                            placeholder="user@email.com"
                            onChangeText={(value) => this.setState({ mail: value })}
                        />
                    </Card>
                    <ContainerButton>
                        <But paddingTop={10} marginBottom={10}>
                            {this.renderButton()}
                        </But>
                    </ContainerButton>
            </View>
        );
    }
}


export default UpdatePassword;