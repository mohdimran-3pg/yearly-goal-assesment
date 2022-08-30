import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image,StyleSheet } from 'react-native';
import ContinueBtn from './Components/ContinueBtn';
import LinearGradient from 'react-native-linear-gradient';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <LinearGradient style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}}
        colors={['#7166DC', '#ECECEC', '#FFFFFF']}> 
                <SafeAreaView style={{flex: 1}}>
                    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                        <View style={style.container}>
                            <Image source={require('../assets/images/hanger.png')} style={style.hanger}/>
                            <Image source={require('../assets/images/logo.png')} style={style.logo}/>
                            <Image source={require('../assets/images/washing-clothes.png')} style={style.washingClothes}/>
                            <Text style={style.tagLine}>Professional Service {'\n'} At your door step</Text>
                        </View>
                        <View style={{marginBottom: 35, marginTop: 25}}>
                                <ContinueBtn
                                    btnWidth={320}
                                    btnHeight={52}
                                    marginTop={0}
                                    disabled={false} 
                                    alignSelf={'center'}
                                    buttonText={'Get Started'}
                                    buttonClick={()=> {
                                        this.props.navigation.navigate('Login',{data: {}})
                                    }}
                                />
                            </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
    }
}

export default Welcome;

const style = StyleSheet.create({
    container: {flex: 1, alignSelf: 'center', marginTop: 0, width: 350},
    hanger: {width: 95, height: 107, alignSelf: 'center', marginTop: 50},
    logo: {width: 150, height: 26, marginTop: 15, alignSelf: 'center'},
    washingClothes: {width: 350, height: 260, marginTop: 35},
    tagLine: {fontFamily: 'Poppins-Semibold', fontSize: 24, fontWeight: '600', lineHeight: 36, textAlign: 'center', marginTop: 40}
})