import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Item from './components/todoItem';

export default class extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>
        <Item></Item>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: 42,
    paddingHorizontal: 8
  }
})
