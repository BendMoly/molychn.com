<template>
  <section class="container">
    <moly-header></moly-header>
    <div class="page-container clear">
      <div class="nav-btn">
        <nuxt-link :to="'/'">
          <div class="nav-btn-list">
            <i class="fa fa-home"></i>
          </div>
        </nuxt-link>
      </div>
      <div class="page-list">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </section>
</template>

<script>
// 页面公有组件
import molyHeader from '~/components/header.vue'

export default {
  components: {
    molyHeader
  },
  methods: {
    toArticle () {
      this.$router.push({path: '/article'})
    }
  }
}
</script>
