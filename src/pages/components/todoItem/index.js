
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>
        <View style={S.checkBoxWrap}>
          <View style={[S.checkBox, S.check]}>
            <Icon
              name="md-checkmark"
              size={13}
              color="#fff"
              // fontWeight="900"
            />
          </View>

        </View>
        <View style={S.titleWrap}>
          <Text style={S.todoTitle}>统一讲解</Text>
        </View>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  checkBoxWrap: {
    padding: 10,
    // alignSelf: 'flex-start',
    // backgroundColor: 'red'
  },
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#A6ACAD',
    borderRadius: 5,
  },
  check: {
    backgroundColor: '#3878CF',
    borderColor: '#568DD6'
  },
  titleWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  todoTitle: {
    fontSize: 17,
    color: '#464A4D',
    // backgroundColor: 'red'
  }
})
