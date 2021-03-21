<template>
  <CartBlog v-if="this.$store.getters.IsLogged === true"></CartBlog>
  <div v-else class="needLog">
    <h1>Connectez vous pour accéder à cette page</h1> <br>
    <router-link to="/login">Se connecter</router-link>
  </div>
</template>
<style scoped>
.needLog {
  border: 1px solid red;
  width: 50%;
  margin: 150PX auto;
  padding: 25px;
}

h1 {
  font-weight: bold;
  font-size: 30px;
}
</style>
<script>
import CartBlog from '@/components/CartBlog'
export default {
  components: {CartBlog}
}

</script>