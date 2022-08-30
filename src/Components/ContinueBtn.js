import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';

const ContinueBtn = ({buttonClick, disabled = false, btnWidth = 156, btnHeight = 52, marginTop = 25, alignSelf = '', buttonText = 'Continue', marginHorizontal = 30, applyBtnStyle = false, buttonStyle = {}}) => {
    console.log('disabled >>>>>>>> ' + disabled);
    return <TouchableOpacity style={[!disabled ? style.continueBtnEnable: style.continueBtnDisable, {width:btnWidth, height: btnHeight, alignSelf: alignSelf, marginTop: marginTop, marginHorizontal: marginHorizontal}]} onPress={ ()=> {
        buttonClick() 
    }} disabled={disabled}>
        <Text style={ applyBtnStyle ? buttonStyle :style.continueBtnText}>{buttonText}</Text>
    </TouchableOpacity>
}

export default ContinueBtn;

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