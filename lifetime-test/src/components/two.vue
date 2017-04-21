<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <form>
      <label>2.你是否已婚？</label>

      <div id="" class="">
        <input type="radio" id="0" value="0" v-model="$store.state.q2.value">
        <label for="0">a.已婚（+3）；</label>
        <br>
        <input type="radio" id="1" value="1" v-model="$store.state.q2.value">
        <label for="1">b.未婚（-1）； </label>
        <br>
        <input type="radio" id="2" value="2" v-model="$store.state.q2.value">
        <label for="2">c.恋爱中（-2）</label>
        <br>
        <span>Picked: {{ $store.state.q2.score[$store.state.q2.value] }}</span>
      </div>
      q2value: {{ $store.state.q2.value }} 
      addon: {{ $store.state.q1.score[$store.state.q1.value] + $store.state.q2.score[$store.state.q2.value] }}
    </form>
    <router-link to="/one">Go to 1</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'two',
  data () {
    return {
      msg: '222'
    }
  },
  methods: mapActions([
    'valueChange'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
