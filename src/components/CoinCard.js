import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { images} from './CoinIcon'

const CoinCard = ({ symbol, name, price_usd, percent_change_24h, percent_change_7d}) => {
  return (
    <View style={styles.container} >
      <View style={styles.upperRow}>
        <Image
          source={{uri: images[symbol]}}
          style={styles.image}
          />
        <Text style={styles.coinSymbol}>{symbol}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price} >{price_usd}
          <Text style={styles.bold} >$</Text>
        </Text>
      </View>
        <View style={styles.stats} >
          <Text>24 hours: 
            <Text style={percent_change_24h < 0 ? styles.percentNeg : styles.percentPos} > {percent_change_24h}</Text>
          </Text>
          <Text style={styles.bold}>7 days: 
            <Text style={percent_change_7d < 0 ? styles.percentNeg : styles.percentPos} > {percent_change_7d}</Text>
          </Text>
        </View>
    </View>
  )
}

export default CoinCard

const styles =  StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },
  image: {
    height: 40,
    width: 40
  },
  coinSymbol: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginTop: 10
  },
  name: {
    marginTop: 10,
    marginRight: 20,
    marginLeft: 5,
  },
  price: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
  stats: {
    display: 'flex',
    borderTopColor: '#fafafa',
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  percentNeg: {
    fontWeight: 'bold',
    color: '#dd2c00',
    marginLeft: 5
  },
  percentPos: {
    fontWeight: 'bold',
    color: '#00bfa5',
    marginLeft: 5
  }
})
