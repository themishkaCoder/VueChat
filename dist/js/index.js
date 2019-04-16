import all_articles from "./content.js";


var app = new Vue({
    el: "#app",
    data: {
        info: all_articles.article_first.title,
        menu:{
            main: "Main",
            help: "Help"
        }
    }
})

