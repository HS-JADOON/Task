import React from 'react'
//import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Button, Text} from 'react-native';
//import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const Home = ({navigation}) => {

         return(

           <View style={{flex:1 , justifyContent:'center', alignItems:'center', backgroundColor:'#add8e6'}}>
            <Text>  Task Home screen</Text>

            <Button onPress={ () => navigation.navigate('Login')} title='Login'></Button>

            <Button onPress={ () => navigation.navigate('SignUp')} title='SignUp'></Button>


            </View>


       );
    

}



export default Home