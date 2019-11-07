<template>
  <div class="home">
    <sales-list :sales="sales" :withAddMore="true"></sales-list>
  </div>
</template>

<script>
import SalesList from '@/components/Sale/SalesList'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    SalesList
  },
  data () {
    return {
      sales: []
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
