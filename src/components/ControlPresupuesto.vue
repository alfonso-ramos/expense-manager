<script setup>
    import imagen from '../assets/img/grafico.jpg'
    import {formatearCantidad} from '../helpers'

    const props = defineProps({
        presupuesto: {
            type: Number,
            required: true
        },
        disponible : {
            type: Number,
            required: true
        }
    })
</script>
<template>
    <div class="flex flex-col md:flex-row md:gap-10 md:items-center">
        <div>
            <img :src=imagen alt="">
        </div>
        <div class="w-full
        ">
            <button class="mt-8 mb-8 md:mb-4 bg-[#db2777] border-none p-2 w-full text-white font-black hover:pointer hover:bg-[#c11d67] transition ease-in-out delay-30 uppercase rounded-lg">Reset</button>
            <div class="text-2xl text-center md:text-left text-dark-gray">
                <p><span class="font-black text-blue">Presupuesto:</span>{{ formatearCantidad(presupuesto)  }}</p>
                <p><span class="font-black text-blue">Disponible:</span>{{ formatearCantidad(disponible)  }}</p>
                <p><span class="font-black text-blue">Gastado:</span>$ 0</p>
            </div>
        </div>
    </div>
</template>
