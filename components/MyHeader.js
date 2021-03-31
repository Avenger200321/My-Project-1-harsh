import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Header, Icon} from 'react-native-elements'
import { BorderlessButton } from 'react-native-gesture-handler';

class MyHeader extends Component {
  constructor(props){
      super(props);
      this.state={

      }
  }
  render(){
    return(
        <Header
        leftComponent={<Icon 
        name = 'bars'
        type = 'font-awesome'
        onPress={()=>{
           this.props.navigation.navigate('Drawer')
        }}
        />}
        centerComponent={{text:this.props.title, style :{color:'red', fontSize:20, fontWeight:'bold'}}}
        />
    )
  }
  
}

export default MyHeader;
