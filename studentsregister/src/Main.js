import React,{Component} from 'react';
import {View,Text,TextInput,Picker} from 'react-native';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';








class Main extends Component{
  componentDidMount(){
    firebase.initializeApp({
 apiKey: 'AIzaSyD4kCy-O8fiCYGasG1y2ALRfqZajioYiSo',
 authDomain: 'ogrencikayit-dbaae.firebaseapp.com',
 databaseURL: 'https://ogrencikayit-dbaae.firebaseio.com',
 projectId: 'ogrencikayit-dbaae',
 storageBucket: 'ogrencikayit-dbaae.appspot.com',
 messagingSenderId: '1030911297867',
 appId: '1:1030911297867:web:92aa699c539c82ae6640ce',
 measurementId: 'G-KSXN2XJC1Z'
});
}
  render(){
    const store =createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
         <Router />
      </Provider>
    );

  }
}
export default Main;
