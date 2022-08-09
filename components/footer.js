import react from 'react';
import { View,Image,TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default class Footer extends react.Component{
        render(){
        return(
            <View style={{backgroundColor:'blue', paddingHorizontal:30, height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AboutPage')}>
    <Entypo name="info-with-circle" size={30} color="white" style={{width:30,height:30}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleClick2}>
            <FontAwesome name="whatsapp" size={32} color="white" style={{width:30,height:30}} />

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('News')}>
            <FontAwesome name="home" size={34} color="white" style={{width:30,height:30,marginRight:15}}  />
            </TouchableOpacity>
            </View>

        )
    }
    handleClick2 = () => {
        Linking.canOpenURL("https://wa.me/+201148521474").then(supported => {
            if (!supported) {
            console.log('Can\'t handle url: ' + 'Url');
            } else {
            return Linking.openURL('https://wa.me/+201148521474');
            }
            })}
            
}
   
