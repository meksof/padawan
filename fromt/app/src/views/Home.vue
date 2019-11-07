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
    let baseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000'      
    let salesEndPoint = '/sales'
    axios.get(`${baseUrl}${salesEndPoint}`).then(response => {
      this.sales = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
