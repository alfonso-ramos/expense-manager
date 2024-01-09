<script setup>
 import Presupuesto from './components/Presupuesto.vue'
</script>

<template>
  <div>
    <header class="bg-blue">
      <h1 class="py-2 m-0 text-white text-center text-4xl font-black">Planificador de Gastos
      </h1>
      <div class="w-[90%] max-w-3xl mx-auto -mt-[50px] translate-y-[50px] p-[50px] shadow-2xl bg-white">
        
        <Presupuesto 
        />
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