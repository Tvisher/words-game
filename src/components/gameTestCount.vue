<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>4. Проверочные слова</span>
    </div>
    <div class="toggle-body">
      <div class="word__title">
        Сколько проверочных слов (попыток) дать игроку? Минимум 3, максимум 7.
      </div>
      <div class="counter-wrapper">
        <button class="minus-btn" @click="setTestCount('minus')"></button>
        <input
          v-model="testWordsCount"
          type="text"
          class="count-input"
          readonly
        />
        <button class="plus-btn" @click="setTestCount('plus')"></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGameSettings } from "@/stores/GameSettings";
import { storeToRefs } from "pinia";
const store = useGameSettings();
const { testWordsCount } = storeToRefs(store);

const setTestCount = (type) => {
  if (type === "plus") {
    if (testWordsCount.value < 7) {
      testWordsCount.value++;
    }
  }
  if (type === "minus") {
    if (testWordsCount.value > 3) {
      testWordsCount.value--;
    }
  }
};
</script>

<style lang="scss"></style>
