import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Svg, {
  Circle,
  Defs,
  ClipPath,
  Path,
  Rect
} from 'react-native-svg';

let round = Math.PI*2*25;

export default class OverView extends Component{
  constructor(props){
      super(props);
  }

  render(){
    let {navigate} = this.props.navigation;
    return (
      <View style={S.box}>
        <View style={S.inputWrap}>
          <TextInput
            style={S.input}
            placeholder="查找内容或 goal"
          />
        </View>
        <ScrollView>
          <View style={S.scrollWrap}>
            <Label
              {...{
                size: 32,
                iconName: 'md-star',
                color: '#FFD400',
                title: '今日',
                navigate: ()=>navigate('GoalPage')
              }}
            />
            <Label
              {...{
                size: 30,
                iconName: 'md-bookmark',
                color: '#FC4135',
                title: '主计划'
              }}
            />
            <Label
              {...{
                iconName: 'md-bookmarks',
                color: '#38925E',
                title: '次计划'
              }}
            />
            <Label
              {...{
                iconName: 'md-beer',
                color: '#DB6D51',
                title: '我想学'
              }}
            />
            <Label
              {...{
                iconName: 'ios-bowtie',
                color: '#729DED',
                title: '我想了解'
              }}
            />

          </View>

          {/* goal 列表 */}
          <View style={S.goalsWrap}>
            <View style={S.goal}>
              <GoalStatus
                size={26}
                deg={360}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

function Label({
  size=28,
  iconName,
  color,
  title,
  navigate
}){
  return (
    <TouchableHighlight
      onPress={()=>navigate()}
    >
      <View style={S.labelItem}>
        <View style={S.iconWrap}>
          <Icon
            name={iconName}
            size={size}
            color={color}
          />
        </View>

        <Text style={S.labelTitle}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>

  )
}

function GoalStatus({
  size,
  deg=0,

}){
  let c = size/2;
  let shrink = 1;
  return (
    <Svg {...{width:size, height: size}}>
      <Defs>
        <ClipPath id="clip">
          <Path
            d={getArc(c,deg,{x:c,y:c})}
          />

        </ClipPath>
        <Circle
          cx={c}
          cy={c}
          r={size/2}
        />
      </Defs>
      <Circle
        {...{
          cx: c,
          cy: c,
          r: size/2-shrink-1/2,
          // clipPath: 'url(#clip)',
          fill: 'none',
          stroke: '#8F9190',
          strokeWidth: 1
        }}
      />
      <Rect
        width={size}
        height={size}
        fill="#8F9190"
        clipPath="url(#clip)"

      />
    </Svg>
  )
}

const S = StyleSheet.create({
  box: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16
  },
  inputWrap: {
    backgroundColor: 'hsla(191, 2%, 60%, 0.15)',
    paddingHorizontal: 10,
    borderRadius: 6,
    marginVertical: 8
  },
  input: {
    height: 28,
    color: '#3A4042'
  },
  scrollWrap: {
    marginTop: 20
  },

  labelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#7CB6FE',
    borderRadius: 6,
    height: 42,
  },
  iconWrap: {
    width: 40,
    alignItems: 'center',
  },
  labelTitle: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3336'
  },

  goalsWrap: {
    marginTop: 26,
    paddingHorizontal: 10
  }
});

function getArc(r, deg, c){
  let x = c.x + r*Math.cos((deg-90)*Math.PI/180);
  let y = c.y + r*Math.sin((deg-90)*Math.PI/180);

  let lx = ly = c.x;
  if(deg===360) ly=0;

  return `M${c.x},0 A${c.x},${c.y},0,${deg>180?1:1},${1},${x},${y},L${lx},${ly} Z`;

}
