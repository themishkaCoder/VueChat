import all_articles from "./content"

var app = new Vue({
    el: "#app",
    data: {
        info: all_articles.article_first
    }
})