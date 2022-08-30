import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';


const NotificationDisplayView = ({onClick}) => {
    return (<View style={{justifyContent: 'center', flex: 1, justifyContent: 'flex-end', flexDirection: 'row', marginTop: 10,}}>
    <View style={{width: 35, height: 35, borderRadius: 12, flexDirection: 'row', shadowOffset: {width: -2, height: 2},
          shadowOpacity: 0.1, shadowRadius: 3, backgroundColor: '#FFFFFF', justifyContent: 'center'}}>
        <TouchableOpacity onPress={ () => { onClick() }} style={{marginTop: 5, alignSelf: 'center', justifyContent: 'center'}}>
            <Image style={{width: 19, height: 18}} source={require('../../assets/images/notification-icon.png')} />
        </TouchableOpacity>
    </View>
    <View style={{width: 10, height: 10, borderRadius: 8, position: 'absolute', backgroundColor: 'red', marginLeft: 25}}></View>
  </View>)
}

export default NotificationDisplayView;