<template>
  <div class="word__title">Введите слово</div>
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
const props = defineProps({
  wordData: Object,
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
  const nextInput = $event.target.nextSibling;
  if (nextInput.tagName == "INPUT" && value) {
    nextInput.focus();
  }
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

console.log(props.wordData);
</script>
<style lang="scss"></style>
