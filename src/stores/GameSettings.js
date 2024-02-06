import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const wordsGameId = document.querySelector('#app').dataset.id;
export const useGameSettings = defineStore("GameSettings", () => {
    // state refs
    const wordsList = ref([
        {
            word: ["с", "л", "о", "в", "о",],
            theme: "Букварь какой нибудь",
            prompt: "Это бувально 'СЛОВО'"
        }
    ]);
    const gameDescription = ref('');
    // min 3 max 7
    const testWordsCount = ref(3);
    const backgroundUrl = ref('');
    const colors = ref(
        {
            borderColors: [],
            textColors: []
        }
    );
    const selectedColors = ref(
        {
            borderColor: null,
            textColor: null
        }
    )
    const additionalSettings = ref({
        limitPlayTime: {
            enable: true,
            // min 1 max 59
            minutesCount: 10,
        },
        allowReplay: true,
        disableRepeatUsername: true,

    });

    // getters


    // Actions


    const getAppData = async (timeFilter) => {
        return new Promise((resolve, reject) => {

        })
    };

    return {
        wordsList,
        gameDescription,
        testWordsCount,
        backgroundUrl,
        colors,
        selectedColors,
        additionalSettings,
    }
}) 