<template>
  <div class="items row">
    <div class="col-12 col-md-3 mb-2">
      <router-link :to="{ name: 'create-item', id: $route.params.id}" class="card add-more pointer p-2">
        <img src="../../assets/img/plus.svg" class="card-img-top mx-auto my-auto" alt="Add icon" />
        <div class="card-info">
            Ajouter un nouveau Lot
        </div>
      </router-link>
    </div>
    <div class="col-md-3 col-12 mb-2" v-for="item in items" :key="item.id">
      <div class="card">
        <div class="card-body">
          <p class="card-text">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ItemsList',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    let itemsEndPoint = `/items?saleId=${this.$route.params.id}`
    axios.get(`${process.env.VUE_APP_API_BASE_URL}${itemsEndPoint}`).then(response => {
      this.items = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.card {
   min-height: 168px;
}
</style>
