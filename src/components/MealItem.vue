<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">{{ truncateInstructions(meal.strInstructions, 20) }}</p>
      <div class="flex items-center justify-between">
        <!-- Otro contenido si es necesario -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
});

// Función para truncar las palabras
function truncateInstructions(instructions, maxLength) {
  if (!instructions) return '';
  return instructions.split(' ').slice(0, maxLength).join(' ') + '...';
}
</script>
