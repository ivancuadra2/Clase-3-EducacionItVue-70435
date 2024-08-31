<template>
    <div class="bg-red-500">
        Pagina Productos
    </div>
    <!-- <button class="bg-green-500" @click="editName(nombreCopiado)">
        Guardar
    </button>
    <input type="text" v-model="nombreCopiado"> -->
    <!-- <router-link to="/usuarios?id=5"> To usuarios </router-link> -->
    <TarjetaProducto v-for="product in productos" :product="product"/>


</template>

<script setup>
import {ref, onMounted, onBeforeMount, onUpdated, onBeforeUnmount} from 'vue'
import TarjetaProducto from '@/components/TarjetaProducto.vue';
import { useCarroStore } from '@/stores/carro'
import { storeToRefs } from 'pinia'

const input = ref(null)
const texto = ref('')
const store = useCarroStore()

const { getName, doubleCount, productos } = storeToRefs(store)
const { increment, editName, getProductos } = store

console.log('get name', getName)
const nombreCopiado = ref(getName.value)



onMounted( () => {
    getProductos()
})




const exampleProduct = ref({
    "id": 2,
    "title": "nuevo titulo",
    "price": 1000,
    "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
    "images": [
        "https://i.imgur.com/1twoaDy.jpeg",
        "https://i.imgur.com/FDwQgLy.jpeg",
        "https://i.imgur.com/kg1ZhhH.jpeg"
    ],
    "creationAt": "2024-08-30T16:53:25.000Z",
    "updatedAt": "2024-08-31T03:27:19.000Z",
    "category": {
        "id": 1,
        "name": "Groceries",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-08-30T16:53:25.000Z",
        "updatedAt": "2024-08-30T23:08:02.000Z"
    }
})

// https://api.escuelajs.co/api/v1/products
// https://api.escuelajs.co/api/v1/products/id
// https://api.escuelajs.co/api/v1/products?offset=0&limit=10


</script>
