<template>
  <section class="make-step1">
    <mt-cell title="消费内容"><span class="product-name">{{order.goodsName}}</span></mt-cell>
    <mt-cell title="开票金额"><span class="total">合计</span><span class="amount">{{order.money}}</span>元</mt-cell>
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
  components: { ...mintComponents },
  metaInfo: {
    title: '发票订单信息'
  },
  data () {
    return {
      product: '加页VIP版',
      amount: 20.9
    }
  },
  computed: {
    ...mapState('make', ['current', 'loading', 'loadingTip', 'order'])
  },
  methods: {
    ...mapActions('title', ['getItem']),
    ...mapActions('make', ['getOrder', 'setTitle', 'makInvoice']),
    async save () {
      this.$router.push(`/make-step2/${this.$route.params.id}`)
    }
  },
  async mounted () {
    let title = await this.getItem(this.$route.params.id)
    this.setTitle(title)
    this.getOrder()
  }
}
</script>

<style lang="postcss">
@import "../assets/vars.css";
.make-step1 {
  .mint-cell-wrapper {
    box-sizing: border-box;
    background:#fff;
    border-bottom:  var(--cell-border);
    font: var(--font);
    background-size: 101% calc(3/var(--basFont))rem;
    padding: 0;
  }
  .mint-cell-title {
    width:140px;
    color:var(--color);
    padding: 15px;
  }
  .mint-cell-value{
    padding: 0 15px;
  }
  .product-name{
    color:red;
  }
  .total{
    padding-right:18px;
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
