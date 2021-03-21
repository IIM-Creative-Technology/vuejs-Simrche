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
        <div>
            <router-link :to="'/article/' + index"><h2>Voir plus</h2></router-link>
        </div>
    </div>

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
  export default {
    name: 'list-blog-2',
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }

  
</script>
