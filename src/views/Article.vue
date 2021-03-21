<template>

    <div class="content" id="edit">
        <img v-bind:src="this.$store.getters.Article[$route.params.id][4]">
        <div class="contentArticle">
            <h2>{{ this.$store.getters.Article[$route.params.id][0] }}</h2>
            <p>
                {{ this.$store.getters.Article[$route.params.id][3] }}
            </p>
        </div>
    </div>

</template>

<style>

</style>

<script>

</script>