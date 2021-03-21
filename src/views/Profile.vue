<template>
    <section v-if="this.$store.getters.IsLogged === true">
        <h1>Profil | {{ this.$store.getters.Username }}</h1>
        <input type="submit" value="Se déconnecter" v-on:click='disconnect()'>
    </section>

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
  border-top: 1px solid black;
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
}

input {
    margin-top: 50px;
    cursor: pointer;
}

</style>
<script>
    export default {
        methods: {
            disconnect() {
                this.$store.commit('setUsername', '');
                this.$store.commit('log', false);
                this.$router.push({ name: 'Blog' });
            }
        }
    }

</script>