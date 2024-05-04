import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

export default function Footer():JSX.Element {
  return (
    <ScrollView>
    <View style={styles.container}>
            <Image style={styles.image}
            source={require('../../assets/images/Nec.png')}/>

            <View>
            <Text style={styles.heading}>
             Crafted With Love by
            </Text>
            <Text numberOfLines={3} style={styles.text2}>
                Narasaraopeta Engineering College❤️
        </Text>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
    },
    heading:{
        fontSize:14,
        color:'#000000',
        marginTop:'4%',
        marginStart:'2%',
        fontFamily:"Montserrat-Bold",
    },
    text2:{
        fontSize:12,
        color:'#686868',
        marginTop:'1%',
        marginStart:'2%',
        fontFamily:"Montserrat-SemiBold",
    },
    image:{
        width:"30%",
        height: 50,
        marginTop:"2%",
        resizeMode: 'contain',
    },
});
