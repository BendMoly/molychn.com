<template>
  <section>
    <article-item v-for="item in articleList"
    :key="item.id"
    :id="item.id"
    :title="item.title"
    :name="item.name"
    :date="item.date"
    :img="item.img"
    :abs="item.abs"
    ></article-item>
  </section>
</template>

<script>
import articleItem from '~/components/articleListItem'
export default {
  components: {
    articleItem
  },
  data () {
    return {
      a: 1,
      articleList: [
        {
          id: '201808082000',
          title: '如果我能看得见',
          name: 'moly',
          date: Date.now(),
          img: '',
          abs: '这是一段摘要'
        }
      ]
    }
  }
}
</script>