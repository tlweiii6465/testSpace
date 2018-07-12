import React from 'react';
import { Text,View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  render() {
    return (
      <View style={{height:"100%",width:"100%"}}>
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./asset/imgs/LineAnimation.json')}
      /><Text>TEST</Text>
      </View>
    );
  }
}