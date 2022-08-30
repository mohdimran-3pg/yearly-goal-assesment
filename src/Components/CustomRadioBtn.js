import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export const CustomRadioBtn = ({isEnable = false}) => {
    return <View style={{width: 18, height: 18, borderRadius: 10, borderWidth: 1, borderColor: isEnable ? '#0A9AD8' :'#A5A7AB', marginLeft: 16, justifyContent: 'center'}}>
                {isEnable ?
                <View style={{width: 10, height: 10, backgroundColor: '#0A9AD8', alignSelf: 'center', borderRadius: 5}}></View>
                : null
                }   
            </View>
};