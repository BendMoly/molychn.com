<template>
  <div class="header-container">
    <div class="header-title default-theme_color">MolyCHN`s Blog</div>
  </div>
</template>

<style lang="scss" scoped>
.header-container{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, .8);
}
.header-title{
  width: 90%;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 1200px){
    width: auto;
    padding: 0 40px;
  }
}
</style>

