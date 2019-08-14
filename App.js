/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import Main from './app/components/Main';
import store from './app/store'
import { Provider } from 'react-redux'

export default class App extends Component{
  render() {
    return(
      <Provider store={store}>
      <Main />
      </Provider>
    );
  }
}