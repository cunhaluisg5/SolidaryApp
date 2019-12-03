import React from 'react';
import { ScrollView, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderMenu from '../../components/HeaderMenu';
import { View, Drop, But, TextInputRegister, ContainerScroll } from '../../styles/style';
import Firebase from '../../database/firebase';
import { Dropdown } from 'react-native-material-dropdown';

class Ad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: '',
            isLoading: false,
            data: [{
                value: 'Tempo',
            }, {
                value: 'Sangue',
            }, {
                value: 'Roupa',
            }, {
                value: 'Dinheiro',
            }],
            value: 'Tempo'
        };
    }

    tryRegister = () => {
        if (this.state.texto.trim() !== '') {
            const saveRef = Firebase.firestore().collection(this.returnCollection());
            const { uid } = Firebase.auth().currentUser;
            const { navigation } = this.props;
            saveRef.add({
                idONG: uid,
                texto: this.state.texto,
            }).then((docRef) => {
                console.log("Campanha publicada");
                Alert.alert("Concluído", "Campanha publicada com sucesso!");
                navigation.goBack();
            })
                .catch((error) => {
                    console.log("Erro ao publicar campanha", error);
                    Alert.alert("Atenção", "Não foi possível publicar a campanha!");
                });
        } else {
            console.log("Campo texto em branco");
            Alert.alert("Atenção", "Preencha a campanha corretamente!");
        }
    }

    returnCollection() {
        switch (this.state.value) {
            case 'Tempo':
                return 'TimeDonation';
                break;
            case 'Sangue':
                return 'BloodDonation';
                break;
            case 'Roupa':
                return 'ClotheDonation';
                break;
            case 'Dinheiro':
                return 'MoneyDonation';
                break;
        }
    }

    renderButton() {
        return <Button
            icon={
                <Icon
                    name="user"
                    size={15}
                    color="white"
                />
            }
            title="Finalizar"
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#00BFFF' }}
            onPress={this.tryRegister} />
    }

    renderScreen() {
        return this.renderRegister()
    }

    renderRegister() {
        return (
            <View>
                <HeaderMenu text='Publicar' color='#3D6DCC' />
                <Drop>
                    <Dropdown
                        itemTextStyle={{ textAlign: "center" }}
                        label='Tipo de Campanha'
                        baseColor='#6A5ACD'
                        value={this.state.value}
                        data={this.state.data}
                        onChangeText={(value) => { this.setState({ value }) }}
                    />
                </Drop>
                <ScrollView>
                    <Card title="Anunciar"
                        titleStyle={{ backgroundColor: '#ADD8E6' }}
                        containerStyle={{ backgroundColor: '#F0F8FF' }}>
                        <TextInputRegister
                            multiline={true}
                            numberOfLines={6}
                            placeholder="Escreva sua campanha aqui!"
                            onChangeText={(value) => this.setState({ texto: value })} />
                    </Card>
                </ScrollView>
            </View>
        )
    }

    render() {
        return (
            <ContainerScroll>
                <View>
                    {this.renderScreen()}
                </View>

                <But paddingTop={20} marginBottom={20}>
                    {this.renderButton()}
                </But>
            </ContainerScroll>
        );
    }
}

export default Ad;