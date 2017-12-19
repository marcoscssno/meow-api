import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'

const app = express()

import webpack from 'webpack'
import config from '../../webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

if(process.env.NODE_ENV === 'development') {
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath}))
  app.use(webpackHotMiddleware(compiler)) 
}

app.use(express.static(path.resolve(__dirname, '../client')))

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../client/reducers/root-reducer.js'

const store = createStore(rootReducer)

if (module.hot) {
  module.hot.accept('../client/reducers/root-reducer.js', () => {
    const NextReducer = require('../client/reducers/root-reducer.js').default
    store.replaceReducer(NextReducer)
  })
}

import serialize from 'serialize-javascript'

const html = `
<!doctype html>
<html lang="pt-BR">
  <head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
  </head>
  <body>
    <div id="root">${renderToString(<Provider store={store}><App /></Provider>)}</div>

    <script>
      window.__PRELOADED_STATE__ = ${serialize(store.getState())}
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>
`

app.get('*', (req, res) => {
    res.send(html)
})

app.listen(3001, () => console.log('Started'))