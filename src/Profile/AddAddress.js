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

  class AddAddress extends React.PureComponent {

      constructor(props) {
          super(props);
          this.state = {saveAs:'', houseNo: '', landMark: '', mobileNo: ''}
      }

      render() {
          return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
              <ScrollView style={{flex: 1}}>
                  <Text style={styles.heading}>
                    Your New Address
                  </Text>
                  <View style={{marginLeft: 20, marginTop: 16, marginRight: 20, height: 85, backgroundColor: '#F6F8FB', borderRadius: 8, flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column', marginLeft: 13, marginTop: 13, width: '60%',}}>
                          <Text style={{fontFamily: 'Poppins', fontSize: 10, fontWeight: '600', lineHeight: 15}}>Your Location</Text>
                          <Text style={{fontFamily: 'Poppins', fontSize: 12, fontWeight: '600', lineHeight: 21}}>Cleo County</Text>
                          <Text style={{fontFamily: 'Poppins', fontSize: 12, fontWeight: '400', lineHeight: 18, color: '#7F8386'}}>Noida Extn, Sector 1, Greater Noida</Text>
                      </View>
                      <TouchableOpacity style={{marginTop: 15, marginLeft: 45}}>
                          <Text style={{fontFamily: 'Poppins', fontSize: 12, fontWeight: '600', lineHeight: 18, color: '#0A9AD8'}}>CHANGE</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.fnameContainer}>
                    <CustomTextField 
                        placeHolder={"Address save as"}
                        text={this.state.saveAs}
                        needBorder={true}
                        onTextChange={(text) => {
                            this.setState({saveAs: text});
                        }}
                    />
                  </View>

                  <View style={styles.fnameContainer}>
                    <CustomTextField 
                        placeHolder={"House/Flat Number"}
                        text={this.state.houseNo}
                        needBorder={true}
                        onTextChange={(text) => {
                            this.setState({houseNo: text});
                        }}
                    />
                  </View>

                  <View style={styles.fnameContainer}>
                    <CustomTextField 
                        placeHolder={"Landmark"}
                        text={this.state.landMark}
                        needBorder={true}
                        onTextChange={(text) => {
                            this.setState({landMark: text});
                        }}
                    />
                  </View>

                  <View style={styles.fnameContainer}>
                    <CustomTextField 
                        placeHolder={"Mobile Number"}
                        text={this.state.mobileNo}
                        needBorder={true}
                        onTextChange={(text) => {
                            this.setState({mobileNo: text});
                        }}
                    />
                  </View>

                  <ContinueBtn buttonClick = {() => {}} 
                        disabled = {false} 
                        btnWidth={328}
                        marginTop = {106}
                        buttonText={'Save Address'}
                    />

              </ScrollView>
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

  export default AddAddress;