//
// // 弹出入库加 输入框
// // function inp() {
// //   // var inp = Number(prompt("请输入商品数量："));
// //   var inp = parseInt(prompt("请输入商品数量："));
// //   return inp;
// //   //转成Number，含字符会成为NaN
// // }
//
// // 入库加，点击加
// function add_goods(){
//   // 入库加   库存 = 入库 + 原库存
//   var temp;
//   // var stock = parseInt(document.getElementById("stock-goods").innerHTML) + inp();
//   // // console.log(parseInt(stock) + add());
//   // document.getElementById("stock-goods").innerHTML = stock;
// }
//
//
//   //加完之后携带 商品名 商品数量请求一次 后台,并刷新一次页面
//
//   //window.location.reload();
//
//   //出库减
// function red_goods(){
//   // var stock = parseInt(document.getElementById("stock-goods").innerHTML) - inp();
//   // if(stock>=0){
//   //   // console.log(stock);
//   //   document.getElementById("stock-goods").innerHTML = stock;
//   //   //减完之后 携带参数 请求一次 后台，并刷新
//   //
//   //   //window.location.reload();
//   // }else{
//   //   alert("库存量小于出货量,出货失败！");
//   // }
// }
//
//
//
// //页面加载完就展示数据库商品库存,动态过程 window.onload。
// //需要请求一次后端
// // window.onload = function(){
// //   var elem = document.getElementById("banner").parentNode;
// //   var new_elem = document.createElement("tr");
// //   new_elem.innerHTML = "<td>1</td><td>状元红1</td><td><input ></td><td><input></td><td>arr1[1]</td>"
// //   elem.appendChild(new_elem);
// // }
//
//
// //点击添加商品时，按键触发的事件函数。
// // 1.增加商品，需要传输数据给后端
// // 2.传递给后端后 ，在进行一次请求，展示数据
// $("#sd_add_goods")
//
//
// function add_goods1(){
//   var goods_name = String(prompt("请输入商品名称"));
//   var goods_number = parseInt(prompt("请输入商品数量"));
//
//   //创建ajax对象
//   // var xhttp = new XMLHttpRequest();
//   // //
//   // xhttp.onreadystatechange = function() {
//   //   if (this.readyState == 4 && this.status == 200) {
//   //
//   //   }
//   //
//   //   xhttp.open("POST", "/good/add_goods/", true);
//   //   xhttp.send(String);
//   // };
//
//   function create_tr(goods_name, goods_number){
//     // var form = document.createElement("form");
//     // form.method = "get";
//     // form.action = "#";
//
//
//     var elem = document.getElementById("tab");
//     var new_elem = document.createElement("tr");
//     var d1 = document.createElement("td");
//     d1.innerHTML = "序号2";
//     var d2 = document.createElement("td");
//     d2.innerText = goods_name;
//     var inp = document.createElement("input");
//     inp.type = "button";
//     inp.value = "+";
//     // inp.onclick=function add_goods(){};
//     // inp.onclick= function(){alert("ssddfsdf")};
//     // inp.addEventListener('onclick',add_goods());
//     // inp.addEventListener(type,add_goods,false);
//
//     var d3 = document.createElement("td");
//     var inp2 = document.createElement("input");
//     inp2.value = "-";
//     inp2.type = "button";
//     inp2.className = "inp_red";
//     // document.getElementsByClassName("inp_red").innerHTML = type = 'button', value = '-', onclick = red_goods();
//     d3.appendChild(inp);
//     var d4 = document.createElement("td");
//     // d4.innerText = "库存数量";
//     d4.appendChild(inp2);
//     var d5 = document.createElement("td");
//     d5.innerText = goods_number;
//     new_elem.appendChild(d1);
//     new_elem.appendChild(d2);
//     new_elem.appendChild(d3);
//     new_elem.appendChild(d4);
//     new_elem.appendChild(d5);
//     elem.appendChild(new_elem);
//     // new_elem.innerHTML = "<td>2</td><td>goods_name</td><td><input ></td><td><input></td><td>goods_number</td>";
//     new_elem.className = "new_add_goods";
//     // new_elem.innerHTML = "<td>2</td>" + "<td>商品名称2</td>" + "<input>" + "<td><input></td>" + "<td>goods_number</td>"
//     elem.appendChild(new_elem);
//     // new_elem.appendChild()
//
//       //刷新当前页面.
//   // window.location.reload();
//   }
//
//   if(goods_name && goods_number){
//     // console.log("1");
//     create_tr(goods_name, goods_number);
//       alert("录入商品成功");
//       console.log(goods_number, goods_name);
//       // 录入成功，通过ajax 传数据给后台
//
//     }else{
//     alert("数据缺失，录入失败!");
//     }
//   }
//
// function getFirstChild(){
//   var elemTr = document.getElementsByName("first_tr");
//   console.log(elemTr);
// }
//
// // 1.
// // 2.展示后台返回的记录
// function select_record(){
//   getFirstChild();
//   var old = document.getElementsByClassName("out-int")[0];
//
//   var tr = document.createElement("tr");
//   var td1 = document.createElement("td");
//   td1.innerText = "商品序号";
//   var td2 = document.createElement("td");
//   td2.innerText = "商品名称";
//   var td3 = document.createElement("td");
//   td3.innerText = "商品数量";
//   var td4 = document.createElement("td");
//   td4.innerText = "出库日期";
//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   tr.appendChild(td3);
//   tr.appendChild(td4);
//   old.appendChild(tr);
// }
//


