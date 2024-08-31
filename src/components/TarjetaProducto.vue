<template>
    <div class="product-card">
      <div class="product-image">
        <img :src="product.images[0]" :alt="product.title">
      </div>
      <div class="product-info">
        <h2>{{ product.title }}</h2>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ truncatedDescription }}</p>
        <p class="category">Categoría: {{ product.category.name }}</p>
        <button @click="agregarProductoAlCarro(product)" class="add-to-cart-btn">Agregar al carrito</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCarroStore } from '@/stores/carro'
  const store = useCarroStore()
  const { agregarProductoAlCarro } = store

  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['addToCart']);
  
  const truncatedDescription = computed(() => {
    return props.product.description.length > 100
      ? props.product.description.slice(0, 100) + '...'
      : props.product.description;
  });
  
  const addToCart = () => {
    emit('addToCart', props.product);
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .product-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .product-info {
    margin-top: 16px;
  }
  
  h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  
  .price {
    font-weight: bold;
    color: #e44d26;
    margin-bottom: 8px;
  }
  
  .description {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 8px;
  }
  
  .category {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 16px;
  }
  
  .add-to-cart-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  </style>