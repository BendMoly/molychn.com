import Vue from 'vue'

import {
  Button
} from 'element-ui'

const Components = [
  Button
]

Components.map(key => Vue.use(key))
