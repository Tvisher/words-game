<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>7. Итог</span>
    </div>
    <div class="toggle-body">
      <div class="word__title">Форма текста после завершения игры</div>
      <textarea
        placeholder="Какое то описание игры"
        v-model="gameResultMessage"
        class="word-textarea"
      ></textarea>
    </div>
  </div>
</template>
<script setup>
import { useGameSettings } from "@/stores/GameSettings";
import { storeToRefs } from "pinia";
const { gameResultMessage } = storeToRefs(useGameSettings());
</script>
<style lang="scss"></style>
