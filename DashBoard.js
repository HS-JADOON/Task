import React from 'react'
//import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Button, Text} from 'react-native';
//import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const DashBoard = ({navigation}) => {

         return(

           <View style={{flex:1 , justifyContent:'center', alignItems:'center', backgroundColor:'#add8e6'}}>
            <Text> WELLCOME TO THE DashBoard</Text>



            <Button onPress={ () => navigation.navigate('Home')} title='Logout'></Button>

            </View>


       );
    

}



export default DashBoard