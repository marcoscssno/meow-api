import React from 'react'
import { hydrate } from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import App from '../shared/App'

if(module.hot) {
    module.hot.accept('../shared/App', () => {
        const NextApp = require('../shared/App').default
        hydrate(<AppContainer><NextApp /></AppContainer>, document.getElementById('root'))        
    })
}

hydrate(<AppContainer><App /></AppContainer>, document.getElementById('root'))