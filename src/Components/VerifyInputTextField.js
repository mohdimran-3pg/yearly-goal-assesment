import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
  } from 'react-native';

  export const VerifiedUI = () => {
      return <View style={{flexDirection: 'row', alignSelf: 'center', width: 70}}>
                <Text style={style.verifiedText}>Verified</Text>
                <Image source={require('../../assets/images/ic-kyc-badge.png')} style={{marginLeft: 5, alignSelf: 'center'}} />
            </View>;
  }

  export const NotVerifiedUI = ({onClick}) => {
      return <View style={style.emailVerifyContainer}>
        <TouchableOpacity onPress={() =>{
            onClick()
        }}>
        <Text style={style.emailVerifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
  }

  const VerifyInputTextField = ({placeHolder = "", text = "", keyboardType = "default", needBorder = false, isVerified = false, onClick}) => {
    return <View style={style.phoneNoContainer}>
    <Text style={style.phoneNoLabel}>{placeHolder}</Text>
    <View style={style.phoneNoValueContainer}>
        <View style={{width: 280}}>
        <TextInput style={isVerified ? style.phoneNoTextVerified: style.phoneNoTextNotVerified} editable={false} keyboardType={keyboardType}>{text}</TextInput>
        </View>
        {isVerified == false ? <View style={{ marginLeft: 0}}><NotVerifiedUI onClick={() => {
            onClick()
        }} /></View> : <View style={{ marginLeft: 0}}><VerifiedUI /></View>}
    </View>
    {needBorder ? <View style={{width: '100%', height: 0.5, backgroundColor: 'black', bottom: 0, opacity: 0.2}}></View>: null}
    
</View>
  }

  export default VerifyInputTextField;

  const style = StyleSheet.create({
    phoneNoContainer: {
        marginLeft: 20, marginTop: 30, marginRight: 20, backgroundColor: 'white'
    },

    phoneNoLabel: {
        fontFamily: 'Poppins-Regular', fontSize:12, lineHeight: 18, marginTop: 0, color: '#7F8386', width: '80%'
    },

    phoneNoValueContainer: {
        marginTop: 8, marginBottom: 8, width: '100%', flex: 1, flexDirection: 'row',
    },

    phoneNoTextVerified: {
        fontFamily: 'Poppins-Regular', fontSize:16, lineHeight: 18, color: '#7F8386', fontWeight: '400'
    },

    phoneNoTextNotVerified: {
        fontFamily: 'Poppins-Regular', fontSize:16, lineHeight: 18, color: '#000000', fontWeight: '600'
    },

    phoneNoVerifiedContainer: {
        width: 80, height: 18, backgroundColor: 'white', alignSelf: 'flex-end', flexDirection: 'row', alignSelf: 'center'
    },

    verifiedText: {
        fontFamily: 'Poppins-Medium', fontSize:12, lineHeight: 18, color: '#21C17A', width: '71%'
    },

    verifiedIcon: {
        width: 13, height: 13, alignSelf: 'flex-end'
    },

    emailMainContainer: {
        marginLeft: 20, marginTop: 30, marginRight: 20,
    },

    emailContainer: {
        width: '100%', flexDirection: 'row'
    },

    emailTextBoxContainer: {
        width: '80%', flexDirection: 'row'
    },

    emailVerifyContainer: {
        width: 80, height: 18, backgroundColor: 'white', alignSelf: 'flex-end', flexDirection: 'row', alignSelf: 'center'
    },

    emailVerifyText: {
        fontFamily: 'Poppins-Medium', fontSize:12, lineHeight: 18, color: '#00ACED'
    }

  })