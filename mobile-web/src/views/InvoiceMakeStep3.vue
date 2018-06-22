<template>
<div class="make-step3">
  <div class="icon"></div>
  <div class="tip">你的开票申请受理成功</div>
  <div class="remark">注：你可以通过电子邮箱或者短信进行查看</div>
</div>
</template>

<script>
import ContextMixin from '@/components/ContextMixin'
export default {
  mixins: [ContextMixin],
  metaInfo: {
    title: ' '
  }
}
</script>

<style lang="postcss" scoped>
@import "../assets/vars.css";

.make-step3{
  display: flex;
  flex-direction: column;
  align-items: center;
  font:var(--font);
  font-size: 15px;
  color:var(--color);
  .icon{
    background: url(../assets/success.png) no-repeat;
    background-size:cover;
    width: 45px;
    height: 45px;
    margin-bottom:25px;
  }
  .remark{
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    height: 45px;
    background-color: #fff;
    width: 100%;
  }
}
</style>
