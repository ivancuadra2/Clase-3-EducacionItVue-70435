<template>
    <nav class="bg-red-500" >
        <slot name="header"></slot>
    </nav>
    <div>
        Pagina en el medio
    </div>
    <footer style="background-color: green;">
        <slot name="footer"></slot>
    </footer>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  msg : {
    type: String,
    default:'Soy msg'
  }
})
</script>

<style>


</style>