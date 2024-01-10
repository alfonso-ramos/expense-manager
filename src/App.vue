<script setup>
  import { ref } from 'vue';
  import Presupuesto from './components/Presupuesto.vue'

  const presupuesto = ref(0)

  const definirPresupuesto = (cantidad) => {
    presupuesto.value = cantidad
  }
</script>

<template>
  <div>
    <header class="bg-blue">
      <h1 class="py-5 m-0 text-white text-center text-4xl font-black">Planificador de Gastos
      </h1>
      <div class="w-[90%] max-w-3xl mx-auto -mt-[50px] translate-y-[50px] p-[50px] shadow-2xl bg-white rounded-xl">
        
        <Presupuesto 
        v-if="presupuesto === 0"
        @definir-presupuesto='definirPresupuesto'
        />
        <p v-else>Hola</p>
      </div>
    </header>

  </div>
</template>

<style>
  /* html{
    box-sizing: border-box;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  } */
  body{
    background-color: #f5f5f5;
  }
</style>