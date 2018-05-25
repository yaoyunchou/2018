<template>
  <div class="title-edit">
    <mt-cell title="类型" class="invoice-type">
      <section class="btn-types">
        <mt-button :class="'company'===bean.type&&'selected'" size="small" @click="setType('company')">单位</mt-button>
        <mt-button :class="'personal'===bean.type&&'selected'"  size="small" @click="setType('personal')">个人</mt-button>
      </section>
    </mt-cell>
    <template v-if="'company'===bean.type">
      <mt-field class="required" label="单位名称" :attr="{maxlength:150}" :state="state.usernameInvalid ?'error':''" placeholder="请准确填写抬头名称" :value ="bean.username" @input="updateField('username', $event)" v-on:blur="blur()"></mt-field>
      <mt-field class="required" label="税号" :state="state.taxnumInvalid?'error':''" placeholder="税务登记号" :value ="bean.taxnum" @input="updateField('taxnum', $event)"></mt-field>
      <mt-field class="required" label="手机号码" :state="state.mobileInvalid ?'error':''" placeholder="收票人手机号码" :value ="bean.mobile"  @input="updateField('mobile', $event)"  ></mt-field>
      <mt-field class="required" label="邮箱"  :state="state.emailInvalid ?'error':''" placeholder="收票单位电子邮箱" :value ="bean.email" @input="updateField('email', $event)" ></mt-field>
      <mt-field label="注册地址" :attr="{maxlength:150}" :state="state.addressInvalid ?'error':''" placeholder="收票单位注册地址" :value ="bean.address" @input="updateField('address', $event)"></mt-field>
      <mt-field label="电话号码" :state="state.telInvalid ?'error':''" placeholder="收票单位电话号码" :value ="bean.telephone"  @input="updateField('telephone', $event)"></mt-field>
      <mt-field label="开户银行" :attr="{maxlength:50}" :state="state.bankInvalid ?'error':''" placeholder="收票单位开户银行" :value ="bean.bank" @input="updateField('bank', $event)" ></mt-field>
      <mt-field label="银行账号" :attr="{maxlength:20}" :state="state.accountInvalid ?'error':''" placeholder="收票单位银行账号" :value ="bean.account" @input="updateField('account', $event)"></mt-field>
    </template>
    <template v-else>
      <mt-field class="required" label="姓名" :state="state.usernameInvalid ?'error':''" :attr="{maxlength:100}" placeholder="请填写姓名" :value ="bean.username" @input="updateField('username', $event)" ></mt-field>
      <mt-field class="required" label="手机号码" :state="state.mobileInvalid ?'error':''" placeholder="请填写手机号码" :value ="bean.mobile" @input="updateField('mobile', $event)" ></mt-field>
      <mt-field class="required" label="邮箱"  :state="state.emailInvalid ?'error':''" placeholder="收票人电子邮箱" :value ="bean.email" @input="updateField('email', $event)"></mt-field>
    </template>
    <footer>
      <mt-button size="large" @click="save()">下一步</mt-button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import { Cell, Field, Button, Toast } from 'mint-ui'
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
        type: 'company',
        username: '',
        taxnum: '',
        mobile: '',
        email: '',
        address: '',
        telephone: '',
        bank: '',
        account: ''
      },
      state: {
        'usernameInvalid': false,
        'taxnumInvalid': false,
        'mobileInvalid': false,
        'emailInvalid': false,
        'addressInvalid': false,
        'telInvalid': false,
        'bankInvalid': false,
        'accountInvalid': false,
        'isInvalid': false
      }
    }
  },
  computed: {
    ...mapState('title', [
      'items',
      'pageNum',
      'pageSize',
      'total',
      'loading',
      'loadingTip'
    ]),
    ...mapGetters('title', ['usernameInvalid', 'taxnumInvalid', 'mobileInvalid', 'emailInvalid', 'addressInvalid', 'telInvalid', 'bankInvalid', 'accountInvalid', 'isInvalid'])
  },
  methods: {
    ...mapActions('title', ['getList', 'saveNew', 'setCurrent']),
    ...mapMutations('title', ['UPDATE_CURRENT']),
    setType (type) {
      this.bean.type = type
    },
    updateField (key, val) {
      this.UPDATE_CURRENT({key, val})
      this.state[key + 'Invalid'] = this[key + 'Invalid']
    },
    async save () {
      if (!this.isInvalid) {
        try {
          let result = await this.saveNew(this.bean)
          this.$router.push('/make-step1/' + result.id)
        } catch (ex) {
          Toast({
            message: ex.message,
            position: 'bottom',
            duration: 3000
          })
        }
      } else {
        Toast({
          message: '发示抬头填写有误',
          position: 'bottom',
          duration: 3000
        })
      }
    }
  },
  async mounted () {
    this.setCurrent(this.bean)
  }
}
</script>

<style lang="postcss">
@import "../assets/vars.css";
.title-edit{
  background:var(--gray);
  .mint-cell{
    color:var(--color);
    margin-bottom: 23px;
    &:first-of-type .mint-cell-wrapper{
      background: var(--gray);
    }
  }
  .mint-cell-title{
    width: 120px;
    flex:none;
  }
  .btn-types{
   // width: 260px;
    button{
      margin-right:15px;
      :border-radius:0;
      width:80px;
      border: 1px solid #4e4c4d;
      &.selected{
        background: #c4c4c4;
      }
    }
  }
  footer{
    padding-bottom: 23px;
    background: var(--gray);
    button{
      background:var(--vi);
      color:#fff;
      :border-radius:0;
    }
  }
  .mint-cell-wrapper{
    background:#fff;
    padding-left: 0;
  }
  .mint-cell-title:before{
    content:" ";
    float: left;
    width:1rem;
    margin: 0.3rem 0 0 0 ;
  }
  .required .mint-cell-title:before{
    content:"*";
    color:red;
    float: left;
    width:1rem;
    text-align: center;
    margin: 0.3rem 0 0 0 ;
  }
}
</style>
