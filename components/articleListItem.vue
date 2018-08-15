<template>
  <section class="item-container">
    <div class="item-title">{{ title }}</div>
    <div class="item-publish">
      <span class="item-publish_postbylabel">post by</span>
      <span class="item-publish_name">{{ name }}</span>
      <span class="item-publish_date">{{ date }}</span>
      <span class="item-publish_read"><i class="iconfont icon-read"></i>168</span>
    </div>
    <div class="item-ctn">
      <div class="item-cover">[图片]</div>
      <div class="item-ctn_abstract">{{ abs }}</div>
    </div>
    <div class="item-more"><nuxt-link :to="'/article/'+id"><span>See more ></span></nuxt-link></div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Hello World'
    },
    name: {
      type: String,
      default: 'molychn'
    },
    date: {
      type: Number,
      default: 28800
    },
    img: {
      type: String,
      default: ''
    },
    abs: {
      type: String,
      default: '世界上第一句在计算机上显示的话，hello world！！！'
    }
  }
}
</script>

<style lang="scss" scoped>
.item-container{
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 10px;
}
.item-title{
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 5px;
}
.item-publish{
  margin-bottom: 15px;
}
.item-publish_postbylabel{
  color: #999999;
  margin-right: 5px;
}
.item-publish_date{
  color: #999999;
  margin-left: 10px;
}
.item-publish_read{
  color: #999999;
  margin-left: 15px;
  i{
    vertical-align: text-bottom;
  }
}
.item-ctn{
  margin-bottom: 10px;
}
.item-ctn_abstract{
  // height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-more {
  a{
    color: #999999;
  }
  span{
    cursor: pointer;
  }
  span:hover{
    display: inline-block;
    color: #409EFF;
    text-decoration: underline;
    animation: haveMove 1s;
  }
}
@keyframes haveMove {
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(10px);
  }
  100%{
    transform: translateX(0);
  }
}
</style>

