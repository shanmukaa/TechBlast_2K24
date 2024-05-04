import React, { Component } from 'react'
import { Text, View,Image, ScrollView, TouchableOpacity, Clipboard } from 'react-native';
import Footer from '../Components/Footer.component';
const Volunteers = ()=>{
  const Faculty=[
    {
      'id':1,
      'name':"Gopidesi Chaitanya",
      'uri':require('../../assets/images/Volunteers/ChaitanyaAI.jpeg'),
      'Email':"chaitanyayadavgopidesi@gmail.com",
      'Phone':"9515210269"
    },
    {
      'id':2,
      'name':"G. Chaitanya",
      'uri':require('../../assets/images/Volunteers/Chaitanya.jpeg'),
      'Email':"gurazalachaitanya@gmail.com",
      'Phone':"8008720148"
    },
    {
      'id':3,
      'name':"B. Srinivasa Reddy",
      'uri':require('../../assets/images/Volunteers/Reddy.jpeg'),
      'Email':"srinivasreddy0369@@gmail.com",
      'Phone':"9346484843"
    },
    {
      'id':4,
      'name':"G. Vinay Kumar",
      'uri':require('../../assets/images/Volunteers/Vinay.jpeg'),
      'Email':"gvkumar886@gmail.com",
      'Phone':"8790504854"
    },
    {
      'id':5,
      'name':"G. Ganesh",
      'uri':require('../../assets/images/Volunteers/Ganesh.jpeg'),
      'Email':"ganeshghantasala2679@gmail.com",
      'Phone':"9989403756"
    },
    {
      'id':6,
      'name':"B. Siva Reddy",
      'uri':require('../../assets/images/Volunteers/SivaReddy.jpeg'),
      'Email':"bonamvenkatasivareddy@gmail.com",
      'Phone':"9014009230"
    },
    {
      'id':7,
      'name':"Ch. Manikanta",
      'uri':require('../../assets/images/Volunteers/Manikanta.jpeg'),
      'Email':"chirala.mani@gmail.com",
      'Phone':"7732092036"
    },
  ]

    return (
      <ScrollView>
         {Faculty.map((item) => (
          <View style={{flex:1,flexDirection:'row',gap:2,alignItems:'center', paddingTop:10,marginLeft:3,width:'100%'}}>
            <View style={{width:'40%'}}>
            <Image source={item.uri} style={{height:120,width:'100%',borderRadius:4,borderWidth:2,borderColor:'#000000',resizeMode:'stretch'}}/>
            </View>
            <View> 
            <Text style={{fontFamily:'Montserrat-Black',color:"#808080"}}>{item.name}</Text>
            <Text selectable={true} style={{fontFamily:'Montserrat-Regular',fontSize:9.3,color:"#808080"}}><Text style={{fontFamily:'Montserrat-SemiBold',fontSize:9.3,color:"#808080"}}>Email: </Text>{item.Email}</Text>
            <Text selectable={true} style={{fontFamily:'Montserrat-Regular',color:"#808080",fontSize:9.3}}><Text style={{fontFamily:'Montserrat-SemiBold',fontSize:9.3,color:"#808080"}}>Phone: </Text>{item.Phone}</Text>
            </View>
          </View>
         ))}
         <Footer/>
      </ScrollView>
    )
}

export default Volunteers;