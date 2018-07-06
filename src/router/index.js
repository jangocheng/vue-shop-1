import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '../page/GoodsList'
import Cart from '../page/Cart'
import Address from '../page/Address'
import AddressList from '../page/AddressList'
import OrderConfirm from '../page/OrderConfirm'
import OrderSuccess from '../page/OrderSuccess'
import OrderList from '../page/OrderList.vue'
import GoodsDetails from '../page/GoodsDetails'
import Checkout from '../page/Checkout'
import About from '../components/About'
import Contact from '../components/Contact'
import store from '../store/index.js'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goodsdetails',
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      beforeEnter: (to, from, next) => {
        if(store.state.myName){
          store.state.buynowlist.splice(0,1)
          next()
        }
      }
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/addresslist',
      name: 'AddressList',
      component: AddressList
    },
    {
      path: '/orderconfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderinfo',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
