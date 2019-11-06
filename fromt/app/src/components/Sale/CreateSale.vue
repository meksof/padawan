<template>
  <div class="new-sale">
    <h2>Aouter une nouvelle vente</h2>
    <form class="mt-3" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Titre</label>
        <input type="text" v-model="title" class="form-control" id="title" aria-describedby="titreHelp" placeholder="Belle vente d'instruments de musiques">
      </div>
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
  name: 'CreateSale',
  data () {
    return {
      desc: '',
      title: ''
    }
  },
  methods: {
    onSubmit () {
      let salesEndPoint = '/sales'
      axios.post(`${process.env.VUE_APP_API_BASE_URL}${salesEndPoint}`, {
        title: this.title,
        description: this.desc
      }).then(response => {
        if (response.status === 201) {
          this.$router.push({ name: 'home' }, () => {
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
