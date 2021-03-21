<template>
    <!-- <h2>ZBEUB ZBEUB ZBEUB ZBEUB {{ $route.params.id }} </h2> -->
    <!-- <div>
        <h1>{{ this.$store.getters.Article[$route.params.id][0] }}</h1>
        <h2>ZBEUB ZBEUB ZBEUB ZBEUB {{ $route.params.id }} </h2>
    </div> -->


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
export default {
    data() {
        return {
            pute: 'je suis une pute'
        }
    },
}
console.log('dzqdzdqzdz')
</script>