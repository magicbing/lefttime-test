<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Table :columns="columns1"
           :data="data6"
           size="small"></Table>
  
  </div>
</template>

<script>
import data from '../util/mock';
import axios from 'axios'

export default {
  name: 'one1',
  data() {
    return {
      msg: '111',
      q1value: '1',
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          width: 100,
          fixed: ''
        },
        {
          title: '年龄',
          key: 'age',
          "sortable": true,
          filters: [
            {
              label: '大于20',
              value: 1
            },
            {
              label: '小于20',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.age > 20;
            } else if (value === 2) {
              return row.age < 20;
            }
          }
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render(row, column, index) {
            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
          }
        }
      ],
      data6: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
      })
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  },
  //启动json-server --watch
  mounted: function () {
    axios.get('http://mockjs.cn')
    .then(function (response) {
      console.table('response: ' + response.data);
      //console.log('response: ' + JSON.stringify(response));
    })
    .catch(function (error) {
      console.log(error);
    });
    // this.$http
    //   .get('http://localhost:3000/posts/1')
    //   .then(
    //     (response) => {
    //       //this.articles = response.data.subjects
    //       console.table(response.body)
    //     },
    //     (response) => {
    //       console.log(response)
    //     }
    //   )
    //   .catch(function (response) {
    //     console.log('catch: ' + response)
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
