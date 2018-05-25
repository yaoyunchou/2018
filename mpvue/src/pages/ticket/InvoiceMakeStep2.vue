<template>
  <section class="make-step2">
    <mt-cell v-if="title.type==='company'" title="单位名称">{{title.username}}</mt-cell>
    <mt-cell v-if="title.type==='personal'" title="姓名">{{title.username}}</mt-cell>
    <mt-cell v-if="title.type==='company'" title="税号">{{title.taxnum}}</mt-cell>
    <mt-cell title="手机号码">{{title.mobile}}</mt-cell>
    <mt-cell title="邮箱">{{title.email}}</mt-cell>
    <mt-cell v-if="title.type==='company'" title="注册地址">{{title.address}}</mt-cell>
    <mt-cell v-if="title.type==='company'" title="电话号码">{{title.telephone}}</mt-cell>
    <mt-cell v-if="title.type==='company'" title="开启银行">{{title.bank}}</mt-cell>
    <mt-cell v-if="title.type==='company'" title="银行账号">{{title.account}}</mt-cell>
    <div class="hr"></div>
    <mt-cell title="消费内容">
      <span class="product-name">{{order.goodsName}}</span>
    </mt-cell>
    <mt-cell title="开票金额">
      <span class="total">合计</span>
      <span class="amount">{{order.money}}</span>元</mt-cell>
    <footer>
      <mt-cell class="invoice-tip">已经创建，不能修改</mt-cell>
      <mt-button size="large" @click="save()">确定</mt-button>
    </footer>
  </section>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import {
  Cell,
  Field,
  Button,
  Toast
} from 'mint-ui'
import ContextMixin from '@/components/ContextMixin'

const mintComponents = {}
mintComponents[Cell.name] = Cell
mintComponents[Field.name] = Field
mintComponents[Button.name] = Button
export default {
  mixins: [ContextMixin],
  metaInfo: {
    title: '发票确认'
  },
  components: { ...mintComponents
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('make', {
      title: s => {
        return s.title || {}
      },
      order: s => {
        return s.order || {}
      }
    })
  },
  methods: {
    ...mapActions('title', ['getItem']),
    ...mapActions('make', ['getOrder', 'setTitle', 'makInvoice']),
    async save () {
      try {
        await this.makInvoice()
        this.$router.push('/make-step3')
      } catch (ex) {
        Toast({
          message: ex.message,
          position: 'bottom',
          duration: 3000
        })
      }
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
  .make-step2 {
    .mint-cell-wrapper {
      box-sizing: border-box;
      background: #fff;
      font: var(--font);
      background-size: 101% 3px;
      padding: 0;
    }
    .hr {
      background: #fff;
      padding: 0 15px;
      &:before {
        content: "";
        height: 2px;
        display: block;
        background: #f5f5f5;
      }
    }
    .mint-cell-title {
      width: 120px;
      flex: none;
      color: #c1c1c1;
      padding: 0 15px;
    }
    .mint-cell-value {
      color: #595758;
      padding: 0 15px;
    }
    .product-name {
      color: red;
    }
    .total {
      padding-right: 18px;
    }
    .amount {
      padding-right: 9px;
      color: red;
    }
    .invoice-tip {
      .mint-cell-title {
        display: none;
      }
      .mint-cell-wrapper {
        background: #f5f5f5;
      }
      .mint-cell-value {
        margin: 0 auto;
        &:before {
          content: "!";
          color: #fff;
          background: #ff002b;
          border-radius: 50%;
          width: 15px;
          height: 15px;
          display: block;
          margin-right: 7px;
          text-align: center;
        }
      }
    }
    footer {
      padding: 0 0 23px 0;
      background: var(--gray);
      button {
        background: var(--vi);
        color: #fff;
        : border-radius: 0;
      }
    }
  }

</style>
