import React from 'react';
import GlobalStyleSheet from '../StyleSheet/GlobalStyleSheet';
import UserType from '../Components/UserType';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import CustomTextField from '../Components/CustomTextField';
import VerifyInputTextField from '../Components/VerifyInputTextField';
import AddressList from './AddressList';
import LocationNotFound from '../HomeTab/LocationNotFound';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from 'react-native';
import ContinueBtn from '../Components/ContinueBtn';

export const InputBorder = () => {
    return <View style={{width: '100%', height: 0.5, backgroundColor: 'black', bottom: 0, opacity: 0.2}}></View>
}

class UpdateProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {firstName: this.props.navigation.state.params.data.firstName, lastName: this.props.navigation.state.params.data.lastName, email: this.props.navigation.state.params.data.email, phoneNumber: this.props.navigation.state.params.data.phoneNumber, btnDisable: false};
    }

    validateForm() {
        if (this.state.firstName == '' || this.state.lastName == '' || this.state.email == '' || this.state.email == '') {
            this.setState({btnDisable: true});
        } else {
            this.setState({btnDisable: false});
        }
        console.log("btnDisable ====>", this.state.btnDisable);
    }

    render() {
        return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView style={{flex: 1}}>
                    <View style={style.avatarContainer}>
                        <Image source={require('../../assets/images/avatar.png')} style={style.avatar} />
                        <TouchableOpacity style={style.cameraContainer}>
                        <Image source={require('../../assets/images/camera-icon.png')} style={style.camera} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.fnameContainer}>
                    <CustomTextField 
                        placeHolder={"First Name"}
                        text={this.state.firstName}
                        needBorder={true}
                        onTextChange={(text) => {
                            this.setState({firstName: text});
                            this.validateForm();
                        }}
                    />
                    </View>
                    <View style={style.lnameContainer}>
                    <CustomTextField 
                        placeHolder={"Last Name"}
                        text={this.state.lastName}
                        needBorder={true}
                        onTextChange={(text) => {
                            this.setState({lastName: text})
                            this.validateForm();
                        }}
                    />
                    </View>
                    <VerifyInputTextField 
                        placeHolder={"Phone No."}
                        text={this.state.phoneNumber}
                        isVerified={true}
                        needBorder={true}
                    />
                    <VerifyInputTextField 
                        placeHolder={"Email Address"}
                        text={this.state.email}
                        isVerified={false}
                        needBorder={true}
                        onClick={()=> {
                            this.props.navigation.navigate('Otp',{data: {email: this.state.email, phoneNumber: this.state.phoneNumber, otpForEmail: true}});
                        }}
                    />
                    <ContinueBtn buttonClick = {() => {
                        this.props.navigation.navigate('HomeScreen',{data: {}});
                    }} 
                        disabled = {this.state.btnDisable} 
                        marginTop = {106}
                    />
                </ScrollView>
             </SafeAreaView>
    }

}

export default UpdateProfile;

const style = StyleSheet.create({

    avatarContainer: {
        width: 120, height: 120, borderRadius: 240, alignSelf: 'center', marginTop: 40
    },

    avatar: {
        width: '100%', height: '100%', alignSelf: 'center',
    },

    cameraContainer: {
        width: 32, height: 32, bottom: 30, right: -85, backgroundColor: '#FFFFFF', borderRadius: 64, justifyContent: 'center', borderWidth: 1, borderColor: '#E5E5E5'
    },

    camera: {
        width: 17, height: 15, alignSelf: 'center'
    },

    fnameContainer: {
        marginLeft: 20, marginTop: 30, marginRight: 20
    },

    lnameContainer: {
        marginLeft: 20, marginTop: 30, marginRight: 20
    },

    phoneNoContainer: {
        marginLeft: 20, marginTop: 30, marginRight: 20,
    },

    phoneNoLabel: {
        fontFamily: 'Poppins-Regular', fontSize:12, lineHeight: 18, marginTop: 0, color: '#7F8386', width: '80%'
    },

    phoneNoValueContainer: {
        marginTop: 4, marginBottom: 8, width: '100%', flex: 1, flexDirection: 'row', backgroundColor: 'white',
    },

    phoneNoText: {
        fontFamily: 'Poppins-Regular', fontSize:16, lineHeight: 18, color: '#7F8386', width: '71%',
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
});