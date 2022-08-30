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

  const DATA = [
    {
      title: "Mens",
      data: ["Shirt ", "T-shirt"]
    },
    {
      title: "Womens",
      data: ["T-shirt ", "Saree"]
    },
    {
      title: "Children",
      data: ["T-shirt ", "Saree"]
    },
  ];

  const Item = ({ title }) => (
    <View style={{marginTop: 15, flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
      <Text style={{fontFamily: "Poppins-Regular", fontWeight: "400", fontSize: 12, lineHeight: 18, marginLeft: 16, color: "#212121"}}>{title}</Text>
      <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
        <View style={{ backgroundColor: 'white', height: 28, width: 72, borderRadius: 8, shadowOffset: {width: -2, height: 2},
                        shadowOpacity: 0.1, shadowRadius: 3, flexDirection: 'row'}}>
                            
                            <TouchableOpacity style={{justifyContent: 'center'}}>
                                <Text style={{alignSelf: 'center', color: '#0A9AD8', justifyContent: 'center', marginLeft: 10}}>-</Text>
                            </TouchableOpacity>
                            <Text style={{alignSelf: 'center', color: '#0A9AD8', justifyContent: 'center', fontFamily: 'Poppins-Regular', fontWeight: '600', fontSize: 12, lineHeight: 18, color: '#212121', marginLeft: 12, marginRight: 12}}>4</Text>
                            <TouchableOpacity style={{justifyContent: 'center'}}>
                                <Text style={{alignSelf: 'center', color: '#0A9AD8', justifyContent: 'center'}}>+</Text>
                            </TouchableOpacity>
            
        </View>
        <Text style={{fontFamily: "Poppins-Regular", fontWeight: "600", fontSize: 12, lineHeight: 15, marginLeft: 16, color: "#212121", alignSelf: 'center', marginRight: 16}}>₹120</Text>
      </View>
      
    </View>
  );

  export const BillDetailRowInfo = ({title, amount, titleTextColor = "#212121", amountTextColor = "#545659", titleFontWeight = "400", titleLineHeight = 14.4, titleFontSize = 12, marginTop = 10}) => {
    return (<View style={{marginLeft: 10, flexDirection: 'row', marginTop: marginTop, marginRight: 10}}>
    <Text style={{fontFamily: 'Poppins-Regular', fontSize: titleFontSize, fontWeight: titleFontWeight, color: titleTextColor, lineHeight: titleLineHeight}}>{title}</Text>
    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '600', color: amountTextColor, lineHeight: 17, textAlign: 'right', flex:1}}>{amount}</Text>
</View>)
  }

  export const TaxAndChargesRowInfo = () => {
    return (<View style={{marginLeft: 10, flexDirection: 'row', marginTop: 10, marginRight: 10}}>
    <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '400', color: "#545659", lineHeight: 14.4, textDecorationLine: 'underline'}}>Taxes & Charges</Text>
        <TouchableOpacity style={{width: 14, height: 14}}>
            <Image  style={{width: 14, height: 14, marginLeft: 5}} source={require('../../assets/images/info-icon.png')}/>
        </TouchableOpacity>
    </View>
    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '400', color: "#545659", lineHeight: 14.4, textAlign: 'right', flex:1}}>₹345.50</Text>
