<template>
  <div>
    <div class="btn">
  <button class="button is-warning"><router-link to="/newpage">Créer une page</router-link></button>
    </div>
<list-blog></list-blog>
  </div>
</template>
<script>

import ListBlog from "@/components/ListBlog";
 export default {
   components: {ListBlog}
 }
</script>
<style>
.btn{
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}


</style>