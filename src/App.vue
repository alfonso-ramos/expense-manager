<script setup>
  import { ref, reactive } from 'vue';
  import Presupuesto from './components/Presupuesto.vue'
  import ControlPresupuesto from './components/ControlPresupuesto.vue';
  import iconoNuevoGasto from './assets/img/nuevo-gasto.svg'
  import Modal from './components/Modal.vue'

  const presupuesto = ref(0)
  const disponible = ref(0)

  const modal = reactive({
    mostrar: false,
    animar: false
  })

  const definirPresupuesto = (cantidad) => {
    presupuesto.value = cantidad
    disponible.value = cantidad
  }

  const mostrarModal = () => {
    console.log('Se activo el modal')
    modal.mostrar = true
    setTimeout(() => {
      modal.animar = true
    }, 300)
  }

  const ocultarModal = () => {
    console.log('Se desactivo el modal')
    modal.animar = false
    setTimeout(() => {
      modal.mostrar = false
  }, 300)
  }
</script>

<template>
  <div>
    <header class="bg-blue">
      <h1 class="py-5 m-0 text-white text-center text-4xl font-black">
        Planificador de Gastos
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
        <img 
          class="w-14 cursor-pointer" 
          :src=iconoNuevoGasto 
          alt="icono nuevo gasto"
          @click="mostrarModal"
          
          >
      </div>

      <Modal 
      v-if="modal.mostrar"
      @ocultar-modal="ocultarModal"
      :modal="modal"
      />
    </main>

  </div>
</template>

<style>
  body{
    background-color: #f5f5f5;
  }
</style>