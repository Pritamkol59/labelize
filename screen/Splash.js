import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Changerotp from './Changerotp'


import Signup from './Signup'


export default class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
         component : < Signup/>  //
        }
       }
       
       
       componentDidMount(){
       
            // Start counting when the page is loaded
            this.timeoutHandle = setTimeout(()=>{
                 // Add your logic for the transition
                 this.setState({ component: < Changerotp/> })  
            }, 11000);
       }
       
       componentWillUnmount(){
            clearTimeout(this.timeoutHandle); 
       }
       
       render() {
       return (
         this.state.component
       );
}

}
