import {Image, Pressable, ScrollView, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Footer from '../Components/Footer.component';

function HomeScreen({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center',marginTop:"15%"}}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: '#535A70',
          }}>
          Narasaraopeta Engineering College
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: '#535A70',
          }}>
          Welcomes You to
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: '#535A70',
            textDecorationLine: 'underline',
          }}>
          Byte Blast
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          marginTop: '4%',
        }}>
          <Pressable onPress={()=>{navigation.push('PixelPerfect')}} style={{ width:"43%"}}>
        <View style={{width: '100%', height: 130}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 18,
              color: '#535A70',
              textAlign: 'center',
            }}>
            Pixel Perfect
          </Text>
          <Image
            style={{flex: 1, width: '100%', height: '100%',borderRadius:8}}
            source={require('../../assets/images/Pixelperfect.jpg')}
          />
        </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.push('CodeConflux')}} style={{width:"43%"}}>
        <View style={{width: '100%', height: 130}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 18,
              color: '#535A70',
              textAlign: 'center',
            }}>
            Code Conflux
          </Text>
          <Image
            style={{flex: 1, width: '100%', height: '100%',borderRadius:8}}
            source={require('../../assets/images/Code.jpeg')}
          />
        </View>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          marginTop: '4%',
        }}>
          <Pressable onPress={()=>{navigation.push('SlideView')}} style={{width:"43%"}}>
        <View style={{width: '100%', height: 130,}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 14,
              color: '#535A70',
              textAlign: 'center',
            }}>
            Technical Slide View
          </Text>
          <Image
            style={{flex: 1, width: '100%', height: '100%',borderRadius:8}}
            source={require('../../assets/images/SlideView.jpg')}
          />
        </View>
        </Pressable>


        <Pressable onPress={()=>{navigation.push('HighTechChase')}} style={{width:"43%"}}>
        <View style={{width: '100%', height: 130}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 14,
              color: '#535A70',
              textAlign: 'center',
            }}>
            High Tech Chase
          </Text>
          <Image
            style={{flex: 1, width: '100%', height: '100%',borderRadius:8}}
            source={require('../../assets/images/Chase.jpeg')}
          />
        </View>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          marginTop: '4%',
        }}>
          <Pressable onPress={()=>{navigation.push('Project')}} style={{width:"43%"}}>
        <View style={{width: '100%', height: 130,}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 14,
              color: '#535A70',
              textAlign: 'center',
            }}>
            Project Expo
          </Text>
          <Image
            style={{flex: 1, width: '100%', height: '100%',borderRadius:8}}
            source={require('../../assets/images/Project.jpg')}
          />
        </View>
        </Pressable>


        <Pressable onPress={()=>{navigation.push('Volunteers')}} style={{width:"43%"}}>
        <View style={{width: '100%', height: 130}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 14,
              color: '#535A70',
              textAlign: 'center',
            }}>
            Volunteers
          </Text>
          <Image
            style={{flex: 1, width: '100%', height: '100%',borderRadius:8}}
            source={require('../../assets/images/Volunteers.png')}
          />
        </View>
        </Pressable>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default HomeScreen;
