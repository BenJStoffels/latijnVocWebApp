import {
    addToSelectedWords,
    changeCurrentWords,
    loadScene,
    reset,
    submitLearnForm
} from './VueFunctions/methods.js';

export default function createVue(main, selected, verbuigingen) {
    return new Vue({
        el: '.mainApp',
        data: {
            showing: {
                main: true,
                learn: false,
                verbuiging: false
            },
            mainWindow: {
                main,
                selected
            },
            learnWindow: {
                currentWord: null,
                currentIndex: -1,
                response: {
                    class: 'hiding',
                    innerHTML: ''
                }
            },
            verbuigingWindow: {
                verbuigingen
            },
            curwords: [...main]
        },
        methods: {
            addToSelectedWords,
            changeCurrentWords,
            loadScene,
            reset,
            submitLearnForm
        }
    });
}