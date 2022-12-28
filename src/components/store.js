import React from 'react'
import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducer'
const middleware =  applyMiddleware( thunk, promise, logger)

const store = createStore(
  rootReducer,
  compose(
    middleware,
  )
)

export default store
