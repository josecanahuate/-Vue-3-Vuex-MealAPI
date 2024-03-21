<!-- PARA LA BUSQUEDA POR LETRA -->
<template>
    <div>
        <!-- Filter by Letter-->
        <div class="flex justify-center gap-2 mt-2">
            <!-- Filter by Letter, al presionar cualquier letra debe enviarse a su correspondiente vista-->
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>


<script setup>
const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split("");

</script>