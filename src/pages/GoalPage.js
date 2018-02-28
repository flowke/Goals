import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Name extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>
        <Text> GoalPage </Text>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
