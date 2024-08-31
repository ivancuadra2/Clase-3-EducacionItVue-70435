import { defineStore } from 'pinia'
import { instancia2 } from '@/plugins/AxiosMockApi';



export const useCarroStore = defineStore('carro', {
    state: () => ({ 
      count: 0, 
      name: 'Eduardo',
      carro : [],
      productos: [],

    }),
    getters: {
      getName: (state) => state.name,
      doubleCount: (state) => state.count * 2,
      getCarro : (state) => state.carro.map(item => ({id: item.id, title: item.title, price: item.price})),
      getCantidadEnCarro : (state) => state.carro.length,
      getTotal: (state) => state.carro.reduce((total, item ) => item.price + total, 0)
    },
    actions: {
      increment() {
        this.count++
      },
      editName( name ) {
        this.name = name
      },
      agregarProductoAlCarro (producto ) {
        console.log('Producto en el carro', producto)
        this.carro.push(producto)
      },
      async getProductos () {
        const { data } = await instancia2.get('/products')
        console.log('Data', data)
        this.productos = data
      }
    },
  })