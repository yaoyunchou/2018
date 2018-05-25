<template>
  <section class="title-preview">
      <mt-cell v-if="bean.type==='company'" title="单位名称">{{bean.username}}</mt-cell>
      <mt-cell v-if="bean.type==='personal'" title="姓名">{{bean.username}}</mt-cell>
      <mt-cell v-if="bean.type==='company'" title="税号">{{bean.taxnum}}</mt-cell>
      <mt-cell title="手机号码">{{bean.mobile}}</mt-cell>
      <mt-cell title="邮箱">{{bean.email}}</mt-cell>
      <mt-cell v-if="bean.type==='company'" title="注册地址">{{bean.address}}</mt-cell>
      <mt-cell v-if="bean.type==='company'" title="电话号码">{{bean.telephone}}</mt-cell>
      <mt-cell v-if="bean.type==='company'" title="开户银行">{{bean.bank}}</mt-cell>
      <mt-cell v-if="bean.type==='company'" title="银行帐号">{{bean.account}}</mt-cell>
      <footer>
        <mt-button size="large" @click="save()">下一步</mt-button>
      </footer>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Cell, Field, Button } from 'mint-ui'
import ContextMixin from '@/components/ContextMixin'

const mintComponents = {}
mintComponents[Cell.name] = Cell
mintComponents[Field.name] = Field
mintComponents[Button.name] = Button
export default {
  mixins: [ContextMixin],
  metaInfo: {
    title: '发票抬头'
  },
  components: { ...mintComponents },
  data () {
    return {
      bean: {
        company: '',
        taxnum: '',
        mobile: '',
        email: '',
        address: '',
        tel: '',
        bank: '',
        account: '',
        product: '',
        amount: 0
      }
    }
  },
  computed: {
    ...mapState('title', ['current', 'loading', 'loadingTip'])
  },
  methods: {
    ...mapActions('title', ['getItem']),
    async save () {
      this.$router.push(`/make-step1/${this.$route.params.id}`)
    }
  },
  async mounted () {
    this.bean = await this.getItem(this.$route.params.id)
  }
}
</script>

<style lang="postcss">
@import "../assets/vars.css";
.title-preview {
  .mint-cell-wrapper {
    box-sizing: border-box;
    background:#fff;
    font: var(--font);
    background-size: 101% 3px;
    padding: 0;
  }
  .hr{
    background: #fff;
    padding:0 15px;
    &:before{
      content:'';
      height: 2px;
      display: block;
      background: #f5f5f5;
    }
  }
  .mint-cell-title {
    width:120px;
    flex: none;
    color:#c1c1c1;
    padding: 0 15px;
  }
  .mint-cell-value{
    color:#595758;
    padding: 0 15px;
  }
  .product-name{
    color:red;
  }
  .total{
    padding-right: 18px;
  }
  .amount{
    padding-right: 9px;
    color:red;
  }
  footer {
    padding: 23px 0;
    background: var(--gray);
    button{
      background:var(--vi);
      color:#fff;
      :border-radius:0;
    }
  }
}
</style>
