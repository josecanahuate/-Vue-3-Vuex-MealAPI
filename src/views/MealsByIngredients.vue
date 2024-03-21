<template>
    <div class="p-8 pb-0" v-if="ingredient">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
      <Meals :meals="meals" />
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, watch } from "vue";
  import { useRoute } from "vue-router";
  import store from "../store";
  import Meals from '../components/Meals.vue'
  
  const route = useRoute();
  const ingredient = computed(() => store.state.ingredient)
  const meals = computed(() => store.state.mealsByIngredient)
  
  onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
  })
  
  watch(() => store.state.ingredient, (newValue) => {
    if (newValue) {
      // Si ingredient es diferente de undefined, actualizamos el componente
      meals.value = store.state.mealsByIngredient;
    }
  })
  </script>
  