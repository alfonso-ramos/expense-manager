<script setup>
    import {computed} from 'vue' 
    import cerrarModal from '../assets/img/cerrar.svg'

    const emit = defineEmits(['ocultar-modal'])
    const props = defineProps({
        modal: {
            type: Object,
            required: true
        }
    })

    const animar = computed(() => {
        return props.modal.animar === false
    })
</script>

<template>
    <div class="absolute w-full h-full top-0 left-0 right-0 bottom-0 modal">
        <div class="absolute right-7 top-7">
            <img class="w-7 cursor-pointer" :src="cerrarModal" 
            alt="cerrar modal" 
            @click="$emit('ocultar-modal')">
        </div>
        <!-- Contenedor del formulario -->
        <div 
            :class="[animar ? 'opacity-0' : 'opacity-1']" 
            class="w-[90%] min-w-48 mt-24 my-0 mx-auto bg-blue rounded-2xl p-8 transition-all duration-300 ease-in "
            >
            <form class="grid gap-5">
                <legend class="text-white text-center text-2xl font-semibold">Agregar gasto</legend>
                <div class="campo">
                    <label for="nombre" class="text-white text-2xl">Nombre Gasto</label>
                    <input type="text" id="nombre" placeholder="Introduce el nombre del gasto">
                </div>


                <div class="campo">
                    <label for="cantidad" class="text-white text-2xl">Cantidad</label>
                    <input type="text" id="cantidad" placeholder="Introduce la cantidad del gasto, ej. 300">
                </div>

                <div class="campo">
                    <label for="categoria" class="text-white text-2xl">Categoria</label>
                    <select 
                        class="bg-gray rounded-xl p-3 border-none text-xl"
                        id="cateforia">
                    <option value="">... Seleccione ...</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ccio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input class="bg-[#db2777] font-semibold text-white cursor-pointer" type="submit" value="Agregar Gasto">


            </form>
        </div>
    </div>
</template>


<style scoped>
.modal{
    background-color: rgb(0 0 0 / 0.8 );
}
.campo{
    display: grid;
    gap: 1.6rem;
}
select, input{
    border-radius: 1rem;
    padding: 1rem;
    border: none;
}
input[type="submit"]{
    border-radius: 1rem;
    padding: 1rem;
    border: none;
}
</style>