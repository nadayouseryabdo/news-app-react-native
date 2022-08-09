import React from "react";
import {Text, View, TouchableOpacity } from "react-native";
import Counter from "../components/counter";
import Like from "../components/like";
import Footer from "./footer";
import Header from "./header";

export default class CountLikeContainer extends React.Component {
  state = {
    like: true
  };

  render() {
    return (
      <View
      style={{flex: 1}}>
        <Header />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "pink",
              paddingHorizontal: 80,
              paddingVertical:20,
              marginRight:20
             
            }}
            onPress={() => {
              this.setState({
                like: true
              });
            }} 
          >
           <Text style={{fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>like</Text>
           </TouchableOpacity>
          <TouchableOpacity
          style={{
              alignItems: "center",
              backgroundColor: "pink",
              paddingHorizontal: 80,
              paddingVertical:20,
            }}
            onPress={() => {
              this.setState({
                like: false
              });
            }}
          >
          <Text style={{fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>counter</Text>
          </TouchableOpacity>
        </View>
        <View>{this.state.like === true ? <Like /> : <Counter />}</View>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}
            style={{width:70,paddingVertical:10,marginHorizontal:160,
                backgroundColor:'blue',marginBottom:240,
                borderRadius:5,marginTop:20}} ><Text style={{color:'#fff',textAlign:'center'}}>Back</Text></TouchableOpacity>
      <Footer  navigation={this.props.navigation}  />
      </View>
    );
  }
}
