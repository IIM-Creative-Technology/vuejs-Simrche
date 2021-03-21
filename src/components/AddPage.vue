<template>
  <div>
    <h1><strong>Créer une nouvelle page de Blog</strong></h1>
    <div class="content">
      <div class="form">
        <div class="info">
          <label>Titre de la page</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="title">
        </div>

        <div class="info">
          <label>Meta title</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="metaTitle">
        </div>

        <div class="info">
          <label>Meta description</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="metaDesc">
        </div>

        <div class="info">
          <label for="content">Corps du post</label>
          <textarea name="content" id="text" cols="50" rows="10" v-model="content"></textarea>
        </div>

        <div class="info">
          <label for="content">Corps du post</label>
          <input type="text" name="img" placeholder="Link img" v-model="img">
        </div>

        <div>
          <p>Aperçu de l'image :</p>
          <img v-bind:src="img">
        </div>

        <input type="submit" name="" id="txt" v-on:click='newArticle()'>

        
      </div>
    </div>
  </div>
</template>
<script>
  export default {
        data() {
            return {
                title: '',
                metaTitle: '',
                metaDesc: '',
                content: '',
                img: '',
            }
        },
        methods: {
            newArticle() {
                this.$store.dispatch('addArticle', [this.title, this.metaTitle, this.metaDesc, this.content, this.img])
            },
        }
    }
</script>
<style scoped>
.content{
  display: flex;
justify-content: space-between;

}
.form{
  width: 50%;
}
.info{
  display: flex;

justify-content: center;
  margin: 5% 2% 3% 5%;
  align-items: center;
  width: 60%;

}
.img{
  width: 50%;

}

label{
  margin: 0 5%;
}
input{
  width: 60%;
  align-items: center;
  justify-content: center;
}
h1{
  margin-bottom: 5%;
  font-size: 2em;

}
img{
  border-radius: 80%;
  width: 20%;
  margin-bottom: 2%;

}
.upload{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>