import { audi } from './module/example_exports/export'
import Car from './module/example_exports/export_default'
import './module/example_exports/export_path'

import React from 'react' // <-- React
import { render } from 'react-dom' // <-- Библиотека render для старта приложения. <-- React
import ReactApp from './module/react/react_app' // <--React

import './style/index.css' // <-- CSS
import './style/index.less' // <-- LESS
import './style/index.scss' // <-- SCSS
import './module/jquery/jquery' // <-- JQuery
import './module/typeScript/example_ts' // <--TypeScript
import './img/lorem-ipsum.jpg' // <-- IMG


// Export - Import Example
console.log(audi)
let bmw = new Car('bmw', 'x7', 6660000)
console.log(bmw)


// ReactJS - Example
render(<ReactApp />, document.getElementById('react_app'))
