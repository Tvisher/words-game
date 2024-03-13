<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>1. Заголовок игры</span>
    </div>
    <div class="toggle-body">
      <div class="word__title">
        Заголовок вашей игры который будет отображаться на странице
      </div>
      <textarea
        placeholder="Например: «Игра на знание корпоративных терминов»"
        v-model="gameTitle"
        class="word-textarea"
      ></textarea>
    </div>
  </div>
</template>
<script setup>
import { useGameSettings } from "@/stores/GameSettings";
import { storeToRefs } from "pinia";
const { gameTitle } = storeToRefs(useGameSettings());
</script>
<style lang="scss"></style>
