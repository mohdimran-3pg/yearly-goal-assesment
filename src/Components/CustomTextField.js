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

  const CustomTextField = ({placeHolder = "", text = "", keyboardType = "default", needBorder = false, onTextChange}) => {
    return <View style={styles.mainContainer}>
            {text != "" ?<Text style={styles.placeHolderContainer}>{placeHolder}</Text>: null}
            <TextInput style={styles.inputContainer} 
                autoCapitalize="none"
                autoCorrect={false}
                editable={true} 
                selectTextOnFocus={true}
                defaultValue = {""}
                keyboardType={keyboardType}
                placeholder={placeHolder}
                onChangeText={(text) => { 
                    console.log("first name is ::::: ", text, this)
                    onTextChange(text)
                }}
                value={text}
            />
            {needBorder ? <View style={{width: '100%', height: 0.5, backgroundColor: 'black', bottom: 0, opacity: 0.2}}></View>: null}
            
    </View>
  }

  export default CustomTextField;

  const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        width: "100%",
        height: 55
    },
    placeHolderContainer: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: "#7F8386",
    },
    placeHolderContainerHide: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: "#7F8386",
        display: "none",
    },
    inputContainer: {
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 30,
        color: "#000000",
        marginTop: 5,
        alignSelf: 'flex-start',
        bottom: 5
    }

  })