import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import { ActivityIndicator, Button } from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';









export default function Otp ({route}) {

  const [code,  setOtp] = useState("");
  const [mssg, setMssg] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  
  const navigation = useNavigation(); 

  
  
  
  const Texchange =()=> {

    


   /* const [code,  onCodeFilled] = useState('');
  const [mssg, setMssg] = useState('');
*/




const [counter, setCounter] = React.useState(30);
  React.useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);



    const styles = StyleSheet.create({


      X1: {
        fontFamily: "roboto-regular",
        color: "rgba(72,71,71,1)",
        textAlign: "center",
        fontSize: 25,
        marginTop: 7,
       
      },
      
      X2: {
        fontFamily: "roboto-regular",
        color: "rgba(72,71,71,1)",
        textAlign: "center",
        fontSize: 14,
        marginTop: 7,
       
      },

      Yo:{
       /* flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',*/
        marginTop: 7
      },

      enterYou: {
        fontFamily: "roboto-regular",
        color: "rgb(133,117,141)",
        textAlign: "center",
        
        fontSize:14,
        marginTop: 2,
        
       
      },
      enterYo: {
        fontFamily: "roboto-regular",
        color: "rgb(133,117,141)",
        textAlign: "center",
        
        fontSize:14,
       
       
       
       
      },

      


  
    });

    if(counter>0){


    return (

      <>

      <Text style={styles.X2}>Don't Receive Any Otp Please Wait...</Text>
      
     
      <Text style={styles.X1}>{counter}</Text>

      </>


    );


    }


    else{

      return (

        <View style={styles.Yo}>
  
          
        
  
  
  
        <TouchableOpacity onPress={() =>navigation.replace('Login')}>
        <Text  style={styles.enterYou}>Change Your Number</Text>
        </TouchableOpacity>
  
        </View>
        
      );


    }

    
  }
 



  
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to Exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


  





  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,1)"
    },
    image: {
      width: '100%',
      height: 259,
      marginTop: 42,
      justifyContent: 'center',
      alignItems: 'center'
    },
    verification: {
      fontFamily: "comic-sans-ms-regular",
      color: "rgba(76,76,76,1)",
      textAlign: "center",
      fontSize: 25,
      marginTop: 8,
      
     
    },
    enterYour: {
      fontFamily: "roboto-regular",
      color: "rgba(72,71,71,1)",
      textAlign: "center",
      fontSize: 14,
      marginTop: 7,
     
    },

   

    rect: {
      width: '80%',
      height: 137,
      justifyContent: 'center',
      alignItems: 'center',
      
     /* backgroundColor: "rgba(251,248,248,1)",
      borderWidth: 1,
      borderColor: "rgba(139,139,139,1)",
      borderRadius: 10,
      shadowColor: "rgba(0,0,0,1)",
      
      elevation: 15,
      shadowOpacity: 0.15,
      shadowRadius: 5,*/
      
      marginLeft:'10%',
        
      backgroundColor: "rgba(251,248,248,1)",
      marginTop: 36,

     
      
    },


    btn: {
      strokeWidth:10,
      height:50, 
      marginTop: 20,
      marginLeft: 18,
      marginRight:18,
    },

    placeholder: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 50,
      width: 220,
      marginTop: 43,
      textAlign: "center",
    },
    loginOrSignup: {
     
      fontSize: 20
      
    },

   /* borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "black",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
  
    underlineStyleHighLighted: {
      borderColor: "black",
      color: "#121212",
    }
*/


underlineStyleBase: {
 
  borderWidth: 1,
  borderColor: "black",
  color:'black'
   
},
loader:{

  minHeight:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",

 }




  });

  const handleCl = async () => {

    
   /* */
 
    
   // console.log(code);

   if( code % 1 === 0 && code.length>3 && code.length<5){

    setIsLoad(true);

    const number= route.params.paramKey ;

      console.log(code);

      

      console.log(number);
    


      
    
     
     // const number =  AsyncStorage.getItem('number')
     
     

     /* navigation.push('Homepage',{
        paramKey: 'Some Param from previous Screen',
      });*/
      

      
      
        fetch("https://bobtests.cf/public/api/login",{
          
     method:"POST",
     headers:{
       'Accept': 'application/json',
         'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "number":number,
       "otp":code
     })

     })
     .then(res=>res.json())
     .then(data=>{
       console.log(data)
       console.log(data.data)
       if(data.success===true){

         //navigation.push('Otp');
        
      /*  try{

           AsyncStorage.setItem('token',JSON.stringify(data.data));
           AsyncStorage.setItem('number',number);

           navigation.replace('Homepage');
           
         } 
         catch(e){
           setMssg(e);
         }
         */

         const tk= JSON.stringify(data.data.token);

         const items = [['token', tk], ['number', number]]



         try{

         /* AsyncStorage.setItem('token',tk);
          AsyncStorage.setItem('number',number);*/

          AsyncStorage.multiSet(items, () => {
           
        });

        setIsLoad(false);

        navigation.replace('Homepage');
          
        } 
        catch(e){
          setMssg(e);
        }

         
         

        

        

       }


       else{
         setMssg(data.msg);
       }

     })

     

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

    return (
      <ScrollView>
        
  <View style={styles.container}>
  <KeyboardAvoidingView behavior='position'>
        <Image
          source={require('../srcf/login.png')}
          resizeMode="contain"
          style={styles.image}
        ></Image>
       
        <Text style={styles.verification}>Verification</Text>
        <Text style={styles.enterYour}>Enter Your Otp Verification Code</Text>
        
        
       
  
        
        <OTPInputView
      style={styles.rect}
      pinCount={4}
      // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
      // onCodeChanged = {code => { this.setState({code})}}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled = {(code) => setOtp(code)}
      
      
  />
  
  
        
  
        </KeyboardAvoidingView>
  
        
  
  
         <Texchange/>
         
          
  
        <Button  style={styles.btn}  mode="contained" 
  
  theme={{ roundness: 35,  colors:{primary:"red"}}}
  
  
  onPress={handleCl}>
  
  
      
  <Text style={styles.loginOrSignup}> SUBMIT</Text> 
    </Button>
  
   
  <Text style={styles.enterYour}>{mssg}</Text>
    
      </View>
  
      </ScrollView>
    );


  }

  
  
}
