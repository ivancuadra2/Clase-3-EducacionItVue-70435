<template>
    <div>
        Pagina usuarios
        Params : {{ params.id }}
        <button @click="getProductosAxios" class="bg-red-500 m-2" > Get productos</button>
        <button @click="postProducto" class="bg-teal-500 m-2"> Post producto</button> 
        <button @click='updateProducto' class="bg-teal-500 m-2"> Update producto </button>      
        <button @click="dialog = true"> Abrir modal</button>
        <h5> Productos : </h5>
        <div v-for="producto in productos" class="m-2 bg-teal-500">
            {{ producto.name }}
            {{ producto.id }}
            <img :src="producto.avatar" width="100px"> 
            <button @click="handleBotonSeleccionarUsuario(producto)">
                Seleccionar usuario
            </button>
        </div>
        <img v-if="productos.length !== 0" :src="productos[0].avatar" alt="">
    </div>
    <Modal v-if="dialog" :usuario="usuarioSeleccionado">
        <button @click="dialog=false" >Cerrar Modal</button>
    </Modal>
</template>
<script setup>
import { useRoute } from 'vue-router'

import { ref, onMounted } from 'vue'

import Modal from '../components/Modal.vue'
import { instance } from '@/plugins/AxiosMockApi';


onMounted (()=> {
    console.log('Mounted')
    getProductosAxios()
    }
)
const route = useRoute()
const params = ref(route.query)
const productos = ref([])
const dialog = ref(false)
const usuarioSeleccionado = ref(null)
const path = "/productos";
const body = {
    "name": "Ivan",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    "task": "Dar clase 2"}

const handleBotonSeleccionarUsuario = (usuario) => {
    console.log('Usuario', usuario)
    usuarioSeleccionado.value = usuario
    dialog.value = true
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



const getProductosAxios = () => {
    instance.get(path).then(res => console.log('Respuesta en el then : ' ,res))
    console.log('Respuesta sin await :')
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