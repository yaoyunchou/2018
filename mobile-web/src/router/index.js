import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

const Landing = () => import('@/views/Landing')
const InvoiceTitleList = () => import('@/views/InvoiceTitleList')
const InvoiceTitleEdit = () => import('@/views/InvoiceTitleEdit')
const InvoicePreview = () => import('@/views/InvoicePreview')
const InvoiceMakeStep1 = () => import('@/views/InvoiceMakeStep1')
const InvoiceMakeStep2 = () => import('@/views/InvoiceMakeStep2')
const InvoiceMakeStep3 = () => import('@/views/InvoiceMakeStep3')
const InvoiceTitlePreview = () => import('@/views/InvoiceTitlePreview')
const ErrorView = () => import('@/views/ErrorView')

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [{
    path: '/auth/:tempId',
    name: 'auth',
    component: Landing
  },
  {
    path: '/share/:id/:name',
    name: 'share',
    component: Landing
  }, {
    path: '/title',
    name: 'TitleList',
    component: InvoiceTitleList
  }, {
    path: '/title-add',
    name: 'TitleAdd',
    component: InvoiceTitleEdit
  }, {
    path: '/title-preview/:id',
    name: 'TitlePreview',
    component: InvoiceTitlePreview
  }, {
    path: '/title-edit',
    name: 'TitleEdit',
    component: InvoiceTitleEdit
  }, {
    path: '/preview/:id',
    name: 'Preview',
    component: InvoicePreview
  }, {
    path: '/make-step1/:id',
    name: 'MakeStep1',
    component: InvoiceMakeStep1
  }, {
    path: '/make-step2/:id',
    name: 'MakeStep2',
    component: InvoiceMakeStep2
  }, {
    path: '/make-step3',
    name: 'MakeStep3',
    component: InvoiceMakeStep3
  }, {
    path: '/error/:key',
    name: 'error',
    component: ErrorView
  }]
})
