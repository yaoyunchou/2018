<template>
  <section class="error_view">
    <div class="tip">
      {{msg}}
    </div>
  </section>
</template>
<script>
export default {
  metaInfo: {
    title: '牛商网电子发票'
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    switch (this.$route.params.key) {
      case 'no_order':
        this.msg = '开票信息为空，请确认当前订单有效！'
        break
      default:
        this.msg = '未知系统异常，请稍后再试！'
    }
  }
}
</script>
<style lang="postcss">
@import "../assets/vars.css";
  .error_view{
    display: flex;
    align-items: center;
    justify-content: center;
    header{
      color:var(--vi);
      margin-right:15px;
      display:block;
    }
    .tip{
      font:var(--font);
      color:var(--vi);
    }
  }
</style>
