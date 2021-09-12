import Post from '@models/Post'
import json from './assets/json'
import carImage from './assets/logo'
import * as $ from 'jquery'

import './bable.js'
import './test.ts'

import './styles/styles.css'
import './styles/test.less'
import './styles/testing.scss'


console.log(1231232131232)

const post = new Post('Webpaack post title', carImage)

$('pre').html(post.toString())

// console.log(post.img)
