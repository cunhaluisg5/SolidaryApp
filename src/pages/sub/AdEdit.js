import React from 'react';
import { Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import HeaderMenu from '../../components/HeaderMenu';
import Firebase from '../../database/firebase';
import { Loading, ContainerBut, TextInputRegister } from '../../styles/style'

class AdEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: {},
            colecao: this.props.navigation.state.params.colecao,
            id: this.props.navigation.state.params.content.id,
            idONG: '',
            texto: '',
            isLoading: false,
        }
    }

    componentDidMount() {

        this.setState({ isLoading: true });
        const ref = Firebase.firestore().collection(this.state.colecao).doc(this.state.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                console.log("Documento  encontrado");
                const content = doc.data();
                this.setState({
                    idONG: content.idONG,
                    texto: content.texto,
                    isLoading: false
                });

            } else {
                console.log("Documento não encontrado");
            }
        });
    }

    tryEdit() {
        this.setState({
            isLoading: true,
        });
        if (this.state.texto.trim() !== '') {

            Alert.alert('Atenção',
                'Deseja editar esta campanha?',
                [
                    {
                        text: 'Sim',
                        onPress: () => {
                            const updateRef = Firebase.firestore().collection(this.state.colecao)
                                .doc(this.state.id);
                            updateRef.set({
                                idONG: this.state.idONG,
                                texto: this.state.texto
                            }).then((docRef) => {
                                console.log("Campanha editada");
                                Alert.alert("Concluído", "Campanha editada com sucesso!");
                                this.props.navigation.goBack();
                            })
                                .catch((error) => {
                                    console.error("Erro ao editar a campanha", error);
                                    Alert.alert("Atenção", "Não foi possível editar a campanha!");
                                });
                        }
                    },
                    {
                        text: 'Não',
                        onPress: () => { console.log('Usuário não quer editar a campanha') }
                    }])
        } else {
            console.log("Campo texto em branco");
            Alert.alert("Atenção", "Preencha a campanha corretamente!");
        }
        this.setState({
            isLoading: false,
        });
    }

    tryDelete(id) {
        const { navigation } = this.props;
        this.setState({
            isLoading: true
        });

        Alert.alert('Atenção',
            'Deseja apagar esta campanha?',
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        Firebase.firestore().collection(this.state.colecao).doc(this.state.id).delete().then(() => {
                            console.log("Campanha apagada");
                            Alert.alert("Concluído", "Campanha apagada com sucesso!");
                            navigation.goBack();
                        }).catch((error) => {
                            console.error("Erro ao apagar a campanha", error);
                            Alert.alert("Atenção", "Não foi possível apagar a campanha!");
                        });
                    }
                },
                {
                    text: 'Não',
                    onPress: () => { console.log('Usuário não quer apagar a campanha') }
                }])
        this.setState({
            isLoading: false
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
        const cor = this.props.navigation.state.params.cor
        return (
            <ScrollView>
                <HeaderMenu text="Campanha" color={cor} />
                <Card title="Anunciar"
                    titleStyle={{ backgroundColor: '#ADD8E6' }}
                    containerStyle={{ backgroundColor: '#F0F8FF' }}>
                    <TextInputRegister
                        multiline={true}
                        numberOfLines={6}
                        value={this.state.texto}
                        onChangeText={(value) => this.setState({ texto: value })} />
                </Card>
                <ContainerBut>
                    <Button
                        buttonStyle={{ marginTop: 10 }}
                        title='Editar'
                        onPress={() => { this.tryEdit(); }} />
                    <Button
                        buttonStyle={{ marginTop: 10, backgroundColor: '#CD0000' }}
                        title='Apagar'
                        onPress={() => { this.tryDelete(); }} />
                </ContainerBut>
            </ScrollView>
        );
    }
}


export default AdEdit;
