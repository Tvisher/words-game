<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>3. Проверочные слова</span>
    </div>
    <div class="toggle-body">
      <div class="word__title">
        Сколько проверочных слов (попыток) дать игроку? Минимум 3, максимум 7.
      </div>
      <div class="countere-wrapper">
        <button class="minus-btn" @click="setTestCount('minus')"></button>
        <input v-model="testCount" type="text" class="count-input" readonly />
        <button class="plus-btn" @click="setTestCount('plus')"></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGameSettings } from "@/stores/GameSettings";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const store = useGameSettings();
const { testWordsCount } = storeToRefs(store);

const testCount = ref(testWordsCount);
const setTestCount = (type) => {
  if (type === "plus") {
    if (testCount.value < 7) {
      testCount.value++;
    }
  }
  if (type === "minus") {
    if (testCount.value > 3) {
      testCount.value--;
    }
  }
};
</script>

<style lang="scss"></style>
