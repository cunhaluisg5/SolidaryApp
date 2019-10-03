import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from '../styles/style';
import { Button, Header } from 'react-native-elements';

class Donate extends React.Component {
    constructor(props) {
        super(props);
    }

    trySeachBloodDanation() {
        const { navigation } = this.props
        navigation.navigate("BloodDonation")
    }

    renderButton0() {
        return <Button
            icon={<Icon name="clock-o" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#1E90FF' }}
            title="Tempo" />
    }

    renderButton1() {
        return <Button
            icon={<Icon name="heart" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#CD0000' }}
            title="Sangue"
            onPress={() => this.trySeachBloodDanation()} />
    }

    renderButton2() {
        return <Button
            icon={<Icon name="shirtsinbulk" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#DAA520' }}
            title="Agasalho" />
    }

    renderButton3() {
        return <Button
            icon={<Icon name="money" size={15} color="white" />}
            titleStyle={{ color: '#ffffff', marginLeft: 10, fontSize: 20 }}
            buttonStyle={{ backgroundColor: '#2E8B57' }}
            title="Dinheiro" />
    }

    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Doação', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
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

export default Donate;