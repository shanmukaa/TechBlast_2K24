import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../Components/Footer.component";

export default function PixelPerfect() {
  return (
    <ScrollView>
      <Text style={{fontFamily:"Montserrat-Bold", color:"#000000",fontSize:25,marginTop:'10%',marginLeft:'5%'}}>PixelPerfect</Text>
      <View style={{flex:1,justifyContent:'center',alignContent:'center',marginTop:20}}>
      <Image source={require('../../assets/images/Pixelperfect.jpg')} style={{width:undefined, height:200,resizeMode:'center',borderRadius:60}}/>
      </View>
      <Text style={{fontFamily:"Montserrat-SemiBold", color:"#000000",fontSize:20,marginTop:'10%',marginLeft:'5%'}}>Description:</Text>
      <Text numberOfLines={7} style={{fontFamily:"Montserrat-Medium", color:"#000000",fontSize:13,marginTop:'5%',marginLeft:'5%',marginBottom:'10%',textAlign:"left"}}>
      Step into the azure expanse, where HTML waves crash,
   Beneath the canopy of CSS, where ideas flash,
   Traverse the emerald fields of JavaScript's might,
   Amidst the technicolor symphony, where dreams take flight,
   Where the colors of creation blend, in the web dev's twilight
      </Text>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'10%'}}>
      <Pressable onPress={ ()=>{ Linking.openURL('https://forms.gle/WatWcvTrpBuGThaM6')}} style={{ elevation: 10,backgroundColor: "#A2A0F6",borderRadius: 10,width:'50%',height:35,display:"flex",justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontFamily:"Montserrat-Black"}}>Register Now!</Text>
  </Pressable>
  </View>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
