import React from "react";
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
    FlatList,
  } from 'react-native';

  export const PickUpDateView = () => {
    return (<View style={{width: '100%', height: 150, shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.1, shadowRadius: 3, backgroundColor: '#FFFF', borderColor: '#04060F', borderRadius: 10, flexDirection: 'column'}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', fontSize: 16, lineHeight: 19, marginLeft: 16, marginTop: 20}}>Pickup Date</Text>
        <FlatList 
        horizontal = {true} 
        style={{marginLeft: 16, marginTop: 16}}
        data = {["1", "2", "3", "4", "5"]} renderItem = {({}) => {
            return (<TouchableOpacity style={{width: 54, height: 72, borderRadius: 10, backgroundColor: '#F2F5FA', marginLeft: 10, justifyContent: 'center',}}>
                <View style={{width: '90%', height: '90%', alignSelf: 'center', alignSelf: 'center', flexDirection: 'column'}}>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '500', lineHeight: 15, color: '#545659', textAlign: 'center', marginTop: 12}}>Mon</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 22, fontWeight: '600', color: '#212121', textAlign: 'center', marginTop: 5, lineHeight: 26}}>12</Text>
                </View>
            </TouchableOpacity>)
        }} />
    </View>);
  }

  export const PickUpTimeView = () => {
    return (<View style={{width: '100%', height: 195, shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.1, shadowRadius: 3, backgroundColor: '#FFFF', borderColor: '#04060F', borderRadius: 10, flexDirection: 'column', marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', fontSize: 16, lineHeight: 19, marginLeft: 16, marginTop: 20}}>Pickup Time</Text>
        <FlatList 
        horizontal = {true} 
        style={{marginLeft: 16, marginTop: 16}}
        data = {["1", "2", "3"]} renderItem = {({}) => {
            return (<TouchableOpacity style={{width: 90, height: 118, borderRadius: 10, backgroundColor: '#F2F5FA', marginLeft: 10, justifyContent: 'center',}}>
                <View style={{width: '90%', height: '90%', alignSelf: 'center', alignSelf: 'center', flexDirection: 'column'}}>
                    <Image style={{width: 35, height: 35, alignSelf: 'center', marginTop: 13}} source={require('../../assets/images/morning-time.png')}/>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '600', color: '#212121', textAlign: 'center', marginTop: 12, lineHeight: 16}}>12</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', color: '#545659', textAlign: 'center', marginTop: 12, lineHeight: 14}}>4 - 8 PM</Text>
                </View>
            </TouchableOpacity>)
        }} />
    </View>)
  }

  export const SelectAddressView = () => {
    return (<View style={{width: '100%', shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.1, shadowRadius: 3, backgroundColor: '#FFFF', borderColor: '#04060F', borderRadius: 10, flexDirection: 'column', marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', fontSize: 16, lineHeight: 19, marginLeft: 16, marginTop: 20}}>Select Address</Text>
        <FlatList
            style={{width: '90%', alignSelf: 'center', marginTop: 0}} 
            data={["1", "2", "1", "2", "1", "2", "1", "2"]}
            renderItem={({item}) => {
                return (<TouchableOpacity style={{borderColor: '#EAEEF1', borderWidth: 1, borderRadius: 12, height: 90, marginTop: 10, flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', marginLeft: 10}}>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', color: '#212121', marginTop: 12, lineHeight: 18}}>My Home</Text>
                            <View style={{width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#A5A7AB', position: 'absolute', marginLeft: 270, marginTop: 10, justifyContent: 'center'}}>
                                <View style={{width: 10, height: 10, backgroundColor: '#0A9AD8', alignSelf: 'center', borderRadius: 5}}></View>
                            </View>
                        </View>
                        <View style={{margin: 10}}>
                        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '400', color: '#545659', lineHeight: 19}}>A-90, First Floor, Sector 18, Noida, Near Noida Authority, Uttar Pradesh - 201301</Text>
                        </View>

                </TouchableOpacity>)
            }}
         />
         <AddSingleAddressView />
    </View>)
  }

  export const AddSingleAddressView = () => {
    return (<TouchableOpacity style={{borderColor: '#EAEEF1', borderWidth: 1, borderRadius: 12, height: 90, marginTop: 10, alignSelf: 'center', width: '90%', height: 50, marginBottom: 10, flexDirection: 'row',}}>
    <View style={{justifyContent: 'center', marginLeft: 15}}><Text style={{color: '#0A9AD8', fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', lineHeight: 18}}>+ {'  '} Add New</Text></View>
 </TouchableOpacity>);
  }

  class PickupDetailScreen extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (<SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5', opacity: 0.7, justifyContent: 'center', flexDirection: 'column'}}>
            <FlatList
                style={{width: '90%', marginTop: 30, alignSelf: 'center'}} 
                data = {["1", "2", "3"]} renderItem={({item}) => {
                    if (item == "1") {
                        return (<PickUpDateView />);
                    } else if (item == "2") {
                        return (<PickUpTimeView />);
                    } else {
                        return (<SelectAddressView />)
                    }
            }} />
            <View style={{flex: 1, backgroundColor: 'white', position: 'absolute', bottom: 0, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderColor: '#F5F5F5', borderWidth: 1, width: '100%', justifyContent: 'center', height: 100, shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,}}>
                            <View style={{height: "100%", width: '100%', borderRadius: 10, alignSelf: 'center', borderWidth: 1, borderColor: '#F5F5F5', flexDirection: 'row'}} onPress={() => {
                                this.props.navigation.navigate('PickupDetailScreen',{data: {}});
                            }}>
                                <View style={{width: 200, marginLeft: 20, flexDirection: 'column', alignSelf: 'center', height: 60, marginTop: 32}}>
                                        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#212121', fontSize: 16, lineHeight: 18}}>₹1,245</Text>
                                        <TouchableOpacity>
                                            <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#0A9AD8', fontSize: 10}}>View Details</Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                    <View style={{alignSelf: 'center'}}>
                                        <ContinueBtn btnWidth={180} btnHeight={58} marginHorizontal={-50} marginTop={0} buttonClick={() => {
                                            this.props.navigation.navigate('CheckoutDetailScreen', {data: {}});
                                        }}  />
                                    </View>
                            </View>
                        </View>
        </SafeAreaView>);
    }
  }

  export default PickupDetailScreen;