import React from 'react';
import GlobalStyleSheet from '../StyleSheet/GlobalStyleSheet';
import UserType from '../Components/UserType';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import CustomTextField from '../Components/CustomTextField';
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
import Loader from '../Components/Loader';
import ApiService from '../Network/ApiService';

class EnterProfileInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: false, firstName: '', lastName: '', email: '', phoneNumber: this.props.route.params.data.phoneNumber, btnDisable: true, cust_id: this.props.route.params.data.cust_id};
    }

    validateForm() {
        if (this.state.firstName == '' || this.state.lastName == '' || this.state.email == '') {
            this.setState({btnDisable: true});
        } else {
            this.setState({btnDisable: false});
        }
        console.log("btnDisable ====>", this.state.btnDisable);
    }

    render() {
        return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1,}}>
                    <Text style={{fontFamily: 'Poppins-SemiBold', fontWeight: '600', fontSize: 24, color: '#231F20', marginLeft: 20, marginTop: 28}}>Great!!! <Image source={require('../../assets/images/smiley.png')} width={36} height={36} /></Text>
                        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '400', fontSize: 14, color: '#7F8386', marginLeft: 20, marginTop: 5}}>We will need more details to set up {'\n'}your account</Text>
                    </View>
                    <View style={{marginLeft: 20, marginTop: 30, marginRight: 20}}>
                    <CustomTextField 
                        placeHolder={"First Name"}
                        text={this.state.firstName}
                        onTextChange={(text) => {
                            this.setState({firstName: text});
                            this.validateForm();
                        }}
                    />
                    </View>
                    <View style={{marginLeft: 20, marginTop: 30, marginRight: 20}}>
                    <CustomTextField 
                        placeHolder={"Last Name"}
                        text={this.state.lastName}
                        onTextChange={(text) => {
                            this.setState({lastName: text})
                            this.validateForm();
                        }}
                    />
                    </View>
                    <View style={{marginLeft: 20, marginTop: 30}}>
                     <CustomTextField 
                        placeHolder={"Enter Email Address"}
                        text={this.state.email}
                        keyboardType={"email-address"}
                        onTextChange={(text) => {
                            this.setState({email: text});
                            this.validateForm();
                        }}
                    />
                    </View>
                    <ContinueBtn buttonClick = {() => {

                        this.setState({isLoading : true});
                        ApiService.put(`/user/${this.state.cust_id}`, {
                            first_name: this.state.firstName,
                            last_name: this.state.lastName,
                            email: this.state.email,
                        })
                        .then((response) => {
                            this.setState({isLoading : false});
                            this.props.navigation.navigate('EnterProfileInfo',{data: {phoneNumber: otpSentTo}});
                        })
                        .catch ((error)=> {
                            this.setState({isLoading : false});
                            alert(error.data.message)
                        })
                        
                        //this.props.navigation.navigate('UpdateProfileInfo',{data: {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phoneNumber: this.state.phoneNumber}});
                            }} 
                            disabled = {this.state.btnDisable} 
                            marginTop = {106}
                            />
                </ScrollView>
                {this.state.isLoading ?   <Loader
                loading={this.state.loading} /> :null}
             </SafeAreaView>
    }

}

export default EnterProfileInfo;