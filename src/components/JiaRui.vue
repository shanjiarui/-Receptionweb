<template>
  <div>
    <span>{{osk}}</span>
    <p v-if="seen">现在你看到我了</p>
    <span>{{message}}</span>
    <br>
    <input v-model="num">+
    <input v-model="num1">={{parseInt(num)+parseInt(num1)}}
    <runoob></runoob>
    <test2></test2>
  </div>
</template>

<script>
import Button from './button.vue'
import Test from './test.vue'

export default {
     name: "JiaRui",
     components: {
       'runoob': Button,
       'test2':Test,
       // 'runoob2': Button2
     },
      data () {
        return {
          osk: '第一个信息',
          message: '第二个信息',
          num:0,
          num1:0,
          seen:true,


        }
      }

    }
</script>

<style scoped>

</style>
