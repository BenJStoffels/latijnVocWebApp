import {
    addToSelectedWords,
    changeCurrentWords,
    loadScene,
    reset,
    submitLearnForm
} from './VueFunctions/methods.js';

export default function createVue(main, selected) {
    return new Vue({
        el: '.mainApp',
        data: {
            showing: {
                main: true,
                learn: false
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