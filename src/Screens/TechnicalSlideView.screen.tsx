import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../Components/Footer.component";

export default function SlideView() {
  return (
    <ScrollView>
      <Text style={{fontFamily:"Montserrat-Bold", color:"#000000",fontSize:25,marginTop:'10%',marginLeft:'5%'}}>Technical Slide View</Text>
      <View style={{flex:1,justifyContent:'center',alignContent:'center',marginTop:20}}>
      <Image source={require('../../assets/images/SlideView.jpg')} style={{width:undefined, height:200,resizeMode:'center',borderRadius:60}}/>
      </View>
      <Text style={{fontFamily:"Montserrat-SemiBold", color:"#000000",fontSize:20,marginTop:'10%',marginLeft:'5%'}}>Description:</Text>
      <Text numberOfLines={7} style={{fontFamily:"Montserrat-Medium", color:"#000000",fontSize:13,marginTop:'5%',marginLeft:'5%',marginBottom:'10%',textAlign:"left"}}>
      In the realm of screens, we gather, a gleaming scene,
Prezi whirls and Emaze's sheen,
Slides unfurl, tales yet unseen,
Haiku Deck, Sway intervene,
A mosaic of visions, vibrant and serene, come, participate, and glean.
      </Text>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'10%'}}>
      <Pressable onPress={ ()=>{ Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSd2SSZY2_AAc8ljS1FIEqnhmxYDieDAf-I7hr7UMQiax_smiA/viewform')}} style={{ elevation: 10,backgroundColor: "#A2A0F6",borderRadius: 10,width:'50%',height:35,display:"flex",justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontFamily:"Montserrat-Black"}}>Register Now!</Text>
  </Pressable>
  </View>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
