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









function FreeManually (){
  const navigation = useNavigation(); 

  const [isSelect, setIsSelect] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [SelectCard, setIsSelectCard] = useState('');
  const [cardsource, setIscardsource] = useState('');
  const [cname, setcname] = useState('');
    
    const [cphn, setcphn] = useState('');

    const [cadd, setcadd] = useState('');


  

  
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


    if(cname!=='' && cphn!=='' && cadd!==''){


      

      const numbed= await AsyncStorage.getItem('number');


      console.log(cname);
      console.log(cphn);
      console.log(cadd);
      console.log(numbed);
      console.log(SelectCard);
    
      //setIsLoad(true);
    
          try{
            const tok = await AsyncStorage.getItem('token');
    
            
            
            const suparfresh= JSON.parse(tok);
    
            const freshtoken= "Bearer "+suparfresh;
         const postUserData= await  fetch(api+"infcard",{ 
            method:"POST",
               headers:new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': freshtoken
              }),
              body:JSON.stringify({
                "num":numbed,
                "cname":cname,
                "cphn":cphn,
                "cadd":cadd,
                "cardsource":cardsource,
                "card":SelectCard,
                

              })
            
            });
               const myData= await postUserData.json();
              
              
              console.log(myData);
    
              
               
              if(myData.success===true){
                

                alert("Data save SuccessFully");
              
                
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

      alert("all fields are required");
    }


  }


  const styles = StyleSheet.create({

      body:{

          backgroundColor:"#313131",
      width:windowWidth,
      height:windowHeight,

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


            imgtopc:{

              marginTop:55,
              
              height: windowHeight-300,
              
              width:windowWidth,
              borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    overflow: "hidden"


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
              backgroundColor:'#fcfc',
              

            },

            textare:{

              marginTop: 20,
              marginLeft: 18,
              marginRight:18,
              //backgroundColor:'#6C63FF',
              backgroundColor:'#fcfc',

              height:windowHeight-510
            },


            loader:{

              minHeight:"100%",
              backgroundColor:'transparent',
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
         
             }

           




  });


  if(isLoad){
    return(

      <View style={styles.loader}>


<ActivityIndicator size="large" color="#6C63FF"/>
      </View>


    );

  }


  if(isSelect==true){

    return (
      <View style={styles.body}> 
      

      <KeyboardAvoidingView behavior='position'>
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

        

        <Text style={styles.textmenuupper}> Save Manually</Text>

       

        






      </ImageBackground>

      <ScrollView>

      
      

      <ImageBackground
        style={styles.imgtopc}
        imageStyle={styles.imageStyle1}
        source={require("../srcf/Gradient_XrvkRkC.png")}

      >
         
         

         <TextInput
            label="Customer Name"
            placeholder=''
            
            mode='outlined'
            style={styles.placeholder}
           
            onChangeText={setcname}

        value={cname}
           
            theme={{ roundness: 35,  colors:{text:'black',primary:"white"}}} 
            

        ></TextInput>


         <TextInput
            label="Customer Phone"
            placeholder=''
            
            mode='outlined'
            style={styles.placeholder}

            keyboardType="numeric"
            maxLength={10}
           
            onChangeText={setcphn}

        value={cphn}
           
            theme={{ roundness: 35,  colors:{text:'black',primary:"white"}}} 
            

        ></TextInput>


         <TextInput
            label="Customer's Address"
            placeholder=''
            multiline
            
            mode='outlined'
            style={styles.textare}
           
            onChangeText={setcadd}

            maxLength={200}

        value={cadd}
           
            theme={{ roundness: 35,  colors:{text:'black',primary:"white"}}} 
            

        ></TextInput>





      </ImageBackground>


      
      

      <TouchableOpacity  onPress={saves}>

<Image
source={require('../srcf/tick.png')}
resizeMode="cover"
style={styles.tick}
></Image>

</TouchableOpacity>


      </ScrollView>
      </KeyboardAvoidingView>

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

export default FreeManually;