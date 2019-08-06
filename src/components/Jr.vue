<template>
  <div>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <br><br>
    <div v-bind:class="{'class1': use}">
      v-bind:class 指令
    </div>
    <hr>
    <div><span style="color:black;" v-model="message">{{message}}</span></div>

    <button v-bind:disabled="isButtonDisabled" v-on:click="ok">Button</button>
    <input v-model="message" placeholder="edit me">
    <p>消息是: {{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br>
<!--    //v-model 单一复选框 布尔型-->
    <hr>
    <span>单一复选框 </span>
    <br>
    <input v-model="msg">
    <br>
    <input type="checkbox" id="checkbox" v-model="checked" :value="msg">
    <br>
    <label for="checkbox">{{ msg }}</label>
    <br>
<!--    .lazy必须回车才会更新所有绑定的-->
    .lazy修饰符:<input v-model.lazy="msg" >
    <br>
<!--    自动将用户的输入值转为数值类型-->
    <br>
    .number修饰符:<input v-model.number="msg" type="number">
    <br>
<!--    自动去除首尾空格-->
    .trim修饰符：<input v-model.trim="msg">
<!--    v-model 多选-->
    <br>
    <hr>
    <span>多选框 </span>
    <br>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedvalue">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedvalue">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedvalue">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedvalue }}</span>
    <br>
    <hr>
    单选框
    男<input type="radio" v-model="check" id="nan" value="男">
    女:<input type="radio" v-model="check" id="nv" value="女">
    <br>
    性别:<span> {{ check }}</span>
    <hr>
    <br>
    下拉框选择:<select v-model="option">
      <option v-for="op in list">{{op.option}}</option>
    </select>
    <span>{{option}}</span>

  </div>
</template>

<script>
    export default {
        name: "Jr",
        data(){
          return {
            rawHtml:"<span style='color:red'>这应该是红色</span>",
            use: false,
            isButtonDisabled:false,
            message:'666',
            checked:false,
            checkedvalue:[

            ],
            check:'',
            option:'',
            list:[
              {option:'变'},
              {option:'有'},
              {option:'钱'},
            ],
            msg:''
          }

        },
        methods:{
          ok:function () {
            this.message=Math.ceil(Math.random()*1000)
          }
        },
        mounted () {
          axios
            .get('https://www.runoob.com/try/ajax/json_demo.json')
            .then(response => (this.info = response))
            .catch(function (error) { // 请求失败处理
              console.log(error);
            });
        }
    }
    // var
</script>

<style>
  .class1{
    background: #444;
    color: #eee;
  }
  #dynamicId{
    background: #444;
    color: red;
  }
</style>
