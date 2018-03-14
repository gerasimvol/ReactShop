import React from 'react'
import { render } from 'react-dom'
import StorePicker from './components/StorePicker'


const app = document.querySelector('#main')
render(<StorePicker name="hello" />, app)