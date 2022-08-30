import React from 'react';
import GlobalStyleSheet from '../StyleSheet/GlobalStyleSheet';
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
import SkipNowButton from '../Components/SkipNowButton';
import Loader from '../Components/Loader';
import ApiService from '../Network/ApiService';

class OtpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: false, disableContinueBtn: false, wrongOtp: false, resendOtp: false, otp: '', timeLeftStr: '', totalOtpValidTime: 15};
        console.log(' this.state ' +  this.state.disable );
    }

    fancyTimeFormat(duration) {   
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600);
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        if (mins < 10) {
            mins = "0"+mins;
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    startTime() {
        console.log("this.state.totalOtpValidTime ===== " + this.state.totalOtpValidTime);
        var timeleft = this.state.totalOtpValidTime;
        this.interval = setInterval(() => {
            if(this.state.totalOtpValidTime <= 0) {
                clearInterval(this.interval);
                this.setState({totalOtpValidTime: 15});
                this.setState({disableContinueBtn: false, resendOtp: true});
            } else {
                this.setState({timeLeftStr: this.fancyTimeFormat(timeleft)});
            }
            timeleft -= 1;
            this.setState({totalOtpValidTime: timeleft})
            
        }, 1000);
    }

    componentDidMount(){

        this.startTime()
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        console.log("this.props >>>>>>>>>>", JSON.stringify(this.props));
        var otpSentTo = this.props.route.params.data.otpForEmail == false ? this.props.route.params.data.phoneNumber: this.props.route.params.data.email
        return <SafeAreaView style={{flex: 1}}>
                    <ScrollView style={{backgroundColor: 'white'}}>
                    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center',}}>
                        <View style={{backgroundColor: 'white', height: 300,}}>
                            <Text style={style.screenHeading}>Enter the 6-digit OTP</Text> 
                            <View style={style.screenDescContainer}>
                                <Text style={style.screenDesc}>OTP has been sent to {otpSentTo}</Text> 
                                <TouchableOpacity onPress = {() => {
                                    this.props.navigation.pop();
                                }}>
                                <Text style={style.changeNo}>Change</Text>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    editable={true} 
                                    selectTextOnFocus={true}
                                    style={style.phoneInputField}
                                    defaultValue = {""}
                                    keyboardType={"number-pad"}
                                    placeholder={"OTP"}
                                    secureTextEntry={false}
                                    selectionColor={GlobalStyleSheet.cursorColor}
                                    maxLength={6}
                                    onChangeText = {(newValue) => {
                                        var isEnable = false;
                                        if(newValue != null) {
                                            isEnable = (newValue.length == 6)
                                        }
                                        this.setState({disableContinueBtn: !isEnable, otp: newValue});
                                    }
                                }
                                value = {this.state.otp}
                                />
                            {this.state.wrongOtp ? <View style={style.errorContainer}>
                                <Image source={require('../../assets/images/error.png')} style={style.errorIcon} />
                                <Text style={style.errorText}>Entered OTP is expired, Please try again</Text>
                            </View> : null}     
                               
                            <View style={style.agreementContainer}>
                                {!this.state.resendOtp ? <Text style={style.agreementText}>Resend OTP in {this.state.timeLeftStr}</Text> : <SkipNowButton title="Resend OTP" buttonClick = {() => {
                                    this.setState({resendOtp: false});
                                    this.setState({totalOtpValidTime: 15});
                                    this.setState({buttonText: 'Continue'});
                                    this.setState({disableContinueBtn: !this.state.disableContinueBtn});
                                    this.startTime();
                                }} />}
                                
                            </View>
                            <ContinueBtn buttonClick = {() => {
                                this.setState({isLoading : true});
                                ApiService.post(`verify_otp?otp=${this.state.otp}`, {
                                    
                                })
                                .then((response) => {
                                    this.setState({isLoading : false});
                                    this.props.navigation.navigate('EnterProfileInfo',{data: {phoneNumber: otpSentTo, cust_id: response.data.cust_id}});
                                })
                                .catch ((error)=> {
                                    this.setState({isLoading : false});
                                    alert(error.data.message)
                                })
                                //this.props.navigation.navigate('SelectUserType',{data: {phoneNumber: this.props.navigation.state.params.data.phoneNumber}})
                            }} 
                                disable={false}
                                marginHorizontal = {20}
                                buttonText={'Confirm'}
                            />  
                            
                        </View>
                    </View>
                    </ScrollView>
                    {this.state.isLoading ?   <Loader
                loading={this.state.loading} /> :null}
               </SafeAreaView>
    }
  }

  export default OtpScreen;

  const style = StyleSheet.create({

    errorContainer: {
        height: 20, marginTop: 16, marginHorizontal: 20, backgroundColor: 'white', width: 400, flexDirection: 'row'
    },
    
    errorIcon: {width: 16, height: 16},

    errorText: {fontFamily: 'Poppins-SemiBold', fontWeight: '600', fontSize: 12, color: '#FF5F49', marginLeft: 10},

    screenHeading: {
        fontSize: 24, marginHorizontal: 20, fontWeight: 'bold', marginTop: 30, fontFamily: 'Poppins-Bold', color: '#212121'
    },

    screenDescContainer: {
        flexDirection: 'row', width: 500, marginHorizontal: 20, marginTop: 10
    },

    screenDesc: {
        fontSize: 14, marginTop: 0, marginHorizontal: 0, fontWeight: 'normal', fontFamily: 'Poppins-Regular', color: '#545659', lineHeight: 23, marginRight: 0,
    },

    changeNo: {
        fontSize: 12, marginTop: 0, marginHorizontal: 0, fontWeight: 'normal', fontFamily: 'Poppins-SemiBold', color: '#0A9AD8', marginLeft: 5, lineHeight: 18
    },

    phoneInputField: {
        fontSize: 36, marginTop: 63, marginHorizontal: 20, fontWeight: 'bold', fontFamily: 'Poppins-SemiBold'
    },

    agreementContainer: {
        flexDirection: "row", alignContent: 'center', marginHorizontal: 20, marginTop: 90
    },

    agreementText: {
        fontSize: 14, color: '#212121', marginLeft: 0, fontFamily: 'Poppins-Regular'
    },

    agreementBoxCheckBox: {
        width: 15, height: 15, borderWidth: 1, borderColor: 'gray', borderRadius: 4,
    },

    termsConditionsText: {
        fontSize: 12, color: 'gray', marginLeft: 3, color: 'blue'
    },
});