<template>
  <div class="container">
    <Products />
    <Cart />
  </div>
</template>

<script>
import Products from '../Products'
import Cart from '../Cart'

export default {
    name: 'Home',
    components: {
        Products,
        Cart
    }
}
</script>

<style>

</style>