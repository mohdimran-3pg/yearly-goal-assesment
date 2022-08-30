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
  import NotificationDisplayView from '../Components/NotificationDisplayView';
  
  export const HomeViewHeader = ({onClick}) => {
        return <View style={{width: '100%', height:  150, backgroundColor: 'white', flexDirection: 'column'}}>
        <View style={{width: '100%', height:  60, backgroundColor: 'white', flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', flexDirection: 'row', width: 180, marginLeft: 10, flexDirection: 'row', backgroundColor: 'white'}}>
                <View style={{marginLeft: 0}}>
                    <Image style={{width: 40, height: 40, borderRadius: 16,}} source={require('../../assets/images/user-avatar.png')} />
                </View>
                <View style={{flexDirection: 'column', marginLeft: 10}}>
                    <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '400', color: '#545659', fontSize: 14}}>Welcome back!</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#000000', fontSize: 18}}>
Imran</Text>
                </View>
            </View>
            <NotificationDisplayView onClick = {() => {
                  console.log("------");
                }}/>
        </View>
        <View style={{height: 48, marginTop: 20, backgroundColor: '#F5F5F5', width: '90%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', marginBottom: 25}}>
            <View style={{width: 30, height: '100%', justifyContent: 'center', marginLeft: 20}}>
                <Image style={{height: 24, width: 24}} source={require('../../assets/images/search-icon-grey.png')} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
                <TextInput placeholder="Search" style={{fontFamily: 'Poppins-Regular', fontSize: 16, color: '#212121'}}></TextInput>
            </View>
        </View>
    </View>
    }

  export const HomeFooterView = () => {
    return <View style={{height: 300, width: "100%", alignSelf: 'center', backgroundColor: '#F5F8FB', borderRadius: 16, marginTop: 25, flexDirection: 'column'}}>
            <View style={{width: '100%', height: 100, marginLeft: 10}}>
                <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#212121', fontSize: 18, lineHeight: 27, marginTop: 30}}>Benefits & Features</Text>
                <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '400', color: '#545659', fontSize: 12}}>
                More reasons to experience our services</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <HomeFooterViewInfo 
                    imagSource={require('../../assets/images/attaractive-membership.png')}
                    heading={"Eco Friendly Cleaning Solutions"}
                    desc={"lorem ipsum is dummy text"}
                    marginTop={0}
                />
                <HomeFooterViewInfo 
                    imagSource={require('../../assets/images/eco-friendly.png')}
                    heading={"Attractive Membership Plans"}
                    desc={"lorem ipsum is dummy text"}
                    marginTop={20}
                />
                <HomeFooterViewInfo 
                    imagSource={require('../../assets/images/experience-team.png')}
                    heading={"Professional & Experienced Team"}
                    desc={"lorem ipsum is dummy text"}
                    marginTop={20}
                />
            </View>
                                    
    </View>
  }  

  export const HomeFooterViewInfo = ({imagSource, heading, desc, marginTop}) => {
    
    return <View style={{height: 50, width: "100%", flexDirection: 'row', marginTop: marginTop}}>
            <View style={{width: 40, height: 40, backgroundColor: '#FFFFFF', marginLeft: 20, borderRadius: 20, justifyContent: 'center'}}>
                <Image style={{alignSelf: 'center'}} source={imagSource} />
            </View>
            <View style={{marginLeft: 10, flexDirection: 'column',}}>
                <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '500', color: '#212121', fontSize: 14, lineHeight: 27}}>{heading}</Text>
                <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '400', color: '#545659', fontSize: 12}}>{desc}</Text>
            </View>
        </View>
  }

  export const SingleCategoryView = ({title, image, onClick}) => {
    return <TouchableOpacity onPress={() => {onClick()}}>
        <View style={{width: 72, height: 104, flexDirection: 'column', marginLeft: 20, marginTop: 20}}>
                <View style={{width: 58, height: 58, borderRadius: 16, backgroundColor: 'white', justifyContent: 'center', shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,}}>
                    <Image style={{width: 19, height: 20, alignSelf: 'center'}} source={image} />
                </View>
                <View style={{width: '100%',}}>
                    <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '500', color: '#212121', fontSize: 12, lineHeight: 18, marginTop: 10, textAlign: 'center'}}>{title}</Text>
                </View>
    </View>
    </TouchableOpacity>
  }

  export const CategoryView = ({categories, onClick}) => {
    return <View style={{flexDirection: 'column', width: '100%', backgroundColor: '#FBFBFB'}}>
            <View style={{width: '100%', height: 100, marginLeft: 10}}>
                <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#212121', fontSize: 18, lineHeight: 27, marginTop: 30}}>Services</Text>
                <Text style={{fontFamily: 'Poppins-Regular', fontWeight: '400', color: '#545659', fontSize: 12}}>
                Professional Service at your door step</Text>
            </View>
            <View>
                <FlatList 
                    data= {categories}
                    numColumns={4}
                    
                    renderItem = {({item}) => {
                        return <SingleCategoryView 
                        title={item.name}
                        image={item.image}
                        onClick={ () => {
                            onClick()
                        }} />
                    }
                }
                />
            </View>
    </View>
  }

  class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center' , marginTop: 25, flex: 1}}>
                              <FlatList style={{height: '100%', flexDirection: ''}} 
                                data={[
                                    {
                                      "type": "offer",
                                      "gallery": [
                                        "http://52.86.239.141/offer/1.jpg",
                                        "http://52.86.239.141/offer/2.jpg",
                                        "http://52.86.239.141/offer/2.jpg",
                                        "http://52.86.239.141/offer/2.jpg"
                                      ]
                                    },
                                    {
                                      "type": "category",
                                      "categories": [{
                                                        "id": "1",
                                                        "name": "Dry Clean",
                                                        "image": require('../../assets/images/washing-machine-cleaning.png')
                                                    }, 
                                                    {
                                                        "id": "2",
                                                        "name": "House Cleaning",
                                                        "image": require('../../assets/images/house-cleaning.png')
                                                    }, 
                                                    {
                                                        "id": "3",
                                                        "name": "Home Sanitisation",
                                                        "image": require('../../assets/images/sanitisation.png')
                                                    }, 
                                                    {
                                                        "id": "3",
                                                        "name": "Rafoo Work",
                                                        "image": require('../../assets/images/sewing-machine.png')
                                                    },
                                                    {
                                                        "id": "3",
                                                        "name": "Sofa Cleaning",
                                                        "image": require('../../assets/images/sofa-cleaning.png')
                                                    },
                                                    {
                                                        "id": "3",
                                                        "name": "Carpet Cleaning",
                                                        "image": require('../../assets/images/carpet-cleaning.png')
                                                    },
                                                    {
                                                        "id": "3",
                                                        "name": "Curtain Cleaning",
                                                        "image":require('../../assets/images/curtain-cleanig.png')
                                                    }],
                                      
                                    },
                                  ]}
                                renderItem = { ({item}) => {
                                    console.log("item ====> "+ item)

                                    if (item.type == "offer") {
                                        return (<FlatList horizontal={true} data={item.gallery} renderItem={({item}) => { return (<View style={{width: 260, height: 220, marginLeft: 10}}><Image style={{alignSelf: "center"}} source={require('../../assets/images/demo-banner.png')}/></View>)}}/>)   
                                    } else {
                                        return (<CategoryView 
                                            categories={item.categories}
                                            onClick={() => {
                                            this.props.navigation.navigate('CategoryItemsScreen',{data: {}});
                                        }} />)
                                    }

                                    
                                        }
                                    }

                                    ListHeaderComponent = { 
                                        <HomeViewHeader />
                                    }

                                    ListFooterComponent = {
                                        <HomeFooterView />
                                    }
                              />  
                        </View>
                    
                    
        </SafeAreaView>)
    }
  }

  export default HomeScreen;