</View>)
  }

  class CheckoutDetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5', opacity: 0.7, justifyContent: 'center', flexDirection: 'column'}}>
            <FlatList 
                style={{width: '90%', alignSelf: 'center',}}
                data={["1", "2", "3"]} 
                renderItem = {({item}) => {

                    if (item == "1") {
                        return (<View style={{width: '100%', height: 130, backgroundColor: 'white', shadowOffset: {width: -2, height: 2},
                    shadowOpacity: 0.1, shadowRadius: 3, backgroundColor: '#FFFF', borderRadius: 10, marginTop: 20, flexDirection: 'column',}}>
                        <View style={{flexDirection: 'row', marginLeft: 10}}>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, fontWeight: '600', color: '#212121', marginTop: 12, lineHeight: 19.2}}>Pickup Details</Text>
                            <TouchableOpacity style={{ position: 'absolute', marginLeft: 270, marginTop: 10, justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', color: '#0A9AD8', lineHeight: 14}}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{margin: 10, flexDirection: 'column'}}>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '600', color: '#545659', lineHeight: 18}}>Sunday 10 Jun 2022, 10-12 pM</Text>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '400', color: '#545659', lineHeight: 19}}>11/410, 2nd Floor, Lalita Park, Laxm Nagar New Delhi - 110092</Text>
                        </View>

                    </View>)
                    } else if (item == "2") {
                        return (<View style={{width: "100%", shadowOffset: {width: -2, height: 2},
                        shadowOpacity: 0.1, shadowRadius: 3, backgroundColor: '#FFFF', borderRadius: 10, marginTop: 20, flexDirection: 'column',}}>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, fontWeight: '600', color: '#212121', marginTop: 12, lineHeight: 19.2, marginLeft: 10}}>Item Details</Text>
                            <SectionList
                                sections={DATA}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item }) => <Item title={item} />}
                                renderSectionHeader={({ section: { title } }) => (
                                    <Text style={{fontFamily: "Poppins-Regular", fontWeight: "600", fontSize: 12, lineHeight: 18, marginLeft: 16, marginTop: 16}}>{title}</Text>
                                )}
                            />
                        </View>)
                    } else {
                        return (<View style={{width: '100%', height: 200, backgroundColor: 'white', shadowOffset: {width: -2, height: 2},
                    shadowOpacity: 0.1, shadowRadius: 3, backgroundColor: '#FFFF', borderRadius: 10, marginTop: 20, flexDirection: 'column',}}>
                        <View style={{flexDirection: 'row', marginLeft: 10}}>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, fontWeight: '600', color: '#212121', marginTop: 12, lineHeight: 19.2}}>Bill Details</Text>
                        </View>
                        <BillDetailRowInfo
                            title={"Item Total"}
                            amount={"₹1,325.00"}
                            amountTextColor={"#212121"}
                         />
                         <TaxAndChargesRowInfo />
                         <BillDetailRowInfo
                            title={"First Order Discount"}
                            amount={"-₹50"}
                            amountTextColor={"#55B074"}
                         />
                         <View style={{ width: '90%', borderWidth: 0.5, borderColor: '#EAE7E7', borderStyle: 'dashed', alignSelf: 'center', marginTop: 20}} />

                         <BillDetailRowInfo
                            title={"Total to Pay"}
                            amount={"₹1,622.00"}
                            titleTextColor={"#212121"}
                            titleFontSize = {14}
                            titleFontWeight = {"600"}
                            titleLineHeight = {16.8}
                            amountTextColor = {"#212121"}
                            marginTop = {20}
                         /> 
                    </View>)
                    }

                    
                }}
                
            />
            <View style={{flex: 1, backgroundColor: 'white', position: 'absolute', bottom: 0, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderColor: '#F5F5F5', borderWidth: 1, width: '100%', justifyContent: 'center', height: 100, shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,}}>
                            <View style={{height: "100%", width: '100%', borderRadius: 10, alignSelf: 'center', borderWidth: 1, borderColor: '#F5F5F5', flexDirection: 'row'}} onPress={() => {
                                this.props.navigation.navigate('PickupDetailScreen',{data: {}});
                            }}>
                                <View style={{width: 200, marginLeft: 20, flexDirection: 'column', alignSelf: 'center', height: 60, marginTop: 32}}>
                                        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#212121', fontSize: 16, lineHeight: 18}}>₹1,245</Text>
                                        <TouchableOpacity>
                                            <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#0A9AD8', fontSize: 10}}>View Details</Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                    <View style={{alignSelf: 'center'}}>
                                        <ContinueBtn btnWidth={180} btnHeight={58} marginHorizontal={-50} marginTop={0} buttonText = {"Place Order"} buttonClick={() => {
                                            this.props.navigation.navigate('MyOrdersScreen', {data: {}});
                                        }}  />
                                    </View>
                            </View>
                        </View>
        </SafeAreaView>);
    }
  }

  export default CheckoutDetailScreen;