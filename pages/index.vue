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
        <!-- <div class="nav-btn-list">
          <i class="fa fa-tags"></i>
        </div>
        <div class="nav-btn-list">
          <i class="fa fa-archive"></i>
        </div>
        <div class="nav-btn-list">
          <i class="fa fa-user"></i>
        </div> -->
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
// import userInfo from '~/components/userInfo.vue'
// import molyNav from '~/components/nav.vue'
// import asideArticleList from '~/components/asideArticleList.vue'
// import comment from '~/components/comment.vue'
// import files from '~/components/countFiles.vue'

export default {
  components: {
    molyHeader,
    // userInfo,
    // molyNav,
    // asideArticleList,
    // comment,
    // files
  },
  methods: {
    toArticle () {
      this.$router.push({path: '/article'})
    }
  }
}
</script>
