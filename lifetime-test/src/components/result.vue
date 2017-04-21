<template>
  <div>
    <h3>result: {{$store.state.total.score}} </h3>
    <p>score: {{score}}</p>

    <p v-if="$store.state.total.score <= -11">-46到-11：not good</p>
    <p v-else-if="$store.state.total.score <= 7">-10到7：soso</p>
    <p v-else>8到26：good</p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default{
    name: 'result',
    data () {
      return {
        score: this.$store.state.total.score
      }
    },
    methods: {
      nextpage: function(ev){
        console.log(ev)
        router.push({ name: 'question', params: { id: (parseInt(ev) + 1) }})
      },
      ...mapActions([
        'valueChange'
      ])
    }
  }
</script>

<style scoped>

</style>