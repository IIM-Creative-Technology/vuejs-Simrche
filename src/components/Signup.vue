<template>
    <div>
        <h1><strong>Créer un compte</strong></h1>

        <br><br>

        <div class="info">
            <label>Pseudo</label>
            <input type="text" class="input is-link" v-model="username">
        </div>

        <br><br>

        <div class="info">
            <label>Mot de passe</label>
            <input type="text" class="input is-link" v-model="password">
        </div>

        <br><br>

        <input type="submit" v-on:click='newUser()' value="Créer">

        <router-link to="/login" class="router">Se connecter</router-link>

    </div>
</template>


<style>
.info {
    width: 50%;
    margin: 0 auto;
}

.router {
    margin-left: 20px;
    font-style: italic;
}

</style>


<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        newUser() {
            this.$store.dispatch('addUser', [this.username, this.password]);
            this.$router.push({ name: 'Login' });
        },
    }
}
</script>