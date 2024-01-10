<script setup>
  import { ref } from 'vue';
  import Presupuesto from './components/Presupuesto.vue'
  import ControlPresupuesto from './components/ControlPresupuesto.vue';
  import iconoNuevoGasto from './assets/img/nuevo-gasto.svg'

  const presupuesto = ref(0)
  const disponible = ref(0)

  const definirPresupuesto = (cantidad) => {
    presupuesto.value = cantidad
    disponible.value = cantidad
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
        <ControlPresupuesto
        :presupuesto="presupuesto"
        :disponible="disponible"
        v-else/>
      </div>
    </header>
    
    <main v-if="presupuesto > 0">
      <div class="fixed bottom-12 right-12">
        <img class="w-14 cursor-pointer" :src=iconoNuevoGasto alt="icono nuevo gasto">
      </div>
    </main>

  </div>
</template>

<style>
  body{
    background-color: #f5f5f5;
  }
</style>