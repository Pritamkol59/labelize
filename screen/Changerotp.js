import React, { useEffect,useState } from 'react'
import { Text, View ,ActivityIndicator,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Homepage from './Homepage';
import Login from './Login';
 function Changerotp () {
 
  const navigation = useNavigation(); 

  //const [isloging,setLogin]= useState(false);

  const [keys, setKeys] = useState(null);

  const [isLoad, setIsLoad] = useState(false);


 /* useEffect(()=>{
 const token = AsyncStorage.getItem('token');
 if(token){

  setLogin(true);
  console.log(token);

 }

 else{

  setLogin(false);

 }
  },[]);*/

 /* const getData = async (key) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };*/

  

  useEffect(()=>{
    setIsLoad(true);
    AsyncStorage.getItem('token')
    .then(setKeys).then(setIsLoad(false))
    .catch(e => {})
   
   
  
    
    },[]);

    const styles = StyleSheet.create({

      loader:{

        minHeight:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
   
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

    if(keys!== null){

      return (
        <View>
          <Homepage/>
        </View>
      )
    
    }
    
    else{
    
      
    
        return (
          <View>
            <Login/>
          </View>
        )
      
      
      
    
    }

  }




    
  
}

export default Changerotp
