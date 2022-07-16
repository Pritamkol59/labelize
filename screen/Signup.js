import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import Video from 'react-native-video';
//import { windowHeight, windowWidth } from '../utils/Dimensions';

export class Signup extends Component {
  render() {




    const styles = StyleSheet.create({
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    });
    return (


      <View style={{flex:1, backgroundColor:'black'}}>
      <Video source={require('../srcf/intro.mp4')}   // Can be a URL or a local file.
      ref={(ref) => {
        this.player = ref
      }}     
      resizeMode="cover"                                 // Store reference
      onBuffer={this.onBuffer}                // Callback when remote video is buffering
      onError={this.videoError}               // Callback when video cannot be loaded
      style={styles.backgroundVideo} />
      
      </View>
    )
    
  }
  
}

export default Signup

