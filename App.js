import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MyCard from './Component/card';

const App = () => {
  return (
    <View style={{marginTop:150,height:'50%',width:'100%',}}>
      <MyCard />
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;
