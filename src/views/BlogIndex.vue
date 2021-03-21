<template>
<div>
<div>
  <!-- <img class="imgArticle" v-bind:src="this.$store.getters.Article[0][4]"> -->
  <!-- <h2>{{this.$store.getters.Article[0][0]}}</h2> -->
</div>
<div>
  <p>
    <!-- {{this.$store.getters.Article[0][3]}} -->
  </p>
</div>
  <div class="bas_info">
    <div class="date_time">
      <h2 class="date"> {{ date }} </h2>
    </div>
    <div class="author">
      <img class="uiface" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ">
      <h4>ABBY GROSSEMERDE</h4>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "BlogIndex.vue",
  props: ['index'],
  computed: {
    date: function () {
      let current = new Date();
      let day = current.toLocaleString('default', {weekday: 'long'})
      let month = current.toLocaleString('default', {month: 'long'})
      let date = current.getDate();
      let dateTime = day + ' ' + date + ' ' + month;

      return dateTime;
    },
  },
}
</script>

<style scoped>
 .imgArticle{
  width: 30%;
}
h2{
  padding: 2% 0;
}
p{
  width: 80%;

  margin: auto;
}
.uiface{
  border-radius: 100%;
  width: 100px;
}
h4{
  padding: 0 2%;
}
.author{
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 5% 0;
  width: 50%;
}
.bas_info{
  display: flex;

}
.date_time{
  margin: auto;
  width: 50%;
}
</style>