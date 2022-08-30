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
    SectionList,
  } from 'react-native';

  class OrderResultScreen extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (<SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
            <View style={{width: '90%', alignSelf: 'center', flexDirection: 'column'}}>
                <Image style={{width: 196, height: 196, alignSelf: 'center',}} source={require('../../assets/images/order-success-icon.png')}/>
                <Text style={{textAlign: 'center', fontFamily: 'Poppins-Regular', fontSize: 24, fontWeight: '600', lineHeight: 32, color: '#212121', marginTop: 10}}>Successful</Text>
                <Text style={{textAlign: 'center', fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '400', lineHeight: 21, color: '#545659', marginTop: 10}}>Your booking has been successfully place.</Text>
                <Text style={{textAlign: 'center', fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '400', lineHeight: 21, color: '#545659', marginTop: 10}}>Within 2 working hours our staff will {'\n'} connect with you.</Text>
                <View style={{marginTop: 30, alignSelf: 'center',}}>
                    <ContinueBtn btnWidth={140} btnHeight={44} buttonText={"View Order"} buttonClick = {() => {}}/>
                </View>
                <TouchableOpacity style={{marginTop: 24, alignSelf: 'center'}}>
                <Text style={{textAlign: 'center', fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '400', lineHeight: 21, color: '#0A9AD8', marginTop: 10}}>Explore Services</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>)
    }
  }

  export default OrderResultScreen;