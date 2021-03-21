<template>
    <list-blog-2></list-blog-2>
</template>
<style scoped>
.content{
  display: flex;
  flex-direction: row;
  margin: 10%;
  border: solid 2px aqua;
  align-items: center;
  text-align: center;
}
img{
  width: 25%;
  margin: 3%;
}
p{
  width: 50%;
  margin: 3%;
  text-align: center;
}
button{
  margin: 3%;
}

.contentArticle{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;

}
</style>
<script>
import ListBlog2 from '../components/ListBlog2.vue'
export default {
  components: { ListBlog2 },
  //data(){
    //return{
      //articleTitle:this.$route.params.title,
    //}
  //},
  //methods:{
//destination(){
  //return store.articles.find({
    //destination => destination.title === this.articleTitle
  //})
}
</script>