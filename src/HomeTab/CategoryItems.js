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
  } from 'react-native';
import { CustomRadioBtn } from '../Components/CustomRadioBtn';

export const FilterView = () => {
    return (<View style={{width: '100%', height: 50,}}>
        <FlatList data={["1", "2", "3", "4"]} horizontal={true} renderItem  = { ({item}) => {
            return (<TouchableOpacity style={{width: 90, height: 40, borderRadius: 8, borderWidth: 0, justifyContent: 'center', backgroundColor: '#F2F5FA', marginLeft: 10}}>
                 <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '500', fontSize: 14, lineHeight: 21, textAlign: 'center', color: '#545659',}}>Women</Text>
            </TouchableOpacity>)
        
    } }
    />
    </View>);
}  

export const RafooInfoView = ({title, isEnable = false, callBack}) => {
    return <View style={{flexDirection: 'column', width: '100%', height: 20, justifyContent: 'center', marginTop: 10}}>
               <TouchableOpacity style={{flexDirection: 'row', height: '100%',}} onPress={() => {
                callBack()
               }}>
                    <CustomRadioBtn isEnable={isEnable} />
                    <Text style={{flex: 1, textAlign: 'left', marginLeft: 10, fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '400', color: '#545659'}}>{title}</Text>
               </TouchableOpacity>
    </View>
};

class CategoryItemsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {categoryItems: [
            {"isFilter": true, "item": null},
            {"isFilter": false, "item": 
                                        {"item_info": {"id": 1, "title": "T-Shirt", "rafoo_avl": true, "rafoo_added": false, "isExpand": false, "rafoo_type": null}}},
            {"isFilter": false, "item": 
                                        {"item_info": {"id": 2, "title": "Shirt", "rafoo_avl": false, "rafoo_added": false, "isExpand": false, "rafoo_type": null,}}},
            {"isFilter": false, "item": 
                                        {"item_info": {"id": 4, "title": "Jeans", "rafoo_avl": true, "rafoo_added": false, "isExpand": false, "rafoo_type": null,}}},
            {"isFilter": false,"item": 
                                        {"item_info": {"id": 14, "title": "Trosusers", "rafoo_avl": true, "rafoo_added": true, "isExpand": false, "rafoo_type": null,}}},
            {"isFilter": false,"item": 
                                        {"item_info": {"id": 5, "title": "Men's Leather Jackets", "rafoo_avl": true, "rafoo_added": false, "isExpand": false, "rafoo_type": null,}}},
            {"isFilter": false,"item": 
                                        {"item_info": {"id": 6, "title": "Undergarments", "rafoo_avl": false, "rafoo_added": false, "isExpand": false, "rafoo_type": null,}}},],
                                    cartItems: [],};
    }

    render() {
        var isCollapse = false;
        return (<SafeAreaView style={{flex: 1, backgroundColor: '#fff', opacity: 0.7}}>
                    <View style={{flex: 1, backgroundColor: '#fff'}}>
                        <FlatList style={{width: '100%', alignSelf: 'center', marginBottom: 10, marginTop: 15}}

                            data={this.state.categoryItems}

                            renderItem = { ({item, index}) => {
                                if (item.isFilter) {
                                    return <FilterView />
                                } else {
                                    var objectIndex = this.state.cartItems.findIndex(function(product){
                                        return item.item.item_info.id == product.id
                                    });
                                    var qtyInCart = 0
                                    if (objectIndex >= 0) {
                                        qtyInCart = this.state.cartItems[objectIndex].quantity;
                                    }
                                    var rafoo_type = this.state.categoryItems[index].item.item_info.rafoo_type;
                                    return (<View style={{ width: "90%", height: item.item.item_info.rafoo_avl == false ? 70: item.item.item_info.isExpand ? 175: 115, borderRadius: 10, borderWidth: 1, marginTop: 10, shadowOffset: {width: -2, height: 2},
                                        shadowOpacity: 0.1,
                                        shadowRadius: 5, borderColor: '#FFFF', backgroundColor: '#FFFF', flexDirection: 'column', alignSelf: 'center', shadowColor: '#04060F'}}>
                                             <View style={{flexDirection: 'row',}}>
                                                <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 15, width: '60%',}}>
                                                    <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#212121', fontSize: 14, lineHeight: 17}}>{item.item.item_info.title}</Text>
                                                    <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '400', color: '#0A9AD8', fontSize: 12, lineHeight: 15}}>₹160.00</Text>
                                                </View>
                                                <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row', height: 36, marginTop: 10, marginRight: 20}}>
                                                    <TouchableOpacity style={{width: 36, height: 36, borderRadius: 18, backgroundColor: '#F2F5FA', alignSelf: 'center', justifyContent: 'center'}} onPress={()=> {
                                                        
                                                        var cartItems = this.state.cartItems;
                                                        var cartItem = {};
                                                        var objectIndex = cartItems.findIndex(function(product) {
                                                            return product.id == item.item.item_info.id;
                                                        });
                                                        
                                                        if (objectIndex >= 0) {
                                                            cartItem = cartItems[objectIndex];
                                                            cartItems.splice(objectIndex, 1);
                                                            cartItem.quantity -= 1;
                                                            if (cartItem.quantity > 0) {
                                                                cartItem.item_id = cartItem.id;
                                                                if (cartItem.additional_services != null) {
                                                                    cartItem.additional_services.quantity = cartItem.quantity;
                                                                }
                                                                cartItems.push(cartItem);
                                                            }
                                                            this.setState({cartItems: cartItems});
                                                        }
                                                        
                                                    }}
                                                    disabled={qtyInCart <= 0}
                                                    >
                                                        <Text style={{alignSelf: 'center', color: '#0A9AD8', justifyContent: 'center'}}>-</Text>
                                                    </TouchableOpacity>
                                                    <Text style={{marginLeft: 10, marginRight: 10, alignSelf: 'center'}}>{qtyInCart}</Text>
                                                    <TouchableOpacity style={{width: 36, height: 36, borderRadius: 18, backgroundColor: '#F2F5FA', justifyContent: 'center'}} onPress={()=> {
                                                        
                                                        var cartItems = this.state.cartItems;
                                                        var cartItem = {};
                                                        var isExists = this.state.cartItems.filter(function(product) {
                                                            return product.id == item.item.item_info.id
                                                        })

                                                        var objectIndex = cartItems.findIndex(function(product) {
                                                            return product.id == item.item.item_info.id;
                                                        })
                                                        
                                                        if (objectIndex >= 0) {
                                                            cartItem = cartItems[objectIndex];
                                                            cartItems.splice(objectIndex, 1);
                                                            cartItem.quantity += 1;
                                                            cartItem.item_id = cartItem.id;
                                                        } else {
                                                            cartItem = item.item.item_info;
                                                            cartItem.quantity = 1;
                                                            cartItem.item_id = cartItem.id;
                                                            objectIndex = 0;
                                                            
                                                        }
                                                        cartItems.push(cartItem);
                                                        if (cartItem.additional_services != null) {
                                                            cartItem.additional_services.quantity = cartItem.quantity;
                                                        }
                                                        console.log(">>>>>",JSON.stringify(cartItems));
                                                        this.setState({cartItems: cartItems});
                                                    }}>
                                                    <Text style={{alignSelf: 'center', color: '#0A9AD8', justifyContent: 'center'}}>+</Text>
                                                    </TouchableOpacity>
                                                </View>
                                             </View>
                                             { item.item.item_info.rafoo_avl == true ?
                                             <View style={{height: item.item.item_info.isExpand ? 105: 45, marginLeft: -2, backgroundColor: '#EDEDED', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, width: '101%', marginTop: 25, alignSelf: 'center', flexDirection: 'column',}}>
                                                <View>
                                                    <TouchableOpacity style={{width: '100%', flexDirection: 'column',}} onPress={() => {
                                                        var updatedArray = [];
                                                        var cnt = 0;
                                                        for(cnt = 0; cnt < this.state.categoryItems.length; cnt++) {
                                                            var categoryItem = this.state.categoryItems[cnt];
                                                            if (cnt == index) {
                                                                var item_info = categoryItem.item.item_info;
                                                                item_info.isExpand = !item_info.isExpand;
                                                                categoryItem.item.item_info = item_info;
                                                            }
                                                            updatedArray.push(categoryItem);
                                                        }
                                                        this.setState({categoryItems: updatedArray});   
                                                    }}>
                                                        <View style={{width: '100%', flexDirection: 'row',}}>
                                                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, fontWeight: '400', lineHeight: 18, marginLeft: 16, marginTop: 16}}>Addition Services Raffoo Work</Text>
                                                            <View style={{flex: 1,}}>
                                                                <Image style={{width: 9, height: 4.5, position: 'absolute', right: 16, top: 20}}  source={ this.state.categoryItems[index].item.item_info.isExpand ? require('../../assets/images/up-arrow.png'): require('../../assets/images/down-arrow.png')}/>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                { item.item.item_info.isExpand == true ?
                                                    <View style={{flexDirection: 'column', hidden: true,}}>
                                                        <RafooInfoView title={"Hand work ₹100 per item"} isEnable={rafoo_type == 100} callBack = {() => {
                                                              
                                                            var updatedArray = [];
                                                            var cnt = 0;
                                                            for(cnt = 0; cnt < this.state.categoryItems.length; cnt++) {
                                                                var categoryItem = this.state.categoryItems[cnt];
                                                                if (cnt == index) {
                                                                    var item_info = categoryItem.item.item_info;
                                                                    item_info.rafoo_type = item_info.rafoo_type > 0 ? null: 100;
                                                                    categoryItem.item.item_info = item_info;
                                                                }
                                                                updatedArray.push(categoryItem);
                                                            }
                                                            this.setState({categoryItems: updatedArray});
                                                            var objectIndex = this.state.cartItems.findIndex(function(product) {
                                                                return product.id == item.item.item_info.id
                                                            });

                                                            if (objectIndex >= 0) {

                                                                var cartItem = this.state.cartItems[objectIndex];
                                                                cartItem.additional_services = {id: 0, quantity: qtyInCart};
                                                                var cartItems = this.state.cartItems;
                                                                cartItems.splice(objectIndex, 1);
                                                                cartItems.push(cartItem);
                                                            }

                                                        }} />
                                                        <RafooInfoView title={"Machine work ₹70 per item"} isEnable={rafoo_type == 70} callBack = {() => {

                                                            var updatedArray = [];
                                                            var cnt = 0;
                                                            for(cnt = 0; cnt < this.state.categoryItems.length; cnt++) {
                                                                var categoryItem = this.state.categoryItems[cnt];
                                                                if (cnt == index) {
                                                                    var item_info = categoryItem.item.item_info;
                                                                    item_info.rafoo_type = item_info.rafoo_type > 0 ? null: 70;
                                                                    categoryItem.item.item_info = item_info;
                                                                }
                                                                updatedArray.push(categoryItem);
                                                            }
                                                            this.setState({categoryItems: updatedArray});

                                                            var objectIndex = this.state.cartItems.findIndex(function(product) {
                                                                return product.id == item.item.item_info.id
                                                            });

                                                            if (objectIndex >= 0) {

                                                                var cartItem = this.state.cartItems[objectIndex];
                                                                cartItem.additional_services = {id: 1, quantity: qtyInCart};
                                                                var cartItems = this.state.cartItems;
                                                                cartItems.splice(objectIndex, 1);
                                                                cartItems.push(cartItem);
                                                            }
                                                        }}/>
                                                    </View>: null
                                                }
                                                
                                             </View>: null }
                                                
                                        </View>);
                                }

                                

                                
                                    }
                                }
                        
                        />
                        <View style={{flex: 1, backgroundColor: 'white', position: 'absolute', bottom: -50, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderColor: '#F5F5F5', borderWidth: 1, width: '100%', justifyContent: 'center', height: 100, shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2, marginTop: 0,}}>
                            <TouchableOpacity style={{height: 58, width: '80%', backgroundColor: '#0A9AD8', borderRadius: 10, alignSelf: 'center'}} onPress={() => {
                                this.props.navigation.navigate('PickupDetailScreen',{data: {}});
                            }}>
                                <View style={{width: '80%', flexDirection: 'row', justifyContent: 'center'}}>
                                    <View style={{width: 200, marginTop: 12, marginLeft: 70, flexDirection: 'column', alignSelf: 'center'}}>
                                        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#ffffff', fontSize: 10,}}>12 Items</Text>
                                        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#ffffff', fontSize: 14}}>₹1,245</Text>
                                    </View>
                                    <View style={{alignSelf: 'center'}}>
                                        <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#ffffff', fontSize: 16}}>{"Complete >"}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
        </SafeAreaView>)
    }
}

export default CategoryItemsScreen;