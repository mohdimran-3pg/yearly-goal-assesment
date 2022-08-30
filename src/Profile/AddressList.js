import React from 'react';
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
    FlatList
  } from 'react-native';
  import ContinueBtn from '../Components/ContinueBtn';

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      address: "101, Acecity, Sector 1, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh- 201306",
      landmark: "Saad",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      address: "101, Acecity, Sector 1, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh- 201306",
      landmark: "Dad’s Office",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      address: "101, Acecity, Sector 1, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh- 201306",
      landmark: "Pawan’s House",
    },
  ];

  export const AddressInfo = ({id, landmark, address, onEdit, onDelete}) => {
    return <View style={{height: 130, borderRadius: 6, borderColor: '#EAEEF1', borderWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10,}}>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                <View style= {{flexDirection: 'row', width: '100%', marginTop: 15}}>
                    <Text style={{fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 21, marginLeft: 20}}>{landmark}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20}}>
                        <TouchableOpacity style={{}} onPress={() => {
                            onEdit(id)
                        }}>
                            <Image source={require('../../assets/images/edit.png')} style={{width: 16, height: 16}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 25}} onPress={() => {
                            onDelete(id)
                        }}>
                            <Image source={require('../../assets/images/delete.png')} style={{width: 13, height: 16}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{marginLeft: 20, marginRight: 20, marginTop: 20, color: '#545659',  fontFamily: 'Poppins', fontWeight: '400', fontSize: 14, lineHeight: 22}}>
                {address}
                </Text>
            </View>
           </View>
  }

  class AddressList extends React.PureComponent {

      static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    
        return {
          headerRight: (
            <TouchableOpacity style={{width: 64, height: 21}} onPress={ ()=> {
                navigation.navigate("AddAddress")
            }}
            >
                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '700', lineHeight: 21, color: '#0A9AD8'}}>Add New</Text>
            </TouchableOpacity>
          ),
        };
      };

      constructor(props) {
          super(props);
          this.state = {saveAs:'', houseNo: '', landMark: '', mobileNo: ''}
      }

      render() {
          return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
              <ScrollView style={{flex: 1}}>
                  <Text style={styles.heading}>
                  Saved Addresses
                  </Text>
                  <FlatList style={{marginTop: 20}}
                    data={DATA}
                    renderItem = { ({item}) => {
                        return (<AddressInfo
                                    id={item.id}
                                    landmark={item.landmark}
                                    address={item.address}
                                    onEdit={(id)=> {
                                        this.props.navigation.navigate('AddAddress',{data: {}});
                                    }}

                                    onDelete={(id)=> {
                                        alert(id)
                                    }}
                                />)
                            }
                        }
                    keyExtractor={(item) => {item.id}}
                 />  
              </ScrollView>
          </SafeAreaView>
      }
  }

  const styles = StyleSheet.create({
      heading: {
          fontFamily: 'Poppins',
          fontSize: 18,
          lineHeight: 27,
          fontWeight: '700',
          marginTop: 25,
          marginLeft: 20,
      },
      fnameContainer: {
        marginLeft: 20, marginTop: 30, marginRight: 20
    },
  })

  export default AddressList;