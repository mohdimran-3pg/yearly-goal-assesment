import React from 'react';
import GlobalStyleSheet from '../StyleSheet/GlobalStyleSheet';
import UserType from '../Components/UserType';
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

class SelectUserType extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isIndividuaChecked: false, isCorporateChecked: false};
    }

    render() {
        return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontFamily: 'Poppins-SemiBold', fontWeight: '600', fontSize: 24, color: '#231F20', marginLeft: 20, marginTop: 28}}>Register for</Text>
                        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '400', fontSize: 14, color: '#7F8386', marginLeft: 20, marginTop: 5}}>Select what kind of services you need</Text>
                    </View>
                    <View style={{marginLeft: 0, marginTop: 60, height: 165, flexDirection: 'row', width: 320, alignSelf: 'center'}}>
                       <UserType
                        buttonClick = {() => {
                           this.setState({isIndividuaChecked: true, isCorporateChecked: false});
                        }}
                        title={'Individual'}
                        desc={'Male, Female, Kids & Others'}
                        isChecked={this.state.isIndividuaChecked}
                        />
                       <UserType 
                        buttonClick = {() => {
                            this.setState({isIndividuaChecked: false, isCorporateChecked: true});     
                        }}
                        marginLeft={20} 
                        title={'Corporate'}
                        desc={'Hotel, Hospital, Spa & Saloon'}
                        isChecked={this.state.isCorporateChecked}
                       />
                    </View>
                    <ContinueBtn buttonClick = {() => {
                        
                        this.props.navigation.navigate('EnterProfileInfo',{data: {phoneNumber: this.props.navigation.state.params.data.phoneNumber}})
                            }} 
                            disabled = {false} 
                            marginTop = {96}
                            />
                    
                </ScrollView>
             </SafeAreaView>
    }

}

export default SelectUserType;