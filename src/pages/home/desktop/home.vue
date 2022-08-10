<script lang="ts" setup>
import Cart from '@/modules/cart/ui/desktop/cart.vue'
import SportsMenu from '@/modules/sports-menu/ui/desktop/sports-menu.vue'
import Dashboard from '@/modules/dashboard/ui/desktop/dashboard.vue'
</script>

<template>
  <div class="home">
    <SportsMenu />
    <Dashboard />
    <Cart />
  </div>
</template>

<style lang="pcss">
.home {
  display: flex;
}
</style>
