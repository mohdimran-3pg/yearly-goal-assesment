import LoginScreen from './src/LoginScreen/Login';
import OtpScreen from './src/OtpScreen/Otp';
import WelcomeScreen from './src/Welcome';
import SkipNowButton from './src/Components/SkipNowButton';
import SelectUserType from './src/Profile/SelectUserType';
import EnterProfileInfo from './src/Profile/EnterProfileInfo';
import UpdateProfileInfo from './src/Profile/UpdateProfile';
import ProfileDisplay from './src/Profile/ProfileInfo';
import AddAddress from './src/Profile/AddAddress';
import AddressList from './src/Profile/AddressList';
import AddAddressByGoogleMap from './src/Profile/AddAddressByGoogleMap';
import LocationNotFound from './src/HomeTab/LocationNotFound';
import LocationHeader from './src/Components/LocationHeader';
//import { createAppContainer } from 'react-navigation';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeTab/Home';
import CategoryItemsScreen from './src/HomeTab/CategoryItems';
import PickupDetailScreen from './src/HomeTab/PickupDetail';
import CheckoutDetailScreen from './src/HomeTab/CheckoutDetail';
import MyOrdersScreen from './src/MyOrderTab/MyOrders';
import OrderResultScreen from './src/MyOrderTab/OrderResult';
import ContinueBtn from './src/Components/ContinueBtn';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Stack = createNativeStackNavigator();
console.log("Stack =========> ", Stack);
const Tab = createBottomTabNavigator();

function HomeTabStack() {
  return <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}  />
     <Stack.Screen name="CategoryItemsScreen" component={CategoryItemsScreen}   />
     <Stack.Screen name="PickupDetailScreen" component={PickupDetailScreen}   />
     <Stack.Screen name="CheckoutDetailScreen" component={CheckoutDetailScreen}   />
  </Stack.Navigator>
} 

function MyOrdersTabStack() {
  return <Stack.Navigator>
     <Stack.Screen name="1" component={MyOrdersScreen} options={{headerShown:false}}   />
     <Stack.Screen name="OrderResultScreen" component={OrderResultScreen}   />
  </Stack.Navigator>
}

function ProfileTabStack() {
  return <Stack.Navigator>
     <Stack.Screen name="1" component={ProfileDisplay} options={{headerShown:false}} />
     <Stack.Screen name="OrderResultScreen" component={OrderResultScreen} />
     <Stack.Screen name="AddressList" component={AddressList} 
    
    // some code ...
    options={({ navigation }) => ({
      headerRight: () => (
        <TouchableOpacity style={{width: 64, height: 21}} onPress={ ()=> {
          navigation.navigate('AddAddress')
      }}
      >
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: '700', lineHeight: 21, color: '#0A9AD8'}}>Add New</Text>
      </TouchableOpacity>
      ),
    })}
    />
     <Stack.Screen name="AddAddress" component={AddAddress} />
     <Stack.Screen name="AddAddressByGoogleMap" component={AddAddressByGoogleMap} />
  </Stack.Navigator>
}


export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
          screenOptions={(route) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.route.name === 'Home') {
              return <Image source={focused
                  ? require('./assets/images/home-selected.png')
                  : require('./assets/images/home-normal.png')} />;
            } else if (route.route.name === 'My Orders') {
              return <Image source={focused
                  ? require('./assets/images/my-order-selected.png')
                  : require('./assets/images/my-order-normal.png')} />;
            } else if (route.route.name === 'Profile') {
              return <Image source={focused
                ? require('./assets/images/my-profile-selected.png')
                : require('./assets/images/my-profile-normal.png')} />;
            } else {
              console.log("route.route.name ====> ", route.route.name)
            }
          },
          tabBarActiveTintColor: '#0A9AD8',
          tabBarInactiveTintColor: '#545659',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeTabStack} options={({ route }) => ({
            tabBarStyle: ((route) => {

              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              console.log("imran -====> ", routeName, route)
              if (routeName !== 'Home' && routeName !== '' && routeName !== 'My Orders' && routeName !== 'Profile') {
                return { display: "none" }
              }
              return { display: "" }
            })(route),
          })} />
        <Tab.Screen name="My Orders" component={MyOrdersTabStack} options={({ route }) => ({
            tabBarStyle: ((route) => {

              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              console.log("imran -====> ", routeName, route)
              if (routeName !== 'My Orders' && routeName !== '' && routeName !== 'Home' && routeName !== 'Profile') {
                return { display: "none" }
              }
              return { display: "" }
            })(route),
          })}   />
        <Tab.Screen name="Profile" component={ProfileTabStack} options={({ route }) => ({
            tabBarStyle: ((route) => {

              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              console.log("imran -====> ", routeName, route)
              if (routeName !== 'Profile' && routeName !== '' && routeName !== '' && routeName !== 'Home' && routeName !== 'My Orders') {
                return { display: "none" }
              }
              return { display: "" }
            })(route),
          })} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
