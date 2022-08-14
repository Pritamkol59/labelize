import * as React from 'react';

import { Text, View,BackHandler, Alert,StyleSheet,Image ,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native';



import Userupdate from './Userupdate';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
    
import Icon from 'react-native-vector-icons/AntDesign';



 

const MyTabs = () => {
  
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
  
    const navigation = useNavigation(); 
   
    const styles = StyleSheet.create({
       
      
        
        navbar:{

            flexDirection:'row',
            backgroundColor:'#eee',
            width:'90%',
            justifyContent:'space-evenly',
            borderRadius:40,
            marginLeft:'5%',
            marginRight:'5%',
            

        },
        IconBehave:{

            padding:14

        }


      });

  return (

    

    
     
     
      
<>
       
            <View style={styles.navbar}>

<TouchableOpacity onPress={() =>navigation.push('Homepage')}><Icon name="home" size={28} color="#900" /><Text>Home</Text></TouchableOpacity>
<TouchableOpacity><Icon name="notification" size={28} color="#900" /><Text>Offer</Text></TouchableOpacity>

<TouchableOpacity><Icon name="form" size={28} color="#900" /><Text>Help</Text></TouchableOpacity>
<TouchableOpacity><Icon name="bells" size={28} color="#900" /><Text>notifi.</Text></TouchableOpacity>
<TouchableOpacity onPress={() =>navigation.push('Userupdate')}><Icon name="user" size={28} color="#900" /><Text>Users</Text></TouchableOpacity>





               

           


        </View>




      
        </>
   
  );


};

export default MyTabs;