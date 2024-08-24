<template>
    <div>
        <input v-model="answer">
        <button class="bg-teal-500" @click="irHaciaAbout"> Ir a la pagina about </button>
        <button class="bg-teal-500" @click="irHaciaAtras"> Ir hacia atras </button>
        <router-link to="/usuarios?id=5"> To usuarios </router-link>
        <div> Autor : {{ author.name }}</div>
        <div> Tiene Libros : {{ tieneLibrosPublicados }}</div>
    </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue' 
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const author = ref({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const answer = ref('')


const tieneLibrosPublicados = computed(() => {
    author.value.name = 'Otro nombre'
    return author.value.books.length > 0 ? 'Yes' : 'No'} )
const cantidadDeCambios = ref(0)



watch(answer, (newValue, oldValue) => {
    console.log('New VALUE', newValue)
    console.log('Old value', oldValue)
    if (newValue.length > 2) console.log('Llamar a la api')
    // Llamar a la api
} )


const router = useRouter()
const irHaciaAbout = () => {
    router.push('/about')
}

const irHaciaAtras = () => {
    router.back()
}


</script>