import React from 'react'
import { Image, View } from 'react-native'

const Header = () => {
  return (
    <View style={{flex:1, flexDirection:'row',alignItems:'center'}}> 
    <View>
    <Image source={require('../../assets/images/Nec.png')} style={{height:40,resizeMode:'center',width:40}}/>
    </View>
    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingEnd:'10%'}}>
        <Image source={require('../../assets/images/Profile.jpg')} style={{height:30,borderRadius:50,resizeMode:'center',width:30}} />
    </View>
    </View>
       
  )
}

export default Header