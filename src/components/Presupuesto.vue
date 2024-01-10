<script setup>
    import { ref } from 'vue';
    import Alerta from './Alerta.vue' 

    const presupuesto = ref(0)
    const error = ref('')

    const emit = defineEmits(['definir-presupuesto'])

    const definirPresupuesto = () => {
        if (presupuesto.value <= 0 || presupuesto.value === ''){
            error.value = 'Presupuesto no valido'

            setTimeout(() => {
                error.value = ''
            }, 3000)
            return
        }

        emit('definir-presupuesto', presupuesto.value)
    }
</script>

<template>
    <form 
        class="w-full"
        @submit.prevent="definirPresupuesto"
        >
        <Alerta v-if="error">
            {{ error }}
        </Alerta>
        <div class="grid gap-5">
            <label class="text-3xl text-center text-blue" for="nuevo-presupuesto">Definir Presuepuesto</label>
            <input 
                v-model='presupuesto'
                class="bg-gray rounded-xl border-none text-xl text-center" 
                id="nuevo-presupuesto" 
                placeholder="Añade tu presupuesto"
                type="number"
                min="0"
            >
        </div>
        <input class="bg-blue border-none p-[10px] text-center text-xl mt-5 text-white font-black w-full hover:bg-[#1048a4] cursor-pointer transition ease-in-out delay-30" type="submit" value="Definir Presupuesto">
    </form>
</template>

