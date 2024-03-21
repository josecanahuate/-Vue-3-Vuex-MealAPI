<template>
    <div class="w-[800px] mx-auto p-8">
        <!-- <pre>{{ meal  }}</pre> --> 
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">

        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                Category: {{ meal.strCategory }}
            </div>

            <div>
                Area: {{ meal.strArea }}
            </div>

            <div>
                Tags: {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">
                Instructions: {{ meal.strInstructions }}
            </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="text-2xl font-semibold mb-3">
                <h2>Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                            {{ ind + 1}}. {{ meal[`strIngredient${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <YoutubeButton :href="meal.strYoutube" />
                <a :href="meal.strSource" target="_blank"
                    class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 transition-colors">
                    View Original Source
                </a>
            </div>
        </div>

        <div>
            <h2 class="text-2xl font-semibold mb-3">Measures</h2>
            <ul>
                <template v-for="(el, ind) of new Array(20)">
                    <li v-if="meal[`strMeasure${ind + 1}`]">
                        {{ ind + 1}}. {{ meal[`strMeasure${ind + 1}`] }}
                    </li>
                </template>
            </ul>
        </div>



    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient'
import { useRoute } from 'vue-router'
import YoutubeButton from '../components/YoutubeButton.vue';


const route = useRoute()
const meal = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {}
    })
})
</script>
