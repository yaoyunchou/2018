<template>
  <section class="title-list">
    <section class="">
    <mt-cell  is-link v-for="item of items" :title="item.username" :key="item.id" :to="invoiceUrl(item)">
      <span></span>
    </mt-cell>
    <mt-cell is-link title="+ 添加发票抬头" to="/title-add">
      <span></span>
    </mt-cell>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Cell } from 'mint-ui'
import ContextMixin from '@/components/ContextMixin'

const mintComponents = {}
mintComponents[Cell.name] = Cell
export default {
  mixins: [ContextMixin],
  metaInfo: {
    title: '发票抬头'
  },
  components: {
    ...mintComponents
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('title', [
      'items',
      'pageNum',
      'pageSize',
      'total',
      'loading',
      'loadingTip'
    ])
  },
  methods: {
    ...mapActions('title', ['getList']),
    addTitle () {
      this.$router.push('/title-add')
    },
    invoiceUrl (item) {
      return '/title-preview/' + item.id
    }
  },
  async mounted () {
    await this.getList({ pageNum: 1, filter: '' })
    if (!this.items.length) {
      this.$router.push(`/title-add`)
    }
  }
}
</script>

<style lang="postcss">
@import "../assets/vars.css";
.title-list {
   .mint-cell-wrapper {
    box-sizing: border-box;
    background: #fff;
    border-bottom:var(--cell-border);
    font: var(--font);
    padding: 0;
  }
  .mint-cell-title {
    color:var(--color);
    padding: 0 calc(15/var(--basFont))rem;
  }

  .mint-cell:last-of-type .mint-cell-title{
    color: var(--vi);
  }
  .mint-cell:last-child {
    background: #fff;
  }
  .mint-cell-allow-right::after {
    border-color: var(--color);
    width: calc(10/var(--basFont))rem;
    height: calc(10/var(--basFont))rem;
  }
  .add .mint-cell-allow-right::after {
    display: none;
  }
}
</style>
