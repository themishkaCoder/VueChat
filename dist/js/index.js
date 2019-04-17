import all_articles from "./content.js";
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'

new Vue({
    el: "#app",
    data: {
        info: all_articles.article_first.title,
        menu:{
            main: "Main",
            help: "Help"
        }
    }
})

Vue.component("button-counter",{
    // data: function(){
    //     return{
    //         count: 0
    //     }
    // },
    name: "button-counter",
    template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
})
