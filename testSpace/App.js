import React, {Component} from 'react';

import { Platform, AsyncStorage, AppState, StyleSheet,View, Text,Button } from 'react-native';

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType, NotificationActionType, NotificationActionOption, NotificationCategoryOption} from "react-native-fcm";
import { Toast } from "native-base";

const i = 0;

FCM.on(FCMEvent.Notification,async(notif)=>{
  if(notif.local_notification){
    console.log("what is that?")

  }

  if (notif.fcm) {
    this.title = notif.fcm.title
    this.body = notif.fcm.body
    FCM.presentLocalNotification({
      id: "testnotif",
      fire_date: new Date().getTime() + 5000,
      vibrate: 500,
      sound: "bell.mp3",
      click_action: "com.testspace",
      badge: 1,
      title: this.title,
      body: this.body,
      // sub_text: "sub text",
      priority: "high",
      large_icon:
        "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
      show_in_foreground: true,
      // picture:
      //   "https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png",
      wake_screen: true,
      extra1: { a: 1 },
      extra2: 1
    });
    console.log(this.title, this.body)
  }

  if(notif.opened_from_tray){
    console.log("Onpress Location")
  }

  if(Platform.OS === 'ios'){
    switch(notif._notificationType){
      case NotificationType.Remote:
        notif.finish(RemoteNotificationResult.NewData)
        break;
        case NotificationActionType.NotificationResponse:
        notif.finish();
        break;
        case NotificationType.WillPresent:
          notif.finish(WillPresentNotificationResult.All)
          break;
    }
  }
});
FCM.on(FCMEvent.RefreshToken,(token)=>{
  console.log(token)
});

const instructions = Platform.select({
  ios:'Press Cmd+R to reload,\n'+
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n'+
  'Shake or press menu button for dev menu',
});

export default class App extends Component{
  componentWillMount(){
    FCM.requestPermissions().then(()=>console.log('granted')).catch(()=>console.log('Get permission'))

    FCM.getFCMToken().then(token => {
      console.warn(token)
    });

    this.notificationListener = FCM.on(FCMEvent.Notification,async(notif)=>{

    });

    FCM.getInitialNotification().then(notif => {
      console.log(notif)
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Push notification 
        </Text>
        <Text style={styles.instructions}>
          Getting Start 
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title="Subscribe" onPress={() => {
            console.log("Here we GO!");
            if(i==0){
              FCM.subscribeToTopic('news');
              console.log("SUB!");
              title="Subscribe";
              i=1;
            }else if(i==1){
              FCM.unsubscribeFromTopic('news');
              console.log("UNSUB!");
              title="Unsubscribe";
              i=0;
            }
          }} style={styles.welcome}>   
        </Button>
      </View>
    )
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