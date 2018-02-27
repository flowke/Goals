import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class OverView extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>
        <View>
          
        </View>
        <ScrollView>
          <View>
            <Icon
              name="star"
              size={22}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 18
  }
})
