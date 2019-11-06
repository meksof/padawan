<template>
  <div class="search">
    <div class="row">
      <div class="offset-6 col-6">
        <input class="form-control" type="text" placeholder="Ma belle vente" id="search-input">
      </div>
    </div>
    <sales-list :sales="sales"></sales-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
    }
  },
  mounted () {
    let salesEndPoint = '/sales'
    axios.get(`${process.env.VUE_APP_API_BASE_URL}${salesEndPoint}`).then(response => {
      this.sales = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
