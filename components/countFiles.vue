<template>
  <section class="files-container">
    <div class="files-title"><i class="iconfont icon-files"></i>归档</div>
    <ul class="files-list">
      <li><span>2018/01/01</span>(1)</li>
      <li><span>2018/02/01</span>(2)</li>
      <li><span>2018/03/01</span>(3)</li>
      <li><span>2018/04/01</span>(4)</li>
      <li><span>2018/05/01</span>(5)</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.files-container{
  padding: 10px 20px;
  background: rgba($color: #ffffff, $alpha: 0.9);
}
.files-title{
  color: #999999;
  margin-bottom: 10px;
}
.files-list{
  font-size: 14px;
  li{
    margin-bottom: 5px;
    cursor: pointer;
  }
  li:hover{
    color: #409EFF;
  }
}
</style>

