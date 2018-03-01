import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import OverView from '../pages/OverViewPage';
import GoalPage from '../pages/GoalPage';

function functionName() {
  function ss() {

  }
}

export default StackNavigator({
  OverView: {
    screen: OverView,
    navigationOptions: {
      header: null,

    }
  },
  GoalPage: {
    screen: GoalPage
  },
},{
  headerMode: 'screen',
  initialRouteName: 'GoalPage'
});
