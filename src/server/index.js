import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'

const app = express();

app.get('/', ( req, res ) => res.send( 'Hey! It\'s working!'))
app.get('/react', (req, res) => res.send(renderToString(<App />)))

app.listen(3001, () => console.log('Started'))