<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>2. Описание игры</span>
    </div>
    <div class="toggle-body">
      <div class="word__title">Добавить свой текст</div>
      <textarea
        placeholder="Какое то описание игры"
        v-model="gameDescription"
        class="word-textarea"
      ></textarea>
    </div>
  </div>
</template>
<script setup>
import { useGameSettings } from "@/stores/GameSettings";
import { storeToRefs } from "pinia";
const store = useGameSettings();
const { gameDescription } = storeToRefs(store);
</script>
<style lang="scss"></style>
