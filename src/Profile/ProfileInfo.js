import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList
  } from 'react-native';
  import AwesomeAlert from 'react-native-awesome-alerts';
const DATA = [
    
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Track Order",
      icon: require('../../assets/images/location.png'),
      iconWidth: 15, 
      iconHeight: 21, 
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Saved Address",
      icon: require('../../assets/images/saved-address.png'),
      iconWidth: 20, 
      iconHeight: 20, 
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Payments",
        icon: require('../../assets/images/cards.png'),
        iconWidth: 20, 
        iconHeight: 20, 
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Manage Membership",
        icon: require('../../assets/images/receipt-disscount.png'),
        iconWidth: 20, 
        iconHeight: 20, 
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Help & Suppport",
        icon: require('../../assets/images/help.png'),
        iconWidth: 20, 
        iconHeight: 20, 
    },
  ];

export const ProfileHeader = ({onClick}) => {
    return <LinearGradient style={styles.linerGradientStyle} start={{x: 0, y: 0}} end={{x: 1, y: 1}}
    colors={['#2F91BF', '#0AD8B3']}>
        <View styles={styles.profileHeader}>
        <View style={styles.userInfo}>
            <Text style={styles.headingText}>Mohammad Imran</Text>
            <Text style={styles.normalText}>+91-9990624253</Text>
            <TouchableOpacity onPress={() => {
                onClick()
            }}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={require('../../assets/images/avatar.png')} />
        </View>
    </View>
    </LinearGradient>
}

export const ProfileFooter = ({onClick}) => {
    return <View style={{height: 250, flex: 1, backgroundColor: '#F5F8FB', flexDirection: 'column'}}>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}} onPress={() => {
                onClick('about')
            }}>
                <Text style={styles.footerText}>About Dhodala</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}} onPress={() => {
                onClick('policy')
            }}>
                <Text style={styles.footerText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}} onPress={() => {
                onClick('terms')
            }}>
                <Text style={styles.footerText}>Terms & Condition</Text>
            </TouchableOpacity>
            <View style={{marginLeft: 20, marginRight: 0, marginTop: 20, height: 1, backgroundColor: '#000', opacity: 0.1}}></View>
            <View style={{flexDirection: 'column', flex: 1, }}>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 25, marginTop: 10, alignSelf: 'flex-start'}} onPress={() => {
                onClick('logout')
            }}>
                <Text style={{fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, color: '#0A9AD8'}}>Logout</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: 'flex-end', bottom: 20, paddingRight: 20}}>App Version: V0.1.2</Text>
            </View>
            
    </View>
}

export const ProfileInfoCell = ({id, title, icon, iconWidth, iconHeight, onClick}) => {
    return <View style={{marginLeft: 20, height: 45, marginTop: 20, flexDirection: 'row', marginRight: 20,}}>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={()=> {
            onClick(id)
        }}>
        <View style={{width: 36, height: 36, borderRadius: 72, justifyContent: 'center', alignSelf: 'flex-start', backgroundColor: '#F3FBFF'}}>
            <Image style={{width: iconWidth, height: iconHeight, alignSelf: 'center'}} source={icon} />
        </View>
        <View style={{marginLeft: 25, marginRight: 0, justifyContent: 'center',
        alignItems: 'center', height: '100%',}}>
            <Text style={{fontFamily: 'Poppins', fontSize: 16, fontWeight: '400', lineHeight: 56, color: '#212121', textAlign: 'center', bottom: 8}}>{title}</Text>
        </View>
        </TouchableOpacity>
    </View>
}

