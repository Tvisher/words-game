<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>1. Слово</span>
    </div>
    <div class="toggle-body">
      <div class="word__container">
        <WordCreate
          v-for="(word, index) in wordsList"
          :key="word.id"
          :wordData="word"
          :wordsLength="wordsList.length"
          @wordRemove="wordRemove"
        />
        <button class="add-word" @click="addWord">
          Добавить слово
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="10"
              y1="4.94531"
              y2="4.94531"
              stroke="#FA0056"
              stroke-width="2"
            />
            <line
              x1="5"
              y1="10"
              x2="5"
              y2="4.61398e-08"
              stroke="#FA0056"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import WordCreate from "./WordCreate.vue";
import { useGameSettings } from "@/stores/GameSettings";
import { storeToRefs } from "pinia";
import { v4 as uuidv4 } from "uuid";

const store = useGameSettings();

const { wordsList } = storeToRefs(store);

const addWord = () => {
  wordsList.value.push({
    id: uuidv4(),
    word: [],
    theme: "",
    prompt: "",
  });
};

const wordRemove = (id) => {
  if (wordsList.value.length > 1) {
    wordsList.value = wordsList.value.filter((word) => word.id !== id);
  }
};
</script>
<style lang="scss"></style>
