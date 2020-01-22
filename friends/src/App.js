import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'

export default function App() {
    return (
        <div>
            <h1>hi</h1>
            <Route path='/' component={Login} />
        </div>
    )
}
