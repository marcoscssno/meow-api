import express from 'express'

const app = express()

app.get('/', ( req, res ) => res.send( "Hey!" ) )

app.listen( 8000, () => console.log( "Server running at port 8000" ) )