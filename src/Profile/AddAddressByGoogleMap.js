import React from 'react';
import CustomTextField from '../Components/CustomTextField';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList
  } from 'react-native';
  import ContinueBtn from '../Components/ContinueBtn';

  class AddAddressByGoogleMap extends React.PureComponent {

      constructor(props) {
          super(props);
          this.state = {saveAs:'', houseNo: '', landMark: '', mobileNo: ''}
      }

      render() {
          return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
               
                   <View style={{width: '100%', height: '70%', backgroundColor: 'blue', marginTop: 0}}>
                   
                    </View> 
                   <View style={{width: '100%', height: '40%', backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, marginTop: -25}}>
                        <Text style={styles.heading}>
                        Your Location
                        </Text>
                        <View style={{marginTop: 15, marginLeft: 15, marginRight: 15, borderRadius: 6, borderWidth: 1, borderColor: '#C4C4C4', height: 55, flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',}}>
                            <Image style={{width: 18, height: 18, marginLeft: 10, resizeMode : 'stretch',
    alignItems: 'center'}} source={require('../../assets/images/search-icon.png')}  />
                            <TextInput style={{marginLeft: 10, marginRight: 10, fontFamily: 'Poppins', fontWeight: '400', fontSize: 16, lineHeight: 24, color: '#212121',flex:1}} placeholder="H Block, Sector 71, Cleo County" />
                        </View>
                        <Text style={{marginLeft: 20, marginTop: 15, fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, lineHeight: 18, color: '#545659',}}>Cleo County, Noida 201301</Text>
                        <ContinueBtn buttonClick = {() => {}} 
                        disabled = {false} 
                        btnWidth={328}
                        marginTop = {20}
                        buttonText={'Confirm Location & Proceed'}
                    />
                    </View> 


                  

              
          </SafeAreaView>
      }
  }

  const styles = StyleSheet.create({
      heading: {
          fontFamily: 'Poppins',
          fontSize: 18,
          lineHeight: 27,
          fontWeight: '700',
          marginTop: 25,
          marginLeft: 20,
      },
      fnameContainer: {
        marginLeft: 20, marginTop: 30, marginRight: 20
    },
  })

  export default AddAddressByGoogleMap;