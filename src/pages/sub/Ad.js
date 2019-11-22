import React from 'react';
import { Text, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderMenu from '../../components/HeaderMenu';
import { View } from '../../styles/style';
import firebase from '../../database/firebase';

class Ad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            text: '',
            isLoading: false
        }
    }

    /*componentDidMount() {

        const id  = this.props.navigation.getParam('id');
      }

    renderButtonRegister() {
        if (this.state.isLoading)
            return <ActivityIndicator />

        return <Button
            icon={
                <Icon
                    name="check"
                    size={15}
                    color="white"
                />
            }
            titleStyle={{ color: 'white', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#228B22' }}
            title="Entrar"
            onPress={() => this.tryRegister()} />
    }

    saveContent() {
        const id = this.props.navigation.getParam('id');

        this.setState({
            isLoading: true,
        });

        const data = {
            id: this.state.id,
            text: this.state.text
        }

        if (id !== "0") {

            console.log('update id', id);

            const updateRef = firebase.firestore().collection('ONGTempo').doc(JSON.parse(id));
            updateRef.set({
                text: this.state.text
            }).then((docRef) => {
                this.props.navigation.navigate("MyAd");
            })
                .catch((error) => {
                    console.error("Erro atualizando documento: ", error);
                });

        } else {

            console.log('add id', id);

            const saveRef = firebase.firestore().collection('ONGTempo');
            saveRef.add({
                text: this.state.text
            }).then((docRef) => {
                this.props.navigation.navigate("MyAd");
            })
                .catch((error) => {
                    console.error("Erro adicionando o documento: ", error);
                });
        }
        this.setState({
            isLoading: false,
        });
    }*/

    render() {
        return (
            <View>
                <HeaderMenu text = 'Anunciar' color = '#3D6DCC'/>
                <Text>Teste</Text>
            </View>
            /*<ScrollView>
                <Card title="Fazer Anúncio">
                    <Text>Informações: </Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        value={this.state.text}
                        onChangeText={(text) => { this.setState({ text: text }) }}
                        placeholder="Descreva sobre a doação" />
                </Card>
                <View >
                    <Button
                        title='Salvar'
                        onPress={() => this.saveContent()} />
                </View>
            </ScrollView>*/
        )
    }
}

export default Ad;