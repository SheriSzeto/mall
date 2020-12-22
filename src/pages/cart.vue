<template>
  <div>
    cart
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import orderHeader from '@/components/OrderHeader'
import navFooter from '@/components/NavFooter'

export default {
  name: 'cart',
  components: {
    orderHeader,
    navFooter
  }

}
</script>
