import React from 'react';
import ContinueBtn from '../Components/ContinueBtn';
import GlobalStyleSheet from '../StyleSheet/GlobalStyleSheet';
import Loader from '../Components/Loader';
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
import ApiService from '../Network/ApiService';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: false, isChecked: false, phoneNumber: null, disabled: true};
    }

    validateContinueBtn = (phoneNumber, checkBox) => {
        var isEnabled = false;
        if (phoneNumber != null) {
            isEnabled = phoneNumber.length == 10 && checkBox.isChecked
        }
        this.setState({disabled: !isEnabled})
    }

    componentDidMount() {
        console.log("ApiService =====>", ApiService);
    }

    render() {
        return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView style={{backgroundColor: 'white'}}>
                    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center',}}>
                        <View style={{backgroundColor: 'white', height: 300,}}>
                            <Text style={style.screenHeading}>Enter your{'\n'}mobile number</Text> 
                            <Text style={style.screenDesc}>We will send you one time password to {'\n'}this number</Text> 
                            <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    editable={true} 
                                    selectTextOnFocus={true}
                                    style={style.phoneInputField}
                                    defaultValue = {""}
                                    keyboardType={"number-pad"}
                                    placeholder={"99999 00000"}
                                    secureTextEntry={false}
                                    selectionColor={GlobalStyleSheet.cursorColor}
                                    onChangeText = {(newValue) => {
                                            this.setState({phoneNumber: newValue})
                                            var isEnabled = false;
                                            if (newValue != null) {
                                                isEnabled = newValue.length == 10 && this.state.isChecked
                                            }
                                            this.setState({disabled: !isEnabled})
                                        }
                                    }
                                    maxLength = {10}
                                />
                            <View style={style.agreementContainer}>
                                <TouchableOpacity style={this.state.isChecked ? style.agreementBoxCheckBoxChecked: style.agreementBoxCheckBoxUnChecked} onPress={() => {
                                    var isEnabled = false;
                                    if (this.state.phoneNumber != null) {
                                        isEnabled = this.state.phoneNumber.length == 10 && !this.state.isChecked
                                    }
                                    this.setState({isChecked: !this.state.isChecked, disabled: !isEnabled})
                                }}>
                                    {this.state.isChecked ? <Image source={require('../../assets/images/checkmark.png')} style={{width: 9, height: 6, alignSelf: 'center'}} />   :null}
                                </TouchableOpacity>
                                    <Text style={style.agreementText}>I agree to the</Text>
                                <TouchableOpacity style={{}}>
                                    <Text style={style.termsConditionsText} onPress={() => { alert('')}}>Terms & Conditions</Text>
                                </TouchableOpacity>
                            </View>      
                            <ContinueBtn buttonClick = {() => {
                                this.setState({isLoading: true});
                                ApiService.post(`send_otp?phone=${this.state.phoneNumber}`, {
                                    
                                })
                                .then((response) => {
                                    this.setState({isLoading : false});
                                    ApiService.setToken(response.data.token);
                                    this.props.navigation.navigate('OtpScreen',{data: {phoneNumber: this.state.phoneNumber, email: '', otpForEmail: false}});
                                })
                                .catch ((error)=> {
                                    this.setState({isLoading : false});
                                    alert(error.data.message)
                                })
                            }} 
                            disabled = {this.state.disabled} 
                            />
                        </View>
                    </View>
                </ScrollView>
                {this.state.isLoading ?   <Loader
                loading={this.state.loading} /> :null}
      </SafeAreaView>
    }
}

export default LoginScreen;

const style = StyleSheet.create({

    screenHeading: {
        fontSize: 24, marginHorizontal: 20, fontWeight: 'bold', marginTop: 20, fontFamily: 'Poppins-Bold', color: '#212121'
    },

    screenDesc: {
        fontSize: 14, marginTop: 10, marginHorizontal: 20, fontWeight: 'normal', fontFamily: 'Poppins-Regular', color: '#545659'
    },

    phoneInputField: {
        fontSize: 36, marginTop: 36, marginHorizontal: 20, fontWeight: 'bold', fontFamily: 'Poppins-SemiBold'
    },

    agreementContainer: {
        flexDirection: "row", alignContent: 'center', marginHorizontal: 20, marginTop: 100
    },

    agreementText: {
        fontSize: 14, color: 'gray', marginLeft: 10, fontFamily: 'Poppins-Regular'
    },

    agreementBoxCheckBoxChecked: {
        width: 20, height: 20, borderWidth: 1, borderColor: '#fff', borderRadius: 4, backgroundColor: '#8F1AD7', justifyContent: 'center',
    },

    agreementBoxCheckBoxUnChecked: {
        width: 20, height: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 4, backgroundColor: 'white', justifyContent: 'center',
    },

    termsConditionsText: {
        fontSize: 14, marginLeft: 3, color: '#0A9AD8', fontFamily: 'Poppins-Regular'
    },
});