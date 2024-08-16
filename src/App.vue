<script setup>
import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import layout1 from './layout/layout1.vue';

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
  
  <h1>Hello App!</h1>
  Search : {{search}}
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink class="bg-blue-500 m-3" to="/">Go to Home</RouterLink>
    <RouterLink class="bg-blue-500 m-3" to="/about">Go to About</RouterLink>
    <RouterLink class="bg-blue-500 m-3" to="/usuarios">Go to Usuarios</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  
  <!-- <h1 class="bg-gray-700">
    Color gris
  </h1>
  <layout1 msg='Mi mensaje' class="bg-red-500">
    <template v-slot:footer>
      <h1>
        Soy el header
      </h1>
    </template>

    <template >
      <h1>
        Soy el footer
      </h1>
    </template>
  </layout1> -->
  
  
</template>

<style scoped>


</style>
