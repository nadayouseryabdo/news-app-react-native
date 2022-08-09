import react from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends react.Component{
    render(){
        return(
            <View style={{flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'blue'
            }}>
                <Image style={{width:50,height:50,borderRadius:10,marginBottom:10
                    }} source={require('../assets/photo.png')}></Image>
                <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>NEWS APP</Text>
                {this.delayFn()}
            </View>
        )
    }
   delayFn(){
    AsyncStorage.getItem('visit').then((value)=>{
        if(value){
            setTimeout(()=>{this.props.navigation.navigate('News')},2000)
        }else{
            setTimeout(()=>{this.props.navigation.navigate('AboutPage')},2000)
        }
    })
    }
}
