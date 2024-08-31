<template>
    <nav class="navbar">
      <div class="navbar-brand">Mi Tienda</div>
      <div class="navbar-cart" @click="toggleCart">
        🛒 {{ getCantidadEnCarro }}
        <div v-if="showCart" class="cart-dropdown">
          <h3>Carrito de Compras</h3>
          <ul v-if="getCantidadEnCarro">
            <li v-for="item in getCarro" :key="item.id">
              {{ item.title }} - ${{ item.price }}
            </li>
          </ul>
          <p v-else>El carrito está vacío</p>
          <p>Total: ${{ getTotal }}</p>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useCarroStore } from '@/stores/carro'
  import { storeToRefs } from 'pinia'
  const showCart = ref(false)


  const cartItems = ref([
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
  ])

  

  const store = useCarroStore()
  const { getTotal, getCarro, getCantidadEnCarro } = storeToRefs(store)

  const cartItemCount = computed(() => cartItems.value.length)
  
  const cartTotal = computed(() => 
    cartItems.value.reduce((total, item) => total + item.price, 0)
  )

  
  
  const toggleCart = () => {
    showCart.value = !showCart.value
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .navbar-cart {
    position: relative;
    cursor: pointer;
  }
  
  .cart-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    width: 250px;
    padding: 1rem;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  </style>