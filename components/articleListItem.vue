<template>
  <section class="item-container">
    <div class="item-title">{{ title }}</div>
    <div class="item-publish">
      <span class="item-publish_postbylabel"><i class="fa fa-calendar"></i></span>
      <!-- <span class="item-publish_name">{{ name }}</span> -->
      <span class="item-publish_date">{{ date | timeFormat }}</span>
      <span class="item-publish_postbylabel">in</span>
      <span class="item-publish_column"><i class="fa fa-folder-open-o"></i><span>{{ columnName }}</span></span>
      <!-- <span class="item-publish_read"><i class="fa fa-eye"></i>168</span> -->
      <!-- <div>
        <span class="item-publish_column"><i class="fa fa-columns"></i><span>{{ columnName }}</span></span>
        <span class="item-publish_tags"><i class="fa fa-tags"></i><span class="item-publish_tags-items" v-for="item in tags" :key="item">{{ item }}</span></span>
      </div> -->
    </div>
    <div class="item-ctn">
      <!-- <div class="item-cover">[图片]</div> -->
      <!-- <div class="item-cover"><img src="../assets/banner_default.png" alt=""></div> -->
      <div class="item-ctn_abstract">{{ abs }}</div>
    </div>
    <div class="item-more"><nuxt-link :to="'/article/'+id"><span>See more></span></nuxt-link></div>
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
      type: String
    },
    columnName: {
      type: String
    },
    tags: null,
    img: {
      type: String,
      default: ''
    },
    abs: {
      type: String,
      default: '世界上第一句在计算机上显示的话，hello world！！！'
    }
  },
  filters: {
    timeFormat (val) {
      console.log(val)
      let date = new Date(val)
      console.log(date)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  }
}
</script>

<style lang="scss" scoped>
.item-container{
  padding: 20px 20px 10px 20px;
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
  margin-bottom: 5px;
  font-size: 14px;
}
.item-publish_postbylabel{
  color: #999999;
  margin-right: 5px;
}
.item-publish_date{
  margin-right: 5px;
  color: #333333;
  // margin-left: 10px;
}
.item-publish_read{
  color: #999999;
  margin-left: 15px;
  i{
    // vertical-align: text-bottom;
    margin-right: 2px;
  }
}
.item-publish_column{
  i{
    margin-right: 5px;
  }
  span{
    margin-right: 10px;
    line-height: 1;
    // text-decoration: underline #999999;
    transition: .3s;
    cursor: pointer;
  }
  span:hover{
    background: #409EFF;
    color: #ffffff;
  }
}
.item-publish_tags{
  i{
    margin-right: 5px;
  }
  .item-publish_tags-items{
    line-height: 1;
    text-decoration: underline #999999;
    transition: .3s;
    cursor: pointer;
    margin-right: 5px;
  }
  .item-publish_tags-items:hover{
    background: #409EFF;
    color: #ffffff;
    // display: inline-block;
    // padding: 0 5px;
    // border-radius: 4px;
    // background: #ebebeb;
  }
}
.item-ctn{
  margin-top: 15px;
  margin-bottom: 10px;
}
.item-cover{
  margin-bottom: 10px;
  img{
    width: 100%;
  }
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

