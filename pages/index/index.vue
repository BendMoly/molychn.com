<template>
  <section>
    <article-item v-for="item in articleList"
    :key="item._id"
    :id="item._id"
    :title="item.title"
    :name="item.name"
    :date="item.date"
    :column-name="item.columnName"
    :tags="item.tags"
    :img="item.img"
    :abs="item.abstract"
    ></article-item>
  </section>
</template>

<script>
import axios from '~/plugins/axios.config'
import articleItem from '~/components/articleListItem'
export default {
  components: {
    articleItem
  },
  async asyncData (context) {
    let { data } = await axios.get('/articles')
    console.log(data)
    return {articleList: data.items}
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