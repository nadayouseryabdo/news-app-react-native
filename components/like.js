import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default class Like extends React.Component {
  state = {
    color: "gray",
    text: "press Like"
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          if (this.state.color === "gray") {
            this.setState({
              color: "blue",
              text: "UnLike"
            });
          } else {
            this.setState({
              color: "gray",
              text: "Like"
            });
          }
        }}
      >
        <Text
          style={{
            fontSize: 50,
            textAlign:'center',
            marginTop:140,
            marginBottom:100,
            color: this.state.color === "gray" ? "#aaa" : "#0000f1",
          }}
        >
          {this.state.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
