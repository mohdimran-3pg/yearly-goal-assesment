import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
const LocationHeader = () => {
    return (
        <View style={{width: '100%', flexDirection: 'column', height: 60, marginTop: 40}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{width: 16, height: 16, marginLeft: 8}}>
                    <Image style={{ width: 16, height: 16,}} source={require('../../assets/images/location-direction.png')} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 24, color: '#212121', marginLeft: 6}}>Manesar</Text>
                <TouchableOpacity style={{width: 9, height: 4.5, marginLeft: 7,}}>
                    <Image style={{ width: 9, height: 4.5,}} source={require('../../assets/images/down-arrow.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: 20, marginLeft: 8}}>
                <Text style={{ flex: 1, fontFamily: 'Poppins', fontSize: 10, fontWeight: '400', lineHeight: 15, color: '#212121' }}>Gurugram, Haryana, India</Text>
            </View>
        </View>
    );
};

export default LocationHeader;