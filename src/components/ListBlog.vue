<template>
<div id="containerEdit">
  <div id="listBlog">
    <div class="content" v-for="(articles, index) in this.$store.getters.Article" :key="(articles, index)" id="edit">
        <img v-bind:src="articles[4]">
        <div class="contentArticle">
            <h2>{{articles[0]}}</h2>
            <p>
              {{articles[3]}}
            </p>
        </div>
        <button v-on:click='editArticle(index)' class="button is-warning is-light">Edit</button>
        <button class="delete is-large" v-on:click="removeArticle(index)"></button>
    </div>
  </div>
  <div id="edit2">
      <edit-page v-if="editArt" :title='title' :metaTitle='metaTitle' :metaDesc='metaDesc' :content='content' :index='index' :img='img' @close='close'></edit-page>
  </div>
    
</div>

</template>
<style>

#edit2 {
  display: flex;
  justify-content: center;
  width: 50%;
}

#containerEdit {
  display: flex;
  justify-content: center;
}

#listBlog {
  width: 50%;
}

#listBlog div {
  width: 100%;
}

.content{
  display: flex;
  flex-direction: row;
  margin: 10%;
  border: solid 2px aqua;
  align-items: center;
}
img{
  width: 25%;
  margin: 3%;
}
p{
  width: 50%;
  margin: 3%;
}
button{
  margin: 3%;
}

.contentArticle{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script>
  import EditPage from "@/components/EditPage";
  export default {
    name: 'list-blog',
    data() {
      return {
        editArt: false,
        title: "",
        metaTitle: "",
        metaDesc: "",
        content: "",
        img: "",
        index: 0
      }
    },
    components: {EditPage},

    methods: {
      removeArticle(index) {
            this.$store.getters.Article.splice(index, 1)
      },
      editArticle(index) {
        console.log('salut')
        this.editArt = true
        this.$store.getters.Article[index]
        this.title = this.$store.getters.Article[index][0]
        this.metaTitle = this.$store.getters.Article[index][1]
        this.metaDesc = this.$store.getters.Article[index][2]
        this.content = this.$store.getters.Article[index][3]
        this.img = this.$store.getters.Article[index][4]
        this.index = index
      },
      close() {
        this.editArt = false
      }
    }
  }

  
</script>
