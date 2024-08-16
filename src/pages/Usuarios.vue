<template>
    <div>
        Pagina usuarios
        Params : {{ params.id }}
        <button @click="getProductos" > Get productos</button>
        <button @click="postProducto" > Post producto</button> 
        <button @click='updateProducto'> UPdate producto </button>      
        <h5> Productos : </h5>
        <!-- {{ productos }} -->
          Imagen
        <img v-if="productos.length !== 0" :src="productos[0].avatar" alt="">
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

onMounted (()=> {
    console.log('Mounted')
    getProductos()
}
    
)

const route = useRoute()
const params = ref(route.query)
const productos = ref([])
const url = "https://66b760587f7b1c6d8f1bb778.mockapi.io/api/v1/productos/";
const body = {
"name": "Ivan",
"avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
"task": "Dar clase 2"
}

const getProductos = async () => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        productos.value = json
        console.log('Response de el fetch :', json)
    } catch (error) {
        console.log('Error: ', error)
    }
}

const postProducto = async () => {
    try {
        const response = await  
        fetch(url, {
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(body)
        })
        const json = await response.json()

        console.log('Response del post', json)        
    } catch (error) {
        console.log('Error',error)
    }
}

const updateProducto = () => {
    fetch(url + '/62', {
        method:'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({'task': 'Otra tarea'})
    })
    .then(response => response.json())
    .then(data=> console.log('Data: ',data))


}


</script>