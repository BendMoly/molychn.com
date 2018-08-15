<template>
  <section class="aside-article-container">
    <div class="aside-article-title"><i class="iconfont icon-list"></i>最新文章</div>
    <ul class="aside-article-list">
      <li>
        <label class="aside-article-list_index">1</label><span>如果我能看得见</span>
      </li>
      <li>
        <label class="aside-article-list_index">2</label><span>就能轻易地分辨白天黑夜</span>
      </li>
      <li>
        <label class="aside-article-list_index">3</label><span>就能清晰地在背后，牵住你的手</span>
      </li>
      <li>
        <label class="aside-article-list_index">4</label><span>fadfasfafeafaewfwafaefasefeafaefaefaefa</span>
      </li>
      <li>
        <label class="aside-article-list_index">5</label><span>322887003787677032288700378767703228870037876770</span>
      </li>
      <li>
        <label class="aside-article-list_index">6</label><span>如果我能看得见</span>
      </li>
      <li>
        <label class="aside-article-list_index">7</label><span>如果我能看得见</span>
      </li>
      <li>
        <label class="aside-article-list_index">8</label><span>如果我能看得见</span>
      </li>
      <li>
        <label class="aside-article-list_index">9</label><span>如果我能看得见</span>
      </li>
      <li>
        <label class="aside-article-list_index">10</label><span>如果我能看得见</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.aside-article-container{
  padding: 10px 20px;
  background: rgba($color: #ffffff, $alpha: 0.9);
  margin-bottom: 5px;
}
.aside-article-title{
  color: #999999;
  margin-bottom: 10px;
}
.aside-article-list{
  font-size: 12px;
  li{
    margin-bottom: 5px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.aside-article-list_index{
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #cccccc;
  text-align: center;
  color: #666666;
  margin-right: 5px;
}
</style>

