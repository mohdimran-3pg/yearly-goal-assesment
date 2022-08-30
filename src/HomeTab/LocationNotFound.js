import React from 'react';
import ContinueBtn from '../Components/ContinueBtn';
import GlobalStyleSheet from '../StyleSheet/GlobalStyleSheet';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageView,
  } from 'react-native';

  class LocationNotFound extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
        return <SafeAreaView style={{flex: 1}}>
                    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View style={{position: 'absolute',width: 508, height: 658,left: -77,top: 191
}}></View>
                            <Image style={{width: 400, height: 850, alignSelf: 'center', top: 100}} source={require('../../assets/images/location-not-found-bg.png')} />
                            <View style={{width: 160, height: 121, top: 35, position: 'absolute',  alignSelf: 'flex-end'}}>
                                <Image style={{width: 104, height: 121, top: 0, marginRight: 150}} source={require('../../assets/images/parachute.png')} />
                            </View>
                            <View style={{width: 260, height: 207, position:'absolute', top: 250}}>
                                <Image style={{width: 258, height: 205}} source={require('../../assets/images/buildings.png')} />
                            </View>
                            <View style={{width: 260, height: 207, top: -350, position: 'relative', flexDirection: 'column', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, fontWeight: '600', alignSelf: 'center'}}>We’re not here yet!</Text>
                                <Text style={{fontFamily: 'Poppins', fontSize: 12, lineHeight: 18, fontWeight: '400', alignSelf: 'center', color: '#545659', textAlign: 'center'}}>We don’t provide service in your area, {'\n'} please try for different location</Text>
                                <ContinueBtn buttonClick = {() => {
                                    this.props.navigation.navigate('HomeScreen',{data: {}});
                                }} 
                                    buttonText = {'Change Location'}
                                    disabled = {false} 
                                    alignSelf = {'center'}
                                    btnWidth = {151}
                                    btnHeight = {38}
                                    applyBtnStyle = {true}
                                    buttonStyle = {{fontFamily: 'Poppins', fontSize: 12, fontWeight: '600', lineHeight: 18, color: 'white', textAlign: 'center'}}
                                />
                            </View>
                        </View>
                        
                    </ScrollView>
               </SafeAreaView>
      }
  }

  export default LocationNotFound;