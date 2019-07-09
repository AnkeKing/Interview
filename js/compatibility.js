//1. 兼容Fire Fox的文本超出显示省略号
if ($(".box-one").html().length > 30) {
    var str = $(".box-one").html().substring(0, 30);
    $(".box-one").html(str + "...");
}
//2.深拷贝
var obj = {
    name: "Cindy",
    age: 19
}
var arr = [1, 1, 2, 3];
function fun() {
    return "fun"
}
console.log(typeof arr.splice == "function");
//3.实现一个圆形的可点击区域
document.onclick = function (e) {
    var r = 50;  //圆的半径
    var x1 = 300, y1 = 300;
    var x2 = e.clientX,
        y2 = e.clientY;
    var len = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    //Math.sqrt() 方法可返回一个数的平方根。
    //Math.pow() 方法可以计算一个数的任意次根。
    console.log("???",len);
    if (len <= r) {
        console.log("Inner");
    } else {
        console.log("Outer");
    }
}
//4.闭包
function w(a){
    var sum=0;
    var all=0;
    return function (b){
        sum=a+b;
        return function(c){
            all=sum*c;
            console.log("all",all);
        }
    }
}
w(1)(5)(9);