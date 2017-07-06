<template>
  <div>
    <h3>store-result: {{$store.state.total.score}} </h3>
    <p>你的得分是: {{score}}</p>

    <p v-if="!$store.state.total.score">还没答完所有题目</p>
    <p v-else-if="$store.state.total.score <= -11">-46到-11：健康状况已经达到令人担忧的状况了，最好不要承担繁重的工作，否则会使你的健康状况雪上加霜。平时应注意睡眠质量，多吃水果、蔬菜及蛋白质类食物，合理补充维生素及矿物质。</p>
    <p v-else-if="$store.state.total.score <= 7">-10到7：健康状况一般，容易疲倦，体力不支，不太适宜紧张而又强度大的工作，否则健康状况会下降。注意改善日常生活习惯，均衡饮食，适当补充维生素和矿物质。</p>
    <p v-else>8到26：健康状况良好，精力充沛，充满活力，能够适应紧张而又强度大的工作。</p>

    <p v-if="!$store.state.total.score"></p>
    <p v-else>亚洲男性平均寿命设定为73岁，女性平均寿命为76岁，用这个数字加上你所得分数，就是你的寿命。请自己对号入座吧。</p>

    <router-link to="/" @click.native="$store.state.bottomNav = 'recents'">
      <p>回到首页</p>
    </router-link=>
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
.demo-paper {
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 20px;
  text-align: center;
}
</style>