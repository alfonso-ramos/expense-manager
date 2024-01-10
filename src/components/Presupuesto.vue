<script>
export default {

}
</script>

<template>
    <form class="w-full">
        <div class="grid gap-5">
            <label class="text-3xl text-center text-blue" for="nuevo-presupuesto">Definir Presuepuesto</label>
            <input class="bg-gray rounded-xl border-none text-xl text-center " id="nuevo-presupuesto" type="number"
            placeholder="Añade tu presupuesto"
            >
        </div>
        <input class="bg-blue border-none p-[10px] text-center text-xl mt-5 text-white font-black w-full hover:bg-[#1048a4] cursor-pointer transition ease-in-out delay-30" type="submit" value="Definir Presupuesto">
    </form>
</template>


<style lang="scss" scoped></style>