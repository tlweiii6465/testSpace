import React from "react";
import { Animated, Easing, View,Modal, StyleSheet  } from "react-native";
import LottieView from "lottie-react-native";
import { Container, Button,Content, Text, Right,Left ,Icon,Body,Header } from "native-base";

export default class HomeIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    // Or set a specific startFrame and endFrame with:
        this.animation.play(1,90);
    // Animated.timing(this.state.progress, {
    //   toValue: 1,
    //   duration: 5000,
    //   easing: Easing.linear,
    // }).start();
    // this.animation.play();

  }

  render() {

    return (
        <Button transparent onPress={()=>this.animation.play(1,90)} >
          <LottieView
          style={{
            height:"100%",
            width: "100%",
            }}
          name="home-outline"
          ref={animation => {
            this.animation = animation;
            }}
            source={require("./asset/imgs/PinJump.json")} progress={this.state.progress}
            loop={false}
             
            imageAssetsFolder="images"
          />
       </Button>

    );
  }
}

// const styles = StyleSheet.create({
//     activityIndicatorWrapper: {
//         backgroundColor: "#00000000",
//         height: "100%",
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-around"
//     }
// });