class ProfileInfo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { showAlert: false };
    }

    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
    
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };

    render() {
        const {showAlert} = this.state;
        return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                 <FlatList style={{flex: 1,}}
                    data={DATA}
                    renderItem = { ({item}) => {
                        return (<ProfileInfoCell
                                    id={item.id}  
                                    title={item.title}
                                    icon={item.icon} 
                                    iconWidth={item.iconWidth}
                                    iconHeight={item.iconHeight} 
                                    onClick={(id) => {
                                       if (id == '58694a0f-3da1-471f-bd96-145571e29d72') {
                                        this.props.navigation.navigate('AddressList',{data: {}});
                                       }   
                                    }}
                                />)
                            }
                        }
                    keyExtractor={(item) => {item.id}}
                    ListHeaderComponent={
                        <ProfileHeader onClick={() => {
                            alert('header')
                        }}/> 
                    }
                    ListFooterComponent={<ProfileFooter onClick={(type) => {
                        this.showAlert();
                    }} />}
                 />
                 <AwesomeAlert
                            show={showAlert}
                            showProgress={false}
                            title=""
                            message="Are you sure, you want to logout?"
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showCancelButton={true}
                            showConfirmButton={true}
                            cancelText="Cancel"
                            confirmText="Yes"
                            cancelButtonStyle={{
                                width: 116,
                                height: 40,
                                borderRadius: 6,
                                borderWidth: 1,
                                borderColor: "#0A9AD8",
                                backgroundColor: "#ffffff",
                                marginTop: 30,
                                alignItems: "center",
                            }}
                            confirmButtonStyle={{
                                width: 116,
                                height: 40,
                                borderRadius: 6,
                                borderWidth: 1,
                                borderColor: "#0A9AD8",
                                backgroundColor: "#0A9AD8",
                                marginTop: 30,
                                alignItems: "center",
                            }}
                            confirmButtonTextStyle={{
                                fontFamily: "Poppins-Semibold",
                                fontSize: 14,
                                color: "white",
                            }}
                            contentContainerStyle={{
                                width: 300,
                                height: 180,
                                borderRadius: 20,
                            }}
                            cancelButtonTextStyle={{
                                fontFamily: "Poppins-Semibold",
                                fontSize: 14,
                                color: "#0A9AD8",
                            }}
                            messageStyle={{
                                fontFamily: 'Poppins',
                                fontWeight: '600',
                                fontSize: 16,
                                lineHeight: 24,
                                alignItems: 'center',
                                color: '#000000',
                                textAlign: 'center',
                            }}
                            onCancelPressed={() => {
                                this.hideAlert();
                            }}
                            onConfirmPressed={() => {
                                this.hideAlert();
                            }}
                            />  
               </SafeAreaView>
    }
}

export default ProfileInfo;

const styles = StyleSheet.create({
    linerGradientStyle: {
        marginLeft: 15, marginTop: 15, height: 110, marginRight: 15, borderRadius: 8,
    },
    userInfo: {
        marginLeft: 15, marginTop: 15, flexDirection: 'column', width: '60%',
    },
    profileHeader: {
        marginLeft: 15,
        flexDirection: 'column',
        borderRadius: 8,
        justifyContent: 'center'
    },
    headingText: {
        fontFamily: 'Poppins', 
        fontSize: 20, 
        fontWeight: '600', 
        lineHeight: 30, 
        color: 'white'
    },
    normalText: {
        fontFamily: 'Poppins', 
        fontSize: 14, 
        fontWeight: '400', 
        lineHeight: 21, 
        color: 'white'
    },
    editProfileText: {
        fontFamily: 'Poppins', 
        fontSize: 14, 
        fontWeight: '400', 
        lineHeight: 21, 
        color: 'white',
        marginTop: 10,
    },
    avatarContainer: {
        width: 70, 
        height: 70, 
        borderRadius: 140, 
        borderColor: '#FFFFFF', 
        borderWidth: 1, 
        alignSelf: 'flex-end', 
        bottom: 75, 
        marginRight: 30, 
        justifyContent: 'center'
    },
    avatar: {
        width: 60, 
        height: 60, 
        borderRadius: 120, 
        alignSelf: 'center',
    },
    footerText: {
        fontFamily: 'Poppins', 
        fontSize: 14, 
        fontWeight: '400', 
        lineHeight: 36, 
        color: '#545659',
    },
    footerOption: {

    }

})