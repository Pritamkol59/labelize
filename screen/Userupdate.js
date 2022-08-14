import React, { useState,useEffect,useRef } from 'react'

import { StyleSheet, View, Image,ScrollView,TouchableOpacity ,ActivityIndicator,KeyboardAvoidingView,Text} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import { api } from './Constances';
import Icon from 'react-native-vector-icons/AntDesign';
import MyTabs from './Bottomnav';

function Userupdate () {
  
  
  
  
  
  
  

    
    /*

    {"data": {"users": {"address": null,    "img": null, "name": "user@8013860017", email,business }}, "success": true}

    */

    const [isLoad, setIsLoad] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAdd, setUserAdd] = useState('');
    const [userBusiness, setUserBusinesss] = useState('');
    const [userImg, setUserImg] = useState('https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png');
    const [mssg, setMssg] = useState('');
     
    const navigation = useNavigation(); 

    const refRBSheet = useRef();


   

    const fetchUserData = async () => {


      setIsLoad(true);


      try{
        const tok = await AsyncStorage.getItem('token');

        const numbed= await AsyncStorage.getItem('number')
        
        const suparfresh= JSON.parse(tok);

        const freshtoken= "Bearer "+suparfresh;
     const postUserData= await  fetch(api+"users",{ 
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
  
     
      fetchUserData();
      

        },[]);



        const postUserData = async () => {

          
          if(userName!=='' && userEmail!=='' && userAdd!=='' && userBusiness!==''  ){

            setIsLoad(true);
    
    
          try{
            const tok = await AsyncStorage.getItem('token');
    
            const numbed= await AsyncStorage.getItem('number')
            
            const suparfresh= JSON.parse(tok);
    
            const freshtoken= "Bearer "+suparfresh;
         const postUserData= await  fetch(api+"usersup",{ 
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

        const takePhoto =() =>{

          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setUserImg(image.path);
            postUserPhoto(image.path);
          });

        }

        const takeFromGalary =() =>{

          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setUserImg(image.path);
            postUserPhoto(image.path);

          });

        }



        const postUserPhoto = async (imagepath) => {
        if(userImg!==''){

          const imageData = new FormData();

          const date= new Date();

          

        setIsLoad(true);
          try{
            const tok = await AsyncStorage.getItem('token');
    
            const numbed= await AsyncStorage.getItem('number')
            
            const suparfresh= JSON.parse(tok);
    
            const freshtoken= "Bearer "+suparfresh;


            imageData.append('number',numbed);
            imageData.append("dp",{

              uri:imagepath,
              name:numbed+date +".jpg",
              filename:numbed+date,
              type:'image/jpg',

            })

            console.log("Fromdata",imageData);

         const postUserData= await  fetch(api+"userdp",{ 
            method:"POST",
               headers:new Headers({
                 
                'Accept': 'application/json',
                "Content-Type": "multipart/form-data",
                
                'Authorization': freshtoken
              }),
              /*body:JSON.stringify({
                "number":numbed,
              
                "dp":filename

              })*/
              body: imageData,
            
            });
               const myData= await postUserData.json();
              
               if(myData.success===true){
                navigation.push('Homepage');

                setIsLoad(false);
              // console.log(myData);
                }
               else{
    
                setIsLoad(false);
                setMssg(myData.msg);
               // console.log(myData.msg);

            
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




          const handleCl = async () => {

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
      btn1: {
      
      
        strokeWidth:10,
        height:50, 
        marginTop: 10,
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
        borderWidth: 1,
        borderColor: "#000000",
        
        
      },

      imagex: {
        width: 25,
        height: 25,
       
        
        
      },
      placeholder: {
      
     
      
      
        marginTop: 20,
        marginLeft: 18,
        marginRight:18
      },

      listContainer: {
        flex: 1,
        padding: 25
      },

      listTitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#666"
      },

      listButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
      },

      listLabel: {
        fontSize: 16
      },

      toch:{
        top: "50%",
        alignSelf: "center",
        position: "absolute"
      },

      pictext:{

        top: "80%",
        alignSelf: "center",
        position: "absolute",
        color: "#fff"


      },

      tochx:{
        top: "40%",
        left:'12%',
        position: "absolute"
      },
      footer:{

     
        // backgroundColor: "rgba(231,231,231,1)",
         alignItems:"center",
        
         marginTop:'165%',
         

        

        position:'absolute',

        

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

        <TouchableOpacity style= {styles.tochx} onPress={() => navigation.push('Homepage')}>

        <Image
          source={require('../srcf/back.png')}
          resizeMode="cover"
          style={styles.imagex}
        ></Image>

        </TouchableOpacity>
  
        <TouchableOpacity style= {styles.toch} onPress={() =>refRBSheet.current.open()}>
        <Image
          source={{
           uri: userImg ,
          }}
          resizeMode="cover"
          style={styles.image}
        ></Image>
  
        </TouchableOpacity>


        <Text style= {styles.pictext}>Touch The Image & Upload Business Logo</Text>
  
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


  <RBSheet
             ref={refRBSheet}
              height={200}
            >
              <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Chose From</Text>
               
                <TouchableOpacity style={styles.listButton} onPress={takePhoto} >
                      <Text style={styles.listLabel}> <Icon name="camerao" size={30} color="#900" /> Camera </Text>
                      
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.listButton} onPress={takeFromGalary}>
                      <Text style={styles.listLabel}> <Icon name="picture" size={30} color="#900" /> Galary </Text>
                      
                      </TouchableOpacity>

              </View>
            </RBSheet>




  <Button  style={styles.btn}  mode="contained" 
  
  theme={{ roundness: 35,  colors:{primary:"red"}}}
  
  
  onPress={postUserData}>
  
  
      
  <Text style={styles.loginOrSignup}>Update</Text> 
    </Button>


     




    <Button  style={styles.btn1}  mode="contained" 

theme={{ roundness: 35,  colors:{primary:"red"}}}


onPress={handleCl}>


  
<Text style={styles.loginOrSignup}>Logout</Text> 
</Button>


<Text style={styles.loginOrSignup}> </Text>
<Text style={styles.loginOrSignup}> </Text>


        </View>

      
  
        </ScrollView>

        <View style={styles.footer}>
      
      <MyTabs/>
     
      </View>
  
        </>
      )

    }
   
  
}

export default Userupdate;