import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const SkipNowButton = ({ buttonClick , title = 'Skip for now'}) => {
    return (
        <View style={{}}>
            <TouchableOpacity style={style.skipNowButton}>
                <Text style={style.skipNowButtonText} onPress={() => { buttonClick()}}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({

    skipNowButton: {
        marginTop: 10, alignItems: "flex-end", marginRight: 10,
    },

    skipNowButtonText: {
        fontSize: 14, color: '#0A9AD8', fontFamily: 'Poppins-Regular'
    },
});

export default SkipNowButton;