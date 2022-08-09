import react from 'react';
import { ScrollView } from 'react-native';
import Card from './card';
import Header from './header';
import Footer from './footer';

export default class Home extends react.Component{
    render(){
        return(
          <>
          <Header navigation={this.props.navigation} />
            <ScrollView style={{flex:1,
                margin:10,
                padding:5,
                backgroundColor:'#bbb'
            }}>
                <Card navigation={this.props.navigation} />
            </ScrollView>
            <Footer navigation={this.props.navigation} />
            </> 
        )
    }
}
