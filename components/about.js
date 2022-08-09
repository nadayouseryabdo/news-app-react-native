import react from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './header';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class About extends react.Component{
    componentDidMount(){
        AsyncStorage.setItem('visit','true')
        // AsyncStorage.clear()
    }
    render(){
        return(
           <>
            <Header navigation={this.props.navigation}  />
            <View style={{flex:1,alignItems:'center',padding:20}}>
            <Text style={{fontSize:20,fontWeight:'bold',marginBottom:20}}>About The App Content</Text>
            <Text style={{marginBottom:20}}>About The App Content this app ia about news About The App Content this app ia about news About The App Content this app ia about news About The App Content this app ia about news About The App Content this app ia about news About The App Content this app ia about news</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('News')}
            style={{padding:10,
                backgroundColor:'blue',
                borderRadius:5,marginTop:10}} ><Text style={{color:'#fff'}}>Back</Text></TouchableOpacity>
            </View>
            </> 
        )
    }
}