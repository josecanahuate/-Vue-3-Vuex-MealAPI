<template>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals" @change="searchMeals" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">

            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" 
                :alt="meal.strMeal" 
                class="rounded-t-xl h-48 w-full object-cover" />
            </router-link>

            <div class="p-3">
                <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                <p class="text-justify mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore neque, illum voluptate nesciunt, dolores aspernatur
                    repellat vel sunt.
                </p>
                <div class="gap-3 inline-block">
                    <YoutubeButton :href="meal.strYoutube" />
                    <router-link to="/"
                        class="px-3 py-2 rounded border-2 border-blue-600 bg-blue-500 hover:bg-blue-600 transition-colors">View
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import YoutubeButton from '../components/YoutubeButton.vue';
  
  const route = useRoute();
  const keyword = ref('');
  const store = useStore();
  const meals = ref([]);
  
  function searchMeals() {
    store.dispatch('searchMeals', keyword.value);
    // Actualiza la variable meals después de que la acción se haya completado
    store.watch(() => store.state.searchedMeals, (searchedMeals) => {
      meals.value = searchedMeals;
    });
  }

  //URL ALMACENA NOMBRE ALIMENTO INTRODUCIDO --> ACTUALMENTE NO FUNCIONA
  onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
  })
  </script>
  