import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Text } from "../../styles/style";
import HeaderMenu from '../../components/HeaderMenu';
import Firebase from '../../database/firebase';

class ONGDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: {}
        }
    }

    searchONG(idONG) {
        const ref = Firebase.firestore().collection('ONG').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id === idONG) {
                        this.setState({
                            content: doc.data()
                        });
                    }
                });
            })
            .catch(function (error) {
                console.log("Erro ao buscar documento: ", error);
            });

    }

    render() {
        const { idONG, nome, texto } = this.props.navigation.state.params;
        this.searchONG(idONG);
        const { cnpj, email, telefone } = this.state.content;

        return (
            <View>
                <HeaderMenu text="" color="#000000" />
                <Text>{nome}</Text>
                <Text>{cnpj}</Text>
                <Text>{email}</Text>
                <Text>{telefone}</Text>
                <Text>{texto}</Text>
            </View>
        );
    }
}


export default ONGDetail;


const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
})
