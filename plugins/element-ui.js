import Vue from 'vue'

import {
  Button,
  Pagination
} from 'element-ui'

const Components = [
  Button,
  Pagination
]

Components.map(key => Vue.use(key))
