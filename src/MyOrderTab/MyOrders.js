import React from "react";
import ContinueBtn from '../Components/ContinueBtn';
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
    ImageView,
    FlatList,
    SectionList,
  } from 'react-native';
  import NotificationDisplayView from '../Components/NotificationDisplayView';

  export const NeedHelpView = ({onClick}) => {
    return (<TouchableOpacity style={{flexDirection: 'row', height: 20}} onPress={() => {
      onClick()
    }}>
      <Image style={{width: 18, height: 18}} source={require('../../assets/images/message-question.png')} />
      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', lineHeight: 18, color: '#0A9AD8', marginLeft: 7}}>Need Help ?</Text>
    </TouchableOpacity>)
  }

  export const CancelOrderView = ({onClick}) => {
    return (<TouchableOpacity style={{flexDirection: 'row', height: 20}} onPress={() => {
      onClick()
    }}>
      <Image style={{width: 18, height: 18}} source={require('../../assets/images/cancel-order.png')} />
      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', lineHeight: 18, color: '#0A9AD8', marginLeft: 7}}>Cancel Order</Text>
    </TouchableOpacity>)
  }

  export const RepeatOrderView = ({onClick}) => {
    return (<TouchableOpacity style={{flexDirection: 'row', height: 20}} onPress={() => {
      onClick()
    }}>
      <Image style={{width: 17, height: 17}} source={require('../../assets/images/repeat-order-icon.png')} />
      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', lineHeight: 18, color: '#0A9AD8', marginLeft: 7}}>Repeat Order</Text>
    </TouchableOpacity>)
  }


  
  class MyOrdersScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5', opacity: 0.7}}>
          <FlatList
            data = {["1", "2", "3"]}
            style={{width: '90%', alignSelf: 'center'}}
            
            renderItem = {({item}) => {
              return (<View style={{width: '100%', height: 140, borderRadius: 10, flexDirection: 'column', backgroundColor: 'white', marginTop: 10}}>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, fontWeight: '600', lineHeight: 19, color: '#212121', marginLeft: 16, marginTop: 20}}>Dry Clean</Text>
                          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, fontWeight: '400', lineHeight: 12, textAlign: 'right', flex: 1, justifyContent: 'flex-end', flexDirection: 'row',  marginTop: 20, marginRight: 16, color: '#A5A7AB',}}>Sunday, 6 Jun 2022</Text>
                        </View>
                        <View style={{flexDirection: 'row', width: '100%', marginTop: 0}}>
                          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '400', lineHeight: 14, color: '#212121', marginLeft: 16, marginTop: 12}}>Total Clothes: 14</Text>
                          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '600', lineHeight: 17, textAlign: 'right', flex: 1, justifyContent: 'flex-end', flexDirection: 'row',  marginTop: 10, marginRight: 16, color: '#212121',}}>₹1,622.00</Text>
                        </View>
                        <View style={{ width: '90%', borderWidth: 0.5, borderColor: '#EAE7E7', borderStyle: 'dashed', alignSelf: 'center', marginTop: 17}} />
                        <View style={{flexDirection: 'row', width: '100%', marginTop: 0}}>
                          <View style={{marginLeft: 20, marginTop: 17}}>
                            <RepeatOrderView onClick = {() => {
                              this.props.navigation.navigate('OrderResultScreen',{data: {}});
                            }}/>
                          </View>
                          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 17, marginRight: 16}}>
                            <CancelOrderView onClick = {() => {
                              this.props.navigation.navigate('OrderResultScreen',{data: {}});
                            }} />
                          </View>
                        </View>
              </View>)
            }}
            
            ListHeaderComponent = { 
              <View style={{width: '100%', flexDirection: 'row', height: 60,}}>
                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 18, fontWeight: '700', lineHeight: 24, marginLeft: 0, marginTop: 18}}>My Bookings</Text>
                <NotificationDisplayView onClick = {() => {
                  console.log("------");
                }}/>
              </View>
              
            }
           />
        </SafeAreaView>)
    }
  }

  export default MyOrdersScreen;