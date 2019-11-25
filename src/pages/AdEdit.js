import React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import HeaderMenu from '../components/HeaderMenu';
import Firebase from '../database/firebase';

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

        const updateRef = Firebase.firestore().collection(this.state.colecao).doc(this.state.id);
        updateRef.set({
            idONG: this.state.idONG,
            texto: this.state.texto
        }).then((docRef) => {
            console.log("Editou")
            this.props.navigation.goBack();
        })
            .catch((error) => {
                console.error("Erro atualizando documento: ", error);
            });

        this.setState({
            isLoading: false,
        });
    }

    tryDelete(id) {
        const { navigation } = this.props;
        this.setState({
            isLoading: true
        });

        Firebase.firestore().collection(this.state.colecao).doc(this.state.id).delete().then(() => {
            console.log("Documento apagado");
            this.setState({
                isLoading: false
            });
            navigation.goBack();
        }).catch((error) => {
            console.error("Erro apagando o documento ", error);
            this.setState({
                isLoading: false
            });
        });

    }

    render() {
        const cor = this.props.navigation.state.params.cor
        return (
            <ScrollView>
                <HeaderMenu text="Campanha" color={cor} />
                <Card title="Anunciar"
                    titleStyle={{ backgroundColor: '#ADD8E6' }}
                    containerStyle={{ backgroundColor: '#F0F8FF' }}>
                    <TextInput style={styles.textInput}
                        multiline={true}
                        numberOfLines={6}
                        value={this.state.texto}
                        onChangeText={(value) => this.setState({ texto: value })} />
                </Card>
                <View style={styles.containerButton}>
                    <Button
                        buttonStyle={{marginTop: 10}}
                        title='Editar'
                        onPress={() => { this.tryEdit(); }} />
                    <Button
                        buttonStyle={{marginTop: 10, backgroundColor: '#CD0000'}}
                        title='Apagar'
                        onPress={() => { this.tryDelete(); }} />
                </View>
            </ScrollView>
        );
    }
}


export default AdEdit;


const styles = StyleSheet.create({
    containerButton: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    }
})
