import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
  } from 'react-native';

const UserType = ({buttonClick, alignSelf = 'flex-start', marginLeft = 0, title, desc, isChecked = false}) => {
    let marginTop = isChecked ? -15: 20;
    let borderColor = isChecked ? '#0A9AD8': '#D5D6D8';
    return <TouchableOpacity style={[{width: 150, height: 165, borderRadius: 10, borderWidth: 1, borderColor:borderColor, backgroundColor:'white', alignSelf: alignSelf, marginLeft: marginLeft, flexDirection: 'column',}]} onPress={ ()=> {
        buttonClick()
        
    }} disabled={false}>
        {isChecked ? <View style={{width: 24, height: 24, borderRadius: 44, backgroundColor: '#0A9AD8', alignSelf: 'flex-end', marginTop: 10, marginRight: 10, justifyContent: 'center'}}>
        <Image source={require('../../assets/images/checkmark.png')} style={{width: 9, height: 6, alignSelf: 'center'}} />
        </View>: null}
        
        <View style={{width: 40, height: 40, borderRadius: 10, borderColor:'#C4C4C4', backgroundColor:'#C4C4C4', marginTop: marginTop, marginLeft: 15,}}></View>
        <Text style={{fontFamily:'Poppins-Bold', fontWeight: '700', fontSize: 15, marginTop: 20, marginLeft: 15}}>{title}</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontWeight: '400', fontSize: 12, marginTop: 5, marginLeft: 15, color: '#545659'}}>{desc}</Text>
    </TouchableOpacity>
}

export default UserType;

const style = StyleSheet.create({
    continueBtnEnable: {
        width: 156, height: 52, backgroundColor: '#0A9AD8', marginHorizontal: 30, marginTop: 10, borderRadius: 12, justifyContent: 'center',opacity: 1.0,
    },

    continueBtnDisable: {
        width: 156, height: 52, backgroundColor: '#0A9AD8', marginHorizontal: 30, marginTop: 10, borderRadius: 12, justifyContent: 'center',opacity: .25,
    },

    continueBtnText: {
        fontSize: 16, color: 'white', textAlign: 'center', fontFamily: "Poppins-Bold",
    }
});