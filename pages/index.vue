<template>
  <section class="container">
    <moly-header></moly-header>
    <div class="page-container clear">
      <div class="page-left">
        <user-info></user-info>
        <moly-nav></moly-nav>
      </div>
      <div class="page-right">
        <aside-article-list></aside-article-list>
        <comment></comment>
        <files></files>
      </div>
      <div class="page-middle">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </section>
</template>

<script>
// 页面公有组件
import molyHeader from '~/components/header.vue'
import userInfo from '~/components/userInfo.vue'
import molyNav from '~/components/nav.vue'
import asideArticleList from '~/components/asideArticleList.vue'
import comment from '~/components/comment.vue'
import files from '~/components/countFiles.vue'

export default {
  components: {
    molyHeader,
    userInfo,
    molyNav,
    asideArticleList,
    comment,
    files
  },
  methods: {
    toArticle () {
      this.$router.push({path: '/article'})
    }
  }
}
</script>
