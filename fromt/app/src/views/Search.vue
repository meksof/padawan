<template>
  <div class="search">
    <div class="row mb-5">
      <div class="offset-6 col-6">
        <div class="btn-group">
            <input class="form-control" v-on:keyup.enter="search()" v-model="searchKeyword" type="text" placeholder="Ma belle vente" id="search-input">
            <button class="btn btn-primary" id="search-btn" v-on:click="search()">OK</button>
        </div>
      </div>
    </div>
    <!-- Sales List -->
    <div v-if="filteredSales.length != 0">
      <h3 class="mb-3">Les ventes</h3>
      <sales-list :sales="filteredSales"></sales-list>
    </div>
    <!-- Items List -->
    <div v-if="filteredItems.length != 0">
      <h3 class="mb-3">Les Lots</h3>
      <div class="items row">
        <div class="col-md-3 col-12 mb-2" v-for="item in filteredItems" :key="item.id">
          <div class="card" >
            <div class="card-body">
              <p class="card-text">{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- No results -->
    <div class="bg-warning p-4 text-center" v-if="performedFilter == true && searchKeyword != '' && filteredItems.length == 0 && filteredSales.length == 0">
      <p style="color: white; font-size: 42px;">Pas de résultat</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SalesList from '@/components/Sale/SalesList'
export default {
  name: 'Search',
  components: {
    SalesList
  },
  data () {
    return {
      db: [],
      filteredSales: [],
      filteredItems: [],
      searchKeyword: '',
      performedFilter: false
    }
  },
  methods: {
    search () {
      // Filter Sales
      this.filteredSales = this.db.sales.filter(v => {
        return v.title.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) !== -1 || v.description.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) !== -1
      })
      // Filter Items
      this.filteredItems = this.db.items.filter(v => {
        return v.description.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) !== -1
      })
      // Persist search Action
      this.performedFilter = true
    }
  },
  mounted () {
    let baseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000'      
    let searchEndPoint = '/db' // Look into All ressources
    axios.get(`${baseUrl}${searchEndPoint}`).then(response => {
      this.db = response.data
    })
  }
}
</script>
