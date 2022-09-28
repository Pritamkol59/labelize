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


function FreeLink (){

    
  const navigation = useNavigation(); 

  const [isSelect, setIsSelect] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [SelectCard, setIsSelectCard] = useState('');
  const [cardsource, setIscardsource] = useState('');

  const [cname, setcname] = useState('');
    
    const [cphn, setcphn] = useState('');

    const [cadd1, setcadd1] = useState('');
    const [cadd2, setcadd2] = useState('');
    const [dist, setdist] = useState('');
    const [st, setst] = useState('');
    const [pin, setpin] = useState('');

    const [careoff, setcareoff] = useState('');
    const [ps, setps] = useState('');
    const [po, setpo] = useState('');
    const [landmark, setlandmark] = useState('');


  const red =() => {

    console.log("temp1");
    setIsSelect(true);
    setIsSelectCard('temp1');
    setIscardsource('https://lableiz.com/public/storage/frc/temp1.png');
      
      }
      const green =() => {
    
    console.log("temp2");
    setIsSelect(true);
    setIsSelectCard('temp2');
    setIscardsource('https://lableiz.com/public/storage/frc/temp2.png');
        
      
      }
      const yellow =() => {
    
    console.log("temp3");
    setIsSelect(true);
    setIsSelectCard('temp3');
    setIscardsource('https://lableiz.com/public/storage/frc/temp3.png');
        
      
      }
      const orange =() => {
    
    console.log("temp4");
    setIsSelect(true);
    setIsSelectCard('temp4');
    setIscardsource('https://lableiz.com/public/storage/frc/temp4.png');
        
      
      }
      const blue =() => {
    
    console.log("temp5");
    setIsSelect(true);
    setIsSelectCard('temp5');
    setIscardsource('https://lableiz.com/public/storage/frc/temp5.png');
        
      
      }



      const saves = async() =>{


        if(cname!==''){
    
    
          setIsLoad(true);
    
          const numbed= await AsyncStorage.getItem('number');
    
    
          console.log(cname);
         
        
          //setIsLoad(true);
        
              try{
                const tok = await AsyncStorage.getItem('token');
        
                
                
                const suparfresh= JSON.parse(tok);
        
                const freshtoken= "Bearer "+suparfresh;
             const postUserData= await  fetch(api+"freelinkcreat",{ 
                method:"POST",
                   headers:new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': freshtoken
                  }),
                  body:JSON.stringify({
                    "num":numbed,
                    "name":cname,
                    "crdname":SelectCard,
                    "crdimg":cardsource
                   
                    
    
                  })
                
                });
                   const myData= await postUserData.json();
                  
                  
                  console.log(myData);
        
                  
                   
                  if(myData.success===true){
                    
    
                    //alert("Data save SuccessFully");
    
                  const ff= JSON.stringify(myData.data);
    
                  setIsLoad(false);

                  navigation.push("Savefreelink");
    
                    //alert(ff);
    
                  
                    
                   // navigation.push('Freecard');
                    
        
        
                   
        
                
                 }
                   else{
        
                    
                
                 }
                 }
                
                catch(e){
                  console.log(e);
                }
    
    
        }
    
        
        else{
    
          alert("all  * fields are required");
        }
    
    
      }
  

      if(isSelect==true){

        return (
          <View style={styles.body}> 
          
    
          
          <ImageBackground
            style={styles.imgtop10}
            imageStyle={styles.imageStyle1}
            source={require("../srcf/Gradient_XrvkRkC.png")}
    
          >
             
             <TouchableOpacity  onPress={() =>navigation.push('FreeManually')}>
    
    <Image
    source={require('../srcf/back.png')}
    resizeMode="cover"
    style={styles.imagex}
    ></Image>
    
    </TouchableOpacity>
    
            
    
            <Text style={styles.textmenuupper}> Genarate Link </Text>
    
           
    
            
    
    
    
    
    
    
          </ImageBackground>
    
          {isLoad?<View style={styles.aps}>
            <Image
            source={require('../srcf/ap.gif')}
            
            style={styles.ap}
            
            resizeMode={'cover'}
            ></Image></View>:
          <ScrollView>
    
          
          
    
          <ImageBackground
            style={styles.imgtopc}
            imageStyle={styles.imageStyle1}
            source={require("../srcf/wbk.png")}
    
          >
             
             
    
                
      
      <TextInput
         label=" Please Enter Rembername Name *"
         placeholder=''
         
         mode='outlined'
         style={styles.placeholder}
        
         onChangeText={setcname}
         maxLength={40}
    
     value={cname}
        
         theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
         
    
     >

     </TextInput>
    
    
      
    
    
    <View style={styles.tv}>
    
    </View>
    
    
    
    
          </ImageBackground>
    
    
          
          
    
          <TouchableOpacity  onPress={saves}>
    
    <Image
    source={require('../srcf/tick.png')}
    resizeMode="cover"
    style={styles.tick}
    ></Image>
    
    </TouchableOpacity>
    
    <View style={styles.space}>
    
    
      </View>
          </ScrollView>
      }
    
          <View style={styles.footer}>
        
        <MyTabs/>
       
        </View>
    
    
    
    
          </View>
    )
    
    
      }
      
    
      if(isSelect==false){
    
    
        return (
    
          <View style={styles.body}> 
          
          <ImageBackground
            style={styles.imgtop10}
            imageStyle={styles.imageStyle1}
            source={require("../srcf/Gradient_XrvkRkC.png")}
    
          >
             
             <TouchableOpacity  onPress={() =>navigation.push('Plus')}>
    
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
            source={require("../srcf/temp1.png")}
          >
           
          </ImageBackground>
    
          </TouchableOpacity>
    
    
        <TouchableOpacity onPress={green}>
    
          <ImageBackground
            style={styles.imgtop2}
            imageStyle={styles.imageStyle}
            source={require("../srcf/temp2.png")}
          >
           
          </ImageBackground>
    
          </TouchableOpacity>
    
    
        <TouchableOpacity onPress={yellow}>
    
          <ImageBackground
            style={styles.imgtop2}
            imageStyle={styles.imageStyle}
            source={require("../srcf/temp3.png")}
          >
           
          </ImageBackground>
    
          </TouchableOpacity>
    
          
        <TouchableOpacity  onPress={orange}>
    
          <ImageBackground
            style={styles.imgtop2}
            imageStyle={styles.imageStyle}
            source={require("../srcf/temp4.png")}
          >
           
          </ImageBackground>
    
          </TouchableOpacity>
    
    
        <TouchableOpacity  onPress={blue}>
    
          <ImageBackground
            style={styles.imgtop2}
            imageStyle={styles.imageStyle}
            source={require("../srcf/temp5.png")}
          >
           
          </ImageBackground>
    
          </TouchableOpacity>
    
        <View style={styles.imgtop2}>
    
    
        </View>
    
    
    
        </ScrollView>
          
        <View style={styles.footer}>
        
        <MyTabs/>
       
        </View>
          
          </View>
    
      )
    
    
      }
      
    
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


export default FreeLink;