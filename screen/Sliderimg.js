import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'

export default class Sliderimg extends Component {
    constructor(props){
        super(props);
        this.state = {
          images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
            require('../srcf/print.png'),          // Local image
          ]
        };
      }
}
