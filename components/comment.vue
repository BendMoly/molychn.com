<template>
  <section class="comment-container">
    <div class="comment-title"><i class="iconfont icon-comment"></i>最新评论</div>
    <ul class="comment-list">
      <li>
        <div class="comment-list_header clear">
          <div class="comment-list_header_name">molychn</div>
          <div class="comment-list_header_date">2018/08/08 20:08</div>
        </div>
        <div class="comment-list_body">这是一条测试这是一条测试这是一条测试这是一条测试这是一条测试</div>
      </li>
      <li>
        <div class="comment-list_header clear">
          <div class="comment-list_header_name">molychn</div>
          <div class="comment-list_header_date">2018/08/08 20:08</div>
        </div>
        <div class="comment-list_body">Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</div>
      </li>
      <li>
        <div class="comment-list_header clear">
          <div class="comment-list_header_name">molychn</div>
          <div class="comment-list_header_date">2018/08/08 20:08</div>
        </div>
        <div class="comment-list_body" title="170849261170849261170849261170849261170849261170849261170849261170849261">170849261170849261170849261170849261170849261170849261170849261170849261</div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.comment-container{
  padding: 10px 20px;
  background: rgba($color: #ffffff, $alpha: 0.9);
  margin-bottom: 5px;
}
.comment-title{
  color: #999999;
}
.comment-list{
  font-size: 12px;
  li{
    padding: 10px 0 5px 0;
    border-bottom: 1px dashed #ebebeb;
  }
}
.comment-list_header{
  margin-bottom: 5px;
}
.comment-list_header_name{
  float: left;
}
.comment-list_header_date{
  float: right;
  color: #999999;
}
.comment-list_body{
  width: 100%;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

