<template>
    <div>
        <h1><strong>Se connecter</strong></h1>

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

        <input type="submit" v-on:click='log()' value="Connexion" id="login">

        <router-link to="/register" class="router">Créer un compte</router-link>

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
        log() {
            if(this.$store.getters.User[0]) {

                this.$store.getters.User.forEach(element => {
                    if(element[0] === this.username && element[1] == this.password) {
                        this.$store.commit('setUsername', this.username);
                        this.$store.commit('log', true);
                        this.$router.push({ name: 'Blog' });
                    }
                });
            }
            else {
                alert('Il faut créer un compte !');
            }

            
        },
    }
}
</script>