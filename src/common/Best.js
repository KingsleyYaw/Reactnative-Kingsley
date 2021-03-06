import React from 'react';
import { Text, ImageBackground} from 'react-native';

export default class Best extends React.Component{
    render(){
        return(
           <ImageBackground
           source={require('../images/s7.jpg')}
           style={{
               height:130,
               width:230,
               marginRight:20,
               borderRadius:10,
               marginBottom:40,
               opacity:0.7,
               backgroundColor:"#000",
               marginLeft:3,
               padding:12,
               marginTop:20
           }}
           >
               <Text style={{
                   fontFamily:"Bold",
                   color:"#000066",
                   fontSize:15
               }}>Shorts you would love</Text>
               <Text style={{
                   fontFamily:"Bold",
                   color:"#000",
                   fontSize:12
               }}>Get 50% OFF</Text>
           </ImageBackground>
        )
    }
}