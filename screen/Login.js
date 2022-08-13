import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image,ImageBackground, ScrollView, KeyboardAvoidingView,FlatList,Dimensions, ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Svg, { Ellipse } from "react-native-svg";


import { useNavigation } from '@react-navigation/native';
import { api } from './Constances';




function PhoneSignIn() {
  
  // If null, no SMS has been sent
  /*const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+918013860017')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );*/


  const navigation = useNavigation(); 


  


  const [number, onChangeNumber] = useState('');
  const [mssg, setMssg] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [userData, setUserData] = useState('');


  








 const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      
     
      backgroundColor: "rgba(255,255,255,1)"
    },
    ellipse: {
      width: 258,
      height: 251
    },
    ellipse2: {
      width: 100,
      height: 102,
      
      marginLeft: 148,
      marginTop: 210
    },
    ellipseRow: {
      height: 292,
      flexDirection: "row",
      justifyContents:'flex-end',
      marginTop: -93,
      marginLeft: -86,
      marginRight: -40
    },
    welcomeBack: {
      fontFamily: "roboto-700",
      color: "#121212",
      fontSize: 25,
      textAlign: "center",
      marginTop: 1,
      marginLeft: 0
    },

    welcomeBack2: {
      fontFamily: "roboto-700",
      color: "red",
      fontSize: 16,
      textAlign: "center",
      marginTop: 2,
      marginLeft: 0
    },


    image: {
      width: "100%",
      height: 190,
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },

    placeholder: {
      
     
      
      
      marginTop: 20,
      marginLeft: 18,
      marginRight:18
    },

    btn: {
      
      
      strokeWidth:10,
      height:50, 
      marginTop: 20,
      marginLeft: 18,
      marginRight:18,
      

      
    },

    loginOrSignup: {
     
      fontSize: 20
      
    },

    loader:{

     minHeight:"100%",
     display:"flex",
     justifyContent:"center",
     alignItems:"center",

    }

  });
  

//api call and chack
  const handleClick = async () => {

    if( number % 1 === 0 && number.length>9 && number.length<11){


      
      setIsLoad(true);


      
       /* axios.post('http://10.0.2.2:8000/api/signup/', { number:number })
        .then(response => console.log(response.data));  */

/*
        fetch("https://bobtests.cf/public/api/signup",{

        method:"POST",
        headers:{
          'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "number":number
        })

        })


         .then(res=>res.json())
        .then(data=>{
          console.log(data)
          console.log(data.msg)
          if(data.success===true){

            //navigation.push('Otp');

            
            navigation.push('Otp',{
              paramKey: number,
            });

          

        
          }
          else{
            setMssg(data.msg);
          }

        })
*/

try{
const postUserData= await  fetch(api+"signup",{ 

  method:"POST",
  headers:{
    'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    "number":number
  })

});

   const myData= await postUserData.json();
   setUserData(myData);
   setIsLoad(false);
   console.log(myData);

   if(myData.success===true){



    navigation.push('Otp',{
      paramKey: number,
    });




   }
   else{
    setMssg(myData.msg);
  }



}

catch(e){
  console.log(e);
}





    

     //console.log(number); 
     //10.0.2.2

    }

    else{

      alert("please enter Valid 10 Digits PhoneNo only");

    }

    
  
}



  if(isLoad){
    return(

      <View style={styles.loader}>


<ActivityIndicator size="large" color="red"/>
      </View>


    );

  }

  else{


    return(

      <>
  
  
  
  
  
      <ScrollView>
  
        
      
      <View style={styles.container}>
  
  
        
        
  
      
      <KeyboardAvoidingView behavior='position'> 
        
        <View style={styles.ellipseRow}>
          <Svg viewBox="0 0 257.9 251.04" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={4}
              fill="rgba(255,0,54,1)"
              cx={129}
              cy={126}
              rx={129}
              ry={126}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 80.41 82.37" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={4}
              fill="rgba(255,0,54,1)"
              cx={40}
              cy={41}
              rx={40}
              ry={41}
            ></Ellipse>
          </Svg>
        </View>
        <Text style={styles.welcomeBack}>Welcome Back</Text>
        <Image
          source={require('../srcf/print.png')}
          resizeMode="contain"
          style={styles.image}
        ></Image>
  
  <TextInput
          label="Enter Phone No"
          placeholder='99999999999'
          
          mode='outlined'
          style={styles.placeholder}
         
          theme={{ roundness: 35, colors:{primary:"red"}}} 
  
          keyboardType="numeric"
  
          onChangeText={onChangeNumber}
  
          value={number}
  
          maxLength={10}
        ></TextInput>
  
  </KeyboardAvoidingView>
  
  <Text style={styles.welcomeBack2}>{mssg}</Text>
  
  <Button  style={styles.btn}  mode="contained" 
  
  theme={{ roundness: 35,  colors:{primary:"red"}}}
  
  
  onPress={handleClick}>
  
  
      
  <Text style={styles.loginOrSignup}> GET OTP</Text> 
    </Button>
  
  
      </View>
  
      
  
  
      </ScrollView>
      
    </>
  
  
  
  
  
    );


  }
  

 
  

  
}

export default PhoneSignIn;