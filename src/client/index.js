import React from 'react'
import { hydrate } from 'react-dom'

import App from '../shared/App'

if(module.hot) {
    module.hot.accept()
}

hydrate(<App />, document.getElementById('root'))