import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContentItem = (props) => {
  const {name} = props;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default ContentItem;