import React from 'react';

import { StyleSheet,View, Text,ActivityIndicator } from 'react-native';

import  MainService from "./app/services/mainservice";

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      showME:true
    }
    
  }
  
  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        showME:false
      })
    },
    2000)
  }

  render(){
    return(
      <View style={styles.container}>
         {
           this.state.showME ? 
        <ActivityIndicator size="large"/> 
        :
        <View>
          <Text>Welcome!</Text>
        </View>
        } 
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});