<template>
  <section class="ctn-container">
    <div class="ctn-title">{{ data.title }}</div>
    <div class="ctn-info">
      <span class="ctn_postbylabel">post by</span>
      <span class="ctn_name">molyCHN</span>
      <span class="ctn_date">{{ data.date | timeFormat }}</span>
      <span class="ctn_read"><i class="fa fa-eye"></i>168</span>
      <div>
        <span class="ctn_column"><i class="fa fa-columns"></i><span>{{ data.columnName }}</span></span>
        <span class="ctn_tags"><i class="fa fa-tags"></i><span class="ctn_tags-items" v-for="item in data.tags" :key="item">{{ item }}</span></span>
      </div>
    </div>
    <div class="ctn-magazine"><img src="../../../assets/banner_default.png" alt=""></div>
    <div class="ctn-content">
      <div v-html="content"></div>
    </div>
  </section>
</template>

<script>
import marked from '~/plugins/marked'
import axios from '~/plugins/axios.config'
export default {
  async asyncData ({params}) {
    console.log(params)
    let { data } = await axios.get(`/articles/${params.article}`)
    console.log(data)
    let content = marked(data.content)
    return { data, content }
  },
  filters: {
    timeFormat (val) {
      let date = new Date(val)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    },
    markContent (val) {
      return marked(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.ctn-container{
  padding: 20px;
  background: #ffffff;
  border-radius: 4px;
}
.ctn-title{
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 5px;
}
.ctn-info{
  margin-bottom: 15px;
}
.ctn_postbylabel{
  color: #999999;
  margin-right: 5px;
}
.ctn_date{
  color: #999999;
  margin-left: 10px;
}
.ctn_read{
  color: #999999;
  margin-left: 15px;
  i{
    // vertical-align: text-bottom;
    margin-right: 2px;
  }
}
.ctn_column{
  i{
    margin-right: 5px;
  }
  span{
    margin-right: 10px;
    text-decoration: underline #999999;
    transition: .2s;
    cursor: pointer;
  }
  span:hover{
    background: #409EFF;
    color: #ffffff;
  }
}
.ctn_tags{
  i{
    margin-right: 5px;
  }
  .ctn_tags-items{
    margin-right: 5px;
    text-decoration: underline #999999;
    transition: .2s;
    cursor: pointer;
  }
  .ctn_tags-items:hover{
    background: #409EFF;
    color: #ffffff;
  }
}
.ctn-magazine{
  margin: 10px 0;
  img{
    width: 100%;
  }
}
</style>

