import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

  0: { value: '', score: [-4, -3, -2, -1], option: [' a.码农（-4）；', 'b.市场/产品经理（-3）；', 'c.公关/媒介(-2)； ', 'd.设计（-1）' ], title: '1.你从事什么工作？' },
  1: { value: '', score: [+3, -1, -2], option: [' a.已婚（+3）；', 'b.未婚（-1）； ', 'c.恋爱中（-2） ' ], title: '2.你是否已婚？' },
  2: { value: '', score: [+0.5, -3], option: ['a.低（+0.5）； ', 'b.高（-3） ' ], title: '3.你如何评估你目前的压力？' },
  3: { value: '', score: [+1, -1, -3], option: ['a.4次以上（+1）； ', 'b.1-3次（-1）；', 'c.少于一次（-3）' ], title: '4.你一个月锻炼几次？' },
  4: { value: '', score: [-1, +1], option: ['a. 3-5个小时（-1）；', 'b. 6小时以上（+1）' ], title: '5.每天的睡眠时间？' },
  5: { value: '', score: [-5, -3, -2, -1, +2], option: ['a.帝都（-5）；', 'b.魔都（-3）； ', 'c.广深（-2）；', 'd.带暖气的一方（-1）；', 'e.不带暖气的一方（+2）' ], title: '6.你居住在什么地方？' },
  6: { value: '', score: [+2, -1, -2], option: ['a.低于40个小时（+2）； ', 'b.40个至50个小时（-1）；', 'c.50以上（-2）' ], title: '7.你一周工作多少小时？' },
  7: { value: '', score: [-3, -6, +1, -1], option: ['a.吸烟较少（-3）；', 'b.吸烟每天一盒及以上（-6）；', 'c.不吸烟(+1) ；', 'd.吸二手烟（-1）' ], title: '8.你吸烟或暴露在二手烟的环境？' },
  8: { value: '', score: [-1, -2, -3, -7, +2], option: ['a.每月啤酒不超过3杯（-1）；', 'b.每月超过3杯（-2）；', 'c.少于一次（-3）', 'c.经常白酒（-7）；', 'd.不喝 （+2）' ], title: '9.你经常饮酒吗？' },
  9: { value: '', score: [+2, +1, +0.5, -2], option: ['a.白水（+2）； ', 'b.茶（+1）； ', 'c.咖啡(+0.5) ；', 'd.碳酸饮料（-2）' ], title: '10.口渴了你会喝什么？' },
  10: { value: '', score: [+2, -1, -3, -1], option: ['a.不挑食（+2）；', 'b.只吃自己爱吃的（-1）；', 'c.只吃肉(-3)；', 'd.不吃肉（-1）' ], title: '11.你吃饭是否挑食？' },
  11: { value: '', score: [+1, -1], option: ['a.会（+1）； ', 'b.不会（-1）' ], title: '12.你会给自己减压吗？' },
  12: { value: '', score: [+0.5, -0.5], option: ['a.会（+0.5）；', 'b.不会（-0.5）' ], title: '13.你每天会补充钙？' },
  13: { value: '', score: [+1, +2, -1], option: ['a.干果（+1）；', 'b.水果（+2）；', 'c.甜食（-1）' ], title: '14.你会经常吃什么零食？' },
  14: { value: '', score: [+2, -1, -1, -4], option: ['a.完美（+2）；', 'b.偏瘦（-1）；', 'c.偏胖（-1）；', 'd.肥胖（-4）' ], title: '15.你的身材怎样？' },
  15: { value: '', score: [+0.5, -3], option: ['a.不是（+0.5）；', 'b.是（-3）' ], title: '16.经常性的便秘。' },
  16: { value: '', score: [+2, -3], option: ['a.没有（+2）；', 'b.有（-3）'], title: '17.你的直系亲属中从来没有患有糖尿病者、心脏病者或其它疾病？' },
  17: { value: '', score: [+2, -3], option: ['a.有（+2）；', 'b.没有（-3）' ], title: '18.你父母有活到90岁以上的' },

  total: {score: ''},
  count: 0
}

const mutations = {
  valueChange() {
    let totalvalue = 0;
    for ( let i=0; i<18; i++ ) {
      let _state = state[i]
      totalvalue += _state.score[_state.value]
    }
    //state.count++
    state.total.score = totalvalue

    console.log('totalvalue: ' + totalvalue )

  },
  muta() {
    state.count ++
  }
}

const actions = {
  valueChange: ({ commit }) => commit('valueChange'),
  muta: ({ commit }) => commit('muta')
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
