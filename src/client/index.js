import React from 'react'
import { hydrate } from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import App from '../shared/App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/root-reducer.js'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(rootReducer, preloadedState)

if (module.hot) {
    module.hot.accept('./reducers/root-reducer.js', () => {
      const NextReducer = require('../client/reducers/root-reducer.js').default
      store.replaceReducer(NextReducer)
    })
  }

if(module.hot) {
    module.hot.accept('../shared/App', () => {
        const NextApp = require('../shared/App').default
        hydrate(
            <AppContainer>
                <Provider store={store}>
                    <NextApp />
                </Provider>
            </AppContainer>
            , document.getElementById('root')
        )        
    })
}

hydrate(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>
    , document.getElementById('root')
)