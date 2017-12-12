import React from 'react'
import { hydrate } from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import App from '../shared/App'

if(module.hot) {
    module.hot.accept('../shared/App', () => {
        const RequiredApp = require('../shared/App').default
        hydrate(<AppContainer><RequiredApp /></AppContainer>, document.getElementById('root'))        
    })
}

hydrate(<AppContainer><App /></AppContainer>, document.getElementById('root'))