import React from 'react';
import {Text} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';


const Header =(props)=> {
  const {textStyle,viewStyle}=styles;
  return(
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  textStyle:{
    fontSize:20
  },
  viewStyle:{
    backgroundColor:'#f8f8f8',
    height:60,
    justifyContent:'center',
    alignItems:'center',
    marginTop:2,
    shadowOffset:{widht:0,height:4},
    shadowOpacity:0.6,
  }
};


export default Header
