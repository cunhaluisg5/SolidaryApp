import React from 'react';
import { Header } from 'react-native-elements';

const HeaderMenuInit = (props) => {
  const { text, navigation } = props;

  return (
    <Header
      leftComponent={{ icon: 'arrow-back', color: '#FFF', onPress: () => navigation.navigation.goBack() }}
      centerComponent={{ text: text, style: { color: '#FFF', fontSize: 20 } }}
      containerStyle={{ backgroundColor: "#757272" }}
    />
  )
}

export default HeaderMenuInit;
