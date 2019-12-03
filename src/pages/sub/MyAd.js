import React from 'react';
import { ScrollView, ActivityIndicator, Text } from 'react-native';
import HeaderMenu from '../../components/HeaderMenu';
import { View, Loading, Drop } from '../../styles/style';
import { Dropdown } from 'react-native-material-dropdown';
import Firebase from '../../database/firebase';
import ContentItem from '../../components/ContentItem';

class MyAd extends React.Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            isLoading: true,
            contents: [],
            data: [{
                value: 'Tempo',
            }, {
                value: 'Sangue',
            }, {
                value: 'Roupa',
            }, {
                value: 'Dinheiro',
            }],
            value: 'Tempo',
        }
    }

    componentDidMount() {
        this.init();
    }

    onContentUpdate = (querySnapshot) => {
        const contents = [];
        querySnapshot.forEach((doc) => {
            const { texto } = doc.data();
            contents.push({
                id: doc.id,
                contents,
                texto,
            });
        });
        this.setState({
            contents,
            isLoading: false,
        });
    }

    init() {
        const { uid } = Firebase.auth().currentUser;
        const ref = Firebase.firestore().collection(this.returnCollection()).where("idONG", "==", uid);
        this.unsubscribe = ref.onSnapshot(this.onContentUpdate);
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

    returnColor() {
        switch (this.state.value) {
            case 'Tempo':
                return '#1E90FF';
                break;
            case 'Sangue':
                return '#CD0000';
                break;
            case 'Roupa':
                return '#DAA520';
                break;
            case 'Dinheiro':
                return '#2E8B57';
                break;
        }
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
        const cor = this.returnColor();
        const colecao = this.returnCollection();

        const items = contents.map((content, index) =>
            <ContentItem key={index} cor={cor} nome={content.nome} texto={content.texto} onPress={() => {
                this.props.navigation.navigate('AdEdit', { content, colecao: colecao, cor: cor });
            }}
            />,
        )
        return (
            <View>
                <HeaderMenu text='Campanhas' color='#3D6DCC' />
                <Drop>
                    <Dropdown
                        itemTextStyle={{textAlign: "center"}}
                        label='Tipo de Campanha'
                        baseColor='#6A5ACD'
                        value={this.state.value}
                        data={this.state.data}
                        onChangeText={(value) => { this.setState({ value }); this.init() }}
                    />
                </Drop>
                <ScrollView>
                    {items}
                </ScrollView>
            </View>
        )
    }
}

export default MyAd;