<template>
  <div>

    <div class="content">
      <h1><strong>Modifier la page</strong></h1>
      <div class="form">
        <div class="info">
          <label>Titre de la page</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="titleMod">
        </div>

        <div class="info">
          <label>Meta title</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="metaTitleMod">
        </div>

        <div class="info">
          <label>Meta description</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="metaDescMod">
        </div>

        <div class="info">
          <label for="content">Corps du post</label>
          <textarea name="content" id="text" cols="50" rows="10" v-model="contentMod"></textarea>
        </div>

        <div class="info">
          <label for="content">Corps du post</label>
          <input type="text" name="img" placeholder="Link img" v-model="imgMod">
        </div>
      </div>

      <input type="submit" name="" id="validate" v-on:click='modifyArticle(index)'>
      <button class="button is-primary" v-on:click='close'>Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "EditPage.vue",
    props: ['title', 'metaTitle', 'metaDesc', 'content', 'img', 'index'],
    data() {
      return {
        titleMod: this.title,
        metaTitleMod: this.metaTitle,
        metaDescMod: this.metaDesc,
        contentMod: this.content,
        indexMod: this.index,
        imgMod: this.img
      }
    },
    methods: {
        modifyArticle(index){
          this.$store.getters.Article.splice(index, 1, [this.titleMod, this.metaTitleMod, this.metaDescMod, this.contentMod, this.imgMod])
          this.$emit('close')
        },
        close() {
          this.$emit('close')
        }
    }
}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
}
#txt{
  margin: 5px 0;
}
.content{
  width: 100%;
  margin: 10px 20px;
  border: none;
}
.input{
  width: 50%;
  margin: auto;
}
img{
  margin: auto;
}
</style>