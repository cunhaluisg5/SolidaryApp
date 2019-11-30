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
        navigation.navigate("ContentPageDonation", { nomeColecao: 'TimeDonation', titulo: 'Tempo', cor: '#1E90FF' })
    }

    trySeachBloodDonation() {
        const { navigation } = this.props
        navigation.navigate("ContentPageDonation", { nomeColecao: 'BloodDonation', titulo: 'Sangue', cor: '#CD0000' })
    }

    trySeachClotheDonation() {
        const { navigation } = this.props
        navigation.navigate("ContentPageDonation", { nomeColecao: 'ClotheDonation', titulo: 'Roupa', cor: '#DAA520' })
    }

    trySeachMoneyDonation() {
        const { navigation } = this.props
        navigation.navigate("ContentPageDonation", { nomeColecao: 'MoneyDonation', titulo: 'Dinheiro', cor: '#2E8B57' })
    }

    renderButton0() {
        return <Button
            icon={<Icon name="clock-o" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#1E90FF' }}
            title="Tempo"
            onPress={() => this.trySeachTimeDonation()} />
    }

    renderButton1() {
        return <Button
            icon={<Icon name="heart" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#CD0000' }}
            title="Sangue"
            onPress={() => this.trySeachBloodDonation()} />
    }

    renderButton2() {
        return <Button
            icon={<Icon name="shirtsinbulk" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#DAA520' }}
            title="Roupa"
            onPress={() => this.trySeachClotheDonation()} />
    }

    renderButton3() {
        return <Button
            icon={<Icon name="money" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#2E8B57' }}
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