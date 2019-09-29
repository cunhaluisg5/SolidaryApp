import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Doação', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        {this.renderButton0()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButton1()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButton2()}
                    </View>
                    <View style={styles.button}>
                        {this.renderButton3()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        marginBottom: 10,
    },
    text: {
        flex: 1,
        marginLeft: 10,
        marginTop: 40,
        fontSize: 20
    },
    containerButton: {
        flex: 1,
        marginTop: 40
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

export default Donate;