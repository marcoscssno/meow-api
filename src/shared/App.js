import React, { Component } from 'react'

import { connect } from 'react-redux'
import { increment } from '../client/actions/root-actions'

const App = (props) => (
    <div>
        <h1>Hello, Dudes!</h1>
        <button onClick={() => props.increment()}>INCREMENT</button>
        <p><strong>Counter:</strong> {props.counter}</p>
    </div>
)

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch(increment())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)