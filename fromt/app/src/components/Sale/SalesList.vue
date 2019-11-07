<template>
  <div class="sales row">
    <div class="col-12 col-md-4 mb-2" v-if="withAddMore">
        <router-link :to="{name: 'create-sale' }" class="card add-more pointer p-2">
          <img src="../../assets/img/plus.svg" class="card-img-top mx-auto my-auto" alt="Add icon" />
          <div class="card-info">
            Ajouter une nouvelle vente
          </div>
        </router-link>
    </div>
    <div class="col-12 col-md-4 mb-2" v-for="sale in sales" :key="sale.id">
      <router-link :to="{ name: 'items', params: { id: sale.id }}" class="card">
        <img src="../../assets/img/home.svg" class="card-img-top mx-auto mt-2" alt="Sales icon" />
        <div class="card-body">
          <h5 class="card-title">{{sale.title}}</h5>
          <p class="card-text">{{sale.description}}</p>
          <div class="text-center">
            <a href="#" class="btn btn-primary mx-auto">Découvrir</a>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesList',
  props: {
    sales: Array,
    withAddMore: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card-img-top {
  max-width: 140px;
}
.add-more {
  height: 100%;
}
</style>
