import axios from 'axios'
//import { LOGOUT } from '../redux/ReduxConstants';
//import AsyncStorage from '@react-native-community/async-storage'

const client = axios.create({
  baseURL: 'http://52.86.239.141/api/',
  headers: {'content-type':'application/json'}
});


export const interceptor = (store) => {
  client.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      console.log('hhhh',error)
      if(error.response.status === 401){
        console.log("invalid refresh token");
        console.log(error.response)
        // store.dispatch({
        //   type:LOGOUT,
        //   isLogout : true
        // });
        //AsyncStorage.removeItem('userdata')
        
      }
      return error.response;
    }
  )
};

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
    //console.log("This is Headers .....", JSON.stringify(response.config.headers));
    console.log("This is API Response Body .....", JSON.stringify(response.data));
    return response.data;
  }

  const onError = function(error) {
    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }
console.log(options)
  return client(options)
            .then(onSuccess)
            .catch(onError);
}
function get(endpoint,params) {
    return request({
      url:    endpoint,
      method: 'GET',
      params: params
    });
  }
  
function post(endPoint, postData) {
 
    return request({
      url:    endPoint,
      method: 'POST',
      data:   postData
    });
  }

  function put(endPoint, putData) {
 
    return request({
      url:    endPoint,
      method: 'PUT',
      params:   putData
    });
  }

  function setToken(token) {
      console.log(token)
      if (token) {
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       } else {
        delete client.defaults.headers.common['Authorization'];
       } 
  
   }

   function setLocale(code) {
      if (code.length > 0) {
        client.defaults.headers.common['locale'] = code;
      } else {
        client.defaults.headers.common['locale'] = `en`;
      }
   }
  
  const ApiService = {
    get, post, put,setToken,setLocale
  }
  
  export default ApiService;