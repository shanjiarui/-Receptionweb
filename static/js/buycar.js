function jia(i) {
  // console.log(localStorage.getItem("token"))
  $.ajax({
    url:"http://localhost/blog/public/api/add_num",
    data:{
      id:i,
      token:localStorage.getItem("token")
    },
    type:"post",
    dataType:'json',
    success:function (res) {
      // console.log(res)
      // console.log(res.data[0].num)
      var price=parseInt(res.data[0].num) * parseInt(res.data[0].price)
      $("#p"+i).val(res.data[0].num)
      $("#k"+i).html("￥"+price)
      che()
    }
  })
}
function jian(i) {
  // console.log(localStorage.getItem("token"))
  $.ajax({
    url:"http://localhost/blog/public/api/down_num",
    data:{
      id:i,
      token:localStorage.getItem("token")
    },
    type:"post",
    dataType:'json',
    success:function (res) {
      var price=parseInt(res.data[0].num) * parseInt(res.data[0].price)
      $("#p"+i).val(res.data[0].num)
      $("#k"+i).html("￥"+price)
      che()
    }
  })
}
function che() {
  var arr=document.getElementsByName("check")
  check_val = [];
  for(k in arr){
    if(arr[k].checked)
      check_val.push(arr[k].value);
  }
  $.ajax({
    url:"http://localhost/blog/public/api/all_price",
    data:{
      arr:check_val,
      token:localStorage.getItem("token")
    },
    type:"post",
    dataType:'json',
    success:function (res) {
      console.log(res.data)
      $("#all_price").html("商品总价：<b style='font-size:22px; color:#ff4e00;'>￥"+res.data+"</b>")
    }
  })
}
