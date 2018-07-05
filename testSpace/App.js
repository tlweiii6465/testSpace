import React, {Component} from 'react';
import { Platform, AsyncStorage, AppState, StyleSheet,View, Text } from 'react-native';
import { Grid, Row, Col, Container, Left, Button, Icon, Body, Right,Content } from 'native-base';
import BlinkView from 'react-native-blink-view';
import Moment from "moment";
import AnimateNumber from 'react-native-animate-number'
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isBlinking: true,
      test: 1,
      time: new Date().toLocaleString()
    };
}
componentDidMount() {
  //for update time in every second
  this.intervalID = setInterval(
    () => this.tick(),
    1000
  );
  //for update api data in every min
  this.intervalAPI = setInterval(
    () => this.load(),
    3000
    
  ); 
}

async load(){
  var old = this.state.test;
  fetch('https://facebook.github.io/react-native/movies.json', {method: "GET"})
   .then((response) => response.json())
   .then((responseData) =>
   {
     //set your data here
     var testing = responseData.movies[4].id
     
     let rdnubmer = Math.floor((Math.random() * 100) + 1)
      this.setState({
        test:old+rdnubmer,
      })
   })
   .catch((error) => {
       console.error(error);
   });
   
 
 }

componentWillUnmount() {
  clearInterval(this.intervalID,this.intervalAPI);

}
tick() {
  this.setState({
    time: new Date().toLocaleString()
  });
}
  render() {
    console.log(this.state.test)
    ///count time period (AM/PM)
    var timeP = Moment(this.state.time).format("HH")
    var timePeroid = (timeP > 11) ? "PM" : "AM";

    if(timeP > 12) {
      timeP -= 12;
    } else if(timeP == 0) {
      timeP = "12";
    }
    /////////
    return (
      <Container style={styles.container}>
        <Content style={styles.borderContent}>
          <View  style={styles.welcome}>
            <Text style={styles.welcomeFont}>RM          
              <AnimateNumber value={this.state.test}
                countBy={1}
                timing={(interval, progress) => {
                // slow start, slow end
                return interval * (10 - Math.sin(Math.PI*progress) )*10
              }}/>
            .00</Text>
       
            <Row>
            <BlinkView blinking={this.state.isBlinking?true:false} delay={600}>
              <Text style={[styles.center,{color:"#ce1502"}]}>● LIVE </Text>
            </BlinkView>
            <Text className="App-clock" style={styles.center}>
                {Moment(this.state.time).format("hh : mm : ss")} {timePeroid}  AngPow Pool
            </Text>
            </Row>
            
         
           
          </View>
        </Content>
        <Content>
          <Text style={styles.welcome}>QAA TEST</Text>
        </Content>
        <Content><Text style={styles.welcome}>QAA TEST</Text></Content>
      </Container>
      // <View>
      //   <Text style={styles.container}>RM888.00</Text>
      //   
   
      // </View>
    )
  }
}
export default App;
/////////
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    
  },
  welcomeFont: {
    color:"#ce1502",
    fontSize: 40, 
    textAlign: 'center',
    borderBottomWidth:4,
    borderBottomColor:"gold"
  },
  welcome: {
    padding: 50,
  },
  center:{
    fontSize: 15, 
    textAlign: 'center',
  },
  borderContent:{
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:'#cecece',
  }
});
/////////////