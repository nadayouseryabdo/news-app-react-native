import react from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class Header extends react.Component{
    render(){
        return(
            <View style={{backgroundColor:'blue', marginTop:50,paddingHorizontal:30, height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <FontAwesome name="home" size={34} color="white" style={{width:30,height:30,marginRight:15}}  />
                <Text style={{fontWeight:'bold',fontSize:16,color:'white'}}>News App</Text></View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('conunter')}>
                <AntDesign name="heart" size={30} color="white" style={{width:30,height:30}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleClick}>
                <AntDesign name="google" size={30} color="white" style={{width:30,height:30}} />
                </TouchableOpacity>
            </View>

        )
    }
    handleClick = () => {
Linking.canOpenURL("https://google.com").then(supported => {
    if (!supported) {
    console.log('Can\'t handle url: ' + Url);
    } else {
    return Linking.openURL("https://google.com");
    }
    })}
   
}
   
