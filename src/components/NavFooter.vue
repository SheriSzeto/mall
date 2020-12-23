<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="http://sheriszeto.cn/" target="_blank">sheri主页</a><span>|</span>
      <a href="https://blog.csdn.net/Sheri_stx/article/details/111386802" target="_blank">CSDN</a><span>|</span>
      <a href="https://github.com/SheriSzeto" target="_blank">Github</a><span>|</span>
      <a href="http://www.baidu.com" target="_blank">百度知道</a><span>|</span>
    </div>
    <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      a {
        color: $colorD;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      .domain {
        color: $colorA;
      }
    }
  }
</style>
