<template>
  <div class="words-creator">
    <WordGameConstructor />
  </div>
</template>

<script setup>
import { useGameSettings } from "@/stores/GameSettings";
import WordGameConstructor from "./components/WordGameConstructor.vue";

const store = useGameSettings();
store
  .getAppData()
  .then((response) => {
    console.log("Успех", response.data);
  })
  .catch((error) => {
    console.log("не успех", error);
  });
</script>

<style></style>
