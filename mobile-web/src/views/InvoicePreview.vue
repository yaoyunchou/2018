<template>
  <div class="invoice-preview">
    <img src="url" class="image">
    <div class="tip">电子发票已经发送至提交的手机号和邮箱，请注意查收！</div>
  </div>
</template>

<script>
import ContextMixin from '@/components/ContextMixin'
export default {
  mixins: [ContextMixin],
  metaInfo: {
    title: '发票详情'
  }
}
</script>

<style lang="postcss">
@import "../assets/vars.css";
.invoice-preview{
  text-align: center;
  .image{
    width: 350px;
    height: 225px;
  }

  .tip{
    padding-top: 1em;
    text-align: center;
    font: var(--font);
    font-size: 14px;
    color: #4e4b4c;
  }
}
</style>
