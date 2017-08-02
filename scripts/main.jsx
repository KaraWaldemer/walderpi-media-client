import { Provider } from 'react-redux'
import App from './app/app.container'
import React from 'react'
import ReactDOM from 'react-dom'
import makeStore from './makeStore'

window.onload = () => {
  const store = makeStore()
  const provider = (
    <Provider store={store}>
      <App />
    </Provider>
  )
  ReactDOM.render(provider, document.getElementById('app'))
}
