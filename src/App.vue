<script setup>
import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import layout1 from './layout/layout1.vue';
import NavbarCart from './components/NavbarCart.vue'

const route = useRoute()
const router = useRouter()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})

</script>

<template>
  
  <h1>Bienvenido a Aplicacion task todo!</h1>
  <main>
    <NavbarCart />
    <RouterView />
  </main>
  
</template>

<style scoped>


</style>
