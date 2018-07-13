import React from 'react';
import { Text,View} from 'react-native';
import { Container, Content } from "native-base";
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(1,10);
  }

  render() {
    return (
      <Container>
     
      <LottieView
      style={{height:"100%",width:"100%"}}
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./asset/imgs/jumping_coins.json')}
        imageAssetsFolder='images'
      /><Text style={{color:"black",textAlign:'center',marginTop:-200}}>TEST</Text>
     
      </Container>
    );
  }
}