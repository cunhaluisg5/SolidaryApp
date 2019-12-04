import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import HeaderMenu from '../../components/HeaderMenu';
import { View } from '../../styles/style';

class MainPerson extends React.Component {
    constructor(props) {
        super(props);
    }

    trySeachTimeDonation() {
        const { navigation } = this.props
        navigation.navigate("ContentPageDonation", { nomeColecao: 'TimeDonation', titulo: 'Tempo', cor: '#44A3D9' })
    }

    trySeachBloodDonation() {
        const { navigation } = this.props
        navigation.navigate("ContentPageDonation", { nomeColecao: 'BloodDonation', titulo: 'Sangue', cor: '#C82A2B' })
    }

    trySeachClotheDonation() {
        const { navigation } = this.props
        navigation.navigate("ContentPageDonation", { nomeColecao: 'ClotheDonation', titulo: 'Roupa', cor: '#F8781F' })
    }

    trySeachMoneyDonation() {
        const { navigation } = this.props
        navigation.navigate("ContentPageDonation", { nomeColecao: 'MoneyDonation', titulo: 'Dinheiro', cor: '#97BE3D' })
    }

    renderButton0() {
        return <Button
            icon={<Icon name="clock-o" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#44A3D9' }}
            title="Tempo"
            onPress={() => this.trySeachTimeDonation()} />
    }

    renderButton1() {
        return <Button
            icon={<Icon name="heart" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#C82A2B' }}
            title="Sangue"
            onPress={() => this.trySeachBloodDonation()} />
    }

    renderButton2() {
        return <Button
            icon={<Icon name="shirtsinbulk" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#F8781F' }}
            title="Roupa"
            onPress={() => this.trySeachClotheDonation()} />
    }

    renderButton3() {
        return <Button
            icon={<Icon name="money" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#97BE3D' }}
            title="Dinheiro"
            onPress={() => this.trySeachMoneyDonation()} />
    }

    render() {
        return (
            <View>
                <HeaderMenu text='Doar' color='#3D6DCC' />
                <View flexDirection='column' display='flex' marginTop='40px'>
                    <View paddingLeft='20px' paddingRight='20px' paddingTop='5px' marginBottom='10px'>
                        {this.renderButton0()}
                    </View>
                    <View paddingLeft='20px' paddingRight='20px' paddingTop='5px' marginBottom='10px'>
                        {this.renderButton1()}
                    </View>
                    <View paddingLeft='20px' paddingRight='20px' paddingTop='5px' marginBottom='10px'>
                        {this.renderButton2()}
                    </View>
                    <View paddingLeft='20px' paddingRight='20px' paddingTop='5px' marginBottom='10px'>
                        {this.renderButton3()}
                    </View>
                </View>
            </View>
        );
    }
}

export default MainPerson;