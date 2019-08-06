var app=new Vue({
  el:'#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https:loaction/test.php')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
      console.log(error);
    });
  }
})

