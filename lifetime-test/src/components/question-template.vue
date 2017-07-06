<template>
  <div class="hello">
    <mu-linear-progress mode="determinate" :max="18" :value="parseInt($route.params.id)"/>
    <!--<h1>{{ routerId }}</h1>-->
    <h2>route.params.id: {{ $route.params.id }}</h2>
    <!-- <h2>state: {{ $store.state[$route.params.id] }}</h2> -->
  
    <form @keyup.esc="nextpage($route.params.id);"
          @keyup.space="muta">
      <label>{{ $store.state[$route.params.id].title }}</label>
      <p>mutat: {{$store.state.count}}</p>
      <div id=""
           class=""
           @change="valueChange();">
  
        <!--<Radio-group v-model="$store.state[$route.params.id].value"
                     vertical>
          <Radio label="0">
            <span>{{$store.state[$route.params.id].option[0]}}</span>
          </Radio>
          <Radio label="1">
            <span>{{$store.state[$route.params.id].option[1]}}</span>
          </Radio>
          <Radio label="2"
                 v-if="$store.state[$route.params.id].option[2]">
            <span>{{$store.state[$route.params.id].option[2]}}</span>
          </Radio>
          <Radio label="3"
                 v-if="$store.state[$route.params.id].option[3]">
            <span>{{$store.state[$route.params.id].option[3]}}</span>
          </Radio>
          <Radio label="4"
                 v-if="$store.state[$route.params.id].option[4]">
            <span>{{$store.state[$route.params.id].option[4]}}</span>
          </Radio>
        </Radio-group>-->
  
        <input type="radio"
                         id="0"
                         value="0"
                         v-model="$store.state[$route.params.id].value">
                  <label for="0">{{$store.state[$route.params.id].option[0]}}</label>
                  <br>
                  <input type="radio"
                         id="1"
                         value="1"
                         v-model="$store.state[$route.params.id].value">
                  <label for="1">{{$store.state[$route.params.id].option[1]}}</label>
                  <br>
                  <span v-if="$store.state[$route.params.id].option[2]">
                    <input type="radio" id="2" value="2" v-model="$store.state[$route.params.id].value">
                    <label for="2">{{$store.state[$route.params.id].option[2]}}</label>
                    <br>
                    </span>
                  <span v-if="$store.state[$route.params.id].option[3]">
                    <input type="radio" id="3" value="3" v-model="$store.state[$route.params.id].value">
                    <label for="3">{{$store.state[$route.params.id].option[3]}}</label>
                    <br>
                    </span>
                  <span v-if="$store.state[$route.params.id].option[4]">
                    <input type="radio" id="4" value="4" v-model="$store.state[$route.params.id].value">
                    <label for="4">{{$store.state[$route.params.id].option[4]}}</label>
                    <br>
                    </span>
  
        <div>score: {{ $store.state[$route.params.id].score[$store.state[$route.params.id].value] }}</div>
        <!--<div>total: {{ $store.state.total.score }}</div>-->
      </div>
      <!--q1value: {{ $store.state[$route.params.id].value }} addon: {{ $store.state[0].score[$store.state[0].value] + $store.state[1].score[$store.state[1].value] }}-->
    </form>
    <router-link v-if="$store.state[$route.params.id].score[$store.state[$route.params.id].value] && $route.params.id < 17 "
                 :to="{ name: 'question', params: { id: (parseInt($route.params.id) + 1) }}">
      <!--<Button @click="nextQClick(true)">{{$route.params.id}}</Button>-->
      <mu-raised-button v-bind:label="'下一题' +　$route.params.id" class="demo-raised-button" primary/>
    </router-link>
    
    <router-link v-else-if="$store.state[$route.params.id].score[$store.state[$route.params.id].value] && $route.params.id == 17 "
                 to="/result"
                 v-on:click.native="gotoResult()">
      <!--<Button>{{$route.params.id}}</Button>-->
      <mu-raised-button v-bind:label="'查看结果' +　$route.params.id" class="demo-raised-button" primary/>
    </router-link>

    <mu-raised-button v-else-if="$route.params.id == 17" v-bind:label="'查看结果' +　$route.params.id" class="demo-raised-button" disabled/>
    <mu-raised-button v-else v-bind:label="'下一题' +　$route.params.id" class="demo-raised-button" disabled/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router/index.js'

export default {
  name: 'template',
  data() {
    return {
      msg: 'template',
      //routerId: this.$route.params.id,

    }
  },
  // methods: mapActions([
  //   'valueChange'
  // ]),
  // nextpage: function (ev) {
  //   console.log(ev)
  // }
  methods: {
    nextpage: function (ev) {
      if (ev < 17) {
        router.push({ name: 'question', params: { id: (parseInt(ev) + 1) } })
      } else {
        router.push({ name: 'result' })
      }
    },
    ...mapActions([
      'valueChange',
      'muta'
    ]),
    // nextQClick: function (nodesc) {
    //   this.$Notice.success({
    //     title: '下一题q' + this.$route.params.id,
    //     desc: nodesc ? '' : '下一题desc'
    //   });
    // },
    gotoResult: function () {
      this.$store.state.bottomNav = 'result'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-bottom: 70px;
}
h1,
h2 {
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
