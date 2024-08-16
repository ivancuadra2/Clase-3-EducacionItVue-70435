<template>
    <div>
        Pagina home
        <button class="bg-teal-500" @click="irHaciaAbout"> Ir a la pagina about </button>
        <button class="bg-teal-500" @click="irHaciaAtras"> Ir hacia atras </button>
        <router-link to="/usuarios?id=5"> To usuarios </router-link>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const irHaciaAbout = () => {
    router.push('/about')
}

const irHaciaAtras = () => {
    router.back()
}


</script>