<template>
  <div class="word__title-wrapper">
    <div class="word__title">Введите слово</div>
    <div
      :class="{ visible: wordsLength > 1 }"
      class="word__remove"
      @click="emit('wordRemove', wordData.id)"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1165_42936)">
          <path
            d="M13.625 1.875H10.838L10.5333 0.961313C10.4401 0.681239 10.2611 0.437625 10.0217 0.265061C9.78223 0.0924975 9.4945 -0.000245665 9.19934 4.88728e-07H6.80066C6.50546 -0.000195446 6.2177 0.0925603 5.97818 0.265111C5.73867 0.437661 5.55957 0.681246 5.46628 0.961313L5.16194 1.875H2.375C1.59956 1.875 0.96875 2.50581 0.96875 3.28125V4.21875C0.96875 4.74088 1.43878 4.6875 1.94322 4.6875H14.5625C14.8216 4.6875 15.0312 4.47784 15.0312 4.21875V3.28125C15.0312 2.50581 14.4004 1.875 13.625 1.875ZM6.15041 1.875L6.35572 1.25794C6.38684 1.16457 6.44657 1.08337 6.52643 1.02585C6.60629 0.968337 6.70224 0.937425 6.80066 0.9375H9.19934C9.40122 0.9375 9.58022 1.06613 9.64384 1.25794L9.84937 1.875H6.15041ZM2.02081 5.6875L2.76822 14.721C2.83459 15.4502 3.43656 16 4.16853 16H11.8315C12.5635 16 13.1654 15.4502 13.2323 14.7169L13.9793 5.6875H2.02081ZM5.65625 13.6563C5.65625 14.2742 4.71875 14.2767 4.71875 13.6563V7.09375C4.71875 6.47584 5.65625 6.47331 5.65625 7.09375V13.6563ZM8.46875 13.6563C8.46875 14.2742 7.53125 14.2767 7.53125 13.6563V7.09375C7.53125 6.47584 8.46875 6.47331 8.46875 7.09375V13.6563ZM11.2812 13.6563C11.2812 14.2742 10.3438 14.2767 10.3438 13.6563V7.09375C10.3438 6.83466 10.5534 6.625 10.8125 6.625C11.0716 6.625 11.2812 6.83466 11.2812 7.09375V13.6563Z"
            fill="#FA0056"
          />
        </g>
        <defs>
          <clipPath id="clip0_1165_42936">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  <div class="word__descr">
    Система автоматически посчитает буквы. Важно, что слово должно быть в
    толковом словаре.
  </div>
  <div class="word-letters">
    <input
      type="text"
      v-for="(num, index) in 12"
      :value="wordData.word[index]"
      class="letter-input"
      @input="editLetter($event, index)"
      @focus="focusInput"
      @keydown="handleKeyDown($event, index)"
    />
  </div>
  <div class="word__field">
    <div class="word__title">Указать тему загаданного слова</div>
    <textarea
      placeholder="Например: Производство"
      v-model="wordData.theme"
      class="word-textarea"
    ></textarea>
  </div>
  <div class="word__field">
    <div class="word__title">Укажите подсказку для слова</div>
    <textarea
      placeholder="Например: Производство"
      v-model="wordData.prompt"
      class="word-textarea"
    ></textarea>
  </div>
</template>
<script setup>
import { defineEmits, ref } from "vue";
const emit = defineEmits(["wordRemove"]);
const isKeyDownEvent = ref(false);
const props = defineProps({
  wordData: Object,
  wordsLength: Number,
});
const wordData = props.wordData;

const editLetter = ($event, index) => {
  let value = $event.target.value;
  value = value[value.length - 1];

  const russianLettersRegex = /^[а-яё]+$/i;
  if (!russianLettersRegex.test(value)) {
    value = "";
  }
  $event.target.value = value;
  wordData.word[index] = value;

  if (!isKeyDownEvent.value) {
    const nextInput = $event.target.nextSibling;
    if (nextInput.tagName == "INPUT" && value) {
      nextInput.focus();
    }
  }
  isKeyDownEvent.value = false;
};
const focusInput = (e) => {
  const target = e.target;
  if (!e.target.value) {
    const parentBlock = target.closest(".word-letters");
    const letterInputs = [...parentBlock.querySelectorAll(".letter-input")];
    const emptyLetter = letterInputs.find((letter) => !letter.value);
    emptyLetter.focus();
  }
};
const handleKeyDown = ($event, index) => {
  if ($event.keyCode === 8 && $event.target.value == "") {
    console.log("handleKeyDown");

    isKeyDownEvent.value = true;
    const prevInput = $event.target.previousSibling;
    if (prevInput.tagName == "INPUT") {
      prevInput.focus();
    }
  } else {
    isKeyDownEvent.value = false;
  }
};
</script>
<style lang="scss"></style>
