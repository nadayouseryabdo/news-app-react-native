import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 50,textAlign:'center',marginBottom:20 }}>
          {this.state.count}
        </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "pink",
              padding: 20,
              marginHorizontal:50,
              borderRadius:50,
              marginVertical:5
            }}
            onPress={() => {
              this.setState({
                count: this.state.count + 1
              });
            }}
          >
            <Text style={{fontSize:20,fontWeight:'bold'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "pink",
              padding: 20,
              marginHorizontal: 50,
              borderRadius:50,
              marginVertical:5
            }}
            onPress={() => {
              if (this.state.count > 0) {
                this.setState({
                  count: this.state.count - 1
                });
              }
            }}
          >
            <Text style={{fontSize:20,fontWeight:'bold'}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "pink",
              padding: 20,
              marginHorizontal: 50,
              borderRadius:50,
              marginVertical:5
            }}
            onPress={() => {
              this.setState({
                count: 0
              });
            }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Reset</Text>
          </TouchableOpacity>
          </View>
    );
  }
}
