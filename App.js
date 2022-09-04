import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

const buttons = ["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "3", "2", 
"1", "+", "0", ".", "+/-", "="]

  return(
    <View>
      <View style={styles.result}>
        <Text style={{fonteSize: 20 , margin: 10}}> 2+2 = 5</Text>
      </View>
    <View style={styles.buttons}>
        {buttons.map((button) =>
    <TouchableOpacity Key={button}style={styles.button}><Text style={styles.textButton}>{button}</Text></TouchableOpacity>)}
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  result:{

  justifyContent: 'Flex-end' ,
  alignItems: 'Flex-end' ,
  width: '100%' ,
  height: '300' ,
  backgroundColor: '#f5f5f5'
},
  buttons:{
  flexDirection:'wrap' ,
  flexWrap: 'row' ,
},
button: {
  flex: 2 ,
  justifyContent: 'center' ,
  alignItems: 'center' ,
  backgroundColor: 'pink',
  minWidth: '90' ,
  minHeight: '90'
},
textButton: {
  Color: '#5b5b5b',
  fontSize: '25',
},
});