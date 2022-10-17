import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import MyTabs from './Bottomnav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import AsyncStorage from '@react-native-async-storage/async-storage';


import { api } from './Constances';

export default function Changeprimiumcards({route}) {
    const navigation = useNavigation(); 
    const [isSelect, setIsSelect] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [SelectCard, setIsSelectCard] = useState('');
    const [cardsource, setIscardsource] = useState('');

    const cn= route.params.paramKey ;

    const red =() => {

        console.log("temp1");
        setIsSelect(true);
        setIsSelectCard('temp1');
        setIscardsource('https://lableiz.com/public/storage/primum/temp1.png');
        saves();
          }
          const green =() => {
        
        console.log("temp2");
        setIsSelect(true);
        setIsSelectCard('temp2');
        setIscardsource('https://lableiz.com/public/storage/primum/temp2.png');
            
        saves();
          }
          const yellow =() => {
        
        console.log("temp3");
        setIsSelect(true);
        setIsSelectCard('temp3');
        setIscardsource('https://lableiz.com/public/storage/primum/temp3.png');
            
        saves();
          }
          const orange =() => {
        
        console.log("temp4");
        setIsSelect(true);
        setIsSelectCard('temp4');
        setIscardsource('https://lableiz.com/public/storage/primum/temp4.png');
            
        saves();
          }
          const blue =() => {
        
        console.log("temp5");
        setIsSelect(true);
        setIsSelectCard('temp5');
        setIscardsource('https://lableiz.com/public/storage/primum/temp5.png');
            
        saves();
          }


          const saves = async() =>{


           
        
              
              setIsLoad(true);
        
              const numo= await AsyncStorage.getItem('number');
        
        
        
            
            
              setIsLoad(true);
            
                  try{
                    const tok = await AsyncStorage.getItem('token');
            
                    
                    
                    const suparfresh= JSON.parse(tok);
            
                    const freshtoken= "Bearer "+suparfresh;
                 const postUserData= await  fetch(api+"pcardchange",{ 
                    method:"POST",
                       headers:new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': freshtoken
                      }),
                      body:JSON.stringify({
                       'inttro':numo,
                        
                        'cphn':cn,
                        
                        'cardname':SelectCard,
                        'cardsource':cardsource,
                        
                        
        
                      })
                    
                    });
                       const myData= await postUserData.json();
                      
                      
                      console.log(myData);
            
                      
                       
                      if(myData.success===true){
                        
        
                        //alert("Data save SuccessFully");
        
                    
        
                      setIsLoad(false);
        
                      navigation.push('Editprimiumcard',{paramKey: cn,});
        
                      
                        
                       // navigation.push('Freecard');
                        
            
            
                       
            
                    
                     }
                       else{
            
                        
                    
                     }
                     }
                    
                    catch(e){
                      console.log(e);
                    }
        
        
        
        
          }





  return (
    

      <View style={styles.body}> 
      
      <ImageBackground
        style={styles.imgtop10}
        imageStyle={styles.imageStyle1}
        source={require("../srcf/Gradient_XrvkRkC.png")}

      >
         
         <TouchableOpacity  onPress={() =>navigation.push('Editprimiumcard',{paramKey: cn,})}>

<Image
source={require('../srcf/back.png')}
resizeMode="cover"
style={styles.imagex}
></Image>

</TouchableOpacity>


        <Text style={styles.textmenuupper}> Please Select A Card</Text>
      </ImageBackground>

     
      
    <ScrollView>
   
    <TouchableOpacity  onPress={red}>

      <ImageBackground
        style={styles.imgtop1}
        imageStyle={styles.imageStyle}
        source={require("../srcf/tem1.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>


    <TouchableOpacity onPress={green}>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/tem2.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>


    <TouchableOpacity onPress={yellow}>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/tem3.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>

      
    <TouchableOpacity  onPress={orange}>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/tem4.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>


    <TouchableOpacity  onPress={blue}>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/tem5.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>

    <View style={styles.imgtopb}>


    </View>



    </ScrollView>
      
    <View style={styles.footer}>
    
    <MyTabs/>
   
    </View>
      
      </View>
  )
}

const styles = StyleSheet.create({

    body:{
  
        backgroundColor:"#313131",
    width:windowWidth,
    height:'100%',
  
    },
  
  
    imgtop1:{
  
        marginTop:20,
            
        height: 200,
        
        width:windowWidth,
       
        
            
          },
  
    imgtop10:{
  
        marginTop:0,
            
        height: 100,
        
        width:windowWidth,
       
        
            
          },
  
          ap:{
            justifyContent: 'center',
            alignItems: 'center',
      
            height:100,
            width:100,
      
      
      
      
          },
          aps:{
            marginTop:'55%',
            justifyContent: 'center',
            alignItems: 'center',
      
            
      
      
      
      
          },
        
          imgs:{
        
           
           
            height:200,
            width:windowWidth,
          },
        
           imgtop2:{
        
        marginTop:20,
        height: 200,
        
        width:windowWidth,
        
            
          },
           imgtopb:{
        
        marginTop:20,
        height: 250,
        
        width:windowWidth,
        
            
          },
  
    footer:{
  
  alignItems:"center",
         marginTop: windowHeight-70,
         position:'absolute',
  
        },
  
      
  
          textmenuupper:{
  
            color: "rgba(255,255,255,1)",
            marginTop: 20,
            marginLeft: 50,
            alignItems:'center',
            fontSize:20
    
          },
  
          imagex:{
            height:20,
            width:30,
            marginTop:'3%',
            marginLeft:30
          },
  
          tick:{
            height:50,
            width:100,
            marginLeft:'39%',
            marginRight:'50%',
            marginTop:'6%',
            
          },
  
          tv:{
            marginTop:10,
          },
  
          imgtopc:{
  
            marginTop:10,
            
            
            
            width:windowWidth,
            borderWidth: 1,
  borderColor: "#000000",
  borderRadius: 10,
  overflow: "hidden"
  
  
          },
  
  
          space:{
  
            marginTop:50,
  
            height: windowHeight-700,
  
          },
  
  
          form:{
           
      
      alignItems:"center",
  
  
  
          },
          
          forms:{
  
            color: "rgba(255,255,255,1)",
            marginTop: 20,
            
            
            fontSize:20
    
          },
  
          placeholder: {
    
   
    
    
            marginTop: 20,
            marginLeft: 18,
            marginRight:18,
            //backgroundColor:'#6C63FF',
            //backgroundColor:'#fcfc',
            backgroundColor:'#fff',
            
  
          },
  
         
  
  
          loader:{
  
            minHeight:"100%",
            backgroundColor:'transparent',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
       
           }
  
         
  
  
  
  
  });