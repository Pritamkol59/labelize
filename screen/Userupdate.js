import React, { useState,useEffect } from 'react'
import { StyleSheet, View, Image,ScrollView,TouchableOpacity ,ActivityIndicator,KeyboardAvoidingView,Text} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

function Userupdate () {
  
  
  
  
  
  
  

    
    /*

    {"data": {"users": {"address": null,    "img": null, "name": "user@8013860017", email,business }}, "success": true}

    */

    const [isLoad, setIsLoad] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAdd, setUserAdd] = useState('');
    const [userBusiness, setUserBusinesss] = useState('');
    const [userImg, setUserImg] = useState('');
    const [mssg, setMssg] = useState('');

    const navigation = useNavigation(); 

    const fetchUserData = async () => {


      setIsLoad(true);


      try{
        const tok = await AsyncStorage.getItem('token');

        const numbed= await AsyncStorage.getItem('number')
        
        const suparfresh= JSON.parse(tok);

        const freshtoken= "Bearer "+suparfresh;
     const postUserData= await  fetch("https://bobtests.cf/public/api/users",{ 
        method:"POST",
           headers:new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': freshtoken
          }),
          body:JSON.stringify({
            "number":numbed
          })
        
        });
           const myData= await postUserData.json();
          
          
          //console.log(myData);

          
           
          if(myData.success===true){
            setIsLoad(false);

            //console.log(myData);
           
            setUserName(myData.data.users.name);
            setUserEmail(myData.data.users.email);
            setUserAdd(myData.data.users.address);
            setUserBusinesss(myData.data.users.business);
            
            
            


            if(myData.data.users.img==null){

              setUserImg(require('../srcf/user.jpg'));

            }
            else{

              setUserImg(myData.data.users.img);
            }

        
         }
           else{

            setMssg(myData.message);
         try {
                await AsyncStorage.removeItem('token');
                await AsyncStorage.removeItem('number');
               console.log("Done");
               navigation.replace('Login');
          
            }
            catch(exception) {
              console.log(exception);
            }
         }
         }
        
        catch(e){
          console.log(e);
        }

    }

    useEffect(()=>{
  
      AsyncStorage.getItem('number')
      .then(fetchUserData())
      .catch(e => {})

        },[]);



        const postUserData = async () => {

          
          if(userName!=='' && userEmail!=='' && userAdd!=='' && userBusiness!==''  ){

            setIsLoad(true);
    
    
          try{
            const tok = await AsyncStorage.getItem('token');
    
            const numbed= await AsyncStorage.getItem('number')
            
            const suparfresh= JSON.parse(tok);
    
            const freshtoken= "Bearer "+suparfresh;
         const postUserData= await  fetch("https://bobtests.cf/public/api/usersup",{ 
            method:"POST",
               headers:new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': freshtoken
              }),
              body:JSON.stringify({
                "number":numbed,
                "name":userName,
                "email":userEmail,
                "business":userBusiness,
                "address":userAdd,

              })
            
            });
               const myData= await postUserData.json();
              
              
              //console.log(myData);
    
              
               
              if(myData.success===true){
                setIsLoad(false);
    
                //console.log(myData);
               
               /* setUserName(myData.data.users.name);
                setUserEmail(myData.data.users.email);
                setUserAdd(myData.data.users.address);
                setUserBusinesss(myData.data.users.business);*/
                
                navigation.push('Homepage');
                
    
    
               
    
            
             }
               else{
    
                setMssg(myData.message);
            
             }
             }
            
            catch(e){
              console.log(e);
            }


          }

          else{

            alert("all fields are required");
          }

          
    
        }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)"
      },
      ellipseStack: {
        width: 465,
        height: 443,
        marginTop: -148,
        alignSelf: "center"
        
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
   
       },

      ellipse: {
        width: 465,
        height: 443,
        position: "absolute",
        top: 0,
        left: 0
        
      },
      image: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#000000",
        
        
      },
      placeholder: {
      
     
      
      
        marginTop: 20,
        marginLeft: 18,
        marginRight:18
      },
      toch:{
        top: "50%",
        alignSelf: "center",
        position: "absolute"
      }
    });

    if(isLoad){
      return(
  
        <View style={styles.loader}>
  
  
  <ActivityIndicator size="large" color="red"/>
        </View>
  
  
      );
  
    }

    else{

      return (

        <>
         <ScrollView>
        
        <View>
        <KeyboardAvoidingView behavior='position'> 
  
        <View style={styles.ellipseStack}>
  
  
  
  <Svg viewBox="0 0 465 443" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(47,152,75,1)"
            cx={233}
            cy={222}
            rx={233}
            ry={222}
          ></Ellipse>
        </Svg>
  
        <TouchableOpacity style= {styles.toch} onPress={() =>console.log("Clicked")}>
        <Image
          source={userImg}
          resizeMode="cover"
          style={styles.image}
        ></Image>
  
        </TouchableOpacity>
  
        </View>
  
        
   
    


        <TextInput
            label="Update Name"
            placeholder=''
            
            mode='outlined'
            style={styles.placeholder}
           
            theme={{ roundness: 35, colors:{primary:"red"}}} 
            onChangeText={setUserName}

        value={userName}

        ></TextInput>
        <TextInput
            label="Update Business Name"
            placeholder=''
            
            mode='outlined'
            style={styles.placeholder}
           
            theme={{ roundness: 35, colors:{primary:"red"}}} 

            onChangeText={setUserBusinesss}
            

            value={userBusiness}
        ></TextInput>

        <TextInput
            label="Update Address/Business Address"
            placeholder=''
            
            mode='outlined'
            style={styles.placeholder}
           
            theme={{ roundness: 35, colors:{primary:"red"}}} 

            

            onChangeText={setUserAdd}

            value={userAdd}
        ></TextInput>

  
        <TextInput
            label="Update Email"
            placeholder=''
            
            mode='outlined'
            style={styles.placeholder}
           
            theme={{ roundness: 35, colors:{primary:"red"}}} 

           

            onChangeText={setUserEmail}

            value={userEmail}
        ></TextInput>
  
       
  
  
  
  
  
  
  </KeyboardAvoidingView>


  <Button  style={styles.btn}  mode="contained" 
  
  theme={{ roundness: 35,  colors:{primary:"red"}}}
  
  
  onPress={postUserData}>
  
  
      
  <Text style={styles.loginOrSignup}>Update</Text> 
    </Button>


    <Text style={styles.loginOrSignup}> </Text> 

        </View>
  
        </ScrollView>
  
        </>
      )

    }
   
  
}

export default Userupdate;