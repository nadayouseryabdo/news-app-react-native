import react from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import Footer from './footer';
import Header from './header';

export default class Details extends react.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header navigation={this.props.navigation}  />
            <View style={{}}>
            <Text style={{textAlign:'center',marginVertical:10,fontSize:20,fontWeight:'bold'}}>{this.props.route.params.title}</Text>
                <Image style={{width:'100%',height:400}} source={this.props.route.params.image}></Image>
                <Text style={{marginHorizontal:20,marginTop:10,fontSize:18,height:130}}>{this.props.route.params.content}</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}
            style={{width:50,paddingVertical:10,marginHorizontal:170,
                backgroundColor:'blue',marginBottom:30,
                borderRadius:5,marginTop:10}} ><Text style={{color:'#fff',textAlign:'center'}}>Back</Text></TouchableOpacity>
            </View>
            <Footer navigation={this.props.navigation}  />
            </View>
        )
    }
}