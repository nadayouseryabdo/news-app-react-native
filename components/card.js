import react from 'react';
import { View, Text,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

export default class Card extends react.Component{
    state={data:[],success:false}
    componentDidMount(){
        fetch('https://mockend.com/HosamZewain/test/posts')
        .then((res) =>res.json())
        .then((response) => {
            this.setState({data: response,success:true});
    })}
    render(){
        return(
            <>
            {this.renderData()}
            </>
        )
    }
    renderData(){
        if(this.state.success===true){
        return(
        this.state.data.map((item)=>{
            return(
                <TouchableOpacity key={item.id} onPress={()=>this.props.navigation.navigate('Details',{image:{uri:item.image},
                    title:item.title,content:item.body})} >
                        <View style={{flexDirection:'row',
                        paddingVertical:10,
                        paddingHorizontal:5,
                        backgroundColor:'#fff',
                        borderRadius:10,
                        margin:5
                        }}>
                        <View>
                            <Image style={{width:150,height:170,marginRight:8,borderRadius:10,
                            }} source={{uri:item.image}}></Image>
                        </View>
                        <View style={{flexShrink:1,alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:20,}}>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
            )

        })
    )}else{
        return(
            <ActivityIndicator color={'blue'} size='large'></ActivityIndicator>
        )
    }
}
}