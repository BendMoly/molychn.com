<template>
  <section class="article-list">
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
    <el-pagination
    class="article-pagigation"
    background
    layout="prev, pager, next"
    :total="total"
    @current-change="currentPageChange"
    >
    </el-pagination>
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
    return {
      total: data.count,
      current: data.current,
      articleList: data.items
    }
  },
  data () {
    return {
      articleList: [
        {
          id: '201808082000',
          title: '如果我能看得见',
          name: 'moly',
          date: String(new Date().valueOf()),
          img: '',
          abstract: '这是一段摘要'
        }
      ]
    }
  },
  methods: {
    currentPageChange (val) {
      console.log(val)
      this.current = val
      axios.get('/articles', {current: this.current}).then(res => {
        this.articleList = res.data.items
      })
    }
  },
}
</script>
