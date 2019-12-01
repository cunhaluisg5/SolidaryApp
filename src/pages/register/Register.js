import React from 'react';
import { Card } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { ContainerRegister, Text, ContainerReg } from '../../styles/style';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    registerPerson() {
        const { navigation } = this.props
        navigation.navigate("RegisterPerson")
    }

    registerONG() {
        const { navigation } = this.props
        navigation.navigate("RegisterONG")
    }

    render() {
        return (
            <ContainerReg>
                <ContainerRegister>
                    <Card
                        image={require('../../images/user.png')}>
                        <Text>
                            Cadastre-se como um voluntário para efetuar doações.
                        </Text>
                        <Button
                            buttonStyle={{paddingLeft: 20, paddingRight: 20, 
                                           paddingTop: 10, marginBottom: 10,}}
                            title='Cadastrar Voluntário'
                            onPress={() => this.registerPerson()} />
                    </Card>
                </ContainerRegister>
                <ContainerRegister>
                    <Card
                        image={require('../../images/ong.png')}>
                        <Text>
                            Cadastre-se como uma ONG para receber doações.
                        </Text>
                        <Button
                            buttonStyle={{paddingLeft: 20, paddingRight: 20, 
                                           paddingTop: 10, marginBottom: 10,}}
                            title='Cadastrar ONG'
                            onPress={() => this.registerONG()} />
                    </Card>
                </ContainerRegister>
            </ContainerReg>
        );
    }
}

export default Register;