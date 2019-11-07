<template>
  <div class="new-item">
    <h2>Aouter un nouveau Lot #{{ $route.params.id }}</h2>
    <form class="mt-3" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control"  v-model="desc" id="description" rows="3"></textarea>
      </div>
      <button class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateItem',
  data () {
    return {
      desc: '',
      title: ''
    }
  },
  methods: {
    onSubmit () {
      let itemEndPoint = '/items'
      axios.post(`${process.env.VUE_APP_API_BASE_URL}${itemEndPoint}`, {
        description: this.desc,
        saleId: parseInt(this.$route.params.id)
      }).then(response => {
        if (response.status === 201) {
          this.$router.push({ name: 'items', id: this.$route.params.id }, () => {
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
</style>
