


import React, {Component, useEffect,useState,useCallback } from 'react'
import { Text, View,Linking,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator, FlatList} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyTabs from './Bottomnav';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Pdf from 'react-native-pdf';

import * as OpenAnything from 'react-native-openanything';



  import { api } from './Constances';


export default class Freecard extends Component {
  constructor(props){
    super(props)

    this.state={

      data:[],
      Page: 1,
      
    }

  }

  componentDidMount(){

    this.finds();
  }

  Plus=()=>{

    const navigation = useNavigation(); 


    const styles = StyleSheet.create({


      pluse:{

        width: 65,
        height: 65,
  },
  
  
      plusto:{
  
        marginTop: windowHeight-240,
        marginLeft:'80%',
           position:'absolute',
  
      },


    });

    return(

      <View style={styles.plusto}>



      <TouchableOpacity onPress={() =>navigation.push('Plus')}> 
      
      <Image
          source={require('../srcf/plus.png')}
          resizeMode="contain"
          style={styles.pluse}
        ></Image>
      
      </TouchableOpacity>
      
      
      </View>
    )

  }

  
  renerItem=({item})=>{

    
   
    return(
    
      <View>
                
                <ImageBackground
              style={styles.card1}
              imageStyle={styles.card2}
              source={require("../srcf/gradient.png")}
            >
              <View style={styles.imgwithcard}>
    
    
               
              <Image
    source={{uri: item.cardsource}}
    resizeMode="cover"
    style={styles.imagex}
    ></Image>
                
                
                <Text style={styles.textcard}>Name:- {item.cname}</Text>
    
                </View>
                <Text style={styles.textcard1}>Phone No:- {item.cno}  </Text>
                
                 
                 
                 
                 
                 </ImageBackground>
    
    
                 <View style={styles.imgbutton}>
    
                 <TouchableOpacity>
    
            <ImageBackground
              style={styles.cardbutton}
              imageStyle={styles.cardbuttonStyle}
              source={require("../srcf/Gradient_XrvkRkC.png")}
            >
              <Text style={styles.buttoncardtext}>Edit</Text>
            </ImageBackground>
    
            </TouchableOpacity>

                 <TouchableOpacity  onPress={()=> this.destroy(item) } >
    
            <ImageBackground
              style={styles.cardbutton}
              imageStyle={styles.cardbuttonStyle}
              source={require("../srcf/Gradient_XrvkRkC.png")}
            >
              <Text style={styles.buttoncardtext}>Delete</Text>
            </ImageBackground>
    
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=> this.Fetchs(item) }>
            <ImageBackground
              style={styles.cardbutton}
              imageStyle={styles.cardbuttonStyle}
              source={require("../srcf/redg.png")}
            >
              <Text style={styles.buttoncardtext}>Print</Text>
            </ImageBackground>
    
            </TouchableOpacity>
    
    
                 
    
                 </View>

                
               
              </View>
    )
    
    }

    Fetchs= async(item) =>{


      //console.log(item.cno);

      
      const numbed= await AsyncStorage.getItem('number');
    
      try{
    
        const tok = await AsyncStorage.getItem('token');
        
                
                 
        const suparfresh= JSON.parse(tok); 
    
        const freshtoken= "Bearer "+suparfresh;
     const tou= await  fetch(api+"genfreesinglecard",{ 
        method:"POST",
           headers:new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': freshtoken
          }),
          body:JSON.stringify({
            "num":numbed,
            "cno":item.cno

            
            
            
    
          })
        
        });
           const Url= await tou.json();

           console.log(Url);

           

           if(Url.success===true){

           /* Linking.canOpenURL(Url.data).then(supported => {
              if (supported) {
                Linking.openURL(Url.data);
              } else {
                console.log("Don't know how to open URI: " + Url.data);
              }
            });*/

            OpenAnything.Pdf(Url.data);

        }



      }


           catch(e){
    
            console.log(e);
            }

            
          
          }


    destroy= async(item) =>{


      //console.log(item.cno);

      
      
      const numbed= await AsyncStorage.getItem('number');
    
      try{
    
        const tok = await AsyncStorage.getItem('token');
        
                
                 
        const suparfresh= JSON.parse(tok); 
    
        const freshtoken= "Bearer "+suparfresh;
     const tou= await  fetch(api+"singlecarddelet",{ 
        method:"POST",
           headers:new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': freshtoken
          }),
          body:JSON.stringify({
            "num":numbed,
            "cno":item.cno

            
            
            
    
          })
        
        });
           const Url= await tou.json();

           console.log(Url);

           if(Url.success===true){

            this.setState({data:[],Page:this.state.Page-1}, this.componentDidMount)

           }



      }


           catch(e){
    
            console.log(e);
            }

            
          
          }


     finds = async() =>{

      const numbed= await AsyncStorage.getItem('number');
    
      try{
    
        const tok = await AsyncStorage.getItem('token');
        
                
                
        const suparfresh= JSON.parse(tok);
    
        const freshtoken= "Bearer "+suparfresh;
     const postUserData= await  fetch(api+"savefcard?page="+this.state.Page,{ 
        method:"POST",
           headers:new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': freshtoken
          }),
          body:JSON.stringify({
            "num":numbed,
            
            
    
          })
        
        });
           const myData= await postUserData.json();
    
           //console.log(myData);
    
           
           
    
           if(myData.success===true){
    
            
            console.log(myData.data.data);
           // setSS(myData.data.data);

           this.setState({
             data:this.state.data.concat(myData.data.data) 
           });
    
            
    
    
    
           }
    
    
    
    
      }
      catch(e){
    
      console.log(e);
      }
    
    }

    HandelLoadMore=()=>{

      this.setState({Page:this.state.Page+1}, this.finds)


    }


    rendFooter=()=>{

      return(

        <View style={styles.loader}> 

        <ActivityIndicator size={"large"}/>


        </View>
      )


    }


  

