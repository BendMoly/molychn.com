<template>
  <nav class="nav-container">
    <li><i class="iconfont icon-fe"></i>前端开发<span>/Front-end</span></li>
    <li><i class="iconfont icon-fe"></i>后端开发<span>/Back-end</span></li>
    <li><i class="iconfont icon-devops"></i>构建与集成<span>/DevOps</span></li>
  </nav>
</template>

<style lang="scss" scoped>
.nav-container{
  li{
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    background: rgba($color: #ffffff, $alpha: 0.9);
    background: linear-gradient(to left, rgba($color: #ffffff, $alpha: 0.9) 50%, #409EFF 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    // color: #999999;
    border-left: 5px solid #409EFF;
    border-bottom: 1px solid #ebebeb;
    transition: all .3s ease;
    cursor: pointer;
  }
  li:hover{
    background-position: left bottom;
    border-bottom: 1px solid #409EFF;
    color: #ffffff;
    span{
      color: #ffffff;
    }
  }
  span{
    font-size: 12px;
    color: #999999;
  }
}
</style>

