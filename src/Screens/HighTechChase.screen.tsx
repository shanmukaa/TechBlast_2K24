import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../Components/Footer.component";

export default function HighTechChase() {
  return (
    <ScrollView>
      <Text style={{fontFamily:"Montserrat-Bold", color:"#000000",fontSize:25,marginTop:'10%',marginLeft:'5%'}}>High Tech Chase</Text>
      <View style={{flex:1,justifyContent:'center',alignContent:'center',marginTop:20}}>
      <Image source={require('../../assets/images/Chase.jpeg')} style={{width:undefined, height:200,resizeMode:'center',borderRadius:60}}/>
      </View>
      <Text style={{fontFamily:"Montserrat-SemiBold", color:"#000000",fontSize:20,marginTop:'10%',marginLeft:'5%'}}>Description:</Text>
      <Text numberOfLines={7} style={{fontFamily:"Montserrat-Medium", color:"#000000",fontSize:13,marginTop:'5%',marginLeft:'5%',marginBottom:'10%',textAlign:"left"}}>
      In the labyrinth of code, the tech hunt begins,
Teams decipher clues, where logic grins.
Secrets hidden 'round corners, underpins,
In the college's maze, where each quest spins,
A hunt for knowledge, where tech's tale wins.
      </Text>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'10%'}}>
      <Pressable onPress={ ()=>{ Linking.openURL('https://forms.gle/3ZfGFp7zN5yNETgY8')}} style={{ elevation: 10,backgroundColor: "#A2A0F6",borderRadius: 10,width:'50%',height:35,display:"flex",justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontFamily:"Montserrat-Black"}}>Register Now!</Text>
  </Pressable>
  </View>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
