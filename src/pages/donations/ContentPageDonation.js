import React from 'react';
import { ActivityIndicator, Text, Linking } from 'react-native';
import HeaderMenu from '../../components/HeaderMenu';
import Firebase from '../../database/firebase';
import ContentItem from '../../components/ContentItem';
import { Loading, ContainerScroll } from '../../styles/style'

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
            const { idONG, texto } = doc.data();
            contents.push({
                id: doc.id,
                contents,
                id: idONG,
                texto,
            });
        });
        this.setState({
            contents,
            isLoading: false,
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
        const { contents } = this.state;
        const { titulo, cor } = this.props.navigation.state.params;

        if (contents.length === 0) {
        }
        const items = contents.map((content, index) =>
            <ContentItem style={{ color: "#FFF" }} key={index} cor={cor} texto={content.texto}
                onPress={() => {
                    this.props.navigation.navigate('ONGDetail', { content, titulo, cor });
                }}
            />
        )

        return (
            <ContainerScroll>
                <HeaderMenu text={titulo} color={cor} navigation={this.props} />
                {items}
            </ContainerScroll>
        );
    }
}

export default ContentPageDonation;