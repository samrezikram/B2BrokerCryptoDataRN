/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import { Header, CryptoContainer } from './src/components'
import store from './src/components/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});