render(){
  
   return(

    <View style={styles.body}>

    <View style={styles.upermenu}>

      <TouchableOpacity>

    <ImageBackground
      style={styles.imgtop1}
      imageStyle={styles.imageStyle}
      source={require("../srcf/Gradient_XrvkRkC.png")}
    >
      <Text style={styles.textmenuupper}>Single Card</Text>
    </ImageBackground>

    </TouchableOpacity>

      <TouchableOpacity>

    <ImageBackground
      style={styles.imgtop1}
      imageStyle={styles.imageStyle}
      source={require("../srcf/Gradient_XrvkRkC.png")}
    >
      <Text style={styles.textmenuupper}>Group Card</Text>
    </ImageBackground>

    </TouchableOpacity>



      <TouchableOpacity>

    <ImageBackground
      style={styles.imgtop1}
      imageStyle={styles.imageStyle}
      source={require("../srcf/Gradient_XrvkRkC.png")}
    >
      <Text style={styles.textmenuupper}>Save Link</Text>
    </ImageBackground>

    </TouchableOpacity>

</View>
 

    <FlatList

    style={styles.fatlist}

    data={this.state.data}

    renderItem={this.renerItem}

    keyExtractor={(item,index)=> index.toString()}

    onEndReached= {this.HandelLoadMore}

    

    




    />

<View style={styles.invisblecard}>



</View>
 

<this.Plus/>


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
    height:windowHeight,

  },

  loader:{

    marginTop:10,
    alignItems:'center'

  },

  upermenu:{

    marginTop:-1,
    flexDirection: "row",

  },

  imgtop1:{


    width: (windowWidth/3),
height: 50,
borderWidth: 1,
borderColor: "#000000"

    
  },

  cardbutton:{

    
   
    
    width: (windowWidth/3),
height: 50,
borderWidth: 1,
borderColor: "#000000",
borderRadius: 10,
overflow: "hidden"

    
  },

  cardbuttonStyle:{

    width: (windowWidth/3),
height: 50,

  },

  invisblecard:{
    marginTop:10,
    height:100,
  },

  card1:{

    marginTop:15,
    width: windowWidth,
height: 150,
borderWidth: 1,
borderColor: "#000000",
borderRadius: 10,
overflow: "hidden"

    
  },

  imageStyle:{

    width: (windowWidth/3)-1,
height: 50,

  },

 

  card2:{

    width: windowWidth,
height: 150,

  },


 
  textmenuupper:{

    color: "rgba(255,255,255,1)",
    marginTop: 12,
    marginLeft: '20%',
    marginRight:'20%',
    alignItems:'center',

  },

  cardstart:{

    marginTop:65,

  },
  cardend:{

    marginTop:20,
    height:80,

  },
  textcard:{

    color:'white',
    fontSize:20,
    marginLeft:'5%',
    fontWeight: "bold",
    
  },

  textcard1:{

    color:'white',
    fontSize:15,
    marginTop:'15%',

    marginLeft:'25%',
    position:'absolute',
    
  },
  

  imgwithcard:{

    flexDirection:'row',
    marginTop:'5%',
    marginLeft:'5%',
    marginRight:'5%'

  },
  imgbutton:{

    flexDirection:'row',
    marginTop:0,
    

  },

  imagex:{

    marginTop:'5%',
    width: 55,
  height: 55,
  borderRadius: 100,
  borderWidth: 1,
  borderColor: "#000000",

  },

  buttoncardtext:{

    marginTop:'5%',
    marginLeft:'30%',
    marginRight:'30%',
    fontSize:18,
    color:'white',
  },

  fatlist:{


    marginTop:20,

  },


    footer:{

 
        // backgroundColor: "rgba(231,231,231,1)",
         alignItems:"center",
        
         marginTop: windowHeight-70,
         

        

        position:'absolute',

        

   },

});
