<template>
    <div class="flex flex-col p-8">
        <div class="items-center justify-center">
            <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals" />
        </div>
        <!-- Filter by Letter-->
        <div class="flex justify-center gap-2 mt-2">
                    <!-- Filter by Letter, al presionar cualquier letra debe enviarse a su correspondiente vista-->
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>

        <!-- MUESTRA TODOS LOS INGREDIENTES-->
        <pre> {{ ingredients }}</pre>
    </div>



</template>


<script setup>
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';

const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split("");
const ingredients = ref([]);

//LISTAR TODOS LOS INGREDIENTES
onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data);
    ingredients.value = response.data;
});
</script>