var InitFun = {
  "initGoods": function () {
    // alert("zhang");
    $.ajax({
      type: "GET",
      url: "/good/all_goods/",
      async: true,
      success: function (data) {
        // console.log(data["data"]);
        var date = data["data"];
        // console.log(date);
        var html = `<tr class="banner">
          <td>序号</td>
          <td class="GoodsName">商品名称</td>
          <td>入库+</td>
          <td>出库-</td>
          <td>库存量(件)</td>
        </tr>`
        date.forEach(function (item, index) {
          // console.log(item.goods_name);
          // console.log(item.static_goods_number);
          html += `<tr>
          <td>${index + 1}</td>
          <td>${item.goods_name}</td>
          <td>
            <input type="button" value="+" 
            class="add_goods"
            onclick="add_goods()">
          </td>
          <td>
            <input type="button" value="-"
            class="red-goods" onclick="red_goods()">
          </td>
          <td  class="stock-goods">${item.static_goods_number}</td>
        </tr>`

        })
        $("#tab").html(html);
      },
      error: function () {
        alert("eeror")
      }
    })

  },
  "eventFun": function () {
    $("#sd_add_goods").click(function () {
      // alert(33);
      $("#add_goods_box").css("display", "block");
    })

    $("#back").click(function () {
      $("#add_goods_box").css("display", "none");
    })
    //添加商品的确定键
    $("#sure").click(function () {
      var add_goods_name = $("#add_goods_name").val();
      var add_goods_number = $("#add_goods_number").val();
      var temp = {"name": add_goods_name, "number": add_goods_number};
      console.log(temp)

      $.ajax({
        type: "POST",
        url: "/good/add_goods/",
        async: true,
        data: temp,
        success: function (data) {
          if (data.msg == "ER") {
            alert("名字或者数量为空")
          } else {
            $("#add_goods_box").css("display", "none");
            window.location.reload();
            // alert("suucess")
          }
        },
        error: function () {
          alert("eeror")
        }

      })
    })
    //点击加号键   事件代理
    $("body").on("click", ".add_goods", function () {
      var text = $(this).parent().prev().text();
      // console.log(text);
      // var inp = parseInt()
      var inp = prompt("请输入" + text + "数量：")
      console.log(inp);
      // console.log(inp);
      var temp = {"name": text, "number": inp}
      $.ajax({
        type: "POST",
        url: "/good/add_goods/",
        async: true,
        data: temp,
        success: function (data) {
          window.location.reload();
          // alert("suucess")
        },
        error: function () {
          alert("eeror")
        }
      })
    })

    //点击减号键的时候  事件代理
    $("body").on("click", ".red-goods", function () {

      var text = $(this).parent().prev().prev().text();
      console.log(text);
      var inp = prompt("请输入减少" + text + "的数量:");
      var temp = {"name": text, "number": inp}
      $.ajax({
        type: "POST",
        url: "/good/red_goods/",
        async: true,
        data: temp,
        success: function (data) {
          if (data.status == "OK") {
            window.location.reload();
          } else if (data.status == "ER") {
            alert(data.msg)
          }
          // alert("suucess")
        },
        error: function () {
          alert("eeror")
        }
      })

    })

    //点击查询出库数据
    $("#select_month").click(function () {
      $("#select_goods_box").css("display", "block");

    })


    //点击查询出库数据 框中的取消
    $("#select_back").click(function () {
      $("#select_goods_box").css("display", "none");
    })

    //点击查询出库数据弹框中的确定键
    $("#select_sure").click(function () {
      var select_year = $("#select_box_year").val();
      var select_month = $("#select_box_month").val();
      var temp = {"year": select_year, "month": select_month}
      // console.log(temp);
      $.ajax({
        type: "POST",
        url: "/good/select_out/",
        async: true,
        data: temp,
        success: function (data) {
          if (data.status == "ER") {
            alert(data.msg)
          } else {
            // console.log(data);
            var date = data["data"];
            console.log(date);

            var html = ` <tr name="first_tr">
                <td>序号</td>
                <td>商品名</td>
                <td>数量</td>
                <td>日期</td>
                </tr>`
            date.forEach(function (item, index) {
              // console.log(index, item.name)

              html += ` <tr>
                <td>${index +1}</td>
                <td>${item.name}</td>
                <td>${item.count}</td>
                <td>${item.date}</td>
                </tr>`
              // console.log($(".out-int"));
              console.log($("#out_int"));
              $("#out_int").html(html);
              // $(".out-int")[0].append("html");
              $("#select_goods_box").css("display", "none");
            })

          }
        },
        error: function () {
          alert("eeror")
        }
      })
    })


    //查询 入库数据
    $("#select_goods_year").click(function () {
      $("#select_red_goods_year").css("display","block");
    })

    //点击查询入库数据弹框中的取消
    $("#select_red_back").click(function () {
      $("#select_red_goods_year").css("display", "none");
    })

    //点击查询入库数据弹框中的确定
    $("#select_red_sure").click(function () {
      var select_year = $("#select_red_year").val();
      var select_month = $("#select_red_month").val();
      var temp = {"year": select_year, "month": select_month}
      // console.log(temp)
      $.ajax({
        type: "POST",
        url: "/good/select_in/",
        async: true,
        data: temp,
        success: function (data) {
          var date = data["data"];
          if (data.status == "ER") {
            alert(data.msg);
          } else {
            // console.log(data["data"][0]);
            var html = `<tr name="first_tr">
              <td>序号</td>
              <td>商品名</td>
              <td>数量</td>
              <td>日期</td>
              </tr>`

            date.forEach(function (item, index) {
              html += `<tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.count}</td>
                <td>${item.date}</td>
                </tr>`

              $("#out_int").html(html);
              $("#select_red_goods_year").css("display", "none");
            })
          }
        },
        error: function () {
          alert("eeror")
        }
      })
    })
  }
}


$(function () {
  InitFun.initGoods();
  InitFun.eventFun();
})










