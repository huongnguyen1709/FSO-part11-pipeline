import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'
import App from '../src/App'
import { Provider } from 'react-redux'
import store from '../src/store'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

describe('test App.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}>
      <App />
    </Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
