<template>
  <div class="words-creator" v-if="dataLoaded">
    <WordGameConstructor />
  </div>
</template>

<script setup>
import { useGameSettings } from "@/stores/GameSettings";
import WordGameConstructor from "./components/WordGameConstructor.vue";
import { ref } from "vue";
const store = useGameSettings();
const dataLoaded = ref(false);
store
  .getAppData()
  .then((response) => {
    dataLoaded.value = true;
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<style></style>
